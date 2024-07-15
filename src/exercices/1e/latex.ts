import engine from '../../lib/interactif/comparisonFunctions'
import type { BoxedExpression } from '@cortex-js/compute-engine'

function estNombre(expr: BoxedExpression): boolean {
  // On passe par la forme canonique
  return engine.box(expr).isReal
}

function parse(expr: SemiBoxedExpression): BoxedExpression {
  const removeDelim = expr => (expr.head === 'Delimiter') ? (expr.ops[0]) : expr
  let boxed =  (typeof expr === 'string')
    ? engine.parse(expr, {canonical: false})
    : engine.box(expr, {canonical: false})
  return boxed.map(removeDelim, {canonical: false, recursive: true})}

function addFormat (e: BoxedExpression, i: number) {
  let txt = latex(e)
  if (e.head === 'Add') return `+\\left(${txt}\\right)` // Addition nestée
  if (i == 0) return `${txt}`;
  return (txt[0] == '-') ? `${txt}` : `+${txt}`
}

function mulFormat (e: BoxedExpression, i: number) {
  let txt = latex(e)
  if ((e.head === 'Divide') || (e.head === 'Power')) return `${txt}` // Pas besoin de parenthèses avec une fraction
  if (e.ops !== null) return `\\left(${txt}\\right)` // Expression nestée entre parenthèse
  if (i == 0) return `${txt}`; // le premier facteur est tel quel
  // les facteurs suivants sont entre parenthèse s'ils commencent par un signe '-'
  return (txt[0] == '-') ? `\\left(${txt}\\right)` : `${txt}` 
}


function latex(expr: BoxedExpression): string {

  // La version latex, sans fioriture, de la BoxedExpression
  if (expr === null) return '';
  // Lorsqu'un nombre est exprimé une fraction sous forme de fraction
  if ((expr.head === 'Number') && (expr.isRational) && !(expr.isInteger)) {
    return `\\dfrac{${expr._value[0]}}{${expr._value[1]}}`
  }
  if (expr.ops === null) return `${expr}`// un nombre quelconque ou un symbole
  if (expr.head === 'Negate') {
    let op = expr.op1
    // Négation d'une multiplication :
    // on met le premier terme entre parenthèses lorsque celui
    // ci comment par un '-', pour ne pas avoir --8*3...
    if (op.head === 'Multiply') {
      let args = op.ops.map((e, i) => mulFormat(e, i))
      args[0] = (args[0][0] == '-') ? `\\left(${args[0]}\\right)` : args[0]
      return "-" + args.join('')
    }
    // Pas besoin de parenthèses lorsque -(3/4) avec une fraction
    if ((op.head === 'Divide') || (op.head === 'Rational')){
      return `-${latex(op)}`
    }
    return `-\\left(${latex(expr.op1)}\\right)`
  }
  if (expr.head === 'Add') {
    if (expr.ops === null) return '';
    let args = expr.ops.map((e, i) => addFormat(e, i))
    return args.join('')
  }
  if (expr.head === 'Multiply') {
    if (expr.ops === null) return '';
    let args = expr.ops.map((e, i) => mulFormat(e, i)) // version textuelle des facteurs
    // si deux facteurs qui sont des nombres se suivent : on indique \\times
    for (let i = 0; i < args.length - 1 ; i++){
      if (((!estNombre(expr.ops[i])) && (estNombre(expr.ops[i + 1]))) || ((estNombre(expr.ops[i])) && (estNombre(expr.ops[i + 1]))))
      {
	args[i] += '\\times'
      }
    }
    // On supprime les 1 et -1 inutiles en tête de multiplication
    let sgn = ''
    if ((args[0] === '1') || (args[0] === '1\\times') || (args[0] === '-1') || (args[0] === '-1\\times')) {
      sgn = (args.shift() < 0) ? '-' : ''
    }
    return sgn + args.join('')
  }
  if ((expr.head === 'Divide') || (expr.head === 'Rational')) {
    return `\\dfrac{${latex(expr.op1)}}{${latex(expr.op2)}}`
  }
  if (expr.head === 'Power') {
    let a = latex(expr.op1)
    a = (expr.op1.ops !== null) ? `(${a})` : a
    let b = latex(expr.op2)
    return `${a}^{${b}}`
  }
}

export { parse, latex } ;

// let test = parse("1")
// test = parse("1 + 2 + 3")
// test = parse("-(-3 + 2)")
// test = parse('3 + 2 + -4*(-5)')
// test = parse('3 - (-1)*(5 + x)*16*(x - 3)*(x + 2)*3')
// test = parse('3*x - 2*p + 1')
// test = parse('-(-5*a + 4*a - 1)')
// test = parse('(-5*x - 8)')
// test = parse('3*a + (-5*a - 8)')
// test = parse('-1 - (-8*y + 7)')
// test = parse('(7*x + 1)*(-4*x)')
// test = parse('1-8*x*(7*x + 1)*(-4*x)')
// test = parse('3/4')
// test = parse('-(3/4)')
// test = parse('3/(-4)')
// test = parse('2-3/4')
// test = parse('2+-3/4')
// test = parse('2-(3/4)')
// test = parse('2-(5/16)*(x - 1)*(x + 2)')
// test = parse('(-2*x*3)*(11*x - 8)')
// test = parse('(-2*x*3)')
// test = parse('-2*x*3*(3*x - 1)*2*3*3/2')
// test = parse('-2*x^2*3*(3*x - 1)^2*3*3/2')
// log(test.latex)
// Log(test)
// Log(latex(test))
// test = parse('x')
// log(test.ops)
// Log(test)
// Log(estNombre(parse("5/6 + 1")))
// Log(estNombre(test))

// return expr.toLatex({
//   prettify: false,
//   invisiblePlus: "+",
//   fractionStyle: () => "block-quotient",
//   applyFunctionStyle: () => 'scaled',
//   groupStyle: () => 'scaled'
// })

import engine from '../../lib/interactif/comparisonFunctions'
import type { BoxedExpression, SemiBoxedExpression } from '@cortex-js/compute-engine'
import { parse, latex } from './latex'

/* Supprime op des opérandes de expr. Renvoie null si op n’est pas une des opérandes */
function removeFromOps (expr: BoxedExpression, op: BoxedExpression): BoxedExpression | null {
  if (expr.ops === null) {
    return null
    // throw new Error(`${expr} : pas une fonction`)
  }
  const i = expr.ops.findIndex((o: BoxedExpression) => o.isSame(op))
  return (i >= 0) ? engine.box([expr.head].concat(expr.ops.toSpliced(i, 1))) : null
}

function factoriserPar (expr: BoxedExpression, term: string): BoxedExpression {
  // Appel : factoriserPar(engine.parse("2ax + x + 1"), "x")
  if (expr.ops === null) return expr;
  if (expr.head !== 'Add') return engine.box([expr.head].concat(expr.ops.map(e => factoriserPar(e, term))));
  expr = removeNegate(expr) // On s'assure de n'avoir *aucun* negate
  // log("EXPRESSION : " + expr.latex)
  // log(expr)
  let n = 0
  let sommeAutreFacteurs = ['Add']
  let sommeReste = ['Add']
  term = engine.parse(term)
  for (let t of expr.ops) {
    if (t.isSame(term)){
      n += 1
    }
    // TODO : cas produit(term)/denum
    // else if (t.head === 'Divide') {
    //   const num = t.ops[0]
    //   const denum = t.ops[1]
    //   let numSans = removeFromOps(num, term) 
    //   if (reste === null) {
    //     sommeReste.push(t)
    //   } else {
    //     sommeAutreFacteurs.push(['Divide', numSans, denum])
    //   }
    // }
    else if (t.head === 'Multiply') {
      let reste = removeFromOps(t, term) 
      if (reste === null) {
	sommeReste.push(t)
      } else {
	sommeAutreFacteurs.push(reste)
      }
    } else {
      // term n'est pas un facteur de t
      sommeReste.push(t)
    }
  }
  if (n > 0) sommeAutreFacteurs.push(n);
  if (sommeAutreFacteurs.length === 1) return expr; // Aucune factorisation n'a été trouvée
  return engine.box(['Add',
		     sommeReste,
		     engine.box(['Multiply', sommeAutreFacteurs, term])])
}

function simplifierFractionPar (expr: BoxedExpression, term: SemiBoxedExpression): BoxedExpression {
  if (expr.head !== 'Divide') {
    return expr
  }
  term = parse(term)
  const num = expr.ops[0]
  const denum = expr.ops[1]
  // factorisation impossible expr not n’est pas du type :
  // produit(term)/term, term/produit(term), ou produit(term)/produit(term)
  // TODO : à tester
  if ((!(num.isSame(term)) && (num.head !== 'Multiply')) || (!(denum.isSame(term)) && (denum.head != 'Multiply'))) {
    return expr
  }
  // on supprime le terme de la liste des facteurs du numérateur
  // on laisse 1 si le numérateur est le terme à simplifier
  let numSans = (num.isSame(term)) ? parse(1) : null
  const restenum = removeFromOps(num, term)
  numSans ??= (restenum === null) ? num : restenum
  // même chose au dénominateur
  let denumSans = (denum.isSame(term)) ? parse(1) : null
  const restedenum = removeFromOps(denum, term)
  denumSans ??= (restenum === null) ? denum : restedenum

  return parse(['Divide', numSans, denumSans])
}

function powerRule (expr: BoxedExpression): BoxedExpression {
  // (Produit(ai))^n = Produit((ai^n))
  if (expr.ops === null){
    return expr
  } else if ((expr.head) !== 'Power'){
    return engine.box([expr.head].concat(expr.ops.map(e => powerRule(e))))
  } else if (expr.ops[0].head !== 'Multiply'){
    return expr
  }
  const n = expr.ops[1]
  const args = expr.ops[0].ops?.map((e => engine.box(["Power", e, n])))
  return engine.box(['Multiply'].concat(args))
}

function developper(expr: BoxedExpression, term: BoxedExpression): BoxedExpression{
  // Développe term dans expr
  if (expr.ops === null) {
    return expr
  }
  if (!expr.isSame(term)) {
    return engine.box([expr.head].concat(expr.ops.map(e => developper(e, term))))
  }
  return engine.box(["Expand", [expr.head].concat(expr.ops)]).evaluate()
}

function reduire(expr: BoxedExpression): BoxedExpression{
  if (expr.ops === null) return expr;
  if (expr.head !== 'Add') return engine.box([expr.head].concat(expr.ops.map(e => reduire(e)))) ;
  expr = removeNegate(expr) // On s'assure de n'avoir *aucun* negate
  // log("EXPRESSION : " + expr.latex)
  // log(expr)
  // Add(..., a, ..., Negate(a), ...) ~> Add(..., ..., ...)
  // On parcourt tous les arguments. On supprime toutes les paires de a, Negate(a)
  let actualargs = expr.ops?.slice();
  // for (a of expr.ops){
  //   actualargs.push(a)
  // }
  let filteredargs = []

  while (actualargs.length > 0) {
    a = actualargs.shift()
    filteredargs.push(a)
    // Bizarre. Mais il faut bien ça pour se débarrasser des Negates....
    let minusa = removeNegate(engine.box(["Multiply", -1, a], {canonical: 'Flatten'}).evaluate())
    // log("a = " + a.latex)
    // log(a)
    // log("-a = " + minusa.latex)
    // log(minusa)
    for (let i = 0; i < actualargs.length; i++){
      let autre = actualargs[i]
      // log("AUTRE ARGUMENT = " + autre.latex)
      // log(autre)
      if (minusa.isSame(autre)) {
	// log(`match de ${a} et ${actualargs[i]}`)
	actualargs = actualargs.toSpliced(i, 1)
	filteredargs.pop()
	break
      }
    }
  }

  return engine.box([expr.head].concat(filteredargs), {canonical: false})
}

function removeNegate(expr: BoxedExpression): BoxedExpression {
  if (expr.ops === null) return expr;
  if (expr.head !== 'Negate') return engine.box([expr.head].concat(expr.ops.map(e => removeNegate(e))), {canonical: 'Flatten'}) ;

  if (expr.op1.head == 'Multiply') return engine.box(['Multiply', -1].concat(expr.op1.ops), {canonical: false}) ;
  return engine.box(['Multiply', -1].concat(expr.ops), {canonical: false})
}

function getCoeffMonomial(expr: BoxedExpression, inc = 'x') {
  expr = removeNegate(engine.box(expr)) // Mise sous forme canonique sans Negate
  let n = ['Add']
  let coeff = ['Multiply']
  for (let f of expr.ops){
    if (f.head === 'Power'){
      n.push(f.op2)
    } else if (f.has(inc)) {
      n.push(1)
    } else {
      coeff.push(f)
    }
  }
  return [parse(coeff).evaluate(), parse(n).evaluate()]
}

function getCoeff(expr: BoxedExpression, inc = 'x', degre= -1){
  let coefs = [] // Coefficient de degré >= 1 en inc
  let cte = ['Add'] // Coefficient de degré 0 en inc
  for (let t of expr.ops){
    if (t.has(inc)) {
      coefs.push(getCoeffMonomial(t, inc=inc))
    } else {
      cte.push(t)
    }
  }
  coefs.push([engine.box(cte), parse(0)])
  if (degre >= 0){
    const coefs_tries = coefs.toSorted((a, b) => Number(a[1]) - Number(b[1]))
    return coefs_tries[degre][0]
  }
  return coefs
}

export { removeFromOps, removeNegate, developper, factoriserPar, powerRule, reduire, simplifierFractionPar, getCoeff } ;

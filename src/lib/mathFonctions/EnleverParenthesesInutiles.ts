import { ComputeEngine, type Expression } from '@cortex-js/compute-engine'
const ce = new ComputeEngine()

/* ---------------- helpers ---------------- */

function isArray(x: unknown): x is any[] {
  return Array.isArray(x)
}

function isNumberNode(x: Expression, v?: number): boolean {
  return (
    (!isArray(x) &&
      typeof x === 'number' &&
      (v === undefined ? true : x === v)) ||
    (isArray(x) && x[0] === 'Number' && (v === undefined ? true : x[1] === v))
  )
}

/*
function numberAbsNode(x: Expression): Expression {
  if (!isArray(x)) return Math.abs(x as number)
  if (x[0] === 'Number') return ['Number', Math.abs(x[1] as number)]
  return x
}
*/

/* ---------------- simplification (mathjson) ----------------
   conserve l'ordre, supprime 1×, transforme -1×x -> Negate(x),
   supprime Delimiter autour de simple nombres/symboles,
   etc.
*/
function simplifyMathJson(node: Expression): Expression {
  if (!isArray(node)) return node
  const op = node[0] as string
  const rawArgs = node.slice(1) as Expression[]
  const args = rawArgs.map(simplifyMathJson)

  // helpers local
  const isZero = (x: Expression) => isNumberNode(x, 0)
  const isOne = (x: Expression) => isNumberNode(x, 1)
  const isMinusOne = (x: Expression) => isNumberNode(x, -1)

  switch (op) {
    case 'Delimiter': {
      // ["Delimiter","(", inner, ")"] or ["Delimiter", inner]
      const inner = args.length >= 2 && isArray(args[1]) ? args[1] : args[0]
      return simplifyMathJson(inner as Expression)
    }

    case 'InvisibleOperator':
    case 'Multiply': {
      // flatten multiply/invisibleoperator
      const flat: Expression[] = []
      for (const a of args) {
        if (
          isArray(a) &&
          (a[0] === 'Multiply' || a[0] === 'InvisibleOperator')
        ) {
          flat.push(...(a.slice(1) as Expression[]))
        } else flat.push(a)
      }

      if (flat.some(isZero)) return ['Number', 0]

      // -1 * x  => Negate(x)
      if (flat.length === 2 && isMinusOne(flat[0])) return ['Negate', flat[1]]
      if (flat.length > 2 && isMinusOne(flat[0]))
        return ['Negate', ['Multiply', ...flat.slice(1)]]

      // remove 1s
      const filtered = flat.filter((x) => !isOne(x))
      if (filtered.length === 0) return ['Number', 1]
      if (filtered.length === 1) return filtered[0]
      return ['Multiply', ...filtered]
    }

    case 'Add': {
      // flatten adds, remove zeros
      const flat: Expression[] = []
      for (const a of args) {
        if (isArray(a) && a[0] === 'Add')
          flat.push(...(a.slice(1) as Expression[]))
        else flat.push(a)
      }
      const filtered = flat.filter((x) => !isZero(x))
      if (filtered.length === 0) return ['Number', 0]
      if (filtered.length === 1) return filtered[0]
      return ['Add', ...filtered]
    }

    case 'Divide': {
      // keep order; simplify children already done
      return ['Divide', args[0], args[1]]
    }

    case 'Negate':
      return ['Negate', args[0]]

    default:
      return [op, ...args]
  }
}

/* ---------------- serializer MathJSON -> LaTeX ----------------
   - préserve l'ordre
   - pour Multiply: si facteur est négatif (Number < 0) ou Negate(...),
     on émet '-(... )' (ex: '5\\times-(16)')
   - pour Divide: si denominateur est negative number or Negate -> '\\div-(...)'
   - pour Add: '... + Negate(x)' -> '...-x'
   - n'affiche jamais 'InvisibleOperator' littéral (juxtaposition)
*/
function mathJsonToLatex(node: Expression): string {
  if (!Array.isArray(node)) return String(node)

  const getOp = (n: Expression) =>
    Array.isArray(n) && typeof n[0] === 'string' ? (n[0] as string) : null

  function toLatex(n: Expression): string {
    if (!Array.isArray(n)) return String(n)

    const op = n[0] as string
    const args = n.slice(1) as Expression[]

    switch (op) {
      case 'Number':
        return String(args[0])
      case 'Symbol':
      case 'String':
        return String(args[0])

      case 'Negate': {
        const inner = args[0]
        const innerOp = getOp(inner)
        if (innerOp === 'Add') return `-(${toLatex(inner)})`
        return '-' + toLatex(inner)
      }

      case 'Add': {
        if (args.length === 0) return '0'
        let out = toLatex(args[0])
        for (let i = 1; i < args.length; i++) {
          const term = args[i]
          const termOp = getOp(term)
          if (termOp === 'Negate') {
            out += '-' + toLatex((term as unknown as Expression[])[1])
          } else if (
            isArray(term) &&
            term[0] === 'Multiply' &&
            isNumberNode(term[1], -1)
          ) {
            out += '-' + toLatex((term as Expression[])[2])
          } else if (
            isArray(term) &&
            term[0] === 'InvisibleOperator' &&
            isNumberNode(term[1], -1)
          ) {
            out += '-' + toLatex((term as Expression[])[2])
          } else {
            out += '+' + toLatex(term)
          }
        }
        return out
      }

      case 'Multiply': {
        // For each factor, decide how to print negatives:
        // - if factor is ['Number', n<0] and idx === 0 -> "-<abs>"
        // - if factor is ['Number', n<0] and idx > 0 -> "(-<abs>)"
        // - if factor is ['Negate', X] -> similar: idx===0 => -X, else => (-X)
        const parts = args.map((a, idx) => {
          // literal negative number
          if (
            Array.isArray(a) &&
            a[0] === 'Number' &&
            typeof a[1] === 'number' &&
            a[1] < 0
          ) {
            const absVal = Math.abs(a[1] as number)
            return idx === 0 ? `-${absVal}` : `(-${absVal})`
          }
          // raw JS number negative (unlikely in MathJSON but safe)
          if (!Array.isArray(a) && typeof a === 'number' && a < 0) {
            const absVal = Math.abs(a as number)
            return idx === 0 ? `-${absVal}` : `(-${absVal})`
          }
          // Negate(inner)
          if (Array.isArray(a) && a[0] === 'Negate') {
            const inner = a[1]
            // if first factor: "-<inner>"
            if (idx === 0) {
              // if inner is Add, keep parentheses: -(<sum>)
              return getOp(inner) === 'Add'
                ? `-(${toLatex(inner)})`
                : `-${toLatex(inner)}`
            }
            // else: "(-<inner>)"
            return `(-${toLatex(inner)})`
          }
          // if factor is Add/Subtract -> parenthesize
          const childOp = getOp(a)
          if (childOp === 'Add' || childOp === 'Subtract')
            return `(${toLatex(a)})`
          // InvisibleOperator -> juxtaposition (handled recursively)
          if (childOp === 'InvisibleOperator' && Array.isArray(a)) {
            return (a as Expression[]).slice(1).map(toLatex).join('')
          }
          return toLatex(a)
        })
        return parts.join('\\times')
      }

      case 'InvisibleOperator':
        return (n.slice(1) as Expression[]).map(toLatex).join('')

      case 'Divide': {
        const left = args[0]
        const right = args[1]

        // If denominator is Negate(...) or Multiply starting with -1 or Number negative,
        // render denominator so that negative factor is parenthesized: e.g. 5\times(-16)
        if (Array.isArray(right)) {
          if (right[0] === 'Negate') {
            // const inner = right[1]
            // if inner is simple number -> show -<num> without extra parentheses unless needed in product
            return `\\frac{${toLatex(left)}}{${toLatex(right)}}`.replace(
              /\\frac\{(.+?)\}\{-(.+?)\}/,
              (_m, num, den) => `\\frac{${num}}{-${den}}`,
            )
          }
          if (
            right[0] === 'Multiply' &&
            Array.isArray(right[1]) &&
            right[1][0] === 'Number' &&
            typeof right[1][1] === 'number' &&
            right[1][1] < 0
          ) {
            // ['Multiply', ['Number', -16], ...] -> ensure factor printed as (-16) when not first in product
            // We'll rely on Multiply's printing to parenthesize appropriately; just prefer \frac form
            return `\\frac{${toLatex(left)}}{${toLatex(right)}}`
          }
          if (
            right[0] === 'Number' &&
            typeof right[1] === 'number' &&
            right[1] < 0
          ) {
            const absNode: Expression = ['Number', Math.abs(right[1] as number)]
            return `\\frac{${toLatex(left)}}{-${toLatex(absNode)}}`
          }
        }

        // decide between \frac and \div: if numerator or denominator complex -> \frac, else \div
        const leftOp = getOp(left)
        const rightOp = getOp(right)
        const complexLeft =
          leftOp === 'Add' ||
          leftOp === 'Subtract' ||
          leftOp === 'Multiply' ||
          leftOp === 'InvisibleOperator'
        const complexRight =
          rightOp === 'Add' ||
          rightOp === 'Subtract' ||
          rightOp === 'Multiply' ||
          rightOp === 'InvisibleOperator'

        if (complexLeft || complexRight) {
          return `\\frac{${toLatex(left)}}{${toLatex(right)}}`
        }
        return `${toLatex(left)}\\div${toLatex(right)}`
      }

      case 'Power': {
        const base = args[0]
        const exp = args[1]
        return `${toLatex(base)}^{${toLatex(exp)}}`
      }

      default:
        return `${op}\\left(${args.map(toLatex).join(',')}\\right)`
    }
  }

  return toLatex(node)
}

/* ---------------- main: deparenthise ----------------
   - normalize \dfrac -> \frac for parsing, but count occurrences
   - parse, simplify, serialize
   - restore \dfrac occurrences count at the end
*/
export function deparenthise(latexIn: string): string {
  // count and normalize \dfrac
  const dfracMatches = latexIn.match(/\\dfrac\b/g)
  const dfracCount = dfracMatches ? dfracMatches.length : 0
  const normalized = latexIn.replace(/\\dfrac\b/g, '\\frac')

  // parse (canonical: false to preserve order)
  const boxed = ce.parse(normalized, { canonical: false })
  const mathJson = boxed.json as Expression

  // simplify (remove Delimiter, 1*, -1*, zeros, preserve order)
  const simplified = simplifyMathJson(mathJson)

  // serialize back to LaTeX
  let result = mathJsonToLatex(simplified)

  // restore dfrac occurrences (replace first dfracCount occurrences of \frac{ by \dfrac{)
  if (dfracCount > 0) {
    let replaced = 0
    result = result.replace(/\\frac\{/g, (m) => {
      replaced++
      return replaced <= dfracCount ? '\\dfrac{' : '\\frac{'
    })
  }

  return result
}

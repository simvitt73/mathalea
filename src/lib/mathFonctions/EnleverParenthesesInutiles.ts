import { ComputeEngine, type Expression } from '@cortex-js/compute-engine'
const ce = new ComputeEngine()

/**
 * Convertit récursivement une structure **MathJSON** (issue de Compute Engine)
 * en une chaîne LaTeX, tout en **préservant strictement l'ordre original**
 * des opérandes et sans appliquer de canonicalisation.
 *
 * Contrairement à `BoxedExpression.toLatex()`, cette fonction :
 *  - ne réordonne pas les opérandes commutatifs (`Multiply`, `Add`, etc.)
 *  - ne remplace pas `Divide` par `\frac{}` (utilise `\div` à la place)
 *  - supprime les nœuds `"Delimiter"` inutiles
 *
 * @param node - Un nœud MathJSON (`Expression`) obtenu via `boxed.json`
 * @returns Une chaîne LaTeX respectant l'ordre d'écriture d'origine
 *
 * @example
 * ```ts
 * const expr = ce.parse('3+(4\\times2)', { canonical: false }).json;
 * mathJsonToLatex(expr); // ➜ "3+4\\times2"
 *
 * const expr2 = ce.parse('(3+4)\\times2', { canonical: false }).json;
 * mathJsonToLatex(expr2); // ➜ "(3+4)\\times2"
 * ```
 */
function mathJsonToLatex(node: Expression): string {
  const PREC: Record<string, number> = {
    Sequence: 0,
    Add: 1,
    Subtract: 1,
    Multiply: 2,
    Divide: 2,
    Power: 3,
    Negate: 4,
    Symbol: 5,
    Number: 5,
    String: 5,
  }

  const isArray = Array.isArray

  /**
   * Retourne le LaTeX d’un sous-terme, en ajoutant des parenthèses
   * si sa priorité est inférieure à celle de l’opérateur parent.
   *
   * @param child - Sous-expression à afficher
   * @param parentOp - Nom de l’opérateur parent
   * @returns Chaîne LaTeX éventuellement parenthésée
   */
  function wrapIfNeeded(child: Expression, parentOp: string): string {
    const s = toLatex(child)
    const childOp = getOp(child)
    if (!childOp) return s
    const childPrec = PREC[childOp] ?? 5
    const parentPrec = PREC[parentOp] ?? 5
    return childPrec < parentPrec ? `\\left(${s}\\right)` : s
  }

  /**
   * Renvoie le nom de l’opérateur (`Add`, `Multiply`, etc.) d’un nœud,
   * ou `null` s’il ne s’agit pas d’une structure de type `["Op", ...]`.
   */
  function getOp(n: Expression): string | null {
    if (!isArray(n)) return null
    return typeof n[0] === 'string' ? n[0] : null
  }

  /**
   * Conversion récursive du MathJSON en LaTeX brut.
   */
  function toLatex(n: Expression): string {
    if (!isArray(n)) return String(n)

    const op = n[0] as string
    const args = n.slice(1) as Expression[]

    switch (op) {
      case 'Number':
      case 'Real':
      case 'Integer':
      case 'String':
      case 'Symbol':
        return String(args[0])

      case 'Sequence':
        return args.map(toLatex).join(',')

      case 'Add':
        return args.map((a) => wrapIfNeeded(a, 'Add')).join(' + ')

      case 'Subtract':
        if (args.length === 1) return '-' + toLatex(args[0])
        return args
          .map((a, i) =>
            i === 0
              ? wrapIfNeeded(a, 'Subtract')
              : ` - ${wrapIfNeeded(a, 'Subtract')}`,
          )
          .join('')

      case 'Multiply':
        return args
          .map((a) => {
            const childOp = getOp(a)
            if (childOp === 'Add' || childOp === 'Subtract')
              return `\\left(${toLatex(a)}\\right)`
            return toLatex(a)
          })
          .join('\\times')

      case 'Divide': {
        if (args.length === 2) {
          const left = wrapIfNeeded(args[0], 'Divide')
          const right = wrapIfNeeded(args[1], 'Divide')
          // Préserve la forme infixée a \div b
          return `${left}\\div${right}`
        }
        return args.map(toLatex).join('\\div')
      }

      case 'Power': {
        const base = wrapIfNeeded(args[0], 'Power')
        const exp = toLatex(args[1])
        return `${base}^{${exp}}`
      }

      case 'Negate':
        return '-' + toLatex(args[0])

      case 'Delimiter':
        // ["Delimiter", "(", inner, ")"] ou ["Delimiter", inner]
        return toLatex(args.length === 1 ? args[0] : args[1])

      default: {
        // Cas générique : fonctions non reconnues
        const name = op.toLowerCase()
        const funcMap: Record<string, string> = {
          sin: '\\sin',
          cos: '\\cos',
          tan: '\\tan',
        }
        if (funcMap[name]) {
          return `${funcMap[name]}\\left(${args.map(toLatex).join(',')}\\right)`
        }
        return `${op}\\left(${args.map(toLatex).join(',')}\\right)`
      }
    }
  }

  return toLatex(node)
}

/**
 * Supprime récursivement les nœuds `"Delimiter"` dans une structure MathJSON,
 * afin d’éliminer les parenthèses superflues tout en préservant la hiérarchie logique.
 *
 * @param node - Nœud MathJSON à nettoyer
 * @returns Expression sans opérateurs "Delimiter"
 *
 * @example
 * ```ts
 * stripDelimiter(["Add", 3, ["Delimiter", "(", ["Multiply", 4, 2], ")"]])
 * // ➜ ["Add", 3, ["Multiply", 4, 2]]
 * ```
 */
function stripDelimiter(node: Expression): Expression {
  if (!Array.isArray(node)) return node
  const arr = node as [string, ...Expression[]]
  const op = arr[0]

  if (op === 'Delimiter') {
    if (arr.length >= 3 && Array.isArray(arr[2]))
      return stripDelimiter(arr[2] as Expression)
    if (arr.length >= 2) return stripDelimiter(arr[1] as Expression)
  }

  const rest = arr.slice(1).map((x) => stripDelimiter(x as Expression))
  return [op, ...rest] as Expression
}

/**
 * Supprime les parenthèses inutiles d’une expression LaTeX,
 * sans changer l’ordre des opérandes, ni transformer les opérateurs (`×`, `÷`, etc.).
 *
 * Cette fonction :
 *  - Parse le LaTeX en MathJSON (`{ canonical: false }`)
 *  - Supprime les `"Delimiter"` internes
 *  - Re-sérialise via `mathJsonToLatex()` sans réécriture
 *
 * @param latex - Expression LaTeX source (ex: `"3+(4\\times2)"`)
 * @returns Chaîne LaTeX équivalente sans parenthèses superflues
 * @author Eric Elter (avec l'aide de l'IA de ComputeEngine)
 * @date 28/10/2025
 * @example
 * ```ts
 * deparenthise('3+(4\\times2)');   // ➜ "3+4\\times2"
 * deparenthise('(3+4)\\times2');   // ➜ "(3+4)\\times2"
 * deparenthise('3+(4\\div2)');     // ➜ "3+4\\div2"
 * ```
 */
export function deparenthise(latex: string): string {
  const boxed = ce.parse(latex, { canonical: false })
  const mathJson = boxed.json
  const stripped = stripDelimiter(mathJson)
  return mathJsonToLatex(stripped)
}

import { ComputeEngine } from '@cortex-js/compute-engine'

const expr = '1\\times 4 + (-1)\\times x'
const engine = new ComputeEngine()
const parsedExpression = engine.parse(expr, { canonical: false })
console.log(parsedExpression.json)

const json = engine.parse(expr, { canonical: ['Multiply', 'InvisibleOperator'] }).json
type Expression = typeof json

function removeMultiplyByOne (arr: Expression) {
  if (!Array.isArray(arr)) return
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (arr[i][0] === 'Multiply' && arr[i][1] === 1 && arr[i][2] === 'x') {
        arr[i] = 'x'
      } else {
        removeMultiplyByOne(arr[i])
      }
    }
  }
  return arr
}

console.log(removeMultiplyByOne(engine.parse(expr).json))

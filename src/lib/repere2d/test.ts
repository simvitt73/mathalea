import { Graphe, isGraphe } from './graphe'
import { Point } from './point'
const grapheDroite = new Graphe({ expression: '2*x', domain: [-5, 5], sample: 200, style: 'thick', color: 'red' })
const pointA = new Point({ coordinates: [0, 1], color: 'red' })

console.log(isGraphe(grapheDroite))
console.log(isGraphe(pointA))
console.log(grapheDroite.evaluateWith(9))

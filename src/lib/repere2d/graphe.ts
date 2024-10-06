import type { Repere2D } from './repere2d'
import { evaluate } from 'mathjs'

/**
 * Classe Graphe qui implémente l'interface Repere2D
 * @implements Graphe
 * @class
 * @public
 * @param {Object} Graphe - paramètre de la classe Graphe
 * @param {string} Graphe.expression - expression de la fonction
 * @param {Array<number>} Graphe.domain - domaine de la fonction [xMin, xMax]
 * @param {number} Graphe.sample - nombre d'échantillons 200 par défaut
 * @param {string} Graphe.style - style de la fonction 'thick' par défaut
 * @param {string} Graphe.color - couleur de la fonction 'black' par défaut
 * @param {string} Graphe.label - label de la fonction '' par défaut
 */
export class Graphe implements Repere2D {
  expression : string
  domain : [number, number]
  sample : number
  style : string
  color : string
  label : string
  // optional parameter color
  constructor ({ expression, domain, sample = 200, style = 'thick', color = 'black', label = '' } : {expression:string, domain:[number, number], sample?:number, style?: string, color?: string, label?: string}) {
    this.expression = expression
    this.domain = domain
    this.sample = sample
    this.style = style
    this.color = color
    this.label = label
  }

  renderTikz = () => `
  \\addplot[${this.style},
  domain=${this.domain[0]}:${this.domain[1]},
  samples=${this.sample},
  color=${this.color}] {${this.expression}};`

  evaluateWith (value: number) {
    return evaluate(this.expression.replace('x', value))
  }
}

/**
 * Identifie si l'objet est de type `Graphe`
 * @param obj {any} Objet à tester
 * @returns `true` si l'objet contient la propriété `expression`
 */
export const isGraphe = (obj: any): obj is Graphe =>
  obj !== null &&
  typeof obj !== 'undefined' &&
  Object.keys(obj).includes('expression')

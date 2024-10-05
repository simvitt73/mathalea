import type { Repere2D } from './repere2d'

/**
 * Classe Point qui implémente l'interface Repere2D
 * @implements Point
 * @class
 * @public
 * @param {Object} Point - paramètre de la classe Point
 * @param {Array<number>} Point.coordinates - coordonnées du point [x, y]
 * @param {string} Point.color - couleur du point 'red' par défaut
 * @param {string} Point.mark - marque du point '+' par défaut
 * @param {string} Point.label - label du point '' par défaut
 */
export class Point implements Repere2D {
  coordinates : [number, number]
  color : string
  mark : string
  label : string
  style : string
  constructor ({ coordinates, color = 'red', mark = '+', label = '', style = 'mark size = 5pt' }: {coordinates : [number, number], color?: string, mark?: string, label?: string, style?: string}) {
    this.coordinates = coordinates
    this.color = color
    this.mark = mark
    this.label = label
    this.style = style
  }

  renderTikz = () => `
  \\addplot[mark=${this.mark},
    only marks,
    ${this.style},
    color=${this.color}] 
    coordinates {(${this.coordinates[0]}, ${this.coordinates[1]})};`
}

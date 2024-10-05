import { Graphe } from './graphe'
import type { Point } from './point'
import type { Repere2D } from './repere2d'

// export type
/**
 * Définition d'un modèle de repère.
 *
 */
export class Repere implements Repere2D {
  private opening: string = '\\begin{axis}[%'
  private closing: string = '\\end{axis}'
  private options: string[] = []
  private content: string[] = []
  private renderOptions = () => {
    return this.options.map((x) => x.replace(/^/, '  ')).join(',%\n')
  }

  private axisXLine: 'box' | 'top' | 'middle' | 'center' | 'bottom' | 'none' // positionnement de l'axe des abscisses dans le repère
  private axisYLine: 'box' | 'left' | 'middle' | 'center' | 'right' | 'none' // positionnement de l'axe des ordonnées dans le repère
  private x: string // unité sur l'axe des abscisses
  private y: string // unité sur l'axe des ordonnées
  private xMin: number // borne inf sur l'axe des abscisses
  private xMax: number // borne sup sur l'axe des abscisses
  private yMin: number // borne inf sur l'axe des ordonnées
  private yMax: number // borne sup sur l'axe des ordonnées
  private xTickDistance: number // distance entre les tirets sur l'axe des abscisses
  private yTickDistance: number // distance entre les tirets sur l'axe des ordonnées
  private grid: 'minor' | 'major' | 'both' | 'none' // type de grille
  // private moreOptions: string | null // ajouter d'autre options au repère
  renderTikz () {
    this.options.push(`axis x line = ${this.axisXLine}`)
    this.options.push(`axis y line = ${this.axisYLine}`)
    this.options.push(`x = ${this.x}`)
    this.options.push(`y = ${this.y}`)
    this.options.push(`xMin = ${this.xMin}`)
    this.options.push(`xMax = ${this.xMax}`)
    this.options.push(`yMin = ${this.yMin}`)
    this.options.push(`yMax = ${this.yMax}`)
    this.options.push(`xtick distance = ${this.xTickDistance}`)
    this.options.push(`ytick distance = ${this.yTickDistance}`)
    this.options.push(`grid = ${this.grid}`)
    // if (this.moreOptions) this.options.push(`${this.moreOptions}`)
    return [this.opening, this.renderOptions(), ']', this.content, this.closing].join('\n')
  }

  constructor ({
    axisXLine = 'middle',
    axisYLine = 'center',
    x = '1cm',
    y = '1cm',
    xMin = -5,
    xMax = 5,
    yMin = -5,
    yMax = 5,
    xTickDistance = 1,
    yTickDistance = 1,
    grid = 'both'
  }: {
    axisXLine?: 'box' | 'top' | 'middle' | 'center' | 'bottom' | 'none'
    axisYLine?: 'box' | 'left' | 'middle' | 'center' | 'right' | 'none'
    x?: string
    y?: string
    xMin?: number
    xMax?: number
    yMin?: number
    yMax?: number
    xTickDistance?: number
    yTickDistance?: number
      grid?: 'minor' | 'major' | 'both' | 'none'
    moreOptions?: string | null
  } = {}) {
    this.axisXLine = axisXLine
    this.axisYLine = axisYLine
    this.x = x
    this.y = y
    this.xMin = xMin
    this.xMax = xMax
    this.yMin = yMin
    this.yMax = yMax
    this.xTickDistance = xTickDistance
    this.yTickDistance = yTickDistance
    this.grid = grid
  }

  add (obj: Graphe | Point) {
    this.content.push(obj.renderTikz())
    return this
  }
}

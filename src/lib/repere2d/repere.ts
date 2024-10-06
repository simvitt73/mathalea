import { Graphe } from './graphe'
import type { Point } from './point'
import type { Repere2D } from './repere2d'

type RepereOptions = {
  /**
   * Définit un type pour les paramètres passés en option à l'environnement `axis`
   */
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
  scale: number
  moreOptions?: string | null
}
/**
 * Définition d'un modèle de repère.
 * @class Repere
 * @implments {Repere2D}
 */
export class Repere implements Repere2D {
  private closing: string = '\\end{axis}\\end{tikzpicture}'
  private options: string[] = []
  private content: string[] = []
  /**
   * Construit les option de l'environnement `axis`
   * @returns {string} Chaîne à intégrer come options dans l'environnement `axis`
   */
  private renderOptions = () => {
    return this.options.map((x) => x.replace(/^/, '  ')).join(',%\n')
  }

  /**
   * Construit le début de l'environnement en intégrant la scale à la figure TikZ
   * @returns {string} chaîne correspondant au début de la figure TikZ
   */
  private renderOpening = () => {
    return `\\begin{tikzpicture}[scale=${this.scale}]\\begin{axis}[%`
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
  private scale: number // échelle de la figure TikZ
  private moreOptions: string | null // ajouter d'autre options au repère
  renderTikz () {
    this.options.push(`axis x line = ${this.axisXLine}`)
    this.options.push(`axis y line = ${this.axisYLine}`)
    this.options.push(`x = ${this.x}`)
    this.options.push(`y = ${this.y}`)
    this.options.push(`xmin = ${this.xMin + 0.5}`)
    this.options.push(`xmax = ${this.xMax + 0.5}`)
    this.options.push(`ymin = ${this.yMin + 0.5}`)
    this.options.push(`ymax = ${this.yMax + 0.5}`)
    this.options.push(`xtick distance = ${this.xTickDistance}`)
    this.options.push(`ytick distance = ${this.yTickDistance}`)
    this.options.push(`grid = ${this.grid}`)
    if (this.moreOptions) this.options.push(`${this.moreOptions}`)
    return [this.renderOpening(), this.renderOptions(), ']', this.content, this.closing].join('\n')
  }

  /**
   * Constructeur de la classe Repere
   * @param param0 {RepereOptions} - On passe un objet *optionnel* de type RepereOptions
   */
  constructor ({
    axisXLine = 'middle',
    axisYLine = 'center',
    x = '1cm',
    y = '1cm',
    xMin = -5.2,
    xMax = 5.2,
    yMin = -5.2,
    yMax = 5.2,
    xTickDistance = 1,
    yTickDistance = 1,
    grid = 'both',
    scale = 1,
    moreOptions = null
  }: RepereOptions = {}) {
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
    this.scale = scale
    this.moreOptions = moreOptions
  }

  add (obj: Graphe | Point) {
    this.content.push(obj.renderTikz())
    return this
  }
}

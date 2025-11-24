import { context } from '../../modules/context'
import { inferieurouegal } from '../../modules/outils'
import { colorToLatexOrHTML } from './colorToLatexOrHtml'
import type { IRepere } from './Interfaces'
import { ObjetMathalea2D } from './ObjetMathalea2D'
import { motifs } from './pattern'
import { point } from './PointAbstrait'
import { polygone } from './polygones'
import { polyline } from './Polyline'
import { segment } from './segmentsVecteurs'
import { texteParPosition } from './textes'
import { vide2d } from './Vide2d'
/**
 * Une fonction pour convertir des abscisses en unité Mathalé en abscisses svg
 * @param x
 * @param coeff
 * @return {number}
 */
export const xSVG = (x: number, coeff: number) => Number((x * coeff).toFixed(1))
/**
 * Une fonction pour convertir des ordonnées en unité Mathalé en ordonnées svg
 * @param y
 * @param coeff
 * @return {number}
 */
export const ySVG = (y: number, coeff: number) =>
  Number((-y * coeff).toFixed(1))
export class LectureImage extends ObjetMathalea2D {
  x: number
  y: number
  xscale: number
  yscale: number
  textAbs: string
  textOrd: string
  stringColor: string
  constructor(
    x: number,
    y: number,
    xscale = 1,
    yscale = 1,
    color = 'red',
    textAbs = '',
    textOrd = '',
  ) {
    super()
    this.x = x
    this.y = y
    this.xscale = xscale
    this.yscale = yscale
    // if (textAbs === '') textAbs = x.toString()
    // if (textOrd === '') textOrd = y.toString()
    this.textAbs = textAbs
    this.textOrd = textOrd
    this.stringColor = color
  }

  svg(coeff: number) {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(x0, y0)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(X, M, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(M, Y, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide

    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.svg(coeff) +
      '\t\n' +
      Sy.svg(coeff) +
      '\t\n' +
      (this.textAbs != null
        ? texteParPosition(
            this.textAbs,
            x0,
            (-1 * 20) / coeff,
            0,
            this.stringColor,
          ).svg(coeff)
        : '') +
      '\t\n' +
      (this.textOrd != null
        ? texteParPosition(
            this.textOrd,
            (-1 * 20) / coeff,
            y0,
            0,
            this.stringColor,
          ).svg(coeff)
        : '')
    )
  }

  tikz() {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(x0, y0)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(X, M, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(M, Y, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide

    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.tikz() +
      '\t\n' +
      Sy.tikz() +
      '\t\n' +
      texteParPosition(
        this.textAbs,
        x0,
        -1 / context.scale,
        0,
        this.stringColor,
      ).tikz() +
      '\t\n' +
      texteParPosition(
        this.textOrd,
        -1 / context.scale,
        y0,
        0,
        this.stringColor,
      ).tikz()
    )
  }

  svgml(coeff: number, amp: number) {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(this.x, this.y)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(X, M, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(M, Y, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide

    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.svgml(coeff, amp) +
      '\t\n' +
      Sy.svgml(coeff, amp) +
      '\t\n' +
      texteParPosition(
        this.textAbs,
        x0,
        (-1 * 20) / coeff,
        0,
        this.stringColor,
      ).svg(coeff) +
      '\t\n' +
      texteParPosition(
        this.textOrd,
        (-1 * 20) / coeff,
        y0,
        0,
        this.stringColor,
      ).svg(coeff)
    )
  }

  tikzml(amp: number) {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(this.x, this.y)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(X, M, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(M, Y, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide

    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.tikzml(amp) +
      '\t\n' +
      Sy.tikzml(amp) +
      '\t\n' +
      texteParPosition(
        this.textAbs,
        x0,
        -1 / context.scale,
        0,
        this.stringColor,
      ).tikz() +
      '\t\n' +
      texteParPosition(
        this.textOrd,
        -1 / context.scale,
        y0,
        0,
        this.stringColor,
      ).tikz()
    )
  }
}
/**
 */
export function lectureImage(
  x: number,
  y: number,
  xscale = 1,
  yscale = 1,
  color = 'red',
  textAbs = '',
  textOrd = '',
): LectureImage {
  return new LectureImage(x, y, xscale, yscale, color, textAbs, textOrd)
}

export class LectureAntecedent extends ObjetMathalea2D {
  x: number
  y: number
  xscale: number
  yscale: number
  textAbs: string
  textOrd: string
  stringColor: string
  constructor(
    x: number,
    y: number,
    xscale: number,
    yscale: number,
    color = 'black',
    textOrd: string,
    textAbs: string,
  ) {
    super()
    //
    this.x = x
    this.y = y
    this.xscale = xscale
    this.yscale = yscale
    // if (textAbs == null) textAbs = this.x.toString().replace('.', ',')
    // if (textOrd == null) textOrd = this.y.toString().replace('.', ',')
    this.textAbs = textAbs
    this.textOrd = textOrd
    this.stringColor = color
    this.bordures = [-2, -1.5, x + 2, y > 0 ? y + 1 : 0]
  }

  svg(coeff: number) {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(x0, y0)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(M, X, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(Y, M, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide
    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.svg(coeff) +
      '\t\n' +
      Sy.svg(coeff) +
      '\t\n' +
      (this.textAbs != null
        ? texteParPosition(
            this.textAbs,
            x0,
            (-1 * 20) / coeff,
            0,
            this.stringColor,
          ).svg(coeff)
        : '') +
      '\t\n' +
      (this.textOrd != null
        ? texteParPosition(
            this.textOrd,
            (-1 * 20) / coeff,
            y0,
            0,
            this.stringColor,
          ).svg(coeff)
        : '')
    )
  }

  tikz() {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(x0, y0)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(M, X, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(Y, M, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide
    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.tikz() +
      '\t\n' +
      Sy.tikz() +
      '\t\n' +
      texteParPosition(
        this.textAbs,
        x0,
        -1 / context.scale,
        0,
        this.stringColor,
      ).tikz() +
      '\t\n' +
      texteParPosition(
        this.textOrd,
        -1 / context.scale,
        y0,
        0,
        this.stringColor,
      ).tikz()
    )
  }

  svgml(coeff: number, amp: number) {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(x0, y0)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(M, X, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(Y, M, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide
    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.svgml(coeff, amp) +
      '\t\n' +
      Sy.svgml(coeff, amp) +
      '\t\n' +
      texteParPosition(
        this.textAbs,
        x0,
        (-1 * 20) / coeff,
        0,
        this.stringColor,
      ).svg(coeff) +
      '\t\n' +
      texteParPosition(
        this.textOrd,
        (-1 * 20) / coeff,
        y0,
        0,
        this.stringColor,
      ).svg(coeff)
    )
  }

  tikzml(amp: number) {
    const x0 = this.x / this.xscale
    const y0 = this.y / this.yscale
    const M = point(x0, y0)
    const X = point(x0, 0)
    const Y = point(0, y0)
    const Sx =
      M.x === X.x && M.y === X.y ? vide2d() : segment(M, X, this.stringColor)
    const Sy =
      M.x === Y.x && M.y === Y.y ? vide2d() : segment(Y, M, this.stringColor)
    // vide2D n'a pas de styleExtremites ni pointilles mais on s'en fiche car on ne l'affiche pas : son svg() est vide
    Sx.styleExtremites = '->'
    Sy.styleExtremites = '->'
    Sx.pointilles = 5
    Sy.pointilles = 5
    return (
      '\t\n' +
      Sx.tikzml(amp) +
      '\t\n' +
      Sy.tikzml(amp) +
      '\t\n' +
      texteParPosition(
        this.textAbs,
        x0,
        -1 / context.scale,
        0,
        this.stringColor,
      ).tikz() +
      '\t\n' +
      texteParPosition(
        this.textOrd,
        -1 / context.scale,
        y0,
        0,
        this.stringColor,
      ).tikz()
    )
  }
}

export function lectureAntecedent(
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  color = 'black',
  textOrd: string,
  textAbs: string,
): LectureAntecedent {
  return new LectureAntecedent(x, y, xscale, yscale, color, textOrd, textAbs)
}

/**
 * Trace la courbe d'une fonction dans un repère
 * @param {function} f fonction à tracer comme par exemple : const f = x => a * x ** 2 + b * x + c
 * @param {Object} parametres À saisir entre accolades
 * @param {Repere} [parametres.repere  = {}]  Repère dans lequel le tracé de la fonction se fait
 * @param {string} [parametres.color = 'black']  Couleur du tracé de la courbe : du type 'blue' ou du type '#f15929'
 * @param {number} [parametres.epaisseur = 2]  Epaisseur du tracé de la courbe
 * @param {number} [parametres.xMin]  Abscisse minimale du tracé de la courbe
 * @param {number} [parametres.xMax]  Abscisse maximale du tracé de la courbe
 * @param {number} [parametres.yMin]  Ordonnée minimale du tracé de la courbe
 * @param {number} [parametres.yMax]  Ordonnée maximale du tracé de la courbe
 * @param {boolean|number} [parametres.step = false] Si false, le pas entre deux abscisses du tracé de la fonction est 0.2/xUnite. Sinon, ce pas vaut la valeur indiquée.
 * @param {number} [parametres.xUnite = 1]  Abscisse minimale du tracé de la courbe
 * @param {number} [parametres.yUnite = 1]  Abscisse maximale du tracé de la courbe
 * @property {string} svg Sortie au format vectoriel (SVG) que l’on peut afficher dans un navigateur
 * @property {string} svgml Sortie, à main levée, au format vectoriel (SVG) que l’on peut afficher dans un navigateur
 * @property {string} tikz Sortie au format TikZ que l’on peut utiliser dans un fichier LaTeX
 * @property {string} tikzml Sortie, à main levée, au format TikZ que l’on peut utiliser dans un fichier LaTeX
 * @property {string} color Couleur du tracé de la courbe. À associer obligatoirement à colorToLatexOrHTML().
 * @author Rémi Angot
 * @class
 */
// JSDOC Validee par EE Aout 2022
export class Courbe extends ObjetMathalea2D {
  stringColor: string
  f?: (x: number) => number
  usePgfplots: boolean
  xmin: number
  xmax: number
  ymin: number
  ymax: number
  samples: number = 100
  xunite: number
  yunite: number
  epaisseur: number
  fLatex?: string
  constructor(
    f: (x: number) => number,
    {
      repere,
      color = 'black',
      epaisseur = 2,
      step = false,
      xMin,
      xMax,
      yMin,
      yMax,
      xUnite = 1,
      yUnite = 1,
      usePgfplots = false,
      fLatex,
    }: {
      repere?: IRepere
      color?: string
      epaisseur?: number
      step?: boolean | number
      xMin?: number
      xMax?: number
      yMin?: number
      yMax?: number
      xUnite?: number
      yUnite?: number
      usePgfplots?: boolean
      fLatex?: string
    } = {},
  ) {
    super()
    this.objets = []
    this.usePgfplots = usePgfplots
    this.epaisseur = epaisseur
    this.fLatex = fLatex

    if (repere == null) {
      throw Error(
        'Erreur dans Courbe : Il faut préciser le repère dans lequel tracer la courbe',
      )
    }
    const xmin = xMin == null ? (xMin = repere.xMin ?? 0) : xMin
    const xmax = xMax == null ? (xMax = repere.xMax ?? 0) : xMax
    const ymin = yMin == null ? (yMin = repere.yMin ?? 0) : yMin
    const ymax = yMax == null ? (yMax = repere.yMax ?? 0) : yMax

    this.xmin = xmin
    this.xmax = xmax
    this.ymin = ymin
    this.ymax = ymax

    this.bordures = (repere?.bordures ?? [0, 0, 0, 0]) as unknown as [
      number,
      number,
      number,
      number,
    ]

    this.stringColor = color
    let xunite, yunite // Tout en minuscule pour les différencier des paramètres de la fonction
    xunite = repere.xUnite
    yunite = repere.yUnite

    if (isNaN(xunite)) {
      xunite = xUnite
    }

    if (isNaN(yunite)) {
      yunite = yUnite
    }

    this.xunite = xunite
    this.yunite = yunite

    let points = []
    let pas: number
    let p
    if (!step) {
      pas = 0.2 / xUnite
    } else {
      pas = Number(step)
    }
    for (let x = xmin; inferieurouegal(x, xMax ?? 10); x += pas) {
      if (x > xmax) x = xmax // normalement x<xmax... mais inférieurouegal ne compare qu'à 0.0000001 près, on peut donc avoir xmax+epsilon qui sort de l'intervalle de déf
      const y = Number(f(x))
      if (isFinite(y)) {
        if (f(x) < ymax + 1 && f(x) > ymin - 1) {
          points.push(point(x * xunite, f(x) * yunite))
        } else {
          if (points.length > 1) {
            p = polyline([...points], color)
            p.epaisseur = epaisseur
            this.objets.push(p)
            points = []
          }
        }
      } else {
        x += 0.05
      }
    }
    if (points.length > 1) {
      p = polyline([...points], color)
      p.epaisseur = epaisseur
      this.objets.push(p)
    }
  }

  svg(coeff: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      code += '\n\t' + objet.svg(coeff)
    }
    return code
  }

  tikz(
    axisYMin?: number,
    axisYMax?: number,
    _axisXMin?: number,
    _axisXMax?: number,
  ) {
    if (this.usePgfplots && this.fLatex) {
      // Use pgfplots with function expression
      let colorLatex = colorToLatexOrHTML(this.stringColor)[1] || 'black'
      // Remove braces from color if present
      colorLatex = colorLatex.replace(/[{}]/g, '')
      const domainMin = (this.xmin * this.xunite).toFixed(3)
      const domainMax = (this.xmax * this.xunite).toFixed(3)

      // Use axis bounds if provided, otherwise use curve's ymin/ymax
      const yDomainMin = (
        axisYMin !== undefined ? axisYMin * 20 : this.ymin * this.yunite * 20
      ).toFixed(3)
      const yDomainMax = (
        axisYMax !== undefined ? axisYMax * 20 : this.ymax * this.yunite * 20
      ).toFixed(3)

      const code = `\\addplot[color=${colorLatex},line width=${this.epaisseur / 2}pt,domain=${domainMin}:${domainMax},restrict y to domain=${
        yDomainMin
      }:${yDomainMax},samples=${this.samples}] {${this.fLatex}};\n`

      return code
    } else {
      // Legacy behavior: use polylines
      let code = ''
      if (this.objets == null) return code
      for (const objet of this.objets) {
        code += '\n\t' + objet.tikz()
      }
      return code
    }
  }

  svgml(coeff: number, amp: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      if (typeof objet.svgml === 'undefined') code += '\n\t' + objet.svg(coeff)
      else code += '\n\t' + objet.svgml(coeff, amp)
    }
    return code
  }

  tikzml(amp: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      if (typeof objet.tikzml === 'undefined') code += '\n\t' + objet.tikz()
      else code += '\n\t' + objet.tikzml(amp)
    }
    return code
  }
}

/**
 * Trace la courbe d'une fonction dans un repère
 * @param {function} f Fonction à tracer comme par exemple : const f = x => a * x ** 2 + b * x + c
 * @param {Object} parametres À saisir entre accolades
 * @param {Repere} [parametres.repere = {}] Repère dans lequel le tracé de la fonction se fait
 * @param {string} [parametres.color = 'black']  Couleur du tracé de la courbe : du type 'blue' ou du type '#f15929'
 * @param {number} [parametres.epaisseur = 2]  Epaisseur du tracé de la courbe
 * @param {number} [parametres.xMin = repere.xMin]  Abscisse minimale du tracé de la courbe
 * @param {number} [parametres.xMax = repere.xMax]  Abscisse maximale du tracé de la courbe
 * @param {number} [parametres.yMin = repere.yMin]  Ordonnée minimale du tracé de la courbe
 * @param {number} [parametres.yMax = repere.yMax]  Ordonnée maximale du tracé de la courbe
 * @param {boolean|number} [parametres.step = false] Si false, le pas entre deux abscisses du tracé de la fonction est 0.2/xUnite. Sinon, ce pas vaut la valeur indiquée.
 * @param {number} [parametres.xUnite = 1]  Abscisse minimale du tracé de la courbe
 * @param {number} [parametres.yUnite = 1]  Abscisse maximale du tracé de la courbe
 * @param {boolean} [parametres.usePgfplots = false] Si true, utilise pgfplots pour la sortie LaTeX au lieu de tracés polylignes
 * @param {string} [parametres.fLatex] Expression LaTeX de la fonction (requis si usePgfplots = true)
 * @example courbe(g, {repere: r})
 * // Trace, en noir avec une épaisseur de 2, la courbe g dans le repère r, tous deux précédemment définis.
 * @example courbe(g, {repere: r, epaisseur: 5, color: 'blue'})
 * // Trace la courbe g dans le repère r, tous deux précédemment définis, en bleu, avec une épaisseur de 5.
 * @example courbe(g, {repere: r, usePgfplots: true, fLatex: 'x^2 - 2*x + 1'})
 * // Trace la courbe g dans le repère r en utilisant pgfplots (sortie LaTeX plus compacte).
 * @author Rémi Angot
 * @return {Courbe}
 */
// JSDOC Validee par EE Aout 2022
export function courbe(
  f: (x: number) => number,
  {
    repere,
    color = 'black',
    epaisseur = 2,
    step = false,
    xMin,
    xMax,
    yMin,
    yMax,
    xUnite = 1,
    yUnite = 1,
    usePgfplots = false,
    fLatex,
  }: {
    repere?: IRepere
    color?: string
    epaisseur?: number
    step?: boolean | number
    xMin?: number
    xMax?: number
    yMin?: number
    yMax?: number
    xUnite?: number
    yUnite?: number
    usePgfplots?: boolean
    fLatex?: string
  } = {},
) {
  return new Courbe(f, {
    repere,
    color,
    epaisseur,
    step,
    xMin,
    xMax,
    yMin,
    yMax,
    xUnite,
    yUnite,
    usePgfplots,
    fLatex,
  })
}

/**
 * Trace l'aire entre la courbe d'une fonction et l'axe des abscisses
 * @param {function} f fonction dont on veut tracer l'aire entre sa courbe et l'axe des abscisses comme par exemple : const f = x => a * x ** 2 + b * x + c
 * @param {Object} parametres À saisir entre accolades
 * @param {Repere} [parametres.repere  = {}]  Repère dans lequel le tracé de la fonction se fait
 * @param {string} [parametres.color = 'black']  Couleur du contour de l'aire : du type 'blue' ou du type '#f15929'
 * @param {number} [parametres.epaisseur = 2]  Epaisseur du contour de l'aire
 * @param {string} [parametres.couleurDeRemplissage = 'blue']  Couleur de l'intérieur de l'aire : du type 'blue' ou du type '#f15929'
 * @param {number} [parametres.opacite = 0.5] Taux d'opacité du remplissage entre 0 et 1
 * @param {number} [parametres.hachures = 0] Style des hachures dans cette aire (entier entre 0 et 10).
 * @param {boolean|number} [parametres.step = false] Si false, le pas entre deux abscisses pour tracer l'aire est 0.2/xUnite. Sinon, ce pas vaut la valeur indiquée.
 * @param {number} [parametres.a = 0]  Abscisse minimale du tracé de la courbe avec a < b
 * @param {number} [parametres.b = 1]  Abscisse maximale du tracé de la courbe avec a < b
 * @property {string} svg Sortie au format vectoriel (SVG) que l’on peut afficher dans un navigateur
 * @property {string} svgml Sortie, à main levée, au format vectoriel (SVG) que l’on peut afficher dans un navigateur
 * @property {string} tikz Sortie au format TikZ que l’on peut utiliser dans un fichier LaTeX
 * @property {string} tikzml Sortie, à main levée, au format TikZ que l’on peut utiliser dans un fichier LaTeX
 * @property {string} color Couleur du contour de l'aire. À associer obligatoirement à colorToLatexOrHTML().
 * @property {string} couleurDeRemplissage Couleur de l'intérieur de l'aire. À associer obligatoirement à colorToLatexOrHTML().
 * @property {number} xUnite Unité des abscisses du repère
 * @property {number} yUnite Unité des ordonnées du repère
 * @property {number} ymin Ordonnée minimale du repère
 * @property {number} ymax Ordonnée maximale du repère
 * @author Rémi Angot
 * @class
 */
// JSDOC Validee par EE Juin 2022
export class Integrale extends ObjetMathalea2D {
  constructor(
    f: (x: number) => number,
    {
      repere,
      color = 'black',
      couleurDeRemplissage = 'blue',
      epaisseur = 2,
      step = false,
      a = 0,
      b = 1,
      opacite = 0.5,
      hachures = 0,
    }: {
      repere?: IRepere
      color?: string
      epaisseur?: number
      couleurDeRemplissage?: string
      step?: boolean | number
      a?: number
      b?: number
      opacite?: number
      hachures?: number
    } = {},
  ) {
    super()
    this.objets = []
    const ymin = repere?.yMin ?? -10
    const ymax = repere?.yMax ?? 10
    const xunite = repere?.xUnite ?? 1
    const yunite = repere?.yUnite ?? 1

    const objets = []
    const points = []
    let pas: number
    if (!step) {
      pas = 0.2 / xunite
    } else {
      pas = Number(step)
    }
    for (let x = a; inferieurouegal(x, b); x += pas) {
      if (x > b) x = b // normalement x<xMax... mais inférieurouegal ne compare qu'à 0.0000001 près, on peut donc avoir xMax+epsilon qui sort de l'intervalle de déf
      if (isFinite(f(x))) {
        if (f(x) < ymax + 1 && f(x) > ymin - 1) {
          points.push(point(x * xunite, f(x) * yunite))
        } else {
          window.notify(
            "Erreur dans Integrale : Il semble que la fonction ne soit pas continue sur l'intervalle",
            {
              f,
              a,
              b,
            },
          )
        }
      } else {
        x += 0.05
      }
    }
    points.push(
      point(b * xunite, f(b) * yunite),
      point(b * xunite, 0),
      point(a * xunite, 0),
    )
    const p = polygone([...points], color)
    p.epaisseur = epaisseur
    p.couleurDeRemplissage = colorToLatexOrHTML(couleurDeRemplissage)
    p.opaciteDeRemplissage = opacite
    p.hachures = hachures !== -1 ? motifs(hachures) : false
    this.bordures = repere?.bordures as unknown as [
      number,
      number,
      number,
      number,
    ]
    objets.push(p)
  }

  svg(coeff: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      code += '\n\t' + objet.svg(coeff)
    }
    return code
  }

  tikz() {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      code += '\n\t' + objet.tikz()
    }
    return code
  }

  svgml(coeff: number, amp: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      if (typeof objet.svgml === 'undefined') code += '\n\t' + objet.svg(coeff)
      else code += '\n\t' + objet.svgml(coeff, amp)
    }
    return code
  }

  tikzml(amp: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      if (typeof objet.tikzml === 'undefined') code += '\n\t' + objet.tikz()
      else code += '\n\t' + objet.tikzml(amp)
    }
    return code
  }
}

/**
 * Trace l'aire entre la courbe d'une fonction et l'axe des abscisses
 * @param {function} f fonction dont on veut tracer l'aire entre sa courbe et l'axe des abscisses comme par exemple : const f = x => a * x ** 2 + b * x + c
 * @param {Object} parametres À saisir entre accolades
 * @param {Repere} [parametres.repere  = {}]  Repère dans lequel le tracé de la fonction se fait
 * @param {string} [parametres.color = 'black']  Couleur du contour de l'aire : du type 'blue' ou du type '#f15929'
 * @param {number} [parametres.epaisseur = 2]  Epaisseur du contour de l'aire
 * @param {string} [parametres.couleurDeRemplissage = 'blue']  Couleur de l'intérieur de l'aire : du type 'blue' ou du type '#f15929'
 * @param {number} [parametres.opacite = 0.5] Taux d'opacité du remplissage entre 0 et 1
 * @param {number} [parametres.hachures = 0] Style des hachures dans cette aire (entier entre 0 et 10).
 * @param {boolean|number} [parametres.step = false] Si false, le pas entre deux abscisses pour tracer l'aire est 0.2/xUnite. Sinon, ce pas vaut la valeur indiquée.
 * @param {number} [parametres.a = 0]  Abscisse minimale du tracé de la courbe avec a < b
 * @param {number} [parametres.b = 1]  Abscisse maximale du tracé de la courbe avec a < b
 * @example integrale(g, {repere: r})
 * // Trace avec une épaisseur de 2, l'aire entre la courbe de la fonction g et l'axe des abscisses dans le repère r, tous deux précédemment définis.
 * @example integrale(g,  {repere: r, epaisseur: 5, color: 'blue', couleurDeRemplissage: 'red'})
 * // Trace avec une épaisseur de 5, l'aire entre la courbe de la fonction g et l'axe des abscisses dans le repère r, tous deux précédemment définis. L'aire est entourée de bleu et remplie de rouge.
 * @author Rémi Angot
 * @return {Integrale}
 */
// JSDOC Validee par EE Juin 2022
export function integrale(
  f: (x: number) => number,
  {
    repere,
    color = 'black',
    couleurDeRemplissage = 'blue',
    epaisseur = 2,
    step = false,
    a = 0,
    b = 1,
    opacite = 0.5,
    hachures = 0,
  }: {
    repere?: IRepere
    color?: string
    epaisseur?: number
    couleurDeRemplissage?: string
    step?: boolean | number
    a?: number
    b?: number
    opacite?: number
    hachures?: number
  } = {},
) {
  return new Integrale(f, {
    repere,
    color,
    couleurDeRemplissage,
    epaisseur,
    step,
    a,
    b,
    opacite,
    hachures,
  })
}

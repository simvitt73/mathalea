import { colorToLatexOrHTML, fixeBordures, ObjetMathalea2D } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { CodageAngle } from './codages'
import { Point, pointSurSegment } from './points'
import { polygone, polyline } from './polygones'
import { homothetie, rotation } from './transformations'
import { arc } from './arc'
import type { PointSimple } from './points-simples'
import { angleOriente } from './angles-vecteurs'

export type MarkType = 'simple' | 'double' | 'triple' | 'gras' | 'double-gras' | 'gras-simple-gras' | 'simple-gras-simple' | 'pointilles' | 'double-pointilles' | 'mixte-simple-pointilles' | 'mixte-gras-pointilles'
export const markTypeArray: MarkType[] = [
  'simple',
  'double',
  'triple',
  'gras',
  'double-gras',
  'gras-simple-gras',
  'simple-gras-simple',
  'pointilles',
  'double-pointilles',
  'mixte-simple-pointilles',
  'mixte-gras-pointilles'
]
export class MarqueAngle extends ObjetMathalea2D {
  constructor (start: PointSimple, sommet: PointSimple, end: PointSimple, {
    mark = 'simple',
    color = 'black',
    rayon = 1
  }: {
    mark: MarkType,
    color?: string,
    rayon?: number
  }) {
    super()
    this.objets = []
    const a = pointSurSegment(sommet, start, rayon)
    const angle = angleOriente(start, sommet, end)
    switch (mark) {
      case 'double': {
        const aPrime = homothetie(a, sommet, 0.9)
        const aSeconde = homothetie(a, sommet, 1.1)
        this.objets.push(
          arc(aPrime, sommet, angle, false, 'none', color),
          arc(aSeconde, sommet, angle, false, 'none', color)
        )
      }
        break
      case 'triple': {
        const aPrime = homothetie(a, sommet, 0.9)
        const aSeconde = homothetie(a, sommet, 1.1)
        this.objets.push(
          arc(aPrime, sommet, angle, false, 'none', color),
          arc(a, sommet, angle, false, 'none', color),
          arc(aSeconde, sommet, angle, false, 'none', color)
        )
      }
        break
      case 'gras': {
        const marqueGrasse = arc(a, sommet, angle, false, 'none', color)
        marqueGrasse.epaisseur = 4
        this.objets.push(marqueGrasse)
      }
        break
      case 'double-gras':
        {
          const aPrime = homothetie(a, sommet, 0.9)
          const aSeconde = homothetie(a, sommet, 1.1)
          const marqueGrasse1 = arc(aPrime, sommet, angle, false, 'none', color)
          const marqueGrasse2 = arc(aSeconde, sommet, angle, false, 'none', color)
          marqueGrasse1.epaisseur = 2
          marqueGrasse2.epaisseur = 2
          this.objets.push(
            marqueGrasse1,
            marqueGrasse2
          )
        }
        break
      case 'gras-simple-gras': {
        const aPrime = homothetie(a, sommet, 0.85)
        const aSeconde = homothetie(a, sommet, 1.15)
        const marqueGrasse1 = arc(aPrime, sommet, angle, false, 'none', color)
        const marqueGrasse2 = arc(aSeconde, sommet, angle, false, 'none', color)
        marqueGrasse1.epaisseur = 2
        marqueGrasse2.epaisseur = 2
        this.objets.push(
          marqueGrasse1,
          arc(a, sommet, angle, false, 'none', color),
          marqueGrasse2
        )
      }
        break
      case 'simple-gras-simple': {
        const aPrime = homothetie(a, sommet, 0.85)
        const aSeconde = homothetie(a, sommet, 1.15)
        const marqueGrasse = arc(a, sommet, angle, false, 'none', color)
        const marqueSimple1 = arc(aPrime, sommet, angle, false, 'none', color)
        const marqueSimple2 = arc(aSeconde, sommet, angle, false, 'none', color)
        marqueGrasse.epaisseur = 2
        this.objets.push(
          marqueSimple1,
          marqueGrasse,
          marqueSimple2
        )
      }
        break
      case 'pointilles': {
        const marque = arc(a, sommet, angle, false, 'none', color)
        marque.pointilles = 3
        marque.epaisseur = 2
        this.objets.push(marque)
      }
        break
      case 'double-pointilles': {
        const aPrime = homothetie(a, sommet, 1)
        const aSeconde = homothetie(a, sommet, 1.1)
        const marque1 = arc(aPrime, sommet, angle, false, 'none', color)
        const marque2 = arc(aSeconde, sommet, angle, false, 'none', color)
        marque1.pointilles = 5
        marque2.pointilles = 5
        this.objets.push(
          marque1,
          marque2
        )
      }
        break
      case 'mixte-simple-pointilles': {
        const aPrime = homothetie(a, sommet, 0.9)
        const aSeconde = homothetie(a, sommet, 1.1)
        const marque = arc(aSeconde, sommet, angle, false, 'none', color)
        const marque1 = arc(aPrime, sommet, angle, false, 'none', color)
        marque1.pointilles = 3
        marque1.epaisseur = 2
        marque.epaisseur = 2
        this.objets.push(
          marque,
          marque1
        )
      }
        break
      case 'mixte-gras-pointilles': {
        const aPrime = homothetie(a, sommet, 0.9)
        const aSeconde = homothetie(a, sommet, 1.1)
        const marque1 = arc(aSeconde, sommet, angle, false, 'none', color)
        const marque = arc(aPrime, sommet, angle, false, 'none', color)
        marque1.pointilles = 3
        marque.epaisseur = 2
        this.objets.push(
          marque,
          marque1
        )
      }
        break
      case 'simple':
      default: {
        const marque = arc(a, sommet, angle, false, 'none', color)
        marque.epaisseur = 2
        this.objets.push(marque)
      }
        break
    }
    const bordures = fixeBordures(this.objets, { rxmin: 0, rxmax: 0, rymin: 0, rymax: 0 })
    this.bordures = [bordures.xmin, bordures.ymin, bordures.xmax, bordures.ymax]
  }

  svg (coeff: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      code += '\n\t' + objet.svg(coeff)
    }
    return code
  }

  tikz () {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      code += '\n\t' + objet.tikz()
    }
    return code
  }
}

export function marqueAngle (start: PointSimple, sommet: PointSimple, end: PointSimple, {
  mark = 'simple',
  color = 'black',
  rayon = 1
}: {
  mark: MarkType,
  color?: string,
  rayon?: number
}) {
  return new MarqueAngle(start, sommet, end, { mark, color, rayon })
}

/**
 * Code un angle droit
 * @param {PointSimple} A Point sur un côté de l'angle droit
 * @param {PointSimple} O Sommet de l'angle droit
 * @param {PointSimple} B Point sur l'autre côté de l'angle droit
 * @param {string} [color='black'] Couleur du codage : du type 'blue' ou du type '#f15929'
 * @param {number} [d=0.4] Taille du codage de l'angle droit
 * @param {number} [epaisseur=0.5] Epaisseur du trait
 * @param {number} [opacite=1] Opacité du trait
 * @param {string} [couleurDeRemplissage='none'] 'none' si on ne veut pas de remplissage, sinon une couleur du type 'blue' ou du type '#f15929'
 * @param {number} [opaciteDeRemplissage=1] Taux d'opacité du remplissage entre 0 et 1
 * @property {string} svg Sortie au format vectoriel (SVG) que l’on peut afficher dans un navigateur
 * @property {string} svgml Sortie, à main levée, au format vectoriel (SVG) que l’on peut afficher dans un navigateur
 * @property {string} tikz Sortie au format TikZ que l’on peut utiliser dans un fichier LaTeX
 * @property {string} tikzml Sortie, à main levée, au format TikZ que l’on peut utiliser dans un fichier LaTeX
 * @property {Point} depart Point sur un côté de l'angle droit
 * @property {Point} sommet Sommet de l'angle droit
 * @property {Point} arrivee Point sur l'autre côté de l'angle droit
 * @property {string} color Couleur du codage. À associer obligatoirement à colorToLatexOrHTML().
 * @property {number} taille Taille du codage de l'angle droit
 * @property {string} couleurDeRemplissage 'none' si on ne veut pas de remplissage. À associer obligatoirement à colorToLatexOrHTML().
 * @property {number} opaciteDeRemplissage Taux d'opacité du remplissage entre 0 et 1
 * @class
 */
// JSDOC Validee par EE Juin 2022
export class CodageAngleDroit extends ObjetMathalea2D {
  sommet: Point
  depart: Point
  arrivee: Point
  taille: number
  color: string[]
  couleurDeRemplissage: string[]
  opaciteDeRemplissage: number

  constructor (A: Point, O: Point, B: Point, color = 'black', d = 0.4, epaisseur = 0.5, opacite = 1, couleurDeRemplissage = 'none', opaciteDeRemplissage = 1) {
    super()
    this.sommet = O
    this.depart = A
    this.arrivee = B
    this.taille = d
    this.color = colorToLatexOrHTML(color)
    this.couleurDeRemplissage = colorToLatexOrHTML(couleurDeRemplissage)
    this.opaciteDeRemplissage = opaciteDeRemplissage
    const a = pointSurSegment(this.sommet, this.depart, this.taille * 20 / context.pixelsParCm)
    const b = pointSurSegment(this.sommet, this.arrivee, this.taille * 20 / context.pixelsParCm)
    let o
    if (angleOriente(this.depart, this.sommet, this.arrivee) > 0) {
      o = rotation(this.sommet, a, -90)
    } else {
      o = rotation(this.sommet, a, 90)
    }
    const bordures = fixeBordures([a, b, o], { rxmin: 0, rxmax: 0, rymin: 0, rymax: 0 })
    this.bordures = [bordures.xmin, bordures.ymin, bordures.xmax, bordures.ymax]
    this.epaisseur = epaisseur
    this.opacite = opacite
  }

  svg (coeff: number) {
    const a = pointSurSegment(this.sommet, this.depart, this.taille * 20 / coeff)
    const b = pointSurSegment(this.sommet, this.arrivee, this.taille * 20 / coeff)
    let o: Point
    if (angleOriente(this.depart, this.sommet, this.arrivee) > 0) {
      o = rotation(this.sommet, a, -90)
    } else {
      o = rotation(this.sommet, a, 90)
    }
    const result = polygone([this.sommet, a, o, b], this.color[0])
    if (this.couleurDeRemplissage[0] !== 'none') {
      result.couleurDeRemplissage = [this.couleurDeRemplissage[0], this.couleurDeRemplissage[1]]
      result.opaciteDeRemplissage = this.opaciteDeRemplissage
    }
    result.epaisseur = this.epaisseur
    result.opacite = this.opacite
    this.id = result.id
    return result.svg(coeff)
  }

  tikz () {
    const a = pointSurSegment(this.sommet, this.depart, this.taille / context.scale)
    const b = pointSurSegment(this.sommet, this.arrivee, this.taille / context.scale)
    let o: Point
    if (angleOriente(this.depart, this.sommet, this.arrivee) > 0) {
      o = rotation(this.sommet, a, -90)
    } else {
      o = rotation(this.sommet, a, 90)
    }
    const result = polygone([this.sommet, a, o, b], this.color[1])
    if (this.couleurDeRemplissage[1] === '') {
      result.couleurDeRemplissage = [this.couleurDeRemplissage[0], this.couleurDeRemplissage[1]]
      result.opaciteDeRemplissage = this.opaciteDeRemplissage
      result.epaisseur = this.epaisseur
      result.opacite = this.opacite
    }
    return result.tikz()
  }

  svgml (coeff: number, amp: number) {
    const a = pointSurSegment(this.sommet, this.depart, this.taille * 20 / coeff)
    const b = pointSurSegment(this.sommet, this.arrivee, this.taille * 20 / coeff)
    let o: Point
    if (angleOriente(this.depart, this.sommet, this.arrivee) > 0) {
      o = rotation(this.sommet, a, -90)
    } else {
      o = rotation(this.sommet, a, 90)
    }
    return polyline([a, o, b], this.color[0]).svgml(coeff, amp)
  }

  tikzml (amp: number) {
    const a = pointSurSegment(this.sommet, this.depart, this.taille / context.scale)
    const b = pointSurSegment(this.sommet, this.arrivee, this.taille / context.scale)
    let o: Point
    if (angleOriente(this.depart, this.sommet, this.arrivee) > 0) {
      o = rotation(this.sommet, a, -90)
    } else {
      o = rotation(this.sommet, a, 90)
    }
    return polyline([a, o, b], this.color[1]).tikzml(amp)
  }
}

/**
 * Code un angle droit
 * @param {PointSimple} A Point sur un côté de l'angle droit
 * @param {PointSimple} O Sommet de l'angle droit
 * @param {PointSimple} B Point sur l'autre côté de l'angle droit
 * @param {string} [color='black'] Couleur du codage : du type 'blue' ou du type '#f15929'
 * @param {number} [d=0.4] Taille du codage de l'angle droit
 * @param {number} [epaisseur=0.5] Epaisseur du trait
 * @param {number} [opacite=1] Opacité du trait
 * @param {string} [couleurDeRemplissage='none'] 'none' si on ne veut pas de remplissage, sinon une couleur du type 'blue' ou du type '#f15929'
 * @param {number} [opaciteDeRemplissage=1] Taux d'opacité du remplissage
 * @example codageAngleDroit(A,J,T)
 * // Trace un codage d'angle droit pour l'angle direct AJT, de couleur noire, de taille 0,4, d'épaisseur 0,5 avec une opacité de 100 %, sans remplissage
 * @example codageAngleDroit(A,J,T,'pink',1,0.2,0.6,'blue',0.2)
 * // Trace un codage d'angle droit pour l'angle direct AJT, de couleur rose, de taille 1, d'épaisseur 0,2 avec une opacité de 60 %, rempli en bleu avec une opacité de 20%.
 * @return {CodageAngleDroit}
 * @author Rémi Angot
 */
// JSDOC Validee par EE Juin 2022
export function codageAngleDroit (A: Point, O: Point, B: Point, color = 'black', d = 0.4, epaisseur = 0.5, opacite = 1, couleurDeRemplissage = 'none', opaciteDeRemplissage = 1) {
  return new CodageAngleDroit(A, O, B, color, d, epaisseur, opacite, couleurDeRemplissage, opaciteDeRemplissage)
}

/**
 * Code un angle
 * @param {PointSimple} A Point sur un côté de l'angle
 * @param {PointSimple} O Sommet de l'angle
 * @param {number|PointSimple} angle Mesure de l'angle ou nom d'un point sur l'autre côté de l'angle
 * @param {number} [taille=0.8] Taille de l'angle
 * @param {string} [mark=''] Marque sur l'angle
 * @param {string} [color='black'] Couleur de l'angle : du type 'blue' ou du type '#f15929'
 * @param {number} [epaisseur=1] Epaisseur du tracé de l'angle
 * @param {number} [opacite=1] Opacité de la couleur du tracé de l'angle
 * @param {string} [couleurDeRemplissage='none'] 'none' si on ne veut pas de remplissage, sinon une couleur du type 'blue' ou du type '#f15929'
 * @param {number} [opaciteDeRemplissage=0.2] Opacité de la couleur de remplissage de l'angle
 * @param {boolean} [mesureOn=false] Affichage de la mesure de l'angle
 * @param {boolean} [noAngleDroit=false] Pour choisir si on veut que l'angle droit soit marqué par un carré ou pas
 * @param {string} [texteACote=''] Pour mettre un texte à côté de l'angle à la place de la mesure de l'angle
 * @param {number} [tailleTexte=1] Pour choisir la taille du texte à côté de l'angle
 * @param {object} [options={}]
 * @param {number} [options.echelleMark=1] Taille relative de la marque de l'angle
 * @param {number} [options.angleArrondi=0] Arrondi de l'angle
 * @example codageAngle(H,K,30)
 * // Code l'angle de centre K, avec H sur un côté de l'angle et avec 30° comme mesure d'angle orienté,
 * // en noir, avec une épaisseur de 1, une opacité de 100 %, un rayon d'arc de 0,8, sans autre option.
 * @example codageAngle(H,K,G)
 * // Code l'angle HKG, en noir, avec une épaisseur de 1, une opacité de 100 %, un rayon d'arc de 0,8, sans autre option.
 * @example codageAngle(H,K,G,2,'x','red',0.5,0.2,'blue',0.8,true,true)
 * // Code l'angle HKG, en rouge, avec une épaisseur de 0.5 et une opacité de 20 %, rempli en bleu avec une opacité de 80 %
 * // avec un arc de cercle de rayon 2, avec une marque 'x' sur l'angle, en affichant la mesure de l'angle et sans faire apparaître d'angle droit le cas échéant.
 * @example codageAngle(H,K,G,2,'x','red',0.5,0.2,'blue',0.8,true,true,'?',2)
 * // Code l'angle HKG, en rouge, avec une épaisseur de 0.5 et une opacité de 20 %, rempli en bleu avec une opacité de 80 %
 * // avec un arc de cercle de rayon 2, avec une marque 'x' sur l'angle, en affichant le texte '?' d'une taille de 2 et sans faire apparaître d'angle droit le cas échéant.
 * @author Jean-Claude Lhote
 * @return {CodageAngle|CodageAngleDroit}
 */
// JSDOC Validee par EE Juin 2022
export function codageAngle (A: Point, O: Point, angle: Point | number, taille = 0.8, mark = '', color = 'black', epaisseur = 1, opacite = 1, couleurDeRemplissage = 'none', opaciteDeRemplissage = 0.2, mesureOn = false, noAngleDroit = false, texteACote = '', tailleTexte = 1, { echelleMark = 1, angleArrondi = 0 } = {}) {
  let angleNumerique: number
  if (typeof (angle) !== 'number') {
    angleNumerique = angleOriente(A, O, angle)
  } else {
    angleNumerique = angle
  }
  if ((angleNumerique === 90 || angleNumerique === -90) && !noAngleDroit) {
    return new CodageAngleDroit(A, O, rotation(A, O, angleNumerique), color, taille, epaisseur, opacite, couleurDeRemplissage, opaciteDeRemplissage)
  } else return new CodageAngle(A, O, angleNumerique, taille, mark, color, epaisseur, opacite, couleurDeRemplissage, opaciteDeRemplissage, mesureOn, texteACote, tailleTexte, { echelleMark, angleArrondi })
}

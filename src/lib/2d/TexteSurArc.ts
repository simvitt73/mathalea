import { context } from '../../modules/context'
import { colorToLatexOrHTML } from './colorToLatexOrHtml'
import { droite } from './droites'
import { ObjetMathalea2D } from './ObjetMathalea2D'
import { Point, milieu, point, pointSurSegment } from './points'
import { segment } from './segmentsVecteurs'
import { texteParPoint } from './textes'
import { rotation } from './transformations'

/**
 * texteSurArc(texte, A, B, angle) // Écrit un texte au milieu de l'arc AB, au dessus si A est le point le plus à gauche sinon au dessous
 *
 * @author Rémi Angot et Frédéric Piou
 */

export class TexteSurArc extends ObjetMathalea2D {
  extremite1: Point
  extremite2: Point
  distance: number
  texte: string
  angle: number
  centre: Point
  milieu: Point
  normale: number
  stringColor: string
  horizontal: boolean
  constructor(
    texte: string,
    A: Point,
    B: Point,
    angle: number,
    color = 'black',
    d = 0.5,
    horizontal = false,
  ) {
    super()
    this.color = colorToLatexOrHTML(color)
    this.horizontal = horizontal
    this.stringColor = color
    this.extremite1 = A
    this.extremite2 = B
    this.distance = texte[0] === '$' ? -3 * d : -d
    this.texte = texte
    this.angle = angle
    let anglerot
    if (angle < 0) anglerot = (angle + 180) / 2
    else anglerot = (angle - 180) / 2
    // Médiatrice via droite(I, J), avec I milieu de [AB] et J sur la perpendiculaire en I
    const I = milieu(A, B)
    const vx = B.x - A.x
    const vy = B.y - A.y
    const J = point(I.x - vy, I.y + vx)
    const d1 = droite(I, J)
    const e = droite(A, B)
    const f = rotation(e, B, anglerot)
    const determinant = d1.a * f.b - f.a * d1.b
    const Omegax = (d1.b * f.c - f.b * d1.c) / determinant
    const Omegay = (f.a * d1.c - d1.a * f.c) / determinant
    this.centre = point(Omegax, Omegay)
    const s = segment(this.extremite1, this.extremite2)
    this.normale = -s.angleAvecHorizontale
    this.milieu = rotation(A, this.centre, angle / 2)
    const pos = pointSurSegment(this.milieu, this.centre, this.distance)
    const space = 0.2 * texte.length
    this.bordures = [pos.x - space, pos.y - space, pos.x + space, pos.y + space]
  }

  svg(coeff: number) {
    const N = pointSurSegment(
      this.milieu,
      this.centre,
      (this.distance * 20) / coeff,
    )
    let angle
    if (this.extremite2.x > this.extremite1.x) {
      angle = this.normale
    } else {
      angle = 180 + this.normale
    }
    return texteParPoint(
      this.texte,
      N,
      this.horizontal ? 0 : angle,
      this.stringColor,
    ).svg(coeff)
  }

  tikz() {
    const N = pointSurSegment(
      this.milieu,
      this.centre,
      this.distance / context.scale,
    )
    let angle
    if (this.extremite2.x > this.extremite1.x) {
      angle = this.normale
    } else {
      angle = 180 + this.normale
    }
    return texteParPoint(this.texte, N, angle, this.stringColor).tikz()
  }
}
/**
 * Écrit un texte au "milieu" de l'arc AB au dessus si A est le point le plus à gauche sinon en dessous
 * @param {string} texte Texte à afficher (éviter les $$ pour les affichages diaporama)
 * @param {Point} A Extrémité de l'arc
 * @param {Point} B Extrémité de l'arc
 * @param {number} angle Angle au centre
 * @param {string} [color='black'] Code couleur HTML accepté
 * @param {number} [d=0.5] Distance à la droite.
 * @param {boolean} [horizontal = false] Décide si le texte est horizontal ou pas, quelle que soit la valeur de angle.
 * @return {object} LatexParCoordonnees si le premier caractère est '$', TexteParPoint sinon
 * @author Rémi Angot et Frédéric Piou
 */

export function texteSurArc(
  texte: string,
  A: Point,
  B: Point,
  angle: number,
  color = 'black',
  d = 0.5,
  horizontal = false,
) {
  return new TexteSurArc(texte, A, B, angle, color, d, horizontal)
}

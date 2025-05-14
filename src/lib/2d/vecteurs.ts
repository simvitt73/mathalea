import { colorToLatexOrHTML, fixeBordures, ObjetMathalea2D } from '../../modules/2dGeneralites'
import FractionEtendue from '../../modules/FractionEtendue'
import { milieu, point, Point } from './points'
import { latex2d, texteParPosition } from './textes'
import { rotation, similitude, translation } from './transformations'
import { PointSimple } from './points-simples'
import { segment } from './segments'
import { VecteurAbstrait } from './vecteurs-abstraits'

/**
 * v = vecteur('V') // son nom
 * v = vecteur(x,y) // ses composantes
 * v = vecteur(A,B) // son origine et son extrémité (deux Points)
 * v = vecteur(x,y,'v') // son nom et ses composantes.
 * v.representant(E,'blue') // Dessine le vecteur v issu de E, en bleu.
 * Commenter toutes les méthodes possibles
 * @author Jean-Claude Lhote et Rémi Angot
 */
export class Vecteur extends VecteurAbstrait {
  representant (A: Point, color = 'black') {
    const B = point(A.x + this.x, A.y + this.y)
    const s = segment(A, B, color, '->')
    s.tailleExtremites = 5
    return s
  }

  representantNomme (A: Point, nom: string, taille = 1, color = 'black') {
    let s
    let v
    const B = point(A.x + this.x, A.y + this.y)
    const M = milieu(A, B)
    s = segment(A, B, color)
    const angle = s.angleAvecHorizontale
    v = similitude(this, A, 90, 0.5 / this.norme())
    if (Math.abs(angle) > 90) {
      s = segment(B, A, color)
      // angle = s.angleAvecHorizontale
      v = similitude(this, A, -90, 0.5 / this.norme())
    }
    const N = translation(M, v)
    return nomVecteurParPosition(nom, N.x, N.y, taille, 0, color)
  }
}

/**
 * @example v = vecteur('V') // son nom
 * @example v = vecteur(x,y) // ses composantes
 * @example v = vecteur(A,B) // son origine et son extrémité (deux Points)
 * @example v = vecteur(x,y,'v') // son nom et ses composantes.
 * @author Jean-Claude Lhote et Rémi Angot
 */
export function vecteur (arg1: FractionEtendue | number | PointSimple | string, arg2: FractionEtendue | number | PointSimple, nom = '') {
  return new Vecteur(arg1, arg2, nom)
}

/**
 * @example v = vecteur('V') // son nom
 * @example v = vecteur(x,y) // ses composantes
 * @example v = vecteur(A,B) // son origine et son extrémité (deux Points)
 * @example v = vecteur(x,y,'v') // son nom et ses composantes.
 * @author Jean-Claude Lhote et Rémi Angot
 */
export function vecteurAbstraitVersVecteur (vecteurAbstrait: VecteurAbstrait): Vecteur {
  if (vecteurAbstrait instanceof Vecteur) return vecteurAbstrait
  return new Vecteur(vecteurAbstrait.x, vecteurAbstrait.y, vecteurAbstrait.nom)
}

/**
 * @author Jean-Claude Lhote le 31/01/2021
 * crée un nom de vecteur avec sa petite flèche
 * l'angle formé par avec l'horizontale est à donner comme argument, par défaut c'est 0
 * la taille impactera le nom et la flèche en proportion.
 * (x,y) sont les coordonnées du centre du nom.
 */
export class NomVecteurParPosition extends ObjetMathalea2D {
  nom: string
  x: number
  y: number
  angle: number
  taille: number
  constructor (nom: string, x: number, y: number, taille = 1, angle = 0, color = 'black') {
    super()
    this.nom = nom
    this.x = x
    this.y = y
    this.color = colorToLatexOrHTML(color)
    this.angle = angle
    this.taille = taille
    // @todo créer deux objets : vecteurI et vecteurJ pour ça.
    // if (this.nom === 'i') return latex2d('\\vec \\imath', this.x, this.y, { color })
    // if (this.nom === 'j') return latex2d('\\vec \\jmath', this.x, this.y, { color })

    const t = texteParPosition(this.nom, this.x, this.y, -this.angle, color, this.taille, 'milieu', true)
    const M = point(this.x, this.y)
    const P = point(M.x + 0.25 * this.nom.length, M.y)
    const M0 = similitude(P, M, 90 + this.angle, 1.5)
    const M1 = rotation(translation(M0, vecteur(P, M)), M0, this.angle)
    const M2 = similitude(M1, M0, 180, 1.5)
    const s = segment(M1, M2, color)
    s.styleExtremites = '->'
    s.tailleExtremites = 3
    this.objets = [t, s]
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

export function nomVecteurParPosition (nom: string, x: number, y: number, taille = 1, angle = 0, color = 'black') {
  // Katex ne reconnais pas \\vec qui est une commande définie ailleurs.
  if (nom === 'i') return latex2d('\\vec{\\imath}', x, y, { color })
  if (nom === 'j') return latex2d('\\vec{\\jmath}', x, y, { color })
  return new NomVecteurParPosition(nom, x, y, taille, angle, color)
}

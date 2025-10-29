import { egal, randint } from '../../modules/outils'
import { degToRad } from '../mathFonctions/trigo'
import type { ICercle, IDroite, IPointAbstrait } from './Interfaces'
import { PointAbstrait } from './points-abstraits'
import { homothetie, similitude } from './transformations'
import { longueur } from './utilitairesGeometriques'

/**
 * A = point('A') //son nom
 * A = point(x,y) //ses coordonnées
 * A = point(x,y,'A') //ses coordonnées et son nom
 * A = point(x,y,'A',below') //ses coordonnées,son nom et la position de son label
 * @author Rémi Angot
 * @class
 */
export class Point extends PointAbstrait {}

/**
 * Crée un objet Point ayant les propriétés suivantes :
 * @param {number} x abscisse
 * @param {number} y ordonnée
 * @param {string} nom son nom qui apparaîtra
 * @param {string} [positionLabel] Les possibilités sont : 'left', 'right', 'below', 'above', 'above right', 'above left', 'below right', 'below left'. Si on se trompe dans l'orthographe, ce sera 'above left' et si on ne précise rien, pour un point ce sera 'above'.
 * @return {Point}
 */
export function point(x: number, y: number, nom = '', positionLabel = 'above') {
  return new Point(x, y, nom, positionLabel)
}

export function pointDepuisPointAbstrait(point: PointAbstrait) {
  return new Point(point.x, point.y, point.nom, point.positionLabel)
}

/**
 * M = milieu(A,B) //M est le milieu de [AB]
 * M = milieu(A,B,'M') //M est le milieu [AB] et se nomme M
 * M = milieu(A,B,'M','below') //M est le milieu [AB], se nomme M et le nom est en dessous du point
 * @returns {PointAbstrait} Milieu du segment [AB]
 * @author Rémi Angot
 */
export function milieu(
  A: PointAbstrait,
  B: PointAbstrait,
  nom = '',
  positionLabel = 'above',
): Point {
  if (isNaN(longueur(A, B)))
    window.notify('milieu : Quelque chose ne va pas avec les points', { A, B })
  const x = (A.x + B.x) / 2
  const y = (A.y + B.y) / 2
  return point(x, y, nom, positionLabel)
}

/**
 * M = pointSurSegment(A,B,l) //M est le point de [AB] à l cm de A
 * M = pointSurSegment(A,B,l,'M') //M est le point de [AB] à l cm de A et se nomme M
 * M = pointSurSegment(A,B,l,'M','below') //M est le point de [AB] à l cm de A, se nomme M et le nom est en dessous du point
 *
 * M = pointSurSegment(A,B,'h','M') // M est un point au hasard sur [AB] (on peut écrire n'importe quel texte à la place de 'h')
 * M = pointSurSegment(A,B) // M est un point au hasard sur [AB]
 * Sécurité ajoutée par Jean-Claude Lhote : si AB=0, alors on retourne A
 * @author Rémi Angot
 */
export function pointSurSegment(
  A: PointAbstrait,
  B: PointAbstrait,
  l?: number,
  nom = '',
  positionLabel = 'above',
): Point {
  if (isNaN(longueur(A, B)))
    window.notify('pointSurSegment : Quelque chose ne va pas avec les points', {
      A,
      B,
    })
  if (longueur(A, B) === 0) return pointDepuisPointAbstrait(A)
  if (l === undefined || typeof l === 'string') {
    l = (longueur(A, B) * randint(15, 85)) / 100
  }
  return pointDepuisPointAbstrait(
    homothetie(B, A, l / longueur(A, B), nom, positionLabel),
  )
}

/**
 *
 * @param {Cercle} c
 * @param {number} angle
 * @param {string} nom
 * @param {string} positionLabel
 * M = pointSurCercle(c,'','M') // M est un point choisi au hasard sur le cercle c et se nomme M.
 * N = pointSurCercle(c,90) // N est le point du cercle c situé à 90° par rapport à l'horizontale, donc au dessus du centre de c
 * P = pointSurCercle(c,-90) // P est le point du cercle c situé à l'opposé du point N précédent.
 * @author Jean-Claude Lhote
 */
export function pointSurCercle(
  c: ICercle,
  angle: number,
  nom: string,
  positionLabel = 'above',
): Point {
  if (typeof angle !== 'number') angle = randint(-180, 180)
  const x = c.centre.x + c.rayon * Math.cos(degToRad(angle))
  const y = c.centre.y + c.rayon * Math.sin(degToRad(angle))
  return point(x, y, nom, positionLabel)
}

/**
 * Retourne un point sur la droite d dont l'abscisse est x. Si c'est impossible (droite verticale) alors ce sera le point dont l'ordonnée vaut x.
 * @param {Droite} d
 * @param {number} x Abscisse du point
 * @param {string} [nom] Nom du point
 * @param {string} [positionLabel='above'] Facultatif, 'above' par défaut.
 * @return {Point} Point de la droite d dont l'abscisse est x
 * @author Jean-Claude Lhote
 */
export function pointSurDroite(
  d: IDroite,
  x: number,
  nom = '',
  positionLabel = 'above',
): Point {
  // si d est parallèle à l'axe des ordonnées, le paramètre x servira pour y.
  if (d.b === 0) return point(-d.c / d.a, x, nom, positionLabel)
  else if (d.a === 0) return point(x, -d.c / d.b, nom, positionLabel)
  else return point(x, (-d.c - d.a * x) / d.b, nom, positionLabel)
}

/**
 * Renvoie 'M' le point d'intersection des droites d1 et d2
 * @param {IDroite} d
 * @param {IDroite} f
 * @param {string} nom  le nom du point d'intersection. Facultatif, vide par défaut.
 * @param {string} [positionLabel='above'] Facultatif, 'above' par défaut.
 * @return {Point} Point 'M' d'intersection de d1 et de d2
 * @author Jean-Claude Lhote
 */
export function pointIntersectionDD(
  d: IDroite,
  f: IDroite,
  nom = '',
  positionLabel = 'above',
): Point | false {
  let x, y
  if (egal(f.a * d.b - f.b * d.a, 0, 0.000001)) {
    // Les droites sont parallèles ou confondues, pas de point d'intersection ou une infinité
    return pointIntersectionNonTrouveEntre(d, f, point(0, 0))
  } else {
    y = (f.c * d.a - d.c * f.a) / (f.a * d.b - f.b * d.a)
  }
  if (egal(d.a, 0, 0.000001)) {
    // si d est horizontale alors f ne l'est pas donc f.a<>0
    x = (-f.c - f.b * y) / f.a
  } else {
    // d n'est pas horizontale donc ...
    x = (-d.c - d.b * y) / d.a
  }
  return point(x, y, nom, positionLabel)
}

/**
 * @example pointAdistance(A,d,angle,nom="",positionLabel="above") // Seuls le point A et la distance d sont obligatoires, angle peut être choisi : il s'agit de l'angle signé avec l'axe [OI) sinon, il est choisi aléatoirement.
 * @example p=pointAdistance(A,5,'M') // Place un point aléatoirement à 5 unités de A et lui donne le nom de 'M'.
 * @author Jean-Claude Lhote
 */
export function pointAdistance(
  A: IPointAbstrait,
  d: number = 1,
  angle: string | number = 0,
  nom = '',
  positionLabel = 'above',
): Point {
  let leNom = ''
  let lAngle = 0
  let lePositionLabel = 'above'
  if (typeof angle === 'string') {
    lAngle = randint(0, 360)
    leNom = angle
    if (nom != null) lePositionLabel = nom
  } else {
    lAngle = angle ?? randint(0, 360)
    if (nom != null) leNom = nom
    if (positionLabel != null) lePositionLabel = positionLabel
  }

  const B = point(A.x + 1, A.y)
  return pointDepuisPointAbstrait(
    similitude(B, A, lAngle, d, leNom, lePositionLabel),
  )
}

/**
 * @param {Droite} d la droite qui intecepte (ou pas le cercle)
 * @param {Cercle} C le cercle
 * @param {string} nom le nom du point d'intersection
 * @param {entier} n 1 pour le premier point, 2 sinon. Si il n'y a qu'un seul point d'intesection, l'un ou l'autre renvoie ce point.
 * @example I = pointItersectionLC(d,c,'I',1) // I est le premier point d'intersection si il existe de la droite (d) et du cercle (c). On renvoie le centre du cercle sinon.
 * @author Jean-Claude Lhote
 */
export function pointIntersectionLC(
  d: IDroite,
  C: ICercle,
  nom = '',
  n = 1,
): Point | false {
  const O = C.centre
  const r = C.rayon
  const a = d.a
  const b = d.b
  const c = d.c
  const xO = O.x
  const yO = O.y
  let Delta, delta, xi, yi, xiPrime, yiPrime
  if (egal(b, 0, 0.000001)) {
    // la droite est verticale
    xi = -c / a
    xiPrime = xi
    Delta = 4 * (-xO * xO - (c * c) / (a * a) - (2 * xO * c) / a + r * r)
    if (Delta < 0) return pointIntersectionNonTrouveEntre(d, C, C.centre)
    else if (egal(Delta, 0)) {
      // un seul point d'intersection
      yi = yO + Math.sqrt(Delta) / 2
      yiPrime = yi
    } else {
      // deux points d'intersection
      yi = yO - Math.sqrt(Delta) / 2
      yiPrime = yO + Math.sqrt(Delta) / 2
    }
  } else if (egal(a, 0, 0.0000001)) {
    // la droite est horizontale
    yi = -c / b
    yiPrime = yi
    Delta = 4 * (-yO * yO - (c * c) / (b * b) - (2 * yO * c) / b + r * r)
    if (Delta < 0) return pointIntersectionNonTrouveEntre(d, C, C.centre)
    else if (egal(Delta, 0)) {
      // un seul point d'intersection
      xi = xO + Math.sqrt(Delta) / 2
      xiPrime = xi
    } else {
      // deux points d'intersection
      xi = xO - Math.sqrt(Delta) / 2
      xiPrime = xO + Math.sqrt(Delta) / 2
    }
  } else {
    // cas général
    Delta =
      (2 * ((a * c) / (b * b) + (yO * a) / b - xO)) ** 2 -
      4 *
        (1 + (a / b) ** 2) *
        (xO * xO + yO * yO + (c / b) ** 2 + (2 * yO * c) / b - r * r)
    if (Delta < 0) return pointIntersectionNonTrouveEntre(d, C, C.centre)
    else if (egal(Delta, 0)) {
      // un seul point d'intersection
      delta = Math.sqrt(Delta)
      xi =
        (-2 * ((a * c) / (b * b) + (yO * a) / b - xO) - delta) /
        (2 * (1 + (a / b) ** 2))
      xiPrime = xi
      yi = (-a * xi - c) / b
      yiPrime = yi
    } else {
      // deux points d'intersection
      delta = Math.sqrt(Delta)
      xi =
        (-2 * ((a * c) / (b * b) + (yO * a) / b - xO) - delta) /
        (2 * (1 + (a / b) ** 2))
      xiPrime =
        (-2 * ((a * c) / (b * b) + (yO * a) / b - xO) + delta) /
        (2 * (1 + (a / b) ** 2))
      yi = (-a * xi - c) / b
      yiPrime = (-a * xiPrime - c) / b
    }
  }
  if (n === 1) {
    if (yiPrime > yi) {
      return point(xiPrime, yiPrime, nom)
    } else {
      return point(xi, yi, nom)
    }
  } else {
    if (yiPrime > yi) {
      return point(xi, yi, nom)
    } else {
      return point(xiPrime, yiPrime, nom)
    }
  }
}

/**
 * M = pointIntersectionCC(c1,c2,'M') // M est le point d'intersection le plus haut des cercles c1 et c2
 * M = pointIntersectionCC(c1,c2,'M',2) // M est le point d'intersection le plus bas des cercles c1 et c2
 * La fonction ne renvoie rien si les cercles n'ont pas de points d'intersection
 * @author Rémi Angot
 * @see https://stackoverflow.com/questions/12219802/a-javascript-function-that-returns-the-x-y-points-of-intersection-between-two-ci
 */
export function pointIntersectionCC(
  c1: ICercle,
  c2: ICercle,
  nom = '',
  n = 1,
): Point | false {
  const O1 = c1.centre
  const O2 = c2.centre
  const r0 = c1.rayon
  const r1 = c2.rayon
  const x0 = O1.x
  const x1 = O2.x
  const y0 = O1.y
  const y1 = O2.y
  const dx = x1 - x0
  const dy = y1 - y0
  const d = Math.sqrt(dy * dy + dx * dx)
  if (d > r0 + r1) {
    return pointIntersectionNonTrouveEntre(c1, c2, c1.centre)
  }
  if (d < Math.abs(r0 - r1)) {
    return pointIntersectionNonTrouveEntre(c1, c2, c1.centre)
  }
  const a = (r0 * r0 - r1 * r1 + d * d) / (2.0 * d)
  const x2 = x0 + (dx * a) / d
  const y2 = y0 + (dy * a) / d
  const h = Math.sqrt(r0 * r0 - a * a)
  const rx = -dy * (h / d)
  const ry = dx * (h / d)
  const xi = x2 + rx
  const xiPrime = x2 - rx
  const yi = y2 + ry
  const yiPrime = y2 - ry
  if (n === 1) {
    if (yiPrime > yi) {
      return point(xiPrime, yiPrime, nom)
    } else {
      return point(xi, yi, nom)
    }
  } else {
    if (yiPrime > yi) {
      return point(xi, yi, nom)
    } else {
      return point(xiPrime, yiPrime, nom)
    }
  }
}

function pointIntersectionNonTrouveEntre(
  objet1: ICercle | IDroite,
  objet2: ICercle | IDroite,
  valeurParDefaut: IPointAbstrait,
): false {
  // window.notify(`${objet1.nom} et ${objet2.nom} ne se coupent pas. Impossible de trouver leur intersection.`, { objet1, objet2 })
  // return pointDepuisPointAbstrait(valeurParDefaut)
  return false
}

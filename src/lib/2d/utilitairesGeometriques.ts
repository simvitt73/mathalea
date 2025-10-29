import type {
  ICercle,
  IDroite,
  IPointAbstrait,
  IPolygone,
  ISegment,
} from './Interfaces'
import type { PointAbstrait } from './points-abstraits'
import { vecteur } from './segmentsVecteurs'

/**
 * Teste l'appartenance d'un point dans un triangle
 * @param {IPointAbstrait} M Point à tester
 * @param {IPointAbstrait} A Premier sommet du triangle
 * @param {IPointAbstrait} B Deuxième sommet du triangle
 * @param {IPointAbstrait} C Troisième sommet du triangle
 * @example estDansTriangle(M, V, S, T) // Renvoie true si M appartient au triangle VST, false sinon
 * @author Eric Elter
 * @return {boolean}
 */
export function estDansTriangle(
  M: IPointAbstrait,
  A: IPointAbstrait,
  B: IPointAbstrait,
  C: IPointAbstrait,
): boolean {
  const vMA = { x: A.x - M.x, y: A.y - M.y }
  const vMB = { x: B.x - M.x, y: B.y - M.y }
  const vMC = { x: C.x - M.x, y: C.y - M.y }
  const x1 = vMB.x * vMC.y - vMB.y * vMC.x
  const x2 = vMC.x * vMA.y - vMC.y * vMA.x
  const x3 = vMA.x * vMB.y - vMA.y * vMB.x
  return (x1 >= 0 && x2 >= 0 && x3 >= 0) || (x1 <= 0 && x2 <= 0 && x3 <= 0)
}

/**
 * Teste l'appartenance d'un point dans un quadrilatère
 * @param {IPointAbstrait} M Point à tester
 * @param {IPointAbstrait} A Premier sommet du quadrilatère
 * @param {IPointAbstrait} B Deuxième sommet du quadrilatère
 * @param {IPointAbstrait} C Troisième sommet du quadrilatère
 * @param {IPointAbstrait} D Quatrième sommet du quadrilatère
 * @example estDansQuadrilatere(M, F, G, H, I) // Renvoie true si M appartient au quadrilatère FGHI, false sinon
 * @author Eric Elter
 * @return {boolean}
 */
export function estDansQuadrilatere(
  M: IPointAbstrait,
  A: IPointAbstrait,
  B: IPointAbstrait,
  C: IPointAbstrait,
  D: IPointAbstrait,
): boolean {
  return estDansTriangle(M, A, B, C) || estDansTriangle(M, A, C, D)
}

/**
 * Teste l'appartenance d'un point à un polygone convexe
 * @param {IPointAbstrait} M Point à tester
 * @param {Polygone} p Polygone dont on veut tester l'appartenance avec le point
 * @example estDansPolygoneConvexe(M, p1) // Renvoie true si M appartient au polygone convexe p1, false sinon
 * @author Jean-Claude Lhote
 * @return {boolean}
 */
export function estDansPolygoneConvexe(
  M: IPointAbstrait,
  p: IPolygone,
): boolean {
  const l = p.listePoints.length
  if (l === 3) {
    return estDansTriangle(
      M,
      p.listePoints[0],
      p.listePoints[1],
      p.listePoints[2],
    )
  } else {
    const A = p.listePoints[0]
    const B = p.listePoints[1]
    const C = p.listePoints[l - 1]
    // Import dynamique pour éviter la circularité
    const { polygone } = require('./polygones')
    const p2 = polygone(...p.listePoints.slice(1))
    if (estDansTriangle(M, A, B, C)) return true
    else return estDansPolygoneConvexe(M, p2)
  }
}

/**
 * Teste l'appartenance d'un point à tout type de polygone (non convexe ou convexe)
 * Pour info, la fonction utilise une triangulation du polygone réalisée par la librairie earcut
 * @param {IPointAbstrait} M Point à tester
 * @param {Polygone} p Polygone dont on veut tester l'appartenance avec le point
 * @example estDansPolygone(M, p1) // Renvoie true si M appartient au polygone p1, false sinon
 * @author Jean-Claude Lhote
 * @return {boolean}
 */
export function estDansPolygone(M: IPointAbstrait, p: IPolygone): boolean {
  for (const triangle of p.triangulation) {
    if (estDansTriangle(M, triangle[0], triangle[1], triangle[2])) return true
  }
  return false
}

/**
 * Teste si un point M est sur un objet géométrique (droite, segment, demi-droite, cercle)
 */
export function pointEstSur(
  M: IPointAbstrait,
  objet:
    | IDroite
    | ISegment
    | { extremite1: IPointAbstrait; extremite2: IPointAbstrait }
    | ICercle,
): boolean {
  // Droite (ax + by + c = 0)
  if ('pente' in objet) {
    return Math.abs(objet.a * M.x + objet.b * M.y + objet.c) <= 0.01
  }

  // Segment (borné) — détection via propriété longueur (ISegment)
  if ('extremite1' in objet && 'extremite2' in objet && 'longueur' in objet) {
    const prodvect =
      (objet.extremite2.x - objet.extremite1.x) * (M.y - objet.extremite1.y) -
      (M.x - objet.extremite1.x) * (objet.extremite2.y - objet.extremite1.y)
    const prodscal =
      (M.x - objet.extremite1.x) * (objet.extremite2.x - objet.extremite1.x) +
      (M.y - objet.extremite1.y) * (objet.extremite2.y - objet.extremite1.y)
    const prodscalABAB =
      (objet.extremite2.x - objet.extremite1.x) ** 2 +
      (objet.extremite2.y - objet.extremite1.y) ** 2
    return (
      Math.abs(prodvect) <= 0.01 && prodscal >= 0 && prodscal <= prodscalABAB
    )
  }

  // Demi-droite (non bornée dans un sens) — détection générique par extremite1/extremite2
  if ('extremite1' in objet && 'extremite2' in objet) {
    const OM = { x: M.x - objet.extremite1.x, y: M.y - objet.extremite1.y }
    const vd = {
      x: objet.extremite2.x - objet.extremite1.x,
      y: objet.extremite2.y - objet.extremite1.y,
    }
    const prodscal = OM.x * vd.x + OM.y * vd.y
    const prodvect = OM.x * vd.y - OM.y * vd.x
    return Math.abs(prodvect) <= 0.01 && Math.abs(prodscal) >= 0.01
  }

  // Cercle (distance au centre = rayon)
  if ('rayon' in objet && 'centre' in objet) {
    return Math.abs(longueur(M, objet.centre) - Number(objet.rayon)) <= 0.01
  }

  return false
}

export const longueur = (
  A: IPointAbstrait,
  B: IPointAbstrait,
  precision = 2,
): number => {
  const dx = B.x - A.x
  const dy = B.y - A.y
  return Number(Math.sqrt(dx * dx + dy * dy).toFixed(precision))
}
/**
 * Convertit un nombre de degrés quelconque en une mesure comprise entre -180 et 180
 * @param {number} a Valeur en degrés dont on cherche la valeur entre -180 et 180
 * @example x = angleModulo(170)
 * // x contient 170
 * @example x = angleModulo(190)
 * // x contient -170
 * @example x = angleModulo(3690)
 * // x contient 90
 * @example x = angleModulo(180)
 * // x contient 180
 * @example x = angleModulo(-180)
 * // x contient 180
 * @return {number}
 */
// JSDOC Validee par EE Juin 2022

export function angleModulo(a: number) {
  while (a <= -180) a = a + 360
  while (a > 180) a = a - 360
  return a
} /**
 * Retourne la valeur signée de la mesure d'un angle en degré
 * @param {PointAbstrait} A Point sur un côté de l'angle
 * @param {PointAbstrait} O Sommet de l'angle
 * @param {PointAbstrait} B Point sur l'autre côté de l'angle
 * @param {number} [precision = 2] Nombre maximal de décimales de la valeur arrondie de la mesure de l'angle orienté
 * @example x = angleOriente(H,E,T)
 * // x contient la valeur de la mesure de l'angle orienté HET, arrondie au centième
 * @example x = angleOriente(H,E,T,0)
 * // x contient la valeur de la mesure de l'angle orienté HET, arrondie à l'unité
 * @return {number}
 * @author Jean-Claude Lhote
 */
export function angleOriente(
  A: IPointAbstrait,
  O: IPointAbstrait,
  B: IPointAbstrait,
  precision = 2,
) {
  const OA = longueur(O, A, precision)
  const OB = longueur(O, B, precision)
  if (OA < 1e-12 || OB < 1e-12) {
    // On considère qu'un côté de l'angle a une longueur nulle, et ce n'est pas normal !
    return 0
  }

  // Vecteurs OA et OB
  const vOA = { x: A.x - O.x, y: A.y - O.y }
  const vOB = { x: B.x - O.x, y: B.y - O.y }

  // Produit vectoriel (déterminant 2D) : OA × OB
  const produitVectoriel = vOA.x * vOB.y - vOA.y * vOB.x

  // Signe de l'angle orienté
  const signe = produitVectoriel >= 0 ? 1 : -1

  return Number((signe * angle(A, O, B, 10)).toFixed(precision))
} /**
 * Retourne la valeur la mesure d'un angle en radian
 * @param {PointAbstrait} A Point sur un côté de l'angle
 * @param {PointAbstrait} O Sommet de l'angle
 * @param {PointAbstrait} B Point sur l'autre côté de l'angle
 * @param {number} [precision = 2] Nombre maximal de décimales de la valeur arrondie de la mesure de l'angle orienté
 * @example x = angleradian(H,E,T)
 * // x contient la valeur de la mesure de l'angle HET en radians, arrondie au centième
 * @example x = angleradian(H,E,T,0)
 * // x contient la valeur de la mesure de l'angle HET en radians, arrondie à l'unité
 * @return {number}
 * @author Rémi Angot
 */
// JSDOC Validee par EE Juin 2022

export function angleradian(
  A: PointAbstrait,
  O: PointAbstrait,
  B: PointAbstrait,
  precision = 2,
) {
  const OA = longueur(O, A, precision)
  const OB = longueur(O, B, precision)
  const AB = longueur(A, B, precision)
  return Number(
    Math.acos((AB ** 2 - OA ** 2 - OB ** 2) / (-2 * OA * OB)).toFixed(
      precision,
    ),
  )
} /**
 * Renvoie la mesure d'angle en degré
 * @param {PointAbstrait} A Point sur un côté de l'angle
 * @param {PointAbstrait} O Sommet de l'angle
 * @param {PointAbstrait} B Point sur l'autre côté de l'angle
 * @param {number} [precision = 2] Nombre maximal de décimales de la valeur arrondie de la mesure de l'angle
 * @example x = angle(H,E,T)
 * // x contient la mesure en degré de l'angle HET, arrondi au centième
 * @example x = angle(H,E,T,0)
 * // x contient la mesure en degré de l'angle HET, arrondi à l'unité
 * @return {number}
 * @author Rémi Angot
 */
// JSDOC Validee par EE Juin 2022

export function angle(
  A: PointAbstrait | IPointAbstrait,
  O: PointAbstrait | IPointAbstrait,
  B: PointAbstrait | IPointAbstrait,
  precision = 2,
) {
  const OA = longueur(O, A, precision)
  const OB = longueur(O, B, precision)
  const AB = longueur(A, B, precision)
  if (OA > 0 && OB > 0) {
    const v = vecteur(O, A)
    const w = vecteur(O, B)
    if (Math.abs(v.x * w.y - v.y * w.x) <= 0.000000000001) {
      // vecteurs colinéaires à epsilon près pour éviter les effets de bords dus aux flottants.
      if (v.x * w.x > 0) return 0
      else if (v.x * w.x < 0) return 180
      else if (v.y * w.y > 0) return 0
      else return 180
    } else {
      let cos = (AB ** 2 - OA ** 2 - OB ** 2) / (-2 * OA * OB)
      if (cos < -1) cos = -1
      if (cos > 1) cos = 1
      const alpha = Math.acos(cos)
      return Number(((alpha * 180) / Math.PI).toFixed(precision))
    }
  } else {
    // Ce n'est pas normal de demander la mesure d'un angle dont un côté a une longueur nulle.
    return 0
  }
}

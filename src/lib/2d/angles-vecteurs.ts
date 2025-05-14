import { egal } from '../outils/comparaisons'
import { arrondi, unSiPositifMoinsUnSinon } from '../outils/nombres'
import type { PointSimple } from './points-simples'
import { rotation } from './transformations'
import { vecteurAbstrait } from './vecteurs-abstraits'
import { longueur } from './mesures'

/**
 * Renvoie la mesure d'angle en degré
 * @param {PointSimple} A Point sur un côté de l'angle
 * @param {PointSimple} O Sommet de l'angle
 * @param {PointSimple} B Point sur l'autre côté de l'angle
 * @param {number} [precision = 2] Nombre maximal de décimales de la valeur arrondie de la mesure de l'angle
 * @example x = angle(H,E,T)
 * // x contient la mesure en degré de l'angle HET, arrondi au centième
 * @example x = angle(H,E,T,0)
 * // x contient la mesure en degré de l'angle HET, arrondi à l'unité
 * @return {number}
 * @author Rémi Angot
 */
// JSDOC Validee par EE Juin 2022
export function angle (A: PointSimple, O: PointSimple, B: PointSimple, precision = 2) {
  const OA = longueur(O, A, precision)
  const OB = longueur(O, B, precision)
  const AB = longueur(A, B, precision)
  if (OA > 0 && OB > 0) {
    const v = vecteurAbstrait(O, A)
    const w = vecteurAbstrait(O, B)
    if (egal(v.x * w.y - v.y * w.x, 0)) { // vecteurs colinéaires à epsilon près pour éviter les effets de bords dus aux flottants.
      if (v.x * w.x > 0) return 0
      else if (v.x * w.x < 0) return 180
      else if (v.y * w.y > 0) return 0
      else return 180
    } else {
      let cos = (AB ** 2 - OA ** 2 - OB ** 2) / (-2 * OA * OB)
      if (cos < -1) cos = -1
      if (cos > 1) cos = 1
      const alpha = Math.acos(cos)
      return arrondi(alpha * 180 / Math.PI, precision)
    }
  } else {
    // Ce n'est pas normal de demander la mesure d'un angle dont un côté a une longueur nulle.
    return 0
  }
}

/**
 * Retourne la valeur signée de la mesure d'un angle en degré
 * @param {PointSimple} A Point sur un côté de l'angle
 * @param {PointSimple} O Sommet de l'angle
 * @param {PointSimple} B Point sur l'autre côté de l'angle
 * @param {number} [precision = 2] Nombre maximal de décimales de la valeur arrondie de la mesure de l'angle orienté
 * @example x = angleOriente(H,E,T)
 * // x contient la valeur de la mesure de l'angle orienté HET, arrondie au centième
 * @example x = angleOriente(H,E,T,0)
 * // x contient la valeur de la mesure de l'angle orienté HET, arrondie à l'unité
 * @return {number}
 * @author Jean-Claude Lhote
 */
// JSDOC Validee par EE Juin 2022
export function angleOriente (A: PointSimple, O: PointSimple, B: PointSimple, precision = 2) {
  const OA = longueur(O, A, precision)
  const OB = longueur(O, B, precision)
  if (OA < 1e-12 || OB < 1e-12) { // On considère qu'un côté de l'angle a une longueur nulle, et ce n'est pas normal !
    // window.notify('angleOriente() a reçu des points confondus pour déterminer l\'angle !', { OA, OB })
    return 0
  }
  const A2 = rotation(A, O, 90)
  const v = vecteurAbstrait(O, B)
  const u = vecteurAbstrait(O, A2)

  return arrondi(unSiPositifMoinsUnSinon(arrondi(v.x * u.x + v.y * u.y, 10)) * angle(A, O, B, 10), precision)
}

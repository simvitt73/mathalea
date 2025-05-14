import { arrondi, unSiPositifMoinsUnSinon } from '../outils/nombres'
import { angle } from './angles-vecteurs'
import type { PointSimple } from './points-simples'
import { rotation } from './transformations'
import { longueur } from './mesures'
import { vecteurAbstrait } from './vecteurs-abstraits'

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
export function angleModulo (a: number) {
  while (a <= -180) a = a + 360
  while (a > 180) a = a - 360
  return a
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

/**
 * Retourne la valeur la mesure d'un angle en radian
 * @param {PointSimple} A Point sur un côté de l'angle
 * @param {PointSimple} O Sommet de l'angle
 * @param {PointSimple} B Point sur l'autre côté de l'angle
 * @param {number} [precision = 2] Nombre maximal de décimales de la valeur arrondie de la mesure de l'angle orienté
 * @example x = angleradian(H,E,T)
 * // x contient la valeur de la mesure de l'angle HET en radians, arrondie au centième
 * @example x = angleradian(H,E,T,0)
 * // x contient la valeur de la mesure de l'angle HET en radians, arrondie à l'unité
 * @return {number}
 * @author Rémi Angot
 */
// JSDOC Validee par EE Juin 2022
export function angleradian (A: PointSimple, O: PointSimple, B: PointSimple, precision = 2) {
  const OA = longueur(O, A, precision)
  const OB = longueur(O, B, precision)
  const AB = longueur(A, B, precision)
  return arrondi(Math.acos((AB ** 2 - OA ** 2 - OB ** 2) / (-2 * OA * OB)), precision)
}

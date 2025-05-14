import { PointSimple } from './points-simples'
import { arrondi } from '../outils/nombres'

/**
 * Renvoie la distance de A à B
 * @param {PointSimple} A
 * @param {PointSimple} B
 * @param {number} [precision] Nombre de chiffres après la virgule.
 * (ne sert à rien car si le number correspondant à l'arrondi ne tombe pas sur un flottant convertible en bianire sans erreur, il y aura 18 chiffres significatifs dans le number retourné
 * C'est à la fonction d'affichage de limiter le nombre de chiffres
 * @author Rémi Angot
 */
export function longueur (A: PointSimple, B: PointSimple, precision = 2) {
  return arrondi(Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2), precision ?? 6)
  // j chiffres après la virgule pour l'arrondi sachant que c'est à la fonction d'affichage de limiter le nombre de chiffres.
}

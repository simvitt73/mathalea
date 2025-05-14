import { arrondi } from '../outils/nombres'

/**
 * Un point simple avec juste ce qu'il faut pour le tracer, sans toutes les fonctions estSur... etc.
 * À privilégier dans le moteur pour limiter les dépendances circulaires.
 * À utiliser pour les valeurs intermédiaires utilisées par le moteur (lorsqu'une fonction destinée à des développeurs d'exercices renvoie un point, renvoyer un Point avec toutes les options, pas un PointSimple).
 * @author Guillaume Valmont
 */
export class PointSimple {
  x: number
  y: number

  constructor (x: number, y: number) {
    // On n'a pas besoin de davantage de décimales pour les graphiques !
    this.x = arrondi(x, 2)
    this.y = arrondi(y, 2)
  }

  xSVG (coeff: number) {
    return arrondi(this.x * coeff, 1)
  }

  ySVG (coeff: number) {
    return arrondi(-this.y * coeff, 1)
  }
}

/**
 * Crée un objet PointSimple ayant juste les propriétés suivantes :
 * @param {number} x abscisse
 * @param {number} y ordonnée
 * @param {string} [A] son nom qui apparaîtra
 * @param {string} [positionLabel] Les possibilités sont : 'left', 'right', 'below', 'above', 'above right', 'above left', 'below right', 'below left'. Si on se trompe dans l'orthographe, ce sera 'above left' et si on ne précise rien, pour un point ce sera 'above'.
 * @return {PointSimple}
 */
export function pointSimple (x: number, y: number) {
  return new PointSimple(x, y)
}

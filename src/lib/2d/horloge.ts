import { ObjetMathalea2D } from '../../modules/2dGeneralites'
import type Hms from '../../modules/Hms'
import { cercle } from './cercle'
import { point } from './points'
import { segment, vecteur } from './segmentsVecteurs'
import { latex2d } from './textes'
import { rotation, translation } from './transformations'

/**
 * Un objet pour avoir une horloge
 * Si heure n'est pas définie, il n'y a pas d'aiguilles.
 * @author Jean-Claude Lhote
 * Date de publication : 01/02/2025
 */
export default class Horloge extends ObjetMathalea2D {
  constructor (x = 0, y = 0, rayon = 2, heure?: Hms) {
    super()
    this.objets = []
    const O = point(x, y)
    const C = cercle(O, rayon)
    C.opacite = 0.8
    this.objets.push(C)
    const rouage = cercle(O, 0.15)
    rouage.epaisseur = 3
    this.objets.push(rouage)
    const t = segment(x + rayon - 0.2, y, x + rayon - 0.1, y)
    for (let i = 0; i < 4; i++) {
      const tick1 = rotation(t, O, 30 + i * 90)
      const tick2 = rotation(t, O, 60 + i * 90)
      const tick3 = rotation(t, O, 90 + i * 90)
      const opaciteTick = 0.6
      tick1.opacite = opaciteTick
      tick2.opacite = opaciteTick
      tick3.opacite = opaciteTick
      this.objets.push(tick1, tick2, tick3)
    }
    const ecartNumeros = 0.45
    for (let i = 1; i <= 12; i++) {
      const angleRot = Math.PI / 180 * (90 - i * 30)
      const numero = latex2d(String(i), x + (rayon - ecartNumeros) * Math.cos(angleRot), y + (rayon - ecartNumeros) * Math.sin(angleRot), { letterSize: 'tiny', orientation: 0, opacity: 0.6 })
      this.objets.push(numero)
    }
    if (heure != null) {
      const h = heure.hour
      const m = heure.minute
      const alpha = 90 - h * 30 - m / 2
      const beta = 90 - m * 6
      const grandeAiguille = rotation(segment(translation(O, vecteur(0.2, 0)), point(x + rayon - 0.6, y)), O, beta)
      const petiteAiguille = rotation(segment(translation(O, vecteur(0.2, 0)), point(x + rayon - 1, y)), O, alpha)
      petiteAiguille.epaisseur = 3
      grandeAiguille.epaisseur = 2
      this.objets.push(petiteAiguille, grandeAiguille)
    }
  }

  svg (coef: number) {
    let code = ''
    if (this.objets != null) {
      for (const objet of this.objets) {
        code += objet.svg(coef) + '\n'
      }
    }
    return code
  }

  // à remplacer par un code tikzPicture plus propre ?
  tikz () {
    let code = ''
    if (this.objets != null) {
      for (const objet of this.objets) {
        code += objet.tikz() + '\n'
      }
    }
    return code
  }
}

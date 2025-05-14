import { ObjetMathalea2D } from '../../modules/2dGeneralites'
import { texteParPosition } from './textes'
import { segment } from './segments'

export class NomAngleParPosition extends ObjetMathalea2D {
  constructor (nom: string, x: number, y: number, color: string, s: number) {
    super()
    this.objets = []
    this.objets.push(texteParPosition(nom, x, y, 0, color, 1, 'milieu', true))
    const s1 = segment(x - 0.6, y + 0.4 - s / 10, x + 0.1, y + 0.4 + s / 10, color)
    const s2 = segment(x + 0.1, y + 0.4 + s / 10, x + 0.8, y + 0.4 - s / 10, color)
    this.objets.push(s1, s2)
  }

  svg (coeff: number) {
    let code = ''
    if (this.objets != null) {
      for (const objet of this.objets) {
        code += '\n\t' + (objet as ObjetMathalea2D).svg(coeff)
      }
      return code
    } else return ''
  }

  tikz () {
    let code = ''
    if (this.objets != null) {
      for (const objet of this.objets) {
        code += '\n\t' + objet.tikz()
      }
      return code
    } else return ''
  }
}

export function nomAngleSaillantParPosition (nom: string, x: number, y: number, color: string) {
  return new NomAngleParPosition(nom, x, y, color, 1)
}

export function nomAngleRentrantParPosition (nom: string, x: number, y: number, color: string) {
  return new NomAngleParPosition(nom, x, y, color, -1)
}

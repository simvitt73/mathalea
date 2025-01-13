import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceCan from '../../ExerciceCan'
import { randint } from '../../../modules/outils'

export const titre = 'Ratios'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '3422o'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Jean-Claude Lhote

*/
export default class Can2025N4Q28 extends ExerciceCan {
  private enonce (a?:number, b?:number, c?:number) {
    if (a == null || b == null || c == null) {
      a = randint(2, 6)
      b = randint(2, 6, a)
      c = (a + b) * randint(2, 6)
    }
    const part = c / (a + b)
    const partA = part * a
    const partB = part * b
    this.question = `Dans un club sportif de ${c} membres, il y a ${partA} minimes et ${partB} cadets.<br>Quel est le ratio entre le nombre de minimes et de cadets ?`
    this.correction = `Le ratio entre le nombre de minimes et de cadets est de $${miseEnEvidence(`${partA}:${partB}`)}$ ou $${miseEnEvidence(`${a}:${b}`)}$`
    this.canEnonce = this.question
    this.formatChampTexte = 'fraction'
    this.reponse = [`${a}:${b}`, `${partA}:${partB}`]
    this.question += this.interactif ? '<br>' : ''
  }

  nouvelleVersion () {
    this.canOfficielle ? this.enonce(4, 3, 28) : this.enonce()
  }
}

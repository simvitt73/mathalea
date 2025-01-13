import { texNombre } from '../../../lib/outils/texNombre'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { choice } from '../../../lib/outils/arrayOutils'
import ExerciceCan from '../../ExerciceCan'

export const titre = 'Convertir des durées'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'ayxru'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Jean-Claude Lhote

*/
export default class Can2025N4Q11 extends ExerciceCan {
  private enonce (a?: number, b?: number) {
    if (a == null || b == null) {
      b = choice([4, 2])
      a = b === 4 ? choice([1, 2, 3]) : choice([1, 3])
    }
    this.reponse = Math.round(60 * a / b)
    this.question = `$\\dfrac{${a}}{${b}}$ d'heure`
    this.correction = `$\\dfrac{1}{${b}}\\text{ h}=${Math.round(60 / b)}\\text{ min}$ donc $\\dfrac{${a}}{${b}}$ d'heure, c'est : $${a}\\times ${Math.round(60 / b)}=${miseEnEvidence(texNombre(60 * a / b, 0))}\\text{ min}$.`
    this.canEnonce = this.question
    this.question += this.interactif ? '<br>' : ' $=\\ldots\\ldots$ min'
    this.canReponseACompleter = '$\\ldots\\ldots$ min'
    this.optionsChampTexte = { texteApres: ' min' }
  }

  nouvelleVersion () {
    this.canOfficielle ? this.enonce(1, 4) : this.enonce()
  }
}

import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceCan from '../../ExerciceCan'
import { randint } from '../../../modules/outils'
import { texNombre } from '../../../lib/outils/texNombre'

export const titre = 'Arrondir un nombre décimal'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '3ed97'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Jean-Claude Lhote

*/
export default class Can2025N4Q15 extends ExerciceCan {
  private enonce (a?: number) {
    if (a == null) {
      a = randint(1, 9) * 100 + randint(1, 9) * 10 + randint(1, 9) + randint(1, 9) / 10 + randint(1, 8) / 100 + randint(6, 8) / 1000
    }
    this.reponse = a.toFixed(2)
    this.question = `Arrondi de $${texNombre(a, 3)}$ au centième près`
    this.correction = `Le chiffre des millièmes est supérieur à 5, donc on arrondit au centième supérieur : $${texNombre(a, 3)}\\approx ${miseEnEvidence(texNombre(a, 2))}$`
    this.canEnonce = this.question
    this.canReponseACompleter = ''
    if (this.interactif) {
      this.question += '<br>'
    }
  }

  nouvelleVersion () {
    this.canOfficielle ? this.enonce(24.286) : this.enonce()
  }
}

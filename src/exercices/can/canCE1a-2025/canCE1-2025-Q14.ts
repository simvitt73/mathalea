import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceCan from '../../ExerciceCan'
import { randint } from '../../../modules/outils'
export const titre = 'Trouver un nombre'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '1ace5'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Gilles Mora

*/
export default class Can2025CE1Q14 extends ExerciceCan {
  enonce (a?: number) {
    if (a == null) {
      a = randint(70, 79)
    }

    this.question = `Écris un nombre dans lequel on entend $\\textit{vingt}$ et qui soit plus grand que $${a}$.`
    this.reponse = {
      reponse: {
        value: '[80;99]',
        options: { estDansIntervalle: true }
      }
    }
    this.optionsDeComparaison = { nombreDecimalSeulement: true }
    this.canEnonce = this.question
    this.correction = `Par exemple : $${miseEnEvidence(80)}$ qui se lit quatre-$\\textit{vingt}$.`
    if (this.interactif) { this.question += '<br>Le nombre entré doit être plus petit que $100$.' }
  }

  nouvelleVersion () {
    this.canOfficielle = this.sup
    this.canOfficielle ? this.enonce(79) : this.enonce()
  }
}

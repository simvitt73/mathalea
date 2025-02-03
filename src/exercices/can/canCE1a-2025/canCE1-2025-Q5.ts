import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceCan from '../../ExerciceCan'
import { randint } from '../../../modules/outils'

export const titre = 'Chercher un nombre'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'fe2b7'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Gilles Mora

*/
export default class Can2025CE1Q5 extends ExerciceCan {
  enonce (a?: number, b?: number) {
    if (a == null || b == null) {
      a = randint(1, 9)
      b = randint(1, 9)
    }
    const valInf = b * 100 + a * 10
    const valSup = b * 100 + (a + 1) * 10

    this.reponse = {
      reponse: {
        value: `[${valInf};${valSup}[`,
        options: { estDansIntervalle: true }
      }
    }
    this.optionsDeComparaison = { nombreDecimalSeulement: true }
    this.question = ` Un nombre a $${a}$ pour chiffre des dizaines et $${b}$ pour chiffre des centaines.<br>
Écris un nombre vérifiant cela.`
    this.correction = `Les nombres qui ont $${a}$ pour chiffre des dizaines et $${b}$ pour chiffre des centaines sont :<br>`
    for (let i = 0; i <= 9; i++) {
      this.correction += `$${miseEnEvidence(b * 100 + a * 10 + i)}$ ; `
    }

    this.canEnonce = this.question
    if (this.interactif) {
      this.question += ' : '
    }
  }

  nouvelleVersion () {
    this.canOfficielle = this.sup
    this.canOfficielle ? this.enonce(4, 5) : this.enonce()
  }
}

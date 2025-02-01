import ExerciceCan from '../../ExerciceCan'
import { propositionsQcm } from '../../../lib/interactif/qcm'
import { randint } from '../../../modules/outils'
import { miseEnEvidence } from '../../../lib/outils/embellissements'

export const titre = 'Trouver un nombre (QCM)'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'e6d64'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Gilles Mora

*/

export default class Can2025CE2Q6 extends ExerciceCan {
  enonce (a?: number, b?: number, nbre?:number) {
    if (a == null || b == null || nbre == null) {
      a = randint(6, 8) * 100 + 9 * 10 + randint(1, 9)
      b = a + 10
      nbre = a + randint(3, 9)
    }
    this.autoCorrection[0] = {
      propositions: [
        {
          texte: `$${nbre}$`,
          statut: true
        },
        {
          texte: `$${a - 5}$`,
          statut: false
        }, {
          texte: `$${b + 7}$`,
          statut: false
        }
      ],
      options: { vertical: true }
    }
    this.formatInteractif = 'qcm'
    this.question = `Coche le nombre qui est entre $${a}$ et $${b}$.`
    this.reponse = nbre // C'est juste pour pas faire planter mathaleaHandleExerciceSimple, cette réponse ne sera pas utilisée.
    const monQcm = propositionsQcm(this, 0)
    this.canEnonce = this.question
    this.question += `<br>\n${monQcm.texte}`
    this.correction = monQcm.texteCorr + `$${nbre}$ est plus petit que $${b}$ et plus grand que $${a}$, donc le nombre qui est entre $${a}$ et $${b}$ est : $${miseEnEvidence(nbre)}$.`
    this.canReponseACompleter = monQcm.texte
  }

  nouvelleVersion () {
    this.canOfficielle = this.sup
    this.canOfficielle ? this.enonce(785, 884, 799) : this.enonce()
  }
}

import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceCan from '../../ExerciceCan'
import { randint } from '../../../modules/outils'
import { point } from '../../../lib/2d/points'
import { cercle } from '../../../lib/2d/cercle'
import { segment } from '../../../lib/2d/segmentsVecteurs'
import { rotation } from '../../../lib/2d/transformations'
import { mathalea2d } from '../../../modules/2dGeneralites'
import { toutPourUnPoint } from '../../../lib/interactif/mathLive'
export const titre = 'Lire une heure sur une horloge'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '0e237'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * @author Gilles Mora

*/
export default class Can2025CE1Q18 extends ExerciceCan {
  enonce (h?: number, m?: number) {
    if (h == null || m == null) {
      h = randint(13, 22)
      m = randint(1, 11) * 5
    }
    const horloge = []
    const O = point(0, 0)
    const C = cercle(O, 2)
    horloge.push(C)
    const s = segment(1.5, 0, 1.9, 0)
    for (let i = 0; i < 4; i++) {
      horloge.push(rotation(s, O, 90 * i))
    }
    const t = segment(1.7, 0, 1.9, 0)
    for (let i = 0; i < 4; i++) {
      horloge.push(rotation(t, O, 30 + i * 90), rotation(t, O, 60 + i * 90))
    }
    this.formatInteractif = 'fillInTheBlank'
    this.reponse = { bareme: toutPourUnPoint, champ1: { value: h - 12 }, champ2: { value: h - 11 }, champ3: { value: m / 5 } }
    this.consigne = mathalea2d({ xmin: -3, ymin: -3, xmax: 3, ymax: 3, scale: 0.7, style: 'margin: auto' }, horloge)
    this.consigne += `Il est $${h}$ h $${m}$. `
    if (this.interactif) {
      this.question = '\\text{La petite aiguille doit être entre le } %{champ1}\\text{ et le }%{champ2}\\text{. }\\text{ La grande aiguille doit être sur le } %{champ3}\\text{. }'
    }

    this.correction = `La petite aiguille doit se situer entre le $${miseEnEvidence(h - 12)}$ et le $${miseEnEvidence(h - 11)}$.<br>
    La grande aiguille doit être sur le $${miseEnEvidence(m / 5)}$.`

    this.canEnonce = `Dessine les deux aiguilles de la pendule pour indiquer $${h}$ h $${m}$.`
    this.canReponseACompleter = mathalea2d({ xmin: -3, ymin: -3, xmax: 3, ymax: 3, scale: 0.7, style: 'margin: auto' }, horloge)
  }

  nouvelleVersion () {
    this.canOfficielle = this.sup
    this.canOfficielle ? this.enonce(13, 30) : this.enonce()
  }
}

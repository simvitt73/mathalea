import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { choice } from '../../../lib/outils/arrayOutils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import Decimal from 'decimal.js'
export const titre = 'Trouver le nombres de dixièmes, centièmes, millièmes'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'ffea6'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora
 * Référence
*/
export default class dixemeCentiemeMillieme extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire un exercice simple !
    this.nbQuestions = 1
    this.formatChampTexte = KeyboardType.clavierDeBase
    this.compare = fonctionComparaison
    this.optionsDeComparaison = { nombreDecimalSeulement: true }
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    const u = new Decimal(2025).div(choice([10, 100, 1000]))
    const d = new Decimal(2025).div(choice([100, 1000]))
    const c = new Decimal(2025).div(1000)
    const choix = choice([1, 2, 3])
    if (choix === 1) {
      this.reponse = u.toFixed(0)
      this.question = `Quelle est la valeur arrondie à l'unité de  $${texNombre(u, 3)}$ ?`
      this.correction = `La valeur arrondie à l'unité de  $${texNombre(u, 3)}$ est $${miseEnEvidence(texNombre(u, 0))}$.`
    } else if (choix === 2) {
      this.reponse = d.toFixed(1)
      this.question = `Quelle est la valeur arrondie au dixième de  $${texNombre(d, 3)}$ ?`
      this.correction = `La valeur arrondie au dixième de  $${texNombre(d, 3)}$ est $${miseEnEvidence(texNombre(d, 1))}$.`
    } else {
      this.reponse = c.toFixed(2)
      this.question = `Quelle est la valeur arrondie au centième de  $${texNombre(c, 3)}$ ?`
      this.correction = `La valeur arrondie au centième de  $${texNombre(c, 3)}$ est $${miseEnEvidence(texNombre(c, 2))}$.`
    }
    if (this.interactif) { this.question += '<br>' }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

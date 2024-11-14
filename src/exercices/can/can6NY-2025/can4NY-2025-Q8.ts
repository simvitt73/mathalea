import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { randint } from '../../../modules/outils'
import Decimal from 'decimal.js'
export const titre = 'Calculer avec des parenthèses'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '86cb7'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter+  Gilles Mora
 * Référence
*/
export default class CalculParentheses extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire un exercice simple !
    this.nbQuestions = 1
    this.formatChampTexte = KeyboardType.clavierDeBase
    this.compare = fonctionComparaison
    // this.optionsDeComparaison = { nombreDecimalSeulement: true }
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []

    const a = randint(1, 12) * 2 + 1

    this.reponse = texNombre(new Decimal(2025).sub(a).div(2), 0)
    this.question = `Calculer $(${texNombre(2025, 0)}-${a})\\times 0,5$.`
    this.correction = `Multiplier par $0,5$ revient à prendre la moitié.<br>
      Ains, $(${texNombre(2025, 0)}-${a})\\times 0,5=${miseEnEvidence(this.reponse)}$.`

    if (this.interactif) { this.question += '<br>' }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

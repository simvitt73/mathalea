import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import Decimal from 'decimal.js'
import { choice } from '../../../lib/outils/arrayOutils'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
export const titre = 'Décomposer un nombre'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '00198'
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter - Gilles Mora
 * Référence
*/
export default class SommeDeProduitsCompleter extends Exercice {
  constructor () {
    super()
    this.titre = titre
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire faire un exercice simple !
    this.nbQuestions = 1
    this.formatInteractif = 'calcul'
    this.formatChampTexte = ''
    this.optionsChampTexte = { texteAvant: ' $=$' }
    this.compare = fonctionComparaison
    this.formatChampTexte = KeyboardType.clavierDeBase
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    const den = choice([10, 100, 1000])
    const a = new Decimal(2025).div(den)
    this.reponse = texNombre(a, 3)
    this.question = `Écrire sous forme décimale : $\\dfrac{${texNombre(2025, 0)}}{${texNombre(den, 0)}}$`
    if (this.interactif) {
      this.question = `Écrire sous forme décimale : <br>
            $\\dfrac{${texNombre(2025, 0)}}{${texNombre(den, 0)}}$`
    }
    this.correction = `$\\dfrac{${texNombre(2025, 0)}}{${texNombre(den, 0)}}=${miseEnEvidence(texNombre(a, 3))}$`

    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { choice } from '../../../lib/outils/arrayOutils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { randint } from '../../../modules/outils'
import { ecritureParentheseSiNegatif } from '../../../lib/outils/ecritures'
import { abs } from '../../../lib/outils/nombres'
export const titre = 'Calculer avec une racine carrée'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '2f929'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter - Gilles Mora
 * Référence
*/
export default class calcAvecChiffresPrio extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire faire un exercice simple !
    this.nbQuestions = 1
    this.optionsChampTexte = { texteAvant: ' $=$' }
    this.formatChampTexte = KeyboardType.clavierDeBase
    this.compare = fonctionComparaison
    // this.optionsDeComparaison = { nombreDecimalSeulement: true }
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    const choix = randint(1, 3)
    let nbre
    if (choix === 1) {
      nbre = choice([-2025, 2025])
      this.question = `Écrire $\\sqrt{${ecritureParentheseSiNegatif(nbre)}^2}$ le plus simplement possible`
      if (this.interactif) { this.question += `<br>$\\sqrt{${ecritureParentheseSiNegatif(nbre)}^2}$` }
      this.correction = ` $\\sqrt{${ecritureParentheseSiNegatif(nbre)}^2}=${miseEnEvidence(`${texNombre(abs(nbre))}`)}$.`
      this.reponse = abs(nbre)
    } else if (choix === 2) {
      nbre = 2025
      this.question = `Écrire $(\\sqrt{${ecritureParentheseSiNegatif(nbre)}})^2$ le plus simplement possible`
      if (this.interactif) { this.question += `<br>$(\\sqrt{${ecritureParentheseSiNegatif(nbre)}})^2$` }
      this.correction = ` $(\\sqrt{${ecritureParentheseSiNegatif(2025)}})^2=${miseEnEvidence(`${texNombre(nbre, 0)}`)}$.`
      this.reponse = 2025
    } else {
      nbre = 2025
      this.question = `Écrire $\\sqrt{${ecritureParentheseSiNegatif(nbre)}}+\\sqrt{${ecritureParentheseSiNegatif(nbre)}}$ le plus simplement possible`
      if (this.interactif) { this.question += `<br>$\\sqrt{${ecritureParentheseSiNegatif(nbre)}}+\\sqrt{${ecritureParentheseSiNegatif(nbre)}}$` }
      this.correction = ` $\\sqrt{${ecritureParentheseSiNegatif(nbre)}}+\\sqrt{${ecritureParentheseSiNegatif(nbre)}}=${miseEnEvidence(`2\\sqrt{${texNombre(nbre, 0)}}`)}$.`
      this.reponse = '2\\sqrt{2025}'
    }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

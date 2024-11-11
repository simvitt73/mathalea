import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { choice } from '../../../lib/outils/arrayOutils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { texFractionFromString } from '../../../lib/outils/deprecatedFractions'
import FractionEtendue from '../../../modules/FractionEtendue'
import { randint } from '../../../modules/outils'
export const titre = 'Trouver un nombre'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '5fec2'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter - Gilles Mora
 * Référence
*/
export default class nombreATrouver extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire faire un exercice simple !
    this.nbQuestions = 1
    this.formatChampTexte = KeyboardType.clavierFullOperations
    this.compare = fonctionComparaison
    // this.optionsDeComparaison = { fractionEgale: true }
  }

  nouvelleVersion () {
    const a = 1
    const b = randint(1, 9)
    const c = 2025
    const d = new FractionEtendue(a * c + b, c)
    const e = new FractionEtendue(a * c - b, c)
    const listeNom = ['R', 'x', 'y', 'T', 'z', 'U', 'A', 'B', 'C']
    const Nom = choice(listeNom)
    if (choice([true, false])) {
      this.reponse = new FractionEtendue(a * c + b, c).inverse()
      this.question = `Calculer $${Nom}$  sachant que : <br>
     $\\dfrac{1}{${Nom}}=${a}+${texFractionFromString(b, c)}$`
      this.correction = `$\\dfrac{1}{${Nom}}=${a}+${texFractionFromString(b, c)} = \\dfrac{${a} \\times ${c}}{${c}} + \\dfrac{${b}}{${c}} = \\dfrac{${a * c}}{${c}} + \\dfrac{${b}}{${c}}  =${d.texFraction}$<br><br>
    Ainsi, $${Nom}=${miseEnEvidence(`${d.inverse().texFraction}`)}$.`
      this.canEnonce = `$\\dfrac{1}{${Nom}}=${a}+${texFractionFromString(b, c)}$`// 'Compléter'
      this.canReponseACompleter = `$${Nom}=\\ldots$`
    } else {
      this.reponse = new FractionEtendue(a * c - b, c).inverse()
      this.question = `Calculer $${Nom}$  sachant que : <br>
         $\\dfrac{1}{${Nom}}=${a}-${texFractionFromString(b, c)}$`
      this.correction = `$\\dfrac{1}{${Nom}}=${a}-${texFractionFromString(b, c)} = \\dfrac{${a} \\times ${c}}{${c}} - \\dfrac{${b}}{${c}} = \\dfrac{${a * c}}{${c}} - \\dfrac{${b}}{${c}}  =${e.texFraction}$<br><br>
        Ainsi, $${Nom}=${miseEnEvidence(`${e.inverse().texFraction}`)}$.`

      this.canEnonce = `$\\dfrac{1}{${Nom}}=${a}-${texFractionFromString(b, c)}$`// 'Compléter'
      this.canReponseACompleter = `$${Nom}=\\ldots$`
    }
    if (this.interactif) { this.question += `<br><br>$${Nom}=$` }
  }
}

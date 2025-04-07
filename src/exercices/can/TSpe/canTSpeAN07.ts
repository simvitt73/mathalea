import Exercice from '../../Exercice'
import { randint } from '../../../modules/outils'
import { ecritureAlgebrique, ecritureAlgebriqueSauf1, ecritureParentheseSiNegatif, reduireAxPlusB, rienSi1 } from '../../../lib/outils/ecritures'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import FractionEtendue from '../../../modules/FractionEtendue'
import { texNombre } from '../../../lib/outils/texNombre'
export const titre = 'Calculer une intégrale élémentaire.'
export const interactifReady = true
export const interactifType = 'mathLive'
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Stéphane Guyon

 *
*/
export const uuid = 'a45b0'

export const refs = {
  'fr-fr': ['canTSpeAN07'],
  'fr-ch': []
}
export default class IntegraleAffine extends Exercice {
  constructor () {
    super()

    this.typeExercice = 'simple'

    this.nbQuestions = 1
  }

  nouvelleVersion () {
    const a = randint(-5, 5)
    const b = randint(a, a + 5, -a)
    const c = randint(-5, 5, 0)
    const fraction = new FractionEtendue(c, 2)
    const fraction2 = new FractionEtendue(c * b * b, 2)
    const fraction3 = new FractionEtendue(c * a * a, 2)
    this.formatChampTexte = KeyboardType.clavierFullOperations
    this.question = `Calculer $I=\\displaystyle\\int_{${a}}^{${b}} \\left(${rienSi1(c)}x \\right)\\mathrm{d}x$ a=${a} ; b=${b} et c=${c}<br>`

    if (this.interactif) { this.question += '<br>$I=$ ' }
    this.correction = `$\\begin{aligned}\\displaystyle\\int_{${a}}^{${b}} \\left(${rienSi1(c)}x \\right)\\ \\mathrm{d}x&=\\Bigl[${rienSi1(fraction.simplifie())}x^2 \\Bigr]_{${a}}^{${b}}\\\\
    &=\\left(${c === 2 ? '' : c === -2 ? '-' : `${fraction.texFractionSimplifiee}\\times`}${ecritureParentheseSiNegatif(b)}^2 \\right)-
    \\left( ${c === 2 ? '' : c === -2 ? '-' : `${fraction.texFractionSimplifiee}\\times`}${ecritureParentheseSiNegatif(a)}^2 \\right)\\\\
    &=${texNombre(b ** 2 * c / 2 - (a ** 2 * c) / 2)}\\end{aligned}$`
    this.reponse = b ** 2 * c / 2 - (a ** 2 * c) / 2
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

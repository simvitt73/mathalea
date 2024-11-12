import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { choice } from '../../../lib/outils/arrayOutils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { ecritureAlgebrique, reduireAxPlusB, reduirePolynomeDegre3 } from '../../../lib/outils/ecritures'
import { randint } from '../../../modules/outils'
import { abs, signe } from '../../../lib/outils/nombres'
export const titre = 'Trouver un reste dans une division euclidienne'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'cfe2d'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter - Gilles Mora
*/
export default class resteDivEucl extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire un exercice simple !
    this.nbQuestions = 1
    this.formatChampTexte = KeyboardType.clavierDeBase
    this.compare = fonctionComparaison
    // this.optionsDeComparaison = { expressionDeveloppeeEtNonReduiteCompare }
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    const choix = choice([3, 3])
    const a = randint(-2, 2, 0)
    const b = randint(-5, 5, 0)
    this.question = 'Développer '
    if (choix === 1) {
      this.reponse = `${reduireAxPlusB(2025, a * 2025)}`
      this.question += `$A=${texNombre(2025, 0)}(x${ecritureAlgebrique(a)})$.`
      this.correction = `On développe $A$ :<br>
      $\\begin{aligned}
      A&=${texNombre(2025, 0)}\\times x ${signe(a)}${texNombre(2025, 0)}\\times ${abs(a)}\\\\
      &=${miseEnEvidence(this.reponse)}
      \\end{aligned}$`
    } else if (choix === 2) {
      this.reponse = `${reduirePolynomeDegre3(0, 2025, a * 2025, 0)}`
      this.question += `$A=${texNombre(2025, 0)}x(x${ecritureAlgebrique(a)})$.`
      this.correction = `On développe $A$ :<br>
      $\\begin{aligned}
      A&=${texNombre(2025, 0)}x\\times x ${signe(a)}${texNombre(2025, 0)}x\\times ${abs(a)}\\\\
      &=${miseEnEvidence(this.reponse)}
      \\end{aligned}$`
    } else if (choix === 3) {
      this.reponse = `${reduirePolynomeDegre3(0, 2025, b, 0)}`
      this.question += `$A=x(${texNombre(2025, 0)}x${ecritureAlgebrique(b)})$.`
      this.correction = `On développe $A$ :<br>
      $\\begin{aligned}
      A&=x\\times${texNombre(2025, 0)}x ${signe(b)}x\\times ${abs(b)}\\\\
      &=${miseEnEvidence(this.reponse)}
      \\end{aligned}$`
    }
    if (this.interactif) { this.question += '<br>$A=$' }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { randint } from '../../../modules/outils'
import { choice } from '../../../lib/outils/arrayOutils'
import FractionEtendue from '../../../modules/FractionEtendue'
import { toutPourUnPoint } from '../../../lib/interactif/mathLive'
export const titre = 'Additionner un entier et une fraction'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'e12d9'
export const refs = {
  'fr-fr': [''],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora

*/
export default class SommeEntierFraction extends Exercice {
  constructor () {
    super()

    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.formatInteractif = 'fillInTheBlank'
    this.formatChampTexte = KeyboardType.clavierDeBaseAvecFraction
    this.canOfficielle = true
    this.optionsChampTexte = { texteAvant: ' $=$' }
  }

  nouvelleVersion () {
    const listeFraction = this.canOfficielle
      ? [[1, 4]]
      : [
          [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5]
        ]
    const maFraction = choice(listeFraction)
    const a = this.canOfficielle ? 2 : randint(1, 4)
    const b = maFraction[0]
    const c = maFraction[1]
    const f = new FractionEtendue(b, c)
    const d = new FractionEtendue(a * c + b, c)
    const e = new FractionEtendue(a * c - b, c)
    const choix = this.canOfficielle ? true : choice([true, false])
    if (choix === true) {
      this.question = `${a}+${f.texFraction}=\\dfrac{%{champ1}}{%{champ2}}`
      this.correction = `$${a}+${f.texFraction} = \\dfrac{${a} \\times ${c}}{${c}} + \\dfrac{${b}}{${c}} = \\dfrac{${a * c}}{${c}} + \\dfrac{${b}}{${c}}  =${miseEnEvidence(d.texFraction)}$`
      this.reponse = { bareme: toutPourUnPoint, champ1: { value: d.n }, champ2: { value: d.d } }
    } else {
      this.question = `${a}-${f.texFraction}=\\dfrac{%{champ1}}{%{champ2}}`
      this.correction = `$${a}-${f.texFraction} = \\dfrac{${a} \\times ${c}}{${c}} - \\dfrac{${b}}{${c}} = \\dfrac{${a * c}}{${c}} - \\dfrac{${b}}{${c}}  =${miseEnEvidence(e.texFraction)}$`
      this.reponse = { bareme: toutPourUnPoint, champ1: { value: e.n }, champ2: { value: e.d } }
    }

    this.canEnonce = `${choix ? `$${a}+${f.texFraction}$` : `$${a}-${f.texFraction}$`}`
    this.canReponseACompleter = '$\\dfrac{\\ldots}{\\ldots}$'
  }
}

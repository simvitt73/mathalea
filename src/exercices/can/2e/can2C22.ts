import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { choice } from '../../../lib/outils/arrayOutils'
import { ecritureAlgebrique } from '../../../lib/outils/ecritures'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import FractionEtendue from '../../../modules/FractionEtendue'
import { randint } from '../../../modules/outils'
import ExerciceSimple from '../../ExerciceSimple'
export const titre = 'Calculer une expression avec des valeurs'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCNum'
export const dateDePublication = '06/07/2025'
/**
 * @author Gilles Mora
 * Réference : can2C22
 */
export const uuid = 'af398'

export const refs = {
  'fr-fr': ['can2C22'],
  'fr-ch': []
}
export default class CalculExpAvecValeurs extends ExerciceSimple {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.spacing = 3
    this.formatInteractif = 'fractionEgale'
    this.formatChampTexte = KeyboardType.clavierDeBaseAvecFraction
    this.optionsDeComparaison = { resultatSeulementEtNonOperation: true }
  }

  nouvelleVersion () {
    let a, b, c, d, frac1
    switch (randint(1, 2)) {
      case 1:
        frac1 = choice([[1, 3], [2, 3], [3, 4], [1, 4], [2, 5], [1, 2], [1, 6], [1, 7]])
        a = new FractionEtendue(frac1[0], frac1[1])
        b = randint(1, 9)
        c = randint(-9, 9, [-2, -1, 0, 1, 2])
        d = choice([new FractionEtendue(1, c), new FractionEtendue(1, -c)])
        this.reponse = new FractionEtendue(a.num * d.num * c + b * d.den * a.den, a.den * d.num * c)// a.sommeFraction(new FractionEtendue(b, -1))
        this.question = `
        On considère la relation  $F=a+\\dfrac{b}{cd}$.<br>
        Lorsque $a=${a.texFraction}$, $b=${b}$, $c=${c}$ et $d=${d.texFractionSimplifiee}$, la valeur de $F$ est égale à : `
        if (!this.interactif) { this.question += '\\ldots' }
        this.correction = `On remplace $a$, $b$, $c$ et $d$ par les valeurs données : <br>
        $\\begin{aligned}
        F&=${a.texFraction}+\\dfrac{${b}}{${c}\\times ${d.den * d.num > 0 ? `${d.texFractionSimplifiee}` : `\\left(${d.texFractionSimplifiee}\\right)`}}\\\\
        &=${a.texFraction}+\\dfrac{${b}}{${d.multiplieEntier(c).texFractionSimplifiee}}\\\\
         &=${a.texFraction}${b * d.den * c * d.num > 0 ? '+' : ''}${new FractionEtendue(b * d.den, c * d.num).texFractionSimplifiee}\\\\
        &=${miseEnEvidence(this.reponse.texFractionSimplifiee)}
        \\end{aligned}$`
        this.canEnonce = `On considère la relation $F=a+\\dfrac{b}{cd}$.<br>
Calculer $F$ lorsque  $a=${a.texFraction}$, $b=${b}$, $c=${c}$ et $d=${d.texFractionSimplifiee}$.`
        this.canReponseACompleter = '$F=\\ldots$'
        break
      case 2:
        {
          const fracB = choice([[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]])
          b = new FractionEtendue(fracB[0], fracB[1]) // numérateur 1
          a = randint(1, 5)
          c = randint(4, 4, 0)
          const fracD = choice([[1, 2], [2, 3], [3, 4], [1, 4], [3, 5]])
          d = new FractionEtendue(fracD[0], fracD[1])
          const div = new FractionEtendue(a * b.den, b.num)
          const prod = new FractionEtendue(c * d.num, d.den) // c * d
          this.reponse = div.sommeFraction(prod)

          this.question = `
On considère la relation $F=\\dfrac{a}{b}+cd$.<br>
Lorsque $a=${a}$, $b=${b.texFraction}$, $c=${c}$ et $d=${d.texFraction}$, la valeur de $F$ est égale à : `

          if (!this.interactif) {
            this.question += '\\ldots'
          }

          this.correction = `On remplace $a$, $b$, $c$ et $d$ par les valeurs données :<br>
$\\begin{aligned}
F &= \\dfrac{${a}}{${b.texFraction}} ${ecritureAlgebrique(c)} \\times ${d.texFraction} \\\\
  &= ${div.texFraction}  ${c > 0 ? `+${prod.texFractionSimplifiee}` : `${prod.texFractionSimplifiee}`}\\\\
  &= ${miseEnEvidence(this.reponse.texFractionSimplifiee)}
\\end{aligned}$`
          this.canEnonce = `On considère la relation $F=\\dfrac{a}{b}+cd$.<br>
Calculer $F$ lorsque $a=${a}$, $b=${b.texFraction}$, $c=${c}$ et $d=${d.texFraction}$.`
          this.canReponseACompleter = '$F=\\ldots$'
        }

        break
    }
  }
}

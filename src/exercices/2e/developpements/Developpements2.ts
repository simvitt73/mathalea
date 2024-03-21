import QuestionMathalea from '../../QuestionMathalea'
import { randint } from '../../../modules/outils'
import { lettreDepuisChiffre } from '../../../lib/outils/outilString'
import { calculCompare, developmentCompare } from '../../../lib/interactif/comparisonFunctions'

export default class QuestionDeveloppement2 extends QuestionMathalea {
  didacticParams = {
    hasRelativeNumbers: false
  }

  createQuestion () {
    const a = randint(2, 5)
    const b = randint(2, 5)
    const c = randint(2, 5)
    const d = randint(2, 5)
    this.numberOfMathFieldsByQuestion = 2
    this.text = `$${lettreDepuisChiffre(this.indiceQuestion + 1)} = (${a}x + ${b})^2 - (${c}x + ${d})$`
    this.correction = 'Correction à venir'
    if (this.isInteractif) {
      this.text += this.format.newLine + `$${lettreDepuisChiffre(this.indiceQuestion + 1)}=$` + this.format.mf + '(forme développée)'
      this.text += this.format.newLine + `$${lettreDepuisChiffre(this.indiceQuestion + 1)}=$` + this.format.mathField(1) + '(forme développée et réduite)'
      this.answers[this.indiceQuestion * 2] = { value: `${a ** 2}x^2 + ${2 * a * b - c}x + ${b ** 2 - d}`, compare: developmentCompare }
      this.answers[this.indiceQuestion * 2 + 1] = { value: `${a ** 2}x^2 + ${2 * a * b - c}x + ${b ** 2 - d}`, compare: calculCompare }
    }
  }
}

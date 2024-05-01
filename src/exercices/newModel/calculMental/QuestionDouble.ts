import { calculCompare } from '../../../lib/interactif/comparisonFunctions'
import { randint } from '../../../modules/outils'
import QuestionMathfield from '../../QuestionMathfield'

export default class QuestionDouble extends QuestionMathfield {
  createQuestion (): void {
    const a = randint(11, 99)
    const mathfield = this.createMathfield({ keyboard: 'clavierNumbers', answer: a * 2, compare: calculCompare })
    this.text = `$${a} \\times 2 = $` + this.insert.mathfield(mathfield)
    this.correction = `$${a} \\times 2 = ${a * 2}$`
  }
}

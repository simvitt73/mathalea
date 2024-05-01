import { randint } from '../../../modules/outils'
import QuestionMathfield from '../../QuestionMathfield'

export default class QuestionAdditionnerX9 extends QuestionMathfield {
  createQuestion (): void {
    const a = randint(2, 9) * 10 + 9
    const b = randint(11, 89)
    const mathfield = this.createMathfield({ keyboard: 'clavierDeBase', answer: a + b })
    this.text = `$${this.insert.letterCapitalFromIndiceQuestion} = ${a} + ${b} = $` + this.insert.mathfield(mathfield)
    this.correction = `Ajouter $${a}$ revient à ajouter $${a + 1}$ puis enlever 1.`
    this.correction += `<br>$${a} + ${b} = ${a + b + 1} - 1 = ${a + b}$`
  }
}

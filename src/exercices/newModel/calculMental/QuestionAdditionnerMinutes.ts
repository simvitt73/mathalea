import { hmsCompare } from '../../../lib/interactif/comparisonFunctions'
import Hms from '../../../modules/Hms'
import { randint } from '../../../modules/outils'
import QuestionMathfield from '../../QuestionMathfield'

export default class QuestionAdditionnerMinutes extends QuestionMathfield {
  createQuestion (): void {
    const a = new Hms({ minute: randint(30, 59) })
    const b = new Hms({ minute: randint(30, 59) })
    const answer = a.add(b)
    // @ts-expect-error une réponse doit être un string sauf pour hmsCompare
    const mathfield = this.createMathfield({ keyboard: 'clavierHms', answer, compare: hmsCompare })
    this.text = `$${a.toLatex()} + ${b.toLatex()} = $` + this.insert.mathfield(mathfield)
    this.correction = `$${a.toLatex()} + ${b.toLatex()} = ${answer.hour * 60 + answer.minute}~\\text{min} = ${answer.toLatex()}$`
  }
}

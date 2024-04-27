import { hmsCompare } from '../../../lib/interactif/comparisonFunctions'
import Hms from '../../../modules/Hms'
import { randint } from '../../../modules/outils'
import QuestionMathalea from '../../QuestionMathalea'

export default class QuestionAdditionnerMinutes extends QuestionMathalea {
  createQuestion (): void {
    const a = new Hms({ minute: randint(30, 59) })
    const b = new Hms({ minute: randint(30, 59)})
    const answer = a.add(b)
    this.text = `$${a.toLatex()} + ${b.toLatex()} = $` + this.add.mathField()
    this.correction = `$${a.toLatex()} + ${b.toLatex()} = ${answer.hour * 60 + answer.minute}~\\text{min} = ${answer.toLatex()}$`
    // @ts-expect-error une réponse doit être un string sauf pour hmsCompare
    this.setMathfield({ keyboard: 'clavierHms', answers: answer, compare: hmsCompare })
  }
}

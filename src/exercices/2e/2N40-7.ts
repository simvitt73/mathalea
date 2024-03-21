import katex from 'katex'
import Exercice from '../Exercice'
import QuestionDeveloppement1 from './developpements/Developpements1'
import QuestionDeveloppement2 from './developpements/Developpements2'
import { listeQuestionsToContenu } from '../../modules/outils.js'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'

export const titre = 'Développer des expressions complexes'
export const dateDePublication = '21/03/2024'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'a7f42'

/**
 * Description didactique de l'exercice
 * @author Rémi Angot
*/

export default class DevelopperExpressionComplexe extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 10
  }

  nouvelleVersion () {
    this.listeQuestions = []
    this.listeCorrections = []
    this.autoCorrection = []
    this.consigne = this.nbQuestions > 1 ? 'Développer les expressions suivantes.' : 'Développer l\'expression suivante.'
    const questions = combinaisonListes([QuestionDeveloppement1, QuestionDeveloppement2, QuestionDeveloppement2], this.nbQuestions)

    this.consigne = `<div style="width: 10px; transform: translate(-50%, -50%) rotate(30deg)" >${katex.renderToString('\\pi')}</div>`

    for (let i = 0; i < this.nbQuestions; i++) {
      const question = new questions[i]({ indiceQuestion: i, indiceExercice: this.numeroExercice, isInteractif: this.interactif, didacticParams: { hasRelativeNumbers: true } })
      this.listeQuestions.push(question.getText())
      this.listeCorrections.push(question.getCorrection())
      handleAnswers(this, i * 2, { reponse: question.answers[i * 2] })
      handleAnswers(this, i * 2 + 1, { reponse: question.answers[i * 2 + 1] })
    }

    listeQuestionsToContenu(this)
  }
}

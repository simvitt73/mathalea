import Exercice from '../../Exercice'
import { listeQuestionsToContenu } from '../../../modules/outils'
export const titre = 'Exercice exemple'

/**
 *
 * @author

*/
export default class NomQuelconqueDeLaFonctionQuiCreeExercice extends Exercice {
  constructor () {
    super()

    this.nbQuestionsModifiable = false

    this.nbCols = 2 // Uniquement pour la sortie LaTeX
    this.nbColsCorr = 2 // Uniquement pour la sortie LaTeX
    // this.sup = 1; // Niveau de difficulté

  }

  nouvelleVersion () {
    let question1, question2

    question1 = 'texte de la question 1.'
    question1 += '<br>'
    question2 = 'texte de la question 2.'
    question2 += '<br>'

    const correction1 = 'texte de la correction 1'
    const correction2 = 'texte de la correction2'
    this.listeQuestions.push(question1, question2)
    this.listeCorrections.push(correction1, correction2)

    listeQuestionsToContenu(this)
  }
  // this.besoinFormulaireNumerique = ['Niveau de difficulté', 3];
}

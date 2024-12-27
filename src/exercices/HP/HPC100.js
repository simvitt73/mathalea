import { xcas, listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'
import { context } from '../../modules/context'
export const dateDePublication = '30/10/2021'
export const titre = 'Division de polynômes'

/**
 *
 * @author Eric Schrafstetter

*/
export const uuid = 'ad6a2'

export const refs = {
  'fr-fr': ['HPC100'],
  'fr-ch': []
}
export default class DivisionDePolynomes extends Exercice {
  constructor () {
    super()

    this.consigne = 'Calculer le quotient Q(x) de la division de P(x) par D(x)'

    this.nbQuestions = 2

    context.isHtml ? (this.spacingCorr = 2) : (this.spacingCorr = 1)
    this.sup = 1 // Niveau de difficulté


    this.typeExercice = 'xcas'
  }

  nouvelleVersion () {
    for (let i = 0, texte, texteCorr, a, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      // Boucle principale où i+1 correspond au numéro de la question
      a = randint(-5, 5, 0)
      // Diviseur D(x)
      const cmds = [`D:=x+${a}`,
        'P:=simplify(D*product(randint(2)*x+(2*randint(1)-1)*randint(1,3),k,1,2)))',
        'E1:=simplify(lcoeff(P)*x^2*D)', // Etapes de la division
        'E2:=simplify(P-E1)',
        'E3:=simplify(lcoeff(E2)*x^(degree(E2)-1)*D)',
        'E4:=simplify(E2-E3)',
        'E5:=simplify(lcoeff(E4)*D)',
        'E6:=simplify(E4-E5)'
      ]
      cmds.forEach(e => xcas(e))
      // Enoncé
      texte = `$P(x)=${xcas('P')} \\text{ par } D(x)=${xcas('D')}$`
      // Corrigé
      texteCorr = `$\\begin{array}{r|l} ${xcas('P')} & ${xcas('D')}\\\\`
      texteCorr += `\\underline{-(${xcas('E1')})} & \\overline{${xcas('quo(P,D)')}}\\\\`
      texteCorr += `${xcas('E2')} & \\\\`
      texteCorr += `\\underline{-(${xcas('E3')})} & \\\\`
      texteCorr += `${xcas('E4')} & \\\\`
      texteCorr += `\\underline{-(${xcas('E5')})} & \\\\`
      texteCorr += `${xcas('E6')} & \\end{array}$`
      texteCorr += `<br>D'où $Q(x)=${xcas('quo(P,D)')}$`

      if (this.listeQuestions.indexOf(texte) === -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
  // this.besoinFormulaireNumerique = ['Niveau de difficulté', 3]
}

// python3 list-to-js.py pour faire apparaître l'exercice dans le menu

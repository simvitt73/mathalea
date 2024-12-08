import { ajouteQuestionMathlive } from '../../lib/interactif/questionMathLive'
import { choice } from '../../lib/outils/arrayOutils'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const uuid = 'd1861'
export const titre = 'Multiplier en utilisant la distributivité'
export const refs = {
  'fr-fr': ['5C12-6'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'mathLive'

/**
 * @author Jean-Claude LHOTE
 * Un exercice pour travailler la distributivité de la multiplication sur l'addition ou la soustraction de façon simple
 */
export default class MultiplierEnDistribuant extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 5
    this.besoinFormulaireTexte = ['Type de question', [
      'Nombres séparés par des tirets',
      '1 : avec des sommes',
      '2 : avec des différences',
      '3 : avec des sommes et des différences'
    ].join('\n')]
    this.sup = '3'
  }

  nouvelleVersion (): void {
    const listeTypesDeQuestions = gestionnaireFormulaireTexte({ saisie: this.sup, nbQuestions: this.nbQuestions, min: 1, max: 2, melange: 3, defaut: 3 })
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const a = randint(3, 9) * 10
      let b: number
      let texteCorr: string
      let dizaineSupOuInf: number
      switch (listeTypesDeQuestions[i]) {
        case 1:
          b = randint(1, 3) + randint(2, 3) * 10
          dizaineSupOuInf = Math.floor(b / 10) * 10
          texteCorr = `$\\begin{aligned}${a} \\times ${b} &= ${a}\\times ${dizaineSupOuInf} + ${a}\\times ${b % 10}\\\\ &= ${a * dizaineSupOuInf}+${a * (b % 10)}\\\\ &=${a * b}\\end{aligned}$`
          break
        default:
          b = randint(2, 3) * 10 - choice([1, 2])
          dizaineSupOuInf = Math.ceil(b / 10) * 10
          texteCorr = `$\\begin{aligned}${a} \\times ${b} &= ${a}\\times ${dizaineSupOuInf} - ${dizaineSupOuInf - b}\\times${a}\\\\ &= ${a * dizaineSupOuInf}-${a * (dizaineSupOuInf - b)}\\\\ &=${a * b}\\end{aligned}$`
          break
      }

      const texte = `$${a} \\times ${b}$` + ajouteQuestionMathlive({
        exercice: this,
        question: i,
        objetReponse: { reponse: { value: String(a * b) } },
        typeInteractivite: 'mathlive',
        texteAvant: ' $=$ '
      })
      if (this.questionJamaisPosee(i, a, b)) {
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
  }
}

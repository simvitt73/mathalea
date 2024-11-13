import { choice } from '../../lib/outils/arrayOutils'
import { nombreEnLettres } from '../../modules/nombreEnLettres'
import { randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Lire une puissance'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '12/11/2024'
export const uuid = 'a9001'
export const refs = {
  'fr-fr': ['3C10-4'],
  'fr-ch': []
}

export default class LireUnePuissance extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 5
    this.besoinFormulaireCaseACocher = ['avec des mantisses négatives', false]
    this.besoinFormulaire2CaseACocher = ['avec des exposants négatifs', false]
  }

  nouvelleVersion (): void {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const mantisse = randint(2, 15) * (this.sup ? choice([1, -1]) : 1)
      const mantisseEnLettres = `${mantisse < 0 ? 'moins ' : ''}${nombreEnLettres(Math.abs(mantisse))}`
      const exposant = choice([2, 3, 4, 5, 6, 7, 8, 9], [mantisse]) * (this.sup2 ? choice([1, -1]) : 1)
      const exposantEnLettres = `${exposant < 0 ? 'moins ' : ''}${nombreEnLettres(Math.abs(exposant))}`
      const texte = `Comment se lit : $${mantisse < 0 ? `(${String(mantisse)})` : String(mantisse)}^{${exposant}}$ ? `
      const value = `"${mantisseEnLettres} exposant ${exposantEnLettres}" ou "${mantisseEnLettres} à la puissance ${exposantEnLettres}"`
      const texteCorr = `$${mantisse < 0 ? `(${String(mantisse)})` : String(mantisse)}^{${exposant}}$ se lit : ${value}.`
      if (this.questionJamaisPosee(i, mantisse, exposant)) {
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
  }
}

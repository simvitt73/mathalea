import { choice } from '../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { texNombre } from '../../lib/outils/texNombre'
import Exercice from '../Exercice'
import { context } from '../../modules/context'
import { gestionnaireFormulaireTexte, listeQuestionsToContenu, randint } from '../../modules/outils'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { remplisLesBlancs } from '../../lib/interactif/questionMathLive'
import { toutAUnPoint } from '../../lib/interactif/mathLive'
export const titre = 'Trouver un ordre de grandeur d\'un produit de nombres entiers ou décimaux'
export const interactifReady = true
export const interactifType = 'mathLive'

/**
 * * Ordre de grandeur d'une multiplication d'entiers ou de décimaux
 * * 6N31-2
 * @author Jean-Claude Lhote
 */

export const dateDePublication = '06/01/2025'
export const uuid = '843e6'

export const refs = {
  'fr-fr': ['6N31-8'],
  'fr-ch': []
}

export default class OrdreDeGrandeurMultiplication extends Exercice {
  constructor () {
    super()

    this.nbQuestions = 5
    this.besoinFormulaireTexte = ['Type de question', 'nombres séparés par des tirets\n1: Nombres entiers\n2: Nombres décimaux\n3: Mélange']

    this.consigne = 'Donner un ordre de grandeur de chaque facteur puis du produit.'
    this.sup = '3'

    // this.nbQuestionsModifiable = false;
    context.isHtml ? this.spacing = 3 : this.spacing = 2
    context.isHtml ? this.spacingCorr = 2.5 : this.spacingCorr = 1.5
  }

  nouvelleVersion () {
    const listeTypeDeQuestions = gestionnaireFormulaireTexte({ saisie: this.sup, nbQuestions: this.nbQuestions, min: 1, max: 2, melange: 3, defaut: 3 }).map(Number)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte: string = ''
      let texteCorr: string = ''
      const p1 = randint(2, 4)
      const p2 = randint(2, 4)
      const ordreDeGrandeur1 = randint(2, 8) * 10 ** p1
      const ordreDeGrandeur2 = randint(2, 8) * 10 ** p2
      const d1 = randint(10 ** (p1 - 2) + 1, 10 ** (p1 - 1) - 1)
      const d2 = randint(10 ** (p2 - 2) + 1, 10 ** (p2 - 1) - 1)
      const nombre1 = ordreDeGrandeur1 + choice([-1, 1]) * d1
      const nombre2 = ordreDeGrandeur2 + choice([-1, 1]) * d2
      const div1 = listeTypeDeQuestions[i] === 1 ? 1 : 10 ** randint(1, 3)
      const div2 = listeTypeDeQuestions[i] === 1 ? 1 : 10 ** randint(1, 3)
      const nb1 = nombre1 / div1
      const nb2 = nombre2 / div2
      const odg1 = ordreDeGrandeur1 / div1
      const odg2 = ordreDeGrandeur2 / div2

      texte = `$${texNombre(nb1, 3)}\\times${texNombre(nb2, 3)}\\approx$ ${remplisLesBlancs(this, i, '%{champ1}\\times %{champ2}\\approx %{champ3}', '', '\\ldots\\ldots\\ldots')}`
      texteCorr = `$${texNombre(nb1, 3)}\\times${texNombre(nb2, 3)}\\approx${texNombre(odg1, 3)}\\times${texNombre(odg2, 3)}\\approx${miseEnEvidence(texNombre(odg1 * odg2, 6))}$`
      handleAnswers(this, i, { champ1: { value: odg1 }, champ2: { value: odg2 }, champ3: { value: odg1 * odg2 }, bareme: toutAUnPoint })
      if (this.questionJamaisPosee(i, nb1, nb2)) { // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

import { fonctionComparaison } from '../../lib/interactif/comparisonFunctions'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeDeProblemesAdditifs } from '../../lib/problems/problemesAdditifs/problemesAdditifs'
import { gestionnaireFormulaireTexte } from '../../modules/outils'
import Exercice from '../Exercice'
import { listeDeProblemesMultiplicatifs } from '../../lib/problems/problemesMultiplicatifs/problemesMultiplicatifs'
import { listeDeProblemesPartageAvecResteRetire } from '../../lib/problems/ProblemesPartageAvecResteRetire/promblemePartageAvecResteRetire'
import { listeDeProblemesMultiplicatifsComplexes } from '../../lib/problems/problemesMultiplicatifsComplexes/problemesMultiplicatifsComplexes'
import { listeDeProblemesPartageSimple } from '../../lib/problems/problemesRepartition/problemesRepartition'

export const dateDePublication = '06/06/2025'
export const interactifType = 'mathLive'
export const interactifReady = true
export const amcType = 'AMCNum'
export const amcReady = true
export const uuid = 'b3aa4'
export const refs = {
  'fr-fr': ['6C32-0'],
  'fr-ch': []
}
export const titre = 'Résoudre des problèmes variés'
/**
 * @author Jean-Claude Lhote
 */
export default class ProblemesVaries extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 4
    this.besoinFormulaireTexte = ['Types de problèmes', 'Nombres séparés par des tirets\n1 : Problèmes additifs simples\n2 : Problèmes multiplicatifs simples\n3 : Problèmes de partage\n4 : Problèmes de partage avec reste retiré\n5 : Problèmes multiplicatifs complexes\n: 6 Mélange']
    this.besoinFormulaire2CaseACocher = ['Avec des nombres décimaux si possible', false]
    this.sup2 = false // pour l'instant pas de décimaux quasiment dans les problèmes
    this.sup = '6'
  }

  nouvelleVersion () {
    const typesDeProblemes = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: 5, defaut: 6, melange: 6, nbQuestions: this.nbQuestions }).map(Number)
    const problemesAdditifs = combinaisonListes(listeDeProblemesAdditifs, this.nbQuestions)
    const problemesMultiplicatifs = combinaisonListes(listeDeProblemesMultiplicatifs, this.nbQuestions)
    const problemesPartageSimple = combinaisonListes(listeDeProblemesPartageSimple, this.nbQuestions)
    const problemesPartageAvecResteRetire = combinaisonListes(listeDeProblemesPartageAvecResteRetire, this.nbQuestions)
    const problemesComplexes = combinaisonListes(listeDeProblemesMultiplicatifsComplexes, this.nbQuestions)
    const fonctionsProblemes = []
    let indexAdditifs = 0
    let indexMultiplicatifs = 0
    let indexPartage = 0
    let indexComplexes = 0
    let indexPartageAvecResteRetire = 0
    for (let i = 0; i < this.nbQuestions; i++) {
      switch (typesDeProblemes[i]) {
        case 1:
          fonctionsProblemes.push(problemesAdditifs[indexAdditifs % listeDeProblemesAdditifs.length])
          indexAdditifs++
          break
        case 2:
          fonctionsProblemes.push(problemesMultiplicatifs[indexMultiplicatifs++])
          break
        case 3:
          fonctionsProblemes.push(problemesPartageSimple[indexPartage++])
          break
        case 4:
          fonctionsProblemes.push(problemesPartageAvecResteRetire[indexPartage++])
          break
        case 5:
          fonctionsProblemes.push(problemesComplexes[indexComplexes++])
          break
        default:{
          const choix = Math.floor(Math.random() * 5) + 1 // 1 à 5
          if (choix === 1) {
            fonctionsProblemes.push(problemesAdditifs[indexAdditifs % listeDeProblemesAdditifs.length])
            indexAdditifs++
          } else if (choix === 2) {
            fonctionsProblemes.push(problemesMultiplicatifs[indexMultiplicatifs % listeDeProblemesMultiplicatifs.length])
            indexMultiplicatifs++
          } else if (choix === 3) {
            fonctionsProblemes.push(problemesPartageSimple[indexPartage % listeDeProblemesPartageSimple.length])
            indexPartage++
          } else if (choix === 4) {
            fonctionsProblemes.push(problemesPartageSimple[indexPartageAvecResteRetire % listeDeProblemesPartageAvecResteRetire.length])
            indexPartageAvecResteRetire++
          } else {
            fonctionsProblemes.push(problemesComplexes[indexComplexes % listeDeProblemesMultiplicatifsComplexes.length])
            indexComplexes++
          }
        }
          break
      }
    }
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 100;) {
      const probleme = fonctionsProblemes[i](this.sup2 ?? false)
      const question = this.interactif
        ? `${probleme.enonce}<br>${ajouteChampTexteMathLive(this, i, probleme.styleChampTexteMathlive ?? '', probleme.optionsChampTexteMathlive)}`
        : probleme.enonce
      if (this.interactif) {
        handleAnswers(this, i, { reponse: { value: probleme.reponse, compare: probleme.compare ?? fonctionComparaison, options: probleme.optionsComparaison ?? {} } })
      }
      if (this.questionJamaisPosee(i, probleme.enonce, JSON.stringify(probleme.data))) {
        this.listeQuestions.push(question)
        this.listeCorrections.push(probleme.correction + '<br><br>' + probleme.schema.display(1))
        i++
      }
      cpt++
    }
  }
}

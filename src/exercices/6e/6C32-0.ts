import { fonctionComparaison } from '../../lib/interactif/comparisonFunctions'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeDeProblemesAdditifsTout } from '../../lib/problems/problemesAdditifs/problemesAdditifsTout/problemesAdditifsTout'
import { gestionnaireFormulaireTexte } from '../../modules/outils'
import Exercice from '../Exercice'
import { listeDeProblemesAdditifsPart } from '../../lib/problems/problemesAdditifs/problemesAdditifsPart/problemesAdditifsPart'
import { listeDeProblemesMultiplicatifs } from '../../lib/problems/problemesMultiplicatifs/problemeMultiplicatifsTout/problemesMultiplicatifsTout'
import { listeDeProblemesPartageSimple } from '../../lib/problems/problemesMultiplicatifs/problemesMultiplicatifsPart/problemesMultiplicatifsPart'
// import { listeDeProblemesPartageAvecResteRetire } from '../../lib/problems/problemesMultiplicatifs/ProblemesPartageAvecResteRetire/promblemePartageAvecResteRetire'
// import { listeDeProblemesMultiplicatifsComplexes } from '../../lib/problems/problemesMultiplicatifs/problemesMultiplicatifsComplexes/problemesMultiplicatifsComplexes'
import { listeDeProblemesCompAddEcart } from '../../lib/problems/problemesComparaisonAdditive/problemesCompAddEcart/problemesCompAddEcart'
import { listeDeProblemesCompAddGdeQuantite } from '../../lib/problems/problemesComparaisonAdditive/problemesCompAddGdeQuantite/problemesCompAddGdeQuantite'
import { listeDeProblemesCompAddPteQuantite } from '../../lib/problems/problemesComparaisonAdditive/problemesCompAddPteQuantite/problemesCompAddPteQuantite'
import { listeDeProblemesTransfoApres } from '../../lib/problems/problemesTransformations/problemesTransfoApres/problemesTransfoApres'
import { listeDeProblemesTransfoTransfo } from '../../lib/problems/problemesTransformations/problemesTransfoTransfo/problemesTransofTransfo'
import { listeDeProblemesTransfoAvant } from '../../lib/problems/problemesTransformations/problemesTransfoAvant/problemesTransfoAvant'

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
    this.besoinFormulaireTexte = ['Types de problèmes', `Nombres séparés par des tirets\n
1 : Additif recherche du tout (fait)\n
2 : Additif recherche d'une partie (à compléter)\n
3 : Transformation recherche avant \n
4 : Transformation recherche après\n 
5 : Transformation recherche transformation \n
6 : Comparaison additive recherche grande quantité\n
7 : Comparaison additive recherche petite quantité\n
8 : Comparaison additive recherche écart\n
9 : Multiplicatif recherche du tout (fait)\n
10 : Multiplicatif recherche de la valeur d'une part (fait)\n
11 : Mélange`]
    /*
11: Multiplicatif recherche du nombre de part\n
12 : Comparaison multiplicative recherche grande quantité\n
13 : Comparaison multiplicative recherche petite quantité\n
14 : Comparaison multiplicative recherche du tout\n
15 : Comparaison multiplicative recherche du nombre de fois\n
16  : Mélange`]
*/
    this.besoinFormulaire2CaseACocher = ['Avec des nombres décimaux si possible', false]
    this.sup2 = false // pour l'instant pas de décimaux quasiment dans les problèmes
    this.sup = '6-7'
  }

  nouvelleVersion () {
    const typesDeProblemes = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: 10, defaut: 11, melange: 11, nbQuestions: this.nbQuestions }).map(Number)
    const problemesAdditifsTout = combinaisonListes(listeDeProblemesAdditifsTout, this.nbQuestions)
    const problemesAdditifsPart = combinaisonListes(listeDeProblemesAdditifsPart, this.nbQuestions)
    const problemesMultiplicatifs = combinaisonListes(listeDeProblemesMultiplicatifs, this.nbQuestions)
    const problemesPartageSimple = combinaisonListes(listeDeProblemesPartageSimple, this.nbQuestions)
    // const problemesPartageAvecResteRetire = combinaisonListes(listeDeProblemesPartageAvecResteRetire, this.nbQuestions)
    //  const problemesComplexes = combinaisonListes(listeDeProblemesMultiplicatifsComplexes, this.nbQuestions)
    const problemesCompAddEcart = combinaisonListes(listeDeProblemesCompAddEcart, this.nbQuestions)
    const problemesCompAddGdeQuantite = combinaisonListes(listeDeProblemesCompAddGdeQuantite, this.nbQuestions)
    const problemesCompAddPteQuantite = combinaisonListes(listeDeProblemesCompAddPteQuantite, this.nbQuestions)
    const problemesTransoApres = combinaisonListes(listeDeProblemesTransfoApres, this.nbQuestions)
    const problemesTransfoTransfo = combinaisonListes(listeDeProblemesTransfoTransfo, this.nbQuestions)
    const problemesTransoAvant = combinaisonListes(listeDeProblemesTransfoAvant, this.nbQuestions)
    const fonctionsProblemes = []
    let indexP1 = 0
    let indexP2 = 0
    let indexP3 = 0
    let indexP4 = 0
    let indexP5 = 0
    let indexP6 = 0
    let indexP7 = 0
    let indexP8 = 0
    let indexP9 = 0
    let indexP10 = 0
    /* const indexP11 = 0
    const indexP12 = 0
    const indexP13 = 0
    const indexP14 = 0
    const indexP15 = 0
*/
    for (let i = 0; i < this.nbQuestions; i++) {
      switch (typesDeProblemes[i]) {
        case 1:
          fonctionsProblemes.push(problemesAdditifsTout[indexP1 % listeDeProblemesAdditifsTout.length])
          indexP1++
          break
        case 2:
          fonctionsProblemes.push(problemesAdditifsPart[indexP2 % listeDeProblemesAdditifsPart.length])
          indexP2++
          break
        case 3:
          fonctionsProblemes.push(problemesTransoAvant[indexP3 % listeDeProblemesTransfoAvant.length])
          indexP3++
          break
        case 4:
          fonctionsProblemes.push(problemesTransoApres[indexP4 % listeDeProblemesTransfoApres.length])
          indexP4++
          break
        case 5:
          fonctionsProblemes.push(problemesTransfoTransfo[indexP5 % listeDeProblemesTransfoTransfo.length])
          indexP5++
          break
        case 6:
          fonctionsProblemes.push(problemesCompAddGdeQuantite[indexP6 % listeDeProblemesCompAddGdeQuantite.length])
          indexP6++
          break
        case 7:
          fonctionsProblemes.push(problemesCompAddPteQuantite[indexP7 % listeDeProblemesCompAddPteQuantite.length])
          indexP7++
          break
        case 8:
          fonctionsProblemes.push(problemesCompAddEcart[indexP8 % listeDeProblemesCompAddEcart.length])
          indexP8++
          break
        case 9:
          fonctionsProblemes.push(problemesMultiplicatifs[indexP9 % listeDeProblemesMultiplicatifs.length])
          indexP9++
          break
        case 10:
          fonctionsProblemes.push(problemesPartageSimple[indexP10 % listeDeProblemesPartageSimple.length])
          indexP10++
          break
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        default:
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

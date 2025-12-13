import { createList } from '../../lib/format/lists'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { Polynome } from '../../lib/mathFonctions/Polynome'
import {
  compteOccurences,
  enleveDoublonNum,
} from '../../lib/outils/arrayOutils'
import {
  ecritureAlgebriqueSauf1,
  ecritureParentheseSiNegatif,
  reduireAxPlusB,
} from '../../lib/outils/ecritures'
import { signe } from '../../lib/outils/nombres'
import {
  gestionnaireFormulaireTexte,
  listeQuestionsToContenu,
  randint,
} from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = "Etude complète d'une fonction exponentielle."
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '18/12/2025'

export const uuid = '777be'

/**
 * @author Stéphane Guyon
 */

export const refs = {
  'fr-fr': ['TSA4-01'],
  'fr-ch': [],
}

export default class EtudeCompleteFonctionExponentielle extends Exercice {
  constructor() {
    super()
    this.nbQuestions = 1
    this.besoinFormulaireTexte = [
      'Type de questions',
      [
        'Nombres séparés par des tirets  :',
        '1 : Limites en $\\pm\\infty$',
        '2 : Calcul de la dérivée',
        '3 : Étude de variations',
        '4 : Etude de la convexité',
        "5 : Résolution d'une équation $f(x)=k$",
        '6 : Toutes les questions',
      ].join('\n'),
    ]
    this.sup = '6'
    this.spacing = 2
    this.spacingCorr = 2
  }

  nouvelleVersion() {
    const typesDeQuestionsDisponibles = enleveDoublonNum(
      (this.sup === '' ? '6' : this.sup).includes('6')
        ? [1, 2, 3, 4, 5]
        : gestionnaireFormulaireTexte({
            saisie: this.sup,
            max: 6,
            melange: 1000,
            defaut: 6,
            nbQuestions: 5,
            shuffle: false,
          }).map(Number),
    )

    let nbDeQuestions = typesDeQuestionsDisponibles.length
    if (compteOccurences(typesDeQuestionsDisponibles, 1) > 0) nbDeQuestions++

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      const a = randint(-5, 5, 0)
      const b = randint(-5, 5, 0)
      const m = randint(-5, 5, 0)
      const k = randint(-5, 5, 0)
      const fAff = new Polynome({ coeffs: [b, a] })
      const questions: string[] = []
      const corrections: string[] = []
      if (this.questionJamaisPosee(i, a, b, m)) {
        const texte = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\left(${reduireAxPlusB(a, b)} \\right) \\mathrm{e}^{${m}x}.$<br>`
        let indiceInteractif = 0
        for (let j = 0; j < typesDeQuestionsDisponibles.length; j++) {
          let question: string = ''
          let correction: string = ''

          switch (typesDeQuestionsDisponibles[j]) {
            case 1: {
              

              let corrPlus = ''
              let corrMoins = ''

              if (m > 0) {
                 corrPlus = `En $+\\infty$, $${fAff.toString()}$ tend vers $${signe(
                  a,
                )}\\infty$ et $\\mathrm{e}^{${m}x}$ vers $+\\infty$, donc $\\lim_{x \\to +\\infty} f(x) = ${signe(
                  a,
                )}\\infty$.`
                corrMoins = `En $-\\infty$, $${fAff.toString()}$ tend vers $${signe(
                  -a,
                )}\\infty$ et $\\mathrm{e}^{${m}x}$ vers $0$. On écrit $f(x)=\\dfrac{${a}}{${m}}${ecritureParentheseSiNegatif(
                  m,
                )}x\\mathrm{e}^{${m}x}${ecritureAlgebriqueSauf1(
                  b,
                )}\\mathrm{e}^{${m}x}$ ; comme $\\lim_{X\\to -\\infty} X\\mathrm{e}^X=0$ et $\\lim_{x\\to -\\infty} \\mathrm{e}^{${m}x}=0$, on obtient $\\lim_{x \\to -\\infty} f(x)=0$.`
              } else if (m < 0) {
                corrPlus = `En $+\\infty$, $\\mathrm{e}^{${m}x}\\to 0$ plus vite que $${fAff.toString()}$ ne tend vers ${signe(
                  a,
                )}\\infty$, donc $\\lim_{x \\to +\\infty} f(x)=0$.`
                corrMoins = `En $-\\infty$, $\\mathrm{e}^{${m}x}\\to +\\infty$ domine le facteur affine $${fAff.toString()}$, donc $\\lim_{x \\to -\\infty} f(x) = ${signe(
                  a,
                )}\\infty$.`
              } else {
                corrPlus =
                  '$m=0$ donc $f$ est affine : $\\lim_{x \\to +\\infty} f(x)=+\\infty$.'
                corrMoins =
                  '$m=0$ donc $f$ est affine : $\\lim_{x \\to -\\infty} f(x)=-\\infty$.'
              }

              question +=
                ' Étudier les limites de la fonction $f$ en $+\\infty$ et $-\\infty$.<br>' 
               

              correction += createList({
                style: 'fleches',
                items: [corrPlus, corrMoins],
              })
              correction += '<br>'
              break
            }
            case 2:
              question += `Calculer la dérivée $f'(x)$ de la fonction $f$.<br>`
              correction += `Pour calculer la dérivée de la fonction $f$, on utilise la règle du produit :<br>
      Si $f(x) = u(x) \\times v(x)$, alors $f'(x) = u'(x) \\times v(x) + u(x) \\times v'(x)$.<br>
      Ici, on a $u(x) = ${reduireAxPlusB(a, b)}$ et $v(x) = \\mathrm{e}^{${m}x}$.<br>
      Donc, $u'(x) = ${a}$ et $v'(x) = ${m} \\times \\mathrm{e}^{${m}x}$.<br>
      En appliquant la règle du produit, on obtient :<br>
      $f'(x) = ${a} \\times \\mathrm{e}^{${m}x} + (${reduireAxPlusB(a, b)}) \\times (${m} \\times \\mathrm{e}^{${m}x})$.<br>
      En factorisant par $\\mathrm{e}^{${m}x}$, on a :<br>
      $f'(x) = \\mathrm{e}^{${m}x} \\times (${a} + ${m} \\times (${reduireAxPlusB(a, b)}))$.<br>`
              if (this.interactif) {
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif,
                  KeyboardType.clavierNumbers,
                  { texteAvant: `$\\displaystyle\\lim_{x \\to +\\infty}=$` },
                )
                question += '<br>'
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif + 1,
                  KeyboardType.clavierNumbers,
                  { texteAvant: `$\\displaystyle\\lim_{x \\to -\\infty}=$` },
                )
                question += '<br>'
                handleAnswers(this, i * nbDeQuestions + indiceInteractif, {
                  reponse: {
                    value: 2,
                    options: {
                      nombreDecimalSeulement: true,
                    },
                  },
                })
                handleAnswers(this, i * nbDeQuestions + indiceInteractif + 1, {
                  reponse: {
                    value: 3,
                    options: {
                      nombreDecimalSeulement: true,
                    },
                  },
                })
              }
              indiceInteractif = indiceInteractif + 2
              break
            case 3:
              question += `Étudier les variations de la fonction $f$.<br>`
              correction += `Pour étudier les variations de la fonction $f$, on analyse le signe de sa dérivée $f'(x)$.<br>
      On a $f'(x) = \\mathrm{e}^{${m}x} \\times (${a} + ${m} \\times (${reduireAxPlusB(a, b)}))$.<br>
      Comme $\\mathrm{e}^{${m}x}$ est toujours positif, le signe de $f'(x)$ dépend du signe de la partie entre parenthèses : ${a} + ${m} \\times (${reduireAxPlusB(a, b)})$.<br>
      En résolvant l'inéquation ${a} + ${m} \\times (${reduireAxPlusB(a, b)}) > 0$, on détermine les intervalles où $f$ est croissante ou décroissante.<br>`

              break
            case 4:
              question += `Étudier la convexité de la fonction $f$.<br>`
              correction += `Pour étudier la convexité de la fonction $f$, on calcule la dérivée seconde $f''(x)$.<br>
      En dérivant $f'(x)$, on obtient :<br>
      $f''(x) = \\mathrm{e}^{${m}x} \\times (${m} \\times (${a} + ${m} \\times (${reduireAxPlusB(a, b)})) + ${m} \\times (${a} + ${m} \\times (${reduireAxPlusB(a, b)})))$.<br>
      En factorisant par $\\mathrm{e}^{${m}x}$, on a :<br>
      $f''(x) = \\mathrm{e}^{${m}x} \\times (${m}^2 \\times (${reduireAxPlusB(a, b)}) + 2${m} \\times ${a})$.<br>
      Le signe de $f''(x)$ dépend du signe de la partie entre parenthèses : ${m}^2 \\times (${reduireAxPlusB(a, b)}) + 2${m} \\times ${a}$.<br>
      En résolvant l'inéquation ${m}^2 \\times (${reduireAxPlusB(a, b)}) + 2${m} \\times ${a} > 0$, on détermine les intervalles de convexité et concavité de $f$.<br>`

              break
            case 5:
              question += `Résoudre l'équation $f(x) = ${k}$.<br>`
              correction += `Pour résoudre l'équation $f(x) = k$, on écrit :<br>
      $${reduireAxPlusB(a, b)} \\times \\mathrm{e}^{${m}x} = k$.<br>
      En isolant le terme exponentiel, on obtient :<br>
      $\\mathrm{e}^{${m}x} = \\frac{k}{${reduireAxPlusB(a, b)}}$.<br>
      En prenant le logarithme népérien des deux côtés, on a :<br>
      $${m}x = \\ln\\left(\\frac{k}{${reduireAxPlusB(a, b)}}\\right)$.<br>
      Finalement, en isolant $x$, on trouve :<br>
      $x = \\frac{1}{${m}} \\times \\ln\\left(\\frac{k}{${reduireAxPlusB(a, b)}}\\right)$.<br>`

              if (this.interactif) {
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif,
                  KeyboardType.clavierNumbers,
                  { texteAvant: `` },
                )
                question += '<br>'
                handleAnswers(this, i * nbDeQuestions + indiceInteractif, {
                  reponse: {
                    value: 3,
                    options: {
                      nombreDecimalSeulement: true,
                    },
                  },
                })
              }
              indiceInteractif++
              break
          }
          questions.push(question)
          corrections.push(correction)
        }

        this.listeQuestions[i] =
          texte +
          createList({
            style: 'alpha',
            items: questions,
          })
        this.listeCorrections[i] = createList({
          style: 'alpha',
          items: corrections,
        })
        i++
      }
      cpt++
    }

    listeQuestionsToContenu(this)
  }
}

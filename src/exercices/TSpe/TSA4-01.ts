import { createList } from '../../lib/format/lists'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { tableauDeVariation } from '../../lib/mathFonctions/etudeFonction'
import { Polynome } from '../../lib/mathFonctions/Polynome'
import {
  compteOccurences,
  enleveDoublonNum,
} from '../../lib/outils/arrayOutils'
import {
  ecritureAlgebrique,
  ecritureAlgebriqueSauf1,
  ecritureParentheseSiNegatif,
  reduireAxPlusB,
  rienSi1,
} from '../../lib/outils/ecritures'
import { signe } from '../../lib/outils/nombres'
import FractionEtendue from '../../modules/FractionEtendue'
import {
  gestionnaireFormulaireTexte,
  listeQuestionsToContenu,
  randint,
} from '../../modules/outils'
import TableauSignes from '../can/2e/can2F06'
import Exercice from '../Exercice'

export const titre = "Travailler un sujet de synthèse avec la fonction exponentielle."
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
      const m = randint(-5, 5, [0,1])
      const k = randint(-5, 5, 0)
      const fAff = new Polynome({ coeffs: [b, a] })
      const questions: string[] = []
      const corrections: string[] = []
      const sommet = new FractionEtendue(a+m*b,-a*m)
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
                 corrPlus = `$\\displaystyle\\lim_{x \\to +\\infty} ${fAff.toString()}=${signe(a,)}\\infty$ et $\\displaystyle\\lim_{x \\to +\\infty}\\mathrm{e}^{${m}x}=+\\infty$, donc par produit, $\\displaystyle\\lim_{x \\to +\\infty} f(x) = ${signe(
                  a,)}\\infty$.<br>`
                corrMoins = `$\\displaystyle\\lim_{x \\to -\\infty} ${fAff.toString()}=${signe(-a)}\\infty$ et $\\displaystyle\\lim_{x \\to -\\infty}\\mathrm{e}^{${m}x}= 0$. <br>On reconnaît une forme indéterminée $${signe(-a)}\\infty \\times 0$.<br>
                Pour la lever, on développe : <br>
                $\\begin{aligned}
                f(x)&=\\left(${reduireAxPlusB(a, b)} \\right) \\mathrm{e}^{${m}x}\\\\
                  &=${rienSi1(a)}x\\times \\mathrm{e}^{${m}x}${ecritureAlgebrique(b)}\\times \\mathrm{e}^{${m}x}\\\\
                &=\\dfrac{1}{${m}}\\times${ecritureParentheseSiNegatif(a)} \\times${ecritureParentheseSiNegatif(m)}x\\mathrm{e}^{${m}x}${ecritureAlgebriqueSauf1(b,)}\\mathrm{e}^{${m}x}
                \\end{aligned}$ <br>
                 On sait, avec les croissances comparées, que $\\displaystyle\\lim_{X\\to -\\infty} X\\mathrm{e}^X=0$ , donc par composition, $\\displaystyle\\lim_{x\\to -\\infty}${ecritureParentheseSiNegatif(m)}x\\mathrm{e}^{${m}x}=0.$<br>
                 Comme $\\displaystyle\\lim_{x\\to -\\infty} \\mathrm{e}^{${m}x}=0$, alors par somme $\\displaystyle\\lim_{x \\to -\\infty} f(x)=0$.`
              } else if (m < 0) {
                corrPlus = `$\\displaystyle\\lim_{x \\to +\\infty} ${fAff.toString()}=${signe(
                  a,
                )}\\infty$ et $\\displaystyle\\lim_{x \\to +\\infty}\\mathrm{e}^{${m}x}= 0$.<br>
                On reconnaît une forme indéterminée $${signe(a)}\\infty \\times 0$.<br>
                Pour la lever, on développe : <br>
                $\\begin{aligned}
                f(x)&=\\left(${reduireAxPlusB(a, b)} \\right) \\mathrm{e}^{${m}x}\\\\
                  &=${rienSi1(a)}x\\times \\mathrm{e}^{${m}x}${ecritureAlgebrique(b)}\\times \\mathrm{e}^{${m}x}\\\\
                &=\\dfrac{1}{${m}}\\times${ecritureParentheseSiNegatif(a)} \\times${ecritureParentheseSiNegatif(m)}x\\mathrm{e}^{${m}x}${ecritureAlgebriqueSauf1(
                  b,
                )}\\mathrm{e}^{${m}x}
                \\end{aligned}$ <br>
                Avec les croissances comparées, on sait que $\\displaystyle\\lim_{X\\to -\\infty} X\\mathrm{e}^X=0$. <br>
               donc par composition, $\\displaystyle\\lim_{x\\to +\\infty}${m}x\\mathrm{e}^{${m}x}=0.$<br>
                 Comme $\\displaystyle\\lim_{x\\to +\\infty} \\mathrm{e}^{${m}x}=0$, alors par somme $\\displaystyle\\lim_{x \\to -\\infty} f(x)=0$.`
                corrMoins = `$\\displaystyle\\lim_{x \\to -\\infty} ${fAff.toString()}=${signe(
                  -a,
                )}\\infty$ et $\\displaystyle\\lim_{x \\to -\\infty}\\mathrm{e}^{${m}x}= +\\infty$ donc par produit $\\displaystyle\\lim_{x \\to -\\infty} f(x) = ${signe(-a)}\\infty$.`
              } 

              question +=
                ' Étudier les limites de la fonction $f$ en $+\\infty$ et $-\\infty$.<br>' 
               

              correction += createList({
                style: 'fleches',
                items: [corrPlus, corrMoins],
              })
              correction += '<br>'
               if (this.interactif) {
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif,
                  KeyboardType.clavierNumbers,
                  { texteAvant: `$\\displaystyle\\lim_{x \\to +\\infty}f(x)=$` },
                )
                question += '<br>'
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif + 1,
                  KeyboardType.clavierNumbers,
                  { texteAvant: `$\\displaystyle\\lim_{x \\to -\\infty}f(x)=$` },
                )
              }
              break
            }
            case 2:
              question += `Calculer la dérivée $f'(x)$ de la fonction $f$.<br>`
              correction += `Pour calculer la dérivée de la fonction $f$, on utilise la règle du produit :<br>
      Si $f = uv$, alors $f' = u' v + u v'$.<br>
      Ici, on a $u(x) = ${reduireAxPlusB(a, b)}$ et $v(x) = \\mathrm{e}^{${m}x}$.<br>
      Donc :  $u'(x) = ${a}$ et $v'(x) = ${m} \\mathrm{e}^{${m}x}$.<br>
      On obtient :<br>
      $\\begin{aligned}
      f'(x) &= ${rienSi1(a)} \\mathrm{e}^{${m}x} + (${reduireAxPlusB(a, b)})  (${m}  \\mathrm{e}^{${m}x})\\\\
      &=  \\mathrm{e}^{${m}x} \\left(${a} ${ecritureAlgebriqueSauf1(m)} (${reduireAxPlusB(a, b)})\\right)\\\\
      &=\\mathrm{e}^{${m}x}  \\left( ${a*m}x${ecritureAlgebrique(a+m*b)} \\right)
      \\end{aligned}$.<br>`
     
              if (this.interactif) {
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif,
                  KeyboardType.clavierNumbers,
                  { texteAvant: `$f'(x)=$` },
                )
                question += '<br>'
                handleAnswers(this, i * nbDeQuestions + indiceInteractif + 1, {
                  reponse: {
                    value: 3,
                    options: {
                      nombreDecimalSeulement: true,
                    },
                  },
                })
              }
              indiceInteractif = indiceInteractif + 1
              break
            case 3:
              question += `Étudier les variations de la fonction $f$.<br>`
              correction += `Pour étudier les variations de la fonction $f$, on analyse le signe de sa dérivée $f'(x)$.<br>
      On a $f'(x) = \\mathrm{e}^{${m}x}  \\left( ${a*m}x${ecritureAlgebrique(a+m*b)} \\right)$.<br>
      Pour tout $x\\in\\mathbb{R}$, $\\mathrm{e}^{${m}x}>0$. <br>On étudie le signe de $${a*m}x${ecritureAlgebrique(a+m*b)}$.`

     
      if (a*m>0) {
     correction += `<br>$\\begin{aligned}
    &${a*m}x${ecritureAlgebrique(a+m*b)}>0\\\\
     \\iff x&>${sommet.texFraction}\\\\
     \\iff x&>${sommet.texFractionSimplifiee}
     \\end{aligned}$, <br>
     $f$ est donc croissante quand $x>${sommet.texFractionSimplifiee}$<br>`}
     else if (a*m<0) {
      correction += `<br>$\\begin{aligned}
      f'(x)&>0\\\\
      ${a*m}x${ecritureAlgebrique(a+m*b)}&>0\\\\
      x&<${sommet.texFraction}\\\\
      x&<${sommet.texFractionSimplifiee}
      \\end{aligned}$, <br>
      $f$ est donc croissante quand $x<${sommet.texFractionSimplifiee}$<br><br>`}
 correction += TableauSignes
 correction +=   tableauDeVariation({
                tabInit: [
                  [['$x$', 1.5, 40],[`$f(x)$`, 4, 40]],
                  // Première ligne du tableau avec chaque antécédent suivi de son nombre de pixels de largeur estimée du texte pour le centrage
                  [`$-\\infty$`, 30, `$${sommet.texFractionSimplifiee}$`, 10, `$+\\infty$`, 30],
                ],
                // tabLines ci-dessous contient les autres lignes du tableau.
                tabLines: [
                  [
          'Line',
          30,
          '',
          10,
          '-',
          10,
          'z',
          10,
          '-',
          10,
          'z',
          10,
          '-',
        ],[
                    'Var',
                    20,
                    `-/`,
                    20,
                    `+/`,
                    20,
                    `-/`,
                    20,
                  ],
                ],
                colorBackground: '',
                espcl: 4, // taille en cm entre deux antécédents
                deltacl: 1, // distance entre la bordure et les premiers et derniers antécédents
                lgt: 2.5, // taille de la première colonne en cm
                hauteurLignes: [25, 25],
              }) 
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

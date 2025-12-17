import { int } from 'three/src/nodes/TSL.js'
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
  reduireAxPlusB,
  rienSi1,
} from '../../lib/outils/ecritures'
import { arrondi, signe } from '../../lib/outils/nombres'
import { texNombre } from '../../lib/outils/texNombre'
import FractionEtendue from '../../modules/FractionEtendue'
import {
  gestionnaireFormulaireTexte,
  listeQuestionsToContenu,
  randint,
} from '../../modules/outils'
import Exercice from '../Exercice'

export const titre =
  'Travailler un sujet de synthèse avec la fonction exponentielle.'
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
      const m = randint(-5, 5, [0, 1])
     
      const fAff = new Polynome({ coeffs: [b, a] })
      const questions: string[] = []
      const corrections: string[] = []
      const sommet = new FractionEtendue(-a - m * b, a * m)
     const k1: number = Math.trunc(Number(sommet.valeurDecimale))
       const k = a * m > 0 ? randint(k1+2, k1+10, 0) : randint(-k1-10, k1-2, 0)
      const extremum = arrondi(
        (a * sommet.valeurDecimale + b) * Math.exp(m * sommet.valeurDecimale),
        2,
      )
      const sommetConvexite = new FractionEtendue(
        -m * (2 * a + m * b),
        a * m * m,
      )
      if (this.questionJamaisPosee(i, a, b, m)) {
        const texte = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\left(${reduireAxPlusB(a, b)} \\right) \\mathrm{e}^{${rienSi1(m)}x}.$<br>`
        let indiceInteractif = 0
        for (let j = 0; j < typesDeQuestionsDisponibles.length; j++) {
          let question: string = ''
          let correction: string = ''

          switch (typesDeQuestionsDisponibles[j]) {
            case 1: {
              let corrPlus = ''
              let corrMoins = ''

              if (m > 0) {
                corrPlus = `$\\displaystyle\\lim_{x \\to +\\infty} ${fAff.toString()}=${signe(a)}\\infty$ et $\\displaystyle\\lim_{x \\to +\\infty}\\mathrm{e}^{${m}x}=+\\infty$, donc par produit, $\\displaystyle\\lim_{x \\to +\\infty} f(x) = ${signe(
                  a,
                )}\\infty$.<br>`

                corrMoins = `$\\displaystyle\\lim_{x \\to -\\infty} ${fAff.toString()}=${signe(-a)}\\infty$ et $\\displaystyle\\lim_{x \\to -\\infty}\\mathrm{e}^{${m}x}= 0$. <br>On reconnaît une forme indéterminée $${signe(-a)}\\infty \\times 0$.<br>
                Pour la lever, on utilise le théorème des croissances comparées : <br>
                $\\begin{aligned}
                f(x)&=\\left(${reduireAxPlusB(a, b)} \\right) \\mathrm{e}^{${m}x}\\\\ 
                  &=${rienSi1(a)}x\\times \\mathrm{e}^{${m}x}${ecritureAlgebrique(b)}\\times \\mathrm{e}^{${m}x}\\\\
                              \\end{aligned}$ <br>
                 On sait que , pour tout réel $a$ non-nul, $\\displaystyle\\lim_{X\\to -\\infty} X\\mathrm{e}^{aX}=0$, donc  $\\displaystyle\\lim_{x\\to -\\infty}${rienSi1(a)}x\\mathrm{e}^{${m}x}=0.$<br>
                 Comme $\\displaystyle\\lim_{x\\to -\\infty} \\mathrm{e}^{${m}x}=0$, alors par somme $\\displaystyle\\lim_{x \\to -\\infty} f(x)=0$.`
              } else if (m < 0) {
                corrPlus = `$\\displaystyle\\lim_{x \\to +\\infty} ${fAff.toString()}=${signe(
                  a,
                )}\\infty$ et $\\displaystyle\\lim_{x \\to +\\infty}\\mathrm{e}^{${m}x}= 0$.<br>
                On reconnaît une forme indéterminée $${signe(a)}\\infty \\times 0$.<br>
              Pour la lever, on utilise le théorème des croissances comparées : <br>
                $\\begin{aligned}
                f(x)&=\\left(${reduireAxPlusB(a, b)} \\right) \\mathrm{e}^{${m}x}\\\\
                  &=${rienSi1(a)}x\\times \\mathrm{e}^{${m}x}${ecritureAlgebrique(b)}\\times \\mathrm{e}^{${m}x}\\\\
                               \\end{aligned}$ <br>
               On sait que , pour tout réel $a$ non-nul, $\\displaystyle\\lim_{X\\to -\\infty} X\\mathrm{e}^{aX}=0$,
               donc , $\\displaystyle\\lim_{x\\to +\\infty}${rienSi1(a)}x\\mathrm{e}^{${m}x}=0.$<br>
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
                  {
                    texteAvant: `$\\displaystyle\\lim_{x \\to +\\infty}f(x)=$`,
                  },
                )
                question += '<br>'
                question += ajouteChampTexteMathLive(
                  this,
                  i * nbDeQuestions + indiceInteractif + 1,
                  KeyboardType.clavierNumbers,
                  {
                    texteAvant: `$\\displaystyle\\lim_{x \\to -\\infty}f(x)=$`,
                  },
                )
              }
              break
            }
            case 2:
              question += `Calculer la dérivée $f'(x)$ de la fonction $f$.<br>`
              correction += `On a $f=uv$, avec pour tout $x\\in\\mathbb{R}$ , $u(x) = ${reduireAxPlusB(a, b)}$ et $v(x) = \\mathrm{e}^{${m}x}$.<br>
      On calcule :    $u'(x) = ${a}$ et $v'(x) = ${m} \\mathrm{e}^{${m}x}$.<br>
     Par dérivation d'un produit,<br>
      $\\begin{aligned}
      f'(x) &=u'(x)v(x) + u(x)v'(x)\\\\
      &= ${rienSi1(a)} \\mathrm{e}^{${m}x} + (${reduireAxPlusB(a, b)})  (${m}  \\mathrm{e}^{${m}x})\\\\
      &=  \\mathrm{e}^{${m}x} \\left(${a} ${ecritureAlgebriqueSauf1(m)} (${reduireAxPlusB(a, b)})\\right)\\\\
      &=\\mathrm{e}^{${m}x}  \\left( ${a * m}x${ecritureAlgebrique(a + m * b)} \\right)
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
              {
                question += `Étudier les variations de la fonction $f$.<br>`
                correction += `Pour étudier les variations de la fonction $f$, on analyse le signe de sa dérivée $f'(x)$.<br>
      On a $f'(x) = \\mathrm{e}^{${rienSi1(m)}x}  \\left( ${rienSi1(a * m)}x${ecritureAlgebrique(a + m * b)} \\right)$.<br>
      Pour tout $x\\in\\mathbb{R}$, $\\mathrm{e}^{${rienSi1(m)}x}>0$. <br>On étudie le signe de $${rienSi1(a * m)}x${ecritureAlgebrique(a + m * b)}$.`

                correction += `<br>$\\begin{aligned}
       \\phantom{\\iff}&${rienSi1(a * m)}x${ecritureAlgebrique(a + m * b)}>0\\\\
       \\iff&${rienSi1(a * m)}x>${-a - m * b}\\\\
        \\end{aligned}$`
                if (a * m > 0) {
                  correction += `<br>$\\begin{aligned}
     \\iff x&>${sommet.texFraction}\\\\
     \\iff x&>${sommet.texFractionSimplifiee}
     \\end{aligned}$ <br>
     $f$ est donc croissante quand $x>${sommet.texFractionSimplifiee}$<br>`
                } else if (a * m < 0) {
                  correction += `<br>$\\begin{aligned}
      \\iff&x<${sommet.texFraction}\\\\
      \\iff&x<${sommet.texFractionSimplifiee}
      \\end{aligned}$ <br>`
                }
                const ligneFprime =
                  a * m > 0
                    ? ['Line', 20, '', 20, '-', 20, 'z', 20, '+', 20]
                    : ['Line', 20, '', 20, '+', 20, 'z', 20, '-', 20]
                const ligneVariation =
                  a * m > 0
                    ? [
                        'Var',
                        20,
                        '+/$0$',
                        20,
                        `-/$f\\left(${sommet.texFractionSimplifiee}\\right)$`,
                        20,
                        '+/$+\\infty$',
                        20,
                      ]
                    : [
                        'Var',
                        20,
                        '-/$0$',
                        40,
                        `+/$f\\left(${sommet.texFractionSimplifiee}\\right)$`,
                        40,
                        '-/$-\\infty$',
                        20,
                      ]
                correction += tableauDeVariation({
                  tabInit: [
                    [
                      ['x', 2, 100],
                      ["f'(x)", 2, 30],
                      ['f(x)', 4, 30],
                    ],
                    // Première ligne du tableau avec chaque antécédent suivi de son nombre de pixels de largeur estimée du texte pour le centrage
                    [
                      '$-\\infty$',
                      30,
                      `$\\quad${sommet.texFractionSimplifiee}\\quad$`,
                      30,
                      '$+\\infty$',
                      30,
                    ],
                  ],
                  // tabLines ci-dessous contient les autres lignes du tableau.
                  tabLines: [ligneFprime, ligneVariation],
                  colorBackground: '',
                  espcl: 8, // taille en cm entre deux antécédents
                  deltacl: 1, // distance entre la bordure et les premiers et derniers antécédents
                  lgt: 3.5, // taille de la première colonne en cm
                  hauteurLignes: [30, 30, 30],
                })
                correction += `avec $f\\left(${sommet.texFractionSimplifiee}\\right) \\approx ${texNombre(extremum)}$.<br>`
              }
              break
            case 4:
              question += `Soit $f''$ la dérivée de la fonction $f'$. <br>
              On donne, pour tout $x\\in\\mathbb{R}, f''(x) = \\mathrm{e}^{${rienSi1(m)}x}\\left(${rienSi1(a * m * m)}x${ecritureAlgebrique(m * (2 * a + m * b))}\\right)$.<br>
              Étudier la convexité de la fonction $f$.<br>
              Déterminer la présence éventuelle de points d'inflexion.<br>`
              correction += `Pour étudier la convexité de la fonction $f$, on étudie le signe de la dérivée seconde $f''(x)$.<br>
      Soit $x\\in\\mathbb{R}$, on a $f''(x) = \\mathrm{e}^{${rienSi1(m)}x}\\left(${rienSi1(a * m * m)}x${ecritureAlgebrique(m * (2 * a + m * b))}\\right)$<br>
    On sait que pour tout $x\\in\\mathbb{R}$, $\\mathrm{e}^{${rienSi1(m)}x}>0$.<br>
    On étudie donc le signe de $${rienSi1(a * m * m)}x${ecritureAlgebrique(m * (2 * a + m * b))}$.<br>
    On résout <br>$\\begin{aligned}
      &${rienSi1(a * m * m)}x${ecritureAlgebrique(m * (2 * a + m * b))}>0\\\\
      \\iff&${rienSi1(a * m * m)}x>${-m * (2 * a + m * b)}\\\\
      \\end{aligned}$<br>`

              if (a * m * m > 0) {
                correction += `$\\begin{aligned}
       \\iff x&>${sommetConvexite.texFraction}\\\\
       \\iff x&>${sommetConvexite.texFractionSimplifiee}
       \\end{aligned}$ <br>
       `
              } else if (a * m * m < 0) {
                correction += `$\\begin{aligned}
        \\iff&x<${sommetConvexite.texFraction}\\\\
        \\iff&x<${sommetConvexite.texFractionSimplifiee}
        \\end{aligned}$ <br>`
              }
              correction +=
                '  $f$ est convexe quand sa dérivée seconde est positive, concave quand elle est négative. On en déduit le tableau récapitulatif : <br>'
              const ligneFseconde =
                a * m * m > 0
                  ? ['Line', 20, '', 20, '-', 20, 'z', 20, '+', 20]
                  : ['Line', 20, '', 20, '+', 20, 'z', 20, '-', 20]
              const ligneFconvexite =
                a * m * m > 0
                  ? ['Line',20,'',20,'$\\text{Concave}$',30,'t',20,'$\\text{Convexe}$',20,]
                  : [
                      'Line',
                      20,
                      '',
                      20,
                      '$\\text{Convexe}$',
                      20,
                      't',
                      20,
                      '$\\text{Concave}$',
                      20,
                    ]
              correction += tableauDeVariation({
                tabInit: [
                  [
                    ['x', 3.5, 100],
                    ["f''(x)", 2, 30],
                    ['$f$', 4, 30],
                  ],
                  // Première ligne du tableau avec chaque antécédent suivi de son nombre de pixels de largeur estimée du texte pour le centrage
                  [
                    '$-\\infty$',
                    30,
                    `$${sommetConvexite.texFractionSimplifiee}$`,
                    30,
                    '$+\\infty$',
                    30,
                  ],
                ],
                // tabLines ci-dessous contient les autres lignes du tableau.
                tabLines: [ligneFseconde, ligneFconvexite],
                colorBackground: '',
                espcl: 8, // taille en cm entre deux antécédents
                deltacl: 1, // distance entre la bordure et les premiers et derniers antécédents
                lgt: 3.5, // taille de la première colonne en cm
                hauteurLignes: [30, 30, 30],
              })
              correction += `Une courbe admet un point d\'inflexion si et seulement si sa dérivée seconde s'annule et change de signe. <br>
           On peut donc conlure que la courbe représentative de $f$ admet un unique point d'inflexion en $x = ${sommetConvexite.texFractionSimplifiee}$.<br>`
              break
            case 5:
              question += `Déterminer le nombre de solution(s) de l'équation $f(x) = ${k}$.<br>
              On donnera, le cas échéant, une valeur approchée au centième près, de la ou des solutions.<br>`
              correction += `Pour résoudre l'équation $f(x) = ${k}$, on écrit :<br>
      $${reduireAxPlusB(a, b)} \\times \\mathrm{e}^{${m}x} = ${k}$.<br>
      En isolant le terme exponentiel, on obtient :<br>
      $\\mathrm{e}^{${m}x} = \\frac{${k}}{${reduireAxPlusB(a, b)}}$.<br>
      En prenant le logarithme népérien des deux côtés, on a :<br>
      $${m}x = \\ln\\left(\\frac{${k}}{${reduireAxPlusB(a, b)}}\\right)$.<br>
      Finalement, en isolant $x$, on trouve :<br>
      $x = \\frac{1}{${m}} \\times \\ln\\left(\\frac{${k}}{${reduireAxPlusB(a, b)}}\\right)$.<br>`

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

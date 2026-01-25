import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { functionCompare } from '../../lib/interactif/comparisonFunctions'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { choice } from '../../lib/outils/arrayOutils'
import { ecritureAlgebrique, reduireAxPlusB } from '../../lib/outils/ecritures'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { abs } from '../../lib/outils/nombres'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import Exercice from '../Exercice'
export const titre = 'Dériver $\\dfrac{a}{u}$'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'b6bda'
export const refs = {
  'fr-fr': ['1AN14-10'],
  'fr-ch': [''],
}
export const dateDePublication = '23/01/2026'

/**
 * Calculer la dérivée d'un quotient particulier
 * @author Gilles Mora
 *
 */
class DerivationQuotientParticulier extends Exercice {
  constructor() {
    super()
    this.besoinFormulaireTexte = [
      'Types de fonctions',
      'Nombres séparés par des tirets :\n1 : $u(x)=x+b$\n2 : $u(x)=mx+p$\n3 : $u(x)=x^2\\pm b$\n4 : Mélange',
    ]
    this.besoinFormulaire2CaseACocher = ['Numérateur égal à $1$']
    this.sup = '4'
    this.sup2 = false
    this.nbQuestions = 5
    this.correctionDetailleeDisponible = true
  }

  nouvelleVersion() {
    this.listeQuestions = []
    this.listeCorrections = []
    this.autoCorrection = []

    const listeTypeDeQuestion = gestionnaireFormulaireTexte({
      saisie: this.sup,
      min: 1,
      max: 3,
      defaut: 1,
      melange: 4,
      nbQuestions: this.nbQuestions,
    })

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let laFonction = ''
      let laDerivee = ''
      let laDeriveeIntermediaire = ''
      let uprime = ''
      let uExpression = ''
      let df = ''
      let a: number
      const choix = choice([true, false])
      
      // Détermination de a selon sup2
      if (this.sup2) {
        a = 1
      } else {
        a = randint(-10, 10, [0, 1])
      }

      switch (Number(listeTypeDeQuestion[i])) {
        case 1: // u(x) = x + b
          {
            const b = randint(-10, 10, 0)
            
            if (choix) {
              laFonction = `\\dfrac{${a}}{x${ecritureAlgebrique(b)}}`
              uExpression = `x${ecritureAlgebrique(b)}`
            } else {
              laFonction = `\\dfrac{${a}}{${b}+x}`
              uExpression = `${b}+x`
            }

            uprime = '1'
            
            if (a === 1) {
              // Pas d'étape intermédiaire si a=1
              if (choix) {
                laDerivee = `-\\dfrac{1}{(x${ecritureAlgebrique(b)})^{2}}`
              } else {
                laDerivee = `-\\dfrac{1}{(${b}+x)^{2}}`
              }
            } else {
              // Étape intermédiaire si a≠1
              if (choix) {
                laDeriveeIntermediaire = `${a}\\times\\dfrac{-1}{(x${ecritureAlgebrique(b)})^{2}}`
                if (a > 0) {
                  laDerivee = laDeriveeIntermediaire
                } else {
                  laDerivee = `\\dfrac{${abs(a)}}{(x${ecritureAlgebrique(b)})^{2}}`
                }
              } else {
                laDeriveeIntermediaire = `-\\dfrac{${a}}{(${b}+x)^{2}}`
                if (a > 0) {
                  laDerivee = laDeriveeIntermediaire
                } else {
                  laDerivee = `\\dfrac{${abs(a)}}{(${b}+x)^{2}}`
                }
              }
            }

            df = `\\mathbb{R}\\smallsetminus\\left\\{${-b}\\right\\}`
          }
          break

        case 2: // u(x) = mx + p
          {
            const m = randint(-9, 9, [0, 1, -1])
            const p = randint(-10, 10, 0)
            const u = reduireAxPlusB(m, p, 'x')
            const deriveeNum = a * m

            laFonction = `\\dfrac{${a}}{${u}}`
            uExpression = u
            uprime = `${m}`
            
            if (a === 1) {
              // Pas d'étape intermédiaire si a=1
              if (m > 0) {
                laDerivee = `-\\dfrac{${m}}{(${u})^{2}}`
              } else {
                laDerivee = `\\dfrac{${abs(m)}}{(${u})^{2}}`
              }
            } else {
              // Étape intermédiaire si a≠1
              laDeriveeIntermediaire = `-\\dfrac{${deriveeNum}}{(${u})^{2}}`
              if (deriveeNum > 0) {
                laDerivee = laDeriveeIntermediaire
              } else {
                laDerivee = `\\dfrac{${abs(deriveeNum)}}{(${u})^{2}}`
              }
            }

            // Calcul de la valeur interdite
            const valeurInterdite =
              p === 0
                ? '0'
                : m === 1
                  ? `${-p}`
                  : m === -1
                    ? `${p}`
                    : `\\dfrac{${-p}}{${m}}`
            df = `\\mathbb{R}\\setminus\\left\\{${valeurInterdite}\\right\\}`
          }
          break

        case 3: // u(x) = x² ± b
          {
            const b = randint(1, 10)
            const signe = choice(['+', '-'])
            const signeb = signe === '+' ? '+' : '-'
            const deriveeNum = 2 * a

            laFonction = `\\dfrac{${a}}{x^{2}${signeb}${b}}`
            uExpression = `x^{2}${signeb}${b}`
            uprime = `2x`
            
            if (a === 1) {
              // Pas d'étape intermédiaire si a=1
              laDerivee = `-\\dfrac{2x}{(x^{2}${signeb}${b})^{2}}`
            } else {
              // Étape intermédiaire si a≠1
              laDeriveeIntermediaire = `-\\dfrac{${deriveeNum}x}{(x^{2}${signeb}${b})^{2}}`
              if (deriveeNum > 0) {
                laDerivee = laDeriveeIntermediaire
              } else {
                laDerivee = `\\dfrac{${abs(deriveeNum)}x}{(x^{2}${signeb}${b})^{2}}`
              }
            }

            if (signe === '+') {
              df = `\\mathbb{R}`
            } else {
              df = `\\mathbb{R}\\setminus\\left\\{-\\sqrt{${b}};\\sqrt{${b}}\\right\\}`
            }
          }
          break
      }

      const texte =
        `Donner l'expression de la dérivée de la fonction $f$ définie  par $f(x)=${laFonction}$.<br>` +
        ajouteChampTexteMathLive(this, i, KeyboardType.lyceeClassique, {
          texteAvant: "$f'(x)=$",
        })

      let texteCorr = ''

      if (this.correctionDetaillee) {
        texteCorr += `La fonction $f$ est de la forme $\\dfrac{a}{u}$ avec $a=${a}$ (constante) et $u(x)=${uExpression}$.<br>`
        texteCorr += `On utilise la formule : $\\left(\\dfrac{${a}}{u}\\right)'=${a === 1 ? `\\dfrac{-u'}{u^{2}}` : `${a}\\times \\dfrac{-u'}{u^{2}}`}$.<br>`
        texteCorr += `Comme $u'(x)=${uprime}$, on obtient : `
        
        if (a === 1) {
          // Si a=1 : affichage direct du résultat en orange
          texteCorr += `$f'(x)=${miseEnEvidence(laDerivee)}$.<br>`
        } else {
          // Si a≠1 : affichage de l'étape intermédiaire puis du résultat en orange
          texteCorr += `$f'(x)=${laDeriveeIntermediaire}=${miseEnEvidence(laDerivee)}$.<br>`
        }
      } else {
        texteCorr += `On obtient : $f'(x)=${miseEnEvidence(laDerivee)}$.<br>`
      }

      if (this.questionJamaisPosee(i, laFonction)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr

        handleAnswers(this, i, {
          reponse: {
            value: laDerivee,
            options: { variable: 'x' },
            compare: functionCompare,
          },
        })
        i++
        cpt = 0
      }
      cpt++
    }
  }
}

export default DerivationQuotientParticulier
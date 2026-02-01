import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import {
  ecritureAlgebrique,
  reduireAxPlusB,
} from '../../lib/outils/ecritures'
import {
  miseEnEvidence,
  texteEnCouleur,
} from '../../lib/outils/embellissements'
import { fraction } from '../../modules/fractions'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { sp } from '../../lib/outils/outilString'

export const titre = 'Résoudre des équations par factorisation'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '01/02/2026'

/**
 * Résoudre des équations nécessitant une mise en facteur de x avant produit-nul :
 *   Type 1 : ax² = bx
 *   Type 2 : ax² = bx(cx+d)
 *   Type 3 : ax(ax+b) = ex(cx+d)
 * Les deux membres sont interchangeables aléatoirement.
 */
export const uuid = '53800'

export const refs = {
  'fr-fr': [],
  'fr-ch': [],
}

// ─── Utilitaires ────────────────────────────────────────────────────────────

/**
 * Retourne une chaîne LaTeX pour ax² (ex : "3x²", "-x²", "x²")
 */
function ecritureAx2(a) {
  if (a === 1) return 'x^2'
  if (a === -1) return '-x^2'
  return `${a}x^2`
}

/**
 * Retourne une chaîne LaTeX pour ax (ex : "3x", "-x", "x")
 */
function ecritureAx(a) {
  if (a === 1) return 'x'
  if (a === -1) return '-x'
  return `${a}x`
}

/**
 * Retourne une chaîne LaTeX pour bx(cx+d)
 */
function ecritureBxCxPlusD(b, c, d) {
  return `${ecritureAx(b)}(${reduireAxPlusB(c, d)})`
}

/**
 * Retourne une chaîne LaTeX pour ax(ax+b) — les deux facteurs partagent "a"
 * On réutilise le même coefficient pour le facteur linéaire et le coefficient de x dans la parenthèse
 */
function ecritureAxAxPlusB(a, b) {
  return `${ecritureAx(a)}(${reduireAxPlusB(a, b)})`
}

/**
 * Tri de deux fractions et retourne [petite, grande] pour construire S
 */
function triDeuxFractions(f1, f2) {
  if (f1.differenceFraction(f2).s > 0) return [f2, f1]
  if (f1.differenceFraction(f2).s < 0) return [f1, f2]
  return null // égales
}

/**
 * Construit la chaîne de réponse et de correction pour S à partir de deux fractions
 */
function construireSolution(f1, f2) {
  const tri = triDeuxFractions(f1, f2)
  if (tri === null) {
    // une seule solution
    return {
      texteCorr: `$S=\\left\\{${f1.texFractionSimplifiee}\\right\\}$`,
      reponse: `\\{${f1.texFractionSimplifiee}\\}`,
    }
  }
  const [petite, grande] = tri
  return {
    texteCorr: `$S=\\left\\{${petite.texFractionSimplifiee};${grande.texFractionSimplifiee}\\right\\}$`,
    reponse: `\\{${petite.texFractionSimplifiee};${grande.texFractionSimplifiee}\\}`,
  }
}

// ─── Classe principale ──────────────────────────────────────────────────────

export default class EquationsFactorisationX extends Exercice {
  constructor() {
    super()
    this.besoinFormulaireNumerique = [
      'Niveau de difficulté',
      3,
      '1 : ax² = bx\n 2 : ax² = bx(cx+d)\n 3 : ax(ax+b) = ex(cx+d)',
    ]

    this.nbQuestions = 3
    this.sup = 1
    this.spacingCorr = 3
    this.correctionDetailleeDisponible = true
    this.correctionDetaillee = true
  }

  nouvelleVersion() {
    this.consigne =
      'Résoudre dans $\\mathbb R$ ' +
      (this.nbQuestions !== 1
        ? 'les équations suivantes'
        : "l'équation suivante") +
      '.'

    const typesDeQuestionsDisponibles = [this.sup]

    const listeTypeDeQuestions = combinaisonListes(
      typesDeQuestionsDisponibles,
      this.nbQuestions,
    )

    for (
      let i = 0, texte, texteCorr, cpt = 0, typesDeQuestions;
      i < this.nbQuestions && cpt < 50;
    ) {
      typesDeQuestions = listeTypeDeQuestions[i]

      // Interchangeabilité : on tire un booléen pour inverser les membres
      const inverser = randint(0, 1) === 1

      let reponse

      switch (typesDeQuestions) {
        // ───────────────────────────────────────────────────────────────────
        // TYPE 1 : ax² = bx
        //   Mise en facteur → x(ax - b) = 0  →  x = 0 ou x = b/a
        // ───────────────────────────────────────────────────────────────────
        case 1: {
          const a = randint(-9, 9, 0)
          const b = randint(-9, 9, 0) // b ≠ 0 garantit deux solutions distinctes (0 et b/a)

          const membre1 = ecritureAx2(a)        // ax²
          const membre2 = ecritureAx(b)         // bx

          texte = inverser
            ? `$${membre2}=${membre1}$`
            : `$${membre1}=${membre2}$`

          // Équation normalisée vers ax² - bx = 0, factorisation x(ax - b) = 0
          const solX = fraction(0, 1)
          const solF = fraction(b, a)

          texteCorr = `On reconnaît une équation à résoudre par mise en facteur.<br>`

          // Étape : ramener tout à gauche
          texteCorr += inverser
            ? `$${membre2}=${membre1}$<br>$\\iff ${membre1}${ecritureAlgebrique(-b)}x=0$<br>`
            : `$${membre1}=${membre2}$<br>$\\iff ${membre1}${ecritureAlgebrique(-b)}x=0$<br>`

          if (this.correctionDetaillee) {
            texteCorr += `$\\iff x\\cdot(${reduireAxPlusB(a, -b)})=0$<br>`
          }

          texteCorr += `${texteEnCouleur('Un produit est nul si et seulement si au moins un de ses facteurs est nul.')}<br>`
          texteCorr += `$\\iff x=0$ ou $${reduireAxPlusB(a, -b)}=0$<br>`

          if (this.correctionDetaillee) {
            texteCorr += `$\\iff x=0$ ou $x=${solF.texFractionSimplifiee}$<br>`
          }

          texteCorr += 'On en déduit :  '
          const sol1 = construireSolution(solX, solF)
          texteCorr += sol1.texteCorr
          reponse = sol1.reponse
          break
        }

        // ───────────────────────────────────────────────────────────────────
        // TYPE 2 : ax² = bx(cx+d)
        //   Mise en facteur → x(ax - b(cx+d)) = 0 → x(-bcx + (a - bd)) = 0  (non)
        //   On garde la forme factorisée : x(ax - bcx - bd) = 0 → x((a-bc)x - bd) = 0
        //   Solutions : x = 0 ou x = bd/(a - bc)   (avec a ≠ bc pour éviter deg < 1)
        // ───────────────────────────────────────────────────────────────────
        case 2: {
          let a, b, c, d
          // On retire tant que a = b*c (sinon le terme en x² disparaît après simplification)
          do {
            a = randint(-9, 9, 0)
            b = randint(-9, 9, 0)
            c = randint(-9, 9, 0)
            d = randint(-9, 9, 0)
          } while (a === b * c)

          const membre1 = ecritureAx2(a)              // ax²
          const membre2 = ecritureBxCxPlusD(b, c, d)  // bx(cx+d)

          texte = inverser
            ? `$${membre2}=${membre1}$`
            : `$${membre1}=${membre2}$`

          // Après mise en facteur : x( ax - b(cx+d) ) = 0
          // On développe la parenthèse : x( (a - bc)x - bd ) = 0
          const coefX = a - b * c       // coefficient de x dans la grande parenthèse
          const terme0 = -(b * d)       // terme constant dans la grande parenthèse

          const solX = fraction(0, 1)
          const solF = fraction(-terme0, coefX) // = bd / (a - bc)

          texteCorr = `On reconnaît une équation à résoudre par mise en facteur.<br>`

          // Ramener tout à gauche
          texteCorr += inverser
            ? `$${membre2}=${membre1}$<br>$\\iff ${membre1}-${membre2}=0$<br>`
            : `$${membre1}=${membre2}$<br>$\\iff ${membre1}-${membre2}=0$<br>`

          if (this.correctionDetaillee) {
            // Mise en facteur de x : ax² - bx(cx+d) = x·(ax - b(cx+d))
            const absB = Math.abs(b)
            const signB = b > 0 ? '-' : '+'
            const coefB = absB === 1 ? '' : `${absB}`
            texteCorr += `$\\iff x\\cdot\\left(${ecritureAx(a)}${signB}${coefB}(${reduireAxPlusB(c, d)})\\right)=0$<br>`
            // Développement de la parenthèse → forme finale
            texteCorr += `$\\iff x\\cdot(${reduireAxPlusB(coefX, terme0)})=0$<br>`
          }

          texteCorr += `${texteEnCouleur('Un produit est nul si et seulement si au moins un de ses facteurs est nul.')}<br>`
          texteCorr += `$\\iff x=0$ ou $${reduireAxPlusB(coefX, terme0)}=0$<br>`

          if (this.correctionDetaillee) {
            texteCorr += `$\\iff x=0$ ou $x=${solF.texFractionSimplifiee}$<br>`
          }

          texteCorr += 'On en déduit :  '
          const sol2 = construireSolution(solX, solF)
          texteCorr += sol2.texteCorr
          reponse = sol2.reponse
          break
        }

        // ───────────────────────────────────────────────────────────────────
        // TYPE 3 : ax(ax+b) = ex(cx+d)
        //   Mise en facteur → x( a(ax+b) - e(cx+d) ) = 0
        //   Développe → x( (a²-ec)x + (ab - ed) ) = 0
        //   Solutions : x = 0 ou x = (ed - ab) / (a² - ec)   (avec a² ≠ ec)
        // ───────────────────────────────────────────────────────────────────
        case 3:
        default: {
          let a, b, e, c, d
          do {
            a = randint(-5, 5, 0)
            b = randint(-9, 9, 0)
            e = randint(-5, 5, 0)
            c = randint(-5, 5, 0)
            d = randint(-9, 9, 0)
          } while (a * a === e * c || (a === e && b === d)) // évite deg < 1 et équation triviale

          const membre1 = ecritureAxAxPlusB(a, b)         // ax(ax+b)
          const membre2 = ecritureBxCxPlusD(e, c, d)      // ex(cx+d)

          texte = inverser
            ? `$${membre2}=${membre1}$`
            : `$${membre1}=${membre2}$`

          // Développement de a(ax+b) - e(cx+d) :
          //   a²x + ab - ecx - ed = (a² - ec)x + (ab - ed)
          const coefX = a * a - e * c
          const terme0 = a * b - e * d

          const solX = fraction(0, 1)
          const solF = fraction(-terme0, coefX) // = (ed - ab) / (a² - ec)

          texteCorr = `On reconnaît une équation à résoudre par mise en facteur.<br>`

          texteCorr += inverser
            ? `$${membre2}=${membre1}$<br>$\\iff ${membre1}-${membre2}=0$<br>`
            : `$${membre1}=${membre2}$<br>$\\iff ${membre1}-${membre2}=0$<br>`

          if (this.correctionDetaillee) {
            // Mise en facteur de x
            texteCorr += `$\\iff x\\cdot\\left(${ecritureAx(a)}(${reduireAxPlusB(a, b)})-${ecritureAx(e)}(${reduireAxPlusB(c, d)})\\right)=0$<br>`
            // Développement : a·(ax+b) - e·(cx+d) = a²x + ab - ecx - ed
            texteCorr += `$\\iff x\\cdot\\left(${ecritureAx(a * a)}${ecritureAlgebrique(a * b)}-${ecritureAx(e * c)}${ecritureAlgebrique(e * d)}\\right)=0$<br>`
            // Regroupement
            texteCorr += `$\\iff x\\cdot(${reduireAxPlusB(coefX, terme0)})=0$<br>`
          }

          texteCorr += `${texteEnCouleur('Un produit est nul si et seulement si au moins un de ses facteurs est nul.')}<br>`
          texteCorr += `$\\iff x=0$ ou $${reduireAxPlusB(coefX, terme0)}=0$<br>`

          if (this.correctionDetaillee) {
            texteCorr += `$\\iff x=0$ ou $x=${solF.texFractionSimplifiee}$<br>`
          }

          texteCorr += 'On en déduit :  '
          const sol3 = construireSolution(solX, solF)
          texteCorr += sol3.texteCorr
          reponse = sol3.reponse
          break
        }
      }

      // ─── Champ interactif ────────────────────────────────────────────────
      texte +=
        sp(4) +
        ajouteChampTexteMathLive(this, i, KeyboardType.clavierEnsemble, {
          texteAvant: ' $S=$',
        })
      handleAnswers(this, i, {
        reponse: { value: reponse, options: { ensembleDeNombres: true } },
      })

      // ─── Uniformisation : mise en évidence de la réponse finale ──────────
      const textCorrSplit = texteCorr.split('=')
      let aRemplacer = textCorrSplit[textCorrSplit.length - 1]
      aRemplacer = aRemplacer.replace('$', '').replace('<br>', '')

      texteCorr = ''
      for (let ee = 0; ee < textCorrSplit.length - 1; ee++) {
        texteCorr += textCorrSplit[ee] + '='
      }
      texteCorr += `$ $${miseEnEvidence(aRemplacer)}$.`
      // ─────────────────────────────────────────────────────────────────────

      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
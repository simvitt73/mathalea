// import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { miseEnEvidence, texteEnCouleurEtGras } from '../../../lib/outils/embellissements'
import { randint } from '../../../modules/outils'
import { nombreElementsDifferents } from '../../ExerciceQcm'
import ExerciceQcmA from '../../ExerciceQcmA'

export const uuid = '1bc771'
export const refs = {
  'fr-fr': ['TSG1-QCM04'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Sujet zéro 2024 : listes ordonnées.'
export const dateDePublication = '20/04/2025'
// Ceci est un exemple de QCM avec version originale et version aléatoire
/**
 *
 * @author Stéphane Guyon
 *
 */
export default class MetropoleJuin24Exo4Q1 extends ExerciceQcmA {
  // Ceci est la fonction qui s'occupe d'écrire l'énoncé, la correction et les réponses
  // Elle factorise le code qui serait dupliqué dans versionAleatoire et versionOriginale
  private generateFraction (n: number, factors: number): string {
    let numerator = ''
    let denominator = ''

    for (let i = 0; i < factors; i++) {
      numerator += `${n - i}`
      denominator += `${i + 1}`
      if (i < factors - 1) {
        numerator += '\\times '
        denominator += '\\times '
      }
    }

    return `$\\dfrac{${numerator}}{${denominator}}$`
  }

  private generateProduct (p: number): string {
    let product = ''

    for (let i = 1; i <= p; i++) {
      product += `${i}`
      if (i < p) {
        product += '\\times '
      }
    }

    return `$${product}$`
  }

  private generateProduct2 (n: number, p: number): string {
    let product2 = ''

    for (let i = 0; i < p; i++) {
      product2 += `${n - i}`
      if (i < p - 1) {
        product2 += '\\times '
      }
    }

    return `$${product2}$`
  }

  private appliquerLesValeurs (n: number): void {
    // const factors = 3 // Nombre de facteurs souhaités
    this.reponses = [
      `$2^{${n}}$`,
      `$2\\times ${n}$`,
      `$${n}~!$`,
      this.generateFraction(n, 2),
    ]
    this.enonce = `On effectue ${n} lancers d'une pièce de monnaie. Le résultat d'un lancer est "pile" ou "face".<br>
    On note la liste ordonnée des ${n} résultats.<br>
    Quel est le nombre de listes ordonnées possibles ?`
    this.correction = `On cherche à dénombrer le nombre de listes ordonnées à ${n} éléments, c'est à dire le nombre de ${n}-uplets, que l'on peut générer à partir de l'ensemble $E=\\left\\{\\text{Pile};\\text{Face}\\right\\}$. <br>`
    this.correction += `On sait que le nombre de $k$-uplets d'un ensemble fini de cardinal $n$ est $n^k$.<br>Comme $\\mathrm{Card}E=2$, on peut conclure qu'il existe $2^{${n}}$ listes ordonnées distinctes.<br>`
    this.correction += `Une autre correction, plus empirique serait de dire qu'il y a 2 résultats possibles si on effectue 1 lancer, $2^2$ résultats possibles si on effectue 2 lancers, etc., $2^{${n}}$ résultats possibles si on effectue ${n} lancers.`
    this.correction += `<br>Au final, il y a $${miseEnEvidence(`2^{${n}}`)}$ listes ordonnées.`
  }

  // S'occupe de passser les données originales à la fonction appliquerLesValeurs
  versionOriginale: () => void = () => {
    this.appliquerLesValeurs(10) // valeurs originales pour f(x) = {a=3}x-{b=2} avec x={c=-4}
  }

  // s'occupe d'aléatoiriser les valeurs à passer à la fonction appliquerLesValeurs en vérifiant qu'on a bien 3 réponses différentes
  // Pour un qcm à n réponses, il faudrait vérifier que nombreElementsDifferents(this.reponses) < n
  versionAleatoire: () => void = () => {
    const rep = 4 // nombre de réponses différentes voulues (on rappelle que la première réponse est la bonne)
    do {
      const n = randint(7, 20) // nombre de boules dans l'urne
      this.appliquerLesValeurs(n)
    } while (nombreElementsDifferents(this.reponses) < rep)
  }

  // Ici il n'y a rien à faire, on appelle juste la version aleatoire (pour un qcm aleatoirisé, c'est le fonctionnement par défaut)
  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionAleatoire()
    this.sup3 = true
  }
}

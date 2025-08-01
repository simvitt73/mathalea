import { choice } from '../../lib/outils/arrayOutils'
import { texNombre } from '../../lib/outils/texNombre'
import { randint } from '../../modules/outils'
import { nombreElementsDifferents } from '../ExerciceQcm'
// import ExerciceQcmA from '../../ExerciceQcmA'
import ExerciceQcmA from '../ExerciceQcmA'

export const uuid = '9aef1'
export const refs = {
  'fr-fr': ['1A-S4-1'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Déterminer la médiane d\'une série à faible effectif.'
export const dateDePublication = '01/08/2025'
// Ceci est un exemple de QCM avec version originale et version aléatoire
/**
 *
 * @author Stéphane Guyon
 *
 */

export default class MedianeQCM extends ExerciceQcmA {
  // Ceci est la fonction qui s'occupe d'écrire l'énoncé, la correction et les réponses
  // Elle factorise le code qui serait dupliqué dans versionAleatoire et versionOriginale
  private appliquerLesValeurs (p1: number, p2: number):
  void {
    const n = randint(5, 10) // nombre de valeurs dans la série
    const valeurs: number[] = []
    for (let i = 0; i < n; i++) {
      valeurs.push(randint(2, 20))
    }
    const serieClassee = [...valeurs].sort((a, b) => a - b)
    const rang = n % 2 === 0 ? n / 2 : (n + 1) / 2
    const mediane = serieClassee[rang - 1]
    let distracteurIndex = rang
    while (
      distracteurIndex >= 0 &&
        (valeurs[distracteurIndex] === undefined || valeurs[distracteurIndex] === mediane)
    ) {
      distracteurIndex--
    }
    const distracteur = valeurs[distracteurIndex] !== undefined ? valeurs[distracteurIndex] : mediane + 1
    let distracteur2Index = rang - 1
    let distracteur2 = serieClassee[distracteur2Index]

    // Cherche une valeur distincte de mediane et distracteur
    while (
      (distracteur2 === mediane || distracteur2 === distracteur) &&
        (distracteur2Index < serieClassee.length - 1)
    ) {
      distracteur2Index++
      distracteur2 = serieClassee[distracteur2Index]
    }

    // Si on n'a toujours pas trouvé, cherche en arrière
    if (distracteur2 === mediane || distracteur2 === distracteur) {
      distracteur2Index = rang - 2
      while (
        distracteur2Index >= 0 &&
            (serieClassee[distracteur2Index] === mediane || serieClassee[distracteur2Index] === distracteur)
      ) {
        distracteur2Index--
      }
      distracteur2 = serieClassee[distracteur2Index]
    }

    // Si toujours pas trouvé, prend une valeur hors série
    if (distracteur2 === undefined || distracteur2 === mediane || distracteur2 === distracteur) {
      distracteur2 = mediane + 2
    }

    this.reponses = [
     `$${texNombre(mediane)}$`,
    `$${texNombre(mediane + choice([-1, 1]))}$`,
`$${texNombre(distracteur)}$`,
      `$${texNombre(distracteur2)}$`,
    ]

    this.enonce = `Déterminer la médiane de la série suivante :<br>
    ${valeurs.join(' ; ')}`
    this.correction = `La série triée est :<br>${serieClassee.join(' ; ')}`
    this.reponse = `$${texNombre(mediane)}$`
  }

  // S'occupe de passser les données originales à la fonction appliquerLesValeurs

  // s'occupe d'aléatoiriser les valeurs à passer à la fonction appliquerLesValeurs en vérifiant qu'on a bien 3 réponses différentes
  // Pour un qcm à n réponses, il faudrait vérifier que nombreElementsDifferents(this.reponses) < n
  versionAleatoire: () => void = () => {
    const n = 4 // nombre de réponses différentes voulues (on rappelle que la première réponse est la bonne)
    do {
      const p1 = randint(-6, 6, 0) * 10
      const p2 = randint(-6, 6, 0) * 10// On génère un polynôme de degré 2 ax^2+c

      this.appliquerLesValeurs(p1, p2)
    } while (nombreElementsDifferents(this.reponses) < n)
  }

  // Ici il n'y a rien à faire, on appelle juste la version aleatoire (pour un qcm aleatoirisé, c'est le fonctionnement par défaut)
  constructor () {
    super()
    this.options = { vertical: false, ordered: false }
    this.versionAleatoire()
  }
}

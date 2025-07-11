import { abs } from '../../lib/outils/nombres'
import { texNombre } from '../../lib/outils/texNombre'
import { randint } from '../../modules/outils'
import { nombreElementsDifferents } from '../ExerciceQcm'
// import ExerciceQcmA from '../../ExerciceQcmA'
import ExerciceQcmA from '../ExerciceQcmA'

export const uuid = 'c8369'
export const refs = {
  'fr-fr': ['1A-E7'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Evolutions successives'
export const dateDePublication = '10/07/2025'
// Ceci est un exemple de QCM avec version originale et version aléatoire
/**
 *
 * @author Stéphane Guyon
 *
 */
export default class Automatismes extends ExerciceQcmA {
  // Ceci est la fonction qui s'occupe d'écrire l'énoncé, la correction et les réponses
  // Elle factorise le code qui serait dupliqué dans versionAleatoire et versionOriginale
  private appliquerLesValeurs (p1: number, p2: number):
  void {
    const c1 = 1 + p1 / 100
    const c2 = 1 + p2 / 100
    const c = c1 * c2
    const p = (c - 1) * 100
    const alea = randint(-2, 2, 0)
    let evo1: string
    let evo2: string
    if (p1 >= 0) { evo1 = 'augmentation' } else { evo1 = 'diminution' }
    if (p2 >= 0) { evo2 = 'augmentation' } else { evo2 = 'diminution' }

    this.reponses = [
      `L'évolution est de ${texNombre(p)} %.`,
     `L'évolution est de ${p1 + p2} %.`,
     `L'évolution est de ${texNombre(p + alea)} %.`,
      `L'évolution est de ${texNombre(p + randint(-3, 3, [0, alea]))} %.`]

    this.enonce = `Une valeur subit une ${evo1} de ${abs(p1)} % puis une ${evo2} de ${abs(p2)} %.`
    this.enonce += '<br>Quelle est l\' évolution globale en pourcentage ?'
    this.correction = 'A partir des évolutions en pourcentage, on déduit les coefficients multiplicateurs : <br>'
    if (p1 > 0) { this.correction += `On note $c_1 = 1 + \\dfrac{${p1}}{100}=${texNombre((100 + p1) / 100)}$` } else { this.correction += `On note $c_1 = 1 - \\dfrac{${abs(p1)}}{100}=${texNombre((100 + p1) / 100)}$` }
    if (p2 > 0) { this.correction += `<br>On note $c_2 = 1 + \\dfrac{${p2}}{100}=${texNombre((100 + p2) / 100)}$.<br>` } else { this.correction += `<br>On note $c_2 = 1 - \\dfrac{${abs(p2)}}{100}=${texNombre((100 + p2) / 100)}$.<br>` }
    this.correction += `On a donc $c = c_1 \\times c_2 = ${texNombre((100 + p1) / 100)} \\times ${texNombre((100 + p2) / 100)} = ${texNombre((100 + p) / 100)}=1 + \\dfrac{${texNombre(p)}}{100}$.<br>`
    this.correction += `L'évolution globale est donc de $${texNombre(p)}$ %.<br>`
    this.reponse = ` ${p} %`
  }

  // S'occupe de passser les données originales à la fonction appliquerLesValeurs

  versionOriginale: () => void = () => {
    this.appliquerLesValeurs(-50, 50) // valeurs originales
    this.reponses = [
      'L\'évolution est de - 25 %.',
      'L\'évolution est de - 50 %.',
      'L\'évolution est de + 25 %.',
      'L\'évolution est de + 75 %.']
  }

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
    this.options = { vertical: true, ordered: false }
    this.versionAleatoire()
  }
}

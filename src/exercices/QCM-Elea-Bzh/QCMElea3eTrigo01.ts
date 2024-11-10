import { reduireAxPlusB } from '../../lib/outils/ecritures'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { randint } from '../../modules/outils'
import { codageAngle, codageAngleDroit } from '../../lib/2d/angles'
import { point } from '../../lib/2d/points'
import { polygone } from '../../lib/2d/polygones'
import { labelPoint, latex2d } from '../../lib/2d/textes'
import { choice } from '../../lib/outils/arrayOutils'
import { texNombre } from '../../lib/outils/texNombre'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import { nombreElementsDifferents } from '../ExerciceQcm'
import ExerciceQcmA from '../ExerciceQcmA'

export const uuid = '0378f'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Réviser la leçon du chapitre trigonométrie en 3e : question 01'
export const dateDePublication = '11/11/2024'
// Ceci est un exemple de QCM avec version originale et version aléatoire
/**
 *
 * @author Matthieu DEVILLERS
 * matthieu.devillers@ac-rennes.fr
 */
export default class QCMElea3eTrigo01 extends ExerciceQcmA {
  // Ceci est la fonction qui s'occupe d'écrire l'énoncé, la correction et les réponses
  // Elle factorise le code qui serait dupliqué dans versionAleatoire et versionOriginale
  private appliquerLesValeurs (ABC: string, A: string, c: number): void {
    this.reponses = [
      `$${String(a * c - b)}$`,
      `$${String(a * c + b)}$`,
      `$${String(a + c - b)}$`
    ]
    this.enonce = `Dans le triangle $${ABC}$ rectangle en $${A}$ ci-dessous, quelle est l'image de $${c.toString()}$ par cette fonction ?`
    this.correction = `$f(x) = ${reduireAxPlusB(a, -b)}$, donc $f(${c.toString()}) = ${a}\\times (${c.toString()}) - ${b.toString()} = ${miseEnEvidence((a * c - b).toString())}$.`
  }

  // S'occupe de passser les données originales à la fonction appliquerLesValeurs
  versionOriginale: () => void = () => {
    this.appliquerLesValeurs(3, 2, -4) // valeurs originales pour f(x) = {a=3}x-{b=2} avec x={c=-4}
  }

  // s'occupe d'aléatoiriser les valeurs à passer à la fonction appliquerLesValeurs en vérifiant qu'on a bien 3 réponses différentes
  // Pour un qcm à n réponses, il faudrait vérifier que nombreElementsDifferents(this.reponses) < n
  versionAleatoire: () => void = () => {
    const n = 3 // nombre de réponses différentes voulues (on rappelle que la première réponse est la bonne)
    do {
      const a = randint(2, 6)
      const b = randint(2, 9, [a])
      const c = -randint(2, 5)
      this.appliquerLesValeurs(a, b, c)
    } while (nombreElementsDifferents(this.reponses) < n)
  }

  // Ici il n'y a rien à faire, on appelle juste la version aleatoire (pour un qcm aleatoirisé, c'est le fonctionnement par défaut)
  constructor () {
    super()
    this.versionAleatoire()
  }
}

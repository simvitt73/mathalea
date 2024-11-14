import { randint } from '../../../modules/outils'
import { nombreElementsDifferents } from '../../ExerciceQcm'
import ExerciceQcmA from '../../ExerciceQcmA'

export const uuid = 'A062023Q1'
export const refs = {
  'fr-fr': ['TSA1-06'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'QCM Bac Asie mars 2023 : Python'
export const dateDePublication = '05/11/2024'
/**
 * Ceci est un exo construit à partir d'une question de qcm de Bac.
 * Il utilise la classe ExerciceQcm qui définit les contours de l'exo (sans version aléatoire)
 * Ce moule à exo dispose d'une méthode qcmCamExport qui permet de récupérer le JSON de la question et de la reponse pour qcmCam.
 * Il est interactif et dispose d'un export AMC d'office
 */
export default class SujetZero2024Ex5Q5 extends ExerciceQcmA {
  private appliquerLesValeurs (u0:number, r:number, k:number): void {
    /*
    */
    const un = u0 + r * k
    this.reponses = [
      `$\\dfrac{${Math.floor(k / 2)}}{${k + 1}}$`,
      `$\\dfrac{${Math.floor(1 + k / 2)}}{${k + 1}}$`,
      '$\\dfrac{1}{2}$',
      `$\\dfrac{${(2 * u0 + r) * 2}}{${k + 1}}$`
    ]

    this.enonce = `On considère L une liste de nombres constituée de termes consécutifs d'une suite arithmétique de premier terme ${u0} et de raison ${r},<br> le dernier nombre de la liste est ${un} soit: 
L = [${u0}, ${u0 + r}, \\ldots , ${un}].<br>
On choisit au hasard un nombre dans cette liste. La probabilité de tirer un nombre pair est:`
    this.correction = `Sur les ${k + 1} nombres de la liste le premier et le dernier nombre de la liste sont impairs.<br>`
    this.correction += `Il y a donc ${Math.floor(k / 2)} nombres pairs.<br>`
    this.correction += `La probabilité de tirer un nombre pair est donc $\\dfrac{${Math.floor(k / 2)}}{${k + 1}}$ ;<br>`
  }

  versionOriginale: () => void = () => {
    this.appliquerLesValeurs(7, 3, 672)
  }

  versionAleatoire: () => void = () => {
    const n = 4
    do {
      const u0 = randint(2, 10)
      const r = 2 * randint(1, 5) + 1
      const k = randint(8, 20)
      this.appliquerLesValeurs(u0, r, k)
    } while (nombreElementsDifferents(this.reponses) < n)
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionAleatoire()
  }
}

import { randint } from '../../../modules/outils'
import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'A062023Q1'
export const refs = {
  'fr-fr': ['TSA1-06'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'QCM Bac Asie juin 2023 : Python'
export const dateDePublication = '05/11/2024'
/**
 * Ceci est un exo construit à partir d'une question de qcm de Bac.
 * Il utilise la classe ExerciceQcm qui définit les contours de l'exo (sans version aléatoire)
 * Ce moule à exo dispose d'une méthode qcmCamExport qui permet de récupérer le JSON de la question et de la reponse pour qcmCam.
 * Il est interactif et dispose d'un export AMC d'office
 */
export default class SujetZero2024Ex5Q5 extends ExerciceQcm {
  versionOriginale: () => void = () => {
    const u0 = randint(2, 10)
    const r = randint(2, 6)
    const k = randint(8, 20)
    const un = u0 + r * k
    this.reponses = [
      `${k + 1}`,
      `${un}`,
      `${k}`,
      `${un - u0}`
    ]

    this.enonce = `On considère L une liste de nombres constituée de termes consécutifs d'une suite arithmétique de premier terme ${u0} et de raison ${r},<br> le dernier nombre de la liste est ${un} soit: 
L = [${u0}, ${u0 + r}, \\ldots , ${un}}].<br>
Le nombre de termes de cette liste est :`
    this.correction = `Le nombre de termes de cette liste est : ${k + 1} :`
    this.correction += `en effet, le $n$-ième terme de la liste est $u_{n-1}=${u0} + ${r}(n - 1)$ ;<br>`
    this.correction += 'il faut donc résoudre l\'équation :<br>'
    this.correction += `$${un} = ${u0} + ${r}(n - 1) \\iff ${un - u0} = ${r}(n - 1) \\iff n - 1=${(un - u0) / r}\\iff n=${k + 1}$.<br>`
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionOriginale()
  }
}

import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'A2032023Q2'
export const refs = {
  'fr-fr': ['TSA1-QCM06'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'QCM Bac Asie mars 2023 : Suites'
export const dateDePublication = '05/11/2024'
/**
 * Ceci est un exo construit à partir d'une question de qcm de Bac.
 * Il utilise la classe ExerciceQcm qui définit les contours de l'exo (sans version aléatoire)
 * Ce moule à exo dispose d'une méthode qcmCamExport qui permet de récupérer le JSON de la question et de la reponse pour qcmCam.
 * Il est interactif et dispose d'un export AMC d'office
 */
export default class SujetZero2024Ex5Q5 extends ExerciceQcm {
  versionOriginale: () => void = () => {
    this.reponses = [
      '$\\dfrac{336}{673}$',
      '$\\dfrac{1}{2}$',
      '$\\dfrac{34}{673}$',
      '$\\dfrac{337}{673}$'
    ]

    this.enonce = this.sup3
      ? `On considère L une liste de nombres constituée de termes consécutifs d'une suite arithmétique de premier terme $7$ et de raison $3$,<br> le dernier nombre de la liste est $2023$ soit: 
L = [7, 10, \\ldots , 2023].<br>`
      : ''
    this.enonce += 'On choisit un nombre au hasard dans cette liste.<br>'
    this.enonce += 'La probabilité de tirer un nombre pair est :'
    this.correction = 'Sur les 673 nombres de la liste le premier et le dernier nombre de la liste sont impairs ; il y a donc 336 nombres pairs.<br>'
    this.correction += 'La probabilité de tirer un nombre pair est donc $\\dfrac{336}{673}$ ;<br>'
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionOriginale()
    this.besoinFormulaire3CaseACocher = ['Avec le préambule de l\'énoncé', true]
    this.sup3 = true
  }
}

import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'A2032023Q1'
export const refs = {
  'fr-fr': ['TSA1-QCM05'],
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
      '$673$',
      '$2023$',
      '$672$',
      '$2016$'
    ]

    this.enonce = this.sup3
      ? `On considère L une liste de nombres constituée de termes consécutifs d'une suite arithmétique de premier terme $7$ et de raison $3$,<br> le dernier nombre de la liste est $2023$ soit: 
L = [7, 10, \\ldots , 2023].<br>`
      : ''
    this.enonce += 'Le nombre de termes de cette liste est :'
    this.correction = 'Le nombre de termes de cette liste est 673. <br>'
    this.correction += 'En effet, le $n$-ième terme de la liste est $u_{n-1}=7 + 3(n - 1)$ ;<br>'
    this.correction += 'il faut donc résoudre l\'équation :<br>'
    this.correction += '$2023 = 7+3(n - 1) \\iff 2016 = 3(n - 1) \\iff n - 1=672 \\iff n=673$.<br>'
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionOriginale()
    this.besoinFormulaire3CaseACocher = ['Avec le préambule de l\'énoncé', true]
    this.sup3 = true
  }
}

import ExerciceQcm from './ExerciceQcm'

// class à utiliser pour fabriquer des Qcm ayant une version aléatoire
export default class ExerciceQcmA extends ExerciceQcm {
  versionAleatoire: () => void = () => {}
  constructor () {
    super()
    this.besoinFormulaireCaseACocher = ['VO (Une seule question produite sinon 4 Maxi)', false]
    this.sup = false
    this.nbQuestionsMax = 4
    this.nbQuestionsModifiable = true
    this.versionAleatoire()
  }

  aleatoire: ()=>void = () => {}
}

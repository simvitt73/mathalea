import ExerciceQcm from '../ExerciceQcm'

export const uuid = '3421f'
export const refs = {
  'fr-fr': ['TSA2-QCM03'],
  'ch-fr': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'QCM sur les suites numériques'
export const dateDePublication = '03/11/2024'

export default class SuitesNumeriquesQCM extends ExerciceQcm {
  // Déclaration des propriétés
  affirmations: { texte: string, estVraie: boolean }[]
  reponses: string[]
  questions: string[]
  score: number

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.titre = titre
    this.nbQuestions = 4 // Nombre d'affirmations à afficher
    this.consigne = 'Pour chaque affirmation, indique si elle est vraie ou fausse.'
    this.affirmations = [
      { texte: 'Toute suite bornée est convergente', estVraie: false },
      { texte: 'Toute suite minorée et croissante converge', estVraie: true },
      { texte: 'Toute suite croissante est bornée', estVraie: false },
      { texte: 'Toute suite qui n\'est pas bornée diverge vers +∞', estVraie: false },
      { texte: 'Toute suite croissante majorée par L, converge vers L', estVraie: true },
      { texte: 'Toute suite convergente est bornée', estVraie: true }
    ]
    this.reponses = [] // Réponses attendues (Vrai/Faux)
    this.questions = [] // Affirmations choisies aléatoirement
    this.score = 0 // Score de l'élève
    this.genererExercice()
  }

  // Méthode pour générer l'exercice
  genererExercice () {
    // Mélanger les affirmations et en choisir 4
    this.affirmations = this.shuffleArray(this.affirmations).slice(0, this.nbQuestions)

    // Préparer les questions et les réponses attendues
    this.questions = this.affirmations.map(affirmation => affirmation.texte)
    this.reponses = this.affirmations.map(affirmation => affirmation.estVraie ? 'Vrai' : 'Faux')

    // Générer l'énoncé avec les questions
    this.enonce = 'Voici les affirmations :<br>'
    this.enonce += this.questions.map((question, index) => {
      return `Affirmation ${index + 1} : ${question}`
    }).join('<br>')

    // Générer la correction
    this.correction = 'Correction :<br>'
    this.correction += this.affirmations.map((affirmation, index) => {
      const reponseCorrecte = affirmation.estVraie ? 'Vrai' : 'Faux'
      return `Affirmation ${index + 1} : ${affirmation.texte} <br> Réponse correcte : ${reponseCorrecte}`
    }).join('<br><br>')

    // Ajouter les réponses au QCM
    this.autoCorrection = this.reponses
  }

  // Méthode pour mélanger un tableau (aléatoire)
  shuffleArray (array: { texte: string, estVraie: boolean }[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // Méthode pour évaluer les réponses de l'élève
  evaluerReponses (reponsesEleve: string[]) {
    this.score = 0
    reponsesEleve.forEach((reponse: string, index: number) => {
      if (reponse === this.reponses[index]) {
        this.score++
      }
    })
    return this.score === this.nbQuestions // Retourne true si toutes les réponses sont correctes
  }
}
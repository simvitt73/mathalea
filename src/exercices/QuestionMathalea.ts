type Mathfield = {
  id: string
  keyboard?: string
  answers: { id: string, value: string }[]
  compare?: (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}

}
export default abstract class QuestionMathalea {
  public correction!: string
  public indiceExercice: number
  public indiceQuestion: number
  public isInteractif = false
  public output: 'html' | 'latex'
  public text!: string
  public mathfields: Mathfield[]
  public didacticParams: unknown
  numberOfMathFieldsByQuestion = 1
  public answers: Array<{ value: string, compare?: (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}}> = []

  private numberOfTryForNewQuestion = 2

  public constructor ({ isInteractif = false, output = 'html', previousQuestions = [], indiceQuestion = 0, indiceExercice = 0, didacticParams }: { isInteractif?: boolean, indiceExercice?: number, indiceQuestion?: number, output?: 'html' | 'latex', previousQuestions?: QuestionMathalea[], didacticParams?: unknown } = {}) {
    this.indiceExercice = indiceExercice
    this.indiceQuestion = indiceQuestion
    this.isInteractif = isInteractif
    this.output = output
    this.mathfields = []
    this.didacticParams = didacticParams
    this.newData(previousQuestions)
  }

  newData (listOfPreviousQuestions?: QuestionMathalea[]): void {
    this.init()
    this.createQuestion()
    if (listOfPreviousQuestions !== undefined) this.checkQuestionIsUnique(listOfPreviousQuestions)
  }

  init () {
    this.text = ''
    this.correction = ''
  }

  abstract createQuestion (): void

  checkQuestionIsUnique (listOfPreviousQuestions: QuestionMathalea[]): void {
    let cpt = 0
    const previousTexts = listOfPreviousQuestions.map((q) => q.text)
    while (cpt < this.numberOfTryForNewQuestion) {
      if (!previousTexts.includes(this.text)) {
        break
      }
      this.createQuestion()
      cpt++
    }
  }

  toHtml (container: HTMLElement) {
    const question = document.createElement('div')
    question.innerHTML = this.text
    container.appendChild(question)
  }

  get format () {
    return {
      newLine: '£newLine£',
      euro: '£€£',
      mathField: (i = 0) => `£mf${i}£`,
      mf: '£mf£'
    }
  }

  getText (output?: 'html' | 'latex') {
    return this.handleMathaleaMarkup(this.text, output || this.output)
  }

  getCorrection (output?: 'html' | 'latex') {
    return this.handleMathaleaMarkup(this.correction, output || this.output)
  }

  handleMathaleaMarkup (text: string, output: 'html' | 'latex') {
    return text.replace(/£newLine£/g, output === 'html' ? '<br>' : '\\\\')
      .replace(/£€£/g, output === 'html' ? '&euro;' : '\\euro{}')
      // Les mathfields doivent avoir un id au format prédéfini
      // mmais dans le nouveau modèle, ça pourrait être n'importe quelle clé
      .replace(/£mf(\d*)£/g, (_, indiceMF) => output === 'html' ? `<math-field id="champTexteEx${this.indiceExercice}Q${this.indiceQuestion * this.numberOfMathFieldsByQuestion + Number(indiceMF)}"></math-field><span id="resultatCheckEx${this.indiceExercice}Q${this.indiceQuestion * this.numberOfMathFieldsByQuestion + Number(indiceMF)}"></span>` : '')
  }
}

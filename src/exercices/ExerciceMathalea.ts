import type QuestionMathalea from './QuestionMathalea'
// @ts-expect-error typage de auto-render
import renderMathInElement from 'katex/dist/contrib/auto-render.js'

export default class ExerciceMathalea {
  protected _questions: QuestionMathalea[]
  protected elementButtonCheckAnswers: HTMLButtonElement
  protected elementContainer: HTMLDivElement
  protected typeExercice = 'html'
  public meta: {
    about: string
    author: string
    dateFirstRelease?: Date
    dateLastUpdate?: Date
    isMathalea?: boolean
  }

  public indiceExercice = 0

  private _output: 'html' | 'latex' = 'html'

  public constructor () {
    this._questions = []
    this.meta = {
      about: '',
      author: '',
      isMathalea: true
    }
    this.elementContainer = document.createElement('div')
    this.elementButtonCheckAnswers = document.createElement('button')
    this.elementButtonCheckAnswers.textContent = 'Vérifier les réponses'
    this.elementButtonCheckAnswers.addEventListener('click', this.checkAnswers.bind(this))
  }

  checkAnswers () {
    for (const question of this._questions) {
      question.checkAnswer()
      if (question.state !== 'correct') {
        question.showCorrection()
      }
      question.buttonCheckAnswers.remove()
    }
    renderMathInElement(this.elementContainer, optionsKatex)
  }

  generateANewVersion () {
    for (const question of this._questions) {
      question.generateANewVersion(this._questions.slice(0, question.indiceQuestion))
    }
    if (this.output === 'html') {
      this.updateContainer()
    }
  }

  updateContainer () {
    this.elementContainer.innerHTML = ''
    for (const question of this._questions) {
      this.elementContainer.appendChild(question.container)
    }
    this.elementContainer.appendChild(this.elementButtonCheckAnswers)
    renderMathInElement(this.elementContainer, optionsKatex)
  }

  get html () {
    this.updateContainer()
    return this.elementContainer
  }

  set questions (questions: (new ({ indiceExercice, indiceQuestion }: {indiceExercice: number, indiceQuestion: number}) => QuestionMathalea)[]) {
    for (const [indiceQuestion, Question] of questions.entries()) {
      const question = new Question({ indiceExercice: this.indiceExercice, indiceQuestion })
      this._questions.push(question)
      question.updateContainers()
    }
    if (window.location.hostname === 'localhost') console.info(this._questions)
  }

  get questions (): QuestionMathalea[] {
    return this._questions
  }

  set output (output: 'html' | 'latex') {
    this._output = output
  }

  get output (): 'html' | 'latex' {
    return this._output
  }
}

const optionsKatex = {
  delimiters: [
    { left: '\\[', right: '\\]', display: true },
    { left: '$', right: '$', display: false }
  ],
  // Les accolades permettent d'avoir une formule non coupée
  preProcess: (chaine: string) => '{' + chaine.replaceAll(String.fromCharCode(160), '\\,') + '}',
  throwOnError: true,
  errorColor: '#CC0000',
  strict: 'warn',
  trust: false
}

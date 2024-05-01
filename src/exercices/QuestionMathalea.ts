import type { Block } from './newModel/lib/Block'

export default abstract class QuestionMathalea {
  public answers: Array<{ value: string, compare?: (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}}> = []
  protected blocks: Map<string, Block> = new Map()
  public buttonCheckAnswers!: HTMLButtonElement
  public container!: HTMLElement
  protected divCorrection!: HTMLDivElement
  public correction!: string
  public didacticParams: unknown
  public indiceExercice: number
  public indiceQuestion: number
  public isInteractive = false
  protected spanSmiley!: HTMLSpanElement
  public state: 'unchecked' | 'correct' | 'incorrect' = 'unchecked'
  public text!: string

  private _output!: 'html' | 'latex'
  private numberOfTriesForNewQuestion = 50

  public constructor ({ isInteractif = false, output = 'html', previousQuestions = [], indiceQuestion = 0, indiceExercice = 0, didacticParams }: { isInteractif?: boolean, indiceExercice?: number, indiceQuestion?: number, output?: 'html' | 'latex', previousQuestions?: QuestionMathalea[], didacticParams?: unknown } = {}) {
    this.init()
    this.indiceExercice = indiceExercice
    this.indiceQuestion = indiceQuestion
    this.isInteractive = isInteractif
    this.output = output
    this.didacticParams = didacticParams
    this.generateANewVersion(previousQuestions)
  }

  abstract createQuestion (): void

  /**
   * Vérifie si la réponse de l'élève est correcte
   * Met à jour le state de la question et affiche un smiley
   */
  abstract checkAnswer (): void

  /**
   * S'assure que la question n'a jamais été posée
   * Si la question a déjà été posée, en génère une nouvelle avec this.numberOfTryForNewQuestion essais
   * Si on n'y arrive pas alors on ne vérifie que les 10 dernières questions
   * Si on n'y arrive pas alors on ne vérifie que les 2 dernières questions
   * @param listOfPreviousQuestions
   * @param numberofLastQuestionsToCompare
   */
  checkQuestionIsUnique (listOfPreviousQuestions: QuestionMathalea[], numberofLastQuestionsToCompare?: number): void {
    let cpt = 0
    let previousTexts = listOfPreviousQuestions.map((q) => q.text)
    if (numberofLastQuestionsToCompare !== undefined) {
      previousTexts = previousTexts.slice(-numberofLastQuestionsToCompare)
    }
    while (cpt < this.numberOfTriesForNewQuestion) {
      if (!previousTexts.includes(this.text)) {
        break
      }
      this.createQuestion()
      cpt++
    }
    if (cpt === this.numberOfTriesForNewQuestion) {
      if (numberofLastQuestionsToCompare === undefined) {
        this.checkQuestionIsUnique(listOfPreviousQuestions, 10)
      } else if (numberofLastQuestionsToCompare === 10) {
        this.checkQuestionIsUnique(listOfPreviousQuestions, 2)
      }
    }
  }

  /**
   * Génère une nouvelle question
   * Vérifie que la question n'a jamais été posée
   * @param listOfPreviousQuestions
   */
  generateANewVersion (listOfPreviousQuestions?: QuestionMathalea[]): void {
    this.createQuestion()
    if (listOfPreviousQuestions !== undefined) this.checkQuestionIsUnique(listOfPreviousQuestions)
  }

  updateContainers () {
    this.updateStatementContainer()
    this.updateCorrectionContainer()
  }

  abstract updateStatementContainer (): void

  updateCorrectionContainer () {
    this.divCorrection = createCorrectionWithBorderAndHeader(this.correction)
  }

  init () {
    this.container = document.createElement('div')
    this.divCorrection = document.createElement('div')
    this.buttonCheckAnswers = document.createElement('button')
    this.spanSmiley = document.createElement('span')
    this.text = ''
    this.correction = ''
    this.container.innerHTML = ''
    this.container.classList.add('p-5')
    this.spanSmiley.classList.add('mx-2')
    this.buttonCheckAnswers.textContent = 'Vérifier'
    this.buttonCheckAnswers.onclick = this.checkAnswer.bind(this)
    this.buttonCheckAnswers.classList.add('ml-5', 'bg-gray-100', 'text-gray-800', 'border', 'border-gray-300', 'hover:bg-gray-200', 'focus:outline-none', 'focus:ring-2', 'focus:ring-gray-300', 'focus:ring-opacity-50', 'rounded-lg', 'px-2', 'py-1', 'transition', 'duration-150', 'ease-in-out')
  }

  showCorrection () {
    this.container.appendChild(this.divCorrection)
  }

  hideCorrection () {
    this.divCorrection.remove()
  }

  /** Aides pour la mise en page des exercices */
  get insert () {
    return {
      /** Symbole € */
      euro: this.output === 'html' ? '&euro;' : '\\euro{}',
      /** Lettre majuscule correspondant à l'indice de la question  */
      letterCapitalFromIndiceQuestion: String.fromCharCode(65 + this.indiceQuestion % 26),
      /** Nouvelle ligne */
      newLine: this.output === 'html' ? '<br>' : '\\\\\n'
    }
  }

  get output () {
    return this._output
  }

  set output (output: 'html' | 'latex') {
    this._output = output
    if (output === 'latex') {
      this.isInteractive = false
    }
  }
}

function createCorrectionWithBorderAndHeader (content: string): HTMLDivElement {
  const container = document.createElement('div')
  const divHeader = document.createElement('div')
  const divContent = document.createElement('div')
  container.appendChild(divHeader)
  container.appendChild(divContent)
  divHeader.classList.add('rounded-t-md', 'justify-center', 'items-center', 'bg-coopmaths-struct', 'dark:bg-coopmathsdark-struct', 'font-semibold', 'text-xs', 'text-coopmaths-canvas', 'dark:text-coopmathsdark-canvas')
  divHeader.textContent = 'Correction'
  divContent.innerHTML = content
  divContent.classList.add('p-2')
  container.classList.add('border-2', 'border-coopmaths-struct', 'rounded-t-md')
  return container
}

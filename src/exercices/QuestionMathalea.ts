import type { MathfieldElement } from 'mathlive'
import { convertKeyboardTypeToBlocks, type KeyboardCategory } from '../lib/interactif/claviers/keyboard'
import { handleFocusMathField } from '../modules/loaders'

type Mathfield = {
  mathfieldElement?: MathfieldElement
  keyboard?: KeyboardCategory
  answers: string[]
  compare?: (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}

}
export default abstract class QuestionMathalea {
  public answers: Array<{ value: string, compare?: (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}}> = []
  protected buttonCheckAnswers: HTMLButtonElement
  public container: HTMLElement
  public correction!: string
  public didacticParams: unknown
  public indiceExercice: number
  public indiceQuestion: number
  public isInteractive = false
  public mathfields: Map<string, Mathfield>
  protected spanSmiley: HTMLSpanElement
  public text!: string

  private _output!: 'html' | 'latex'
  private numberOfTryForNewQuestion = 50

  public constructor ({ isInteractif = false, output = 'html', previousQuestions = [], indiceQuestion = 0, indiceExercice = 0, didacticParams }: { isInteractif?: boolean, indiceExercice?: number, indiceQuestion?: number, output?: 'html' | 'latex', previousQuestions?: QuestionMathalea[], didacticParams?: unknown } = {}) {
    this.container = document.createElement('div')
    this.buttonCheckAnswers = document.createElement('button')
    this.spanSmiley = document.createElement('span')
    this.indiceExercice = indiceExercice
    this.indiceQuestion = indiceQuestion
    this.isInteractive = isInteractif
    this.output = output
    this.mathfields = new Map()
    this.didacticParams = didacticParams
    this.getANewVersion(previousQuestions)
  }

  abstract createQuestion (): void

  checkAnswer () {
    for (const mathfield of this.mathfields.values()) {
      if (mathfield.mathfieldElement === undefined) {
        continue
      }
      const studentAnswer = mathfield.mathfieldElement.getValue()
      let studentAnswerIsOk = false
      for (const goodAnswer of mathfield.answers) {
        if (mathfield.compare) {
          if (mathfield.compare(studentAnswer, goodAnswer).isOk) {
            studentAnswerIsOk = true
            break
          }
        } else {
          if (studentAnswer === goodAnswer) {
            studentAnswerIsOk = true
            break
          }
        }
      }
      this.spanSmiley.textContent = studentAnswerIsOk ? '😎' : '☹️'
    }
  }

  checkQuestionIsUnique (listOfPreviousQuestions: QuestionMathalea[], numberofLastQuestionsToCompare?: number): void {
    let cpt = 0
    let previousTexts = listOfPreviousQuestions.map((q) => q.text)
    if (numberofLastQuestionsToCompare !== undefined) {
      previousTexts = previousTexts.slice(-numberofLastQuestionsToCompare)
    }
    while (cpt < this.numberOfTryForNewQuestion) {
      if (!previousTexts.includes(this.text)) {
        break
      }
      this.createQuestion()
      cpt++
    }
    if (cpt === this.numberOfTryForNewQuestion) {
      if (numberofLastQuestionsToCompare === undefined) {
        this.checkQuestionIsUnique(listOfPreviousQuestions, 10)
      } else if (numberofLastQuestionsToCompare === 10) {
        this.checkQuestionIsUnique(listOfPreviousQuestions, 2)
      }
    }
  }

  getANewVersion (listOfPreviousQuestions?: QuestionMathalea[]): void {
    this.init()
    this.createQuestion()
    if (listOfPreviousQuestions !== undefined) this.checkQuestionIsUnique(listOfPreviousQuestions)
  }

  getContainer () {
    const regex = /£mathfield:(.*?)£/g
    let currentIndex = 0
    let match
    while ((match = regex.exec(this.text)) !== null) {
      this.container.innerHTML += this.text.substring(currentIndex, match.index)
      const mathfieldElement = document.createElement('math-field') as MathfieldElement
      const id = match[1]
      mathfieldElement.id = `mathfieldEx${this.indiceExercice}Q${this.indiceQuestion}MF${id}`
      mathfieldElement.addEventListener('focus', handleFocusMathField)
      this.container.appendChild(mathfieldElement)
      this.container.appendChild(this.buttonCheckAnswers)
      currentIndex = match.index + match[0].length
      if (this.mathfields.has(id)) {
        this.mathfields.get(id)!.mathfieldElement = mathfieldElement
        const { keyboard } = this.mathfields.get(id)!
        if (keyboard !== undefined) {
          const keyboardBlocks = convertKeyboardTypeToBlocks(keyboard).join(' ')
          mathfieldElement.dataset.keyboard = keyboardBlocks
        }
      }
    }
    if (currentIndex < this.text.length) {
      this.container.innerHTML += this.text.substring(currentIndex)
    }
    this.container.appendChild(this.spanSmiley)
    return this.container
  }

  init () {
    this.text = ''
    this.correction = ''
    this.container.innerHTML = ''
    this.container.classList.add('p-5')
    this.spanSmiley.classList.add('mx-2')
    this.buttonCheckAnswers.textContent = 'Vérifier'
    this.buttonCheckAnswers.onclick = this.checkAnswer.bind(this)
    this.buttonCheckAnswers.classList.add('ml-5', 'bg-gray-100', 'text-gray-800', 'border', 'border-gray-300', 'hover:bg-gray-200', 'focus:outline-none', 'focus:ring-2', 'focus:ring-gray-300', 'focus:ring-opacity-50', 'rounded-lg', 'px-2', 'py-1', 'transition', 'duration-150', 'ease-in-out')
  }

  setMathfield ({ id = '0', keyboard, answers, compare }: { id?: string, keyboard?: KeyboardCategory, answers: number | string | (number | string)[], compare?: (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string} }) {
    if (!this.mathfields.has(id)) {
      const answersArray = Array.isArray(answers) ? answers : [answers]
      const answersArrayOfStrings = answersArray.map(answer => String(answer))
      this.mathfields.set(id, { mathfieldElement: undefined, keyboard, answers: answersArrayOfStrings, compare })
    }
  }

  /** Aides pour la mise en page des exercices */
  get add () {
    return {
      /** Symbole € */
      euro: this.output === 'html' ? '&euro;' : '\\euro{}',
      /** Lettre majuscule correspondant à l'indice de la question  */
      letter: String.fromCharCode(65 + this.indiceQuestion % 26),
      /** Champ de texte pour les mathfields */
      mathField: (indiceMF = 0) => {
        return this.output === 'html' ? `£mathfield:${indiceMF}£` : ''
      },
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

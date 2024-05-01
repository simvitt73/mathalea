import QuestionMathalea from './QuestionMathalea'
import { MathfieldBlock } from './newModel/lib/Block'
import { convertKeyboardTypeToBlocks, type KeyboardCategory } from '../lib/interactif/claviers/keyboard'
import { handleFocusMathField, handleFocusOutMathField } from '../modules/loaders'

type FunctionCompare = (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}

export default abstract class QuestionMathfield extends QuestionMathalea {
  public checkAnswer () {
    for (const mathfield of this.blocks.values()) {
      if (!(mathfield instanceof MathfieldBlock)) {
        continue
      }
      const studentAnswer = mathfield.container.getValue()
      let studentAnswerIsOk = false
      for (const goodAnswer of mathfield.answer) {
        if (mathfield.compare !== undefined) {
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
      this.state = studentAnswerIsOk ? 'correct' : 'incorrect'
    }
  }

  public createMathfield ({ answer, compare, keyboard }: { answer: string | number | (string | number)[], compare?: FunctionCompare, keyboard?: KeyboardCategory }) {
    const answersArray = Array.isArray(answer) ? answer : [answer]
    const answersArrayOfStrings = answersArray.map(answer => String(answer))
    let cpt = 0
    let id = `mathfieldEx${this.indiceExercice}Q${this.indiceQuestion}MF${cpt}`
    while (this.blocks.has(id)) {
      id = `mathfieldEx${this.indiceExercice}Q${this.indiceQuestion}MF${cpt}`
      cpt++
    }
    const mf = new MathfieldBlock({ keyboard, answer: answersArrayOfStrings, compare, id })
    this.blocks.set(id, mf)
    return mf
  }

  get insert () {
    return {
      ...super.insert,
      /** Champ de texte pour les mathfields */
      mathfield: (mf: MathfieldBlock) => {
        return this.output === 'html' ? `£mathfield:${mf.id}£` : ''
      }
    }
  }

  // insertMathfield (mf: MathfieldBlock) {
  //   return this.output === 'html' ? `£mathfield:${mf.id}£` : ''
  // }

  public updateStatementContainer () {
    const regex = /£mathfield:(.*?)£/g
    let currentIndex = 0
    let match
    while ((match = regex.exec(this.text)) !== null) {
      this.container.innerHTML += this.text.substring(currentIndex, match.index)
      const id = match[1]
      if (this.blocks.has(id)) {
        const blockMathfield = this.blocks.get(id) as MathfieldBlock
        const mathfieldElement = blockMathfield.container
        mathfieldElement.addEventListener('focus', handleFocusMathField)
        mathfieldElement.addEventListener('focusout', handleFocusOutMathField)
        this.container.appendChild(mathfieldElement)
        this.container.appendChild(this.buttonCheckAnswers)
        currentIndex = match.index + match[0].length
        const keyboard = blockMathfield.keyboard
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
  }
}

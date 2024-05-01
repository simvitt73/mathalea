import type { MathfieldElement } from 'mathlive'
import type { KeyboardCategory } from '../../../lib/interactif/claviers/keyboard'

export abstract class Block {
    abstract get container(): HTMLElement
    abstract get latex(): string
}

export class divBlock extends Block {
  text: string
  constructor (text = '') {
    super()
    this.text = text
  }

  get container () {
    const div = document.createElement('div')
    div.textContent = this.text
    return div
  }

  get latex () {
    return this.text
  }
}

type FunctionCompare = (input: string, goodAnswer: string) => {isOk: boolean, feedback?: string}

export class MathfieldBlock extends Block {
  answer: string[]
  compare?: FunctionCompare
  container: MathfieldElement
  id: string
  keyboard?: KeyboardCategory
  constructor ({ keyboard, answer, compare, id }: { keyboard?: KeyboardCategory, answer: string | number | (string | number)[], compare?:FunctionCompare, id: string }) {
    super()
    const answersArray = Array.isArray(answer) ? answer : [answer]
    const answersArrayOfStrings = answersArray.map(answer => String(answer))
    this.answer = answersArrayOfStrings
    this.compare = compare
    this.id = id
    this.keyboard = keyboard
    const element = document.createElement('math-field') as MathfieldElement
    element.id = this.id
    this.container = element
  }

  get latex () {
    return ''
  }
}

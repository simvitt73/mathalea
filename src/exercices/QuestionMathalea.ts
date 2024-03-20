type Style = {
    numerotation: 'alphabetic' | 'roman' | 'arabic'
}

export default abstract class QuestionMathalea {
  public text!: string
  public correction!: string
  public style: Style
  public output: 'html' | 'latex'

  public constructor () {
    this.output = 'html'
    this.style = {
      numerotation: 'arabic'
    }
    this.init()
  }

  init () {
    this.text = ''
    this.correction = ''
  }

  abstract newData (): void

  toHtml (container: HTMLElement) {
    const question = document.createElement('div')
    question.innerHTML = this.text
    container.appendChild(question)
  }

  get format () {
    return {
      newLine: this.output === 'html' ? '<br>' : '\n\n',
      euro: this.output === 'html' ? '&euro;' : '€'
    }
  }
}

class QuestionImage extends QuestionMathalea {
  newData () {
    const a = 2
    const b = 3
    this.text = `Soit $f$ la fonction définie par $f(x)=${a}x+${b}$`
    this.text += this.format.newLine + 'Calculer $f(2)$'
    this.correction = `$f(2)=${a} \\times 2+ ${b}= ${a * 2 + b}`
  }
}

const q = new QuestionImage()

console.log(q)

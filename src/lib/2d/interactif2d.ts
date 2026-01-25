import type { Interactif2dData, MetaInteractif2dInputs } from '../../types/2d'
import type { IExercice } from '../types'
import { ObjetMathalea2D } from './ObjetMathalea2D'

export class Interactif2d extends ObjetMathalea2D {
  exercice: IExercice
  question: number
  x: number
  y: number
  content: string
  classe: string = ''
  opacity: number = 1.0
  blanc: string = '\\ldots'
  constructor(
    content: string,
    x: number,
    y: number,
    {
      exercice,
      question = 0,
      opacity = 1.0,
      classe = '',
      blanc = '\\ldots',
    }: {
      exercice: IExercice
      question: number
      opacity?: number
      classe?: string
      blanc?: string
    },
  ) {
    super()
    this.x = x
    this.y = y
    this.content = content
    this.exercice = exercice
    this.question = question
    this.opacity = opacity
    this.blanc = blanc
    this.classe = classe
    const marge = 0.5
    this.bordures = [x - marge, y - marge, x + marge, y + marge]
  }

  svg(): Interactif2dData {
    return {
      exercice: this.exercice,
      question: this.question,
      x: this.x,
      y: this.y,
      content: this.content,
      classe: this.classe,
      blanc: this.blanc,
      opacity: this.opacity,
    }
  }

  tikz() {
    return `\\draw[opacity=${this.opacity}] (${this.x},${this.y}) node[anchor = center, rotate=${this.orientation}] {$\\ldots$}};`
  }
}

export class MetaInteractif2d extends ObjetMathalea2D {
  exercice: IExercice
  question: number
  inputs: MetaInteractif2dInputs
  constructor(
    inputs: MetaInteractif2dInputs,
    {
      exercice,
      question = 0,
    }: {
      exercice: IExercice
      question: number
    },
  ) {
    super()
    this.inputs = inputs
    this.exercice = exercice
    this.question = question
    this.bordures = this.computeBordures(
      inputs.map((input) => [
        input.x - 0.5,
        input.y - 0.5,
        input.x + 0.5,
        input.y + 0.5,
      ]),
    )
  }

  svg(): {
    exercice: IExercice
    question: number
    inputs: MetaInteractif2dInputs
  } {
    return {
      exercice: this.exercice,
      question: this.question,
      inputs: this.inputs,
    }
  }

  tikz() {
    return this.inputs
      .map(
        (input) =>
          `\\draw[opacity=${input.opacity}] (${input.x},${input.y}) node[anchor = center, rotate=${this.orientation}] {$\\ldots$}};`,
      )
      .join('\n')
  }

  computeBordures(borduresList: [number, number, number, number][]) {
    let minX = Infinity
    let minY = Infinity
    let maxX = -Infinity
    let maxY = -Infinity

    for (const bordures of borduresList) {
      const [x1, y1, x2, y2] = bordures
      if (x1 < minX) minX = x1
      if (y1 < minY) minY = y1
      if (x2 > maxX) maxX = x2
      if (y2 > maxY) maxY = y2
    }

    return [minX, minY, maxX, maxY] as [number, number, number, number]
  }
}

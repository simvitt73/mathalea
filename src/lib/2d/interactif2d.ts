import type { Interactif2dData } from '../../types/2d'
import type { IExercice } from '../types'
import { ObjetMathalea2D } from './ObjetMathalea2D'

export class Interactif2d extends ObjetMathalea2D {
  exercice: IExercice
  question: number
  x: number
  y: number
  content: string
  constructor(
    content: string,
    x: number,
    y: number,
    {
      exercice,
      question = 0,
    }: {
      exercice: IExercice
      question: number
    },
  ) {
    super()
    this.x = x
    this.y = y
    this.content = content
    this.exercice = exercice
    this.question = question
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
    }
  }

  tikz() {
    if (this.backgroundCol.startsWith('#')) {
      this.backgroundCol = `[HTML]{${this.backgroundCol.substring(1)}}`
    } else {
      this.backgroundCol = `${this.backgroundCol}`
    }
    if (this.col.startsWith('#')) {
      this.col = `[HTML]{${this.col.substring(1)}}`
    } else {
      this.col =
        this.col.startsWith('{') && this.col.endsWith('}')
          ? this.col
          : `{${this.col}}`
    }
    return this.backgroundCol !== '' && this.backgroundCol !== 'none'
      ? `\\draw[opacity=${this.opacity}] (${this.x},${this.y}) node[anchor = center, rotate=${this.orientation}] {\\colorbox{${this.backgroundCol}} {\\${this.letterSize}  \\color${this.col}{$\\ldots$}}};`
      : `\\draw[opacity=${this.opacity}] (${this.x},${this.y}) node[anchor = center, rotate=${this.orientation}] {\\${this.letterSize} \\color${this.col}{$\\ldots$}};`
  }
}

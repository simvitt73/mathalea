import { writable } from 'svelte/store'
import type {
  AlphanumericPages,
  BlockForKeyboard
} from '../types/keyboardContent'

export const keyboardState = writable<{
  isVisible: boolean
  isInLine: boolean
  idMathField: string
  alphanumericLayout: AlphanumericPages
  blocks: BlockForKeyboard[]
  isAlphanumericDisplayed?: boolean
}>({
  isVisible: false,
  isInLine: false,
  idMathField: '',
  alphanumericLayout: 'AlphaLow',
  blocks: ['numbers', 'fullOperations']
})

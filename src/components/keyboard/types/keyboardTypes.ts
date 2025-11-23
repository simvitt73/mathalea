import type { keys } from '../lib/keycaps'

export type Keys = keyof typeof keys
export type KeysList = Keys[]
export type AlphanumericPages = 'AlphaUp' | 'AlphaLow' | 'Numeric'
export type BlockForKeyboard =
  | 'alphanumeric'
  | 'advanced'
  | 'angles'
  | 'areas'
  | 'basicOperations'
  | 'basicOperations2'
  | 'basicOperationsPlus'
  | 'capacities'
  | 'compare'
  | 'complexes'
  | 'degre'
  | 'degreCelsius'
  | 'ensemble'
  | 'ensembleDefini'
  | 'fullOperations'
  | 'greek'
  | 'hms'
  | 'lengths'
  | 'clavierFonctionsTerminales'
  | 'masses'
  | 'numbers'
  | 'numbersX'
  | 'numbers2'
  | 'numbersOperations'
  | 'numbersOperationsX'
  | 'limites'
  | 'numbersSpace'
  | 'numeration'
  | 'probabilite'
  | 'suite'
  | 'trigo'
  | 'variables'
  | 'volumes'
  | 'vFON'
  | 'uppercaseAToH'
  | 'uppercaseIToP'
  | 'uppercaseQToW'
  | 'uppercaseXToZ'
  | 'estOuestSudNord'

export interface CompleteKeysList {
  inline: KeysList
  block: KeysList
}

export interface KeyboardBlock {
  keycaps: CompleteKeysList
  cols: number
  title: string
  isUnits: boolean
}

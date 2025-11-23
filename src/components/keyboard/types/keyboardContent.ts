import { GAP_BETWEEN_KEYS, KEYCAP_WIDTH } from '../lib/sizes'
import type {
  AlphanumericPages,
  BlockForKeyboard,
  CompleteKeysList,
  KeyboardBlock,
  Keys,
  KeysList,
} from './keyboardTypes'

// Réexport des types pour maintenir la compatibilité
export type {
  AlphanumericPages,
  BlockForKeyboard,
  CompleteKeysList,
  KeyboardBlock,
  Keys,
  KeysList,
}

export class Keyboard {
  blocks: KeyboardBlock[] = []

  constructor(kb?: KeyboardBlock) {
    // On importe specialKeys de manière dynamique ou on l'initialise différemment
    if (kb) {
      this.blocks.push(kb)
    }
  }

  /**
   * Ajoute un bloc de touche au clavier
   * @param kb {KeyboardBlock} bloc de touches à ajouter
   * @returns le clavier lui-même (on peut donc chaîner cette fonction)
   */
  add = (kb: KeyboardBlock): Keyboard => {
    this.blocks.push(kb)
    return this
  }

  /**
   * Ajoute les touches spéciales en première position
   */
  addSpecialKeys = (specialKeys: KeyboardBlock): Keyboard => {
    this.blocks.unshift(specialKeys)
    return this
  }

  empty = (): void => {
    this.blocks.length = 0
  }

  /**
   * Retrouve le nombre de blocs dans le clavier
   * @returns nombre de blocs dans le clavier
   */
  numberOfBlocks = (): number => this.blocks.length

  /**
   * Construit un tableau dont les éléments sont le nombre de touche par bloc
   * @returns nombre de touches par bloc (liste de nombres)
   */
  numberOfKeysPerBlock = (): number[] => {
    const result: number[] = []
    for (const block of this.blocks) {
      result.push(block.keycaps.inline.length)
    }
    return result
  }

  /**
   * Calcule le nombre total de touches dans le clavier
   * @returns nombre total de touches
   */
  numberOfKeys = (): number =>
    this.numberOfKeysPerBlock().reduce((prev, current) => prev + current, 0)

  /**
   * Décide si on passe le bloc des touches spéciales sur deux colonnes
   * lorsqu'on a que deux touches par bloc
   * (utile dans la cas de clavier cotenant très peu de touches)
   */
  checkSmallLayoutAllowed = (): void => {
    const maximumNbKeysPerBlock = this.numberOfKeysPerBlock()
      .slice(1)
      .reduce((prev, current) => (prev < current ? current : prev), 0)
    if (maximumNbKeysPerBlock <= 2 && this.blocks.length > 0) {
      // le premier bloc est celui des touches spéciales, on le passe en deux colonnes.
      this.blocks[0].cols = 2
    }
  }
}

export const inLineBlockWidth = (
  block: KeyboardBlock,
  mode: 'sm' | 'md' | 'lg' | 'xl',
): number => {
  // 3G30-1 renvoie un keycaps undefined, pourquoi ?
  const numberOfKeys = block?.keycaps?.inline?.length || 0
  // console.log('nb of keys: ' + numberOfKeys + ' / key width: ' + KEYCAP_WIDTH[mode]s + ' / gap between keys: ' + GAP_BETWEEN_KEYS[mode])
  return (
    numberOfKeys * KEYCAP_WIDTH[mode] +
    (numberOfKeys - 1) * GAP_BETWEEN_KEYS[mode]
  )
}
export const usualBlockWidth = (
  block: KeyboardBlock,
  mode: 'sm' | 'md' | 'lg' | 'xl',
): number => {
  const numberOfCols = block.cols
  return (
    numberOfCols * KEYCAP_WIDTH[mode] +
    (numberOfCols - 1) * GAP_BETWEEN_KEYS[mode]
  )
}

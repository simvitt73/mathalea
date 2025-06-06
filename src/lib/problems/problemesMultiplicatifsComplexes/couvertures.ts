import { randint } from '../../../modules/outils'
import { choice } from '../../outils/arrayOutils'
import type Probleme from '../Probleme'
import ProblemeMultiplicatifsComplexes from './problemesMultiplicatifsComplexes'
/**
 * @author Jean-Claude Lhote
 */
export function couverture (decimal = false): Probleme {
  const nb1Fois = randint(3, 7) * 5 // nombre de livres
  const part1 = choice([30, 35, 40, 45]) // longueur plastique par livre
  const part2 = randint(4, 6)
  const data = { nb1Fois, part1, part2 }
  const probleme = new ProblemeMultiplicatifsComplexes('couverture', data)
  return probleme
}

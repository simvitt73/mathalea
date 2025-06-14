import { randint } from '../../../../modules/outils'
import { KeyboardType } from '../../../interactif/claviers/keyboard'
import { miseEnEvidence } from '../../../outils/embellissements'
import { prenomPronom } from '../../../outils/Personne'
import { texNombre } from '../../../outils/texNombre'
import type Probleme from '../../Probleme'
import ProblemeMultiplicatifs from './problemesMultiplicatifsTout'
/**
 * @author Jean-Claude Lhote
 */
export function imprimante (decimal = false): Probleme {
  const personnage = prenomPronom()
  const nbFois = randint(2, 5)
  const facteur = decimal ? randint(11, 25, 20) / 10 : randint(12, 25, [10, 20])
  const unite = decimal ? 'cL' : 'mL'
  const uniteComplete = decimal ? 'centilitres' : 'millilitres'
  const data = { nbFois, facteur }
  const enonce = `Pour imprimer les sujets de contrôle cette année, ${personnage.prenom} a consommé ${nbFois} cartouches d'encre, chaque cartouche contenant $${texNombre(facteur, 1)}$ ${unite} d'encre. Quel volume d'encre a-t-${personnage.pronom} utilisé au total ?`
  const correction = `${personnage.prenom} a consommé ${nbFois} cartouches de $${texNombre(facteur, 1)}$ ${unite}.
Le volume d'encre total est : $${texNombre(nbFois, 0)}\\times ${texNombre(facteur, 1)}=${miseEnEvidence(texNombre(nbFois * facteur, 1))}$ ${uniteComplete}.`
  const probleme = new ProblemeMultiplicatifs('imprimante', data)
  probleme.enonce = enonce
  probleme.correction = correction
  probleme.schema.lignes[0].barres[0].content = `$${texNombre(facteur, 1)}\\text{ ${unite}}$`
  probleme.schema.lignes[1].barres[0].content = `$${texNombre(nbFois * facteur, 1)}\\text{ ${unite}}$`
  probleme.styleChampTexteMathlive = KeyboardType.volume
  probleme.reponse = `${texNombre(nbFois * facteur, 1)}${unite}`
  probleme.optionsComparaison = { unite: true }
  return probleme
}

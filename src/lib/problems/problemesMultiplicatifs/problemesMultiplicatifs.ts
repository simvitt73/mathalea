import { randint } from '../../../modules/outils'
import SchemaEnBoite from '../../outils/SchemaEnBoite'
import { texNombre } from '../../outils/texNombre'
import Probleme from '../Probleme'
import { coureur1 } from './coureur'
import { coureur2 } from './coureur2'
import { decoupe1 } from './decoupe'
import { gateaux1 } from './gateaux'
/**
 * @author Jean-Claude Lhote
 */
export default class ProblemeMultiplicatifs extends Probleme {
  constructor (name: string = '', data?: { nbFois: number, facteur: number }) {
    data = data == null ? { nbFois: randint(2, 5), facteur: randint(2, 5) * 5 } : data
    if (data.nbFois < 2) {
      throw new Error('La valeur de nbFois doit être supérieure ou égale à 2.')
    }
    if (data.nbFois % 1 !== 0) {
      throw new Error('La valeur  de nbFois doit être un entier.')
    }
    super(name, data)
    this.schema = new SchemaEnBoite({
      topBraces: [{
        start: 1,
        end: data.nbFois < 8 ? 2 * data.nbFois + 1 : 15,
        text: `$${data.nbFois}$ fois`
      }],
      bottomBraces: [],
      rightBraces: [],
      lignes: [
        {
          barres: data.nbFois < 8
            ? [
                {
                  content: `$${data.facteur}$`,
                  length: 2,
                  color: 'lightgray'
                },
                ...Array.from({ length: data.nbFois - 1 }, () => ({
                  content: '$\\ldots$',
                  length: 2,
                  color: 'lightgray'
                }))
              ]
            : [{
                content: `$${data.facteur}$`,
                length: 2,
                color: 'lightgray'
              },
              {
                content: '$\\ldots$',
                length: 12,
                color: 'lightgray'
              }
              ]
        },
        {
          barres: [
            {
              content: '?',
              length: data.nbFois < 8 ? 2 * data.nbFois : 14,
              color: 'lightgray'
            }
          ]
        }
      ]
    })
    this.enonce = `Combien coûte ${data.nbFois} fois un produit à $${data.facteur}$ € ?`
    this.correction = `Le coût de ${data.nbFois} fois un produit à $${data.facteur}$ € est de $${data.nbFois * data.facteur}$ €`
    this.reponse = texNombre(data.nbFois * data.facteur, 4)
  }
}

export const listeDeProblemesMultiplicatifs = [
  gateaux1,
  decoupe1,
  coureur1, coureur2
]
/*
const situationsMultiplicatives = [
  {
    enonce: `${personnage.prenom} a fait ${nbFois} pleins d'essence de $${texNombre(facteur, 1)}$ litres chacun pour son véhicule. Quelle quantité totale de carburant a-t-${personnage.pronom} utilisée ?`,
    correction: `${personnage.prenom} a fait ${nbFois} pleins de $${texNombre(facteur, 1)}$ litres.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ litres.`
  },
  {
    enonce: `${personnage.prenom} a acheté ${nbFois} billets de train à $${texNombre(facteur, 1)}$ euros chacun. Combien a-t-${personnage.pronom} payé au total ?`,
    correction: `${personnage.prenom} a acheté ${nbFois} billets à $${texNombre(facteur, 1)}$ euros.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ euros.`
  },
  {
    enonce: `${personnage.prenom} a rempli ${nbFois} sacs de sport, chacun pesant $${texNombre(facteur, 1)}$ kg. Quel est le poids total transporté par ${personnage.pronom} ?`,
    correction: `${personnage.prenom} a rempli ${nbFois} sacs de $${texNombre(facteur, 1)}$ kg.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ kg.`
  },
  {
    enonce: `${personnage.prenom} a couru ${nbFois} tours de stade, chacun mesurant $${texNombre(facteur, 1)}$ mètres. Quelle distance totale a-t-${personnage.pronom} parcourue ?`,
    correction: `${personnage.prenom} a couru ${nbFois} tours de $${texNombre(facteur, 1)}$ mètres.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ mètres.`
  },
  {
    enonce: `${personnage.prenom} a acheté ${nbFois} bouteilles d'eau de $${texNombre(facteur, 1)}$ litres chacune. Quelle quantité d'eau a-t-${personnage.pronom} achetée au total ?`,
    correction: `${personnage.prenom} a acheté ${nbFois} bouteilles de $${texNombre(facteur, 1)}$ litres.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ litres.`
  },
  {
    enonce: `${personnage.prenom} a posé ${nbFois} dalles de carrelage, chacune couvrant une surface de $${texNombre(facteur, 1)}$ m². Quelle surface totale a-t-${personnage.pronom} carrelée ?`,
    correction: `${personnage.prenom} a posé ${nbFois} dalles de $${texNombre(facteur, 1)}$ m².
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ m².`
  },
  {
    enonce: `${personnage.prenom} doit prendre ${nbFois} doses d'un médicament, chaque dose contenant $${texNombre(facteur, 1)}$ ml. Quelle quantité totale de médicament ${personnage.pronom} aura-t-il prise ?`,
    correction: `${personnage.prenom} doit prendre ${nbFois} doses de $${texNombre(facteur, 1)}$ ml.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ ml.`
  },
  {
    enonce: `${personnage.prenom} a arrosé ${nbFois} plantes, chacune nécessitant $${texNombre(facteur, 1)}$ litres d'eau. Quelle quantité totale d'eau a-t-${personnage.pronom} utilisée ?`,
    correction: `${personnage.prenom} a arrosé ${nbFois} plantes avec $${texNombre(facteur, 1)}$ litres chacune.
Le calcul est : $${texNombre(nbFois,0)}\\times ${texNombre(facteur,1)}=${texNombre(nbFois*facteur,1)}$ litres.`
  }
];
*/

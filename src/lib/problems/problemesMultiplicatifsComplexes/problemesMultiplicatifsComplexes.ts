import { randint } from '../../../modules/outils'
import { range1 } from '../../outils/nombres'
import SchemaEnBoite from '../../outils/SchemaEnBoite'
import { texNombre } from '../../outils/texNombre'
import Probleme from '../Probleme'
import { couverture } from './couvertures'
/**
 * @author Jean-Claude Lhote
 */
export default class ProblemeMultiplicatifsComplexes extends Probleme {
  constructor (name: string = '', data?: { nb1Fois: number, part1: number, part2: number }) {
    data = data == null ? { nb1Fois: randint(2, 5), part1: randint(3, 4) * 10, part2: randint(3, 4) * 100 } : data
    const nb2Fois = Math.ceil(data.nb1Fois * data.part1 / data.part2 / 100)
    super(name, data)
    this.schema = new SchemaEnBoite({
      topBraces: [{
        start: 1,
        end: 13,
        text: `$${data.nb1Fois}$ fois`
      }],
      lignes: [
        {
          barres: [
            {
              content: `$${data.part1}$`,
              length: 2,
              color: 'lightgray'
            },
            {
              content: '',
              length: 10,
              color: 'lightgray',
              type: 'flèche'
            }
          ]
        },
        {
          barres: range1(nb2Fois).map(() => ({
            content: `${data.part2 * 100}`,
            length: Math.round((data.nb1Fois * data.part1 === data.part2 * 100 * nb2Fois ? 12 : 16) / nb2Fois),
            color: 'lightgray'
          }))
        }
      ],
      rightBraces: [{
        start: 2,
        end: 3,
        text: `$${texNombre(data.nb1Fois * data.part1, 0)}$ cm`
      },
      {
        start: 3,
        end: 4,
        text: `$${data.part2 * 100 * nb2Fois}$ cm`
      }]
    })

    this.enonce = `La documentaliste du collège doit couvrir ${data.nb1Fois} livres. Il faut ${data.part1} cm de plastique pour couvrir un livre.<br>
    Un rouleau de plastique mesure ${data.part2} m.<br>
    Combien de rouleaux de plastique faut-il pour couvrir les ${data.nb1Fois} livres ?`
    this.correction = `Pour couvrir ${data.nb1Fois} livres, il faut $${data.nb1Fois * data.part1}$ cm de plastique.<br>
    Un rouleau de plastique mesure ${data.part2} cm.<br>
    Donc, il faut $${texNombre(data.nb1Fois * data.part1, 0)} \\div ${data.part2 * 100}=${texNombre((data.nb1Fois * data.part1) / data.part2 / 100, 1)}$ rouleaux de plastique.<br>
    Comme on ne peut pas acheter une fraction de rouleau, il faut ${Math.ceil((data.nb1Fois * data.part1) / data.part2 / 100)} rouleaux de plastique.`
    this.reponse = texNombre(Math.ceil((data.nb1Fois * data.part1) / data.part2 / 100), 0)
  }
}

export const listeDeProblemesMultiplicatifsComplexes = [
  couverture
]

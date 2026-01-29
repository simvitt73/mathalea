import { codageSegment } from '../../lib/2d/CodageSegment'
import { point, PointAbstrait } from '../../lib/2d/PointAbstrait'
import { polygone } from '../../lib/2d/polygones'
import { segmentAvecExtremites } from '../../lib/2d/segmentsVecteurs'
import { texteSurSegment } from '../../lib/2d/texteSurSegment'
import { choice } from '../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { context } from '../../modules/context'
import { mathalea2d } from '../../modules/mathalea2d'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import type { NestedObjetMathalea2dArray } from '../../types/2d'
import Exercice from '../Exercice'
export const titre = "Produire une formule à partir d'une figure géométrique"

/**
 * * Traduire la dépendance des grandeurs et produire une formule.
 * @author François-Rémi Zawadzki
 * à partir d'un exercice proposé par Vincent Dujardin.
 */

export const uuid = 'b3643'

export const refs = {
  'fr-fr': ['5L10-6'],
}

export default class perimetreVersFormule extends Exercice {
  constructor() {
    super()
    this.besoinFormulaireNumerique = [
      'Nombre de figures', // text
      5, // max
    ]
    // @toDo : utiliser plutôt un formulaire Texte permettant à l'enseignant de choisir le nombre de figures pour chaque question et non pour l'ensemble de l'exercice.
    // Voir la fonction gestionnaireFormulaireTexte et les nombreux exemples d'utilisation dans d'autres exercices.
    this.besoinFormulaire2Numerique = [
      "Nombre d'inconnues", // text
      3, // max
      '1 inconnue\n2 inconnues\nMélange', // tooltip
    ]

    this.sup = 3
    this.sup2 = 1
    this.nbQuestions = 1

    context.isHtml ? (this.spacing = 3) : (this.spacing = 2)
    context.isHtml ? (this.spacingCorr = 2.5) : (this.spacingCorr = 1)
  }

  nouvelleVersion() {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      // @todo: peut-être utiliser la fonction lettreMinusculeDepuisChiffre ?
      const listeLettres = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ]

      const nombreFigures = this.sup

      const cote1 = choice(listeLettres)
      const cote2 = choice(listeLettres, [cote1])
      const coteLettre = [cote1, cote2]

      let inconnueId = [true, false]

      if (this.sup2 === 1) {
        inconnueId = choice([
          [true, false],
          [false, true],
        ])
      } else if (this.sup2 === 2) {
        inconnueId = [true, true]
      } else if (this.sup2 === 3) {
        inconnueId = choice([
          [true, false],
          [false, true],
          [true, true],
          [true, true],
        ])
      }

      const coteValueConnu = [randint(2, 8), randint(2, 8)]

      const coteValueDraw = [1.5, 3] // utile uniquement pour le tracé de la légende

      const codageString = ['|', '||']

      const appels2D: NestedObjetMathalea2dArray = []

      // pour tracer les figures, on crée d'abord les fonctions utiles

      const drawLegend = function () {
        const a1 = point(0, 3)
        const a2 = point(coteValueDraw[0], 3)
        const b1 = point(0, 1)
        const b2 = point(coteValueDraw[1], 1)

        appels2D.push(segmentAvecExtremites(a1, a2))
        if (inconnueId[0]) {
          // @todo : utiliser la fonction placeLatexSurSegment(coteLettre[0], a1, a2, options) avec ses nombreuses options...
          appels2D.push(
            texteSurSegment('$' + coteLettre[0] + '$', a1, a2, 'black', 0.8),
          )
        } else {
          appels2D.push(
            texteSurSegment(
              '$' + coteLettre[0] + '=' + coteValueConnu[0] + '$',
              a1,
              a2,
              'black',
              0.8,
            ),
          )
        }
        appels2D.push(codageSegment(a1, a2, codageString[0], 'black', 0.8))
        appels2D.push(segmentAvecExtremites(b1, b2))
        if (inconnueId[1]) {
          appels2D.push(
            texteSurSegment('$' + coteLettre[1] + '$', b1, b2, 'black', 0.8),
          )
        } else {
          appels2D.push(
            texteSurSegment(
              '$' + coteLettre[1] + '=' + coteValueConnu[1] + '$',
              b1,
              b2,
              'black',
              0.8,
            ),
          )
        }
        appels2D.push(codageSegment(b1, b2, codageString[1], 'black', 0.8))
      }

      const drawRectangle = function (x: number, id0 = 0, id1 = 0) {
        const y = 4
        const theta = (Math.random() * 0.3 - 0.15) * Math.PI

        const l0 = coteValueDraw[id0]
        const l1 = coteValueDraw[id1]
        const cs0 = codageString[id0]
        const cs1 = codageString[id1]
        /*
        const A = point(x, y)
        const B = point(A.x +l0, A.y )
        const C = point(B.x, B.y + l1)
        const D = point(A.x , C.y )
        const pol = polygone(A, B, C, D)
        const abcd = rotation(pol, pointAbstrait(x+ l0/2, y + l1/2), theta)
        appels2D.push(abcd)
        appels2D.push(codageSegments( cs0, 'black',abcd.listePoints[0], abcd.listePoints[1],abcd.listePoints[2], abcd.listePoints[3]))
        appels2D.push(codageSegments( cs1, 'black',abcd.listePoints[1], abcd.listePoints[2],abcd.listePoints[3], abcd.listePoints[0]))
*/

        const A = point(x, y)
        const B = point(A.x + Math.cos(theta) * l0, A.y + Math.sin(theta) * l0)
        const C = point(B.x + Math.sin(theta) * l1, B.y - Math.cos(theta) * l1)
        const D = point(C.x - Math.cos(theta) * l0, C.y - Math.sin(theta) * l0)
        appels2D.push(polygone(A, B, C, D))
        appels2D.push(codageSegment(A, B, cs0, 'black', 0.8))
        appels2D.push(codageSegment(B, C, cs1, 'black', 0.8))
        appels2D.push(codageSegment(C, D, cs0, 'black', 0.8))
        appels2D.push(codageSegment(D, A, cs1, 'black', 0.8))

        return Math.max(A.x, B.x, C.x, D.x)
      }

      const drawTriangle = function (x: number, id0: number, id1: number) {
        const y = 2 / coteValueDraw[id0]
        const theta = (Math.random() * 0.3 - 0.15) * Math.PI

        const l = coteValueDraw[id0]
        const cs = codageString[id0]

        const A = point(x, y)
        const B = point(A.x + Math.cos(theta) * l, A.y + Math.sin(theta) * l)
        const C = point(
          A.x + Math.cos(theta + Math.PI / 3) * l,
          A.y + Math.sin(theta + Math.PI / 3) * l,
        )

        appels2D.push(polygone(A, B, C))
        appels2D.push(codageSegment(A, B, cs, 'black', 0.8))
        appels2D.push(codageSegment(B, C, cs, 'black', 0.8))
        appels2D.push(codageSegment(A, C, cs, 'black', 0.8))

        return Math.max(A.x, B.x, C.x)
      }

      const drawHexagone = function (x: number, id0 = 0, id1 = 1) {
        const y = 3.5
        let theta = (Math.random() * 0.3 - 0.15) * Math.PI
        theta = 0
        /*  
      Si elles ne servent pas, ces deux lignes peuvent être supprimées.
      const phi = 0 * Math.PI
      const khi = -0.1 * Math.PI
        */

        const l0 = coteValueDraw[id0]
        const l1 = coteValueDraw[id1]
        const cs0 = codageString[id0]
        const cs1 = codageString[id1]

        const A = point(x, y)
        const B = point(A.x + Math.cos(theta) * l1, A.y + Math.sin(theta) * l1)
        const E = point(A.x + Math.sin(theta) * l0, A.y - Math.cos(theta) * l0)
        const D = point(E.x + Math.cos(theta) * l1, E.y + Math.sin(theta) * l1)
        let C: PointAbstrait
        if (id0 === 0 && id1 === 1) {
          C = point(
            B.x - Math.cos(theta + Math.PI * (1 / 2 - 1 / 3)) * l0,
            B.y - Math.sin(theta + Math.PI * (1 / 2 - 1 / 3)) * l0,
          )
        } else {
          C = point(
            B.x + Math.cos(theta + Math.PI * (1 / 2 - 1 / 3)) * l0,
            B.y - Math.sin(theta + Math.PI * (1 / 2 - 1 / 3)) * l0,
          )
        }

        appels2D.push(polygone(A, B, C, D, E))
        appels2D.push(codageSegment(A, B, cs1, 'black', 0.8))
        appels2D.push(codageSegment(B, C, cs0, 'black', 0.8))
        appels2D.push(codageSegment(C, D, cs0, 'black', 0.8))
        appels2D.push(codageSegment(D, E, cs1, 'black', 0.8))
        appels2D.push(codageSegment(E, A, cs0, 'black', 0.8))

        return Math.max(A.x, B.x, C.x, D.x, E.x)
      }

      // On trace la figure
      // on prépare la fenetre mathalea2d
      // @todo: on utilise fixeBordures() voir plus bas
      const fenetreMathalea2D = {
        xmin: 0,
        ymin: -1,
        xmax: 30,
        ymax: 6,
        pixelsParCm: 20,
        scale: 0.5,
      }

      // on trace la légende
      drawLegend()

      // on trace nombreFigures figures
      let x = 4
      const nombreCotes = [0, 0]
      for (let iFigure = 0; iFigure < nombreFigures; iFigure++) {
        const selectDraw = choice([
          'rectangle01',
          'rectangle10',
          'carre0',
          'carre1',
          'triangle0',
          'triangle1',
          'hexagone01',
          'hexagone10',
        ])

        const dictDraw: Record<
          string,
          { f: Function; id0: number; id1: number; n0: number; n1: number }
        > = {
          rectangle01: { f: drawRectangle, id0: 0, id1: 1, n0: 2, n1: 2 },
          rectangle10: { f: drawRectangle, id0: 1, id1: 0, n0: 2, n1: 2 },
          carre0: { f: drawRectangle, id0: 0, id1: 0, n0: 4, n1: 0 },
          carre1: { f: drawRectangle, id0: 1, id1: 1, n0: 0, n1: 4 },
          triangle0: { f: drawTriangle, id0: 0, id1: 1, n0: 3, n1: 0 },
          triangle1: { f: drawTriangle, id0: 1, id1: 1, n0: 0, n1: 3 },
          hexagone01: { f: drawHexagone, id0: 0, id1: 1, n0: 3, n1: 2 },
          hexagone10: { f: drawHexagone, id0: 1, id1: 0, n0: 2, n1: 3 },
        }

        const dictDrawValue = dictDraw[selectDraw]
        x = dictDrawValue.f(x + 1, dictDrawValue.id0, dictDrawValue.id1)
        nombreCotes[0] += dictDrawValue.n0
        nombreCotes[1] += dictDrawValue.n1
      }

      // on trace pour de bon
      // #todo : utiliser fixeBordures()
      /* const figure = mathalea2d(Object.assign({
        pixelsParCm: 20,
        scale: 0.5,
      }, fixeBordures(appels2D)), appels2D)
      */
      const figure = mathalea2d(fenetreMathalea2D, appels2D)

      let finEnonce = ''
      const coteLettreString = [coteLettre[0], coteLettre[1]]
      let detailCalcul = `$${nombreCotes[0]} \\times ${coteLettre[0]} + ${nombreCotes[1]} \\times ${coteLettre[1]}`

      if (inconnueId[0] === true && inconnueId[1] === true) {
        finEnonce += '$' + coteLettre[0] + '$ et de $' + coteLettre[1] + '$ ?'
        detailCalcul +=
          '=' +
          miseEnEvidence(
            `${nombreCotes[0]} ${coteLettre[0]} + ${nombreCotes[1]} ${coteLettre[1]}`,
          )
      } else if (inconnueId[0] === true && inconnueId[1] === false) {
        // conseil d'écriture :
        // Plustôt utiliser un littéral template ici ?
        // ex:
        // finEnonce += `$${coteLettre[0]}$ ?`

        finEnonce += '$' + coteLettre[0] + '$ ?'
        coteLettreString[1] += '=' + coteValueConnu[1]
        detailCalcul += `=${nombreCotes[0]} \\times ${coteLettre[0]} + ${nombreCotes[1]} \\times ${coteValueConnu[1]}`
        detailCalcul +=
          '=' +
          miseEnEvidence(
            `${nombreCotes[0]} ${coteLettre[0]} + ${nombreCotes[1] * coteValueConnu[1]}`,
          )
      } else if (inconnueId[0] === false && inconnueId[1] === true) {
        finEnonce += '$' + coteLettre[1] + '$ ?'
        coteLettreString[0] += '=' + coteValueConnu[0]
        detailCalcul += `=${nombreCotes[0]} \\times ${coteValueConnu[0]} + ${nombreCotes[1]} \\times ${coteLettre[1]}`
        detailCalcul +=
          '=' +
          miseEnEvidence(
            `${nombreCotes[0] * coteValueConnu[0]} + ${nombreCotes[1]} ${coteLettre[1]}`,
          )
      }

      detailCalcul += '$'
      const enonce = `
On considère l'ensemble de figures ci-dessous :<br>
${figure}

Quelle formule permet de calculer le périmètre de l'ensemble des figures en fonction de ${finEnonce}`

      const correction =
        `
Pour calculer le périmètre d'une figure, on additionne les longueurs de tous les côtés.<br>
On compte $${nombreCotes[0]}$ côtés $${coteLettreString[0]}$ et $${nombreCotes[1]}$ côtés $${coteLettreString[1]}$.<br>
Ainsi, le périmètre global est : ` + detailCalcul

      if (this.questionJamaisPosee(i, enonce)) {
        // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = enonce
        this.listeCorrections[i] = correction
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

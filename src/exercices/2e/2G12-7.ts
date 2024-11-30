import Exercice from '../Exercice'
import { point } from '../../lib/2d/points'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import { choice } from '../../lib/outils/arrayOutils'
import { choisitLettresDifferentes } from '../../lib/outils/aleatoires'
import { Matrice } from '../../lib/mathFonctions/Matrice'
import SuperFigure from 'apigeom'
import type PointApigeom from 'apigeom/src/elements/points/Point'
import figureApigeom from '../../lib/figureApigeom'
import { wrapperApigeomToMathalea } from '../../lib/apigeom/apigeomZoom'
import { context } from '../../modules/context'
import { similitude } from '../../lib/2d/transformations'

export const interactifReady = true
export const interactifType = 'custom'
export const uuid = 'df171'
export const titre = 'Placer un point dans un repère orthogonal, normé ou quelconque'
export const refs = {
  'fr-fr': ['2G12-7'],
  'fr-ch': []
}

/**
 * @title Repérage 2e bis
 * @author Jean-Claude Lhote
 * On se propose de placer des points aux coordonnées données dans un repère orthogonal, normé ou quelconque.
 */
export default class BetaReperage2e extends Exercice {
  figuresApiGeom!: SuperFigure[]
  labelsPoints!: string[][]
  X!: number[][]
  Y!: number[][]
  constructor () {
    super()
    this.nbQuestions = 1
    this.figuresApiGeom = []
    this.labelsPoints = []
    this.X = []
    this.Y = []
    this.exoCustomResultat = true

    this.besoinFormulaireTexte = ['Type de repère', [
      'Nombres séparés par des tirets',
      '1 : Orthogonal',
      '2 : Normé',
      '3 : Quelconque',
      '4 : Mélange'
    ].join('\n')]
    this.sup = '1'
    this.besoinFormulaire3Numerique = ['Nombre de points à trouver/placer', 3]
    this.sup3 = 3
    this.comment = `Exercice fait suite à une demande sur la forge de Carole Feugère.<br> Il y a trois types de repères, le premier est orthogonal mais pas normé, le deuxième est normé mais pas orthonormal, le troisième n'est ni normé ni orthogonal.<br>
    Les points à Placer sont choisis aléatoirement à coordonnées entières. On peut choisir le nombre de points à Placer de 1 à 3.`
  }

  nouvelleVersion () {
    const listeTypeDeReperes = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: 3, melange: 4, nbQuestions: this.nbQuestions, defaut: 4 })
    const x: number[][] = []
    const y: number[][] = []
    const points: PointApigeom[][] = []

    for (let i = 0; i < this.nbQuestions;) {
      const options = {}
      this.figuresApiGeom[i] = new SuperFigure(Object.assign(options, { xMin: -10, yMin: -10, width: 300, height: 300, scale: 0.5 }))
      this.figuresApiGeom[i].options.latexHeight = 20
      this.figuresApiGeom[i].options.labelDxInPixels = 20
      this.figuresApiGeom[i].options.labelDyInPixels = 20
      this.figuresApiGeom[i].setToolbar({ tools: ['NAME_POINT', 'POINT_INTERSECTION', 'LINE_PARALLEL', 'UNDO', 'REDO', 'REMOVE'], position: 'top' })
      const fig = this.figuresApiGeom[i]
      x[i] = []
      y[i] = []
      this.X[i] = []
      this.Y[i] = []
      points[i] = []
      let coordsI: [number, number]
      let coordsK: [number, number]
      let matrice: Matrice
      let matriceInverse: Matrice|undefined
      const listeNoms = choisitLettresDifferentes(3 + this.sup3)
      const [labelI, labelK, labelO] = listeNoms.slice(0, 3)
      this.labelsPoints[i] = listeNoms.slice(3)
      const pointO = fig.create('Point', { x: 0, y: 0, label: labelO, labelDxInPixels: -20, labelDyInPixels: -20, color: 'black', shape: 'o', sizeInPixels: 2, isSelectable: false })
      do {
        switch (listeTypeDeReperes[i]) {
          case 1:
            coordsI = [choice([1.5, 2.5]), 0]
            coordsK = [0, choice([1, 2])]
            break
          case 2:{
            const o = point(pointO.x, pointO.y)
            const I = similitude(point(randint(6, 8) * 0.2, 0), o, randint(-20, 20), 1)
            coordsI = [I.x, I.y]
            const K = similitude(point(...coordsI), o, randint(60, 80), 1)
            coordsK = [K.x, K.y]
          }
            break
          case 3:
          default:{
            const o = point(pointO.x, pointO.y)
            coordsI = [1.5, randint(-4, 4, [0]) * 0.2]
            const K = similitude(point(...coordsI), o, randint(60, 80), choice([0.6, 0.7, 1.25, 1.3, 1.4]))
            coordsK = [K.x, K.y]
          }
            break
        }
        matrice = new Matrice([[coordsI[0], coordsK[0]], [coordsI[1], coordsK[1]]])
        matriceInverse = matrice.inverse()
      } while (matriceInverse == null)

      const pointI = fig.create('Point', { x: coordsI[0], y: coordsI[1], label: labelI, labelDxInPixels: 0, labelDyInPixels: -20, shape: 'o', color: 'black', sizeInPixels: 2, isSelectable: false })
      const pointK = fig.create('Point', { x: coordsK[0], y: coordsK[1], label: labelK, labelDxInPixels: -20, labelDyInPixels: 0, shape: 'o', color: 'black', sizeInPixels: 2, isSelectable: false })
      const IPrime = fig.create('Point', { x: pointI.x * 4, y: pointI.y * 4, isVisible: false, isSelectable: false })
      const KPrime = fig.create('Point', { x: pointK.x * 3, y: pointK.y * 3, isVisible: false, isSelectable: false })
      const INeg = fig.create('Point', { x: -IPrime.x, y: -IPrime.y, isVisible: false, isSelectable: false })
      const KNeg = fig.create('Point', { x: -KPrime.x, y: -KPrime.y, isVisible: false, isSelectable: false })

      fig.create('Segment', { point1: INeg, point2: IPrime, shape: '->', color: 'black', thickness: 2 })
      fig.create('Segment', { point1: KNeg, point2: KPrime, shape: '->', color: 'black', thickness: 2 })

      /*
      Construire la grille
      */
      for (let xx = -4; xx <= 4; xx++) {
        for (let yy = -3; yy <= 3; yy++) {
          const coords = matrice.multiply([xx, yy]).toArray() as [number, number]
          if (xx !== 0 && yy !== 0) {
            fig.create('Point', { x: coords[0], y: coords[1], label: '', shape: 'o', color: 'gray', sizeInPixels: 1, isSelectable: false })
          } else {
            fig.create('Point', { x: coords[0], y: coords[1], label: '', shape: 'o', color: 'gray', sizeInPixels: 1, isSelectable: true })
          }
        }
      }
      /*
      const figureCorrection = fig.copy()
      figureCorrection.isDynamic = false
      figureCorrection.width = 300
      figureCorrection.height = 300
      figureCorrection.scale = 0.5
*/
      const figureCorrection = new SuperFigure(Object.assign(options, { xMin: -10, yMin: -10, width: 300, height: 300, scale: 0.5 }))
      figureCorrection.options.latexHeight = 20
      figureCorrection.options.labelDxInPixels = 20
      figureCorrection.options.labelDyInPixels = 20
      figureCorrection.loadJson(JSON.parse(this.figuresApiGeom[i].json))

      for (let k = 0; k < this.sup3; k++) {
        do {
          x[i][k] = randint(-3, 3, [0])
          y[i][k] = randint(-2, 2, [0])
        } while (x[i].slice(0, k).includes(x[i][k]) && y[i].slice(0, k).includes(y[i][k]))
        const [mdx, mdy] = matrice.multiply([x[i][k], y[i][k]]).toArray()
        this.X[i][k] = mdx
        this.Y[i][k] = mdy

        figureCorrection.create('Point', {
          x: mdx,
          y: mdy,
          label: listeNoms[3 + k],
          labelDxInPixels: x[i][k] < 0
            ? -20
            : 20,
          labelDyInPixels: y[i][k] < 0
            ? -20
            : 20
        })
      }

      let question : string = ''
      if (context.isHtml) {
        if (this.interactif) {
          question = `Placer les points ${this.labelsPoints[i].map((el, k) => `${el}(${x[i][k]};${y[i][k]})`).join(', ')} dans le repère $(${labelO},${labelI},${labelK})$.<br>`
          question += figureApigeom({ exercice: this, figure: this.figuresApiGeom[i], i, isDynamic: true, defaultAction: 'NAME_POINT' })
        } else {
          question = `Placer les points ${this.labelsPoints[i].map((el, k) => `${el}(${x[i][k]};${y[i][k]})`).join(', ')} dans le repère $(${labelO},${labelI},${labelK})$.<br>`
          question += wrapperApigeomToMathalea(this.figuresApiGeom[i])
        }
      } else {
        question = `Placer les points ${this.labelsPoints[i].map((el, k) => `${el}(${x[i][k]};${y[i][k]})`).join(', ')} dans le repère $(${labelO},${labelI},${labelK})$.\\\\`
        question += this.figuresApiGeom[i].tikz()
      }
      let reponse = `Les points ${this.labelsPoints[i].map((el, k) => `${el}(${x[i][k]};${y[i][k]})`).join(', ')} dans le repère $(${labelO},${labelI},${labelK})$ :<br>`

      reponse += context.isHtml
        ? figureApigeom({ exercice: this, figure: figureCorrection, i, idAddendum: 'correction', isDynamic: false })
        : figureCorrection.tikz()
      if (this.questionJamaisPosee(i, ...x[i], ...y[i], ...coordsI, ...coordsK)) {
        this.listeQuestions.push(question)
        this.listeCorrections.push(reponse)
        i++
      }
    }
  }

  correctionInteractive = (i?: number) => {
    if (i === undefined) return ['KO']
    const result: ('OK'|'KO')[] = []
    const figure = this.figuresApiGeom[i]
    // Sauvegarde de la réponse pour Capytale
    if (this.answers === undefined) this.answers = {}
    this.answers[figure.id] = figure.json
    figure.isDynamic = false
    figure.divButtons.style.display = 'none'
    figure.divUserMessage.style.display = 'none'
    const divFeedback = document.querySelector(`#feedback${`Ex${this.numeroExercice}Q${i}`}`)
    for (let j = 0; j < this.labelsPoints[i].length; j++) {
      const label = this.labelsPoints[i][j]
      const { isValid, message, points } = figure.checkCoords({ checkOnlyAbscissa: false, label, x: this.X[i][j], y: this.Y[i][j] })
      const point = points[0]
      if (isValid) {
        result.push('OK')
        point.color = 'green'
        point.colorLabel = 'green'
        point.thickness = 3
      } else {
        result.push('KO')
        if (point !== undefined) {
          point.color = 'red'
          point.colorLabel = 'red'
          point.color = 'red'
          point.thickness = 3
        }
      }
      if (divFeedback != null && message.length > 0) {
        const p = document.createElement('p')
        p.innerText = message
        divFeedback.appendChild(p)
      }
    }
    if (divFeedback != null) {
      if (divFeedback?.innerHTML === '') {
        divFeedback.innerHTML = '😎'
      } else {
        const p = document.createElement('p')
        p.innerText = '☹️'
        divFeedback.insertBefore(p, divFeedback.firstChild)
      }
    }
    return result
  }
}

import Exercice from '../Exercice'
import { choice, shuffle } from '../../lib/outils/arrayOutils'
import { choisitLettresDifferentes } from '../../lib/outils/aleatoires'
import { context } from '../../modules/context'
import Figure from 'apigeom'
import figureApigeom from '../../lib/figureApigeom'
import type SuperFigure from 'apigeom'
import type Line from 'apigeom/src/elements/lines/Line'
import { createList } from '../../lib/format/lists'
import { wrapperApigeomToMathalea } from '../../lib/apigeom/apigeomZoom'
import { rangeMinMax } from '../../lib/outils/nombres'
import { point } from '../../lib/2d/points'
import { Polygone, polygone } from '../../lib/2d/polygones'
import { aireTriangle } from '../../lib/2d/triangle'
import type PointApiGeom from 'apigeom/src/elements/points/Point'

export const titre = 'Situer et nommer des points d\'intersections'
export const dateDePublication = '27/09/2024'
export const interactifReady = true
export const interactifType = 'custom'

export const uuid = '62453'
export const refs = {
  'fr-fr': ['6G1'],
  'fr-ch': []
}

/**
 * fonction pour verifier qu'on est dans le cadre
 * @param points
 */
function checkDistance (points: {x: number, y:number}[]) {
  for (const point of points) {
    if (point.y < -8 || point.y > 8 || point.x < -8 || point.x > 8) {
      return false
    }
  }
  return true
}

/**
 * Construction interactive de symétriques de points
 * @author Jean-Claude Lhote
 */
export default class PointsIntersectionDroites extends Exercice {
  antecedents!: object[][]
  labels!: string[][]
  exoCustomResultat: boolean
  figuresApiGeom!: SuperFigure[]
  listePoints: {intersection: PointApiGeom, droites: [Line, Line]}[][]
  constructor () {
    super()
    this.exoCustomResultat = true
    this.nbQuestions = 1
    this.spacingCorr = 1
    this.listePoints = []
  }

  nouvelleVersion () {
    const colors: string[] = context.isHtml ? ['red', 'green', 'purple', 'blue', 'gray', 'pink'] : ['gray', 'gray', 'gray', 'gray', 'gray', 'gray']
    const frenchColors = {
      red: 'rouge',
      green: 'verte',
      purple: 'violette',
      blue: 'bleue',
      gray: 'grise',
      pink: 'rose'
    }
    this.answers = {}
    this.listeQuestions = []
    this.listeCorrections = []
    this.autoCorrection = []
    this.figuresApiGeom = []
    this.listePoints = []
    const nbPoints = 4
    this.labels = Array.from({ length: this.nbQuestions }, () => [])
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 20;) {
      let enonce = ''
      let nuage: {x: number, y:number}[] = []
      // On construit les points
      const listeY: number[] = rangeMinMax(-2, 2).map(el => el * 2)
      let triangles: Polygone[]
      do {
        nuage = []
        for (let x = -6; x < 6; x += 3) {
          nuage.push({ x, y: choice(listeY, nuage.map(el => el.y)) })
        }
        nuage = shuffle(nuage)
        triangles = nuage.map(el => point(el.x, el.y)).map(el => {
          const troisAutresPoints = nuage.filter(val => !(Math.abs(val.x - el.x) < 0.1 && Math.abs(val.y - el.y) < 0.1)).map(val => point(val.x, val.y))
          return polygone(...troisAutresPoints)
        })
        nuage = nuage.slice(0, nbPoints)
      } while (!checkDistance(nuage) || triangles.some(el => Number(aireTriangle(el)) < 3))
      // Les antécédents sont des points nommés
      this.labels[i] = Array.from(choisitLettresDifferentes(15, 'Q', true))
      const options = {}
      this.figuresApiGeom[i] = new Figure(Object.assign(options, { xMin: -8, yMin: -8, width: 480, height: 480 }))
      this.figuresApiGeom[i].scale = 1
      this.figuresApiGeom[i].setToolbar({ tools: ['NAME_POINT', 'POINT_INTERSECTION', 'UNDO', 'REDO', 'REMOVE'], position: 'top' })
      const fig = this.figuresApiGeom[i]
      const pointsPossibles = shuffle(nuage).map(el => fig.create('Point', { x: el.x, y: el.y, isVisible: false, isSelectable: false }))
      const droites: Line[] = []
      let indiceDroite = 0
      for (let k = 0; k < nbPoints; k++) {
        for (let j = k + 1; j < nbPoints; j++) {
          droites.push(fig.create('Line', { point1: pointsPossibles[k], point2: pointsPossibles[j], color: colors[indiceDroite], label: `(d_${indiceDroite})` }))
          indiceDroite++
        }
      }
      const listeDeuxDroites: [Line, Line][] = [
        [droites[0], droites[1]],
        [droites[0], droites[2]],
        [droites[0], droites[3]],
        [droites[0], droites[4]],
        [droites[0], droites[5]],
        [droites[1], droites[2]],
        [droites[1], droites[3]],
        [droites[1], droites[4]],
        [droites[1], droites[5]],
        [droites[2], droites[3]],
        [droites[2], droites[4]],
        [droites[2], droites[5]],
        [droites[3], droites[4]],
        [droites[3], droites[5]],
        [droites[4], droites[5]]
      ]
      const allIntersections = listeDeuxDroites
        .map(droites => Object.assign({}, {
          intersection: fig.create('PointIntersectionLL', { line1: droites[0], line2: droites[1], isVisible: false, isSelectable: false }),
          deuxDroites: droites
        }))
      const intersectionsADistanceRespectables = allIntersections
        .filter(val => checkDistance([{ x: val.intersection.x, y: val.intersection.y }]))
        // On nettoie les intersections trop proches
      const intersections = shuffle(intersectionsADistanceRespectables
        .filter((val, k, tab) => {
          for (let j = 0; j < k; j++) {
            if (Math.abs(val.intersection.x - tab[j].intersection.x) < 0.5 && Math.abs(val.intersection.y - tab[j].intersection.y) < 0.5) return false
          }
          return true
        }))
      const lesTroisPoints = intersections.slice(0, 3)
      this.listePoints.push(...lesTroisPoints)
      enonce = 'Nommer  : '
      const listeQuestions = createList({
        items: lesTroisPoints.map((val, k) => {
          return `$${this.labels[i][k]}$, le point d'intersection de la droite ${frenchColors[val.deuxDroites[0].color as keyof typeof frenchColors]} et de la droite ${frenchColors[val.deuxDroites[1].color as keyof typeof frenchColors]}`
        }),
        style: 'alpha'

      })
      enonce += listeQuestions

      if (this.sup === 1) Object.assign(options, { snapGrid: true, dx: 1, dy: 1 })
      if (this.questionJamaisPosee(i, this.labels.join())) {
        if (context.isHtml) {
          if (this.interactif) {
            this.listeQuestions.push(enonce + '<br>' + figureApigeom({ exercice: this, figure: fig, i, isDynamic: true, defaultAction: 'NAME_POINT' }))
          } else {
            this.listeQuestions.push(enonce + '<br>' + wrapperApigeomToMathalea(this.figuresApiGeom[i]))
          }
        } else {
          this.listeQuestions.push(enonce + '<br><br>' + this.figuresApiGeom[i].tikz())
        }
        i++
      }
      cpt++
    }
  }

  correctionInteractive (i) {
    if (this.answers === undefined) this.answers = {}
    // Sauvegarde de la réponse pour Capytale
    this.answers[this.figuresApiGeom[i].id] = this.figuresApiGeom[i].json
    const divFeedback = document.querySelector(`#feedbackEx${this.numeroExercice}Q${i}`) as HTMLDivElement
    for (let k = 0; k < 3; k++) {
      const p = this.listePoints[i][k]
    }

    const fig = this.figuresApiGeom[i]
    const points = fig.getPoints()
    const droites = fig.getLines()
    const intersections = fig.getIntersections()
    const lesTroisPoints = intersections.slice(0, 3)
    const lesTroisPointsLabels = lesTroisPoints.map(val => val.label)
    const lesTroisPointsLabelsReponses = lesTroisPoints.map(val => val.label)
    const lesTroisPointsLabelsReponsesTriees = lesTroisPointsLabelsReponses.slice().sort()
    const lesTroisPointsLabelsTriees = lesTroisPointsLabels.slice().sort()
    const reponse = lesTroisPointsLabelsTriees.join('')
    const reponseAttendue = lesTroisPointsLabelsReponsesTriees.join('')
    this.listeCorrections.push(`Les points d'intersection sont : ${reponseAttendue}`)
    this.autoCorrection.push(reponse === reponseAttendue)
  }
}

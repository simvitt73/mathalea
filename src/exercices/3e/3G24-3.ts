import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { creerNomDePolygone } from '../../lib/outils/outilString'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { arrondi } from '../../lib/outils/nombres'
import Figure from 'apigeom'
import { context } from '../../modules/context'
import { stringNombre, texNombre } from '../../lib/outils/texNombre'
import { miseEnEvidence } from '../../lib/outils/embellissements'
export const titre = "Nom de l'exercice"

export const dateDePublication = '25/01/2026'
export const interactifReady = true
export const interactifType = 'mathLive'

export const uuid = '7b2cd'
export const refs = {
  'fr-fr': ['3G24-3'],
  'fr-ch': [],
}

/**
 *
 * @author Rémi Angot

*/
export default class ProblemeTrianglesSemblables extends Exercice {
  constructor() {
    super()
    this.sup = 1
    this.besoinFormulaireNumerique = ['Type de question', 1, '1 : Miroir']
  }

  nouvelleVersion() {
    let texte = ''
    let correction = ''
    let answer: number
    if (this.sup === 1) {
      // Miroir
      const [nomA, nomB, nomO, nomC, nomD] = creerNomDePolygone(5)
      const longueurCD = arrondi(1 + randint(5, 9) / 10)
      const k = arrondi(randint(3, 13) + randint(1, 9) / 10)
      const hauteurAB = arrondi(k * longueurCD)
      const longueurCO = randint(2, 5)
      const longueurAO = arrondi(longueurCO * k)
      texte = `Pour estimer la hauteur $${nomA}${nomB}$ d'un arbre, un géomètre se place de telle sorte qu'il puisse regarder en $${nomD}$ la cime de l'arbre dans un miroir posé en $${nomO}$.`
      texte += `<br>Il prend ensuite des mesures et réalise le schéma suivant.`
      
      correction = `$\\widehat{${nomB}${nomA}${nomO}} = \\widehat{${nomD}${nomC}${nomO}}$ et $\\widehat{${nomA}${nomO}${nomB}} = \\widehat{${nomC}${nomO}${nomD}}$ donc les triangles $${nomA}${nomB}${nomO}$ et $${nomC}${nomD}${nomO}$ sont semblables et ont des longueurs proportionnelles.`
      correction += `<br><br>$\\dfrac{${nomA}${nomB}}{${nomC}${nomD}} = \\dfrac{${nomA}${nomO}}{${nomC}${nomO}}$`
      correction += `<br><br>$\\dfrac{${nomA}${nomB}}{${texNombre(longueurCD)}} = \\dfrac{${texNombre(longueurAO)}}{${texNombre(longueurCO)}}$`
      correction += `<br><br> Finalement $${nomA}${nomB} = \\dfrac{${texNombre(longueurCD)} \\times ${texNombre(longueurAO)}}{${texNombre(longueurCO)}} = ${miseEnEvidence(texNombre(hauteurAB))}$ m.`
      const figure = new Figure({ xMin: -1, yMin: -2, width: 800, height: 280 })
      const ptA = figure.create('Point', {
        x: 0,
        y: 0,
        label: nomA,
        shape: '',
        labelDxInPixels: -10,
        labelDyInPixels: -20,
      })
      const ptB = figure.create('Point', {
        x: 0,
        y: 6,
        label: nomB,
        shape: '',
        labelDxInPixels: -10,
        labelDyInPixels: 10,
      })
      const ptC = figure.create('Point', {
        x: 8,
        y: 0,
        label: nomC,
        shape: '',
        labelDxInPixels: 10,
        labelDyInPixels: -20,
      })
      const ptD = figure.create('Point', {
        x: 8,
        y: 2,
        label: nomD,
        shape: '',
        labelDxInPixels: 10,
        labelDyInPixels: 10,
      })
      const ptO = figure.create('Point', {
        x: 6,
        y: 0,
        label: nomO,
        shape: '',
        labelDxInPixels: 0,
        labelDyInPixels: -20,
      })
      figure.create('Polygon', { points: [ptA, ptB, ptO] })
      figure.create('Polygon', { points: [ptC, ptD, ptO] })
      figure.create('TextByPosition', {
        x: 3,
        y: -1,
        text: `${stringNombre(longueurAO)} m`,
      })
      figure.create('TextByPosition', {
        x: 7,
        y: -1,
        text: `${stringNombre(longueurCO)} m`,
      })
      figure.create('TextByPosition', {
        x: 9,
        y: 1,
        text: `${stringNombre(longueurCD)} m`,
      })
      figure.create('MarkRightAngle', { point: ptA, directionPoint: ptO, quadrant: 1 })
      figure.create('MarkRightAngle', { point: ptC, directionPoint: ptO, quadrant: 0 })
      figure.create('ArcBy3PointsAndRadius', { start: ptA, end: ptB, radius: 1, center: ptO, codingMarks: 2, fillColor: 'green' })
      figure.create('ArcBy3PointsAndRadius', { start: ptC, end: ptD, radius: 1, center: ptO, codingMarks: 2, fillColor: 'green' })

      texte += context.isHtml ? figure.getStaticHtml() : figure.tikz()

      answer = hauteurAB
      texte += `<br>Déterminer la hauteur $${nomA}${nomB}$ de l'arbre${this.interactif ? '' : ' en justifiant votre réponse'}.`
      if (this.interactif) {
        texte += '<br><br>'
        texte += ajouteChampTexteMathLive(
          this,
          0,
          KeyboardType.clavierNumbers,
          { texteAvant: `$${nomA}${nomB} = $`, texteApres: 'm' },
        )
        handleAnswers(this, 0, { reponse: { value: answer } })
      }
    }
    this.listeQuestions[0] = texte
    this.listeCorrections[0] = correction
    listeQuestionsToContenu(this)
  }
}

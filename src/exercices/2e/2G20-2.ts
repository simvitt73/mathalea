import Exercice from '../Exercice'
import { context } from '../../modules/context'
import { choice } from '../../lib/outils/arrayOutils'
import { gestionnaireFormulaireTexte, listeQuestionsToContenu, randint } from '../../modules/outils'
import { point } from '../../lib/2d/points'
import Figure from 'apigeom'
import figureApigeom from '../../lib/figureApigeom'
import { lettreDepuisChiffre } from '../../lib/outils/outilString'
// import { texteEnCouleurEtGras } from '../../lib/outils/embellissements'
import type VectorByPoints from 'apigeom/src/elements/vector/VectorByPoints'
import type Point from 'apigeom/src/elements/points/Point'
// import type checkPoint from 'apigeom/src/check/checkPoint'

export const titre = 'Construire des vecteurs égaux/opposés/colinéaires'
export const interactifReady = true
export const interactifType = 'custom'

export const dateDePublication = '03/04/2025'

/** Construire des vecteurs égaux/opposés/colinéaires.
 * @author  Stéphan Grignon
 * stephan.grignon@ac-strasbourg.fr
 */

export const uuid = '0eb24'
export const refs = {
  'fr-fr': ['2G20-2'],
  'fr-ch': []
}

export default class ConstruireVecteurs extends Exercice {
  figures: Figure[]
  xOrep: number[]
  xErep: number[]
  yOrep: number[]
  yErep: number[]
  xPt: number[]
  yPt: number[]
  labelPt: string[]

  constructor () {
    super()
    this.nbQuestions = 1

    this.sup = 4
    this.besoinFormulaireTexte = [
      'Type de questions', [
        'Nombres séparés par des tirets  :',
        '1 : Vecteurs égaux',
        '2 : Vecteurs opposés',
        '3 : Vecteurs colinéaires',
        '4 : Mélange'
      ].join('\n')
    ]
    this.sup2 = 1
    this.besoinFormulaire2Texte = [
      'Situations différentes', [
        '1 : Avec un point origine',
        '2 : Avec un point extrémité',
        '3 : Mélange'
      ].join('\n')
    ]
    this.figures = []
    this.xOrep = []
    this.xErep = []
    this.yOrep = []
    this.yErep = []
    this.xPt = []
    this.yPt = []
    this.labelPt = []
  }

  nouvelleVersion () {
    this.figures = []
    this.xOrep = []
    this.xErep = []
    this.yOrep = []
    this.yErep = []
    this.xPt = []
    this.yPt = []
    this.labelPt = []
    const listeTypeDeQuestions = gestionnaireFormulaireTexte({
      saisie: this.sup,
      min: 1,
      max: 3,
      melange: 4,
      defaut: 4,
      listeOfCase: ['egaux', 'opposes', 'colineaires'],
      shuffle: true,
      nbQuestions: this.nbQuestions
    })
    const choixSituation = gestionnaireFormulaireTexte({
      saisie: this.sup2,
      min: 1,
      max: 2,
      melange: 3,
      defaut: 1,
      listeOfCase: ['ptOrigine', 'ptExtremite'],
      shuffle: true,
      nbQuestions: this.nbQuestions
    })

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      const texteCorr = ''

      let k1 = randint(-6, 6)
      let k2
      if (k1 === 0) { k2 = randint(2, 6) * choice([-1, 1]) } else { k2 = randint(-6, 6) }
      if (k2 === 0) { k1 = randint(3, 6) * choice([-1, 1]) } else { k1 = randint(-6, 6) }
      while (Math.abs(k1) === 1 && Math.abs(k1) === Math.abs(k2)) {
        k2 = randint(2, 6) * choice([-1, 1])
      }
      const A = point(0, 0) // pt origine vecteur de base
      const B = point(A.x + k1, A.y + k2) // pt extrémité vecteur de base

      let xC = 0
      let yC = 0
      let d = Math.abs(k2 * xC - k1 * yC) / Math.sqrt(k1 ** 2 + k2 ** 2)
      while (d < 2 || d > 3) { // vecteurs colinaires : distance des directions entre 2 et 3
        xC = randint(-3, 3)
        yC = randint(-3, 3)
        d = Math.abs(k2 * xC - k1 * yC) / Math.sqrt(k1 ** 2 + k2 ** 2)
      }

      const C = point(xC, yC) // pt origine second vecteur
      const D = point(xC + k1, yC + k2) // pt extrémité vecteur égal
      const E = point(xC - k1, yC - k2) // pt extrémité vecteur opposé

      let k3
      if (k1 % 2 !== 0 || k2 % 2 !== 0) k3 = choice([-2, 2]) // On s'assure que F a des coordonnées entières
      // if (k1 % 2 !== 0 || k2 % 2 !== 0) k3 = choice([1, 2]) * choice([-1, 1])
      else k3 = choice([0.5, 1.5, 2.5]) * choice([-1, 1])
      const F = point(xC + k1 * k3, yC + k2 * k3) // pt extrémité vecteur colinéaire
      const absK3 = Math.abs(k3) // valeur absolue pour l'affichage éventuel
      const showCoeff = absK3 !== 1 // on n'affiche le coefficient que s'il n'est pas 1
      const coeffString = showCoeff ? absK3.toLocaleString('fr-FR') : ''
      const sign = k3 < 0 ? '-' : ''

      // Choix aléatoire des noms de points, tous différents
      const numeroPoint1 = randint(1, 26)
      const nomPoint1 = lettreDepuisChiffre(numeroPoint1)
      const numeroPoint2 = randint(1, 26, [numeroPoint1])
      const nomPoint2 = lettreDepuisChiffre(numeroPoint2)
      const numeroPoint3 = randint(1, 26, [numeroPoint1, numeroPoint2])
      const nomPoint3 = lettreDepuisChiffre(numeroPoint3)
      const numeroPoint4 = randint(1, 26, [numeroPoint1, numeroPoint2, numeroPoint3])
      const nomPoint4 = lettreDepuisChiffre(numeroPoint4)
      const numeroPoint5 = randint(1, 26, [numeroPoint1, numeroPoint2, numeroPoint3, numeroPoint4])
      const nomPoint5 = lettreDepuisChiffre(numeroPoint5)
      const numeroPoint6 = randint(1, 26, [numeroPoint1, numeroPoint2, numeroPoint3, numeroPoint4, numeroPoint5])
      const nomPoint6 = lettreDepuisChiffre(numeroPoint6)

      // grille dépassant les vecteurs de deux unité
      const xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 2)
      const ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 2)
      const xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 2)
      const ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 2)

      const figure = new Figure({
        xMin: xmin - 0.1,
        yMin: ymin - 0.1,
        width: 0.65 * ((xmax - xmin) * 30 + 20), // On ajoute 20 pixels
        height: 0.65 * ((ymax - ymin) * 30 + 20),
        border: false,
        scale: 0.65
      })
      this.figures[i] = figure

      figure.create('Grid', {
        strokeWidthGrid: 0.7,
        yMin: ymin,
        yMax: ymax,
        xMin: xmin,
        xMax: xmax,
        stepX: 1,
        stepY: 1,
        color: 'gray',
        axeX: false,
        axeY: false,
        labelX: false,
        labelY: false,
        repereOij: false
      })
      figure.snapGrid = true
      figure.options.thickness = 3
      figure.setToolbar({
        tools: ['DRAG', 'REMOVE', 'VECTOR', 'POINT', 'SET_OPTIONS'], position: 'top'
      })

      const ptA = figure.create('Point', {
        x: A.x,
        y: A.y,
        label: nomPoint1,
        // color: 'grey',
        isFree: false,
        isSelectable: false
      })
      const ptB = figure.create('Point', {
        x: B.x,
        y: B.y,
        label: nomPoint2,
        // color: 'grey',
        isFree: false,
        isSelectable: false
      })
      figure.create('VectorByPoints', {
        point1: ptA,
        point2: ptB,
        color: 'red',
        thickness: 3,
        isSelectable: false
      })

      const m = (B.y - A.y) / (B.x - A.x)
      let ancre: 'middleLeft' | 'middleRight' | 'topLeft' | 'topRight' | 'topCenter' | 'bottomCenter' | 'bottomLeft' | 'bottomRight' | 'unknown' = 'unknown'
      const det = (B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x)
      if (A.y < B.y) {
        if (m > 0 && det > 0) {
          ancre = 'topLeft'
        } else if (m > 0 && det < 0) {
          ancre = 'bottomRight'
        } else if (m < 0 && det > 0) {
          ancre = 'bottomLeft'
        } else if (m < 0 && det < 0) {
          ancre = 'topRight'
        } else if (A.x === B.x && det < 0) {
          ancre = 'middleRight'
        } else if (A.x === B.x && det > 0) {
          ancre = 'middleLeft'
        } else {
          ancre = 'unknown' // fallback, au cas où
        }
      } else if (A.y > B.y) {
        if (m > 0 && det > 0) {
          ancre = 'bottomRight'
        } else if (m > 0 && det < 0) {
          ancre = 'topLeft'
        } else if (m < 0 && det > 0) {
          ancre = 'topRight'
        } else if (m < 0 && det < 0) {
          ancre = 'bottomLeft'
        } else if (A.x === B.x && det < 0) {
          ancre = 'middleLeft'
        } else if (A.x === B.x && det > 0) {
          ancre = 'middleRight'
        } else {
          ancre = 'unknown' // fallback, au cas où
        }
      } else if (A.y === B.y) {
        if (A.x > B.x && det < 0) {
          ancre = 'topCenter'
        } else if (A.x > B.x && det > 0) {
          ancre = 'bottomCenter'
        } else if (A.x < B.x && det < 0) {
          ancre = 'bottomCenter'
        } else if (A.x < B.x && det > 0) {
          ancre = 'topCenter'
        } else {
          ancre = 'unknown' // fallback, au cas où
        }
      }
      if (ancre === 'unknown') {
        console.warn('anchor inconnu', A, B, C)
      } else {
        figure.create('TextByPosition', {
          text: `$\\overrightarrow{${nomPoint1}${nomPoint2}}$`,
          x: (A.x + B.x) / 2,
          y: (A.y + B.y) / 2,
          anchor: ancre,
          color: 'red',
        })
      }

      this.xOrep[i] = xC
      this.yOrep[i] = yC

      switch (listeTypeDeQuestions[i]) {
        case 'egaux': // Vecteurs égaux

          this.xErep[i] = D.x
          this.yErep[i] = D.y

          switch (choixSituation[i]) {
            case 'ptOrigine': // Avec un point origine
              texte = `Placer le point $${nomPoint4}$, puis tracer le vecteur $\\overrightarrow{${nomPoint3}${nomPoint4}}$ tel que $\\overrightarrow{${nomPoint3}${nomPoint4}} = \\overrightarrow{${nomPoint1}${nomPoint2}}$.`

              this.xPt[i] = D.x
              this.yPt[i] = D.y
              this.labelPt[i] = nomPoint4

              figure.create('Point', {
                x: xC,
                y: yC,
                label: nomPoint3,
                isFree: false,
                isSelectable: false
              })
              figure.options.color = 'blue'
              figure.options.labelAutomaticBeginsWith = nomPoint4

              if (context.isHtml && this.interactif) {
                texte += figureApigeom({
                  exercice: this,
                  figure: this.figures[i],
                  i,
                  defaultAction: 'POINT'
                })
              } else if (context.isHtml) {
                texte += '<br>' + figure.getStaticHtml()
              } else {
                texte += '<br>' + figure.tikz({
                  yMin: ymin,
                  yMax: ymax,
                  xMin: xmin,
                  xMax: xmax
                })
              }
              break
            case 'ptExtremite': // Avec un point extrémité
            default:
              texte = `Placer le point $${nomPoint3}$, puis tracer le vecteur $\\overrightarrow{${nomPoint3}${nomPoint4}}$ tel que $\\overrightarrow{${nomPoint3}${nomPoint4}} = \\overrightarrow{${nomPoint1}${nomPoint2}}$.`
              // texte += this.interactif ? `<br> Le point $${nomPoint3}$ et le vecteur $\\overrightarrow{${nomPoint3}${nomPoint4}}$ doivent être ${texteEnCouleurEtGras('en bleu', 'blue')}.` : ''

              this.xPt[i] = xC
              this.yPt[i] = yC
              this.labelPt[i] = nomPoint3

              this.figures[i].create('Point', {
                x: D.x,
                y: D.y,
                label: nomPoint4,
                isFree: false,
                isSelectable: false
              })
              this.figures[i].options.color = 'blue'
              this.figures[i].options.labelAutomaticBeginsWith = nomPoint3

              texte += figureApigeom({
                exercice: this,
                figure: this.figures[i],
                i,
                defaultAction: 'POINT'
              })
              break
          }
          break

        case 'opposes': // Vecteurs opposés

          this.xErep[i] = E.x
          this.yErep[i] = E.y

          switch (choixSituation[i]) {
            case 'ptOrigine': // Avec un point origine
              texte = `Placer le point $${nomPoint5}$, puis tracer le vecteur $\\overrightarrow{${nomPoint3}${nomPoint5}}$ tel que $\\overrightarrow{${nomPoint3}${nomPoint5}} = -\\overrightarrow{${nomPoint1}${nomPoint2}}$.`
              // texte += this.interactif ? `<br> Le point $${nomPoint5}$ et le vecteur $\\overrightarrow{${nomPoint3}${nomPoint5}}$ doivent être ${texteEnCouleurEtGras('en bleu', 'blue')}.` : ''

              this.xPt[i] = E.x
              this.yPt[i] = E.y
              this.labelPt[i] = nomPoint5

              this.figures[i].create('Point', {
                x: xC,
                y: yC,
                label: nomPoint3,
                isFree: false,
                isSelectable: false
              })
              this.figures[i].options.color = 'blue'
              this.figures[i].options.labelAutomaticBeginsWith = nomPoint5

              texte += figureApigeom({
                exercice: this,
                figure: this.figures[i],
                i,
                defaultAction: 'POINT'
              })
              break
            case 'ptExtremite': // Avec un point extrémité
            default:
              texte = `Placer le point $${nomPoint3}$, puis tracer le vecteur $\\overrightarrow{${nomPoint3}${nomPoint5}}$ tel que $\\overrightarrow{${nomPoint3}${nomPoint5}} = -\\overrightarrow{${nomPoint1}${nomPoint2}}$.`
              // texte += this.interactif ? `<br> Le point $${nomPoint3}$ et le vecteur $\\overrightarrow{${nomPoint3}${nomPoint5}}$ doivent être ${texteEnCouleurEtGras('en bleu', 'blue')}.` : ''

              this.xPt[i] = xC
              this.yPt[i] = yC
              this.labelPt[i] = nomPoint3

              this.figures[i].create('Point', {
                x: E.x,
                y: E.y,
                label: nomPoint5,
                isFree: false,
                isSelectable: false
              })
              this.figures[i].options.color = 'blue'
              this.figures[i].options.labelAutomaticBeginsWith = nomPoint3

              texte += figureApigeom({
                exercice: this,
                figure: this.figures[i],
                i,
                defaultAction: 'POINT'
              })
              break
          }
          break

        case 'colineaires': // Vecteurs colinéaires
        default:

          this.xErep[i] = F.x
          this.yErep[i] = F.y

          switch (choixSituation[i]) {
            case 'ptOrigine': // Avec un point origine
              texte = `Placer le point $${nomPoint6}$, puis tracer le vecteur $\\overrightarrow{${nomPoint3}${nomPoint6}}$ tel que $\\overrightarrow{${nomPoint3}${nomPoint6}} = ${sign}${coeffString}\\overrightarrow{${nomPoint1}${nomPoint2}}$.`
              // texte += this.interactif ? `<br> Le point $${nomPoint6}$ et le vecteur $\\overrightarrow{${nomPoint3}${nomPoint6}}$ doivent être ${texteEnCouleurEtGras('en bleu', 'blue')}.` : ''

              this.xPt[i] = F.x
              this.yPt[i] = F.y
              this.labelPt[i] = nomPoint6

              this.figures[i].create('Point', {
                x: xC,
                y: yC,
                label: nomPoint3,
                isFree: false,
                isSelectable: false
              })
              this.figures[i].options.color = 'blue'
              this.figures[i].options.labelAutomaticBeginsWith = nomPoint6

              texte += figureApigeom({
                exercice: this,
                figure: this.figures[i],
                i,
                defaultAction: 'POINT'
              })
              break
            case 'ptExtremite': // Avec un point extrémité
            default:
              texte = `Placer le point $${nomPoint3}$, puis tracer le vecteur $\\overrightarrow{${nomPoint3}${nomPoint6}}$ tel que $\\overrightarrow{${nomPoint3}${nomPoint6}} = ${sign}${coeffString}\\overrightarrow{${nomPoint1}${nomPoint2}}$.`
              // texte += this.interactif ? `<br> Le point $${nomPoint3}$ et le vecteur $\\overrightarrow{${nomPoint3}${nomPoint6}}$ doivent être ${texteEnCouleurEtGras('en bleu', 'blue')}.` : ''

              this.xPt[i] = xC
              this.yPt[i] = yC
              this.labelPt[i] = nomPoint3

              this.figures[i].create('Point', {
                x: F.x,
                y: F.y,
                label: nomPoint6,
                isFree: false,
                isSelectable: false
              })
              this.figures[i].options.color = 'blue'
              this.figures[i].options.labelAutomaticBeginsWith = nomPoint3

              texte += figureApigeom({
                exercice: this,
                figure: this.figures[i],
                i,
                defaultAction: 'POINT'
              })
              break
          }
          break
      }
      if (this.questionJamaisPosee(i, this.xOrep[i], this.xErep[i], this.yOrep[i], this.yErep[i], this.xPt[i], this.yPt[i], this.labelPt[i])) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }

  correctionInteractive = (i: number) => {
    if (this.answers == null) this.answers = {}
    // Sauvegarde de la réponse pour Capytale
    this.answers[this.figures[i].id] = this.figures[i].json
    const divFeedback = document.querySelector(
            `#feedbackEx${this.numeroExercice}Q${i}`
    ) as HTMLDivElement

    this.figures[i].isDynamic = false
    this.figures[i].divButtons.style.display = 'none'
    this.figures[i].divUserMessage.style.display = 'none'

    let { isValid, vectors } = this.figures[i].checkVector({
      color: 'blue',
      xOrigin: this.xOrep[i],
      x: this.xErep[i] - this.xOrep[i],
      yOrigin: this.yOrep[i],
      y: this.yErep[i] - this.yOrep[i]
    })
    const points = this.figures[i].checkPoint({
      label: this.labelPt[i],
      x: this.xPt[i],
      y: this.yPt[i],
      color: 'blue'
    })

    const noLabel = this.figures[i].checkPoint({
      label: '',
      x: this.xPt[i],
      y: this.yPt[i]
    })

    alert(noLabel.isValid)

    const nbVecteurs = [...this.figures[i].elements.values()].filter(
      (e) => e.type === 'VectorByPoints' && (e as VectorByPoints).color === 'blue'
    ).length

    const nbPoints = [...this.figures[i].elements.values()].filter(
      (e) => e.type === 'Point' && (e as Point).isVisible && !e.isChild
    ).length

    isValid &&= (nbVecteurs === 1 && nbPoints === 5)

    if (isValid && points.isValid) {
      divFeedback.innerHTML = '😎 Bravo !'
      if (vectors[0] !== undefined) {
        vectors[0].color = 'blue'
      }
      return 'OK'
    }

    const wrongVectors = [...this.figures[i].elements.values()].filter(
      (e) => e.type === 'VectorByPoints' && (e as VectorByPoints).isSelectable
    ) as VectorByPoints[]
    for (const vector of wrongVectors) {
      vector.color = 'red'
    }
    const wrongPoints = [...this.figures[i].elements.values()].filter(
      (e) => e.type === 'Point' && (e as Point).isSelectable
    ) as Point[]
    for (const points of wrongPoints) {
      points.color = 'red'
    }

    let message
    if (nbVecteurs === 0 || nbPoints === 3 || (nbVecteurs === 1 && nbPoints === 5 && noLabel.isValid)) {
      message = "Il manque au moins l'un des éléments demandé."
    } else if ((nbVecteurs > 1 || nbPoints > 5) && !(nbVecteurs === 1 && nbPoints === 6)) {
      message = "Trop d'éléments ont été tracés."
    } else if (nbVecteurs === 1 && nbPoints === 5 && !points.isValid && !noLabel.isValid) {
      message = "Au moins un élément n'est pas n'est pas conforme à ce qui est attendu."
    } else {
      message = "Au moins un élément n'est pas n'est pas conforme à ce qui est attendu."
    }
    divFeedback.innerHTML = message
    return 'KO'
  }
}

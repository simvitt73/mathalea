import Exercice from '../Exercice'
import { THREE } from '../../lib/3d/solidesThreeJs'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { choice, combinaisonListes, shuffle } from '../../lib/outils/arrayOutils'
import { cubesObj, fauxCubesObj, type objetFace } from './_listePatrons'
import { BoiteBuilder, Polygone } from '../../lib/2d/polygones'

import { mathalea2d } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { setCliqueFigure } from '../../lib/interactif/gestionInteractif'
import { SceneViewer } from '../../lib/3d/SceneViewer'
import { Latex2d, LatexParCoordonnees, TexteParPoint } from '../../lib/2d/textes'
export const amcReady = true
export const amcType = 'qcmMono'
export const interactifReady = true
export const interactifType = 'cliqueFigure'

export const titre = 'Choisir le patron de cube'
export const dateDePublication = '18/07/2025'

export const uuid = 'f57fe'
export const refs = {
  'fr-fr': ['6G45'],
  'fr-ch': []
}
/**
 * Choisir le bon patron parmi ceux proposés
 * @author Olivier Mimeau
*/
export default class choixPatron extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    // pour plus tard cubes Paves ...
    // this.besoinFormulaireNumerique = ['Type de questions', 3, '1 : patrons de cubes\n 2 : patrons de pavés droits']

    this.besoinFormulaire2CaseACocher = ['3d dynamique', true]
    this.sup2 = true
  }

  nouvelleVersion () {
    const sceneBuildersCorrection: { viewer: SceneViewer, tree: FaceNode }[] = []
    const stopBlinkers: (() => void)[] = []
    this.figures = [[], [], [], []]
    this.consigne = 'Parmi les dessins suivants, lequel est un patron de cube ? <br>'// 'Consigne'
    this.consigne += (this.interactif) ? 'Cliquer sur' : context.vue !== 'diap' && !context.isAmc ? 'Entourer' : 'Choisir' /// Penser ici à AMC aussi.
    this.consigne += ' la bonne figure.'
    // context.pixelsParCm = 10
    // xmin: -1, xmax: 6, ymin: -1, scale: 0.4
    const zoom = 0.4 // scale: 0.4
    const zoomAMC = 0.3 // si 0.4 c'est trop proche de la taille de la case à cocher
    const xymin = -0.5
    const xymax = 6.5
    const typeQuestionsDisponibles = ['type1']// 'type2',, 'type3']
    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    const listeTypeVraiPatrons = combinaisonListes(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], this.nbQuestions)
    const listeVraisPatrons: UnPatron[] = initListePatrons(cubesObj)
    const listeFauxPatrons: UnPatron[] = initListePatrons(fauxCubesObj)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      let texteCorr = ''
      this.figures[i] = [{ id: `cliquefigure0Ex${this.numeroExercice}Q${i}`, solution: true },
        { id: `cliquefigure1Ex${this.numeroExercice}Q${i}`, solution: false },
        { id: `cliquefigure2Ex${this.numeroExercice}Q${i}`, solution: false },
        { id: `cliquefigure3Ex${this.numeroExercice}Q${i}`, solution: false }
      ]
      switch (listeTypeQuestions[i]) {
        case 'type1':{
          texte = ''// `Question ${i + 1} de type 1<br>`
          // texte += `listeVraisPatrons :  ${listeVraisPatrons.length} <br>`
          const patron1 = listeVraisPatrons[Number(listeTypeVraiPatrons[i]) - 1]
          const dessin1 = patron1.dessineMatrice()
          /* texte += mathalea2d(Object.assign({
            scale: 0.5,
            zoom
          }, fixeBordures(dessin1)), dessin1) */
          const numPatron2 = randint(0, listeVraisPatrons.length - 1)
          const patron2 = listeFauxPatrons[randint(0, numPatron2)]
          const dessin2 = patron2.dessineMatrice()

          const patron3 = listeFauxPatrons[randint(0, listeFauxPatrons.length - 1, numPatron2)]
          // texte += `Patron3 :  ${patron3.ecritMatrice()} <br>`
          const dessin3 = patron3.dessineMatrice()

          const taille = choice([5, 7])
          const patron4 = faitUnPatronAuPif(taille)
          // texte += `Patron4 :  ${patron4.ecritMatrice()} <br>`
          const dessin4 = patron4.dessineMatrice()

          const figPatronOk = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, dessin1)
          const figPatronFaux1 = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure1Ex${this.numeroExercice}Q${i}` }, dessin2)
          const figPatronFaux2 = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure2Ex${this.numeroExercice}Q${i}` }, dessin3)
          const figPatronFaux3 = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure3Ex${this.numeroExercice}Q${i}` }, dessin4)
          const figPatronOkAMC = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoomAMC, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, dessin1)
          const figPatronFaux1AMC = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoomAMC, id: `cliquefigure1Ex${this.numeroExercice}Q${i}` }, dessin2)
          const figPatronFaux2AMC = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoomAMC, id: `cliquefigure2Ex${this.numeroExercice}Q${i}` }, dessin3)
          const figPatronFaux3AMC = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoomAMC, id: `cliquefigure3Ex${this.numeroExercice}Q${i}` }, dessin4)
          const figCorr = dessin1

          this.autoCorrection[i] = {}
          // setCliqueFigure({})
          setCliqueFigure(this.autoCorrection[i])
          this.autoCorrection[i].enonce = this.consigne + texte
          this.autoCorrection[i].propositions = [
            {
              texte: figPatronOkAMC,
              statut: true
            },
            {
              texte: figPatronFaux1AMC,
              statut: false
            },
            {
              texte: figPatronFaux2AMC,
              statut: false
            },
            {
              texte: figPatronFaux3AMC,
              statut: false
            }
          ]
          this.autoCorrection[i].options = {
            ordered: false,
            lastChoice: 4
          }

          // const figures = [figPatronOk, figPatronFaux1, figPatronFaux2, figPatronFaux3]
          const figures = shuffle([figPatronOk, figPatronFaux1, figPatronFaux2, figPatronFaux3])
          if (!context.isAmc) {
            texte += figures.join('')
            if (this.interactif && context.isHtml) {
              texte += `<span id="resultatCheckEx${this.numeroExercice}Q${i}"></span>`
            }
            texteCorr = ''// 'Le dessin n°1 donnera un cube' // `Correction ${i + 1} de type 1`
            texteCorr += mathalea2d({ style: '', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `figure0Ex${this.numeroExercice}Q${i}` }, figCorr)
            texteCorr += context.isHtml && this.sup2
              ? `<div id="emplacementPourSceneViewerEx${this.numeroExercice}Q${i}Correction" style="width: 400px; height: 400px;"></div>`
              : mathalea2d({ style: '', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `figure0Ex${this.numeroExercice}Q${i}` }, figCorr)
            /* if (context.isHtml && this.sup2) {
              sceneBuildersCorrection[i] = this.affichePatron3D(choice([patron1, patron2, patron3, patron4]).matrice)
            } */
          }
        }
          break
        case 'type2':
          texte = `Question ${i + 1} de type 2`

          texteCorr = `Correction ${i + 1} de type 2`
          break
        case 'type3':
          texte = `Question ${i + 1} de type 3`
          texteCorr = `Correction ${i + 1} de type 3`
          break
      }
      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr ?? ''
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
    if (sceneBuildersCorrection.length > 0) {
      document.addEventListener('correctionsAffichees', () => {
        for (let i = 0; i < sceneBuildersCorrection.length; i++) {
          const blinkColors = [
            '#ff0000', // rouge vif
            '#00ff00', // vert fluo
            '#0000ff', // bleu électrique
            '#ffff00', // jaune pétant
            '#ff00ff', // magenta
            '#00ffff', // cyan
            '#ff8800', // orange vif
            '#ff0080', // rose flashy
            '#00ff88', // vert menthe
            '#8800ff'  // violet flashy
          ]
          const emplacementCorrection = document.getElementById(`emplacementPourSceneViewerEx${this.numeroExercice}Q${i}Correction`)
          if (emplacementCorrection) {
            sceneBuildersCorrection[i].viewer.showSceneAt(emplacementCorrection)
            sceneBuildersCorrection[i].viewer.addHtmlButton({
              id: `btnPlierEx${this.numeroExercice}Q${i}`,
              text: 'Plier',
              onClick: () => {
                animePliage(sceneBuildersCorrection[i].tree, this.numeroExercice, i, () => {
                  const scene = document.querySelector('a-scene')
                  if (scene) {
                    scene.dispatchEvent(new CustomEvent('pliageTermine', {
                      detail: { numExercice: this.numeroExercice, numQuestion: i }
                    }))
                  }
                })
              }
            })
            sceneBuildersCorrection[i].viewer.addHtmlButton({
              id: `btnDeplierEx${this.numeroExercice}Q${i}`,
              text: 'Déplier',
              style: { left: '120px' },
              onClick: () => animeDepliage(
                sceneBuildersCorrection[i].tree,
                this.numeroExercice,
                i,
                () => { stopBlinkers.forEach(stop => stop()) },
                4000
              )
            })
            const scene = emplacementCorrection.querySelector('a-scene')
            if (scene) {
              scene.addEventListener('pliageTermine', () => {
                const boxes = Array.from(emplacementCorrection.querySelectorAll('a-box'))
                for (let i = 0; i < boxes.length; i++) {
                  for (let j = i + 1; j < boxes.length; j++) {
                    const boxA = boxes[i]
                    const boxB = boxes[j]
                    const a = boxA.object3D
                    const b = boxB.object3D
                    const boxA3 = new THREE.Box3().setFromObject(a)
                    const boxB3 = new THREE.Box3().setFromObject(b)
                    const intersection = boxA3.clone().intersect(boxB3)
                    const size = new THREE.Vector3()
                    intersection.getSize(size)
                    const volume = size.x * size.y * size.z
                    if (volume > 0.005) {
                      stopBlinkers.push(blinkABox(boxA, blinkColors[i % blinkColors.length]))
                      stopBlinkers.push(blinkABox(boxB, blinkColors[i % blinkColors.length]))
                    }
                  }
                }
              })
            }
          }
        }
      }, { once: true })
    }
  }

  affichePatron3D (matrice: objetFace[][], idPrefix = 'patron3d'): { viewer: SceneViewer, tree: FaceNode } {
    const pivot = findPivot(matrice)
    const viewer = new SceneViewer({ width: 400, height: 400, id: idPrefix, rigPosition: [pivot.x, 1, pivot.y], detectCollision: true })
    const taille = 1.5
    const tree = buildFaceTree(matrice, pivot.x, pivot.y)
    const facePositions = getAbsolutePositions(tree, taille, [pivot.x, 0, pivot.y], new Map<string, [number, number, number]>())
    const pivotsPositions = getPivotPositions(tree, taille, facePositions, new Map<string, [number, number, number]>())

    addFaceRecursive(viewer, tree, taille, facePositions, pivotsPositions)

    viewer.addAmbientLight({ color: '#ffffff', intensity: 0.6 })
    viewer.addDirectionnalLight({ position: [2, 5, 2], color: '#ffffff', intensity: 0.8 })
    // Retourne aussi l'arbre pour l'animation
    return { viewer, tree }
  }
}
const tailleCarre = 1

// const initMatrice = (largeur: number, longueur: number, digit:number = 0, face:boolean = false): objetFace[][] =>
//  Array.from({ length: longueur }, () => Array(largeur).fill({ numero: digit, isFace: face }))

function initListePatrons (listeMatrices:(objetFace[][])[]): UnPatron[] {
  const listePatrons: UnPatron[] = []
  for (const uneMatrice of listeMatrices) {
    const patron = new UnPatron(uneMatrice[0].length, uneMatrice.length)
    // patron.initMatrice(uneMatrice[0].length, uneMatrice.length, 0)
    patron.matrice = uneMatrice.map(ligne => [...ligne]) // copie de la matrice
    listePatrons.push(patron)
  }
  return listePatrons
}

function faitUnPatronAuPif (taille:number): UnPatron {
  const tempcouples:SerieCouples = new SerieCouples()
  tempcouples.faitUnPatron(taille)
  tempcouples.faitUnPatronMatrice()
  return tempcouples.matrice
}

class UnPatron {
  matrice: objetFace[][] = []
  constructor (
    largeur: number,
    longueur: number, digit: number = 0, face:boolean = false
  ) {
    for (let l = 0; l < longueur; l++) {
      this.matrice[l] = []
      for (let k = 0; k < largeur; k++) {
        this.matrice[l][k] = { numero: digit, isFace: face }// l * largeur + k // digit
      }
    }
  }

  get larg (): number {
    return this.matrice.reduce((max, row) => Math.max(max, row.length), 0)
  }

  get long (): number {
    return this.matrice.length
  }

  /* initMatrice = (largeur: number, longueur: number, digit:number = 0, face:boolean = false): objetFace[][] =>
    Array.from({ length: longueur }, () => Array(largeur).fill({ numero: digit, isFace: face })) */

  initMatrice (largeur: number, longueur: number, digit:number = 0, face:boolean = false):void {
    for (let l = 0; l < longueur; l++) {
      this.matrice[l] = []
      for (let k = 0; k < largeur; k++) {
        this.matrice[l][k] = { numero: digit, isFace: face }
      }
    }
  }

  setcell (x:number, y:number, value:number, face:boolean): void {
    if (y < this.long && x < this.larg) {
      this.matrice[y][x] = { numero: value, isFace: face }
    }
  }

  dimensions (): [number, number] {
    return [this.larg, this.long]
  }

  ecritMatrice (): string {
    let texte = '[<br>' // numbers.length
    // bollean vers valeurs 0,1
    const valeursBooleennes = this.matrice.map(row =>
      row.map(element => element.isFace ? 1 : 0)
    )
    //
    texte += valeursBooleennes
      .map(row => `[${row.join(', ')}]`)
      .join(',<br>')
    texte += ']<br>'
    return texte

    /*  const Longueur = this.matrice.length
    for (let l = 0; l < Longueur; l++) {
      texte += `[${this.matrice[l].join(', ')}]<br>`
    }
    const lastIndex = texte.lastIndexOf('<br>')
    texte = texte.substring(0, lastIndex) + ']' + texte.substring(lastIndex + 4)

    return texte */
  }

  dessineMatrice (): any[] {
    const [largeur, longueur] = [this.larg, this.long]
    const patronTemp = new UnPatron(largeur, longueur)
    patronTemp.matrice = this.matrice.map(ligne => [...ligne]) // copie de la matrice
    let transfo = choice([1, 2, 3, 3, 0])
    switch (transfo) {
      case 1:
        patronTemp.symetrieMatriceH()
        break
      case 2:
        patronTemp.symetrieMatriceV()
        break
      case 3:
        patronTemp.symetrieMatriceD()
        break
      default:
        // ne fait rien
        break
    }
    transfo = choice([1, 1, 2, 3, 3, 3, 3, 0])
    switch (transfo) {
      case 1:
        patronTemp.rotationMatrice90p()
        break
      case 2:
        patronTemp.rotationMatrice90n()
        break
      case 3:
        patronTemp.rotationMatrice180()
        break
      default:
        // ne fait rien
        break
    }
    const leDessin :(Polygone | (Latex2d | LatexParCoordonnees | TexteParPoint | Polygone)[])[] = []
    for (let i = 0; i < patronTemp.long; i++) {
      for (let j = 0; j < patronTemp.larg; j++) {
        if (patronTemp.matrice[i][j].isFace) {
          const face1 = new BoiteBuilder({ xMin: i * tailleCarre, yMin: j * tailleCarre, xMax: (i + 1) * tailleCarre, yMax: (j + 1) * tailleCarre })
          // face1.addColor({ colorBackground: couleur1 })
          // face1.addTextIn({ textIn: '1'/* , color: couleurTexte1 */ })
          const laFace1 = face1.render()
          leDessin.push(laFace1)
        }
      }
    }
    return leDessin
  }

  symetrieMatriceH (): void {  // symetrie horizontale
    // inverse les lignes
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp = new UnPatron(largeur, longueur) // objetFace[][] = this.initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp.matrice[longueur - 1 - l][k] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp.matrice
  }

  symetrieMatriceV (): void { // symetrie verticale
    // inverse les colonnes
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp.matrice[l][largeur - 1 - k] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp.matrice
  }

  symetrieMatriceD (): void { // symetrie diagonale (ex Transpose la matrice)
    // inverse les lignes et les colonnes
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp = new UnPatron(longueur, largeur) // : objetFace[][] = this.initMatrice(longueur, largeur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
      //  matriceTemp[largeur - 1 - k][longueur - 1 - l] = this.matrice[l][k]
        matriceTemp.matrice[k][l] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp.matrice
  }

  rotationMatrice90p (): void { // rotation de 90°
    const [largeur, longueur] = [this.larg, this.long]
    if (largeur === longueur) {
      const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(longueur, largeur, 4)
      for (let l = 0; l < longueur; l++) {
        for (let k = 0; k < largeur; k++) {
          matriceTemp.matrice[largeur - k - 1][l] = this.matrice[l][k]
        }
      }
      this.matrice = matriceTemp.matrice
    }
  }

  rotationMatrice90n (): void { // rotation de 90° autre sens
    const [largeur, longueur] = [this.larg, this.long]
    if (largeur === longueur) {
      const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(longueur, largeur, 4)
      for (let l = 0; l < longueur; l++) {
        for (let k = 0; k < largeur; k++) {
          matriceTemp.matrice[k][longueur - l - 1] = this.matrice[l][k]
        }
      }
      this.matrice = matriceTemp.matrice
    }
  }

  rotationMatrice180 (): void { // rotation de 180°
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp.matrice[longueur - 1 - l][largeur - 1 - k] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp.matrice
  }
}

type couple = [number, number]

class SerieCouples {
  private _couples: couple[] = []
  private _matrice: UnPatron = new UnPatron(0, 0)
  constructor () {
    this._couples = [
      [0, 0],
      [1, 0],]
  }

  get couples (): couple[] {
    return this._couples
  }

  get matrice (): UnPatron {
    return this._matrice
  }

  set couples (value: couple[]) {
  // ne fait rien
  }

  ecritCouples (): string {
    return this._couples.map(([a, b]) => `[${a}, ${b}]`).join('; ')
  }

  ecritlongueur (): number {
    return this._couples.length
  }

  faitUnPatron (long:number = 6) :void {
    const sens = [-1, 1]
    const longDejaEcrite = this._couples.length
    for (let l = 0; l < long - longDejaEcrite; l++) {
      const couplesPossibles:couple[] = []
      // parcours la liste des couples et liste les cas possibles
      for (let j = 0; j < this._couples.length; j++) {
        const [a, b] = this._couples[j]
        for (const k of sens) {
          if (!this._couples.some(([x, y]) => x === a + k && (y === b || y === b + 1 || y === b - 1))) {
            couplesPossibles.push([a + k, b])
          }
        }
        for (const k of sens) {
          if (!this._couples.some(([x, y]) => y === b + k && (x === a || x === a + 1 || x === a - 1))) {
            couplesPossibles.push([a, b + k])
          }
        }
      }
      this._couples.push(couplesPossibles[randint(0, couplesPossibles.length - 1)])
    }
  }

  faitUnPatronMatrice (): void {
    let aMin = 0
    let bMin = 0
    let aMax = 0
    let bMax = 0
    for (const [a, b] of this._couples) {
      aMax = Math.max(aMax, a)
      bMax = Math.max(bMax, b)
      aMin = Math.min(aMin, a)
      bMin = Math.min(bMin, b)
    }
    const couplesLargeur = aMax - aMin + 1
    const couplesLongueur = bMax - bMin + 1
    this._matrice.initMatrice(couplesLargeur, couplesLongueur)
    for (const [a, b] of this._couples) {
      this._matrice.setcell(a - aMin, bMax - b, 1, true)
    }
  }
}

type FaceNode = {
  x: number
  y: number
  parent?: FaceNode
  children: FaceNode[]
  directionFromParent?: 'T' | 'B' | 'L' | 'R'
}

function getVoisins (matrice: objetFace[][], x: number, y: number) {
  const dirs = [
    { dx: 0, dy: -1, dir: 'T' },
    { dx: 0, dy: 1, dir: 'B' },
    { dx: -1, dy: 0, dir: 'L' },
    { dx: 1, dy: 0, dir: 'R' }
  ] as const
  return dirs
    .filter(({ dx, dy }) => matrice[y + dy]?.[x + dx].isFace)
    .map(({ dx, dy, dir }) => ({ x: x + dx, y: y + dy, dir }))
}

// 1. Trouver la face pivot (celle avec le plus de voisins)
function findPivot (matrice: objetFace[][]) {
  let maxVoisins = -1
  let pivot = { x: 0, y: 0 }
  for (let y = 0; y < matrice.length; y++) {
    for (let x = 0; x < matrice[0].length; x++) {
      if (matrice[y][x].isFace) {
        const voisins = getVoisins(matrice, x, y)
        if (voisins.length > maxVoisins) {
          maxVoisins = voisins.length
          pivot = { x, y }
        }
      }
    }
  }
  return pivot
}

// 2. Construire l’arbre des faces
function buildFaceTree (matrice: objetFace[][], x: number, y: number, parent?: FaceNode, directionFromParent?: 'T' | 'B' | 'L' | 'R', visited = new Set<string>()): FaceNode {
  const key = `${x},${y}`
  if (visited.has(key)) return null as any
  visited.add(key)
  const node: FaceNode = { x, y, parent, children: [], directionFromParent }
  for (const voisin of getVoisins(matrice, x, y)) {
    if (!visited.has(`${voisin.x},${voisin.y}`)) {
      // Ajoute ce log :
      if (Math.abs(voisin.x - x) + Math.abs(voisin.y - y) !== 1) {
        console.warn(`Parent (${x},${y}) et enfant (${voisin.x},${voisin.y}) ne sont pas adjacents !`)
      }
      const child = buildFaceTree(matrice, voisin.x, voisin.y, node, voisin.dir, visited)
      if (child) node.children.push(child)
    }
  }
  return node
}

// 3. Générer la structure A-Frame récursive
function addFaceRecursive (
  viewer: SceneViewer,
  node: FaceNode,
  taille: number,
  facePositions: Map<string, [number, number, number]>,
  pivotPositions: Map<string, [number, number, number]>,
  parentEntityId?: string,
  faceCount: { value: number } = { value: 0 }
) {
  const EPSILON = 0.002 // taille du gap entre les faces pour faire joli
  const boxWidth = taille - 2 * EPSILON
  const boxDepth = taille - 2 * EPSILON

  const couleurs = [
    '#3498db', // bleu doux
    '#2ecc71', // vert frais
    '#e67e22', // orange pastel
    '#9b59b6', // violet doux
    '#f1c40f', // jaune doux
    '#5dade2'  // bleu clair
  ]
  const colorIndex = faceCount.value % couleurs.length
  faceCount.value++
  const couleur = couleurs[colorIndex]
  const faceId = `face_${node.x}_${node.y}`
  const entityId = `entity_${node.x}_${node.y}`
  let entity = ''

  const key = `${node.x},${node.y}`
  const faceAbsPos = facePositions.get(key) ?? [0, 0, 0]
  const pivotAbsPos = pivotPositions.get(key) ?? [0, 0, 0]
  const parentPivotAbsPos = node.parent ? pivotPositions.get(`${node.parent.x},${node.parent.y}`) ?? [0, 0, 0] : [0, 0, 0]

  if (node.parent && node.directionFromParent) {
    // Position du pivot relatif au pivot parent
    const pivotRelPos: [number, number, number] = [
      pivotAbsPos[0] - parentPivotAbsPos[0],
      pivotAbsPos[1] - parentPivotAbsPos[1],
      pivotAbsPos[2] - parentPivotAbsPos[2]
    ]
    // Position de la face dans son pivot
    const facePos: [number, number, number] = [
      faceAbsPos[0] - pivotAbsPos[0],
      faceAbsPos[1] - pivotAbsPos[1],
      faceAbsPos[2] - pivotAbsPos[2]
    ]
    entity += `<a-entity id="${entityId}" position="${pivotRelPos.join(' ')}" rotation="0 0 0">`
    entity += `<a-box id="${faceId}" position="${facePos.join(' ')}" width="${boxWidth}" height="0.01" depth="${boxDepth}" color="${couleur}"></a-box>`
  } else {
    // Racine
    entity += `<a-entity id="${entityId}" position="${faceAbsPos.join(' ')}" rotation="0 0 0">`
    entity += `<a-box id="${faceId}" position="0 0 0" width="${boxWidth}" height="0.01" depth="${boxDepth}" color="${couleur}"></a-box>`
  }

  for (const child of node.children) {
    entity += addFaceRecursive(viewer, child, taille, facePositions, pivotPositions, entityId, faceCount)
  }
  entity += '</a-entity>'

  if (!parentEntityId) {
    viewer.addMesh(entity)
  }
  return parentEntityId ? entity : ''
}

function animePliage (node: FaceNode, numExercice = 0, numQuestion = 0, onComplete?: () => void, duration = 4000) {
  let pending = 0
  function recurse (n: FaceNode) {
    if (n.parent && n.directionFromParent) {
      const entityId = `entity_${n.x}_${n.y}`
      let rot = '0 0 0'
      switch (n.directionFromParent) {
        case 'T': rot = '90 0 0'; break
        case 'B': rot = '-90 0 0'; break
        case 'L': rot = '0 0 -90'; break
        case 'R': rot = '0 0 90'; break
      }
      const entity = document.getElementById(entityId)
      if (entity) {
        entity.removeAttribute('animation__fold')
        entity.setAttribute(
          'animation__fold',
          `property: rotation; to: ${rot}; dur: ${duration}; easing: easeInOutQuad`
        )
        pending++
        entity.addEventListener('animationcomplete', function handler (e) {
          const customEvent = e as CustomEvent
          if (customEvent.detail && customEvent.detail.name === 'animation__fold') {
            entity.removeEventListener('animationcomplete', handler)
            pending--
            if (pending === 0 && onComplete) onComplete()
          }
        })
      }
    }
    for (const child of n.children) recurse(child)
  }
  recurse(node)
  // Gestion des boutons
  if (!node.parent) {
    const btnPlier = document.getElementById(`btnPlierEx${numExercice}Q${numQuestion}`)
    const btnDeplier = document.getElementById(`btnDeplierEx${numExercice}Q${numQuestion}`)
    if (btnPlier) btnPlier.setAttribute('disabled', 'true')
    if (btnDeplier) btnDeplier.removeAttribute('disabled')
  }
}

function animeDepliage (
  node: FaceNode,
  numExercice = 0,
  numQuestion = 0,
  onComplete?: () => void,
  duration = 4000
) {
  let pending = 0
  function recurse (n: FaceNode) {
    if (n.parent && n.directionFromParent) {
      const entityId = `entity_${n.x}_${n.y}`
      const rot = '0 0 0'
      const entity = document.getElementById(entityId)
      if (entity) {
        entity.removeAttribute('animation__unfold')
        entity.setAttribute(
          'animation__unfold',
          `property: rotation; to: ${rot}; dur: ${duration}; easing: easeInOutQuad`
        )
        pending++
        entity.addEventListener('animationcomplete', function handler (e) {
          const customEvent = e as CustomEvent
          if (customEvent.detail && customEvent.detail.name === 'animation__unfold') {
            entity.removeEventListener('animationcomplete', handler)
            pending--
            if (pending === 0 && onComplete) onComplete()
          }
        })
      }
    }
    for (const child of n.children) recurse(child)
  }
  recurse(node)
  // Gestion des boutons
  if (!node.parent) {
    const btnPlier = document.getElementById(`btnPlierEx${numExercice}Q${numQuestion}`)
    const btnDeplier = document.getElementById(`btnDeplierEx${numExercice}Q${numQuestion}`)
    if (btnDeplier) btnDeplier.setAttribute('disabled', 'true')
    if (btnPlier) btnPlier.removeAttribute('disabled')
  }
}
const EPSILON = 0.001 // ou 0.005 selon le rendu souhaité

function getAbsolutePositions (tree: FaceNode, taille: number, pos: [number, number, number] = [0, 0, 0], positions = new Map<string, [number, number, number]>()) {
  const key = `${tree.x},${tree.y}`
  positions.set(key, pos)
  for (const child of tree.children) {
    let offset: [number, number, number] = [0, 0, 0]
    switch (child.directionFromParent) {
      case 'T': offset = [0, 0, -(taille + EPSILON)]; break
      case 'B': offset = [0, 0, taille + EPSILON]; break
      case 'L': offset = [-(taille + EPSILON), 0, 0]; break
      case 'R': offset = [taille + EPSILON, 0, 0]; break
    }
    getAbsolutePositions(child, taille, [
      pos[0] + offset[0],
      pos[1] + offset[1],
      pos[2] + offset[2]
    ], positions)
  }
  return positions
}

function getPivotPositions (
  node: FaceNode,
  taille: number,
  facePositions: Map<string, [number, number, number]>,
  pivotPositions: Map<string, [number, number, number]>
) {
  const key = `${node.x},${node.y}`
  const faceAbsPos = facePositions.get(key) ?? [0, 0, 0]
  let pivotAbsPos: [number, number, number]
  if (!node.parent) {
    pivotAbsPos = faceAbsPos
  } else {
    const parentKey = `${node.parent.x},${node.parent.y}`
    const parentFaceAbsPos = facePositions.get(parentKey) ?? [0, 0, 0]
    pivotAbsPos = [
      (parentFaceAbsPos[0] + faceAbsPos[0]) / 2,
      (parentFaceAbsPos[1] + faceAbsPos[1]) / 2,
      (parentFaceAbsPos[2] + faceAbsPos[2]) / 2
    ]
  }
  pivotPositions.set(key, pivotAbsPos)
  for (const child of node.children) {
    getPivotPositions(child, taille, facePositions, pivotPositions)
  }
  return pivotPositions
}
/**
 *
 * @param box La fonction qui fait clignoter les faces
 * @param color
 * @param times
 * @param interval
 * @returns
 */
function blinkABox (box: Element, color = '#ff0000', times = 26, interval = 200) {
  let count = 0
  let stopped = false
  const originalColor = String(box.getAttribute('color'))
  function stop () {
    stopped = true
    box.setAttribute('color', originalColor)
  }
  const blink = () => {
    if (stopped) return
    box.setAttribute('color', count % 2 === 0 ? color : '#ffffff')
    count++
    if (count < times * 2) setTimeout(blink, interval)
    else box.setAttribute('color', originalColor)
  }
  blink()
  return stop
}

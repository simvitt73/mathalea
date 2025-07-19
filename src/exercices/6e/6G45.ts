import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { choice, combinaisonListes, shuffle } from '../../lib/outils/arrayOutils'
import { fauxCubes, vraiCubes } from './_listePatrons'
import { point } from '../../lib/2d/points'
import { Polygone, polygone } from '../../lib/2d/polygones'

import { mathalea2d } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { setCliqueFigure } from '../../lib/interactif/gestionInteractif'
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
  }

  nouvelleVersion () {
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
    const listeVraisPatrons: UnPatron[] = initListePatrons(vraiCubes)
    const listeFauxPatrons: UnPatron[] = initListePatrons(fauxCubes)
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
          const dessin3 = patron3.dessineMatrice()

          const taille = choice([5, 7])
          const patron4 = faitUnPatronAuPif(taille)
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
          // texte += '<br>'
          //          const figures = shuffle([figPatronOk, figPatronFaux1, figPatronFaux2, figPatronFaux3])

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
          }
          break
        }
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
  }
}
const tailleCarre = 1

const initMatrice = (largeur: number, longueur: number, digit: number = 0): number[][] =>
  Array.from({ length: longueur }, () => Array(largeur).fill(digit))

function initListePatrons (listeMatrices:(number[][])[]): UnPatron[] {
  const listePatrons: UnPatron[] = []
  for (const uneMatrice of listeMatrices) {
    const patron = new UnPatron(uneMatrice[0].length, uneMatrice.length)
    patron.initMatrice(uneMatrice[0].length, uneMatrice.length, 0)
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
  matrice: number[][] = []
  constructor (
    largeur: number,
    longueur: number, digit: number = 0
  ) {
    this.matrice = initMatrice(largeur, longueur, digit)
  }
  /* for (let l = 0; l < longueur; l++) {
      this.matrice[l] = []
      for (let k = 0; k < largeur; k++) {
        this.matrice[l][k] = digit// l * largeur + k // digit
      }
    } */

  get larg (): number {
    return this.matrice.reduce((max, row) => Math.max(max, row.length), 0)
  }

  get long (): number {
    return this.matrice.length
  }

  initMatrice (largeur: number, longueur: number, digit: number = 0): void {
    for (let l = 0; l < longueur; l++) {
      this.matrice[l] = []
      for (let k = 0; k < largeur; k++) {
        this.matrice[l][k] = digit// l * largeur + k // digit
      }
    }
  }

  setcell (x:number, y:number, value:number): void {
    if (y < this.long && x < this.larg) {
      this.matrice[y][x] = value
    }
  }

  dimensions (): [number, number] {
    return [this.larg, this.long]
  }

  ecritMatrice (): string {
    let texte = '[<br>' // numbers.length
    const Longueur = this.matrice.length
    for (let l = 0; l < Longueur; l++) {
      texte += `[${this.matrice[l].join(', ')}]<br>`
    }
    const lastIndex = texte.lastIndexOf('<br>')
    texte = texte.substring(0, lastIndex) + ']' + texte.substring(lastIndex + 4)

    return texte
  }

  dessineMatrice (): Polygone[] {
    const [largeur, longueur] = [this.larg, this.long]
    const patronTemp = new UnPatron(largeur, longueur)
    patronTemp.matrice = this.matrice.map(ligne => [...ligne]) // copie de la matrice
    let transfo = choice([1, 2, 3, 0])
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
    const leDessin: Polygone[] = []
    for (let i = 0; i < patronTemp.long; i++) {
      for (let j = 0; j < patronTemp.larg; j++) {
        if (patronTemp.matrice[i][j] === 1) {
          const A = point(i * tailleCarre, j * tailleCarre)
          const B = point(i * tailleCarre, (j + 1) * tailleCarre)
          const C = point((i + 1) * tailleCarre, (j + 1) * tailleCarre)
          const D = point((i + 1) * tailleCarre, j * tailleCarre)
          const rectanglePatron = polygone([A, B, C, D], 'black')
          leDessin.push(rectanglePatron)
        }
      }
    }
    return leDessin
  }

  symetrieMatriceH (): void {  // symetrie horizontale
    // inverse les lignes
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp: number[][] = initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp[longueur - 1 - l][k] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp
  }

  symetrieMatriceV (): void { // symetrie verticale
    // inverse les colonnes
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp: number[][] = initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp[l][largeur - 1 - k] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp
  }

  symetrieMatriceD (): void { // symetrie diagonale (ex Transpose la matrice)
    // inverse les lignes et les colonnes
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp: number[][] = initMatrice(longueur, largeur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
      //  matriceTemp[largeur - 1 - k][longueur - 1 - l] = this.matrice[l][k]
        matriceTemp[k][l] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp
  }

  rotationMatrice90p (): void { // rotation de 90°
    const [largeur, longueur] = [this.larg, this.long]
    if (largeur === longueur) {
      const matriceTemp: number[][] = initMatrice(longueur, largeur, 4)
      for (let l = 0; l < longueur; l++) {
        for (let k = 0; k < largeur; k++) {
          matriceTemp[largeur - k - 1][l] = this.matrice[l][k]
        }
      }
      this.matrice = matriceTemp
    }
  }

  rotationMatrice90n (): void { // rotation de 90° autre sens
    const [largeur, longueur] = [this.larg, this.long]
    if (largeur === longueur) {
      const matriceTemp: number[][] = initMatrice(longueur, largeur, 4)
      for (let l = 0; l < longueur; l++) {
        for (let k = 0; k < largeur; k++) {
          matriceTemp[k][longueur - l - 1] = this.matrice[l][k]
        }
      }
      this.matrice = matriceTemp
    }
  }

  rotationMatrice180 (): void { // rotation de 180°
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp: number[][] = initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp[longueur - 1 - l][largeur - 1 - k] = this.matrice[l][k]
      }
    }
    this.matrice = matriceTemp
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
      this._matrice.setcell(a - aMin, bMax - b, 1)
    }
  }
}

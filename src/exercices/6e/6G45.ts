import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { arrayClone, choice, combinaisonListes, shuffle } from '../../lib/outils/arrayOutils'
import { BoiteBuilder } from '../../lib/2d/polygones'

import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { setCliqueFigure, type MathaleaSVG } from '../../lib/interactif/gestionInteractif'
import { texteParPosition } from '../../lib/2d/textes'
import type { objetFace } from '../../lib/3d/utilsPatrons'
import { affichePatron3D, ajouteListeners, cubesObj, fauxCubesObj } from '../../lib/3d/utilsPatrons'
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
  listeMatrices: objetFace[][][][]
  constructor () {
    super()
    this.nbQuestions = 1
    // pour plus tard cubes Paves ...
    // this.besoinFormulaireNumerique = ['Type de questions', 3, '1 : patrons de cubes\n 2 : patrons de pavés droits']

    this.besoinFormulaire2CaseACocher = ['3d dynamique', true]
    this.sup2 = true
    this.listeMatrices = []
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
      const ordreAffichage = shuffle([0, 1, 2, 3])
      const indexPatronAffiche: number[] = []
      for (let i = 0; i < 4; i++) {
        indexPatronAffiche[i] = ordreAffichage.findIndex((el) => el === i)
      }

      switch (listeTypeQuestions[i]) {
        case 'type1':{
          texte = ''// `Question ${i + 1} de type 1<br>`
          // texte += `listeVraisPatrons :  ${listeVraisPatrons.length} <br>`
          const figPatrons:UnPatron[] = []
          figPatrons.push(listeVraisPatrons[Number(listeTypeVraiPatrons[i]) - 1])
          const numPatron2 = randint(0, listeFauxPatrons.length - 1)
          figPatrons.push(listeFauxPatrons[randint(0, numPatron2)])
          figPatrons.push(listeFauxPatrons[randint(0, listeFauxPatrons.length - 1, numPatron2)])
          const taillePatronAuPif = choice([5, 7])
          figPatrons.push(faitUnPatronAuPif(taillePatronAuPif))
          for (let k = 0; k < 4; k++) {
            figPatrons[k].braceMatrice()
          }
          // const figPatronOk = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, dessin1)
          // const figPatronFaux1 = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure1Ex${this.numeroExercice}Q${i}` }, dessin2)
          // const figPatronFaux2 = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure2Ex${this.numeroExercice}Q${i}` }, dessin3)
          // const figPatronFaux3 = mathalea2d({ style: 'display: inline-block', xmin: xymin, xmax: xymax, ymin: xymin, scale: zoom, id: `cliquefigure3Ex${this.numeroExercice}Q${i}` }, dessin4)

          // amc

          const fig0 = figPatrons[0].dessineMatrice({ numeroterFaces: false, numeroDessin: ordreAffichage[0] })
          const fig1 = figPatrons[1].dessineMatrice({ numeroterFaces: false, numeroDessin: ordreAffichage[1] })
          const fig2 = figPatrons[2].dessineMatrice({ numeroterFaces: false, numeroDessin: ordreAffichage[2] })
          const fig3 = figPatrons[3].dessineMatrice({ numeroterFaces: false, numeroDessin: ordreAffichage[3] })
          const figPatronOkAMC = mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoomAMC, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig0)),
            fig0)
          const figPatronFaux1AMC = mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoomAMC, id: `cliquefigure1Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig1)),
            fig1)
          const figPatronFaux2AMC = mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoomAMC, id: `cliquefigure2Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig2)),
            fig2)
          const figPatronFaux3AMC = mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoomAMC, id: `cliquefigure3Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig3)),
            fig3)

          this.autoCorrection[i] = {}
          // setCliqueFigure({})
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
          setCliqueFigure(this.autoCorrection[i])

          // const figures =  [figPatronOkAMC, figPatronFaux1AMC, figPatronFaux2AMC, figPatronFaux3AMC]
          const figuresMelanges = [figPatronOkAMC, figPatronFaux1AMC, figPatronFaux2AMC, figPatronFaux3AMC]
          this.listeMatrices[i] = []
          for (let k = 0; k < 4; k++) {
            const fig = figPatrons[indexPatronAffiche[k]].dessineMatrice({ numeroterFaces: false, numeroDessin: k })
            figuresMelanges[k] = mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoom, id: `cliquefigure${indexPatronAffiche[k]}Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig)),
              fig)
            this.listeMatrices[i].push(figPatrons[indexPatronAffiche[k]].matrice)
          }

          if (!context.isAmc) {
            texte += figuresMelanges.join('') + '<br><br>'
            if (this.interactif && context.isHtml) {
              texte += `<span id="resultatCheckEx${this.numeroExercice}Q${i}"></span>`
            }

            texteCorr = 'Procédons par élimination:<br>'
            texteCorr += `- Le dessin ${ordreAffichage[3] + 1} contient ${taillePatronAuPif} faces au lieu de 6 faces.<br><br>`
            texteCorr += `- Le dessin ${ordreAffichage[1] + 1} poséde des faces qui vont se superposer :<br>`
            const fig1 = figPatrons[indexPatronAffiche[ordreAffichage[1]]].dessineMatrice({ numeroterFaces: true, numeroDessin: ordreAffichage[1] })
            texteCorr += mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoom, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig1)), fig1) + '<br>'
            texteCorr += figPatrons[indexPatronAffiche[ordreAffichage[1]]].ecritFacesQuiSeSuperposent() + '<br><br>'
            texteCorr += `- Le dessin ${ordreAffichage[2] + 1} poséde des faces qui vont se superposer :<br>`
            const fig2 = figPatrons[indexPatronAffiche[ordreAffichage[2]]].dessineMatrice({ numeroterFaces: true, numeroDessin: ordreAffichage[2] })
            texteCorr += mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoom, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig2)), fig2) + '<br>'
            texteCorr += figPatrons[indexPatronAffiche[ordreAffichage[2]]].ecritFacesQuiSeSuperposent() + '<br><br>'
            texteCorr += `Le dessin ${ordreAffichage[0] + 1} posséde 6 faces qui ne vont pas se superposer en le pliant, c'est donc le dessin d'un patron.<br>`
            const fig3 = figPatrons[indexPatronAffiche[ordreAffichage[0]]].dessineMatrice({ numeroterFaces: true, numeroDessin: ordreAffichage[0] })
            texteCorr += mathalea2d(Object.assign({ style: 'display: inline-block', scale: zoom, id: `cliquefigure0Ex${this.numeroExercice}Q${i}` }, fixeBordures(fig3), fig3))
            if (context.isHtml && this.sup2) {
              texteCorr += `<div id="emplacementPourSceneViewerEx${this.numeroExercice}Q${i}Correction" style="width: 400px; height: 400px; display: block;"></div>`
            }
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
        if (!this.interactif) {
          const exo = this
          const question = i
          const index = indexPatronAffiche[0]
          document.addEventListener('correctionsAffichees', () => {
            const id = `emplacementPourSceneViewerEx${exo.numeroExercice}Q${question}Correction`
            const emplacementPourCorrection = document.getElementById(id)
            if (emplacementPourCorrection) {
              const { viewer, tree } = affichePatron3D(this.listeMatrices[question][index], `patron3dEx${exo.numeroExercice}Q${question}`)
              ajouteListeners(exo.numeroExercice ?? 0, question, viewer, tree, true)
            }
          })
        }
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr ?? ''
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }

  callback (exercice: Exercice, i: number): void {
    if ('listeMatrices' in exercice && Array.isArray(exercice.listeMatrices) && exercice.listeMatrices.length >= i) {
      // On commence par trouver l'élément cliqué... enfin son index.
      // Trouver tous les SVG dont l'id correspond au format 'cliquefigure{n}Ex{exercice.numeroExercice}Q{i}'
      const figElements = Array.from(document.querySelectorAll<MathaleaSVG>(
        `[id^="cliquefigure"][id$="Ex${exercice.numeroExercice}Q${i}"]`
      )).filter(el => {
        // Vérifie que l'id correspond exactement au format voulu (un seul chiffre pour n)
        const regex = new RegExp(`^cliquefigure\\dEx${exercice.numeroExercice}Q${i}$`)
        return regex.test(el.id)
      })

      const indexClique = Array.from(figElements as MathaleaSVG[]).findIndex((el: MathaleaSVG) => Boolean(el.etat))
      const { viewer, tree } = affichePatron3D(exercice.listeMatrices[i][indexClique], `patron3dEx${exercice.numeroExercice}Q${i}`)
      ajouteListeners(exercice.numeroExercice ?? 0, i, viewer, tree)
    }
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
    let texte = '[\n' // numbers.length
    // bollean vers valeurs 0,1
    const valeursBooleennes = this.matrice.map(row =>
      row.map(element => element.isFace ? 1 : 0)
    )
    texte += valeursBooleennes
      .map(row => `[${row.join(', ')}]`)
      .join(',\n')
    texte += ']\n'
    return texte
  }

  braceMatrice ():void {
    const [largeur, longueur] = [this.larg, this.long]
    const patronTemp = new UnPatron(largeur, longueur)
    patronTemp.matrice = arrayClone(this.matrice) // copie de la matrice
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
    this.matrice = arrayClone(patronTemp.matrice)
  }

  ecritFacesQuiSeSuperposent (): string {
    let texte:string = ''
    for (let i = 0; i < this.long; i++) {
      for (let j = 0; j < this.larg; j++) {
        if (this.matrice[i][j].isFace && this.matrice[i][j].collision) {
          texte += ` Les faces ${this.matrice[i][j].numero} et  ${this.matrice[i][j].collision} vont se superposer.`
        }
      }
    }
    return texte
  }

  dessineMatrice ({ numeroterFaces, numeroDessin }: { numeroterFaces?: boolean, numeroDessin?: number }): any[] {
    const correction = numeroterFaces ?? false

    const leDessin :NestedObjetMathalea2dArray = []
    for (let i = 0; i < this.long; i++) {
      for (let j = 0; j < this.larg; j++) {
        if (this.matrice[i][j].isFace) {
          const face1 = new BoiteBuilder({ xMin: i * tailleCarre, yMin: j * tailleCarre, xMax: (i + 1) * tailleCarre, yMax: (j + 1) * tailleCarre })
          if (correction) {
            // face1.addColor({ colorBackground: 'gray' }) // 'gray''blue'
            face1.addTextIn({ textIn: `${this.matrice[i][j].numero}`/* , color: couleurTexte1 */ })
          }
          const laFace1 = face1.render()
          leDessin.push(laFace1)
        }
      }
    }
    const { xmin, xmax } = fixeBordures(leDessin)
    if (numeroDessin !== undefined && typeof numeroDessin === 'number') {
      const Numdessin = texteParPosition(`Dessin ${numeroDessin + 1}`, (xmin + xmax) / 2, -0.5, 0, 'black', 1, 'milieu', false, 1)
      leDessin.push(Numdessin)
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
    this.matrice = arrayClone(matriceTemp.matrice)
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
    this.matrice = arrayClone(matriceTemp.matrice)
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
    this.matrice = arrayClone(matriceTemp.matrice)
  }

  rotationMatrice90p (): void { // rotation de 90°
    const [largeur, longueur] = [this.long, this.larg]
    const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(longueur, largeur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp.matrice[l][largeur - k - 1] = this.matrice[k][l]
      }
    }
    this.matrice = arrayClone(matriceTemp.matrice)
  }

  rotationMatrice90n (): void { // rotation de 90° autre sens
    const [largeur, longueur] = [this.long, this.larg]
    const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(longueur, largeur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp.matrice[longueur - l - 1][k] = this.matrice[k][l]
      }
    }
    this.matrice = arrayClone(matriceTemp.matrice)
  }

  rotationMatrice180 (): void { // rotation de 180°
    const [largeur, longueur] = [this.larg, this.long]
    const matriceTemp = new UnPatron(largeur, longueur) // : objetFace[][] = this.initMatrice(largeur, longueur, 4)
    for (let l = 0; l < longueur; l++) {
      for (let k = 0; k < largeur; k++) {
        matriceTemp.matrice[longueur - 1 - l][largeur - 1 - k] = this.matrice[l][k]
      }
    }
    this.matrice = arrayClone(matriceTemp.matrice)
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

import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'

import { labelPoint, Latex2d, TexteParPoint } from '../../lib/2d/textes'
import { colorToLatexOrHTML, fixeBordures, mathalea2d, ObjetMathalea2D, Vide2d } from '../../modules/2dGeneralites'
import { longueur, Segment, segment, vecteur } from '../../lib/2d/segmentsVecteurs'
import { CodageAngle, placeLatexSurSegment } from '../../lib/2d/codages'
import { texNombre } from '../../lib/outils/texNombre'
import { NommePolygone, pattern, Polygone, polygone, Polyline } from '../../lib/2d/polygones'
import { Point, point, pointAdistance, tracePoint, TracePoint } from '../../lib/2d/points'
import { arc, cercle } from '../../lib/2d/cercle'
import { homothetie, rotation, similitude, translation } from '../../lib/2d/transformations'
import type { CodageAngleDroit, MarqueAngle } from '../../lib/2d/angles'
import { deuxColonnesResp } from '../../lib/format/miseEnPage'
import { arrondi } from '../../lib/outils/nombres'
import { sp } from '../../lib/outils/outilString'
// import { cylindre2d } from '../../lib/2d/projections3d'
import { abs, random, round } from 'mathjs'
import { ellipse, semiEllipse } from '../../lib/2d/projections3d'

export const titre = 'Calculer des longueurs avec un patron de cylindre'

export const dateDePublication = '27/04/2024'

export const uuid = 'bc788'
export const refs = {
  'fr-fr': ['5G52'],
  'fr-ch': []
}
/**
 * calculer des longueurs avec un patron de cylindre
 * 'problème en  baseCoteCoucheVuDroite avec r=4'
 * @author Olivier Mimeau
*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = '' // // 'Consigne'
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['CylindreVersPatron']// ['CylindreVersPatron', 'PatronVersCylindre', 'type3']
    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    const orientationCylindre = ['DeboutVuDessus', 'baseAvantCoucheVuGauche', 'baseCoteCoucheVuDroite']/// ['DeboutVuDessus', 'baseCoteCoucheVuDroite', 'baseAvantCoucheVuGauche']// ['DeboutVuDessus', 'baseAvantCoucheVuDroite', 'baseCoteCoucheVuDroite']// ['DeboutVuDessus', 'DeboutVuDessous', 'baseAvantCoucheVuGauche', 'baseAvantCoucheVuDroite', 'baseCoteCoucheVuGauche', 'baseCoteCoucheVuDroite']
    const listetypeOrientationCylindre = combinaisonListes(orientationCylindre, this.nbQuestions)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      let texteCorr = ''
      const tailleMinFigure = 7
      const scaleDessin = 0.5
      const largeurCol = 40 // en % sert pour sortie PDF et HTML ?
      const largeurHTMCol = `${tailleMinFigure * 20}px`
      const objetsPerspective = []
      const objetsPatron = []
      const objetsPatronReponse = []

      const r = randint(2, 7) // rayon
      const h = randint(3, 10, [r]) // hauteur

      const cent1 = point(0, 0, 'A', 'left')
      let cylindre = cylindre2d({ centre: cent1, rx: r, hauteur: h, color: 'black' })
      let cent2 = point(0, h, 'Z', 'left')
      let ext1Rayon = point(0, 0)
      let ext2Rayon = point(0, 0)
      let segRayon = segment(cent1, ext1Rayon, 'black')
      segRayon.pointilles = 1
      let rayon = placeLatexSurSegment(`${texNombre(r, 1)}\\text{ cm}`, ext1Rayon, cent1)
      let hauteur = placeLatexSurSegment(`${texNombre(h, 1)}\\text{ cm}`, ext2Rayon, ext1Rayon)

      switch (listetypeOrientationCylindre[i]) {
        case 'DeboutVuDessus':
          cylindre = cylindre2d({ centre: cent1, rx: r, hauteur: h, position: 'DeboutVuDessus', color: 'black' })
          cent2 = point(0, h, 'B', 'left')
          ext1Rayon = point(r, 0)
          ext2Rayon = point(r, h)
          segRayon = segment(cent1, ext1Rayon, 'black')
          segRayon.pointilles = 1
          rayon = placeLatexSurSegment(`${texNombre(r, 1)}\\text{ cm}`, ext1Rayon, cent1)
          hauteur = placeLatexSurSegment(`${texNombre(h, 1)}\\text{ cm}`, ext2Rayon, ext1Rayon)
          break
        case 'baseAvantCoucheVuGauche':{
          // valeurs par defaut dans la perspective
          const angDeFuite = 30
          const coefDeFuite = 0.8
          // valeurs par defaut dans la perspective
          cylindre = cylindre2d({ centre: cent1, rx: r, hauteur: h, position: 'baseAvantCoucheVuGauche', color: 'black', coefficientDeFuite: coefDeFuite })

          cent2 = pointAdistance(cent1, h * coefDeFuite, angDeFuite, 'G', 'left')
          const ey = -r * Math.cos(angDeFuite * Math.PI / 180)
          const ex = r * Math.sin(angDeFuite * Math.PI / 180)
          ext1Rayon = point(cent1.x + ex, cent1.y + ey)
          ext2Rayon = point(cent2.x + ex, cent2.y + ey)
          segRayon = segment(cent1, point(cent1.x + r, cent1.y), 'black')
          segRayon.pointilles = 1
          rayon = placeLatexSurSegment(`${texNombre(r, 1)}\\text{ cm}`, point(cent1.x + r, cent1.y), cent1)
          hauteur = placeLatexSurSegment(`${texNombre(h, 1)}\\text{ cm}`, ext2Rayon, ext1Rayon)
          break
        }
        case 'baseCoteCoucheVuDroite':{ // a finir
          cylindre = cylindre2d({ centre: cent1, rx: r, hauteur: h, position: 'baseCoteCoucheVuDroite', color: 'black' })
          cent2 = point(h, 0, 'B', 'left')
          ext1Rayon = point(0, r)
          ext2Rayon = point(h, r)
          segRayon = segment(cent2, ext2Rayon, 'black')
          segRayon.pointilles = 1
          rayon = placeLatexSurSegment(`${texNombre(r, 1)}\\text{ cm}`, ext2Rayon, cent2)
          hauteur = placeLatexSurSegment(`${texNombre(h, 1)}\\text{ cm}`, ext1Rayon, ext2Rayon)
          break
        }
        default:
          break
      }
      const tCent1 = tracePoint(cent1)
      const tCent2 = tracePoint(cent2)

      objetsPerspective.push(cylindre, tCent1, tCent2, segRayon, rayon, hauteur, labelPoint(cent1, cent2))

      const [dimlRect, dimLRect, dimRCercle] = [4, 12, 2] // dimLargeurRectangle
      const A = point(0, 0)
      const B = point(0, dimlRect)
      const C = point(dimLRect, dimlRect)
      const D = point(dimLRect, 0)
      const centreHaut = point(randint(dimlRect, dimLRect - dimRCercle), dimlRect + dimRCercle)
      const centreBas = point(randint(dimlRect, dimLRect - dimRCercle), -dimRCercle)
      const rectanglePatron = polygone([A, B, C, D], 'black')
      const cercleHaut = cercle(centreHaut, dimRCercle)
      const cercleBas = cercle(centreBas, dimRCercle)
      objetsPatron.push(rectanglePatron, cercleHaut, cercleBas)
      objetsPatronReponse.push(rectanglePatron, cercleHaut, cercleBas)
      // les quatre éléments suivants : positions à varier ??
      let coteLongueurPatron:Segment
      let qLongueurPatron:Latex2d
      let rLongueurPatron:Latex2d
      let coteHauteurPatron:Segment
      let qHauteurPatron:Latex2d
      let rHauteurPatron:Latex2d
      let ptExtremite1Rayon : Point
      let ptExtremite2Rayon : Point
      let ptExtremite1Diametre : Point
      let ptExtremite2Diametre : Point
      if (choice([0, 1]) === 0) {
        coteLongueurPatron = afficheCoteSegmentSansTexte(segment(C, B), 0.5, 'black')
        qLongueurPatron = placeLatexSurSegment('\\text{.......}', C, B, { distance: 1 })
        rLongueurPatron = placeLatexSurSegment(`\\approx\\text{${texNombre(arrondi(2 * r * Math.PI, 1))} cm}`, C, B, { distance: 1 })
      } else {
        coteLongueurPatron = afficheCoteSegmentSansTexte(segment(A, D), 0.5, 'black')
        qLongueurPatron = placeLatexSurSegment('\\text{.......}', A, D, { distance: 1 })
        rLongueurPatron = placeLatexSurSegment(`\\approx\\text{${texNombre(arrondi(2 * r * Math.PI, 1))} cm}`, A, D, { distance: 1 })
      }
      if (choice([0, 1]) === 0) {
        coteHauteurPatron = afficheCoteSegmentSansTexte(segment(A, B), 0.5, 'black')
        qHauteurPatron = placeLatexSurSegment('\\text{.......}', A, B, { distance: 1 })
        rHauteurPatron = placeLatexSurSegment(`\\text{${h} cm}`, A, B, { distance: 1 })
      } else {
        coteHauteurPatron = afficheCoteSegmentSansTexte(segment(C, D), 0.5, 'black')
        qHauteurPatron = placeLatexSurSegment('\\text{.......}', C, D, { distance: 1 })
        rHauteurPatron = placeLatexSurSegment(`\\text{${h} cm}`, C, D, { distance: 1 })
      }
      if (choice([0, 1]) === 0) {
        ptExtremite1Rayon = point(centreHaut.x, centreHaut.y)
        ptExtremite2Rayon = point(centreHaut.x + dimRCercle, centreHaut.y)
        ptExtremite1Diametre = point(centreBas.x - dimRCercle, centreBas.y)
        ptExtremite2Diametre = point(centreBas.x + dimRCercle, centreBas.y)
      } else {
        ptExtremite1Rayon = point(centreHaut.x, centreHaut.y)
        ptExtremite2Rayon = point(centreHaut.x + dimRCercle, centreHaut.y)
        ptExtremite1Diametre = point(centreBas.x - dimRCercle, centreBas.y)
        ptExtremite2Diametre = point(centreBas.x + dimRCercle, centreBas.y)
      }
      const coteRayon = afficheCoteSegmentSansTexte(segment(ptExtremite1Rayon, ptExtremite2Rayon), 0, 'black')
      const qRayon = placeLatexSurSegment('\\text{.......}', ptExtremite1Rayon, ptExtremite2Rayon)
      const rRayon = placeLatexSurSegment(`\\text{${r} cm}`, ptExtremite1Rayon, ptExtremite2Rayon)
      const coteDiametre = afficheCoteSegmentSansTexte(segment(ptExtremite1Diametre, ptExtremite2Diametre), 0, 'black')
      const qDiametre = placeLatexSurSegment('\\text{.......}', ptExtremite1Diametre, ptExtremite2Diametre)
      const rDiametre = placeLatexSurSegment(`\\text{${2 * r} cm}`, ptExtremite1Diametre, ptExtremite2Diametre)

      objetsPatron.push(coteLongueurPatron, coteHauteurPatron, coteRayon, coteDiametre, qLongueurPatron, qHauteurPatron, qRayon, qDiametre)
      objetsPatronReponse.push(coteLongueurPatron, coteHauteurPatron, coteRayon, coteDiametre, rLongueurPatron, rHauteurPatron, rRayon, rDiametre)

      //      const [colonne1, colonne2] = definiColonnes([...solideDessine.c2d, rayon, hauteur, segmentRayon], objetsPatron, scaleDessin)
      const [colonne1, colonne2] = definiColonnes(objetsPerspective, objetsPatron, scaleDessin)
      const [rColonne1, rColonne2] = definiColonnes(objetsPerspective, objetsPatronReponse, scaleDessin)

      switch (listeTypeQuestions[i]) {
        case 'CylindreVersPatron':
          texte = '' // `Question ${i + 1} de type CylindreVersPatron<br>${listetypeOrientationCylindre[i]}<br>`
          texte += 'On souhaite construire le patron  du cylindre ci-dessous.<br> Complète le schéma du patron en indiquant les longeurs en valeur exacte si possible ou au millimètre près.<br>'
          texte += '<br><br>'
          texte += deuxColonnesResp(colonne1, colonne2, {
            largeur1: largeurCol,
            eleId: '',
            widthmincol1: largeurHTMCol,
            widthmincol2: '0px'
          })
          // texteCorr += `Correction ${i + 1} de type CylindreVersPatron<br>`
          texteCorr += `Le diamètre du cercle de base est $2 \\times ${texNombre(r, 1)} = ${texNombre(2 * r, 1)}${sp()}\\text{cm}$<br>`
          texteCorr += `La largeur du rectangle est la hauteur du cylindre soit $${texNombre(h, 1)}${sp()}\\text{cm}$<br>`
          texteCorr += `La longueur du rectangle est égale à la longueur du cerlce de base soit $2 \\times ${texNombre(r, 1)}\\times \\pi=${texNombre(2 * r, 1)
                  }\\pi\\approx${texNombre(arrondi(2 * r * Math.PI, 1))}${sp()}\\text{cm}$<br>`
          texteCorr += '<br><br>'
          texteCorr += deuxColonnesResp(rColonne1, rColonne2, {
            largeur1: largeurCol,
            eleId: '',
            widthmincol1: largeurHTMCol,
            widthmincol2: '0px'
          })
          break
        case 'PatronVersCylindre':
          texte = `Question ${i + 1} de type PatronVersCylindre`
          texteCorr = `Correction ${i + 1} de type PatronVersCylindre`
          break
        case 'type3':
        default:
          texte = `Question ${i + 1} de type 3`
          texteCorr = `Correction ${i + 1} de type 3`
          break
      }
      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

function afficheCoteSegmentSansTexte (s: Segment, positionCote = 0.5, couleurCote = 'black'): Segment {
  const A = s.extremite1
  const B = s.extremite2
  const v = similitude(vecteur(A, B), A, 90, positionCote / s.longueur)
  const cote = segment(translation(A, v), translation(B, v), couleurCote)
  if (longueur(A, B) > 1) cote.styleExtremites = '<->'
  else cote.styleExtremites = '>-<'
  return cote
}
function definiColonnes (objetsAAfficher1: (Polygone | Segment | TexteParPoint | Latex2d | Polyline | TracePoint | NommePolygone | MarqueAngle | Vide2d | CodageAngleDroit | CodageAngle)[], objetsAAfficher2: (Polygone | Segment | TexteParPoint | Latex2d | Polyline | TracePoint | NommePolygone | MarqueAngle | Vide2d | CodageAngleDroit | CodageAngle)[], scaleDessin:number): [string, string] {
  const bord1 = fixeBordures(objetsAAfficher1, { rxmin: -0.1, rymin: -0.1, rxmax: 0.1, rymax: 0.1 })
  const bord2 = fixeBordures(objetsAAfficher2, { rxmin: -0.1, rymin: -0.1, rxmax: 0.1, rymax: 0.1 })
  const colonne1 = mathalea2d(
    Object.assign({ /* pixelsParCm: 20,  */scale: scaleDessin, optionsTikz: ['baseline=(current bounding box.north)'], mainlevee: false },
      bord1), objetsAAfficher1)
  const colonne2 = mathalea2d(
    Object.assign({ scale: scaleDessin, optionsTikz: ['baseline=(current bounding box.north)'], mainlevee: false },
      bord2), objetsAAfficher2)
  return [colonne1, colonne2]
}

export class SemiEllipsePenchee extends ObjetMathalea2D {
  centre: Point
  rx: number
  ry: number
  rayon: boolean
  hachures: string | boolean
  couleurDeRemplissage: string[]
  opaciteDeRemplissage: number
  couleurDesHachures: string[]
  epaisseurDesHachures: number
  distanceDesHachures: number
  M: Point
  N: Point
  angle: number
  large: number
  sweep: number
  constructor ({
    centre,
    rx,
    ry,
    hemisphere = 'nord',
    pointilles = 0,
    rayon = false,
    couleurDeRemplissage = 'none',
    color = 'black',
    opaciteDeRemplissage = 0.2,
    hachures = false,
    anglesAxe = 0
  }: {
    centre: Point
    rx: number
    ry: number
    hemisphere?: string
    pointilles?: number
    rayon?: boolean
    couleurDeRemplissage?: string
    color?: string
    opaciteDeRemplissage?: number
    hachures?: string | boolean
    anglesAxe?: number
  }) {
    super()
    this.centre = centre
    this.rx = rx
    this.ry = ry
    this.rayon = rayon
    this.color = colorToLatexOrHTML(color)
    this.couleurDeRemplissage = colorToLatexOrHTML(couleurDeRemplissage)
    this.opaciteDeRemplissage = opaciteDeRemplissage
    this.hachures = hachures
    this.couleurDesHachures = colorToLatexOrHTML('black')
    this.epaisseurDesHachures = 1
    this.distanceDesHachures = 10
    this.pointilles = pointilles
    this.anglesAxe = anglesAxe
    this.angle = hemisphere === 'nord' ? 180 : -180///

    this.M = point(centre.x + rx, centre.y)
    const med = homothetie(rotation(this.M, centre, this.angle / 2), centre, ry / rx) as Point

    this.large = 0
    this.sweep = 0
    if (this.angle > 180) {
      this.sweep = 0 // option pour path : permet de savoir quel morceau de cercle tracé parmi les 2 possibles. Voir https://developer.mozilla.org/fr/docs/Web/SVG/Tutorial/Paths pour plus de détails
      this.large = 1 // option pour path : permet de savoir sur un morceau de cercle choisi, quel parcours prendre.
    } else if (this.angle < -180) {
      this.large = 1
      this.sweep = 1
    } else {
      this.large = 0
      this.sweep = 1 - (this.angle > 0 ? 1 : 0)
    }
    this.N = rotation(this.M, centre, this.angle)
    this.bordures = [Math.min(this.M.x, this.N.x, med.x) - 0.1, Math.min(this.M.y, this.N.y, med.y) - 0.1, Math.max(this.M.x, this.N.x, med.x) + 0.1, Math.max(this.M.y, this.N.y, med.y) + 0.1]
  }

  svg (coeff: number) {
    if (this.rayon) {
      this.style = ''
      if (this.epaisseur !== 1) {
        this.style += ` stroke-width="${this.epaisseur}" `
      }

      switch (this.pointilles) {
        case 1:
          this.style += ' stroke-dasharray="6 10" '
          break
        case 2:
          this.style += ' stroke-dasharray="6 3" '
          break
        case 3:
          this.style += ' stroke-dasharray="3 2 6 2 " '
          break
        case 4:
          this.style += ' stroke-dasharray="1 2" '
          break
        case 5:
          this.style += ' stroke-dasharray="5 5" '
          break
      }

      if (this.hachures) {
        if (this.couleurDeRemplissage.length < 1) {
          this.couleurDeRemplissage = colorToLatexOrHTML('none')
        }

        return pattern({
          motif: String(this.hachures),
          id: this.id,
          distanceDesHachures: this.distanceDesHachures,
          epaisseurDesHachures: this.epaisseurDesHachures,
          couleurDesHachures: this.couleurDesHachures[0],
          couleurDeRemplissage: this.couleurDeRemplissage[0],
          opaciteDeRemplissage: this.opaciteDeRemplissage
        }) + `<path d="M${this.M.xSVG(coeff)} ${this.M.ySVG(coeff)} A ${this.rx * coeff} ${this.ry * coeff} 0 ${this.large} ${this.sweep} ${this.N.xSVG(coeff)} ${this.N.ySVG(coeff)} L ${this.centre.xSVG(coeff)} ${this.centre.ySVG(coeff)} Z" stroke="${this.color[0]}"  ${this.style} id="${this.id}" fill="url(#pattern${this.id})" />`
      } else {
        if (this.opacite !== 1) {
          this.style += ` stroke-opacity="${this.opacite}" `
        }
        if (this.couleurDeRemplissage[0] !== 'none' && this.couleurDeRemplissage[0] !== '') {
          this.style += ` fill-opacity="${this.opaciteDeRemplissage}" `
        }

        return `<g transform="rotate(${this.anglesAxe}, ${this.centre.xSVG(coeff)}, ${this.centre.xSVG(coeff)})"><path d="M${this.M.xSVG(coeff)} ${this.M.ySVG(coeff)} A ${this.rx * coeff} ${this.ry * coeff} 0 ${this.large} ${this.sweep} ${this.N.xSVG(coeff)} ${this.N.ySVG(coeff)} L ${this.centre.xSVG(coeff)} ${this.centre.ySVG(coeff)} Z" stroke="${this.color[0]}" fill="${this.couleurDeRemplissage[0]}" ${this.style}/>  </g>`
      }
    } else {
      this.style = ''
      if (this.epaisseur !== 1) {
        this.style += ` stroke-width="${this.epaisseur}" `
      }

      switch (this.pointilles) {
        case 1:
          this.style += ' stroke-dasharray="6 10" '
          break
        case 2:
          this.style += ' stroke-dasharray="6 3" '
          break
        case 3:
          this.style += ' stroke-dasharray="3 2 6 2 " '
          break
        case 4:
          this.style += ' stroke-dasharray="1 2" '
          break
        case 5:
          this.style += ' stroke-dasharray="5 5" '
          break
      }
      if (this.opacite !== 1) {
        this.style += ` stroke-opacity="${this.opacite}" `
      }
      this.style += ` fill-opacity="${this.opaciteDeRemplissage}" `

      return `<g transform="rotate(${this.anglesAxe}, ${this.centre.xSVG(coeff)}, ${this.centre.xSVG(coeff)})"><path d="M${this.M.xSVG(coeff)} ${this.M.ySVG(coeff)} A ${this.rx * coeff} ${this.ry * coeff} 0 ${this.large} ${this.sweep} ${this.N.xSVG(coeff)} ${this.N.ySVG(coeff)}" stroke="${this.color[0]}" fill="${this.couleurDeRemplissage[0]}" ${this.style} id="${this.id}" />  </g>`
    }
  }

  tikz () {
    let optionsDraw = ''
    const tableauOptions = []
    tableauOptions.push(`rotate=${-this.anglesAxe}`)
    if (this.color[1].length > 1 && this.color[1] !== 'black') {
      tableauOptions.push(`color=${this.color[1]}`)
    }
    if (this.epaisseur !== 1) {
      tableauOptions.push(`line width = ${this.epaisseur}`)
    }
    switch (this.pointilles) {
      case 1:
        tableauOptions.push(' dash dot ')
        break
      case 2:
        tableauOptions.push(' densely dash dot dot ')
        break
      case 3:
        tableauOptions.push(' dash dot dot ')
        break
      case 4:
        tableauOptions.push(' dotted ')
        break
      case 5:
        tableauOptions.push(' dashed ')
        break
    }

    if (this.opacite !== 1) {
      tableauOptions.push(`opacity = ${this.opacite}`)
    }

    if (this.couleurDeRemplissage[1] !== 'none' && this.couleurDeRemplissage[1] !== '') {
      tableauOptions.push(`fill opacity = ${this.opaciteDeRemplissage}`)
      tableauOptions.push(`fill = ${this.couleurDeRemplissage[1]}`)
    }

    if (this.hachures) {
      tableauOptions.push(pattern({
        motif: String(this.hachures),
        id: this.id,
        distanceDesHachures: this.distanceDesHachures,
        couleurDesHachures: this.couleurDesHachures[1],
        couleurDeRemplissage: this.couleurDeRemplissage[1],
        opaciteDeRemplissage: this.opaciteDeRemplissage
      }))
    }
    if (tableauOptions.length > 0) {
      optionsDraw = '[' + tableauOptions.join(',') + ']'
    }
    if (this.couleurDeRemplissage[1] !== 'none' && this.couleurDeRemplissage[1] !== '') return `\\filldraw  ${optionsDraw} (${this.M.x},${this.M.y}) arc [start angle=${0}, end angle = ${0 + this.angle}, x radius = ${this.rx}, y radius = ${this.ry}]; -- cycle ;`
    else return `\\draw${optionsDraw} (${this.M.x},${this.M.y}) arc [start angle=${0}, end angle = ${0 + this.angle}, x radius = ${this.rx}, y radius = ${this.ry}];`
  }

  svgml (coeff:number, amp:number) {
    this.style = ''
    let P: Point
    if (this.epaisseur !== 1) {
      this.style += ` stroke-width="${this.epaisseur}" `
    }
    if (this.opacite !== 1) {
      this.style += ` stroke-opacity="${this.opacite}" `
    }
    this.style += ' fill="none" '
    // <g transform="rotate(${this.anglesAxe}, ${this.centre.xSVG(coeff)}, ${this.centre.xSVG(coeff)})"> </g>`
    let code = `<g transform="rotate(${this.anglesAxe}, ${this.centre.xSVG(coeff)}, ${this.centre.xSVG(coeff)})"> `
    code += `<path d="M${this.M.xSVG(coeff)} ${this.M.ySVG(coeff)} S ${this.M.xSVG(coeff)} ${this.M.ySVG(coeff)}, `
    let compteur = 1
    const r = longueur(this.centre, this.M)
    for (let k = 0, variation; abs(k) <= abs(this.angle) - 2; k += this.angle < 0 ? -2 : 2) {
      variation = (random(0, 2) - 1) / r * amp / 10
      P = rotation(homothetie(this.M, this.centre, 1 + variation), this.centre, k)
      code += `${round(P.xSVG(coeff), 2)} ${round(P.ySVG(coeff), 2)}, `
      compteur++
    }
    P = rotation(this.M, this.centre, this.angle)
    if (compteur % 2 === 0) code += `${P.xSVG(coeff)} ${P.ySVG(coeff)}, ` // Parce qu'on utilise S et non C dans le path
    code += `${P.xSVG(coeff)} ${P.ySVG(coeff)}`
    code += `" stroke="${this.color[0]}" ${this.style}/>`
    code += '</g>'
    return code
  }

  tikzml (amp:number) {
    let optionsDraw = ''
    const tableauOptions = []
    tableauOptions.push(`rotate=${-this.anglesAxe}`)
    if (this.color[1].length > 1 && this.color[1] !== 'black') {
      tableauOptions.push(`color=${this.color[1]}`)
    }
    if (this.epaisseur !== 1) {
      tableauOptions.push(`line width = ${this.epaisseur}`)
    }
    if (this.opacite !== 1) {
      tableauOptions.push(`opacity = ${this.opacite}`)
    }

    tableauOptions.push(`decorate,decoration={random steps , amplitude = ${amp}pt}`)

    optionsDraw = '[' + tableauOptions.join(',') + ']'
    if (this.couleurDeRemplissage[1] !== 'none') return `\\filldraw  ${optionsDraw} (${this.M.x},${this.M.y}) arc [start angle=${0}, end angle = ${0 + this.angle}, x radius = ${this.rx}, y radius = ${this.ry}]; -- cycle ;`
    else return `\\draw${optionsDraw} (${this.M.x},${this.M.y}) arc [start angle=${0}, end angle = ${0 + this.angle}, x radius = ${this.rx}, y radius = ${this.ry}];`
  }
}

/**
 * @param {Point} centre centre de l'ellipse
 * @param {number} rx rayon en X
 * @param {number} ry rayon en Y
 * @param {string} hemisphere 'nord' pour tracer au dessus du centre, 'sud' pour tracer en dessous
 * @param {boolean | number} pointilles Si false, l'ar est en trait plein, sinon en pointillés
 * @param {boolean} rayon Si true, alors l'arc est fermé par un segment.
 * @param {string} color Facultatif, 'black' par défaut
 * @param {string} couleurDeRemplissage si 'none' alors pas de remplissage.
 * @param {number} opaciteDeRemplissage Transparence de remplissage de 0 à 1. Facultatif, 0.2 par défaut
 * @author Jean-Claude Lhote
 * @return {SemiEllipse} Objet SemiEllipse
 */
function semiEllipsePenchee ({
  centre,
  rx,
  ry,
  hemisphere = 'nord',
  pointilles = 0,
  rayon = false,
  couleurDeRemplissage = 'none',
  color = 'black',
  opaciteDeRemplissage = 0.2,
  hachures = false,
  anglesAxe = 0
}: {
  centre: Point
  rx: number
  ry: number
  hemisphere?: string
  pointilles?: number
  rayon?: boolean
  couleurDeRemplissage?: string
  color?: string
  opaciteDeRemplissage?: number
  hachures?: string | boolean
  anglesAxe?: number
}) {
  return new SemiEllipsePenchee({
    centre,
    rx,
    ry,
    hemisphere,
    pointilles,
    rayon,
    couleurDeRemplissage,
    color,
    opaciteDeRemplissage,
    anglesAxe
  })
}

/**
* Trace un cylindre
* @param {Point} centre Centre de la base
* @param {number} rx Rayon sur l'axe des abscisses
* @param {number} hauteur Distance verticale entre le centre et le sommet.
* @param {string} [position = 'DeboutVuDessus'] Facultatif, 'DeboutVuDessus' par défaut, ou 'baseAvantCoucheVuGauche' a faire : baseCoteCoucheVuDroite
* @param {string} [color = 'black'] Facultatif, 'black' par défaut
* @param {string} [couleurDeRemplissage = 'none'] none' si on ne veut pas de remplissage, sinon une couleur du type 'blue' ou du type '#f15929'
* @param {number} [opaciteDeRemplissage = 0.2] Taux d'opacité du remplissage
* @param {number} [angleDeFuite = 30] pour 'baseAvantCoucheVuDroite'
* @param {number} [coefficientDeFuite = 0.5] 'baseAvantCoucheVuDroite'
* @author Olivier Mimeau // d'après Cone de Jean-Claude Lhote
* @private
*/
export class Cylindre2d extends ObjetMathalea2D {
  centre: Point
  centre2: Point
  couleurDeRemplissage: string
  opaciteDeRemplissage: number
  stringColor: string
  constructor ({
    centre,
    rx,
    hauteur,
    position = 'DeboutVuDessus',
    couleurDeRemplissage = 'none',
    color = 'black',
    opaciteDeRemplissage = 0.2,
    angleDeFuite = 30,
    coefficientDeFuite = 0.5
  }:{
    centre: Point
    rx: number
    hauteur: number
    position?: string
    couleurDeRemplissage?: string
    color?: string
    opaciteDeRemplissage?: number
    angleDeFuite ?: number,
    coefficientDeFuite ?: number
  }) {
    super()
    let centre2 = point(centre.x + hauteur, centre.y)
    // this.centre2 = centre2 plus est modifié suivant la position
    this.centre = centre
    this.stringColor = color
    this.couleurDeRemplissage = couleurDeRemplissage
    this.opaciteDeRemplissage = opaciteDeRemplissage
    // let debutArc:Point
    // let demiCerclePlein:Arc
    // let demiCerclePointille:Arc
    switch (position) {
      case 'baseCoteCoucheVuDroite':
        centre2 = point(centre.x + hauteur, centre.y)
        this.objets = [
          semiEllipsePenchee({
            centre,
            rx,
            ry: rx / 3,
            hemisphere: 'sud',
            rayon: false,
            pointilles: 0,
            couleurDeRemplissage,
            color,
            opaciteDeRemplissage,
            hachures: false,
            anglesAxe: 90
          }),
          semiEllipsePenchee({
            centre,
            rx,
            ry: rx / 3,
            hemisphere: 'nord',
            rayon: false,
            pointilles: 1,
            couleurDeRemplissage,
            color,
            opaciteDeRemplissage,
            hachures: false,
            anglesAxe: 90
          }),
          ellipse(centre2, rx / 3, rx, color),
          segment(point(centre.x - 0.1, centre.y + rx), point(centre2.x + 0.1, centre2.y + rx), color),
          segment(point(centre.x - 0.1, centre.y - rx), point(centre2.x + 0.1, centre2.y - rx), color)
        ]
        break
      case 'baseAvantCoucheVuGauche':{
        centre2 = pointAdistance(centre, hauteur * coefficientDeFuite, angleDeFuite)
        const ey = -rx * Math.cos(angleDeFuite * Math.PI / 180)
        const ex = rx * Math.sin(angleDeFuite * Math.PI / 180)
        const debutArc = point(centre2.x + ex, centre2.y + ey)
        const demiCerclePlein = arc(debutArc, centre2, 180, false, couleurDeRemplissage, color, opaciteDeRemplissage, 'none')
        const demiCerclePointille = arc(debutArc, centre2, -180, false, couleurDeRemplissage, color, opaciteDeRemplissage, 'none')
        demiCerclePointille.pointilles = 1
        this.objets = [
          cercle(centre, rx),
          // cercle(centre, rx, color, couleurDeRemplissage, 'none', 1, 0, opaciteDeRemplissage, 1, 10),
          demiCerclePlein, demiCerclePointille,
          segment(point(centre.x + ex, centre.y + ey), point(centre2.x + ex, centre2.y + ey), color),
          segment(point(centre.x - ex, centre.y - ey), point(centre2.x - ex, centre2.y - ey), color)
        ]

        break
      }
      case 'DeboutVuDessus':
      default:
        centre2 = point(centre.x, centre.y + hauteur)
        this.objets = [
          semiEllipse({
            centre,
            rx,
            ry: rx / 3,
            hemisphere: 'nord',
            rayon: false,
            pointilles: 1,
            couleurDeRemplissage,
            color,
            opaciteDeRemplissage
          }),
          semiEllipse({
            centre,
            rx,
            ry: rx / 3,
            hemisphere: 'sud',
            rayon: false,
            pointilles: 0,
            couleurDeRemplissage,
            color,
            opaciteDeRemplissage
          }),
          ellipse(centre2, rx, rx / 3, color),
          segment(point(centre.x + rx, centre.y - 0.1), point(centre2.x + rx, centre2.y + 0.1), color),
          segment(point(centre.x - rx, centre.y - 0.1), point(centre2.x - rx, centre2.y + 0.1), color)
        ]
        break
    }
    this.centre2 = centre2
    let xMin = 1000
    let yMin = 1000
    let yMax = -1000
    let xMax = -1000
    for (const obj of this.objets) {
      xMin = Math.min(xMin, obj.bordures[0])
      yMin = Math.min(yMin, obj.bordures[1])
      xMax = Math.max(xMax, obj.bordures[2])
      yMax = Math.max(yMax, obj.bordures[3])
    }
    this.bordures = [xMin, yMin, xMax, yMax]
  }

  svg (coeff: number) {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      objet.color = colorToLatexOrHTML(this.stringColor)
      code += objet.svg(coeff) + '\n'
    }
    return code
  }

  tikz () {
    let code = ''
    if (this.objets == null) return code
    for (const objet of this.objets) {
      objet.color = colorToLatexOrHTML(this.stringColor)
      code += objet.tikz() + '\n\t'
    }
    return code
  }
}

export function cylindre2d ({
  centre,
  rx,
  hauteur,
  position,
  couleurDeRemplissage = 'none',
  color = 'black',
  opaciteDeRemplissage = 0.2,
  angleDeFuite = 30,
  coefficientDeFuite = 0.5
}:{
  centre: Point
  rx: number
  hauteur: number
  position?: string
  couleurDeRemplissage?: string
  color?: string
  opaciteDeRemplissage?: number
  angleDeFuite ?: number,
  coefficientDeFuite ?: number
}) {
  return new Cylindre2d({ centre, rx, hauteur, position, couleurDeRemplissage, color, opaciteDeRemplissage, angleDeFuite, coefficientDeFuite })
}

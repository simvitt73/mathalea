import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'

import { labelPoint, Latex2d, TexteParPoint } from '../../lib/2d/textes'
import { fixeBordures, mathalea2d, Vide2d } from '../../modules/2dGeneralites'
import { longueur, Segment, segment, vecteur } from '../../lib/2d/segmentsVecteurs'
import { CodageAngle, placeLatexSurSegment } from '../../lib/2d/codages'
import { texNombre } from '../../lib/outils/texNombre'
import { NommePolygone, Polygone, polygone, Polyline } from '../../lib/2d/polygones'
import { Point, point, pointAdistance, tracePoint, TracePoint } from '../../lib/2d/points'
import { cercle } from '../../lib/2d/cercle'
import { similitude, translation } from '../../lib/2d/transformations'
import type { CodageAngleDroit, MarqueAngle } from '../../lib/2d/angles'
import { deuxColonnesResp } from '../../lib/format/miseEnPage'
import { arrondi } from '../../lib/outils/nombres'
import { sp } from '../../lib/outils/outilString'
import { cylindre2d } from '../../lib/2d/projections3d'

export const titre = 'Calculer des longueurs avec un patron de cylindre'

export const dateDePublication = '27/04/2024'

export const uuid = 'bc788'
export const refs = {
  'fr-fr': ['5G52'],
  'fr-ch': []
}
/**
 * calculer des longueurs avec un patron de cylindre
 * @author Olivier Mimeau
*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = 'problème en  baseCoteCoucheVuDroite avec r=4'// 'Consigne'
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['CylindreVersPatron']// ['CylindreVersPatron', 'PatronVersCylindre', 'type3']
    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    const orientationCylindre = ['DeboutVuDessus', 'baseAvantCoucheVuGauche']/// ['DeboutVuDessus', 'baseCoteCoucheVuDroite', 'baseAvantCoucheVuGauche']// ['DeboutVuDessus', 'baseAvantCoucheVuDroite', 'baseCoteCoucheVuDroite']// ['DeboutVuDessus', 'DeboutVuDessous', 'baseAvantCoucheVuGauche', 'baseAvantCoucheVuDroite', 'baseCoteCoucheVuGauche', 'baseCoteCoucheVuDroite']
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
          cent2 = point(0, h, 'B', 'left')
          ext1Rayon = point(r, 0)
          ext2Rayon = point(r, h)
          segRayon = segment(cent1, ext1Rayon, 'black')
          segRayon.pointilles = 1
          rayon = placeLatexSurSegment(`${texNombre(r, 1)}\\text{ cm}`, ext1Rayon, cent1)
          hauteur = placeLatexSurSegment(`${texNombre(h, 1)}\\text{ cm}`, ext2Rayon, ext1Rayon)
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
          texte = `Question ${i + 1} de type CylindreVersPatron<br>${listetypeOrientationCylindre[i]}<br>`
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

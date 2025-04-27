import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'
import { cylindre3d, droite3d, point3d, rotation3d, translation3d, vecteur3d } from '../../modules/3d'
import { labelPoint, Latex2d, TexteParPoint } from '../../lib/2d/textes'
import { fixeBordures, mathalea2d, Vide2d } from '../../modules/2dGeneralites'
import { longueur, Segment, segment, vecteur } from '../../lib/2d/segmentsVecteurs'
import { CodageAngle, placeLatexSurSegment } from '../../lib/2d/codages'
import { texNombre } from '../../lib/outils/texNombre'
import { NommePolygone, Polygone, polygone, Polyline } from '../../lib/2d/polygones'
import { Point, point, TracePoint } from '../../lib/2d/points'
import { cercle } from '../../lib/2d/cercle'
import { similitude, translation } from '../../lib/2d/transformations'
import type { CodageAngleDroit, MarqueAngle } from '../../lib/2d/angles'
import { deuxColonnesResp } from '../../lib/format/miseEnPage'
import { arrondi } from '../../lib/outils/nombres'
import { sp } from '../../lib/outils/outilString'

export const titre = 'Calculer des longueurs avec un patron de cylindre'

export const dateDePublication = '27/04/2024'

export const uuid = 'bc788'
export const refs = {
  'fr-fr': ['5G52'],
  'fr-ch': []
}
/**
 *
 * @author
*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = 'Consigne'
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['CylindreVersPatron', 'PatronVersCylindre', 'type3']
    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    const orientationCylindre = ['DeboutVuDessus', 'DeboutVuDessous', 'CoucheVuGauche', 'CoucheVuGdroite']
    const listetypeOrientationCylindre = combinaisonListes(orientationCylindre, this.nbQuestions)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      let texteCorr = ''
      const tailleMinFigure = 7
      const scaleDessin = 0.5
      const largeurCol = 40 // en % sert pour sortie PDF et HTML ?
      const largeurHTMCol = `${tailleMinFigure * 20}px`
      const cylindre = []
      const objetsPatron = []
      const objetsPatronReponse = []

      const r = randint(2, 7) // rayon
      const h = randint(3, 10, [r]) // hauteur
      const centre1 = point3d(0, 0, 0, true, 'O', 'left')
      const bord1 = point3d(r, 0, 0, true, 'B', 'right')
      const centre2 = point3d(0, 0, h, true, 'D', 'left')
      const v = vecteur3d(centre1, bord1)
      const ptBase1 = rotation3d(bord1, droite3d(centre1, vecteur3d(centre1, centre2)), 20, 'black')
      const ptBase2 = translation3d(ptBase1, vecteur3d(centre1, centre2))
      /*       if (choice([0, 1, 2]) === 0) { // pour l'orientation du cylindre
        B = point3d(r, 0, 0)
        D = point3d(0, 0, h, true, 'D', 'left')
      } else if (choice([0, 1]) === 0) {
        B = point3d(0, r, 0)
        D = point3d(h, 0, 0, true, 'D', 'left')
      } else {
        B = point3d(0, 0, r)
        D = point3d(0, h, 0, true, 'D', 'left')
      } */

      const solideDessine = cylindre3d(centre1, centre2, v, v, 'black', false, true, false)
      const segmentRayon = segment(centre1.c2d, ptBase1.c2d, 'black')
      segmentRayon.pointilles = 1
      const rayon = placeLatexSurSegment(`${texNombre(r, 1)}\\text{ cm}`, ptBase1.c2d, centre1.c2d)
      const hauteur = placeLatexSurSegment(`${texNombre(h, 1)}\\text{ cm}`, ptBase2.c2d, ptBase1.c2d)
      cylindre.push(...solideDessine.c2d, segmentRayon, rayon, hauteur, segmentRayon, labelPoint(centre1.c2d, centre2.c2d, bord1.c2d))
      /*  const [dimlRect, dimLRect, dimRCercle] = [hauteur, Math.round(2 * Math.PI * rayon), rayon]       */
      const [dimlRect, dimLRect, dimRCercle] = [3, 9, 3] // dimLargeurRectangle
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
        /*         rLongueurPatron = placeLatexSurSegment(`${texNombre(2 * r)
                  }\\pi\\approx${texNombre(arrondi(2 * r * Math.PI, 1))}${sp()}\\text{cm}`, C, B, { distance: 1 })
 */
        rLongueurPatron = placeLatexSurSegment('\\text{....cm}', C, B, { distance: 1 })
      } else {
        coteLongueurPatron = afficheCoteSegmentSansTexte(segment(A, D), 0.5, 'black')
        qLongueurPatron = placeLatexSurSegment('\\text{.......}', A, D, { distance: 1 })
        /*         rLongueurPatron = placeLatexSurSegment(`${texNombre(2 * r)
                  }\\pi\\approx${texNombre(arrondi(2 * r * Math.PI, 1))}${sp()}\\text{cm}`, A, D, { distance: 1 })
 */ rLongueurPatron = placeLatexSurSegment('\\text{....cm}', A, D, { distance: 1 })
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
      const [colonne1, colonne2] = definiColonnes([...solideDessine.c2d, rayon, hauteur, segmentRayon], objetsPatron, scaleDessin)
      const [rColonne1, rColonne2] = definiColonnes([...solideDessine.c2d, rayon, hauteur, segmentRayon], objetsPatronReponse, scaleDessin)

      switch (listeTypeQuestions[i]) {
        case 'CylindreVersPatron':
          texte = `Question ${i + 1} de type CylindreVersPatron<br>`
          texte = 'On souhaite construire le patron  du cylindre ci-dessous. Complète le schéma du patron en indiquant les longeurs en valeur exacte si possible ou au millimètre près<br>'
          texte += deuxColonnesResp(colonne1, colonne2, {
            largeur1: largeurCol,
            eleId: '',
            widthmincol1: largeurHTMCol,
            widthmincol2: '0px'
          })
          texteCorr = `Correction ${i + 1} de type CylindreVersPatron<br>`
          texteCorr = `Le diamètre du cercle de base est 2 \\times ${r} = ${2 * r} cm<br>`
          texteCorr = `La largeur du rectangle est la hauteur du cylindre soit ${h} cm<br>`
          texteCorr = `La longueur du rectangle est égale à la longueur du cerlce de base soit 2\\times ${texNombre(r)}\\times \\pi=${texNombre(2 * r)
                  }\\pi\\approx${texNombre(arrondi(2 * r * Math.PI, 1))}${sp()}\\text{cm}$<br>`
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

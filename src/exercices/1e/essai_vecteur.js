import { abs } from '../../lib/outils/nombres.ts'
import { point, tracePoint } from '../../lib/2d/points.ts'
import { droite } from '../../lib/2d/droites.ts'
import { vecteur, longueur } from '../../lib/2d/segmentsVecteurs.ts'
import { grille } from '../../lib/2d/reperes.ts'
import { projectionOrtho } from '../../lib/2d/transformations'
import { miseEnEvidence, texteGras } from '../../lib/outils/embellissements'
import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils.js'
import { fixeBordures, mathalea2d, colorToLatexOrHTML } from '../../modules/2dGeneralites.ts'
import { labelPoint } from '../../lib/2d/textes.ts'
import { codageAngleDroit } from '../../lib/2d/angles.ts'

export const titre = 'Calculer des produits scalaires par projection'
export const uuid = 'c88fa'
export const ref = '1G10-1'
export const refs = {
  'fr-fr': ['1G10-1'],
  'fr-ch': []
}
export default class SuperExoMathalea2d extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    this.nbQuestionsModifiable = true
    // @remi : J'ai enlevé les autres paramètres qui restent à leurs valeurs par défaut
  }

  nouvelleVersion () {
    this.listeQuestions = []
    this.listeCorrections = []

    const objetsEnonce = []
    const objetsCorrection = []

    const A = point(0, 0, 'A')

    // génération aléatoire de cas de figure
    const casProjection = randint(1, 3) // projection horizontale, verticale ou angle droit "penché"
    const casPositionH = randint(1, 3) // de même sens, de sens opposé ou projeté nul

    let x1, y1, x2, y2
    function generateur () {
      return randint(3, 5) * randint(-1, 1, [0])
    }
    switch (casProjection) {
      case 1:
        x1 = generateur()
        y1 = 0
        break
      case 2:
        y1 = generateur()
        x1 = 0
        break
      case 3: { // @remi : j'ai ajouté des accolades pour délimiter le bloc de code et te permettre d'utiliser const
        const germes = [[1, 1], [1, 2], [2, 1], [3, 2], [2, 3]]
        const couple = germes[randint(0, germes.length - 1)]// On tire un germe au hasard
        let coeff = randint(-1, 1, [0]) * randint(1, 2)
        x1 = couple[0] * coeff
        y1 = couple[1] * coeff
        coeff = randint(1, 2) * randint(-1, 1, [0])
        x2 = -couple[1] * coeff
        y2 = couple[0] * coeff
      }
    }

    if (casProjection < 3) {
      switch (casPositionH) {
        case 1:
          if (x1 === 0) { // @remi : Jamais de == car '0' == 0 est vrai donc on utilise ===
            x2 = generateur()
            y2 = randint(3, 5) * y1 / abs(y1)
          } else {
            x2 = randint(3, 5) * x1 / abs(x1)
            y2 = generateur()
          }
          break
        case 2:
          if (x1 === 0) {
            x2 = generateur()
            y2 = -randint(3, 5) * y1 / abs(y1)
          } else {
            x2 = -randint(3, 5) * x1 / abs(x1)
            y2 = generateur()
          }
          break
        case 3:
          if (x1 === 0) {
            x2 = generateur()
            y2 = 0
          } else {
            x2 = 0
            y2 = generateur()
          }
          break
      }
    }
    let B, C, H, d1, d2, monCodage, pointProjete, surDroite, autrePoint, AH, autreLongueur
    if (randint(0, 1) > 0) {
      pointProjete = 'B'
      autrePoint = 'C'
      surDroite = '(AC)'

      B = point(x2, y2, 'B')
      C = point(x1, y1, 'C')
      autreLongueur = longueur(A, C)

      d1 = droite(A, C)
      d1.pointilles = 1
      d1.color = colorToLatexOrHTML('green')

      H = projectionOrtho(B, d1, 'H')
      AH = longueur(A, H)
      monCodage = codageAngleDroit(A, H, B)

      d2 = droite(B, H)
      d2.pointilles = 1
      d2.color = colorToLatexOrHTML('blue')
    } else {
      pointProjete = 'C'
      autrePoint = 'B'
      surDroite = '(AB)'

      C = point(x2, y2, 'C')
      B = point(x1, y1, 'B')
      autreLongueur = longueur(A, B)

      d1 = droite(A, B)
      d1.pointilles = 1
      d1.color = colorToLatexOrHTML('blue')

      H = projectionOrtho(C, d1, 'H')
      monCodage = codageAngleDroit(A, H, C)
      AH = longueur(A, H)

      d2 = droite(C, H)
      d2.pointilles = 1
      d2.color = colorToLatexOrHTML('green')
    }
    if (casPositionH === 3 || casProjection === 3) {
      monCodage = codageAngleDroit(B, A, C)
    }

    const g = grille(
      -8,
      -6,
      8,
      6
    )
    const u = vecteur(A, B)
    const v = vecteur(A, C)
    const w = vecteur(A, H)

    const U = u.representant(A)
    U.color = colorToLatexOrHTML('blue')
    const V = v.representant(A)
    V.color = colorToLatexOrHTML('green')
    const W = w.representant(A)
    W.color = colorToLatexOrHTML('red')
    if (casProjection === 3) {
      monCodage.color = colorToLatexOrHTML('red')
      objetsEnonce.push(g, tracePoint(A, B, C), labelPoint(A, B, C), U, V, monCodage)
    } else {
      objetsEnonce.push(g, tracePoint(A, B, C), labelPoint(A, B, C), U, V)
    }

    // (fixeBordures(ObjetsEnonce) va fixer les limites optimales de xmin, xmax, ymin, ymax à partir des bordures des objets)
    const paramsEnonce = Object.assign({}, fixeBordures(objetsEnonce), { pixelsParCm: 20, scale: 1, mainlevee: false })

    let texte = 'Calculer le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ en utilisant le quadrillage.<br>'
    texte += "L'unité correspond au côté d'un carreau de quadrillage."

    let texteCorr = ''

    if (casPositionH === 3 || casProjection === 3) {
      texteCorr += `Comme les deux vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont ${texteGras('orthogonaux')}, je déduis que $${miseEnEvidence('\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0', 'black')}$.`
      objetsCorrection.push(g, tracePoint(A, B, C), labelPoint(A, B, C), U, V, W, d1, d2, monCodage)
    } else if (casPositionH === 2) {
      texteCorr += `Soit $H$ le projeté orthogonal de  $${pointProjete}$ sur $${surDroite}$. Les vecteurs $\\overrightarrow{AH}$ et $\\overrightarrow{A${autrePoint}}$ sont ${texteGras('de sens opposés')}.<br> J'en déduis que $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = - AH \\times A${autrePoint} = -${AH} \\times ${autreLongueur}= ${miseEnEvidence(`${-AH * autreLongueur}`, 'black')}$.`
      objetsCorrection.push(g, tracePoint(A, B, C), labelPoint(A, B, C, H), U, V, W, d1, d2, monCodage)
    } else if (casPositionH === 1) {
      texteCorr += `Soit $H$ le projeté orthogonal de  $${pointProjete}$ sur $${surDroite}$. Les vecteurs $\\overrightarrow{AH}$ et $\\overrightarrow{A${autrePoint}}$ sont ${texteGras('de même sens')}.<br> J'en déduis que $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} =  AH \\times A${autrePoint} = ${AH} \\times ${autreLongueur}= ${miseEnEvidence(`${AH * autreLongueur}`, 'black')}$.`
      objetsCorrection.push(g, tracePoint(A, B, C), labelPoint(A, B, C, H), U, V, W, d1, d2, monCodage)
    }

    const paramsCorrection = Object.assign({}, fixeBordures(objetsCorrection), { pixelsParCm: 20, scale: 1, mainlevee: false })
    texte += mathalea2d(paramsEnonce, objetsEnonce)
    texteCorr += mathalea2d(paramsCorrection, objetsCorrection)
    this.listeQuestions.push(texte)
    this.listeCorrections.push(texteCorr)
    listeQuestionsToContenu(this) // On envoie l'exercice à la fonction de mise en page
  }
}

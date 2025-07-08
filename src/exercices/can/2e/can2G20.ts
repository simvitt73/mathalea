import { droite } from '../../../lib/2d/droites'
import { milieu, point, tracePoint } from '../../../lib/2d/points'
import { repere } from '../../../lib/2d/reperes'
import { segment } from '../../../lib/2d/segmentsVecteurs'
import { latex2d } from '../../../lib/2d/textes'
import { ecritureAlgebrique, rienSi1 } from '../../../lib/outils/ecritures'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceSimple from '../../ExerciceSimple'
import { mathalea2d } from '../../../modules/2dGeneralites'
import { randint } from '../../../modules/outils'
import FractionEtendue from '../../../modules/FractionEtendue'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
export const titre = 'Déterminer une équation de droite (graphique)'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '15/11/2022'
export const dateDeModifImportante = '08/07/2025'
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora

 *
*/

export const uuid = '1f967'

export const refs = {
  'fr-fr': ['can2G20'],
  'fr-ch': []
}
export default class EquationDroite extends ExerciceSimple {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.versionQcmDisponible = true
    this.formatChampTexte = KeyboardType.clavierDeBaseAvecFraction
  }

  nouvelleVersion () {
    const xA = 0
    const yA = randint(1, 4)
    const xB = randint(-4, 4, 0)
    const yB = randint(0, 4)
    const o = latex2d('\\text{O}', -0.3, -0.3, { letterSize: 'scriptsize' })
    const A = point(xA, yA)
    const B = point(xB, yB)
    const Bx = point(B.x, A.y)
    const sABx = segment(A, Bx)
    const sBBx = segment(B, Bx)
    const maFraction = new FractionEtendue(yB - yA, xB - xA)
    sBBx.epaisseur = 2
    sBBx.pointilles = 5
    sABx.epaisseur = 2
    sABx.pointilles = 5
    const lA = latex2d('A', xA, yA + 0.5, { letterSize: 'scriptsize' })
    const traceA = tracePoint(A, 'black') // Variable qui trace les points avec une croix
    const lB = latex2d('B', xB, yB + 0.5, { letterSize: 'scriptsize' })
    const lABx = latex2d(`${xB - xA}`, milieu(A, Bx).x, A.y + 0.3, { color: 'red', letterSize: 'scriptsize' })
    const lBBx = latex2d(`${yB - yA}`, B.x + 0.5, milieu(B, Bx).y, { color: 'blue', letterSize: 'scriptsize' })
    const traceB = tracePoint(B, 'black') // Variable qui trace les points avec une croix
    const d = droite(A, B, '', 'blue')
    d.epaisseur = 2
    traceA.taille = 3
    traceA.epaisseur = 2
    traceB.taille = 3
    traceB.epaisseur = 2
    const xmin = -5
    const ymin = -1
    const xmax = 5
    const ymax = 5
    const r1 = repere({
      xMin: xmin,
      xMax: xmax,
      xUnite: 1,
      yMin: ymin,
      yMax: ymax,
      yUnite: 1,
      thickHauteur: 0.1,
      xLabelMin: xmin + 1,
      xLabelMax: xmax - 1,
      yLabelMax: ymax - 1,
      yLabelMin: ymin + 1,
      axeXStyle: '->',
      axeYStyle: '->',
      yLabelDistance: 1,
      yLabelEcart: 0.3,
      grilleSecondaire: true,
      grilleSecondaireYDistance: 1,
      grilleSecondaireXDistance: 1,
      grilleSecondaireYMin: ymin - 0.1,
      grilleSecondaireYMax: ymax + 0.1,
      grilleSecondaireXMin: xmin - 0.1,
      grilleSecondaireXMax: xmax + 0.1
    })
    const objet = mathalea2d({ xmin, xmax, ymin: ymin - 0.25, ymax: ymax + 0.25, pixelsParCm: 30, scale: 0.75, style: 'margin: auto' }, d, r1, traceB, o)
    const objetC = mathalea2d({ xmin, xmax, ymin, ymax: ymax + 0.25, pixelsParCm: 30, scale: 0.75, style: 'margin: auto' }, d, r1, traceA, lA, lB, traceB, o, sABx, sBBx, lABx, lBBx)

    this.question = this.versionQcm ? '' : 'Donner l\'équation réduite de la droite.<br>'
    this.question += `${objet}`
    this.question += this.versionQcm ? '<br>L\'équation réduite de cette droite est : ' : ''
    if (yB === yA) {
      this.reponse = this.versionQcm ? `$y= ${yA}$` : [`y=${maFraction.texFraction}x + ${yA}`, `y=\\frac{${yB - yA}}{${xB - xA}}x + ${yA}`, `y=\\frac{${yA - yB}}{${xA - xB}}x + ${yA}`]
      this.correction = `La droite est horizontale. On en déduit que son coefficient directeur est $m=0$.<br>
          Son ordonnée à l'origine est $${yA}$, ainsi l'équation réduite de la droite est $${miseEnEvidence(`y=${yA}`)}$.
       `
      this.distracteurs = [`$y=x + ${yA}$`,
                `$x=${yA}$`,
              `$y=${rienSi1(yA)}x$`]
    } else {
      this.correction = `Le coefficient directeur $m$ de la droite $(AB)$ est donné par : <br>
    $m=\\dfrac{${miseEnEvidence(yB - yA, 'blue')}}{${miseEnEvidence(xB - xA, 'red')}}${maFraction.texSimplificationAvecEtapes()}$.
<br>`
      if ((yB - yA) / xB === 1) { this.correction += `Son ordonnée à l'origine est $${yA}$, ainsi l'équation réduite de la droite est $${miseEnEvidence(`y=x${yA === 0 ? '' : `${ecritureAlgebrique(yA)}`}`)}$.` }
      if ((yB - yA) / xB === -1) { this.correction += `Son ordonnée à l'origine est $${yA}$, ainsi l'équation réduite de la droite est $${miseEnEvidence(`y=-x${yA === 0 ? '' : `${ecritureAlgebrique(yA)}`}`)}$.` }
      if ((yB - yA) / xB !== -1 && (yB - yA) / xB !== 1) { this.correction += `Son ordonnée à l'origine est $${yA}$, ainsi l'équation réduite de la droite est $${miseEnEvidence(`y=${maFraction.texFractionSimplifiee}x${yA === 0 ? '' : `${ecritureAlgebrique(yA)}`}`)}$.` }
      this.correction += `<br>
          ${objetC}<br>  `
      if (yB - yA === xB - xA) {
        this.reponse = this.versionQcm ? `$y= x + ${yA}$` : [`y=${maFraction.texFraction}x + ${yA}`, `y=\\frac{${yB - yA}}{${xB - xA}}x + ${yA}`, `y=\\frac{${yA - yB}}{${xA - xB}}x + ${yA}`]
        this.distracteurs = [`$y= -x  ${ecritureAlgebrique(yA)}$`,
                `$y=${yA}$`,
              `$y= ${-yA}x  ${ecritureAlgebrique(yA)}$`]
      } else if (yB - yA === -xB + xA) {
        this.reponse = this.versionQcm ? `$y= -x + ${yA}$` : [`y=${maFraction.texFraction}x + ${yA}`, `y=\\frac{${yB - yA}}{${xB - xA}}x + ${yA}`, `y=\\frac{${yA - yB}}{${xA - xB}}x + ${yA}`]
        this.distracteurs = [`$y= x  ${ecritureAlgebrique(yA)}$`,
                `$y=${yA}$`,
              `$y= ${yA}x  ${ecritureAlgebrique(yA)}$`]
      } else {
        this.reponse = this.versionQcm ? `$y= ${maFraction.texFractionSimplifiee}x + ${yA}$` : [`y=${maFraction.texFraction}x + ${yA}`, `y=\\frac{${yB - yA}}{${xB - xA}}x + ${yA}`, `y=\\frac{${yA - yB}}{${xA - xB}}x + ${yA}`]
        this.distracteurs = [`$y= ${maFraction.multiplieEntier(-1).texFractionSimplifiee}x + ${yA}$`,
                `$y=${yA}$`,
              `$y= ${new FractionEtendue(xB - xA, yB - yA).texFractionSimplifiee}x  ${ecritureAlgebrique(yA)}$`]
      }
    }

    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}

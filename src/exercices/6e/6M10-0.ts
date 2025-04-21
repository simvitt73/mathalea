import { Tetris } from '../../lib/2d/polygones'
import { grille } from '../../lib/2d/reperes'
import { texteParPosition } from '../../lib/2d/textes'
import { ajouteQuestionMathlive } from '../../lib/interactif/questionMathLive'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { mathalea2d } from '../../modules/2dGeneralites'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Trouver une aire par comptage'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '20/04/2025'

/**
 * @author Jean-Claude Lhote
 */
export const uuid = '83be3'

export const refs = {
  'fr-fr': ['6M10-0'],
  'fr-ch': []
}
export default class AireParComptage extends Exercice {
  constructor () {
    super()
    this.besoinFormulaireTexte = ['Aire maximale', 'Nombres séparés par des tirets\n1 : Inférieure à 10\n2 : Inférieure à 20\n3 : Inférieure à 30\n4 : Mélange']
    this.sup = '4'
  }

  nouvelleVersion () {
    const typeDeQuestion = gestionnaireFormulaireTexte({ saisie: this.sup, nbQuestions: this.nbQuestions, min: 1, max: 3, melange: 4, defaut: 4 })
    for (let i = 0; i < this.nbQuestions; i++) {
      const aire = typeDeQuestion[i] === 1
        ? randint(5, 9)
        : typeDeQuestion[i] === 2
          ? randint(10, 19)
          : randint(20, 29)
      const aire2 = typeDeQuestion[i] === 1
        ? randint(5, 9)
        : typeDeQuestion[i] === 2
          ? randint(10, 19)
          : randint(20, 29)
      const tetris = new Tetris(aire, 0, 0)
      const tetris2 = new Tetris(aire2, tetris.rectangle.xMax + 1, 0)
      const xmin = tetris.rectangle.xMin - 1
      const ymin = tetris.rectangle.yMin - 1
      const decalage = tetris.rectangle.xMax + 1
      const xmax = tetris2.rectangle.xMax + decalage + 2
      const ymax = Math.max(tetris.rectangle.yMax, tetris2.rectangle.yMax) + 1
      const fig1 = texteParPosition('Figure 1', (tetris.rectangle.xMin + tetris.rectangle.xMax) / 2, tetris.rectangle.yMin - 0.5)
      const fig2 = texteParPosition('Figure 2', (tetris2.rectangle.xMin + tetris2.rectangle.xMax) / 2 + decalage, tetris2.rectangle.yMin - 0.5)
      const objets = [grille(xmin, ymin, xmax, ymax), tetris.poly, tetris2.poly, fig1, fig2]
      const figure = mathalea2d(Object.assign({ pixelsParCm: 20, scale: 0.5 }, { xmin, ymin, xmax, ymax }), objets)
      const texte = `${figure}<br><br>
Quelle sont les aires des figures ci-dessus (l'unité d'aire est le carreau) ?<br>
 ${ajouteQuestionMathlive({ exercice: this, question: 2 * i, typeInteractivite: 'mathlive', texteAvant: 'figure 1 : ', texteApres: ' unités.  ', objetReponse: { reponse: { value: aire } } })}
 ${ajouteQuestionMathlive({ exercice: this, question: 2 * i + 1, typeInteractivite: 'mathlive', texteAvant: 'figure 2 : ', texteApres: ' unités.  ', objetReponse: { reponse: { value: aire2 } } })}`
      const texteCorr = `L'aire de la figure est $${miseEnEvidence(aire)}$ unités.`
      this.listeQuestions.push(texte)
      this.listeCorrections.push(texteCorr)
    }
  }
}

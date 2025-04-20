import { Tetris } from '../../lib/2d/polygones'
import { grille } from '../../lib/2d/reperes'
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
      const tetris = new Tetris(aire, 0, 0)
      const xmin = tetris.rectangle.xMin - 1
      const ymin = tetris.rectangle.yMin - 1
      const xmax = tetris.rectangle.xMax + 1
      const ymax = tetris.rectangle.yMax + 1
      const figure = mathalea2d(Object.assign({ pixelsParCm: 20, scale: 1 }, { xmin, ymin, xmax, ymax }), [grille(xmin, ymin, xmax, ymax), tetris.poly])
      const texte = `${figure}
Quelle est l'aire de la figure ci-dessus (l'unité d'aire est le carreau) ? ${ajouteQuestionMathlive({ exercice: this, question: i, typeInteractivite: 'mathlive', objetReponse: { reponse: { value: aire } } })}`
      const texteCorr = `L'aire de la figure est $${miseEnEvidence(aire)}$ unités.`
      this.listeQuestions.push(texte)
      this.listeCorrections.push(texteCorr)
    }
  }
}

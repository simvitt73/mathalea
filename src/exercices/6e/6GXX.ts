import Exercice from '../Exercice'
import figureApigeom from '../../lib/figureApigeom'
import { listeQuestionsToContenu } from '../../modules/outils'
import Figure from 'apigeom/src/Figure'

export const titre = 'Utiliser la définition du cercle et du disque'

export const dateDePublication = '11/01/2025'
export const interactifReady = true
export const interactifType = 'custom'

export const uuid = 'abcde'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Utiliser la définition du cercle et du disque
 * @author
*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = 'Consigne'
    this.nbQuestions = 1
  }

  nouvelleVersion () {
    const figuresApiGeom = []
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      const texteCorr = ''

      figuresApiGeom[i] = new Figure({ xMin: -5.5, yMin: -5.5, width: 330, height: 330 })

      figuresApiGeom[i].setToolbar({ tools: ['POINT', 'LINE', 'DRAG', 'REMOVE'], position: 'top' })
      figuresApiGeom[i].create('Grid')
      figuresApiGeom[i].options.color = 'blue'
      texte = figureApigeom({ exercice: this, i, figure: figuresApiGeom[i], idAddendum: '6GXX' + i, defaultAction: 'NAME_POINT' })
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

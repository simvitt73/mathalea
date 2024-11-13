import DragAndDrop from '../../lib/interactif/DragAndDrop'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { choice } from '../../lib/outils/arrayOutils'
import { nombreEnLettres } from '../../modules/nombreEnLettres'
import { randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Lire une puissance'
export const interactifReady = true
export const interactifType = 'dnd'
export const dateDePublication = '12/11/2024'
export const uuid = 'a9001'
export const refs = {
  'fr-fr': ['3C10-4'],
  'fr-ch': []
}

export default class LireUnePuissance extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 5
    this.besoinFormulaireCaseACocher = ['avec des mantisses négatives', false]
    // this.besoinFormulaire2CaseACocher = ['avec des exposants négatifs', false]
    this.dragAndDrops = []
  }

  nouvelleVersion (): void {
    this.dragAndDrops = []
    const etiquettes = [
      { id: '1', contenu: 'deux' },
      { id: '2', contenu: 'trois' },
      { id: '3', contenu: 'quatre' },
      { id: '4', contenu: 'cinq' },
      { id: '5', contenu: 'six' },
      { id: '6', contenu: 'sept' },
      { id: '7', contenu: 'huit' },
      { id: '8', contenu: 'neuf' },
      { id: '9', contenu: 'moins' },
      { id: '10', contenu: 'exposant' }
    ]
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const mantisse = randint(2, 9) * (this.sup ? choice([1, -1]) : 1)
      const mantisseEnLettres = `${mantisse < 0 ? 'moins ' : ''}${nombreEnLettres(Math.abs(mantisse))}`
      const mantisseEtiquette = etiquettes.find(e => e.contenu === nombreEnLettres(Math.abs(mantisse)))
      const mantisseId = mantisseEtiquette?.id ?? '1'
      const exposant = choice([2, 3, 4, 5, 6, 7, 8, 9], [Math.abs(mantisse)])// * (this.sup2 ? choice([1, -1]) : 1)
      const exposantEnLettres = `${exposant < 0 ? 'moins ' : ''}${nombreEnLettres(Math.abs(exposant))}`
      const exposantEtiquette = etiquettes.find(e => e.contenu === nombreEnLettres(Math.abs(exposant)))
      const exposantId = exposantEtiquette?.id ?? '2'
      const texte = `Comment se lit : $${mantisse < 0 ? `(${String(mantisse)})` : String(mantisse)}^{${exposant}}$ ? `
      const enonceATrous = '%{rectangle1} %{rectangle2} %{rectangle3} %{rectangle4} %{rectangle5}'

      const leDragAndDrop = new DragAndDrop({ exercice: this, question: i, consigne: 'Écrire avec les étiquettes disponibles.', etiquettes, enonceATrous })

      const value = `"${mantisseEnLettres} exposant ${exposantEnLettres}" ou "${mantisseEnLettres} à la puissance ${exposantEnLettres}"`
      const texteCorr = `$${mantisse < 0 ? `(${String(mantisse)})` : String(mantisse)}^{${exposant}}$ se lit : ${value}.`
      if (this.questionJamaisPosee(i, mantisse, exposant)) {
        this.dragAndDrops.push(leDragAndDrop)
        this.listeQuestions.push(texte + leDragAndDrop.ajouteDragAndDrop())
        handleAnswers(this, i, {
          rectangle1: {
            value: mantisse < 0
              ? '9'
              : mantisseId
          },
          rectangle2: {
            value: mantisse < 0
              ? mantisseId
              : '10'
          },
          rectangle3: {
            value: mantisse < 0
              ? '10'
              : exposant < 0
                ? '9'
                : exposantId
          },
          rectangle4: {
            value: mantisse > 0
              ? ''
              : exposant < 0
                ? '9'
                : exposantId
          },
          rectangle5: {
            value: mantisse > 0
              ? ''
              : exposant < 0
                ? exposantId
                : ''
          }
        }, { formatInteractif: 'dnd' })
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
  }
}

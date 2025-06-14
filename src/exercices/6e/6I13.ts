import { PatternNumerique } from '../../lib/2d/polygones'
import { shuffle } from '../../lib/outils/arrayOutils'
import Exercice from '../Exercice'
import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { ajouteQuestionMathlive } from '../../lib/interactif/questionMathLive'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { gestionnaireFormulaireTexte } from '../../modules/outils'
import { shapeCarre, shapeCarreArrondi, shapeChat, shapeEtoile4Branches, shapeSoleil } from '../../lib/2d/figures2d/shapes2d'
import { listePatternsPreDef, type PatternRiche } from '../../lib/2d/patterns/patternsPreDef'
import { createList } from '../../lib/format/lists'
import { texNombre } from '../../lib/outils/texNombre'

export const titre = 'Comprendre un algorithme itératif'
export const interactifReady = true
export const interactifType = 'mathLive'

// Gestion de la date de publication initiale
export const dateDePublication = '10/06/2025'

/**
 * Étudier les premiers termes d'une série de motifs afin de donner le nombre de formes du motif suivant.
 * Les patterns sont des motifs numériques qui évoluent selon des règles définies.
 * Cet exercice contient des patterns issus de l'excellent site : https://www.visualpatterns.org/
 * @author Jean-Claude Lhote
 */
export const uuid = '328b3'

export const refs = {
  'fr-fr': ['6I13'],
  'fr-ch': []
}
/* Fonctions pour aléatoiriser des patterns... peut-être une mauvaise idée.
const fonctions = [
  function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      if (y === 0) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x, y + 1]))
        newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      } else {
        newCells.add(PatternNumerique.coordToKey([x, y]))
      }
    }
    return newCells
  },
  function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      newCells.add(PatternNumerique.coordToKey([x, y]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y + 1]))
    }
    return newCells
  },
  function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      let replaced = false
      // Check neighbor below
      if (this.hasCell(x, y - 1)) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x, y + 1]))
        replaced = true
      }

      // Check neighbor to the left
      if (this.hasCell(x - 1, y)) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
        newCells.add(PatternNumerique.coordToKey([x + 1, y]))
        replaced = true
      }

      // If no replacement triggered, keep original cell
      if (!replaced) {
        newCells.add(PatternNumerique.coordToKey([x, y]))
      }
    }
    return newCells
  },
  function (this: PatternNumerique) {
    const newCells = new Set<string>()
    for (const key of this.cells) {
      const [x, y] = PatternNumerique.keyToCoord(key)
      newCells.add(PatternNumerique.coordToKey([x, y]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y]))
      newCells.add(PatternNumerique.coordToKey([x, y + 1]))
      newCells.add(PatternNumerique.coordToKey([x + 1, y + 1]))
    }
    return newCells
  }
]
*/
export default class PaternNum0 extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 3
    this.comment = `Étudier les premiers termes d'une série de motifs afin de donner le nombre de formes du motif suivant.\n
 Les patterns sont des motifs numériques qui évoluent selon des règles définies.\n
 Cet exercice contient des patterns issus de l'excellent site : https://www.visualpatterns.org/`
    this.besoinFormulaireNumerique = ['Nombre de figures par question', 4]
    this.sup = 3
    // this.besoinFormulaire2Texte = ['Types de motifs', 'Nombres séparés par des tirets\n1: Motifs prédéfinis (nombre limité de cas)\n2 : Motifs aléatoires (plus de variété)\n3 : Mélange (jusqu’à épuisement des motifs prédéfinis)']
    this.sup2 = '1'
    this.besoinFormulaire3Texte = ['formes', 'Nombres séparés par des tirets\n1: Carrés\n2 : Étoile\n3 : Carrés arrondis\n4: Chat\n5 : Soleil\n6 : Mélange']
    this.sup3 = '6'
    this.besoinFormulaire4Texte = ['Types de questions', 'Nombres séparés par des tirets\n1: Motif suivant à dessiner\n2 : Motif suivant (nombre)\n3 : Motif 10 (nombre)\n4 : Motif 42 (nombre)\n5 : Motif 100 (nombre)\n6 : Question au hasard parmi les 4 précédentes']
    this.sup4 = '6'
  }

  nouvelleVersion (): void {
    const nbFigures = Math.max(2, this.sup)
    // const typesMotifs = gestionnaireFormulaireTexte({ saisie: this.sup2, min: 1, max: 2, defaut: 3, melange: 3, nbQuestions: this.nbQuestions }).map(Number)
    const formes = gestionnaireFormulaireTexte({ saisie: this.sup3, min: 1, max: 5, defaut: 6, melange: 6, nbQuestions: this.nbQuestions }).map(Number)
    const listePreDef = shuffle(listePatternsPreDef)
    const patterns : PatternNumerique[] = []
    const typesQuestions = Array.from(new Set(gestionnaireFormulaireTexte({ saisie: this.sup4, min: 1, max: 5, defaut: 1, melange: 6, nbQuestions: 5, shuffle: false }).map(Number)))
    const pat: PatternRiche[] = []
    for (let i = 0; i < this.nbQuestions; i++) {
    //  if (typesMotifs[i] === 1 && listePreDef.length > 0) {
      const popped = listePreDef.pop()
      if (!popped) {
        continue
      }
      pat[i] = popped
      const pattern = pat[i].pattern
      pattern.iterate = pat[i].iterate
      patterns.push(pattern)
      // patterns.push(listePreDef.pop() as PatternNumerique)
      /*  } else {
        let pattern: PatternNumerique
        let cpt = 0
        do {
          const setIninial = shuffle([
            [0, 0], [0, 1], [1, 0], [1, 1],
            [2, 0], [2, 1],
            [0, 2], [1, 2], [2, 2]]
          ).slice(0, randint(2, 5))
          pattern = new PatternNumerique(setIninial.map(coord => [coord[0], coord[1]].join(',')))
          pattern.iterate = choice(fonctions)
          cpt++
        } while (cpt < 10 && pattern.render(1, 0, 0).length === pattern.render(3, 0, 0).length)
        patterns.push(pattern)
      */

      switch (formes[i]) {
        case 2:
          patterns[i].shape = shapeEtoile4Branches()
          break
        case 3:
          patterns[i].shape = shapeCarreArrondi()
          break
        case 4:
          patterns[i].shape = shapeChat()
          break
        case 5:
          patterns[i].shape = shapeSoleil()
          break
        case 1:
        default:
          patterns[i].shape = shapeCarre()
          break
      }
    }
    let indexInteractif = 0
    for (let i = 0; i < this.nbQuestions;) {
      const objets: NestedObjetMathalea2dArray = []
      const pattern = patterns[i]
      const objetsCorr = pattern.render(nbFigures + 1, 0, 0)
      let yMax = 0

      let texte = `Voici les ${nbFigures} premiers motifs d'une série de motifs numériques. Ils évoluent selon des règles définies.<br>`
      let objet = pattern.render(1, 0, 0)
      for (let j = 1; j <= nbFigures; j++) {
        objets.push(objet)
        const { xmax, ymax } = fixeBordures(objet, { rxmin: 0.5, rymin: 0, rxmax: 0.5, rymax: 0 })
        yMax = Math.max(yMax, ymax)
        objet = pattern.render(j + 1, xmax + 1, 0)
      }
      texte += mathalea2d(Object.assign(fixeBordures(objets, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { ymax: yMax + 1, scale: nbFigures === 3 ? 0.5 : 0.4 }), objets)
      let texteCorr = ''
      const listeQuestions: string[] = []
      const listeCorrections: string[] = []
      for (const q of typesQuestions) {
        switch (q) {
          case 1:
            listeQuestions.push('\nDessiner le motif suivant.<br>')
            listeCorrections.push(`Voici le motif suivant :<br>
              ${mathalea2d(Object.assign(fixeBordures(objetsCorr, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { scale: nbFigures === 3 ? 0.5 : 0.4 }), objetsCorr)}`)
            break
          case 2:{
            const nbFormes = pat[i].fonction(nbFigures + 1)

            listeQuestions.push(`\nQuel sera le nombre de formes dans le motif suivant ?${ajouteQuestionMathlive(
            {
exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: nbFormes.toString() } },
              typeInteractivite: 'mathlive'
            }
          )}<br>`)
            listeCorrections.push(`Le motif suivant contient $${miseEnEvidence(texNombre(nbFormes, 0))}$ formes.<br>
          ${mathalea2d(Object.assign(fixeBordures(objetsCorr, { rxmin: -1, rymin: 0, rxmax: 0, rymax: 1 }), { scale: nbFigures === 3 ? 0.5 : 0.4 }), objetsCorr)}`)
          }
            break
          case 3:
            listeQuestions.push(`\nQuel sera le nombre de formes pour le motif 10 ?${ajouteQuestionMathlive(
            {
              exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: pat[i].fonction(10) } },
              typeInteractivite: 'mathlive'
              }
            )}
            <br>`)
            listeCorrections.push(`Le motif $10$ contient $${miseEnEvidence(pat[i].fonction(10))}$ formes.<br>
            En effet, la formule pour trouver le nombre de formes est : $${miseEnEvidence(pat[i].formule.replaceAll('n', '10'))}$.<br>`)
            break
          case 4:
            listeQuestions.push(`\nQuel sera le nombre de formes pour le motif $42$ ?${ajouteQuestionMathlive(
            {
              exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: pat[i].fonction(42) } },
              typeInteractivite: 'mathlive'
              }
            )}
            <br>`)
            listeCorrections.push(`Le motif $42$ contient $${miseEnEvidence(pat[i].fonction(42))}$ formes.<br>
            En effet, la formule pour trouver le nombre de formes est : $${miseEnEvidence(pat[i].formule.replaceAll('n', '42'))}$.<br>`)
            break
          case 5:
            listeQuestions.push(`\nQuel sera le nombre de formes pour le motif $100$ ?${ajouteQuestionMathlive(
            {
              exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: pat[i].fonction(100) } },
              typeInteractivite: 'mathlive'
              }
            )}
            <br>`)
            listeCorrections.push(`Le motif $100$ contient $${miseEnEvidence(pat[i].fonction(100))}$ formes.<br>
            En effet, la formule pour trouver le nombre de formes est : $${miseEnEvidence(pat[i].formule.replaceAll('n', '100'))}$.<br>`)
            break
        }
      }
      texte += listeQuestions.length === 1
        ? listeQuestions[0]
        : createList({
          items: listeQuestions,
          style: 'alpha',
        })
      texteCorr += listeCorrections.length === 1
        ? listeCorrections[0]
        : createList({
          items: listeCorrections,
          style: 'alpha',
        })
      this.listeQuestions.push(texte)
      this.listeCorrections.push(texteCorr)
      i++
    }
  }
}

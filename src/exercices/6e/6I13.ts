import { PatternNumerique, polygone } from '../../lib/2d/polygones'
import { shuffle } from '../../lib/outils/arrayOutils'
import Exercice from '../Exercice'
import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { ajouteQuestionMathlive } from '../../lib/interactif/questionMathLive'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { gestionnaireFormulaireTexte } from '../../modules/outils'
import { shapeCarre, shapeCarreArrondi, shapeChat, shapeCubeIso, shapeCubeIsoRot40, shapeEtoile4Branches, shapeSoleil } from '../../lib/2d/figures2d/shapes2d'
import { listePatternsPreDef, type PatternRiche } from '../../lib/2d/patterns/patternsPreDef'
import { createList } from '../../lib/format/lists'
import { texNombre } from '../../lib/outils/texNombre'
import { texteParPosition } from '../../lib/2d/textes'
import { point } from '../../lib/2d/points'
import { arrondi } from '../../lib/outils/nombres'

export const titre = 'Comprendre un algorithme itératif'
export const interactifReady = true
export const interactifType = 'mathLive'

// Gestion de la date de publication initiale
export const dateDePublication = '10/06/2025'

/**
 * Étudier les premiers termes d'une série de motifs afin de donner le nombre de formes ${['e','a','é','i','o','u','y','è','ê'].includes(pattern.shape.name[0]) ? 'd\'':'de'}${pattern.shape.name} du motif suivant.
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

      if (pat[i].shapeDefault.name === 'cube') {
        patterns[i].shape = shapeCubeIso()
      } else if (pat[i].shapeDefault.name === 'cube-rot10') {
        patterns[i].shape = shapeCubeIsoRot40()
      } else {
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
          case 6:
            patterns[i].shape = shapeCubeIso()
            break
          case 1:
          default:
            patterns[i].shape = shapeCarre()
            break
        }
      }
    }
    let indexInteractif = 0
    for (let i = 0; i < this.nbQuestions;) {
      const pattern = patterns[i]
      const objetsCorr = pattern.render(nbFigures + 1, 0, 0)
      let yMax = 0
      let yMin = 0
      let texte = `Voici les ${nbFigures} premiers motifs d'une série de motifs numériques. Ils évoluent selon des règles définies.<br>`
      let objet = pattern.render(1, 0, 0)
      const figures: NestedObjetMathalea2dArray[] = []
      for (let j = 1; j <= nbFigures; j++) {
        figures[j - 1] = []
        figures[j - 1].push(objet)
        const { xmax, ymax, xmin, ymin } = fixeBordures(objet, { rxmin: 0.5, rymin: 0, rxmax: 0.5, rymax: 0 })
        figures[j - 1].push(texteParPosition(`Motif ${j}`, (xmax + xmin - 1) / 2, -1, 0, 'black', 0.8, 'milieu'))
        const cadre = polygone(point(xmin - 1, -1.5), point(xmax, -1.5), point(xmax, ymax + 1), point(xmin - 1, ymax + 1))
        cadre.pointilles = 4
        figures[j - 1].push(cadre)
        yMax = Math.max(yMax, ymax)
        yMin = Math.min(yMin, ymin)
        objet = pattern.render(j + 1, xmax + 1, 0)
      }
      texte += figures.map((fig, index) => mathalea2d(Object.assign(fixeBordures(fig, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { pixelsParCm: arrondi(20 * 0.9 ** index, 2), yMax, yMin, scale: arrondi(0.4 * 0.9 ** index, 2), style: 'display: inline-block' }), fig)).join('\n')
      let texteCorr = ''
      const listeQuestions: string[] = []
      const listeCorrections: string[] = []
      for (const q of typesQuestions) {
        switch (q) {
          case 1:
            listeQuestions.push(`\nDessiner le motif $${nbFigures + 1}$.<br>`)
            listeCorrections.push(`Voici le motif $${nbFigures + 1}$ :<br>
              ${mathalea2d(Object.assign(fixeBordures(objetsCorr, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { scale: nbFigures === 3 ? 0.5 : 0.4 }), objetsCorr)}`)
            break
          case 2:{
            const nbFormes = pat[i].fonction(nbFigures + 1)

            listeQuestions.push(`\nQuel sera le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s dans le motif $${nbFigures + 1}$ ?<br>${ajouteQuestionMathlive(
            {
exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: nbFormes.toString() } },
              typeInteractivite: 'mathlive'
            }
          )}`)
            listeCorrections.push(`Le motif $${nbFigures + 1}$ contient $${miseEnEvidence(texNombre(nbFormes, 0))}$ formes ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s.<br>
          ${mathalea2d(Object.assign(fixeBordures(objetsCorr, { rxmin: -1, rymin: 0, rxmax: 0, rymax: 1 }), { scale: nbFigures === 3 ? 0.5 : 0.4 }), objetsCorr)}`)
          }
            break
          case 3:{
            const nbFormes = pat[i].fonction(10)
            listeQuestions.push(`\nQuel sera le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s pour le motif $10$ ?<br>${ajouteQuestionMathlive(
            {
              exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: nbFormes } },
              typeInteractivite: 'mathlive'
              }
            )}
            `)
            listeCorrections.push(`Le motif $10$ contient $${miseEnEvidence(nbFormes)}$ formes ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s.<br>
            En effet, la formule pour trouver le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s est : $${miseEnEvidence(pat[i].formule.replaceAll('n', '10'))}$.<br>`)
          }
            break
          case 4:{
            const nbFormes = pat[i].fonction(43)

            listeQuestions.push(`\nQuel sera le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s pour le motif $43$ ?<br>${ajouteQuestionMathlive(
            {
              exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: nbFormes } },
              typeInteractivite: 'mathlive'
              }
            )}
            `)
            listeCorrections.push(`Le motif $43$ contient $${miseEnEvidence(nbFormes)}$ formes ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s.<br>
            En effet, la formule pour trouver le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s est : $${miseEnEvidence(pat[i].formule.replaceAll('n', '43'))}$.<br>`)
          }
            break
          case 5:{
            const nbFormes = pat[i].fonction(100)
            listeQuestions.push(`\nQuel sera le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s pour le motif $100$ ?<br>${ajouteQuestionMathlive(
            {
              exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: nbFormes } },
              typeInteractivite: 'mathlive'
              }
            )}
            `)
            listeCorrections.push(`Le motif $100$ contient $${miseEnEvidence(nbFormes)}$ formes ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s.<br>
            En effet, la formule pour trouver le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s est : $${miseEnEvidence(pat[i].formule.replaceAll('n', '100'))}$.<br>`)
          }
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

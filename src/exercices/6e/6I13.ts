import { polygone } from '../../lib/2d/polygones'
import { shuffle } from '../../lib/outils/arrayOutils'
import Exercice from '../Exercice'
import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { ajouteQuestionMathlive } from '../../lib/interactif/questionMathLive'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { gestionnaireFormulaireTexte } from '../../modules/outils'
import { balleDef, carreDef, carreRondDef, chatDef, etoileDef, hexagoneDef, listeShapes2D, listeShapes2DNames, losangeDef, redCrossDef, rondDef, shapeBalle, shapeCarre, shapeCarreArrondi, shapeChat, shapeEtoile4Branches, shapeHexagone, shapeLosange, shapeRedCross, shapeRond, shapeSoleil, shapeTortue, shapeTriangleEquilateral, soleilDef, tortueDef, triangleEquilateralDef } from '../../lib/2d/figures2d/shapes2d'
import { listePatternsPreDef, type PatternRiche, type PatternRiche3D } from '../../lib/2d/patterns/patternsPreDef'
import { createList } from '../../lib/format/lists'
import { texNombre } from '../../lib/outils/texNombre'
import { texteParPosition } from '../../lib/2d/textes'
import { point } from '../../lib/2d/points'
// import type { VisualPattern } from '../../lib/2d/patterns/VisualPattern'
import { cubeDef, project3dIso, Shape3D, shapeCubeIso, updateCubeIso } from '../../lib/2d/figures2d/Shape3d'
import { VisualPattern3D } from '../../lib/2d/patterns/VisualPattern3D'
import { context } from '../../modules/context'

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

export default class PaternNum0 extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 3
    this.comment = `Étudier les premiers termes d'une série de motifs afin de donner le nombre de formes du motif suivant.\n
 Les patterns sont des motifs numériques qui évoluent selon des règles définies.\n
 Cet exercice contient des patterns issus de l'excellent site : https://www.visualpatterns.org/`
    this.besoinFormulaireNumerique = ['Nombre de figures par question', 4]
    this.sup = 3
    this.besoinFormulaire3Texte = ['formes', 'Nombres séparés par des tirets\n1: Carrés\n2 : Étoile\n3 : Carrés arrondis\n4: Chat\n5 : Soleil\n6 : Losange\n7 : Hexagone\n8: Cercle\n9: Balle de tennis\n10 : tortue\n11 : triangle\n12 : croix rouge\n13 : Mélange']
    this.sup3 = '13'
    this.besoinFormulaire4Texte = ['Types de questions', 'Nombres séparés par des tirets\n1: Motif suivant à dessiner\n2 : Motif suivant (nombre)\n3 : Motif 10 (nombre)\n4 : Motif 42 (nombre)\n5 : Motif 100 (nombre)\n6 : Question au hasard parmi les 4 précédentes']
    this.sup4 = '6'
    this.besoinFormulaire5Numerique = ['Numéro de pattern (uniquement si 1 seule question)', 100,]
    this.sup5 = 1
  }

  nouvelleVersion (): void {
    if (this.sup5 > listePatternsPreDef.length) {
      this.sup5 = listePatternsPreDef.length
    }
    if (this.sup5 < 1) {
      this.sup5 = 1
    }

    const listePreDef = this.nbQuestions === 1
      ? [listePatternsPreDef[Number(this.sup5) - 1]]
      : shuffle(listePatternsPreDef.slice(0, this.sup2 ?? listePatternsPreDef.length))
    const nbFigures = Math.max(2, this.sup)
    // const typesMotifs = gestionnaireFormulaireTexte({ saisie: this.sup2, min: 1, max: 2, defaut: 3, melange: 3, nbQuestions: this.nbQuestions }).map(Number)
    const formes = gestionnaireFormulaireTexte({ saisie: this.sup3, min: 1, max: 12, defaut: 13, melange: 13, nbQuestions: this.nbQuestions }).map(Number)
    // const patterns : (VisualPattern | VisualPattern3D)[] = []
    const typesQuestions = Array.from(new Set(gestionnaireFormulaireTexte({ saisie: this.sup4, min: 1, max: 5, defaut: 1, melange: 6, nbQuestions: 5, shuffle: false }).map(Number)))
    let indexInteractif = 0
    for (let i = 0; i < this.nbQuestions;) {
      const objetsCorr: NestedObjetMathalea2dArray = []
      const popped = listePreDef.pop()
      if (!popped) {
        continue
      }
      const pat = popped
      const pattern = pat.pattern

      //  patterns.push(pattern)

      if (pattern instanceof VisualPattern3D) {
        pattern.shape = (pat as PatternRiche3D).shapeDefault as Shape3D ?? shapeCubeIso() as Shape3D
        pattern.iterate3d = (pat as PatternRiche3D).iterate3d
        objetsCorr.push(cubeDef(`cubeIsoQ${i}F0`))
      } else {
        pattern.shape = listeShapes2D[listeShapes2DNames[formes[i]]]
        pattern.iterate = (pat as PatternRiche).iterate
        switch (formes[i]) {
          case 2:
            pattern.shape = shapeEtoile4Branches
            pattern.shape0 = 'étoile'
            pattern.shape1 = 'étoile'
            objetsCorr.push(etoileDef)
            break
          case 3:
            pattern.shape = shapeCarreArrondi
            pattern.shape0 = 'carréRond'
            pattern.shape1 = 'carréRond'
            objetsCorr.push(carreRondDef)
            break
          case 4:
            pattern.shape = shapeChat
            pattern.shape0 = 'chat'
            pattern.shape1 = 'chat'
            objetsCorr.push(chatDef)
            break
          case 5:
            pattern.shape = shapeSoleil
            pattern.shape0 = 'soleil'
            pattern.shape1 = 'soleil'
            objetsCorr.push(soleilDef)
            break
          case 6:
            pattern.shape = shapeLosange
            pattern.shape0 = 'losange'
            pattern.shape1 = 'losange'
            objetsCorr.push(losangeDef)
            break
          case 7:
            pattern.shape = shapeHexagone
            pattern.shape0 = 'hexagone'
            pattern.shape1 = 'hexagone'
            objetsCorr.push(hexagoneDef)
            break
          case 8:
            pattern.shape = shapeRond
            pattern.shape0 = 'rond'
            pattern.shape1 = 'rond'
            objetsCorr.push(rondDef)
            break
          case 9:
            pattern.shape = shapeBalle
            pattern.shape0 = 'balle'
            pattern.shape1 = 'balle'
            objetsCorr.push(balleDef)
            break
          case 10:
            pattern.shape = shapeTortue
            pattern.shape0 = 'tortue'
            pattern.shape1 = 'tortue'
            objetsCorr.push(tortueDef)
            break
          case 11:
            pattern.shape = shapeTriangleEquilateral
            pattern.shape0 = 'triangle'
            pattern.shape1 = 'triangle'
            objetsCorr.push(triangleEquilateralDef)
            break
          case 12:
            pattern.shape = shapeRedCross
            pattern.shape0 = 'redCross'
            pattern.shape1 = 'redCross'
            objetsCorr.push(redCrossDef)
            break
          case 1:
          default:
            pattern.shape = shapeCarre
            pattern.shape0 = 'carré'
            pattern.shape1 = 'carré'
            objetsCorr.push(carreDef)
            break
        }
      }

      const rendered = pattern.render(nbFigures + 1, 0, 0, Math.PI / 6)
      objetsCorr.push(...rendered)
      let yMax = 0
      let yMin = 0
      const angle = Math.PI / 6
      let texte = `Voici les ${nbFigures} premiers motifs d'une série de motifs numériques. Ils évoluent selon des règles définies.<br>`
      const figures: NestedObjetMathalea2dArray[] = []
      for (let j = 0; j < nbFigures; j++) {
        figures[j] = []
        if (pattern instanceof VisualPattern3D) {
          figures[j].push(cubeDef(`cubeIsoQ${i}F${j}`))
        } else {
          switch (formes[i]) {
            case 2:
              figures[j].push(etoileDef)
              break
            case 3:
              figures[j].push(carreRondDef)
              break
            case 4:
              figures[j].push(chatDef)
              break
            case 5:
              figures[j].push(soleilDef)
              break
            case 6:
              figures[j].push(losangeDef)
              break
            case 7:
              figures[j].push(hexagoneDef)
              break
            case 8:
              figures[j].push(rondDef)
              break
            case 9:
              figures[j].push(balleDef)
              break
            case 10:
              figures[j].push(tortueDef)
              break
            case 11:
              figures[j].push(triangleEquilateralDef)
              break
            case 12:
              figures[j].push(redCrossDef)
              break
            case 1:
            default:
              figures[j].push(carreDef)
              break
          }
        }

        let xmin = Infinity
        let ymin = Infinity
        let xmax = -Infinity
        let ymax = -Infinity
        if (pattern instanceof VisualPattern3D) {
          if (context.isHtml) {
            updateCubeIso(pattern, i, j, angle)
            pattern.shape.codeSvg = `<use href="#cubeIsoQ${i}F${j}"></use>`
            const cells = (pattern as VisualPattern3D).render3d(j + 1)
            // Ajouter les SVG générés par svg() de chaque objet
            cells.forEach(cell => {
              const [px, py] = project3dIso(cell[0], cell[1], cell[2], angle)
              const obj = shapeCubeIso(`cubeIsoQ${i}F${j}`, px, py)
              figures[j].push(obj)
              ymin = Math.min(ymin, -py / 20)
              ymax = Math.max(ymax, -py / 20)
              xmin = Math.min(xmin, px / 20)
              xmax = Math.max(xmax, px / 20)
            })
            xmin -= 1
            xmax += 1
          } else {
            figures[j].push(...(pattern as VisualPattern3D).render(j + 1, 0, 0, Math.PI / 6))
            ;({ xmin, ymin, xmax, ymax } = fixeBordures(figures[j]))
          }
        } else {
          figures[j].push(...pattern.render(j + 1, 0, 0))
          ;({ xmin, ymin, xmax, ymax } = fixeBordures(figures[j]))
        }
        figures[j].push(texteParPosition(`Motif ${j + 1}`, (xmax + xmin + 1) / 2, ymin - 1.5, 0, 'black', 0.8, 'milieu'))
        const cadre = polygone(point(xmin - 1, ymin - 2), point(xmax + 2, ymin - 2), point(xmax + 2, ymax + 2), point(xmin - 1, ymax + 2))
        cadre.pointilles = 4
        figures[j].push(cadre)
        yMax = Math.max(yMax, ymax)
        yMin = Math.min(yMin, ymin)
      }
      texte += figures.map((fig, index) => mathalea2d(Object.assign(fixeBordures(fig, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { id: `Motif${i}F${index}`, pixelsParCm: 20, yMax, yMin, scale: 0.4, style: 'display: inline-block', optionsTikz: 'transform shape' }), fig)).join('\n')
      let texteCorr = ''
      const listeQuestions: string[] = []
      const listeCorrections: string[] = []
      for (const q of typesQuestions) {
        switch (q) {
          case 1:
            listeQuestions.push(`\nDessiner le motif $${nbFigures + 1}$.<br>`)
            listeCorrections.push(`Voici le motif $${nbFigures + 1}$ :<br>
              ${mathalea2d(Object.assign(fixeBordures(objetsCorr, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { scale: 0.4, optionsTikz: 'transform shape' }), objetsCorr)}`)
            break
          case 2:{
            const nbFormes = pat.fonction(nbFigures + 1)

            listeQuestions.push(`\nQuel sera le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s dans le motif $${nbFigures + 1}$ ?<br>${ajouteQuestionMathlive(
            {
exercice: this,
              question: indexInteractif++,
              objetReponse: { reponse: { value: nbFormes.toString() } },
              typeInteractivite: 'mathlive'
            }
          )}`)
            listeCorrections.push(`Le motif $${nbFigures + 1}$ contient $${miseEnEvidence(texNombre(nbFormes, 0))}$ formes ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s.<br>
          ${!typesQuestions.includes(1) ? mathalea2d(Object.assign(fixeBordures(objetsCorr, { rxmin: -1, rymin: 0, rxmax: 0, rymax: 1 }), { scale: 0.4, optionsTikz: 'transform shape' }), objetsCorr) : ''}`)
          }
            break
          case 3:{
            const nbFormes = pat.fonction(10)
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
            En effet, la formule pour trouver le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s est : $${miseEnEvidence(pat.formule.replaceAll('n', '10'))}$.<br>`)
          }
            break
          case 4:{
            const nbFormes = pat.fonction(43)

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
            En effet, la formule pour trouver le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s est : $${miseEnEvidence(pat.formule.replaceAll('n', '43'))}$.<br>`)
          }
            break
          case 5:{
            const nbFormes = pat.fonction(100)
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
            En effet, la formule pour trouver le nombre ${['e', 'a', 'é', 'i', 'o', 'u', 'y', 'è', 'ê'].includes(pattern.shape.name[0]) ? 'd\'' : 'de '}${pattern.shape.name}s est : $${miseEnEvidence(pat.formule.replaceAll('n', '100'))}$.<br>`)
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

import { cubeDef, faceLeft, faceRight, faceTop, project3dIso, shapeCubeIso, updateCubeIso } from '../../lib/2d/figures2d/Shape3d'
import { listeShapesDef, shapeNames, type ShapeName } from '../../lib/2d/figures2d/shapes2d'
import { VisualPattern3D } from '../../lib/2d/patterns/VisualPattern3D'
import { listePatternsPreDef, type PatternRiche3D, type PatternRiche } from '../../lib/2d/patterns/patternsPreDef'
import { point } from '../../lib/2d/points'
import { polygone } from '../../lib/2d/polygones'
import { texteParPosition } from '../../lib/2d/textes'
import { miseEnEvidence, texteEnCouleurEtGras } from '../../lib/outils/embellissements'
import { sp } from '../../lib/outils/outilString'
import { texNombre } from '../../lib/outils/texNombre'
import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Liste des patterns stockés dans Mathaléa avec leurs numéros de référence'

export const refs = {
  'fr-fr': ['P022'],
  'fr-ch': []
}
export const uuid = '4c9ca'

const nbPatterns = listePatternsPreDef.length

/**
 * Dans le dossier src/lib/2d/patterns, on trouve un fichier patternsPreDef.ts
 * qui contient une liste de patterns stockés dans Mathaléa.
 * Ce fichier exporte une liste de patternsRiches.
 * Les patternsRiches sont des objets qui contiennent les propriétés suivantes:
 * shapeDefault: la fonction qui renvoie la Shape2D des éléments du pattern
 * fonction: la fonction qui permet de calculer le nombre d'éléments du pattern au rang x
* formule: la formule latex qui permet de calculer ce nombre en fonction du rang n
*   type: 'linéaire' | 'affine' | 'degré2' | 'degré3' | 'autre'
*   pattern: Un PatternNumerique initialisé avec ses cellules de rang 1
 *  iterate: la fonction qui permet de fabriquer les cellules au rang n
 * @author Jean-Claude Lhote

 */
export default class ListePatternsPreDef extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    this.nbQuestionsModifiable = false
    this.besoinFormulaireTexte = ['Choix des patterns à afficher', 'nombres séparés par des tirets\n ou 100 pour la liste complète']
    this.sup = '100' // liste des patterns à afficher
    this.besoinFormulaire2Numerique = ['Nombre de patterns à afficher (0 pour toutes la liste)', nbPatterns]
    this.sup2 = nbPatterns
    this.besoinFormulaire3Numerique = ['Nombre de motifs par pattern', 6]
    this.sup3 = 3
    this.comment = `Affiche la liste des patterns stockés dans Mathaléa avec leurs numéros de référence.<br>
Vous pouvez choisir d'afficher un ou plusieurs patterns en indiquant leur numéro de référence dans le formulaire.<br>
Le nombre de motifs par pattern (3 par défaut) est aussi modifiable dans le formulaire.<br>
Le nombre de patterns à afficher est aussi modifiable dans le formulaire.<br>
Le nombre donné entre parenthèses est le nombre d'éléments au rang 43 de chaque pattern.<br>
L'expression donnée entre crochets est la formule qui permet de calculer le nombre d'éléments au rang n de chaque pattern.<br>`
  }

  nouvelleVersion () {
    if (this.sup2 === 0) {
      this.sup2 = nbPatterns
      this.sup = '100'
    }
    const liste = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: nbPatterns, defaut: 100, melange: 100, nbQuestions: this.sup2, shuffle: false }).map(Number)
    let texte = ''
    if (!context.isHtml) {
      texte += `${Object.values(listeShapesDef).map(shape => shape.tikz()).join('\n')}\n`
    }
    if (liste == null || liste.length === 0) return
    for (let i = 0; i < liste.length; i++) {
      const pat = listePatternsPreDef[liste[i] - 1]
      if (pat == null) {
        texte += `\n${texteEnCouleurEtGras(`Pattern ${liste[i]}`, 'red')}: ${texteEnCouleurEtGras('Pattern inexistant', 'red')}`
        continue
      }
      const n43 = texNombre(pat.fonctionNb(43), 0)
      const n43R = pat.fonctionRatio
        ? pat.fonctionRatio(43).toLatex()
        : null
      const n43F = pat.fonctionFraction
        ? pat.fonctionFraction(43).texFractionSimplifiee
        : null
      texte += `\n${texteEnCouleurEtGras(`Pattern ${liste[i]}`, 'blue')}: Motif 43 : $\\left(${n43}\\right)$ ${n43F ? `; fraction : $${n43F}$ ` : ''} ${n43R ? `; ratio : $${n43R}$` : ''} ; formule : ${sp(6)}$\\left[${miseEnEvidence(pat.formule)}\\right]$ <br>`

      const patternRiche = pat
      if (context.isHtml) texte += patternRiche.visualImg != null ? `<a href="${patternRiche.visualImg}" target="_blank">Image</a><br><br>` : ''
      const pattern = patternRiche.pattern
      if (pattern instanceof VisualPattern3D) {
        pattern.shapes = ['cube']
        pattern.iterate3d = (patternRiche as PatternRiche3D).iterate3d
      } else {
        pattern.shapes = (patternRiche as PatternRiche).shapes || shapeNames[randint(0, shapeNames.length - 1)] as ShapeName
        pattern.iterate = (patternRiche as PatternRiche).iterate
      }

      const angle = Math.PI / 6
      let yMax = 0
      let yMin = 0

      const figures: NestedObjetMathalea2dArray[] = []
      for (let j = 0; j < this.sup3; j++) {
        figures[j] = []
        let objets: NestedObjetMathalea2dArray = []
        let ymin = Infinity
        let ymax = -Infinity
        let xmin = Infinity
        let xmax = -Infinity
        if (context.isHtml) {
          for (const name of pattern.shapes) {
            if (name in listeShapesDef) {
              figures[j].push(listeShapesDef[name])
            } else {
              if (name === 'cube') {
                const cubeIsoDef = cubeDef(`cubeIsoQ${i}F${j}`)
                cubeIsoDef.svg = function (coeff: number): string {
                  return `
          <defs>
            <g id="cubeIsoQ${i}F${j}">
              ${faceTop(angle)}
              ${faceLeft(angle)}
              ${faceRight(angle)}
            </g>
          </defs>`
                }
                figures[j].push(cubeIsoDef)
              }
            }
          }
        }
        if (pattern instanceof VisualPattern3D) {
          if (context.isHtml) {
            updateCubeIso(pattern, i, j, angle)
            pattern.shape.codeSvg = `<use href="#cubeIsoQ${i}F${j}"></use>`
            const cells = (pattern as VisualPattern3D).render3d(j + 1)
            // Ajouter les SVG générés par svg() de chaque objet
            cells.forEach(cell => {
              const [px, py] = project3dIso(cell[0], cell[1], cell[2], angle)
              const obj = shapeCubeIso(`cubeIsoQ${i}F${j}`, px, py)
              obj.x = px
              obj.y = -py
              objets.push(obj)
              ymin = Math.min(ymin, obj.y / 20)
              ymax = Math.max(ymax, obj.y / 20)
              xmin = Math.min(xmin, obj.x / 20)
              xmax = Math.max(xmax, obj.x / 20)
            })
          } else {
            objets = pattern.render(j + 1, 0, 0, Math.PI / 6)
            ;({ xmin, ymin, xmax, ymax } = fixeBordures(objets))
          }
        } else {
          objets = pattern.render(j + 1, 0, 0)
          ;({ xmin, ymin, xmax, ymax } = fixeBordures(objets))
        }
        figures[j].push(...objets)
        // const { xmax, ymax, xmin, ymin } = fixeBordures(objets, { rxmin: 0.5, rymin: 0, rxmax: 0.5, rymax: 0 })
        figures[j].push(texteParPosition(`Motif ${j + 1}`, (xmax + xmin + 1) / 2, -1.5, 0, 'black', 0.8, 'milieu'))
        const cadre = polygone(point(xmin - 1, -2), point(xmax + 2, -2), point(xmax + 2, ymax + 2), point(xmin - 1, ymax + 2))
        cadre.pointilles = 4
        figures[j].push(cadre)

        yMax = Math.max(yMax, ymax)
        yMin = Math.min(yMin, ymin)
      }
      texte += figures.map((fig, index) => mathalea2d(Object.assign(fixeBordures(fig, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { id: `Motif${i}F${index}`, pixelsParCm: 20, yMax, yMin, scale: 0.5, style: 'display: inline-block', optionsTikz: 'transform shape' }), fig)).join('\n') + '<br>'
    }
    this.listeQuestions = [texte]
  }
}

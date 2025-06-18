import { carreDef, carreRondDef, chatDef, etoileDef, losangeDef, shapeCarre, soleilDef } from '../../lib/2d/figures2d/shapes2d'
import { listePatternsPreDef } from '../../lib/2d/patterns/patternsPreDef'
import { point } from '../../lib/2d/points'
import { polygone } from '../../lib/2d/polygones'
import { texteParPosition } from '../../lib/2d/textes'
import { miseEnEvidence, texteEnCouleurEtGras } from '../../lib/outils/embellissements'
import { arrondi } from '../../lib/outils/nombres'
import { sp } from '../../lib/outils/outilString'
import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { gestionnaireFormulaireTexte } from '../../modules/outils'
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
    if (liste == null || liste.length === 0) return
    for (let i = 0; i < liste.length; i++) {
      texte += `${texteEnCouleurEtGras(`Pattern ${liste[i]}`, 'blue')}: $\\left(${listePatternsPreDef[liste[i] - 1].fonction(43)}\\right)$${sp(6)}$\\left[${miseEnEvidence(listePatternsPreDef[liste[i] - 1].formule)}\\right]$ <br>`
      const patternRiche = listePatternsPreDef[liste[i] - 1]
      const shape = patternRiche.shapeDefault ?? shapeCarre()
      const pattern = patternRiche.pattern
      pattern.shape = shape
      pattern.iterate = patternRiche.iterate
      let objet = pattern.render(1, 0, 0)
      let yMax = 0
      let yMin = 0
      const figures: NestedObjetMathalea2dArray[] = []
      for (let j = 1; j < this.sup3 + 1; j++) {
        figures[j - 1] = [chatDef, soleilDef, etoileDef, losangeDef, carreRondDef, carreDef]
        figures[j - 1].push(objet)
        const { xmax, ymax, xmin, ymin } = fixeBordures(objet, { rxmin: 0.5, rymin: 0, rxmax: 0.5, rymax: 0 })
        figures[j - 1].push(texteParPosition(`Motif ${j}`, (xmax + xmin - 1) / 2, -1, 0, 'black', 0.8, 'milieu'))
        const cadre = polygone(point(xmin - 1, -1.5), point(xmax, -1.5), point(xmax, ymax + 1), point(xmin - 1, ymax + 1))
        cadre.pointilles = 4
        figures[j - 1].push(cadre)
        objet = pattern.render(j + 1, 0, 0)
        yMax = Math.max(yMax, ymax)
        yMin = Math.min(yMin, ymin)
      }
      texte += figures.map((fig, index) => mathalea2d(Object.assign(fixeBordures(fig, { rxmin: 0, rymin: -1, rxmax: 0, rymax: 1 }), { pixelsParCm: arrondi(20 * 0.9 ** index, 2), yMax, yMin, scale: arrondi(0.6 * 0.9 ** index, 2), style: 'display: inline-block', optionsTikz: 'transform shape' }), fig)).join('\n') + '<br>'
    }
    this.listeQuestions = [texte]
  }
}

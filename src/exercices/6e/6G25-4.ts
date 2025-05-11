import { vecteur } from '../../lib/2d/segmentsVecteurs'
import { texteParPosition } from '../../lib/2d/textes'
import { choice } from '../../lib/outils/arrayOutils'
import { colorToLatexOrHTML, fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import { listeFigures2d, type Forme } from '../../lib/2d/figures2d/listeFigures2d'
import Exercice from '../Exercice'
import { homothetie, translation } from '../../lib/2d/transformations'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { orangeMathalea } from '../../lib/colors'
import type { Figure2D } from '../../lib/2d/Figures2D'
import { point } from '../../lib/2d/points'
import { propositionsQcm } from '../../lib/interactif/qcm'

export const titre = 'Reconnaitre des figures symétriques'
export const interactifReady = true
export const interactifType = 'mathLive'

// Gestion de la date de publication initiale
export const dateDePublication = '08/05/2025'

/**
 * Donner le nombre d'axes de symétrie d'une figure.
 * @author Jean-Claude Lhote
 */
export const uuid = '328b2'

export const refs = {
  'fr-fr': ['6G25-4'],
  'fr-ch': []
}

export default class NbAxesDeSymetrie extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    this.besoinFormulaireTexte = ['Type de figures', 'Nombres séparés par des tirets\n1 : Panneaux\n2 : Formes géométriques\n3 : Legos\n4 : Mélange']
    this.sup = '1'
    this.besoinFormulaire2Numerique = ['Nombre de figures par question', 3]
    this.sup2 = 1
    this.besoinFormulaire3CaseACocher = ['Avec des rotations aléatoires', false]
    this.sup3 = false
    this.besoinFormulaire4CaseACocher = ['Grandes figures', false]
    this.sup4 = false
  }

  nouvelleVersion (): void {
    let nbFigures = this.sup2
    const factor = this.sup4 ? 2 : 1
    const typeDeFigures = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: 3, defaut: 1, melange: 4, nbQuestions: this.nbQuestions }).map(Number)
    const numerosChoisis: number[] = []
    for (let i = 0; i < this.nbQuestions;) {
      let texte = ''
      let texteCorr = ''
      const objets: NestedObjetMathalea2dArray = []
      const objetsCorr: NestedObjetMathalea2dArray = []

      const typeDeFigureChoisie = ['panneau', 'geometrique', 'lego'][typeDeFigures[i] - 1]
      const listeFigs = listeFigures2d.filter(el => el.type === typeDeFigureChoisie).filter(el => !numerosChoisis.includes(el.numero))
      if (listeFigs.length === 0) {
        this.listeQuestions.push('Aucune figure disponible')
        this.listeCorrections.push('Aucune figure disponible')
        break
      }
      const nbFigs = listeFigs.length
      if (nbFigs < nbFigures) {
        nbFigures = nbFigs
      }
      const figures = []
      for (let j = 0; j < nbFigures; j++) {
        const choix = listeFigs.filter(el => !numerosChoisis.includes(el.numero))
        if (choix.length === 0) {
          nbFigures = j
          break
        }
        const figure: Forme = choice(choix)
        numerosChoisis.push(figure.numero)
        figures.push(figure)
      }
      texte += this.interactif
        ? `Combien d'axes de symétrie possède${nbFigures > 1 ? 'nt' : ' '}l${nbFigures > 1 ? 'es' : 'a'} figure${nbFigures > 1 ? 's' : ''} suivante${nbFigures > 1 ? 's' : ''} ?<br>`
        : `Trace l${nbFigures > 1 ? 'es ' : '\''}axe${nbFigures > 1 ? 's' : ''} de symétrie d${nbFigures > 1 ? 'es ' : 'e la'} figure${nbFigures > 1 ? 's' : ''} suivante${nbFigures > 1 ? 's' : ''}.<br>`
      const formes: Figure2D[] = []
      for (let j = 0; j < nbFigures; j++) {
        const alpha = randint(-30, 30, 0)
        const figure = figures[j]
        const options = figure.options ?? {}
        const forme = figure.figure2d(options).dilate(factor).translate(j * 6 * factor, 0)
        if (this.sup3) forme.rotate(alpha)
        formes.push(forme)
        const axes = forme.Axes.map(el => factor > 1 ? homothetie(el, point(0, 0), factor) : el)
        const formeTexte = texteParPosition(`figure ${j + 1}`, j * 6 * factor, 2.8 * factor)
        objets.push(forme, formeTexte)
        objetsCorr.push(forme, formeTexte)
        if (axes.length > 0) {
          for (let k = 0; k < axes.length; k++) {
            const seg = translation(axes[k], vecteur(j * 6 * factor, 0))
            seg.epaisseur = 1.5
            seg.color = colorToLatexOrHTML(orangeMathalea)
            objetsCorr.push(seg)
          }
        }
      }
      texte += mathalea2d(Object.assign({ pixelsParCm: 20, scale: 0.7 }, fixeBordures(objets)), objets)
      if (this.interactif) {
        for (let j = 0; j < nbFigures; j++) {
          this.autoCorrection[i * nbFigures + j] = {
            propositions: [
              { texte: 'aucun', statut: formes[j].nbAxes === 0 },
              { texte: '1', statut: formes[j].nbAxes === 1 },
              { texte: '2', statut: formes[j].nbAxes === 2 },
              { texte: '3', statut: formes[j].nbAxes === 3 },
              { texte: '4', statut: formes[j].nbAxes === 4 },
              { texte: '5', statut: formes[j].nbAxes === 5 },
              { texte: '6', statut: formes[j].nbAxes === 6 },
              { texte: 'une infinité', statut: Number.isFinite(formes[j].nbAxes) === false },
            ],
            options: {
              ordered: true
            }
          }
          const monQcm = propositionsQcm(this, i * nbFigures + j, { style: 'inline-block', format: 'case' })
          texte += `figure ${j + 1} : ${monQcm.texte}`
        }
      }
      texteCorr += mathalea2d(Object.assign({ pixelsParCm: 20, scale: 0.7 }, fixeBordures(objetsCorr)), objetsCorr)
      texteCorr += `${formes.map((el, j) => Number.isFinite(el.nbAxes)
       ? `${j === 0 ? 'L' : 'l'}a figure ${j + 1} possède $${miseEnEvidence(el.nbAxes)}$ axe${el.nbAxes > 1 ? 's' : ''} de symétrie`
       : `${j === 0 ? 'L' : 'l'}a figure ${j + 1} possède une infinité d'axes de symétrie`
    ).join(', ')}.`
      this.listeQuestions.push(texte)
      this.listeCorrections.push(texteCorr)
      i++
    }
  }
}

import { vecteur } from '../../lib/2d/segmentsVecteurs'
import { choice } from '../../lib/outils/arrayOutils'
import { fixeBordures, mathalea2d, type NestedObjetMathalea2dArray } from '../../modules/2dGeneralites'
import { listeFigures2d, type Forme } from '../../lib/2d/figures2d/listeFigures2d'
import Exercice from '../Exercice'
import { homothetie, projectionOrtho, rotation } from '../../lib/2d/transformations'
import { point } from '../../lib/2d/points'
import { propositionsQcm } from '../../lib/interactif/qcm'
import { lettreMinusculeDepuisChiffre } from '../../lib/outils/outilString'
import { randint } from '../../modules/outils'
import { droite } from '../../lib/2d/droites'
import { latex2d } from '../../lib/2d/textes'
import { texteEnCouleurEtGras } from '../../lib/outils/embellissements'

export const titre = 'Dire si deux figures sont symétriques par rapport à une droite'
export const interactifReady = true
export const interactifType = 'mathLive'

// Gestion de la date de publication initiale
export const dateDePublication = '17/05/2025'

/**
 * Reconnaître des figures symétriques par rapport à une droite donnée.
 * @author Jean-Claude Lhote
 */
export const uuid = '528b2'

export const refs = {
  'fr-fr': ['6G25-5'],
  'fr-ch': []
}

export default class NbAxesDeSymetrie extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 3
    this.besoinFormulaire4CaseACocher = ['Grandes figures', true]
    this.sup4 = true
  }

  nouvelleVersion (): void {
    const factor = this.sup4 ? 2 : 1
    const numerosChoisis: number[] = []
    for (let i = 0; i < this.nbQuestions;) {
      let texte = ''
      let texteCorr = ''
      const objets: NestedObjetMathalea2dArray = []
      const objetsCorr: NestedObjetMathalea2dArray = []

      const typeDeFigureChoisie = 'geometrique'
      const listeFigs = listeFigures2d.filter(el => el.type === typeDeFigureChoisie).filter(el => !numerosChoisis.includes(el.numero))
      if (listeFigs.length === 0) {
        this.listeQuestions.push('Aucune figure disponible')
        this.listeCorrections.push('Aucune figure disponible')
        break
      }
      const choix = listeFigs.filter(el => !numerosChoisis.includes(el.numero))
      const figure: Forme = choice(choix)
      numerosChoisis.push(figure.numero)
      texte += `Les deux figures sont-elles symétrique par rapport à la droite $(${i <= 25 ? lettreMinusculeDepuisChiffre(i + 1) : `d_{${(i + 1) % 26}}`})$ ?<br>`
      const alpha = 0 // randint(-30, 30, 0)
      const options = figure.options ?? {}
      const forme = figure.figure2d(options).dilate(factor).rotate(alpha).translate(-4.5, 0)
      forme.name = figure.name.replace(/ /g, '_')
      forme.opacite = 0.5
      objets.push(forme)
      const beta = randint(-4, 4, [0, 1, -1]) * 2
      const axe = rotation(droite(point(0, 0), point(0, 1)), point(0, 0), -beta)
      const dy = axe.y2 - axe.y1
      const dx = axe.x2 - axe.x1
      const d = Math.sqrt(dx * dx + dy * dy)
      axe.x1 = -dx / d * 5
      axe.y1 = -dy / d * 5
      axe.x2 = dx / d * 5
      axe.y2 = dy / d * 5
      objets.push(axe)
      const h = projectionOrtho(point(-4.5, 0), axe)
      const v = homothetie(vecteur(point(-4.5, 0), h), h, 2)
      const choixReponse = choice(['translation', 'symetrie', 'rotation', 'homothetie'])
      let forme2
      switch (choixReponse) {
        case 'translation':
          forme2 = forme.copy(forme.name + 'b').translate(v.x, 0)
          objets.push(forme2)

          break
        case 'symetrie':
          forme2 = forme.symetrie(axe)
          forme2.opacite = 0.5
          objets.push(forme2)
          break

        case 'homothetie':
          forme2 = forme.copy(forme.name + 'b').translate(4.5, 0).dilate(choice([1.2, 1.3, 1.1, 0.9, 0.8])).translate(-4.5, 0)
          forme2 = forme2.symetrie(axe)
          objets.push(forme2)
          break

        case 'rotation':
        default:
          forme2 = forme.copy(forme.name + 'b').rotate(4 * beta).translate(v.x, v.y)
          objets.push(forme2)
          break
      }
      objets.push(latex2d(`(${i <= 25 ? lettreMinusculeDepuisChiffre(i + 1) : `d_{${(i + 1) % 26}}`})`, axe.x2 + 0.6, axe.y2, { }))
      texte += mathalea2d(Object.assign({ pixelsParCm: 20, scale: 1 }, fixeBordures(objets, { rxmax: 3, rymax: 1, rymin: -1 })), objets)
      if (this.interactif) {
        this.autoCorrection[i] = {
          propositions: [
            { texte: 'oui', statut: choixReponse === 'symetrie' },
            { texte: 'non', statut: choixReponse !== 'symetrie' }
          ],
          options: {
            ordered: true
          }
        }
        const monQcm = propositionsQcm(this, i, { style: 'inline-block', format: 'case', radio: true })
        texte += `${monQcm.texte}`
      }
      const anim = forme.loopReflectionAnimee(axe, `${forme.name}Corr_${i}`)
      const formeBis = forme.copy(forme.name + 'Bis')
      formeBis.opacite = 0.3
      const forme2Bis = forme2.copy(forme2.name + 'Bis')
      forme2Bis.opacite = 0.3
      objetsCorr.push(formeBis, forme2Bis, anim, axe)
      texteCorr += mathalea2d(Object.assign({ pixelsParCm: 20, scale: 1 }, fixeBordures(objetsCorr, { rxmax: 3, rymax: 1, rymin: -1 })), objetsCorr)
      texteCorr += `Les deux figures ${texteEnCouleurEtGras((choixReponse === 'symetrie' ? 'sont' : 'ne sont pas') + ' symétriques')} par rapport à la droite $(${i <= 25 ? lettreMinusculeDepuisChiffre(i + 1) : `d_{${(i + 1) % 26}}`})$.<br>`
      texteCorr += choixReponse === 'homothetie'
        ? 'Les figures nont pas la même taille.'
        : choixReponse === 'translation'
          ? 'Les figures ne sont pas symétriques, comme le montre l\'animation.'
          : choixReponse === 'rotation'
            ? 'L\'animation montre que les figures ne sont pas symétriques.'
            : 'L\'animation montre que par pliage selon l\'axe les deux figures se superposent parfaitement.'
      this.listeQuestions.push(texte)
      this.listeCorrections.push(texteCorr)
      i++
    }
  }
}

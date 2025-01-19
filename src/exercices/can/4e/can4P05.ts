import { droiteParPointEtPente } from '../../../lib/2d/droites'
import { point } from '../../../lib/2d/points'
import { polyline } from '../../../lib/2d/polygones'
import { repere } from '../../../lib/2d/reperes'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { choice } from '../../../lib/outils/arrayOutils'
import { texteEnCouleurEtGras } from '../../../lib/outils/embellissements'
import { mathalea2d } from '../../../modules/2dGeneralites'
import { randint } from '../../../modules/outils'
import Exercice from '../../Exercice'

export const interactifReady = true
export const interactifType = 'mathLive'
export const titre = 'Reconnaître sur un graphique une situation de proportionnalité ou de non proportionnalité'
export const dateDePublication = '23/01/2021' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag
export const dateDeModifImportante = '02/11/2024' // Une date de modification importante au format 'jj/mm/aaaa' pour affichage temporaire d'un tag
/**
 * @author Guillaume Valmont
 */
export const uuid = '8171f'

export const refs = {
  'fr-fr': ['can4P05'],
  'fr-ch': []
}

const correlation = (x:number, x0:number, y0:number, x1:number, y1:number) => {
  return y0 + (y1 - y0) * (x - x0) / (x1 - x0) + Math.random() * choice([-1, 1])
}
export default class ImageSpline extends Exercice {
  lineaire: boolean
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.spacing = 1.5
    this.spacingCorr = 1.5
    this.nbQuestions = 1

    this.formatChampTexte = KeyboardType.vFON
    this.lineaire = false
  }

  nouvelleVersion () {
    const r = repere({ xMin: -7, xMax: 7, yMin: -6, yMax: 6 })
    let c
    const type = choice(['lineaire', 'affine', 'autre'])
    switch (type) {
      case 'lineaire': {
        const pente = (randint(-15, 15, 0)) / 5
        const OrdX0 = 0
        c = droiteParPointEtPente(point(0, OrdX0), pente, '', 'blue')
        this.reponse = ['O', 'Oui', 'oui', 'o', 'OUI']
        this.correction = `C'est une droite qui passe par l'origine.<br>Ce graphique représente donc une situation de proportionnalité.<br>
         Réponse : OUI (${texteEnCouleurEtGras('O')}) `
      }
        break
      case 'autre': {
        const x:[number, number, number, number, number, number, number, number, number] = [-7, -5, -3, -1, 0, 1, 3, 5, 7]
        const y0 = randint(3, 6) * choice([-1, 1])
        const y8 = -y0
        const coords: [number, number][] = []
        for (let i = 0; i < 9; i++) {
          if (i === 0) coords.push([x[i], y0])
          else if (i === 8) coords.push([x[i], y8])
          else coords.push([x[i], correlation(x[i], x[0], y0, x[8], y8)])
        }
        const points = coords.map(c => point(c[0], c[1]))
        c = polyline(points, 'blue')
        this.reponse = ['N', 'Non', 'NON', 'non']
        this.correction = (Math.abs(coords[4][1]) > 0.2)
          ? 'Ce graphique ne représente pas une situation de proportionnalité car le tracé ne passe pas par l\'origine (et n\'est pas une droite).<br>'
          : 'Ce graphique ne représente pas une situation de proportionnalité car le tracé n\'est pas une droite.<br>' +
       `Réponse : NON (${texteEnCouleurEtGras('N')}) `
      }
        break
      case 'affine':
      default: {
        const pente = (randint(-15, 15, 0)) / 5
        this.lineaire = false
        const OrdX0 = randint(Math.round(-1 + pente), Math.round(1 + pente), [pente, 0])
        c = droiteParPointEtPente(point(0, OrdX0), pente, '', 'blue')
        this.reponse = ['N', 'Non', 'NON', 'non']
        this.correction = `C'est bien une droite mais elle ne passe pas par l'origine.<br>Ce graphique ne représente donc pas une situation de proportionnalité.<br>
        Réponse : NON (${texteEnCouleurEtGras('N')}) `
      }
        break
    }

    this.question = `Ce graphique représente-t-il une situation de proportionnalité ?<br>
    
    ${mathalea2d({ xmin: -7, xmax: 7, ymin: -6, ymax: 6, pixelsParCm: 17, style: 'margin: auto', scale: 0.6 }, r, c)}`
    if (this.interactif) {
      this.question += '<br> Répondre par OUI (saisir O) ou NON (saisir N).<br>'
    }
    this.canEnonce = this.question// 'Compléter'
    this.canReponseACompleter = ''
  }
}

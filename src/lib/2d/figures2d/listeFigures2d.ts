import { panneauArretInterdit } from './arretInterdit'
import { panneauFinDeLimitation } from './finDeLimitation'
import { panneauInterdictionDeCirculer, panneauSensInterdit } from './Interdictions'
import type { Figure2D } from '../Figures2D'
import { panneauCroisementPrioriteADroite, panneauCederLePassage, panneauDoubleSens, panneauFeuTricolore, panneauRetrecissementChaussee1, panneauRetrecissementChaussee2 } from './panneauDanger'
import { panneauFinDeRoutePrioritaire, panneauRoutePrioritaire } from './routePrioritaire'
import { panneauParking, panneauVoieSansIssue } from './panneauInfo'
import { panneauStop } from './panneauStop'
import { panneauStationnementInterdit } from './stationnementInterdit'
import { briqueLego } from './legos'
import { aileDelta, cerfVolant, etoile5Branches, hexagoneNonRegulier, pentagoneRegulier, trapezeIsocele, triangleQuelconque1 } from './geometrie'
import { randint } from '../../../modules/outils'
/**
 * @description formes utilisées dans l'exercice 6G25-4 notzmment
 * @author Jean-Claude Lhote
 */
export const listeFigures2d: Forme[] = [
  // panneaux
  {
    numero: 1,
    name: 'fin de limitation',
    type: 'panneau',
    figure2d: panneauFinDeLimitation,
  },
  {
    numero: 2,
    name: 'sens interdit',
    type: 'panneau',
    figure2d: panneauSensInterdit
  },
  {
    numero: 3,
    name: 'interdiction de s\'arrêter',
    type: 'panneau',
    figure2d: panneauArretInterdit
  },
  {
    numero: 4,
    name: 'interdiction de circuler à tout véhicule',
    type: 'panneau',
    figure2d: panneauInterdictionDeCirculer
  },
  {
    numero: 5,
    name: 'danger : céder le passage',
    type: 'panneau',
    figure2d: panneauCederLePassage
  },
  {
    numero: 6,
    name: 'danger : circulation à double sens',
    type: 'panneau',
    figure2d: panneauDoubleSens
  },
  {
    numero: 7,
    name: 'danger : retrécissement de chaussée',
    type: 'panneau',
    figure2d: panneauRetrecissementChaussee1
  },
  {
    numero: 8,
    name: 'danger : retrécissement de chaussée',
    type: 'panneau',
    figure2d: panneauRetrecissementChaussee2
  },
  {
    numero: 9,
    name: 'danger : croisement à priorité à droite',
    type: 'panneau',
    figure2d: panneauCroisementPrioriteADroite
  },
  {
    numero: 10,
    name: 'fin de route prioritaire',
    type: 'panneau',
    figure2d: panneauFinDeRoutePrioritaire
  },
  {
    numero: 11,
    name: 'danger : feu tricolore',
    type: 'panneau',
    figure2d: panneauFeuTricolore
  },
  {
    numero: 12,
    name: 'voie sans issue',
    type: 'panneau',
    figure2d: panneauVoieSansIssue
  },
  {
    numero: 13,
    name: 'parking',
    type: 'panneau',
    figure2d: panneauParking
  },
  {
    numero: 14,
    name: 'stop',
    type: 'panneau',
    figure2d: panneauStop
  },
  {
    numero: 15,
    name: 'stationnement interdit',
    type: 'panneau',
    figure2d: panneauStationnementInterdit
  },
  {
    numero: 16,
    name: 'route prioritaire',
    type: 'panneau',
    figure2d: panneauRoutePrioritaire
  },
  // legos
  {
    numero: 17,
    name: 'lego2x2',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 2, ny: 2 }
  },
  {
    numero: 18,
    name: 'lego3x2',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 3, ny: 2 }
  },
  {
    numero: 19,
    name: 'lego4x2',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 4, ny: 2 }
  },
  {
    numero: 20,
    name: 'lego5x2',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 5, ny: 2 }
  },
  {
    numero: 21,
    name: 'lego6x2',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 6, ny: 2 }
  },
  {
    numero: 22,
    name: 'lego8x2',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 8, ny: 2 }
  },
  {
    numero: 23,
    name: 'lego5x4',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 5, ny: 4 }
  },
  {
    numero: 24,
    name: 'lego6x4',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 6, ny: 4 }
  },
  {
    numero: 25,
    name: 'lego8x4',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 8, ny: 4 }
  },
  {
    numero: 26,
    name: 'lego3x3',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 3, ny: 3 }
  },
  {
    numero: 27,
    name: 'lego4x4',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 4, ny: 4 }
  },
  {
    numero: 28,
    name: 'lego4x3',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 4, ny: 3 }
  },
  {
    numero: 29,
    name: 'lego5x3',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 5, ny: 3 }
  },
  {
    numero: 30,
    name: 'lego6x3',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 6, ny: 3 }
  },
  {
    numero: 31,
    name: 'lego8x3',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 8, ny: 3 }
  },
  {
    numero: 32,
    name: 'lego8x6',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 8, ny: 6 }
  },
  {
    numero: 33,
    name: 'lego2x1',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 2, ny: 1 }
  },
  {
    numero: 34,
    name: 'lego3x1',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 3, ny: 1 }
  },
  {
    numero: 35,
    name: 'lego4x1',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 4, ny: 1 }
  },
  {
    numero: 36,
    name: 'lego5x1',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 5, ny: 1 }
  },
  {
    numero: 37,
    name: 'lego6x1',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 6, ny: 1 }
  },
  {
    numero: 38,
    name: 'lego8x1',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 8, ny: 1 }
  },
  {
    numero: 39,
    name: 'lego8x8',
    type: 'lego',
    figure2d: briqueLego,
    options: { nx: 8, ny: 8 }
  },
  // formes géométriques
  {
    numero: 40,
    name: 'triangle quelconque',
    type: 'geometrique',
    figure2d: triangleQuelconque1
  },
  {
    numero: 41,
    name: 'pentagone régulier',
    type: 'geometrique',
    figure2d: pentagoneRegulier,
    options: { rayon: 2 }
  },
  {
    numero: 42,
    name: 'etoile à 5 branches',
    type: 'geometrique',
    figure2d: etoile5Branches,
    options: { rayonInterieur: 0.7, rayonExterieur: 1.5 }
  },
  {
    numero: 43,
    name: 'cerf-volant',
    type: 'geometrique',
    figure2d: cerfVolant,
    options: { largeur: randint(2, 5) / 2, hauteur: randint(32, 40) / 10 }
  },
  {
    numero: 44,
    name: 'aile delta',
    type: 'geometrique',
    figure2d: aileDelta,
    options: { base: 4, hauteur: 2 }
  },
  {
    numero: 45,
    name: 'trapèze isocèle',
    type: 'geometrique',
    figure2d: trapezeIsocele,
    options: { baseInferieure: 4, baseSuperieure: 2, hauteur: 2.5 }
  },
  {
    numero: 46,
    name: 'hexagone non régulier',
    type: 'geometrique',
    figure2d: hexagoneNonRegulier,
    options: { rayonHorizontal: 2, rayonVertical: 1 }
  }
]
export type Figure2DOptions = {
  fillStyle?: string
  strokeStyle?: string
  lineWidth?: number
  borderFillSyle?: string
  cancelStroke?: string
  studFillStyle?: string
  studStrokeStyle?: string
  nx?: number
  ny?: number
  baseInferieure?: number
  baseSuperieure?: number
  hauteur?: number
  base?: number
  largeur?: number
  rayon?: number
  rayonHorizontal?: number
  rayonVertical?: number
  rayonInterieur?: number
  rayonExterieur?: number
}
export type Forme = {
  numero: number
  name: string
  type: string
  figure2d: (options?: Figure2DOptions) => Figure2D
  options?: Figure2DOptions
}

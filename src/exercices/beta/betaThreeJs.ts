import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'
import { SceneViewer } from '../../lib/3d/SceneViewer'
import { rangeMinMax } from '../../lib/outils/nombres'
import { arcenciel } from '../../lib/outils/embellissements'

export const uuid = 'threejs'
export const titre = 'La Terre vue du ciel !'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

type Cube = {
  x: number;
  y: number;
  z: number;
  size: number;
}

// Méthodes de génération des fractales
function epongeMenger (x: number, y: number, z: number, size: number, n: number): Cube[] {
  if (n === 0) return [{ x, y, z, size }]
  const newSize = size / 3
  const result: Cube[] = []
  for (const dx of [-1, 0, 1]) {
    for (const dy of [-1, 0, 1]) {
      for (const dz of [-1, 0, 1]) {
        const nbZeros = [dx, dy, dz].filter((v) => v === 0).length
        if (nbZeros >= 2) continue
        result.push(...epongeMenger(x + dx * newSize, y + dy * newSize, z + dz * newSize, newSize, n - 1))
      }
    }
  }
  return result
}

function huitCoins (x: number, y: number, z: number, size: number, n: number): Cube[] {
  if (n === 0) return [{ x, y, z, size }]
  const newSize = size / 3
  const result: Cube[] = []
  for (const dx of [-1, 1]) {
    for (const dy of [-1, 1]) {
      for (const dz of [-1, 1]) {
        result.push(...huitCoins(x + dx * newSize, y + dy * newSize, z + dz * newSize, newSize, n - 1))
      }
    }
  }
  return result
}

export default class BetaThreeJs extends Exercice {
  version: 'menger' | 'huit-coins'
  level: number

  constructor () {
    super()
    this.version = 'huit-coins' // 'menger' | 'huit-coins'
    this.level = 1
    this.listeQuestions = []
    this.listeCorrections = []
  }

  nouvelleVersion () {
    this.listeQuestions = []
    this.listeCorrections = []

    const sceneBuilder = new SceneViewer({ width: 400, height: 400 })
    /*
    sceneBuilder.setCamera({
      position: [0, 0, 8],
      fov: 60,
    })
*/
    // NOUVEAU : Ajouter des lumières pour éclairer la Terre
    sceneBuilder.addAmbientLight({
      color: '#ffffff',
      intensity: 0.8  // Augmenter l'intensité de la lumière ambiante
    })

    sceneBuilder.addDirectionnalLight({
      color: '#ffffff',
      intensity: 1.2,  // Lumière directionnelle plus forte
      position: [5, 5, 5]
    })

    // Lumière supplémentaire du côté opposé
    sceneBuilder.addDirectionnalLight({
      color: '#ffffff',
      intensity: 0.6,
      position: [-5, 5, -5]
    })

    const cubes = this.version === 'menger'
      ? epongeMenger(0, 5, 0, 3, this.level)
      : huitCoins(0, 5, 0, 3, this.level)

    cubes.forEach(({ x, y, z, size }) => {
      sceneBuilder.addBox({
        position: [x, y, z],
        width: size,
        height: size,
        depth: size,
        color: '#ff6b35',
        wireframe: true
      })
    })

    // Sphère avec beaucoup de détails
    // Sphère détaillée pour cours de géographie
    sceneBuilder.addCustomWireSphere({
      position: [0, 3, 0],
      radius: 4.02,
      parallels: 18,
      meridians: 72,
      /* parallelColor: 'black', // Parallèles bleu ciel
      meridianColor: 'purple', // Méridiens gris-ble */
      showEquator: true,
      equatorColor: '#DC143C',
      equatorThickness: 0.01,       // Équateur plus épais
      showGreenwich: true,
      greenwichColor: '#008000',
      greenwichThickness: 0.01     // Greenwich épais

    })
    // Les longitudes
    const points = rangeMinMax(-17, 17, [0]).map(el => Object.assign({ latitude: 0, longitude: el * 10, label: `${el >= 0 ? `${el * 10}° E` : `${-el * 10}° O`}`, pointColor: '#FF0000' }, { pointColor: '#FF0000', pointSize: 0.02 }))
    // Test avec des points de référence connus
    sceneBuilder.addGeographicPoints({
      spherePosition: [0, 3, 0],
      sphereRadius: 4,
      defaultLabelSize: 0.3,
      points
    })

    // Les latitudes
    const points2 = rangeMinMax(-8, 8, [0]).map(el => Object.assign({
      latitude: el * 10,
      longitude: 0,
      label: `${el >= 0 ? `${el * 10}° N` : `${-el * 10}° S`}`
    }, {
      pointColor: '#FF0000',
      pointRadius: 0.02,        // CHANGÉ : pointSize → pointRadius
      labelColor: '#FFFFFF',    // CHANGÉ : defaultLabelColor → labelColor
      labelSize: 0.3,           // CHANGÉ : defaultLabelSize → labelSize
      font: 'monoid'            // CHANGÉ : defaultFont → font
    }))

    sceneBuilder.addGeographicPoints({
      spherePosition: [0, 3, 0],
      sphereRadius: 4,
      points: points2,
      defaultLabelSize: 0.3,
    })

    const villes = [
      {
        latitude: 48.8566, // Paris
        longitude: 2.3522,
        label: 'Paris',
        pointColor: '#FF0000',
        pointRadius: 0.02,
        labelColor: arcenciel(randint(0, 10)),
        labelSize: 0.3,
        font: 'monoid'
      },
      {
        latitude: 40.7128, // New York
        longitude: -74.0060,
        label: 'New York',
        pointColor: '#FF0000',
        pointRadius: 0.02,
        labelColor: arcenciel(randint(0, 10)),
        labelSize: 0.3,
        font: 'monoid'
      },
      {
        latitude: 35.6895, // Tokyo
        longitude: 139.6917,
        label: 'Tokyo',
        pointColor: '#FF0000',
        pointRadius: 0.02,
        labelColor: arcenciel(randint(0, 10)),
        labelSize: 0.3,
        font: 'monoid'
      },
      {
        latitude: -33.8688, // Sydney
        longitude: 151.2093,
        label: 'Sydney',
        pointColor: '#FF0000',
        pointRadius: 0.02,
        labelColor: arcenciel(randint(0, 10)),
        labelSize: 0.3,
        font: 'monoid'
      },
      {
        latitude: 51.5074, // Londres
        longitude: -0.1278,
        label: 'Londres',
        pointColor: '#FF0000',
        pointRadius: 0.02,
        labelColor: arcenciel(randint(0, 10)),
        labelSize: 0.3,
        font: 'monoid'
      },
      {
        latitude: 55.7558, // Moscou
        longitude: 37.6173,
        label: 'Moscou',
        pointColor: '#FF0000',
        pointRadius: 0.02,
        labelColor: arcenciel(randint(0, 10)),
        labelSize: 0.3,
        font: 'monoid'
      }
    ]

    sceneBuilder.addGeographicPoints({
      spherePosition: [0, 3, 0],
      sphereRadius: 4,
      points: villes,
      defaultLabelSize: 0.3,
    })

    sceneBuilder.addRealisticEarthSphere({
      position: [0, 3, 0],
      radius: 4,
      greenwichAlignment: -90,
    })

    const vue = sceneBuilder.generateHTML()

    this.listeQuestions.push(vue)
    this.listeCorrections.push('Explorez la fractale avec la souris (glisser pour tourner, molette pour zoomer).')

    listeQuestionsToContenu(this)

    // AJOUTER CET ÉVÉNEMENT for initialiser A-Frame après l'affichage
    document.addEventListener('exercicesAffiches', () => {
      SceneViewer.initializeScenes()
    }, { once: true })
  }
}

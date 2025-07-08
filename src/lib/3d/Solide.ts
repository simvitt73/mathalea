import 'aframe'
export class Solide {
  mesh: typeof AFRAME.THREE.Mesh

  constructor (type: 'tetraedre' | 'cube' | 'sphere' = 'tetraedre', color = 0xff6600) {
    // Utiliser AFRAME.THREE au lieu de THREE

    let geometry: (typeof AFRAME.THREE.BufferGeometry) | (typeof AFRAME.THREE.Geometry)

    switch (type) {
      case 'tetraedre':
        geometry = new AFRAME.THREE.TetrahedronGeometry(2, 0)
        break
      case 'cube':
        geometry = new AFRAME.THREE.BoxGeometry(1, 1, 1)
        break
      case 'sphere':
        geometry = new AFRAME.THREE.SphereGeometry(1, 16, 16)
        break
      default:
        throw new Error(`Type de solide inconnu : ${type}`)
    }

    const material = new AFRAME.THREE.MeshPhongMaterial({
      color,
      flatShading: true,
    })
    material.needsUpdate = true
    geometry.computeVertexNormals()
    this.mesh = new AFRAME.THREE.Mesh(geometry, material)
  }

  setPosition (x: number, y: number, z: number) {
    this.mesh.position.set(x, y, z)
  }

  setRotation (x: number, y: number, z: number) {
    this.mesh.rotation.set(x, y, z)
  }
}

AFRAME.registerComponent('zoom-controls', {
  init: function () {
    const sceneEl = this.el.sceneEl
    const cameraRig = sceneEl.querySelector('#cameraRig')
    const camera = sceneEl.querySelector('[camera]')

    if (!cameraRig || !camera) return

    // Variables pour le zoom
    let currentDistance = 8  // Distance initiale

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const zoomSpeed = 0.2
      currentDistance += e.deltaY * zoomSpeed
      currentDistance = Math.max(2, Math.min(20, currentDistance))

      // Mettre à jour la position de la caméra
      const currentPos = camera.getAttribute('position')
      if (!currentPos) return

      // Parse the position string (e.g., "0 1 2") into numbers
      const [x, y, z] = (typeof currentPos === 'string'
        ? currentPos.split(' ').map(Number)
        : [currentPos.x, currentPos.y, currentPos.z])
      const direction = new AFRAME.THREE.Vector3(x, y, z).normalize()
      const newPos = direction.multiplyScalar(currentDistance)

      camera.setAttribute('position', { x: newPos.x, y: newPos.y, z: newPos.z })
    }

    // Attacher au document avec vérification de focus
    document.addEventListener('wheel', handleWheel, { passive: false })
  }
})

// Composant A-Frame pour créer une sphère filaire avec parallèles et méridiens
export const customWireSphere = AFRAME.registerComponent('custom-wire-sphere', {
  schema: {
    radius: { type: 'number', default: 1 },
    parallels: { type: 'number', default: 8 },
    meridians: { type: 'number', default: 12 },
    segments: { type: 'number', default: 32 },
    parallelColor: { type: 'color', default: '#00ff00' },
    meridianColor: { type: 'color', default: '#ff0000' },
    showParallels: { type: 'boolean', default: true },
    showMeridians: { type: 'boolean', default: true },
    showEquator: { type: 'boolean', default: true },
    equatorColor: { type: 'color', default: '#ffff00' },
    equatorThickness: { type: 'number', default: 0.01 },
    showGreenwich: { type: 'boolean', default: false },
    greenwichColor: { type: 'color', default: '#00ffff' },
    greenwichThickness: { type: 'number', default: 0.01 }
  },

  init: function () {
    const THREE = AFRAME.THREE  // CHANGÉ : Utiliser AFRAME.THREE
    const group = new THREE.Group()
    const {
      radius, parallels, meridians, segments,
      parallelColor, meridianColor,
      showParallels, showMeridians,
      showEquator, equatorColor, equatorThickness,
      showGreenwich, greenwichColor, greenwichThickness
    } = this.data

    // Parallèles (latitudes) - CORRIGÉ pour inclure l'équateur
    if (showParallels) {
      for (let i = 0; i <= parallels; i++) {
        // CORRIGÉ : Commencer à 0 (équateur) et diviser 90° en parallels sections
        const latitudeDegrees = (i * 90) / (parallels)  // De 0° à 90°
        const theta = (latitudeDegrees * Math.PI) / 180      // Convertir en radians

        const y = radius * Math.sin(theta)     // Hauteur du parallèle
        const r = radius * Math.cos(theta)     // Rayon du parallèle

        // Parallèle nord (+latitude)
        const pointsNorth = []
        for (let j = 0; j <= segments; j++) {
          const phi = (j * 2 * Math.PI) / segments
          pointsNorth.push(new THREE.Vector3(
            r * Math.cos(phi),
            0,
            r * Math.sin(phi)
          ))
        }
        const geoNorth = new THREE.BufferGeometry().setFromPoints(pointsNorth)
        const lineNorth = new THREE.LineLoop(geoNorth, new THREE.LineBasicMaterial({ color: parallelColor }))
        lineNorth.position.y = y
        group.add(lineNorth)

        // Parallèle sud (-latitude) - SAUF pour l'équateur (i=0)
        if (i > 0) {
          const pointsSouth = []
          for (let j = 0; j <= segments; j++) {
            const phi = (j * 2 * Math.PI) / segments
            pointsSouth.push(new THREE.Vector3(
              r * Math.cos(phi),
              0,
              r * Math.sin(phi)
            ))
          }
          const geoSouth = new THREE.BufferGeometry().setFromPoints(pointsSouth)
          const lineSouth = new THREE.LineLoop(geoSouth, new THREE.LineBasicMaterial({ color: parallelColor }))
          lineSouth.position.y = -y
          group.add(lineSouth)
        }
      }
    }

    // Équateur avec épaisseur paramétrable
    if (showEquator) {
      const equatorPoints = []
      for (let j = 0; j <= segments; j++) {
        const phi = (j * 2 * Math.PI) / segments
        equatorPoints.push(new THREE.Vector3(
          radius * Math.cos(phi),
          0,
          radius * Math.sin(phi)
        ))
      }

      const curve = new THREE.CatmullRomCurve3(equatorPoints)
      const tubeGeometry = new THREE.TubeGeometry(curve, segments, equatorThickness, 8, true)
      const tubeMaterial = new THREE.MeshBasicMaterial({ color: equatorColor })
      const equatorTube = new THREE.Mesh(tubeGeometry, tubeMaterial)
      group.add(equatorTube)
    }

    // Méridiens (longitudes) - Incluant toujours Greenwich
    if (showMeridians) {
      // S'assurer qu'un méridien passe par Greenwich (0°)
      const meridianSpacing = 360 / meridians  // En degrés

      for (let i = 0; i < meridians; i++) {
        // Calculer la longitude en degrés, centrée sur Greenwich
        const lonDegrees = i * meridianSpacing
        const phi = (lonDegrees * Math.PI) / 180  // Convertir en radians
        const points = []

        for (let j = 0; j <= segments; j++) {
          const theta = (j * Math.PI) / segments
          const x = radius * Math.sin(theta) * Math.sin(phi)
          const y = radius * Math.cos(theta)
          const z = radius * Math.sin(theta) * Math.cos(phi)
          points.push(new THREE.Vector3(x, y, z))
        }

        const geo = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: meridianColor }))
        group.add(line)
      }
    }

    // Méridien de Greenwich (longitude = 0°, dans le plan X=0)
    if (showGreenwich) {
      const greenwichPoints = []
      for (let j = 0; j <= segments; j++) {
        const theta = (j * Math.PI) / segments
        greenwichPoints.push(new THREE.Vector3(
          0,
          radius * Math.cos(theta),
          radius * Math.sin(theta)
        ))
      }

      const curve = new THREE.CatmullRomCurve3(greenwichPoints)
      const tubeGeometry = new THREE.TubeGeometry(curve, segments, greenwichThickness, 8, false)
      const tubeMaterial = new THREE.MeshBasicMaterial({ color: greenwichColor })
      const greenwichTube = new THREE.Mesh(tubeGeometry, tubeMaterial)
      group.add(greenwichTube)
    }

    this.el.setObject3D('mesh', group)
  },

  update: function () {
    this.remove()
    this.init()
  },

  remove: function () {
    this.el.removeObject3D('mesh')
  }
})

// Composant billboard personnalisé
AFRAME.registerComponent('billboard', {
  tick: function () {
    const THREE = AFRAME.THREE
    const camera = this.el.sceneEl.camera

    if (camera) {
      // Faire face à la caméra à chaque frame
      const cameraPosition = new AFRAME.THREE.Vector3()
      camera.getWorldPosition(cameraPosition)
      this.el.object3D.lookAt(cameraPosition)
    }
  }
})
/**
 * Composant A-Frame pour afficher des étiquettes géographiques
 */
export const geographicLabel = AFRAME.registerComponent('geographic-label', {
  schema: {
    text: { type: 'string', default: 'Label' },
    color: { type: 'color', default: '#000000' },
    size: { type: 'number', default: 0.5 },
    width: { type: 'number', default: 8 },
    align: { type: 'string', default: 'center' },
    baseline: { type: 'string', default: 'center' },
    font: { type: 'string', default: 'dejavu' },        // NOUVEAU : Police paramétrable
    orientation: { type: 'string', default: 'billboard' },
    customRotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
  },

  init: function () {
    // Configurer le texte avec la police choisie
    this.el.setAttribute('text', {
      value: this.data.text,
      color: this.data.color || '#000000',
      align: this.data.align,
      baseline: this.data.baseline,
      width: this.data.width,
      font: this.data.font  // MODIFIÉ : Utiliser la police paramétrable
    })

    // Appliquer l'orientation
    this.applyOrientation()
  },

  applyOrientation: function () {
    const { orientation, customRotation } = this.data

    if (orientation === 'custom') {
      // Retirer le billboard et appliquer rotation personnalisée
      this.el.removeAttribute('billboard')
      this.el.setAttribute('rotation', {
        x: customRotation.x,
        y: customRotation.y,
        z: customRotation.z
      })
    } else {
      // NOUVEAU : Utiliser le composant billboard intégré
      this.el.removeAttribute('rotation')
      this.el.setAttribute('billboard', '')
    }
  },

  update: function () {
    this.el.setAttribute('text', 'value', this.data.text)
    this.el.setAttribute('text', 'color', this.data.color || '#000000')
    this.el.setAttribute('text', 'width', this.data.width)
    this.el.setAttribute('text', 'font', this.data.font)  // NOUVEAU

    // Réappliquer l'orientation
    this.applyOrientation()
  }
})

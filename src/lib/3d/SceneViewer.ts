import './Solide'
const cameraRigPosition = [0, 2, 0]
const initialCameraPosition = [0, 2, 8]
export class SceneViewer {
  private sceneElements: string[] = []
  private camera: string | null = null
  private width: number = 600
  private height: number = 400

  constructor (options: { width?: number; height?: number } = {}) {
    this.width = options.width || this.width
    this.height = options.height || this.height
  }

  // MÉTHODE PRINCIPALE : Générer le HTML avec camera rig
  public generateHTML (): string {
    const sceneContent = this.sceneElements.join('\n')

    return `
      <style>
      [data-scene-viewer] {
        cursor: grab;
        user-select: none;
        touch-action: none;
        position: relative;
      }
      [data-scene-viewer]:active {
        cursor: grabbing;
      }
      </style>
      <div style="width: ${this.width}px; height: ${this.height}px;" class="scene-container" data-scene-viewer>
      <a-scene embedded 
           style="width: 100%; height: 100%;" 
           vr-mode-ui="enabled: false"
           device-orientation-permission-ui="enabled: false">
           <!-- CONTROLS : Zoom et rotation -->
      <a-entity id="zoomController" zoom-controls></a-entity>
      
      <!-- ASSETS : Préchargement des textures et polices -->
      <a-assets>
        <a-mixin id="text-style" 
             text="font: roboto; align: center; baseline: center; width: 8"
             material="transparent: true"></a-mixin>
      
        <!-- Textures de mappemonde -->
        <img id="earthTexture" src="public/images/earth_day_4096.jpg">
        <img id="earthNormalMap" src="public/images/earth_normal_2048.jpg">
        
        <!-- SKY TEXTURE -->
        <img id="sky" src="public/images/2k_stars_milky_way.jpg">
      </a-assets>

      <!-- SKY ELEMENT -->
      <a-sky src="#sky"></a-sky>

      ${this.camera ?? `
        <a-entity id="cameraRig" position="${cameraRigPosition.join(' ')}" rotation="0 0 0">
        <a-entity camera 
              position="${initialCameraPosition.join(' ')}" 
              fov="60"
              rotation="0 0 0"
              look-controls="enabled: false"
              wasd-controls="enabled: false">
        </a-entity>
        </a-entity>
      `}
      ${sceneContent}
      </a-scene>
    </div>
    `
  }

  // MÉTHODE STATIQUE pour initialiser les contrôles du camera rig
  static initializeScenes (): void {
    const waitForAFrame = () => {
      if (!(window as any).AFRAME) {
        setTimeout(waitForAFrame, 100)
        return
      }

      setTimeout(() => {
        const sceneContainers = document.querySelectorAll('[data-scene-viewer]')

        sceneContainers.forEach((container, index) => {
          const aScene = container.querySelector('a-scene')
          if (aScene) {
            SceneViewer.setupCameraRigControls(container as HTMLElement, aScene)
          }
        })
      }, 300)
    }

    waitForAFrame()
  }

  // CONTRÔLES DU CAMERA RIG
  private static setupCameraRigControls (container: HTMLElement, aScene: Element): void {
    const cameraRig = aScene.querySelector('#cameraRig') as any
    const camera = aScene.querySelector('a-entity[camera]') as any

    if (!cameraRig || !camera) {
      console.warn('Camera rig or camera not found')
      return
    }

    // Variables de contrôle
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    // RÉCUPÉRER LA POSITION INITIALE RÉELLE DE LA CAMÉRA
    const initialCameraPos = camera.getAttribute('position')

    let initialX = initialCameraPosition[0]
    let initialY = initialCameraPosition[1]
    let initialZ = initialCameraPosition[2]

    // Parser la position initiale - maintenant c'est un objet !
    if (initialCameraPos && typeof initialCameraPos === 'object') {
      initialX = initialCameraPos.x || initialCameraPos[0] || 0
      initialY = initialCameraPos.y || initialCameraPos[1] || 3
      initialZ = initialCameraPos.z || initialCameraPos[2] || 4
    }

    // Calculer la distance initiale et garder les proportions
    const initialDistance = Math.sqrt((initialX - cameraRigPosition[0]) ** 2 + (initialY - cameraRigPosition[1]) ** 2 + (initialZ - cameraRigPosition[2]) ** 2)

    // Normaliser la direction initiale
    const directionX = initialX / initialDistance
    const directionY = initialY / initialDistance
    const directionZ = initialZ / initialDistance

    // Distance actuelle (pour le zoom)
    let currentDistance = initialDistance

    // Rotation du rig (azimuth et élévation)
    let rigRotationY = 0
    let rigRotationX = 0

    // Mise à jour de la position et rotation du rig
    const updateCameraRig = () => {
      // Appliquer la rotation au rig
      cameraRig.setAttribute('rotation', `${rigRotationX} ${rigRotationY} 0`)

      // Calculer la nouvelle position de la caméra en gardant les proportions initiales
      const newX = directionX * currentDistance
      const newY = directionY * currentDistance
      const newZ = directionZ * currentDistance
      // Appliquer la nouvelle position
      camera.setAttribute('position', `${newX} ${newY} ${newZ}`)
    }

    // Gestionnaires d'événements (inchangés)
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
      container.style.cursor = 'grabbing'
      e.preventDefault()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaX = previousMousePosition.x - e.clientX
      const deltaY = previousMousePosition.y - e.clientY

      // Sensibilité de rotation
      const sensitivity = 0.5

      // Mise à jour des rotations du rig
      rigRotationY += deltaX * sensitivity
      rigRotationX += deltaY * sensitivity
      rigRotationX = Math.max(-80, Math.min(80, rigRotationX))

      updateCameraRig()
      previousMousePosition = { x: e.clientX, y: e.clientY }
      e.preventDefault()
    }

    const handleMouseUp = () => {
      if (isDragging) {
        isDragging = false
        container.style.cursor = 'grab'
      }
    }

    // Zoom avec la molette - modifier la distance en gardant les proportions
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const zoomSpeed = 0.2
      currentDistance += e.deltaY * zoomSpeed
      currentDistance = Math.max(2, Math.min(20, currentDistance))
      updateCameraRig()
    }

    // Attacher les événements
    container.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('wheel', handleWheel)

    // Gestion tactile (mise à jour pour currentDistance)
    let lastTouchDistance = 0

    container.addEventListener('touchstart', (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true
        const touch = e.touches[0]
        previousMousePosition = { x: touch.clientX, y: touch.clientY }
      } else if (e.touches.length === 2) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        lastTouchDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        )
      }
      e.preventDefault()
    })

    container.addEventListener('touchmove', (e: TouchEvent) => {
      if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0]
        const deltaX = previousMousePosition.x - touch.clientX
        const deltaY = previousMousePosition.y - touch.clientY

        const sensitivity = 0.5
        rigRotationY += deltaX * sensitivity
        rigRotationX -= deltaY * sensitivity
        rigRotationX = Math.max(-80, Math.min(80, rigRotationX))

        updateCameraRig()
        previousMousePosition = { x: touch.clientX, y: touch.clientY }
      } else if (e.touches.length === 2) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const currentTouchDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        )

        if (lastTouchDistance > 0) {
          const zoomSpeed = 0.01
          const deltaDistance = currentTouchDistance - lastTouchDistance
          currentDistance -= deltaDistance * zoomSpeed
          currentDistance = Math.max(2, Math.min(20, currentDistance))
          updateCameraRig()
        }

        lastTouchDistance = currentTouchDistance
      }
      e.preventDefault()
    })

    container.addEventListener('touchend', (e: TouchEvent) => {
      if (e.touches.length === 0) {
        isDragging = false
        lastTouchDistance = 0
      }
      e.preventDefault()
    })
  }

  public setCamera ({
    position = [0, 6, 8], // Position du rig (centre d'orbite)
    cameraDistance = 10,   // Distance de la caméra par rapport au rig
    fov = 80
  }: {
    position?: [number, number, number];
    cameraDistance?: number;
    fov?: number;
  }): void {
    const rigPos = position.join(' ')

    this.camera = `
      <a-entity id="cameraRig" position="${rigPos}">
        <a-entity camera 
                  position="0 0 ${cameraDistance}" 
                  fov="${fov}"
                  look-controls="enabled: false"
                  wasd-controls="enabled: false">
        </a-entity>
      </a-entity>
    `
  }

  public addBox ({
    position = [0, 0.5, 0],
    color = '#4CC3D9',
    width = 1,
    height = 1,
    depth = 1,
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    width?: number;
    height?: number;
    depth?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`

    this.sceneElements.push(`
      <a-box position="${posStr}" ${materialAttr} width="${width}" height="${height}" depth="${depth}"></a-box>
    `)
  }

  public addPlane ({ position = [0, 0, 0], rotation = [0, 0, 0], width = 10, height = 10, color = '#7BC8A4' } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation
    this.sceneElements.push(`
      <a-plane position="${posStr}" rotation="${rotStr}" width="${width}" height="${height}" color="${color}"></a-plane>
    `)
  }

  // SPHÈRE
  public addSphere ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],        // NOUVEAU
    radius = 1,
    color = '#EF2D5E',
    segmentsWidth = 18,
    segmentsHeight = 36,
    wireframe = false,
    texture = '',
    textureRepeat = [1, 1],
    opacity = 1
  }: {
    position?: [number, number, number] | string;
    rotation?: [number, number, number] | string;  // NOUVEAU
    color?: string;
    radius?: number;
    segmentsWidth?: number;
    segmentsHeight?: number;
    wireframe?: boolean | 'edges';
    texture?: string;
    textureRepeat?: [number, number];
    opacity?: number;
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation  // NOUVEAU

    let materialAttr = ''
    if (texture) {
      materialAttr = `material="src: ${texture}; 
                              color: ${color}; 
                              transparent: ${opacity < 1}; 
                              opacity: ${opacity};
                              repeat: ${textureRepeat[0]} ${textureRepeat[1]}"`
    } else if (wireframe) {
      materialAttr = `material="color: ${color}; wireframe: true"`
    } else {
      materialAttr = `color="${color}"`
    }

    this.sceneElements.push(`
      <a-sphere position="${posStr}" 
                rotation="${rotStr}"          
                ${materialAttr}
                radius="${radius}" 
                segments-width="${segmentsWidth}"
                segments-height="${segmentsHeight}"></a-sphere>
    `)
  }

  // CYLINDRE
  public addCylinder ({
    position = [0, 0, 0],
    radius = 1,
    height = 2,
    color = '#FFC65D',
    segmentsRadial = 36,
    segmentsHeight = 1,
    openEnded = false,
    thetaStart = 0,
    thetaLength = 360,
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    radius?: number;
    height?: number;
    segmentsRadial?: number;
    segmentsHeight?: number;
    openEnded?: boolean;
    thetaStart?: number;
    thetaLength?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`

    this.sceneElements.push(`
      <a-cylinder position="${posStr}" 
                  ${materialAttr}
                  radius="${radius}" 
                  height="${height}" 
                  segments-radial="${segmentsRadial}"
                  segments-height="${segmentsHeight}"
                  open-ended="${openEnded}"
                  theta-start="${thetaStart}"
                  theta-length="${thetaLength}"></a-cylinder>
    `)
  }

  // CÔNE
  public addCone ({
    position = [0, 0, 0],
    radiusBottom = 1,
    radiusTop = 0.1,
    height = 2,
    color = '#7BC8A4',
    segmentsRadial = 36,
    segmentsHeight = 1,
    openEnded = false,
    thetaStart = 0,
    thetaLength = 360,
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    radiusBottom?: number;
    radiusTop?: number;
    height?: number;
    segmentsRadial?: number;
    segmentsHeight?: number;
    openEnded?: boolean;
    thetaStart?: number;
    thetaLength?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    this.sceneElements.push(`
      <a-cone position="${posStr}" 
              radius-bottom="${radiusBottom}" 
              ${materialAttr}
              radius-top="${radiusTop}" 
              height="${height}" 
              color="${color}"
              segments-radial="${segmentsRadial}"
              segments-height="${segmentsHeight}"
              open-ended="${openEnded}"
              theta-start="${thetaStart}"
              theta-length="${thetaLength}"></a-cone>
    `)
  }

  // TORE (TORUS)
  public addTorus ({
    position = [0, 0, 0],
    radius = 1,
    radiusTubular = 0.2,
    color = '#43A047',
    segmentsRadial = 36,
    segmentsTubular = 32,
    arc = 360,
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    radius?: number;
    radiusTubular?: number;
    segmentsRadial?: number;
    segmentsTubular?: number;
    arc?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-torus position="${posStr}" 
                ${materialAttr}
               radius="${radius}" 
               radius-tubular="${radiusTubular}" 
               color="${color}"
               segments-radial="${segmentsRadial}"
               segments-tubular="${segmentsTubular}"
               arc="${arc}"></a-torus>
    `)
  }

  // DODÉCAÈDRE
  public addDodecahedron ({
    position = [0, 0, 0],
    radius = 1,
    color = '#FF6D00',
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    radius?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-dodecahedron position="${posStr}" 
                      ${materialAttr}
                      radius="${radius}" 
                      color="${color}"></a-dodecahedron>
    `)
  }

  // ICOSAÈDRE
  public addIcosahedron ({
    position = [0, 0, 0],
    radius = 1,
    color = '#E91E63',
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    radius?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-icosahedron position="${posStr}" 
                      ${materialAttr}
                     radius="${radius}" 
                     color="${color}"></a-icosahedron>
    `)
  }

  // OCTAÈDRE
  public addOctahedron ({
    position = [0, 0, 0],
    radius = 1,
    color = '#9C27B0',
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    radius?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-octahedron position="${posStr}"
                    ${materialAttr}
                    radius="${radius}" 
                    color="${color}"></a-octahedron>
    `)
  }

  // TÉTRAÈDRE
  public addTetrahedron ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    radius = 1,
    color = '#3F51B5',
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    rotation?: [number, number, number] | string;
    color?: string;
    radius?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-tetrahedron position="${posStr}" 
                      rotation="${Array.isArray(rotation) ? rotation.join(' ') : rotation}"
                      ${materialAttr}
                     radius="${radius}" 
                     color="${color}"></a-tetrahedron>
    `)
  }

  // ANNEAU (RING)
  public addRing ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    radiusInner = 0.5,
    radiusOuter = 1,
    color = '#4CAF50',
    segmentsTheta = 32,
    segmentsPhi = 8,
    thetaStart = 0,
    thetaLength = 360,
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    rotation?: [number, number, number] | string;
    radiusInner?: number;
    radiusOuter?: number;
    segmentsTheta?: number;
    segmentsPhi?: number;
    thetaStart?: number;
    thetaLength?: number;

    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation
    this.sceneElements.push(`
      <a-ring position="${posStr}" 
              ${materialAttr}
              rotation="${rotStr}"
              radius-inner="${radiusInner}" 
              radius-outer="${radiusOuter}" 
              color="${color}"
              segments-theta="${segmentsTheta}"
              segments-phi="${segmentsPhi}"
              theta-start="${thetaStart}"
              theta-length="${thetaLength}"></a-ring>
    `)
  }

  // CERCLE
  public addCircle ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    radius = 1,
    color = '#FF5722',
    segments = 32,
    thetaStart = 0,
    thetaLength = 360,
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    rotation?: [number, number, number] | string;
    radius?: number;
    segments?: number;
    thetaStart?: number;
    thetaLength?: number;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation
    this.sceneElements.push(`
      <a-circle position="${posStr}" 
                ${materialAttr}
                rotation="${rotStr}"
                radius="${radius}" 
                color="${color}"
                segments="${segments}"
                theta-start="${thetaStart}"
                theta-length="${thetaLength}"></a-circle>
    `)
  }

  // TRIANGLE
  public addTriangle ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    vertexA = [0, 0.5, 0],
    vertexB = [-0.5, -0.5, 0],
    vertexC = [0.5, -0.5, 0],
    color = '#795548',
    wireframe = false
  }: {
    position?: [number, number, number] | string;
    color?: string;
    rotation?: [number, number, number] | string;
    vertexA?: [number, number, number] | string;
    vertexB?: [number, number, number] | string;
    vertexC?: [number, number, number] | string;
    wireframe?: boolean | 'edges';
  } = {}): void {
    const materialAttr = wireframe
      ? `material="color: ${color}; wireframe: true"`
      : `color="${color}"`
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation
    const vertexAStr = Array.isArray(vertexA) ? vertexA.join(' ') : vertexA
    const vertexBStr = Array.isArray(vertexB) ? vertexB.join(' ') : vertexB
    const vertexCStr = Array.isArray(vertexC) ? vertexC.join(' ') : vertexC
    this.sceneElements.push(`
      <a-triangle position="${posStr}" 
                  ${materialAttr}
                  rotation="${rotStr}"
                  vertex-a="${vertexAStr}" 
                  vertex-b="${vertexBStr}" 
                  vertex-c="${vertexCStr}" 
                  color="${color}"></a-triangle>
    `)
  }

  // TEXTE 3D - VERSION AVEC COMPOSANT CUSTOM
  public addText ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    value = 'Hello World',
    color = '#ffffff',
    font = 'roboto',
    fontSize = 5,
    align = 'center',
    baseline = 'center',
    width = 5,
    wrapCount = 40,
    useCustomComponent = false // Option pour utiliser le composant custom
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation

    if (useCustomComponent) {
      // Utiliser le composant geographic-label
      this.sceneElements.push(`
        <a-entity position="${posStr}" 
                  rotation="${rotStr}"
                  geographic-label="text: ${value}; 
                                   color: ${color}; 
                                   size: ${fontSize}; 
                                   width: ${width}; 
                                   align: ${align}; 
                                   baseline: ${baseline}"
                  scale="${fontSize} ${fontSize} 1"></a-entity>
      `)
    } else {
      // Utiliser la méthode standard A-Frame
      this.sceneElements.push(`
        <a-entity position="${posStr}" 
                  rotation="${rotStr}"
                  text="value: ${value}; 
                        color: ${color}; 
                        font: ${font}; 
                        fontSize: ${fontSize}; 
                        align: ${align}; 
                        baseline: ${baseline}; 
                        width: ${width}; 
                        wrapCount: ${wrapCount}"></a-entity>
      `)
    }
  }

  // COURBE (utilise a-curve et a-curve-point)
  public addCurve ({
    id = 'curve',
    points = [[0, 0, 0], [1, 1, 1], [2, 0, 2]],
    type = 'CatmullRom'
  } = {}): void {
    // Points de la courbe
    const curvePoints = points.map((point, index) => {
      const pos = Array.isArray(point) ? point.join(' ') : point
      return `<a-curve-point id="curve-point-${index}" position="${pos}"></a-curve-point>`
    }).join('\n')

    // IDs des points pour la courbe
    const pointIds = points.map((_, index) => `#curve-point-${index}`).join(' ')

    this.sceneElements.push(`
      ${curvePoints}
      <a-curve id="${id}" curve="type: ${type}; points: ${pointIds}"></a-curve>
    `)
  }

  public addAmbientLight ({ color = '#404040', intensity = 0.4 } = {}): void {
    this.sceneElements.push(`
      <a-light type="ambient" color="${color}" intensity="${intensity}"></a-light>
    `)
  }

  public addDirectionnalLight ({ color = '#ffffff', intensity = 1, position = [0, 1, 0] } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-light type="directional" color="${color}" intensity="${intensity}" position="${posStr}"></a-light>
    `)
  }

  public addPointLight ({ color = '#ffffff', intensity = 1, position = [0, 1, 0] } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    this.sceneElements.push(`
      <a-light type="point" color="${color}" intensity="${intensity}" position="${posStr}"></a-light>
    `)
  }

  public addMesh (htmlString: string): void {
    this.sceneElements.push(htmlString)
  }

  // Méthode pour ajouter votre sphère wireframe personnalisée
  public addCustomWireSphere ({
    position = [0, 0, 0],
    radius = 1,
    parallels = 4,
    meridians = 8,
    segments = 32,
    parallelColor = '#cccccc',
    meridianColor = '#cccc00',
    showParallels = true,
    showMeridians = true,
    showEquator = true,
    equatorColor = '#ffff00',
    equatorThickness = 0.02,      // NOUVEAU
    showGreenwich = false,
    greenwichColor = '#00ffff',
    greenwichThickness = 0.02     // NOUVEAU
  }: {
    position?: [number, number, number] | string;
    radius?: number;
    parallels?: number;      // Nombre de parallèles (hors équateur)
    meridians?: number;      // Nombre de méridiens
    segments?: number;       // Résolution (lissage des courbes)
    parallelColor?: string;          // Couleur des parallèles
    meridianColor?: string;  // Couleur des méridiens
    showParallels?: boolean;
    showMeridians?: boolean;
    showEquator?: boolean;
    equatorColor?: string;   // Couleur de l'équateur
    equatorThickness?: number;
    showGreenwich?: boolean; // Afficher le méridien de Greenwich
    greenwichColor?: string; // Couleur du méridien de Greenwich
    greenwichThickness?: number;
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position

    this.sceneElements.push(`
      <a-entity position="${posStr}" 
                custom-wire-sphere="
                  radius: ${radius}; 
                  parallels: ${parallels}; 
                  meridians: ${meridians}; 
                  segments: ${segments};
                  parallelColor: ${parallelColor}; 
                  meridianColor: ${meridianColor};
                  showParallels: ${showParallels};
                  showMeridians: ${showMeridians};
                  showEquator: ${showEquator};
                  equatorColor: ${equatorColor};
                  equatorThickness: ${equatorThickness};
                  showGreenwich: ${showGreenwich};
                  greenwichColor: ${greenwichColor};
                  greenwichThickness: ${greenwichThickness}
                "></a-entity>
    `)
  }

  // Méthode pour ajouter un point géographique sur une sphère
  public addGeographicPoint ({
    spherePosition = [0, 0, 0],
    sphereRadius = 1,
    latitude = 0,
    longitude = 0,
    altitude = 0,
    pointRadius = 0.03,
    pointColor = '#ff0000',
    label = '',
    labelColor = '#000000',
    labelOffset = 0.2,
    labelSize = 0.5,
    font = 'dejavu',
  }: {
    spherePosition?: [number, number, number] | string;
    sphereRadius?: number;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    pointRadius?: number;
    pointColor?: string;
    label?: string;
    labelColor?: string;
    labelOffset?: number;
    labelSize?: number;
    font?: string;
  } = {}): void {
    // Convertir la position de la sphère
    const spherePos = Array.isArray(spherePosition) ? spherePosition : [0, 0, 0]

    // Convertir latitude/longitude en radians
    const latRad = (latitude * Math.PI) / 180
    const lonRad = (longitude * Math.PI) / 180

    // CALCUL CORRIGÉ - coordonnées sphériques géographiques
    const r = sphereRadius + altitude

    const x = spherePos[0] + r * Math.cos(latRad) * Math.sin(lonRad)
    const y = spherePos[1] + r * Math.sin(latRad)
    const z = spherePos[2] + r * Math.cos(latRad) * Math.cos(lonRad)

    // Ajouter le point (petit cube)
    this.addBox({
      position: [x, y, z],
      width: pointRadius * 2,
      height: pointRadius * 2,
      depth: pointRadius * 2,
      color: pointColor
    })

    // Ajouter le label si fourni
    if (label) {
      // Position du texte légèrement décalée
      const labelR = r + labelOffset
      const labelX = spherePos[0] + labelR * Math.cos(latRad) * Math.sin(lonRad)
      const labelY = spherePos[1] + labelR * Math.sin(latRad)
      const labelZ = spherePos[2] + labelR * Math.cos(latRad) * Math.cos(lonRad)

      // MODIFIÉ : Transmettre useCustomDegree
      this.addGeographicLabel({
        position: [labelX, labelY, labelZ],
        text: label,
        color: labelColor,
        size: labelSize,
        font
      })
    }
  }

  // Méthode pour ajouter plusieurs points géographiques d'un coup
  public addGeographicPoints ({
    spherePosition = [0, 0, 0],
    sphereRadius = 1,
    points = [],
    defaultPointRadius = 0.03,     // VÉRIFIER : pointRadius
    defaultPointColor = '#ff0000',
    defaultLabelColor = '#ffffff',
    defaultLabelOffset = 0.2,
    defaultLabelSize = 0.5,
    defaultFont = 'sourcecodepro',
  }: {
    spherePosition?: [number, number, number] | string;
    sphereRadius?: number;
    points?: Array<{
      latitude: number;
      longitude: number;
      altitude?: number;
      pointRadius?: number;        // VÉRIFIER : pointRadius
      pointColor?: string;
      label?: string;
      labelColor?: string;
      labelOffset?: number;
      labelSize?: number;
      font?: string;
    }>;
    defaultPointRadius?: number;
    defaultPointColor?: string;
    defaultLabelColor?: string;
    defaultLabelOffset?: number;
    defaultLabelSize?: number;
    defaultFont?: string;
  } = {}): void {
    points.forEach(point => {
      this.addGeographicPoint({
        spherePosition,
        sphereRadius,
        latitude: point.latitude,
        longitude: point.longitude,
        altitude: point.altitude || 0,
        pointRadius: point.pointRadius || defaultPointRadius,  // VÉRIFIER
        pointColor: point.pointColor || defaultPointColor,
        label: point.label || '',
        labelColor: point.labelColor || defaultLabelColor,
        labelOffset: point.labelOffset || defaultLabelOffset,
        labelSize: point.labelSize || defaultLabelSize,
        font: point.font || defaultFont,
      })
    })
  }

  // Méthode générique pour ajouter n'importe quel composant custom
  public addCustomComponent ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    componentName,
    componentProps = {}
  }: {
    position?: [number, number, number] | string;
    rotation?: [number, number, number] | string;
    componentName: string;
    componentProps?: Record<string, any>;
  }): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(rotation) ? rotation.join(' ') : rotation

    // Convertir les props en string A-Frame
    const propsStr = Object.entries(componentProps)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ')

    this.sceneElements.push(`
      <a-entity position="${posStr}" 
                rotation="${rotStr}"
                ${componentName}="${propsStr}"></a-entity>
    `)
  }

  public setSize (width: number, height: number): void {
    this.width = width
    this.height = height
  }

  // Nouvelle méthode spécifique pour les labels géographiques
  public addGeographicLabel ({
    position = [0, 0, 0],
    text = 'Label',
    color = '#000000',
    size = 0.5,
    width = 8,
    align = 'center',
    baseline = 'center',
    font = 'dejavu',
    orientation = 'billboard',
    customRotation = [0, 0, 0],
  }: {
    position?: [number, number, number] | string;
    text?: string;
    color?: string;
    size?: number;
    width?: number;
    align?: string;
    baseline?: string;
    font?: string;
    orientation?: 'billboard' | 'custom';
    customRotation?: [number, number, number];
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position
    const rotStr = Array.isArray(customRotation) ? `${customRotation[0]} ${customRotation[1]} ${customRotation[2]}` : customRotation

    // Version standard sans symbole degré
    this.sceneElements.push(`
        <a-entity position="${posStr}" 
                  ${orientation === 'billboard' ? 'billboard=""' : `rotation="${rotStr}"`}
                  text="value: ${text}; 
                        color: ${color}; 
                        font: ${font};
                        align: ${align}; 
                        baseline: ${baseline};
                        width: ${width}"
                  scale="${size} ${size} 1"></a-entity>
      `)
  }

  public addRealisticEarthSphere ({
    position = [0, 0, 0],
    radius = 1,
    diffuseMap = '#earthTexture',      // Texture principale
    normalMap = '#earthNormalMap',     // Relief
    bumpMap = '',                      // Alternative à normal map
    specularMap = '',                  // Réflexion (océans brillants)
    emissiveMap = '',                  // Lumières des villes (texture night)
    normalScale = 0.5,
    bumpScale = 0.1,
    greenwichAlignment = -90,
    segmentsWidth = 64,
    segmentsHeight = 32
  }: {
    position?: [number, number, number] | string;
    radius?: number;
    diffuseMap?: string;
    normalMap?: string;
    bumpMap?: string;
    specularMap?: string;
    emissiveMap?: string;
    normalScale?: number;
    bumpScale?: number;
    greenwichAlignment?: number;
    segmentsWidth?: number;
    segmentsHeight?: number;
  } = {}): void {
    const posStr = Array.isArray(position) ? position.join(' ') : position

    let materialProps = `src: ${diffuseMap}; 
                         shader: standard;
                         color: white`

    if (normalMap) {
      materialProps += `; normalMap: ${normalMap}; normalScale: ${normalScale} ${normalScale}`
    }

    if (bumpMap) {
      materialProps += `; bumpMap: ${bumpMap}; bumpScale: ${bumpScale}`
    }

    if (specularMap) {
      materialProps += `; specularMap: ${specularMap}`
    }

    if (emissiveMap) {
      materialProps += `; emissiveMap: ${emissiveMap}`
    }

    this.sceneElements.push(`
      <a-sphere position="${posStr}" 
                rotation="0 ${greenwichAlignment} 0"
                radius="${radius}"
                segments-width="${segmentsWidth}"
                segments-height="${segmentsHeight}"
                material="${materialProps}"></a-sphere>
    `)
  }
}

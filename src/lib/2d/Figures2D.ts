import { ObjetMathalea2D } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { point, type Point } from './points'
import { type Segment } from './segmentsVecteurs'
import { rotation } from './transformations'
function rotatedBoundingBoxWithCenter (
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
  alpha: number,
  cx: number,
  cy: number
): [number, number, number, number] {
  const w2 = (xmax - xmin) / 2
  const h2 = (ymax - ymin) / 2

  const cosA = Math.cos(alpha)
  const sinA = Math.sin(alpha)

  const dx = Math.abs(w2 * cosA) + Math.abs(h2 * sinA)
  const dy = Math.abs(w2 * sinA) + Math.abs(h2 * cosA)

  const centerX = (xmin + xmax) / 2
  const centerY = (ymin + ymax) / 2

  const rotatedCenterX = cosA * (centerX - cx) - sinA * (centerY - cy) + cx
  const rotatedCenterY = sinA * (centerX - cx) + cosA * (centerY - cy) + cy

  return [
    rotatedCenterX - dx,
    rotatedCenterY - dy,
    rotatedCenterX + dx,
    rotatedCenterY + dy,
  ]
}

export class Figure2D extends ObjetMathalea2D {
  codeSvg: string
  codeTikz: string
  scale: { x: number, y: number }
  angle: number
  width: number // laargeur en cm
  height: number // hauteur en cm
  pixelsParCm: number
  axes: Segment[]
  centre: Point | null
  nbAxes: number
  name: string
  constructor ({
    codeSvg,
    codeTikz,
    x = 0,
    y = 0,
    angle = 0,
    scale = { x: 1, y: 1 },
    width = 0,
    height = 0,
    pixelsParCm = context.pixelsParCm,
    axes = [],
    centre = null,
    nbAxes,
    opacite = 1,
    name = Date.now().toString()
  }: {
    codeSvg: string,
    codeTikz: string,
    x?: number,
    y?: number,
    angle?: number,
    scale?: { x: number, y: number },
    width: number,
    height: number,
    pixelsParCm?: number,
    axes?: Segment[]
    centre?: Point | null
    nbAxes?: number
    opacite?: number
    name?: string
  }) {
    super()
    this.name = name
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.pixelsParCm = pixelsParCm
    this.angle = angle
    this.scale = scale
    this.codeSvg = codeSvg
    this.codeTikz = codeTikz
    this.opacite = opacite
    this.bordures = [
      (this.x - this.width / 2),
      (this.y - this.height / 2),
      (this.x + this.width / 2),
      (this.y + this.height / 2)
    ]
    this.axes = axes
    this.nbAxes = nbAxes ?? this.axes.length
    this.centre = centre
    if (this.angle !== 0) {
      this.bordures = rotatedBoundingBoxWithCenter(this.bordures[0], this.bordures[1], this.bordures[2], this.bordures[3], this.angle * Math.PI / 180, this.x, this.y)
    }
  }

  svg (coeff: number) {
    return `<g opacity=${this.opacite} transform="translate(${this.x * coeff}, ${-this.y * coeff}) scale(${this.scale.x},${this.scale.y}) rotate(${-this.angle})">${this.codeSvg}</g>`
  }

  tikz () {
    // const tikzCenterX = this.width / 2
    // const tikzCenterY = this.height / 2
    return `\\begin{scope}[shift={(${this.x},${this.y})}, xscale=${this.scale.x}, yscale=${this.scale.y}, rotate around={${this.angle}:(0,0)}]${this.codeTikz}\\end{scope}`
  }

  rotate (angle: number) {
    this.angle += angle
    this.bordures = rotatedBoundingBoxWithCenter(this.bordures[0], this.bordures[1], this.bordures[2], this.bordures[3], this.angle * Math.PI / 180, this.x, this.y)
    return this
  }

  dilate (factor: { x: number, y: number } | number) {
    if (typeof factor === 'number') {
      factor = { x: factor, y: factor }
    }
    this.scale.x *= factor.x
    this.scale.y *= factor.y
    this.width = this.width * factor.x
    this.height = this.height * factor.y
    let xmin = this.bordures[0]
    let ymin = this.bordures[1]
    let xmax = this.bordures[2]
    let ymax = this.bordures[3]
    xmin = (xmin - this.x) * factor.x + this.x
    ymin = (ymin - this.y) * factor.y + this.y
    xmax = (xmax - this.x) * factor.x + this.x
    ymax = (ymax - this.y) * factor.y + this.y
    this.bordures = [
      xmin,
      ymin,
      xmax,
      ymax
    ]
    return this
  }

  translate (dx: number, dy: number) {
    this.x += dx
    this.y += dy
    this.bordures = [
      this.bordures[0] + dx,
      this.bordures[1] + dy,
      this.bordures[2] + dx,
      this.bordures[3] + dy
    ]
    return this
  }

  flip (axes:'x' | 'y' | 'xy' = 'x') {
    if (axes === 'x') {
      this.scale.x = -this.scale.x
      this.angle = -this.angle
    } else if (axes === 'y') {
      this.scale.y = -this.scale.y
      this.angle = -this.angle
    } else if (axes === 'xy') {
      this.scale.x = -this.scale.x
      this.scale.y = -this.scale.y
    }
    return this
  }

  copy (newName: string) {
    return new Figure2D({
      codeSvg: this.codeSvg,
      codeTikz: this.codeTikz,
      x: this.x,
      y: this.y,
      angle: this.angle,
      scale: this.scale,
      width: this.width,
      height: this.height,
      pixelsParCm: this.pixelsParCm,
      axes: this.axes,
      centre: this.centre,
      nbAxes: this.nbAxes,
      opacite: this.opacite,
      name: newName
    })
  }

  rotationAnimee ({ angleStart = 0, angleEnd = 180, cx, cy, duration = '1s', repeatCount = 'infinite', loop = true, delay = 0 }: {
    angleStart?: number,
    angleEnd?: number,
    duration?: string,
    repeatCount?: string,
    loop?: boolean,
    delay?: number,
    cx?: number,
    cy?: number
  }) {
    if (cx === undefined) {
      cx = this.x * this.pixelsParCm
    }
    if (cy === undefined) {
      cy = -this.y * this.pixelsParCm
    }
    return new Figure2D({
      codeSvg: `<g> 
      <animateTransform
      attributeName="transform"
      type="rotate"
      from="${angleStart} ${cx} ${cy}"
      to="${angleEnd} ${cx} ${cy}"
      dur="${duration}"
      repeatCount="${repeatCount}"
      begin="${loop ? `0s; ${delay}s` : '0s'}"
      keyTimes="0;0.4;0.5;0.9;1"
      values="${angleStart} ${cx} ${cy};${angleEnd} ${cx} ${cy};${angleEnd} ${cx} ${cy};${angleStart} ${cx} ${cy};${angleStart} ${cx} ${cy}"
      />
        <g transform="translate(${this.x * this.pixelsParCm}, ${-this.y * this.pixelsParCm}) scale(${this.scale.x},${this.scale.y}) rotate(${-this.angle})">${this.codeSvg}</g>
      </g>`,
      codeTikz: `\\begin{scope}[shift={(${this.x},${this.y})}, xscale=${this.scale.x}, yscale=${this.scale.y}, rotate around={${this.angle}:(0,0)}]${this.codeTikz}\\end{scope})`,
      width: this.width,
      height: this.height,
      pixelsParCm: this.pixelsParCm
    })
  }

  dilatationAnimee ({ cx, cy, factorXStart = 1, factorXEnd = -1, factorYStart = 1, factorYEnd = 1, duration = '1s', repeatCount = 'infinite', loop = true, delay = 0 }: {
    factorXStart?: number,
    factorXEnd?: number,
    factorYStart?: number,
    factorYEnd?: number,
    duration?: string,
    repeatCount?: string,
    loop?: boolean,
    delay?: number,
    cx?: number,
    cy?: number
  }) {
    if (cx === undefined) {
      cx = this.x * this.pixelsParCm
    }
    if (cy === undefined) {
      cy = -this.y * this.pixelsParCm
    }
    return new Figure2D({
      codeSvg: `<g transform="translate(${cx}, ${cy})"> 
      <g>
      <animateTransform
      attributeName="transform"
      type="scale"
      from="${factorXStart} ${factorYStart}"
      to="${factorXEnd} ${factorYEnd}"
      dur="${duration}"
      repeatCount="${repeatCount}"
      begin="${loop ? `0s; ${delay}s` : '0s'}"
      keyTimes="0;0.4;0.5;0.9;1"
      values="${factorXStart} ${factorYStart};${factorXEnd} ${factorYEnd};${factorXEnd} ${factorYEnd};${factorXStart} ${factorYStart};${factorXStart} ${factorYStart}"
      />
        <g transform=" scale(${this.scale.x},${this.scale.y}) rotate(${-this.angle})">${this.codeSvg}</g>
      </g>
      </g>`,
      codeTikz: `\\begin{scope}[shift={(${this.x},${this.y})}, xscale=${this.scale.x}, yscale=${this.scale.y}, rotate around={${this.angle}:(0,0)}]${this.codeTikz}\\end{scope})`,
      width: this.width,
      height: this.height,
      pixelsParCm: this.pixelsParCm
    })
  }

  translationAnimee ({ dx, dy, duration = '1s', repeatCount = 'infinite', loop = true, delay = 0 }: {
    dx: number,
    dy: number,
    duration?: string,
    repeatCount?: string,
    loop?: boolean,
    delay?: number
  }) {
    return new Figure2D({
      codeSvg: `<g>
      <animateTransform
      attributeName="transform"
      type="translate"
      from="${this.x * this.pixelsParCm} ${-this.y * this.pixelsParCm}"
      to="${this.x * this.pixelsParCm + dx} ${-this.y * this.pixelsParCm - dy}"
      dur="${duration}"
      repeatCount="${repeatCount}"
      begin="${loop ? `0s; ${delay}s` : '0s'}"
      keyTimes="0;0.4;0.5;0.9;1"
      values="${this.x * this.pixelsParCm} ${-this.y * this.pixelsParCm};${this.x * this.pixelsParCm + dx} ${-this.y * this.pixelsParCm - dy};${this.x * this.pixelsParCm + dx} ${-this.y * this.pixelsParCm - dy};${this.x * this.pixelsParCm} ${-this.y * this.pixelsParCm};${this.x * this.pixelsParCm} ${-this.y * this.pixelsParCm}"
      />
        <g transform=" scale(${this.scale.x},${this.scale.y}) rotate(${-this.angle})">${this.codeSvg}</g>
      </g>`,
      codeTikz: `\\begin{scope}[shift={(${this.x},${this.y})}, xscale=${this.scale.x}, yscale=${this.scale.y}, rotate around={${this.angle}:(0,0)}]${this.codeTikz}\\end{scope})`,
      width: this.width,
      height: this.height,
      pixelsParCm: this.pixelsParCm
    })
  }

  get axesAngles () {
    let angles: number[] = []
    if (this.Axes.length > 0) {
      angles = this.Axes.map(el => {
        const angle = Math.atan2(el.y1 - el.y2, el.x2 - el.x1) * 180 / Math.PI
        return angle
      })
    }
    return angles
  }

  autoReflectionAnimee (id: string, cx: number, cy: number) {
    const copieAnimee = new Figure2D({
      codeSvg: `<g id="${id}"style="filter: drop-shadow(7px 0px 10px rgb(25, 25, 25) )">
      ${this.svg(20)}
       transform="matrix(1 0 0 1 0 0)"
      </g>`,
      codeTikz: this.tikz(),
      width: this.width / this.scale.x,
      height: this.height / this.scale.y,
      pixelsParCm: this.pixelsParCm,
      scale: { x: 1, y: 1 },
      angle: 0,
      x: 0,
      y: 0,
      opacite: 1,
      axes: this.Axes
    })
    const ppcm = this.pixelsParCm

    copieAnimee.name = id
    document.addEventListener('exercicesAffiches', () => {
      // Création du clipPath
      const figure = document.getElementById(id)
      const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')
      const clipId = 'clip-' + id
      clipPath.setAttribute('id', clipId)
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('id', `clipingRect_${id}`)
      const largeur = 200 // Suffisamment grand pour couvrir la figure
      const hauteur = 200
      rect.setAttribute('x', String(cx * ppcm)) // String(cx - largeur / 2))
      rect.setAttribute('y', String(cy * ppcm - hauteur / 2))
      rect.setAttribute('width', String(largeur))
      rect.setAttribute('height', String(hauteur))
      clipPath.appendChild(rect)
      figure?.appendChild(clipPath)
      figure?.setAttribute('clip-path', `url(#${clipId})`)
      let progress = 0
      let currentSymmetry = 0
      let animating = false
      function computeSymmetryMatrix (progress: number, angleDeg: number, cx: number, cy: number) {
        const angle = angleDeg * Math.PI / 180
        const cosA = Math.cos(angle)
        const sinA = Math.sin(angle)

        const sy = 1 - 2 * progress

        const a = cosA * cosA + sinA * sinA * sy
        const b = cosA * sinA * (1 - sy)
        const c = cosA * sinA * (1 - sy)
        const d = sinA * sinA + cosA * cosA * sy

        const tx = cx - a * cx - c * cy
        const ty = cy - b * cx - d * cy

        return { a, b, c, d, tx, ty }
      }
      function animateSymmetry (angleDeg: number, onComplete: () => void) {
        // Création du rectangle bord gauche centré en (cx, cy) avec largeur et hauteur suffisantes
        const rect = document.getElementById(`clipingRect_${id}`)
        if (!rect) return
        const largeur = 200 // Suffisamment grand pour couvrir la figure
        const hauteur = 200
        rect.setAttribute('x', String(cx * ppcm))
        rect.setAttribute('y', String(cy * ppcm - hauteur / 2))
        rect.setAttribute('width', String(largeur))
        rect.setAttribute('height', String(hauteur))

        // Rotation du rectangle autour de (cx, cy) pour orienter la coupe
        rect.setAttribute(
          'transform',
  `rotate(${angleDeg + 90}, ${cx * ppcm}, ${cy * ppcm})`
        )

        // Application du clipPath à la copie
        progress = 0

        function step () {
          progress += 0.01
          if (progress > 1) progress = 1
          //   rect?.setAttribute('style', `style="filter: drop-shadow(5px ${-(0.5 - Math.abs(progress - 0.5)) * 40}px 10px (rgb(25, 25, 25))"`)
          const { a, b, c, d, tx, ty } = computeSymmetryMatrix(progress, angleDeg, cx * ppcm, cy * ppcm)
          figure?.setAttribute('transform', `matrix(${a} ${b} ${c} ${d} ${tx} ${ty})`)

          if (progress < 1) {
            requestAnimationFrame(step)
          } else {
            onComplete()
          }
        }

        requestAnimationFrame(step)
      }

      function loopSymetries (symetries: number[]) {
        if (animating) return
        animating = true

        function next () {
          const angle = symetries[currentSymmetry]
          animateSymmetry(angle, () => {
            currentSymmetry = (currentSymmetry + 1) % symetries.length
            setTimeout(next, 300) // petite pause entre chaque symétrie
          })
        }
        next()
      }

      const symetries = copieAnimee.axesAngles
      if (symetries.length === 0) {
        figure?.setAttribute('transform', 'scale(1,1)')
      } else {
        loopSymetries(symetries)
      }
    })
    return copieAnimee
  }

  set Axes (axes: Segment[]) {
    this.axes = axes
    this.nbAxes = axes.length
  }

  get Axes () {
    return this.axes.map(el => rotation(el, point(0, 0), this.angle))
  }
}

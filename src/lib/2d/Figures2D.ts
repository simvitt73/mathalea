import { ObjetMathalea2D } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import type { Point } from './points'
import type { Segment } from './segmentsVecteurs'

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
    nbAxes = 0
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
  }) {
    super()
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.pixelsParCm = pixelsParCm
    this.angle = angle
    this.scale = scale
    this.codeSvg = codeSvg
    this.codeTikz = codeTikz
    this.bordures = [
      (this.x - this.width / 2),
      (this.y - this.height / 2),
      (this.x + this.width / 2),
      (this.y + this.height / 2)
    ]
    this.axes = axes
    this.nbAxes = nbAxes ?? this.axes.length
    this.centre = centre
  }

  svg (coeff: number) {
    return `<g transform="translate(${this.x * coeff}, ${-this.y * coeff}) scale(${this.scale.x},${this.scale.y}) rotate(${this.angle})">${this.codeSvg}</g>`
  }

  tikz () {
    // const tikzCenterX = this.width / 2
    // const tikzCenterY = this.height / 2
    return `\\begin{scope}[shift={(${this.x},${this.y})}, xscale=${this.scale.x}, yscale=${this.scale.y}, rotate around={${this.angle}:(0,0)}]${this.codeTikz}\\end{scope}`
  }

  rotate (angle: number) {
    this.angle += angle
    this.width = this.width * Math.abs(Math.cos(angle)) + this.height * Math.abs(Math.sin(angle))
    this.height = this.width * Math.abs(Math.sin(angle)) + this.height * Math.abs(Math.cos(angle))
    this.bordures = [
      (this.x - this.width / 2),
      (this.y - this.height / 2),
      (this.x + this.width / 2),
      (this.y + this.height / 2)
    ]
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
        <g transform="translate(${this.x * this.pixelsParCm}, ${-this.y * this.pixelsParCm}) scale(${this.scale.x},${this.scale.y}) rotate(${this.angle})">${this.codeSvg}</g>
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
        <g transform=" scale(${this.scale.x},${this.scale.y}) rotate(${this.angle})">${this.codeSvg}</g>
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
        <g transform=" scale(${this.scale.x},${this.scale.y}) rotate(${this.angle})">${this.codeSvg}</g>
      </g>`,
      codeTikz: `\\begin{scope}[shift={(${this.x},${this.y})}, xscale=${this.scale.x}, yscale=${this.scale.y}, rotate around={${this.angle}:(0,0)}]${this.codeTikz}\\end{scope})`,
      width: this.width,
      height: this.height,
      pixelsParCm: this.pixelsParCm
    })
  }

  set Axes (axes: Segment[]) {
    this.axes = axes
    this.nbAxes = axes.length
  }

  get Axes () {
    return this.axes
  }
}

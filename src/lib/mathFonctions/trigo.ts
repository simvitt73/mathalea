import { Angle } from './Angle'

/**
 * Convertit un angle de radian vers degrés et fonction inverse
 * @Example
 * // PI->180
 * @author Jean-Claude Lhote
 */
export function radToDeg(radians: number) {
  return (radians * 180) / Math.PI
}

export function degToRad(degres: number) {
  return (degres * Math.PI) / 180
}

/**
 * @param {number} a angle en degrés
 * @returns flottant : le cosinus de l'angle
 * @author Jean-Claude Lhote
 */
export function degCos(a: number) {
  return Math.cos(degToRad(a))
}

/**
 * @param {number} a angle en degrés
 * @returns flottant : le sinus de l'angle
 * @author Jean-Claude Lhote
 */
export function degSin(a: number) {
  return Math.sin(degToRad(a))
}

/**
 * @param {number} a angle en degrés
 * @returns flottant : la tangente de l'angle
 * @author Jean-Claude Lhote
 */
export function degTan(a: number) {
  return Math.tan(degToRad(a))
}

/**
 * @param {number} x un nombre qui correspond au cosinus de l'angle
 * @returns flottant : la mesure de l'angle en degrés
 * @author Jean-Claude Lhote
 */
export function degAcos(x: number) {
  return Number(radToDeg(Math.acos(x)).toFixed(1))
}

/**
 * @param {number} x un nombre qui correspond au sinus de l'angle
 * @returns flottant : la mesure de l'angle en degrés
 * @author Jean-Claude Lhote
 */
export function degAsin(x: number) {
  return Number(radToDeg(Math.asin(x)).toFixed(1))
}

/**
 * @param {number} x un nombre qui correspond à la tangente de l'angle
 * @returns flottant : la mesure de l'angle en degrés
 * @author Jean-Claude Lhote
 */
export function degAtan(x: number) {
  return Number(radToDeg(Math.atan(x)).toFixed(1))
}

export function angleOppose(angle: Angle) {
  // retourne l'angle opposé d'un angle du premier cadrant (sinon, on pourrait avoir plusieurs signe '-' collés ensemble)
  if (angle.degres === '0') {
    return angle
  } else {
    return new Angle({
      degres: '-' + angle.degres,
      cos: angle.cos,
      sin:
        angle.sin === '0'
          ? angle.sin
          : (opposeStringArray(angle.sin) as string),
      tan: angle.tan === '0' ? angle.tan : '-' + angle.tan,
      radians: '-' + angle.radians,
    })
  }
}

export function complementaireRad(angleEnRadian: string) {
  // retourne la mesure en radians du complémentaire d'un angle du premier quadrant donné également en radians
  switch (angleEnRadian) {
    case '\\dfrac{\\pi}{4}':
      return angleEnRadian
    case '\\dfrac{\\pi}{6}':
      return '\\dfrac{\\pi}{3}'
    case '\\dfrac{\\pi}{3}':
      return '\\dfrac{\\pi}{6}'
    case '\\dfrac{\\pi}{2}':
      return '0'
    case '0':
      return '\\dfrac{\\pi}{2}'
  }
}

export function supplementaireRad(angleEnRadian: string) {
  // retourne la mesure en radians du supplémentaire d'un angle du premier quadrant donné également en radians
  switch (angleEnRadian) {
    case '\\dfrac{\\pi}{4}':
      return '\\dfrac{3\\pi}{4}'
    case '\\dfrac{\\pi}{6}':
      return '\\dfrac{5\\pi}{6}'
    case '\\dfrac{\\pi}{3}':
      return '\\dfrac{2\\pi}{3}'
    case '\\dfrac{\\pi}{2}':
      return '\\dfrac{\\pi}{2}'
    case '0':
      return '\\pi'
  }
}

export function inverseTan(angle: Angle) {
  switch (angle.tan) {
    case '\\infin':
    case '-\\infin':
      return '0'
    case '1':
      return '1'
    case '\\sqrt{3}':
      return '\\dfrac{\\sqrt{3}}{3}'
    case '\\dfrac{\\sqrt{3}}{3}':
      return '\\sqrt{3}'
  }
}

export function angleComplementaire(angle: Angle) {
  // retourne l'angle complémentaire d'un angle du premier cadrant
  return new Angle({
    degres: (90 - parseInt(angle.degres)).toString(),
    cos: angle.sin,
    sin: angle.cos,
    tan: inverseTan(angle),
    radians: complementaireRad(angle.radians),
  })
}

export function angleSupplementaire(angle: Angle) {
  // retourne l'angle supplémentaire d'un angle du premier cadrant
  return new Angle({
    degres: (180 - parseInt(angle.degres)).toString(),
    cos: angle.cos === '0' ? '0' : (opposeStringArray(angle.cos) as string),
    sin: angle.sin,
    tan: angle.tan === '\\infin' ? '\\infin' : '-' + angle.tan,
    radians: supplementaireRad(angle.radians),
  })
}

export function opposeStringArray(value: string[] | string): string[] | string {
  if (Array.isArray(value)) {
    const result = []
    for (const e of value) {
      result.push('-' + e)
    }
    return result
  } else return '-' + value
}
/**
 *
 * @param k Cette fonction intervient dans le calcul des parties réelles et imaginaires de k.e^{i.teta} = k.cos(teta) + i.k.sin(teta)
 * elle retourne la valeur exacte en latex de k.cosOuSin
 * @param cosOuSin
 */
export function kCosOuKSin(k: number, cosOuSin: string) {
  function extractNumerator(latex: string): string | null {
    const num = latex.split('\\dfrac{')[1].split('}{')[0]
    return num
  }
  const signe = cosOuSin.startsWith('-') ? '-' : ''
  if (signe === '-') cosOuSin = cosOuSin.slice(1)
  if (cosOuSin.includes('{2}')) {
    // On a à faire à \\dfrac{1}{2} ou \\dfrac{\\sqrt{2}}{2}
    if (Number.isInteger(k) && k % 2 === 0) {
      // k étant pair, on simplifie par 2
      k /= 2
      const num = extractNumerator(cosOuSin)
      if (num === '1') return `${signe}${k}`
      else return `${signe}${k !== 1 ? k : ''}${num}`
    } else {
      const num = extractNumerator(cosOuSin)
      if (num === '1') return `${signe}\\dfrac{${k}}{2}`
      return `${signe}\\dfrac{${k}${extractNumerator(cosOuSin)}}{2}`
    }
  } else {
    // Pas de dénominateur 2, on est sur un nombre décimal comme 0.5
    const val = parseFloat(cosOuSin)
    return `${signe}${(k * val).toFixed(1).replace('.', '{,}')}`
  }
}

function parenthesesSiNegatif(value: string): string {
  if (value[0] === '-') {
    return `\\left(${value}\\right)`
  } else return value
}
export function parenthesesSiNegatifStrigArray(
  value: string[] | string,
): string[] | string {
  if (Array.isArray(value)) {
    const result = []
    for (const e of value) {
      result.push(parenthesesSiNegatif(e))
    }
    return result
  } else return parenthesesSiNegatif(value)
}

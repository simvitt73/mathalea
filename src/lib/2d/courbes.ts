/**
 * Une fonction pour convertir des abscisses en unité Mathalé en abscisses svg
 * @param x
 * @param coeff
 * @return {number}
 */
export const xSVG = (x: number, coeff: number) => Number((x * coeff).toFixed(1))
/**
 * Une fonction pour convertir des ordonnées en unité Mathalé en ordonnées svg
 * @param y
 * @param coeff
 * @return {number}
 */
export const ySVG = (y: number, coeff: number) =>
  Number((-y * coeff).toFixed(1))

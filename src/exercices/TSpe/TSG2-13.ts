import { createList } from '../../lib/format/lists'
import { texNombre } from '../../lib/outils/texNombre'
import { miseEnEvidence, texteEnCouleurEtGras } from '../../lib/outils/embellissements'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre =
  "Calculer une valeur approchée de l'angle formé par trois points de l/'espace."

export const dateDePublication = '27/01/2026'

export const uuid = '6f9d4'

export const refs = {
  'fr-fr': ['TSG2-13'],
  'fr-ch': [],
}

/**
 *
 * @author Stéphane Guyon
 */
export default class NomExercice extends Exercice {
  constructor() {
    super()
    this.nbQuestions = 1
  }

  nouvelleVersion() {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let texte = ''
      let texteCorr = ''

      let xA: number, yA: number
      let xB: number, yB: number
      let xC: number, yC: number

      do {
        xA = randint(-6, 6, 0)
        yA = randint(-6, 6, 0)
        xB = randint(-6, 6, 0)
        yB = randint(-6, 6, 0)
        xC = randint(-6, 6, 0)
        yC = randint(-6, 6, 0)

        const sameAB = xA === xB && yA === yB
        const sameCB = xC === xB && yC === yB
        const sameAC = xA === xC && yA === yC
        const BAx = xA - xB
        const BAy = yA - yB
        const BCx = xC - xB
        const BCy = yC - yB
        const normBASq = BAx * BAx + BAy * BAy
        const normBCSq = BCx * BCx + BCy * BCy
        const normBA = Math.sqrt(normBASq)
        const normBC = Math.sqrt(normBCSq)
        const det = BAx * BCy - BAy * BCx

        // on boucle si un point confond B, si A=C, ou si les trois points sont alignés
        if (sameAB || sameCB || sameAC || normBA === 0 || normBC === 0 || det === 0) {
          continue
        }

        // Si on est ici, la configuration est valide
        const produitScalaire = BAx * BCx + BAy * BCy
        const cosAlpha = Math.min(
          1,
          Math.max(-1, produitScalaire / (normBA * normBC)),
        )
        const angleDeg = (Math.acos(cosAlpha) * 180) / Math.PI
        const angleArrondi = Math.round(angleDeg)

        texte =
          'Dans un repère orthonormé du plan, on considère les points suivants : '
        texte += `$A(${xA} ; ${yA})$, $B(${xB} ; ${yB})$ et $C(${xC} ; ${yC})$.<br>`
        texte +=
          "Calculer une valeur approchée au degré près de l'angle $\\widehat{ABC}$."

        const vecteurs = `${texteEnCouleurEtGras('Vecteurs associés :')}<br>`
        const vecteurBA = `$\\vec{BA}\\begin{pmatrix}${BAx}\\\\${BAy}\\end{pmatrix}$`
        const vecteurBC = `$\\vec{BC}\\begin{pmatrix}${BCx}\\\\${BCy}\\end{pmatrix}$`

        const calculCos =
          `${texteEnCouleurEtGras("Cosinus de l'angle :")}<br>` +
          `$\\cos(\\widehat{ABC}) = \\dfrac{\\vec{BA}\\cdot\\vec{BC}}{\\|\\vec{BA}\\|\\,\\|\\vec{BC}\\|} = \\dfrac{${produitScalaire}}{\\sqrt{${texNombre(
            normBASq,
            0,
          )}}\\,\\sqrt{${texNombre(normBCSq, 0)}}} \\approx ${texNombre(
            cosAlpha,
            3,
          )}$.`

        const calculAngle =
          `${texteEnCouleurEtGras('Angle recherché :')}<br>` +
          `$\\widehat{ABC} = \\arccos(${texNombre(cosAlpha, 3)}) \\approx ${texNombre(
            angleDeg,
            1,
          )}^\\circ ${miseEnEvidence('≈ ' + texNombre(angleArrondi, 0) + '^\\circ')} \\text{ (au degré près)}.`

        texteCorr = createList({
          items: [vecteurs + vecteurBA + ' et ' + vecteurBC, calculCos, calculAngle],
          style: 'fleches',
        })

        if (this.questionJamaisPosee(i, texte)) {
          this.listeQuestions[i] = texte
          this.listeCorrections[i] = texteCorr
          i++
        }
      } while (i < this.nbQuestions && ++cpt < 50)
    }

    listeQuestionsToContenu(this)
  }
}

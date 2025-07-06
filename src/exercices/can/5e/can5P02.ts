import { choice } from '../../../lib/outils/arrayOutils'
import { miseEnEvidence, texteEnCouleur } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import Exercice from '../../Exercice'
import { randint } from '../../../modules/outils'
import { arrondi } from '../../../lib/outils/nombres'
export const titre = 'Calculer avec un pourcentage de proportion'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCNum'

/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora
 * Ajout du paramètre Déterminer/calculer/mélange par Guillaume Valmont le 17/02/2023 (supprimer le 06/07/2025 car exercice cassé en deux avec can6P07)

 * Date de publication
*/
export const dateDeModifImportante = '06/07/2025'
export const uuid = 'bd5d1'

export const refs = {
  'fr-fr': ['can5P02'],
  'fr-ch': []
}
export default class PoucentageP2 extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.spacing = 1.5
    this.spacingCorr = 1.5
  }

  nouvelleVersion () {
    const listeCarac2 = [['maisons', 'T2'], ['maisons', 'T3'], ['appartements', 'T2'], ['appartements', 'T3']
    ]
    let a, b, c, n, d, carac2, choix

    switch (randint(1, 2)) {
      case 1:
        a = arrondi(randint(1, 5) * 1000)
        b = arrondi(randint(1, 8) * 10)
        c = arrondi(randint(1, 8) * 10)
        carac2 = choice(listeCarac2)
        n = carac2[0]
        d = carac2[1]
        if (n === 'maisons') {
          this.question = `

        Parmi les $${texNombre(a)}$ logements que compte une ville, $${b}\\%$   sont des ${n} et $${c}\\%$  de celles-ci sont des ${d}.<br>

         Quel est le nombre de ${n} de type ${d} dans cette ville ?`
        } else {
          this.question = `Parmi les $${texNombre(a)}$ logements que compte une ville, $${b}\\%$   sont des ${n} et $${c}\\%$  de ceux-ci sont des ${d}.<br>
 
          Quel est le nombre d' ${n} de type ${d} dans cette ville ?`
        }
        this.optionsChampTexte = { texteAvant: '<br>', texteApres: '' }
        this.correction = `Les ${n}  représentent $${b}\\%$   des logements.<br>
        Il y en a donc : $${texNombre(b / 100)}\\times ${texNombre(a)}=${texNombre(b * a / 100)}$.<br>
        Dans cette ville, il y a  $${texNombre(b * a / 100)}$ ${n}.<br>
        Parmi ces ${n}, il y a $${c}\\%$  de ${d}.<br>
        $${c}\\%$  de $${texNombre(b * a / 100)}=${texNombre(c / 100)}\\times ${b * a / 100}=${texNombre(c * b * a / 10000)}$.<br>
        Il y a donc $${miseEnEvidence(texNombre(c * b * a / 10000))}$ ${n} de type ${d} dans cette ville.
        `
        this.correction += texteEnCouleur(`
        <br> Mentalement : <br>
                Prendre $10\\%$  d'une quantité revient à la diviser par $10$. <br>
       Pour calculer $20\\%$ , $30 \\%$ , $40\\%$, .... d'une quantité, on
       commence par calculer  $10\\%$  de cette quantité en la divisant par $10$, puis on multiplie
       par $2$ ce résultat si on veut en calculer $20 \\%$, par $3$ si on veut en calculer $30\\%$, ....<br>
                           `)
        this.reponse = arrondi(c * b * a / 10000)
        this.canEnonce = this.question// 'Compléter'
        this.canReponseACompleter = ''
        break

      case 2:
      default:
        a = choice([20, 25, 10, 50])
        b = randint(10, 30)
        choix = choice([true, false])
        this.question = ` Une ${choix ? ' réduction' : 'augmentation'} de $${a}~\\%$  d'un article entraîne une ${choix ? 'réduction' : 'augmentation'} du prix de $${b}$ €.<br>
          Quel était le prix de cet article avant ${choix ? '  la réduction' : 'l’augmentation'} ?  `
        this.optionsChampTexte = { texteAvant: '<br>', texteApres: '€' }
        if (a === 25) {
          this.correction = ` $25~\\%$ du prix représente $${b}$ €, donc $100~\\%$ du prix représente $4$ fois plus que $${b}$ € (car $4\\times 25=100$).<br>
        Le prix de l'article était  donc : $4\\times${b}=${miseEnEvidence(4 * b)}$ €. `
        }
        if (a === 20) {
          this.correction = ` $20~\\%$ du prix représente $${b}$ €, donc $100~\\%$ du prix représente $5$ fois plus que $${b}$ € (car $5\\times 20=100$).<br>
          Le prix de l'article était donc : $5\\times${b}=${miseEnEvidence(5 * b)}$ €.  `
        }
        if (a === 10) {
          this.correction = ` $10~\\%$ du prix représente $${b}$ €, donc $100~\\%$ du prix représente $10$ fois plus que $${b}$ € (car $10\\times 10=100$).<br>
          Le prix de l'article était donc : $10\\times${b}=${miseEnEvidence(10 * b)}$ €.  `
        }
        if (a === 50) {
          this.correction = ` $50~\\%$ du prix représente $${b}$ €, donc $100~\\%$ du prix représente $2$ fois plus que $${b}$ € (car $2\\times 50=100$).<br>
           Le prix de l'article était donc : $2\\times${b}=${miseEnEvidence(2 * b)}$ €.  `
        }
        this.reponse = arrondi(100 * b / a)
        this.canEnonce = this.question// 'Compléter'
        this.canReponseACompleter = '$\\ldots$ €'
        break
    }
  }
}

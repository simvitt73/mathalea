import { choice } from '../../../lib/outils/arrayOutils'
import Exercice from '../../Exercice'
import { listeQuestionsToContenu, randint } from '../../../modules/outils'
import { propositionsQcm } from '../../../lib/interactif/qcm'
import { texteCentre } from '../../../lib/format/miseEnPage'
export const titre = 'Exprimer une variable en fonction des autres (QCM)'
export const interactifReady = true
export const interactifType = 'qcm'

// Les exports suivants sont optionnels mais au moins la date de publication semble essentielle
export const dateDePublication = '06/07/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag
// export const dateDeModifImportante = '24/10/2021' // Une date de modification importante au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora

*/
export const uuid = 'c42f7'

export const refs = {
  'fr-fr': ['can2L19'],
  'fr-ch': []
}
export default class ExprimerEnFonction extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
  }

  nouvelleVersion () {
    let texte, texteCorr, choixQ, monQcm, a
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      choixQ = choice([true, false])
      a = randint(1, 10)
      switch (choice([1, 2])) { // 1
        case 1 :
          texte = `Lorsqu’un point mobile suit une trajectoire circulaire de rayon $R$, 
  en mètre (m), son accélération centripète $a$ (en m/s²) 
  et sa vitesse $v$ (en m/s) sont liés par la relation : <br>
  ${choixQ ? `${texteCentre('$a=\\dfrac{v^2}{R}$')}` : `${texteCentre('$v=\\sqrt{aR}$')}`}`

          texte += choixQ
            ? 'L\'expression permettant, à partir de cette formule, d\'exprimer la vitesse $v$ est :'
            : 'L\'expression permettant, à partir de cette formule, d\'exprimer l\'accélération $a$ est :'
          this.canEnonce = texte
          this.autoCorrection[i] = {
            enonce: texte,
            propositions: choixQ
              ? [
                  {
                    texte: '$v=\\sqrt{aR}$',
                    statut: true
                  },
                  {
                    texte: '$v=aR^2$',
                    statut: false
                  },
                  {
                    texte: '$v=\\sqrt{\\dfrac{a}{R}}$',
                    statut: false
                  },
                  {
                    texte: '$v=\\dfrac{a^2}{R}$',
                    statut: false
                  }
                ]
              : [
                  {
                    texte: '$a=\\dfrac{v^2}{R}$',
                    statut: true
                  },
                  {
                    texte: '$a=\\dfrac{v}{\\sqrt{R}}$',
                    statut: false
                  },
                  {
                    texte: '$a=v^2R$',
                    statut: false
                  },
                  {
                    texte: '$a=\\dfrac{R}{v^2}$',
                    statut: false
                  }
                ]
          }
          monQcm = propositionsQcm(this, i)
          texte += monQcm.texte
          this.canEnonce = texte

          texteCorr = choixQ
            ? 'Puisque $a=\\dfrac{v^2}{R}$, alors $v^2 = a \\times R$, soit $v = \\sqrt{aR}$.'
            : `On part de la formule $v = \\sqrt{aR}$.<br>
On élève les deux membres au carré : $v^2 = aR$<br>
Puis on isole $a$ : $a = \\dfrac{v^2}{R}$.`
          break
        case 2 :
        default:
          texte = 'On considère $x$, $y$ et $v$ des nombres réels positifs non nuls liés par la relation : <br>'

          texte += choixQ
            ? `${texteCentre('$v=\\sqrt{\\dfrac{x}{y}}$')}`
            : `${texteCentre('$y=(1+vx)^2$')}`
          texte += choixQ
            ? 'L\'expression permettant, à partir de cette formule, d\'exprimer  $y$ est :'
            : 'L\'expression permettant, à partir de cette formule, d\'exprimer $v$ est :'

          this.canEnonce = texte

          this.autoCorrection[i] = {
            enonce: texte,
            propositions: choixQ
              ? [
                  {
                    texte: '$y=\\dfrac{x}{v^2}$',
                    statut: true
                  },
                  {
                    texte: '$y=\\sqrt{xv}$',
                    statut: false
                  },
                  {
                    texte: '$y=x \\times v^2$',
                    statut: false
                  },
                  {
                    texte: '$y=\\dfrac{v^2}{x}$',
                    statut: false
                  }
                ]
              : [
                  {
                    texte: '$v=\\dfrac{\\sqrt{y}-1}{x}$',
                    statut: true
                  },
                  {
                    texte: '$v=\\dfrac{y-1}{x}$',
                    statut: false
                  },
                  {
                    texte: '$v=\\sqrt{y} \\times x - 1$',
                    statut: false
                  },
                  {
                    texte: '$v=\\dfrac{1}{x \\times \\sqrt{y}}$',
                    statut: false
                  }
                ]
          }

          monQcm = propositionsQcm(this, i)
          texte += monQcm.texte
          this.canEnonce = texte

          if (choixQ) {
            texteCorr = `On part de la relation : $v = \\sqrt{\\dfrac{x}{y}}$<br>
On élève les deux membres au carré : $v^2 = \\dfrac{x}{y}$<br>
Puis on isole $y$ : $y = \\dfrac{x}{v^2}$.`
          } else {
            texteCorr = `On part de la formule : $y = (1 + vx)^2$<br>
On prend la racine carrée des deux membres : $\\sqrt{y} = 1 + vx$<br>
On isole $v$ : $vx = \\sqrt{y} - 1$<br>
Donc : $v = \\dfrac{\\sqrt{y} - 1}{x}$.`
          }

          break
      }
      if (this.questionJamaisPosee(i, a)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      this.canReponseACompleter = monQcm.texte
      this.listeCanEnonces.push(this.canEnonce)
      this.listeCanReponsesACompleter.push(this.canReponseACompleter)
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

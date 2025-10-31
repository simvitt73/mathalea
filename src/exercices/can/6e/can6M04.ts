import { choice } from '../../../lib/outils/arrayOutils'
import { texteEnCouleur } from '../../../lib/outils/embellissements'
import { sp } from '../../../lib/outils/outilString'
import { texNombre } from '../../../lib/outils/texNombre'
import { randint } from '../../../modules/outils'
import ExerciceSimple from '../../ExerciceSimple'
export const titre = 'Convertir en tous sens'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCNum'

/**
 * @author Jean-Claude Lhote & Gilles Mora
 * Créé pendant l'été 2021

 */
export const uuid = 'c0bf1'

export const refs = {
  'fr-fr': ['can6M04', 'auto6M1C-flash3'],
  'fr-ch': [],
}
export default class ConversionEnTousSens extends ExerciceSimple {
  constructor() {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
  }

  nouvelleVersion() {
    let a, resultat
    switch (
      choice(['a', 'b', 'c', 'd']) //
    ) {
      case 'a':
        if (choice([true, false])) {
          a = randint(1, 13) * 50
          resultat = a / 1000
          this.question = `$${texNombre(a)}$ g  =`
          if (!this.interactif) {
            this.question += ' .... kg'
          }

          this.optionsChampTexte = { texteApres: ' kg' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}$ g  $=\\dots$ kg`
          this.correction = `$${texNombre(a)}$ g$=${texNombre(a / 1000)}$ kg`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
  Comme $1$ kg $=${texNombre(1000)}$ g, alors $1$ g $${sp()}=${sp()}${texNombre(0.001)}$ kg.<br>
  Ainsi pour passer des «${sp()}g ${sp()}» au «${sp()}kg ${sp()}», on divise par $${texNombre(1000)}$.<br>
    Comme $${texNombre(a)}\\div ${texNombre(1000)} =${texNombre(a / 1000)}$, alors $${texNombre(a)}$ g$${sp()}=${texNombre(a / 1000)}$ kg.  `)
        } else {
          a = randint(1, 5) / 10
          resultat = a * 1000
          this.question = `$${texNombre(a)}$ kg  = `
          if (!this.interactif) {
            this.question += ' ..... g'
          }

          this.optionsChampTexte = { texteApres: ' g' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}$ kg $= \\dots$ g`
          this.correction = `$${texNombre(a)}$ kg $=${texNombre(a * 1000)}$ g`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1$ kg $=${texNombre(1000)}$ g, alors pour passer des «${sp()}kg ${sp()}» au «${sp()}g ${sp()}», on multiplie par $${texNombre(1000)}$.<br>
            Comme $${texNombre(a)}\\times ${texNombre(1000)} =${texNombre(a * 1000)}$, alors $${texNombre(a)}$ kg$${sp()}=${resultat}$ g.  `)
        }
        break
      case 'b':
        if (choice([true, false])) {
          a = randint(1, 13) * 5
          resultat = a * 100
          this.question = `$${texNombre(a)}\\text{ m}$  =`
          if (!this.interactif) {
            this.question += ' ..... cm'
          }

          this.optionsChampTexte = { texteApres: ' cm' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}\\text{ m}$ $=$ $\\dots\\text{ cm}$`
          this.correction = `$${texNombre(a)}\\text{ m}$ $=${texNombre(a * 100)}\\text{ cm}$`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1\\text{ m}$ $=100\\text{ cm}$,  pour passer des «${sp()}m ${sp()}» au «${sp()}cm ${sp()}», on multiplie par $100$.<br>
            Comme : $${texNombre(a)}\\times 100 =${texNombre(a * 100)}$, alors $${texNombre(a)}$ m$=${texNombre(a * 100)}\\text{ cm}$.  `)
        } else {
          a = randint(1, 12) * 10
          resultat = a / 100
          this.question = `$${texNombre(a)}\\text{ cm}$  =`
          if (!this.interactif) {
            this.question += '..... m'
          }

          this.optionsChampTexte = { texteApres: ' m' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}\\text{ cm}$ $= \\dots$ m`
          this.correction = `$${texNombre(a)}\\text{ cm}=${texNombre(a / 100)}\\text{ m}$.`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1\\text{ m}$ $=100\\text{ cm}$, alors $1\\text{ cm}$ $=0,01\\text{ m}$.<br>
          Ainsi pour passer des «${sp()}cm ${sp()}» au «${sp()}m ${sp()}», on divise par $100$.<br>
            Comme  $${texNombre(a)}\\div 100 =${texNombre(a / 100)}$, alors $${texNombre(a)}\\text{ cm}=${texNombre(a / 100)}\\text{ m}$.  `)
        }
        break
      case 'c':
        if (choice([true, false])) {
          a = randint(1, 13) / 10
          resultat = a * 10
          this.question = `$${texNombre(a)}$ cL  =  `
          if (!this.interactif) {
            this.question += ' .... mL'
          }

          this.optionsChampTexte = { texteApres: ' mL' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}$ cL $= \\dots$ mL`
          this.correction = `$${texNombre(a)}$ cL $=${texNombre(a * 10)}$ mL`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1$ cL$ =10$ mL,  pour passer des «${sp()}cL ${sp()}» au «${sp()}mL ${sp()}», on multiplie par $10$.<br>
            Comme  $${texNombre(a)}\\times 10 =${texNombre(a * 10)}$, alors $${texNombre(a)}$ cL$=${texNombre(a * 10)}$ mL.  `)
        } else {
          a = randint(1, 12)
          resultat = a / 10
          this.question = `$${texNombre(a)}$ mL  = `
          if (!this.interactif) {
            this.question += ' .... cL'
          }

          this.optionsChampTexte = { texteApres: '  cL' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}$ mL $= \\dots$ cL`
          this.correction = `$${texNombre(a)}$ mL$=${texNombre(a / 10)}$ cL`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1$ cL$ =10$ mL, alors $1$ mL $=0,1$ cL.<br>
          Ainsi pour passer des «${sp()}mL ${sp()}» au «${sp()}cL ${sp()}», on divise par $10$.<br>
            Comme  $${texNombre(a)}\\div 10 =${texNombre(a / 10)}$, alors $${texNombre(a)}$ mL$=${texNombre(a / 10)}$ cL.  `)
        }
        break
      case 'd':
        if (choice([true, false])) {
          a = randint(1, 20) * 10
          resultat = a / 1000
          this.question = `$${texNombre(a)}\\text{ m}$  $=$ `
          if (!this.interactif) {
            this.question += ' .... km'
          }

          this.optionsChampTexte = { texteApres: ' km' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}\\text{ m}$ $= \\dots$ km`
          this.correction = `$${texNombre(a)}\\text{ m}$ $=${texNombre(a / 1000)}$ km`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1\\text{ km}$ $=${texNombre(1000)}\\text{ m}$, alors $1\\text{ m}$ $=0,001\\text{ km}$.<br>
          Ainsi pour passer des «${sp()}m ${sp()}» au «${sp()}km ${sp()}», on divise par $${texNombre(1000)}$.<br>
            Comme  $${texNombre(a)}\\div ${texNombre(1000)} =${texNombre(a / 1000)}$, alors $${texNombre(a)}$ m$=${texNombre(a / 1000)}\\text{ km}$.  `)
        } else {
          a = randint(1, 35) / 100
          resultat = a * 1000
          this.question = `$${texNombre(a)}\\text{ km}$ $=$`
          if (!this.interactif) {
            this.question += ' .... m'
          }

          this.optionsChampTexte = { texteApres: ' m' }
          this.canEnonce = 'Compléter.'
          this.canReponseACompleter = `$${texNombre(a)}\\text{ km}$ $= \\dots$ m`
          this.correction = `$${texNombre(a)}$ km$=${texNombre(a * 1000)}$ m`
          this.correction += texteEnCouleur(`<br> Mentalement : <br>
          Comme $1\\text{ km}$ $=${texNombre(1000)}\\text{ m}$,  pour passer des «${sp()}km ${sp()}» au «${sp()}m ${sp()}», on multiplie par $${texNombre(1000)}$.<br>
            Comme  $${texNombre(a)}\\times ${texNombre(1000)} =${texNombre(a * 1000)}$, alors $${texNombre(a)}$ km$=${texNombre(a * 1000)}\\text{ m}$.  `)
        }
        break
    }
    this.reponse = resultat
  }
}

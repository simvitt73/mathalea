import Exercice from '../Exercice'
import { gestionnaireFormulaireTexte, listeQuestionsToContenu } from '../../modules/outils'
import { choixDeroulant } from '../../lib/interactif/questionListeDeroulante'
import { choice, combinaisonListes, shuffle } from '../../lib/outils/arrayOutils'
import type { AllChoicesType } from '../../lib/interactif/listeDeroulante/ListeDeroulante'
import { ajouteFeedback } from '../../lib/interactif/questionMathLive'
import { texteEnCouleurEtGras } from '../../lib/outils/embellissements'

export const titre = 'Connaître les multiples égalités d\'une unité de volume'
export const interactifReady = true
export const interactifType = 'custom'
export const dateDePublication = '04/08/2025'

/**
 * Connaître les multiples égalités d'une unité de volume
 * @author Eric Elter

 */
export const uuid = '61772'

export const refs = {
  'fr-fr': ['6M23-3'],
  'fr-ch': ['']
}

export default class EgalitessUnitesVolumes extends Exercice {
  listeReponses: string[][]
  constructor () {
    super()

    this.nbQuestions = 2
    this.besoinFormulaireTexte = ['Unités désirées', [
      'Nombres séparés par des tirets  :',
      '1 : cm³',
      '2 : dm³',
      '3 : m³',
      '4 : Mélange'
    ].join('\n')
    ]
    this.sup = '2-3'

    this.listeReponses = []
  }

  nouvelleVersion () {
    let unitesChoisies = gestionnaireFormulaireTexte({
      max: 3,
      defaut: 4,
      melange: 4,
      nbQuestions: this.nbQuestions,
      saisie: this.sup
    }).map(Number)
    unitesChoisies = combinaisonListes(unitesChoisies, 50)

    this.consigne = this.interactif
      ? 'Choisir les bonnes propositions'
      : 'Compléter'
    this.consigne += '.'

    const choixListeDeroulante:AllChoicesType[] = [
      [
        { label: '1 000', value: '1000' },
        { label: '100', value: '100' },
        { label: '10', value: '10' },
        { label: '1', value: '1' }
      ],
      [
        { label: 'mm', value: 'mm' },
        { label: 'cm', value: 'cm' },
        { label: 'dm', value: 'dm' },
        { label: 'm', value: 'm' }
      ]
    ]
    let choixListeDeroulantePourCoefficient = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[0])])
    const choixListeDeroulantePourUnite = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[1])])

    const unitesPossibles = ['mm', 'cm', 'dm', 'm']
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const unite = unitesPossibles[unitesChoisies[cpt]] // cpt choisi ici et dans tous les tableaux comme indice par pas assez de questions sinon.
      const sousUnite = unitesPossibles[unitesChoisies[cpt] - 1]

      this.listeReponses[i] = []

      let texte = `$1$ ${unite}$^2$ =  1 ${unite} $\\times$ `
      let texteCorr = texte

      const choix = choice([true, false])
      if (choix) {
        texte += this.interactif
          ? choixDeroulant(this, 6 * i, choixListeDeroulantePourCoefficient)
          : '$\\ldots\\ldots\\ldots$'
        texte += ` ${unite} `
        this.listeReponses[i].push('1')
        texteCorr += `${texteEnCouleurEtGras('1')} ${unite}`
      } else {
        texte += ' $1$ '
        texte += this.interactif
          ? choixDeroulant(this, 6 * i, choixListeDeroulantePourUnite)
          : '$\\ldots\\ldots\\ldots$'
        this.listeReponses[i].push(unite)
        texteCorr += `$1$ ${texteEnCouleurEtGras(unite)} `
      }
      texte += ' = '

      choixListeDeroulantePourCoefficient = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[0])])
      texte += this.interactif
        ? choixDeroulant(this, 6 * i + 1, choixListeDeroulantePourCoefficient)
        : '$\\ldots\\ldots\\ldots$'
      this.listeReponses[i].push('10')

      texte += ` ${sousUnite} $\\times$ `

      choixListeDeroulantePourCoefficient = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[0])])
      texte += this.interactif
        ? choixDeroulant(this, 6 * i + 2, choixListeDeroulantePourCoefficient)
        : '$\\ldots\\ldots\\ldots$'
      this.listeReponses[i].push('10')

      texte += ` ${sousUnite} = `

      choixListeDeroulantePourCoefficient = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[0])])
      texte += this.interactif
        ? choixDeroulant(this, 6 * i + 3, choixListeDeroulantePourCoefficient)
        : '$\\ldots\\ldots\\ldots$'
      this.listeReponses[i].push('10')

      texte += ' $\\times$ '

      choixListeDeroulantePourCoefficient = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[0])])
      texte += this.interactif
        ? choixDeroulant(this, 6 * i + 4, choixListeDeroulantePourCoefficient)
        : '$\\ldots\\ldots\\ldots$'
      this.listeReponses[i].push('10')

      texte += ` ${sousUnite}$^2$ = `

      choixListeDeroulantePourCoefficient = ([{ label: 'Choisir', value: '' }, ...shuffle(choixListeDeroulante[0])])
      texte += this.interactif
        ? choixDeroulant(this, 6 * i + 5, choixListeDeroulantePourCoefficient)
        : '$\\ldots\\ldots\\ldots$'
      this.listeReponses[i].push('100')

      texte += ` ${sousUnite}$^2$`

      texteCorr += ` = ${texteEnCouleurEtGras('10')} ${sousUnite} $\\times$ ${texteEnCouleurEtGras('10')} ${sousUnite} = ${texteEnCouleurEtGras('10')} $\\times$ ${texteEnCouleurEtGras('10')} ${sousUnite}$^2$ = ${texteEnCouleurEtGras('100')} ${sousUnite}$^2$`

      if (this.questionJamaisPosee(i, unite)) {
        texte += ajouteFeedback(this, i)
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
    this.nbQuestions = this.listeQuestions.length
    this.autoCorrection.length = this.listeQuestions.length
    listeQuestionsToContenu(this)
  }

  correctionInteractive = (i: number) => {
    const select = []
    select.push(document.querySelector(`#ex${this.numeroExercice}Q${6 * i}`) as HTMLSelectElement)
    select.push(document.querySelector(`#ex${this.numeroExercice}Q${6 * i + 1}`) as HTMLSelectElement)
    select.push(document.querySelector(`#ex${this.numeroExercice}Q${6 * i + 2}`) as HTMLSelectElement)
    select.push(document.querySelector(`#ex${this.numeroExercice}Q${6 * i + 3}`) as HTMLSelectElement)
    select.push(document.querySelector(`#ex${this.numeroExercice}Q${6 * i + 4}`) as HTMLSelectElement)
    select.push(document.querySelector(`#ex${this.numeroExercice}Q${6 * i + 5}`) as HTMLSelectElement)

    let isOk = true
    for (let j = 0; j < 6; j++) {
      isOk &&= select[j].value === this.listeReponses[i][j]
    }

    const spanReponseLigne = document.querySelector(`#resultatCheckEx${this.numeroExercice}Q${6 * i + 5}`)

    if (spanReponseLigne == null) window.notify(`Pas trouvé le spanReponseLigne dans 5M21 pour i=${i}`, {})
    if (spanReponseLigne) {
      if (isOk) {
        spanReponseLigne.innerHTML = '😎'
      } else {
        spanReponseLigne.innerHTML = '☹️'
      }
    }

    return isOk ? 'OK' : 'KO'
  }
}

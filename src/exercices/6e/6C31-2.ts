import { choice, shuffle } from '../../lib/outils/arrayOutils'
import { arrondi } from '../../lib/outils/nombres'
import { numAlpha } from '../../lib/outils/outilString'
import { texNombre } from '../../lib/outils/texNombre'
import { gestionnaireFormulaireTexte, listeQuestionsToContenu, randint } from '../../modules/outils'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { setReponse } from '../../lib/interactif/gestionInteractif'
import Exercice from '../Exercice'

export const titre = 'Donner des arrondis d\'un quotient'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDeModifImportante = '04/05/2025' // Mickael Guironnet
export const dateDePublication = '07/12/2020' // Rémi Angot

/**
 * Donner des arrondies ou des valeurs approchées d'un quotient.
 *
 *
 * @author Rémi Angot
 * @Refactorisation : Mickael Guironnet 04/05/2025

 * 2020-12-07
 */
export const uuid = '013ef'

export const refs = {
  'fr-fr': ['6C31-2'],
  'fr-ch': ['9NO8-15']
}
export default class ValeurApprocheeDivisionDecimale extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    this.sup = 1
    this.besoinFormulaireTexte = ['Type de questions',
      `Nombres séparés par des tirets :
  1 : arrondi
  2 : valeur approchée
  3 : Mélange`
    ]
  }

  nouvelleVersion () {
    const typesDeQuestions = gestionnaireFormulaireTexte({
      max: 3,
      defaut: 1,
      melange: 4,
      nbQuestions: this.nbQuestions,
      saisie: this.sup
    })
    for (let i = 0, qInt = 0, numQuest = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      // Une fraction irréductible avec un dénominateur qui comporte un facteur différent de 2 ou de 5
      // aura une écriture décimale périodique infinie
      const k1 = choice([3, 7, 11, 13])
      const k2 = choice([3, 7, 11, 13], k1)
      const a = choice([3, 5, 7, 11, 13], [k1, k2]) * choice([3, 5, 7, 11, 13], [k1, k2])
      const b = k1 * k2
      const q = arrondi(a / b, 6)
      texte = `On sait que $${a}\\div${b}\\approx${texNombre(q)}$.<br>Compléter les phrases suivantes.`
      const listeDeQuestions1 : [string, number][] = [
        [`La valeur approchée par défaut de $${a}\\div${b}$ au dixième près est : `, arrondi(a / b - 0.05, 1)],
        [`La valeur approchée par excès de $${a}\\div${b}$ au dixième près est : `, arrondi(a / b + 0.05, 1)],
        [`La valeur approchée par défaut de $${a}\\div${b}$ au centième près est : `, arrondi(a / b - 0.005, 2)],
        [`La troncature de $${a}\\div${b}$ au centième près est : `, arrondi(Math.floor(a / b * 100) / 100, 2)],
        [`La valeur approchée par excès de $${a}\\div${b}$ au centième près est : `, arrondi(a / b + 0.005, 2)],
        [`La valeur approchée par défaut de $${a}\\div${b}$ au millième près est : `, arrondi(a / b - 0.0005, 3)],
        [`La troncature de $${a}\\div${b}$ au millième près est : `, arrondi(Math.round(a / b * 1000) / 1000, 3)],
        [`La valeur approchée par excès de $${a}\\div${b}$ au millième près est : `, arrondi(a / b + 0.0005, 3)]
      ]
      const listeDeQuestions2 : [string, number][] = shuffle([
        [`La valeur arrondie de $${a}\\div${b}$ à l'unité est : `, arrondi(a / b, 0)],
        [`La valeur arrondie de $${a}\\div${b}$ au dixième près est : `, arrondi(a / b, 1)],
        [`La valeur arrondie de $${a}\\div${b}$ au centième près est : `, arrondi(a / b, 2)],
        [`La valeur arrondie de $${a}\\div${b}$ au millième près est : `, arrondi(a / b, 3)]
      ])
      numQuest = 0
      texteCorr = `On sait que $${a}\\div${b}\\approx${texNombre(q)}$.`
      if (typesDeQuestions[i] === 3 || typesDeQuestions[i] === 2) { // Suivant le type de question, le contenu sera différent
        // Questions peuvent être défaut, excès ou excès, défaut ou troncature, excès ou excès, troncature
        const choix = randint(1, 4)
        switch (choix) {
          case 1:
            texte += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions1[0][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest, listeDeQuestions1[0][1])
            texte += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[4][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest + 1, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest + 1, listeDeQuestions1[4][1])
            texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[0][0]} $ ${texNombre(listeDeQuestions1[0][1])}$`
            texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[4][0]} $ ${texNombre(listeDeQuestions1[4][1])}$`
            numQuest += 2
            break
          case 2:
            texte += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions1[1][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest, listeDeQuestions1[1][1])
            texte += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[5][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest + 1, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest + 1, listeDeQuestions1[5][1])
            texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[1][0]} $ ${texNombre(listeDeQuestions1[1][1])}$`
            texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[5][0]} $ ${texNombre(listeDeQuestions1[5][1])}$`
            numQuest += 2
            break
          case 3:
            texte += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions1[3][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest, listeDeQuestions1[3][1])
            texte += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[7][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest + 1, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest + 1, listeDeQuestions1[7][1])
            texteCorr += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions1[3][0]} $ ${texNombre(listeDeQuestions1[3][1])}$`
            texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[7][0]} $ ${texNombre(listeDeQuestions1[7][1])}$`
            numQuest += 2
            break
          case 4:
            texte += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions1[4][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest, listeDeQuestions1[4][1])
            texte += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[7][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest + 1, '') : '\\ldots'}`
            setReponse(this, qInt + numQuest + 1, listeDeQuestions1[7][1])
            texteCorr += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions1[4][0]} $ ${texNombre(listeDeQuestions1[4][1])}$`
            texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions1[7][0]} $ ${texNombre(listeDeQuestions1[7][1])}$`
            numQuest += 2
            break
        }
      }
      if (typesDeQuestions[i] === 1 || typesDeQuestions[i] === 3) {
        texte += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions2[0][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest, '') : '\\ldots'}`
        setReponse(this, qInt + numQuest, listeDeQuestions2[0][1])
        texte += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions2[1][0]} ${this.interactif ? ajouteChampTexteMathLive(this, qInt + numQuest + 1, '') : '\\ldots'}`
        setReponse(this, qInt + numQuest + 1, listeDeQuestions2[1][1])

        texteCorr += `<br><br> ${numAlpha(numQuest)} ${listeDeQuestions2[0][0]} $ ${texNombre(listeDeQuestions2[0][1] as number)}$`
        texteCorr += `<br><br> ${numAlpha(numQuest + 1)} ${listeDeQuestions2[1][0]} $ ${texNombre(listeDeQuestions2[1][1] as number)}$`
        numQuest += 2
      }

      if (this.questionJamaisPosee(i, a, b, q)) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        qInt = this.autoCorrection.length
        i++
      } else {
        this.autoCorrection = this.autoCorrection.slice(0, qInt) // on supprime les dernières questions non utilisées.
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

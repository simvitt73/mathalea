import {
  choice,
  combinaisonListes,
  shuffle,
} from '../../lib/outils/arrayOutils'
import { fraction } from '../../modules/fractions'
import { randint } from '../../modules/outils'
import Exercice from '../Exercice'

import { tableauColonneLigne } from '../../lib/2d/tableau'
import { ajouteQuestionMathlive } from '../../lib/interactif/questionMathLive'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { premiereLettreEnMajuscule } from '../../lib/outils/outilString'
import { context } from '../../modules/context'

export const titre =
  'Calculer des probabilités dans une expérience aléatoire à deux épreuves'
export const dateDePublication = '27/01/2026'
export const interactifReady = true
export const interactifType = 'mathLive'

// On lance un dé à 6 faces numérotées de 1 à 6
// Et on tire une boule dans une urne contenant 6 boules rouges et bleues
// on gagne si le numéro de la boule est supérieur ou égal au numéro du dé et si la boule est bleue.
function experience1() {
  // fabrication d'une urne avec 6 boules numérotées de 1 à 6 et de couleur rouge ou bleue
  const urne = []
  const nbBoulesRouges = randint(2, 4)
  const nbBoulesBleues = 6 - nbBoulesRouges
  const boulesRouges = Array(nbBoulesRouges).fill('R')
  const boulesBleues = Array(nbBoulesBleues).fill('B')
  const boules = shuffle([...boulesRouges, ...boulesBleues])
  for (let i = 1; i <= 6; i++) {
    urne.push({ numero: i, couleur: boules[i - 1] })
  }
  const enonce = `Le joueur d'un jeu télévisé doit lancer un dé à 6 faces numérotées de 1 à 6.<br>
Ensuite, il tire une boule dans une urne contenant 6 boules indiscernables au toucher.<br>
Ces boules sont numérotées de 1 à 6 et sont rouges ou bleues.<br>
Il gagne s'il tire une boule bleue dont le numéro est supérieur ou égal au numéro obtenu avec le dé.<br>
Voici l'urne utilisée :<br>
${premiereLettreEnMajuscule(
  urne
    .map(
      (boule) =>
        `la boule ${boule.numero} est ${boule.couleur === 'B' ? 'bleue' : 'rouge'}`,
    )
    .join(' ; '),
)}.<br>
Calculer la probabilité de gagner à ce jeu.`
  let correction = `Pour gagner, le joueur doit tirer une boule bleue dont le numéro est supérieur ou égal au numéro obtenu avec le dé.<br>
  On remplit le tableau à double entrée des issues possibles de cette expérience aléatoire :<br>`
  const ligneEnt = ['\\text{Dé\\textbackslash Boule}']
  const colonneEnt = []
  const contenu = []
  for (let i = 1; i <= 6; i++) {
    ligneEnt.push(`\\text{${i}}`)
    colonneEnt.push(`\\text{${i}}`)
    for (let j = 1; j <= 6; j++) {
      contenu.push(
        i <= j && boules[j - 1] === 'B' ? '\\text{gagné}' : '\\text{perdu}',
      )
    }
  }
  const tableau = tableauColonneLigne(ligneEnt, colonneEnt, contenu)
  correction += tableau + '<br>'
  const nbIssuesGagnantes = contenu.filter(
    (issue) => issue === '\\text{gagné}',
  ).length
  const probaGagner = fraction(nbIssuesGagnantes, 36)
  correction += `Il y a ${nbIssuesGagnantes} issues gagnantes parmi 36 issues possibles.<br>`
  correction += `La probabilité de gagner à ce jeu est donc de $${!probaGagner.estIrreductible ? probaGagner.texFraction + '=' + miseEnEvidence(probaGagner.texFractionSimplifiee) : miseEnEvidence(probaGagner.texFraction)}$.<br>`
  return {
    enonce,
    correction,
    alea: [...boules],
    reponse: probaGagner.texFraction,
  }
}

// Tirer deux boules successives avec remise d'une urne
// On gagne si les deux boules sont de la même couleur
function experience3() {
  // Fabrication d'une urne avec 6 boules de 2 ou 3 couleurs différentes
  const couleurs = ['R', 'B', 'V'] as const // Rouge, Bleu, Vert
  const nbCouleurs = 3
  const urne = []

  // Distribution aléatoire des boules entre les couleurs
  const bouleParCouleur = []
  let totalBoules = 0

  // Génère une distribution aléatoire avec au moins 1 boule par couleur
  do {
    totalBoules = 0
    bouleParCouleur.length = 0
    for (let i = 0; i < nbCouleurs; i++) {
      const nbBoules = randint(1, 3)
      bouleParCouleur.push(nbBoules)
      totalBoules += nbBoules
    }
  } while (totalBoules < 5)

  // Si total dépasse 6, on ajuste en retirant 1 boule au hasard
  while (totalBoules > 6) {
    const indicesToRetirer = bouleParCouleur
      .map((nb, idx) => (nb > 1 ? idx : -1))
      .filter((idx) => idx !== -1)
    if (indicesToRetirer.length > 0) {
      const indexARetirer =
        indicesToRetirer[Math.floor(Math.random() * indicesToRetirer.length)]
      bouleParCouleur[indexARetirer]--
      totalBoules--
    } else {
      break
    }
  }

  // Construction de l'urne
  for (let i = 0; i < nbCouleurs; i++) {
    for (let j = 0; j < bouleParCouleur[i]; j++) {
      urne.push(couleurs[i])
    }
  }

  const nomsCouleurs = {
    R: 'rouge',
    B: 'bleue',
    V: 'verte',
  }
  const couleurChoisie = choice(['R', 'B', 'V']) as keyof typeof nomsCouleurs

  const conditionsDeVictoire = [
    `tire deux boules de la même couleur`,
    `tire deux boules de couleurs différentes`,
    `tire au moins une boule ${nomsCouleurs[couleurChoisie]}`,
  ]
  const conditionDeVictoire = choice(conditionsDeVictoire)
  const gagnePerdu = function (conditionDeVictoire: string) {
    switch (conditionDeVictoire) {
      case 'tire deux boules de la même couleur':
        return (b1: string, b2: string) => b1 === b2
      case 'tire deux boules de couleurs différentes':
        return (b1: string, b2: string) => b1 !== b2
      case `tire au moins une boule ${nomsCouleurs[couleurChoisie]}`:
        return (b1: string, b2: string) =>
          b1 === couleurChoisie || b2 === couleurChoisie
      default:
        return () => false
    }
  }
  const enonce = `Un joueur tire une boule d'une urne, note sa couleur, la remet dans l'urne, puis tire une deuxième boule.<br>
L'urne contient ${totalBoules} boules indiscernables au toucher :<br>
${premiereLettreEnMajuscule(
  bouleParCouleur
    .map(
      (nb, idx) =>
        `${nb} boule${nb > 1 ? 's' : ''} ${nomsCouleurs[couleurs[idx]]}${nb > 1 ? 's' : ''}`,
    )
    .join(' ; '),
)}.<br>
Il gagne s'il ${conditionDeVictoire}.<br>
Calculer la probabilité de gagner à ce jeu.`

  let correction = `Pour gagner, le joueur doit ${conditionDeVictoire.replace('tire', 'tirer')} (avec remise).<br>
  On remplit le tableau à double entrée des issues possibles de cette expérience aléatoire :<br>`

  const ligneEnt = [
    '1^\\text{er}\\text{ tirage}\\backslash 2^\\text{e}\\text{ tirage}',
  ]
  const colonneEnt = []
  const contenu = []
  const totalIssues = totalBoules * totalBoules

  // Crée les étiquettes du tableau
  for (let i = 0; i < totalBoules; i++) {
    ligneEnt.push(`\\text{${urne[i]}}`)
    colonneEnt.push(`\\text{${urne[i]}}`)
  }

  // Remplit le tableau
  for (let i = 0; i < totalBoules; i++) {
    for (let j = 0; j < totalBoules; j++) {
      contenu.push(
        gagnePerdu(conditionDeVictoire)(urne[i], urne[j])
          ? '\\text{gagné}'
          : '\\text{perdu}',
      )
    }
  }

  const tableau = tableauColonneLigne(ligneEnt, colonneEnt, contenu)
  correction += tableau + '<br>'

  const nbIssuesGagnantes = contenu.filter(
    (issue) => issue === '\\text{gagné}',
  ).length
  const probaGagner = fraction(nbIssuesGagnantes, totalIssues)

  correction += `Il y a ${nbIssuesGagnantes} issues gagnantes parmi ${totalIssues} issues possibles.<br>`
  correction += `La probabilité de gagner à ce jeu est donc de $${!probaGagner.estIrreductible ? probaGagner.texFraction + '=' + miseEnEvidence(probaGagner.texFractionSimplifiee) : miseEnEvidence(probaGagner.texFraction)}$.<br>`

  return {
    enonce,
    correction,
    alea: [...urne],
    reponse: probaGagner.texFraction,
  }
}

// Lancer deux dés avec couleurs différentes (dé rouge et dé bleu)
// On gagne selon différents critères (somme, différence, produit)
function experience2() {
  let ilGagneTrop = false
  do {
    const typeGain = randint(1, 3) // 1: somme, 2: différence, 3: produit
    let condition = ''

    let seuil = 0
    let comparateur = ''

    if (typeGain === 1) {
      // Cas 1 : La somme dépasse un certain nombre
      seuil = randint(5, 8)
      comparateur = choice(['<', '<=', '>=', '>'])
      condition = `la somme des deux dés ${comparateur.includes('<') ? 'soit inférieure' : 'soit supérieure'} ${comparateur.includes('=') ? 'ou égale à' : 'à'} ${seuil}`
    } else if (typeGain === 2) {
      // Cas 2 : La différence est inférieure à un certain nombre
      seuil = 3
      comparateur = choice(['<', '<=', '>=', '>'])
      condition = `la différence entre les deux dés ${comparateur.includes('<') ? 'soit inférieure' : 'soit supérieure'} ${comparateur.includes('=') ? 'ou égale à' : 'à'} ${seuil}`
    } else {
      // Cas 3 : Le produit est supérieur à un certain nombre
      seuil = randint(12, 20)
      comparateur = choice(['<', '<=', '>=', '>'])
      condition = `le produit des deux dés ${comparateur.includes('<') ? 'soit inférieur' : 'soit supérieur'} ${comparateur.includes('=') ? 'ou égal à' : 'à'} ${seuil}`
    }

    const enonce = `Un joueur lance deux dés à 6 faces numérotées de 1 à 6 : un dé rouge et un dé bleu.<br>
Pour gagner, il faut que ${condition}.<br>
Calculer la probabilité de gagner à ce jeu.`

    let correction = `Pour gagner, il faut que ${condition}.<br>
  On remplit le tableau à double entrée des issues possibles de cette expérience aléatoire :<br>`

    const ligneEnt = ['\\text{Dé rouge\\textbackslash Dé bleu}']
    const colonneEnt = []
    const contenu = []

    // Crée les étiquettes du tableau
    for (let i = 1; i <= 6; i++) {
      ligneEnt.push(`\\text{${i}}`)
      colonneEnt.push(`\\text{${i}}`)
    }

    // Remplit le tableau
    let nbIssuesGagnantes = 0
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        let isGagnante = false

        if (typeGain === 1) {
          // Somme > seuil
          isGagnante = comparateur.includes('<') ? i + j < seuil : i + j > seuil
          if (comparateur.includes('=')) {
            isGagnante = isGagnante || i + j === seuil
          }
        } else if (typeGain === 2) {
          // Différence < seuil
          isGagnante = comparateur.includes('<')
            ? Math.abs(i - j) < seuil
            : Math.abs(i - j) > seuil
          if (comparateur.includes('=')) {
            isGagnante = isGagnante || Math.abs(i - j) === seuil
          }
        } else {
          // Produit > seuil
          isGagnante = comparateur.includes('<') ? i * j < seuil : i * j > seuil
          if (comparateur.includes('=')) {
            isGagnante = isGagnante || i * j === seuil
          }
        }

        if (isGagnante) {
          contenu.push('\\text{gagné}')
          nbIssuesGagnantes++
        } else {
          contenu.push('\\text{perdu}')
        }
      }
    }

    const tableau = tableauColonneLigne(ligneEnt, colonneEnt, contenu)
    correction += tableau + '<br>'

    const probaGagner = fraction(nbIssuesGagnantes, 36)

    correction += `Il y a ${nbIssuesGagnantes} issues gagnantes parmi 36 issues possibles.<br>`
    correction += `La probabilité de gagner à ce jeu est donc de $${!probaGagner.estIrreductible ? probaGagner.texFraction + '=' + miseEnEvidence(probaGagner.texFractionSimplifiee) : miseEnEvidence(probaGagner.texFraction)}$.<br>`
    ilGagneTrop = probaGagner.superieurLarge(0.5)
    if (!ilGagneTrop) {
      return {
        enonce,
        correction,
        alea: { typeGain, seuil },
        reponse: probaGagner.texFraction,
      }
    }
  } while (true)
}

/**
 * On doit calculer la probabilité qu'un événement se réalise après une expérience aléatoire à deux épreuves
 * @author Jean-Claude Lhote
 */
export const uuid = '7623a'

export const refs = {
  'fr-fr': ['3S22-1'],
  'fr-ch': [],
}

export default class CalculProbaExperience2Epreuves3e extends Exercice {
  constructor() {
    super()

    this.nbQuestions = 1
    this.spacing = context.isHtml ? 2 : 1.5
    this.spacingCorr = context.isHtml ? 2 : 1.5
  }

  nouvelleVersion() {
    const experiences = combinaisonListes(
      [experience1, experience2, experience3],
      this.nbQuestions,
    )
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      const question = experiences[i]()

      if (this.questionJamaisPosee(i, JSON.stringify(question.alea))) {
        this.listeQuestions[i] =
          question.enonce +
          ajouteQuestionMathlive({
            exercice: this,
            question: i,
            objetReponse: { reponse: { value: question.reponse } },
            typeInteractivite: 'mathlive',
          })
        this.listeCorrections[i] = question.correction
        i++
      }
      cpt++
    }
  }
}

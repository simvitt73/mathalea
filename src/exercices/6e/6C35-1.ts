import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'
import Exercice from '../Exercice'
import SchemaEnBoite from '../../lib/outils/SchemaEnBoite'
import { texNombre, texPrix } from '../../lib/outils/texNombre'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { premiereLettreEnMajuscule } from '../../lib/outils/outilString'
import { premierAvec } from '../../lib/outils/primalite'
import { miseEnEvidence } from '../../lib/outils/embellissements'

export const titre = 'Modéliser des problèmes niveau 2'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '28/05/2025'

/**
 * Associer des problèmes à des modélisations en barres.
 * @author Jean-Claude Lhote
 */
export const uuid = '4e89c'

export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

// Types utilisés dans les fonctions problèmes
type QuestionType = 'schéma' | 'énoncé' | 'mixte'
type ReponseType = [number, number, number, number]
 type ObjetAVendre = {
   nom: string
   prixMini: number
   prixMaxi: number
 }
 type ObjetAPartager = {
   nom: string
   nomPart: string
   partsMaxParObjet: number
   partsMinParObjet: number
   multiplicateurParts: number
 }

type FonctionProbleme = {
  (interactif?: boolean, typeQuestion?: QuestionType, decimaux?: boolean): { enonce: string, barre: SchemaEnBoite, reponse: ReponseType, type: string }
}

// matériel des fonctions problèmes
const prenoms: { prenom: string, pronom: string }[] = [
  { prenom: 'Albert', pronom: 'il' },
  { prenom: 'Alice', pronom: 'elle' },
  { prenom: 'Benoît', pronom: 'il' },
  { prenom: 'Béatrice', pronom: 'elle' },
  { prenom: 'Céline', pronom: 'elle' },
  { prenom: 'Charles', pronom: 'il' },
  { prenom: 'David', pronom: 'il' },
  { prenom: 'Diane', pronom: 'elle' },
  { prenom: 'Émile', pronom: 'il' },
  { prenom: 'Élodie', pronom: 'elle' },
  { prenom: 'François', pronom: 'il' },
  { prenom: 'Fiona', pronom: 'elle' },
  { prenom: 'Gaspard', pronom: 'il' },
  { prenom: 'Gabrielle', pronom: 'elle' },
  { prenom: 'Hugo', pronom: 'il' },
  { prenom: 'Hélène', pronom: 'elle' },
  { prenom: 'Isabelle', pronom: 'elle' },
  { prenom: 'Julien', pronom: 'il' },
  { prenom: 'Julie', pronom: 'elle' },
  { prenom: 'Kevin', pronom: 'il' },
  { prenom: 'Karine', pronom: 'elle' },
  { prenom: 'Lucas', pronom: 'il' },
  { prenom: 'Léa', pronom: 'elle' },
  { prenom: 'Mathieu', pronom: 'il' },
  { prenom: 'Marie', pronom: 'elle' },
  { prenom: 'Nicolas', pronom: 'il' },
  { prenom: 'Nathalie', pronom: 'elle' },
  { prenom: 'Olivier', pronom: 'il' },
  { prenom: 'Océane', pronom: 'elle' }
]
const troisObjetsAVendre: [ObjetAVendre, ObjetAVendre, ObjetAVendre][] = [
  [{ nom: 'un tee-shirt', prixMini: 7, prixMaxi: 15 }, { nom: 'une paire de baskets', prixMini: 70, prixMaxi: 130 }, { nom: 'un short', prixMini: 10, prixMaxi: 25 }],
  [{ nom: 'un livre', prixMini: 5, prixMaxi: 20 }, { nom: 'un cahier', prixMini: 2, prixMaxi: 5 }, { nom: 'un stylo', prixMini: 1, prixMaxi: 5 }],
  [{ nom: 'un jeu vidéo', prixMini: 20, prixMaxi: 60 }, { nom: 'une console de jeux', prixMini: 200, prixMaxi: 400 }, { nom: 'un casque audio', prixMini: 30, prixMaxi: 100 }],
  [{ nom: 'un vélo', prixMini: 100, prixMaxi: 300 }, { nom: 'un casque de vélo', prixMini: 10, prixMaxi: 30 }, { nom: 'une pompe à vélo', prixMini: 5, prixMaxi: 15 }],
  [{ nom: 'un sac à dos', prixMini: 15, prixMaxi: 50 }, { nom: 'une trousse', prixMini: 5, prixMaxi: 15 }, { nom: 'un ordinateur portable', prixMini: 300, prixMaxi: 1000 }],
  [{ nom: 'un smartphone', prixMini: 200, prixMaxi: 800 }, { nom: 'une tablette', prixMini: 150, prixMaxi: 600 }, { nom: 'une montre connectée', prixMini: 50, prixMaxi: 300 }]
]
const objetsAPartager: ObjetAPartager[] = [
  { nom: 'paquets de gâteaux', nomPart: 'gâteaux', partsMaxParObjet: 10, partsMinParObjet: 4, multiplicateurParts: 1 },
  { nom: 'sacs de billes', nomPart: 'billes', partsMaxParObjet: 5, partsMinParObjet: 1, multiplicateurParts: 10 },
  { nom: 'boîtes de chocolats', nomPart: 'chocolats', partsMaxParObjet: 8, partsMinParObjet: 2, multiplicateurParts: 5 },
  { nom: 'sachets de bonbons', nomPart: 'bonbons', partsMaxParObjet: 12, partsMinParObjet: 5, multiplicateurParts: 2 }
]

/**
 * Fonction qui choisit une situation problème basée sur la somme de trois nombres.
 * la situation sera choisie entre troisAchats et troisDistances (qui contient 3 sous-cas)
 */
const sommeTroisParties: FonctionProbleme = (interactif = false, typeQuestion = 'schéma', decimaux = false) => {
  /**
   *
   * @param interactif fournit un énoncé d'achat cumulé de 3 objets.
   * @param typeQuestion
   * @param decimaux
   * @returns
   */
  const troisAchats: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma', decimaux = false) => {
    const choix = choice(troisObjetsAVendre)
    const prixAchat = choix.map(o => randint(o.prixMini, o.prixMaxi) + (decimaux ? Number(Math.random().toFixed(1)) + choice([0.05, 0]) : 0))
    const total = prixAchat.reduce((a, b) => a + b, 0)
    const prenomData = choice(prenoms)
    const prenom = prenomData.prenom
    const pronom = prenomData.pronom
    const enonce = typeQuestion === 'schéma'
      ? `${prenom} achète ${choix[0].nom} à ${prixAchat[0]} €, ${choix[1].nom} à ${prixAchat[1]} € et ${choix[2].nom} à ${prixAchat[2]} €. Combien a-t-${pronom} dépensé au total ?<br><br>
    Réponse : ${prenom} a dépensé au total $${texPrix(total)}$ €.`
      : typeQuestion === 'énoncé'
        ? `${prenom} achète ${choix[0].nom} à zone0 €, ${choix[1].nom} à zone1 € et ${choix[2].nom} à zone2 €. Combien a-t-${pronom} dépensé au total ?<br><br>
    Réponse : ${prenom} a dépensé au total zone3 €.`
        : `${prenom} achète ${choix[0].nom} à ${prixAchat[0]} €, ${choix[1].nom} à zone1 € et ${choix[2].nom} à ${prixAchat[2]} €. Combien a-t-${pronom} dépensé au total ?<br><br>
    Réponse : ${prenom} a dépensé au total zone3 €.`
    const barre = typeQuestion === 'schéma'
      ? new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      : typeQuestion === 'énoncé'
        ? new SchemaEnBoite({
          topBar: [
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[0])}$` },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[1])}$` },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[2])}$` }
          ],
          bottomBar: [
            { color: 'lightgray', length: 12, content: `$${texPrix(total)}$` }
          ]
        })
        : new SchemaEnBoite({
          topBar: [
            { color: 'lightgray', length: 4, content: 'zone0' },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[1])}$` },
            { color: 'lightgray', length: 4, content: 'zone2' }
          ],
          bottomBar: [
            { color: 'lightgray', length: 12, content: `$${texPrix(total)}$` }
          ]
        })

    return {
      enonce,
      barre,
      reponse: [
        prixAchat[0],
        prixAchat[1],
        prixAchat[2],
        total
      ],
      type: 'additif'
    }
  }

  /**
   * Fonction problème qui sous-traite 3 situations identiques d'addition dans des contextes légèrement différents.
   * Elle fait partie de sommeTroisParties avec troisAchats
   * @param interactif
   * @param typeQuestion
   * @returns
   */
  const troisDistances: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma') => {
    const prenomData = choice(prenoms)
    const prenom = prenomData.prenom
    const pronom = prenomData.pronom
    type TroisDistancesFonction = [string, SchemaEnBoite, number, number, number, number]
    function triathlon (prenom: string, pronom: string): TroisDistancesFonction {
      const distanceNatation = randint(2, 15) * 100 // en mètres
      const distanceVelo = distanceNatation * 15 // en mètres
      const distanceCourse = distanceNatation * 5 // en mètres
      const total = distanceNatation + distanceVelo + distanceCourse
      const enonce = `${prenom} participe à un triathlon. Il nage zone0 m, fait du vélo sur zone1 m et court sur zone2 m. Quelle distance totale a-t-${pronom} parcourue ?<br><br>
      Réponse : ${prenom} a parcouru au total zone3 m.`
      const barre = new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      return [enonce, barre, distanceNatation, distanceVelo, distanceCourse, total]
    }
    function etapeDeMontagne (prenom: string, pronom: string): TroisDistancesFonction {
      const ascension1 = randint(5, 25) * 50 // en mètres
      const ascension2 = randint(5, 25, Math.round(ascension1 / 100)) * 50// en mètres
      const ascension3 = randint(5, 25, [ascension1 / 100, ascension2 / 100].map(Math.round)) * 50// en mètres
      const total = ascension1 + ascension2 + ascension3
      const enonce = `${prenom} effectue à vélo une étape de montagne du tour de France. ${premiereLettreEnMajuscule(pronom)} grimpe trois cols qui ont les dénivelés suivants : zone0 m pour le premier col, zone1 m pour le deuxième et zone2 m pour le dernier. Quelle dénivelé cumulé a-t-${pronom} grimpé ?<br><br>
      Réponse : ${prenom} a grimpé au total zone3 m.`
      const barre = new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      return [enonce, barre, ascension1, ascension2, ascension3, total]
    }
    function randonnee (prenom: string, pronom: string):TroisDistancesFonction {
      const distance1 = randint(10, 15) * 300 // en mètres
      const distance2 = randint(10, 15, Math.round(distance1 / 300)) * 300 // en mètres
      const distance3 = randint(10, 15, [distance1 / 300, distance2 / 300].map(Math.round)) * 100 // en mètres
      const total = distance1 + distance2 + distance3
      const enonce = `${prenom} part en randonnée. ${premiereLettreEnMajuscule(pronom)} marche zone0 m avant sa première halte, puis zone1 m avant le repas de midi et enfin zone2 m. Quelle distance totale a-t-${pronom} parcourue ?<br><br>
      Réponse : ${prenom} a parcouru au total zone3 m.`
      const barre = new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      return [enonce, barre, distance1, distance2, distance3, total]
    }

    const choix = choice([triathlon, etapeDeMontagne, randonnee])
    let [enonce, barre, distance1, distance2, distance3, total] = choix(prenom, pronom)
    const reponses = [distance1, distance2, distance3, total]
    const zoneAQuestionner = combinaisonListes(['e', 's'], 4)

    for (let i = 0; i <= 3; i++) {
      if (typeQuestion === 'schéma') {
        enonce = enonce.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
      } else if (typeQuestion === 'énoncé') {
        if (barre.topBar != null) {
          const bar = barre.topBar.findIndex(b => b.content.includes(`zone${i}`))
          if (bar !== -1) {
            barre.topBar[bar].content = barre.topBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
        if (barre.bottomBar != null) {
          const bar = barre.bottomBar.findIndex(b => b.content.includes(`zone${i}`))
          if (bar !== -1) {
            barre.bottomBar[bar].content = barre.bottomBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
        if (barre.topBraces != null) {
          const brace = barre.topBraces.findIndex(b => b.text.includes(`zone${i}`))
          if (brace !== -1) {
            barre.topBraces[brace].text = barre.topBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
        if (barre.bottomBraces != null) {
          const brace = barre.bottomBraces.findIndex(b => b.text.includes(`zone${i}`))
          if (brace !== -1) {
            barre.bottomBraces[brace].text = barre.bottomBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
      } else {
        if (zoneAQuestionner[i] === 'e') {
          enonce = enonce.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
        } else {
          if (barre.topBar != null) {
            const bar = barre.topBar.findIndex(b => b.content.includes(`zone${i}`))
            if (bar !== -1) {
              barre.topBar[bar].content = barre.topBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
          if (barre.bottomBar != null) {
            const bar = barre.bottomBar.findIndex(b => b.content.includes(`zone${i}`))
            if (bar !== -1) {
              barre.bottomBar[bar].content = barre.bottomBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
          if (barre.topBraces != null) {
            const brace = barre.topBraces.findIndex(b => b.text.includes(`zone${i}`))
            if (brace !== -1) {
              barre.topBraces[brace].text = barre.topBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
          if (barre.bottomBraces != null) {
            const brace = barre.bottomBraces.findIndex(b => b.text.includes(`zone${i}`))
            if (brace !== -1) {
              barre.bottomBraces[brace].text = barre.bottomBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
        }
      }
    }
    return { enonce, barre, reponse: [distance1, distance2, distance3, total], type: 'additif' }
  }

  const choixFonction = choice([troisAchats, troisDistances])
  return choixFonction(interactif, typeQuestion, decimaux)
} // fin de sommeTroisParties

const unePartieTout: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma', decimaux = false) => {
  const unAchatParmisTrois: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma', decimaux = false) => {
    const choix = choice(troisObjetsAVendre)
    const prixAchat = choix.map(o => randint(o.prixMini, o.prixMaxi) + (decimaux ? Number(Math.random().toFixed(1)) + choice([0.05, 0]) : 0))
    const total = prixAchat.reduce((a, b) => a + b, 0)
    const prenomData = choice(prenoms)
    const prenom = prenomData.prenom
    const pronom = prenomData.pronom
    const enonce = typeQuestion === 'schéma'
      ? `${prenom} achète ${choix[0].nom} à ${prixAchat[0]} €, ${choix[1].nom} à ${prixAchat[1]} € et ${choix[2].nom}. ${premiereLettreEnMajuscule(pronom)} a payé en tout $${total}$ €. Combien coûte ${choix[2].nom} ?<br><br>
    Réponse :  ${choix[2].nom} a couté $${texPrix(prixAchat[2])}$ €.`
      : typeQuestion === 'énoncé'
        ? `${prenom} achète ${choix[0].nom} à zone0 €, ${choix[1].nom} à zone1 € et ${choix[2].nom}. ${premiereLettreEnMajuscule(pronom)} a payé en tout zone3 €. Combien coûte ${choix[2].nom} ?<br><br>
    Réponse :  ${choix[2].nom} a couté zone2 €.`
        : `${prenom} achète ${choix[0].nom} à ${prixAchat[0]} €, ${choix[1].nom} à zone1 € et ${choix[2].nom}.  ${premiereLettreEnMajuscule(pronom)} a payé en tout $${total}$ €. Combien coûte ${choix[2].nom} ?<br><br>
    Réponse :  ${choix[2].nom} a couté zone2 €.`
    const barre = typeQuestion === 'schéma'
      ? new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      : typeQuestion === 'énoncé'
        ? new SchemaEnBoite({
          topBar: [
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[0])}$` },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[1])}$` },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[2])}$` }
          ],
          bottomBar: [
            { color: 'lightgray', length: 12, content: `$${texPrix(total)}$` }
          ]
        })
        : new SchemaEnBoite({
          topBar: [
            { color: 'lightgray', length: 4, content: 'zone0' },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[1])}$` },
            { color: 'lightgray', length: 4, content: `$${texPrix(prixAchat[2])}$` }
          ],
          bottomBar: [
            { color: 'lightgray', length: 12, content: 'zone3' }
          ]
        })

    return {
      enonce,
      barre,
      reponse: [
        prixAchat[0],
        prixAchat[1],
        prixAchat[2],
        total
      ],
      type: 'partie-tout'
    }
  } // fin de unAchatParmisTrois
  const uneDistanceParmiTrois: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma') => {
    const prenomData = choice(prenoms)
    const prenom = prenomData.prenom
    const pronom = prenomData.pronom
    type UneDistanceParmiTroisFonction = [string, SchemaEnBoite, number, number, number, number]
    function triathlon (prenom: string, pronom: string): UneDistanceParmiTroisFonction {
      const distanceNatation = randint(2, 15) * 100 // en mètres
      const distanceVelo = distanceNatation * 15 // en mètres
      const distanceCourse = distanceNatation * 5 // en mètres
      const total = distanceNatation + distanceVelo + distanceCourse
      const enonce = `${prenom} participe à un triathlon. Il nage zone0 m, fait ensuite du vélo et ensuite court sur zone2 m. ${premiereLettreEnMajuscule(pronom)} a parcouru en tout zone3 m. Quelle distance a-t-${pronom} parcourue à vélo ?<br><br>
      Réponse : ${prenom} a parcouru zone1 m à vélo.`
      const barre = new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      return [enonce, barre, distanceNatation, distanceVelo, distanceCourse, total]
    }
    function etapeDeMontagne (prenom: string, pronom: string): UneDistanceParmiTroisFonction {
      const ascension1 = randint(5, 25) * 50 // en mètres
      const ascension2 = randint(5, 25, Math.round(ascension1 / 100)) * 50// en mètres
      const ascension3 = randint(5, 25, [ascension1 / 100, ascension2 / 100].map(Math.round)) * 50// en mètres
      const total = ascension1 + ascension2 + ascension3
      const enonce = `${prenom} effectue à vélo une étape de montagne du tour de France. ${premiereLettreEnMajuscule(pronom)} grimpe trois cols qui ont les dénivelés suivants : zone0 m pour le premier col et zone2 m pour le dernier. ${premiereLettreEnMajuscule(pronom)} a grimpé au total zone3 m. Combien de mètres a-t-${pronom} grimpé lors de l'ascension du deuxième col ?<br><br>
      Réponse : ${prenom} a grimpé zone1 m au deuxième col.`
      const barre = new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      return [enonce, barre, ascension1, ascension2, ascension3, total]
    }
    function randonnee (prenom: string, pronom: string): UneDistanceParmiTroisFonction {
      const distance1 = randint(10, 15) * 300 // en mètres
      const distance2 = randint(10, 15, Math.round(distance1 / 300)) * 300 // en mètres
      const distance3 = randint(10, 15, [distance1 / 300, distance2 / 300].map(Math.round)) * 100 // en mètres
      const total = distance1 + distance2 + distance3
      const enonce = `${prenom} part en randonnée. ${premiereLettreEnMajuscule(pronom)} marche zone0 m avant sa première halte, ${pronom} marche encore un peu avant le repas de midi et repart ensuite pour éffectuer zone2 m. ${premiereLettreEnMajuscule(pronom)} a parcouru au total zone3 m. Quelle distance a-t-${pronom} parcourue entre sa halte matinale et le repas de midi ?<br><br>
      Réponse : ${prenom} a parcouru zone1 m avant le repas de midi.`
      const barre = new SchemaEnBoite({
        topBar: [
          { color: 'lightgray', length: 4, content: 'zone0' },
          { color: 'lightgray', length: 4, content: 'zone1' },
          { color: 'lightgray', length: 4, content: 'zone2' }
        ],
        bottomBar: [
          { color: 'lightgray', length: 12, content: 'zone3' }
        ]
      })
      return [enonce, barre, distance1, distance2, distance3, total]
    }

    const choix = choice([triathlon, etapeDeMontagne, randonnee])
    let [enonce, barre, distance1, distance2, distance3, total] = choix(prenom, pronom)
    const reponses = [distance1, distance2, distance3, total]
    const zoneAQuestionner = combinaisonListes(['e', 's'], 4)
    for (let i = 0; i <= 3; i++) {
      if (typeQuestion === 'schéma') {
        enonce = enonce.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
      } else if (typeQuestion === 'énoncé') {
        if (barre.topBar != null) {
          const bar = barre.topBar.findIndex(b => b.content.includes(`zone${i}`))
          if (bar !== -1) {
            barre.topBar[bar].content = barre.topBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
        if (barre.bottomBar != null) {
          const bar = barre.bottomBar.findIndex(b => b.content.includes(`zone${i}`))
          if (bar !== -1) {
            barre.bottomBar[bar].content = barre.bottomBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
        if (barre.topBraces != null) {
          const brace = barre.topBraces.findIndex(b => b.text.includes(`zone${i}`))
          if (brace !== -1) {
            barre.topBraces[brace].text = barre.topBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
        if (barre.bottomBraces != null) {
          const brace = barre.bottomBraces.findIndex(b => b.text.includes(`zone${i}`))
          if (brace !== -1) {
            barre.bottomBraces[brace].text = barre.bottomBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
          }
        }
      } else {
        if (zoneAQuestionner[i] === 'e') {
          enonce = enonce.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
        } else {
          if (barre.topBar != null) {
            const bar = barre.topBar.findIndex(b => b.content.includes(`zone${i}`))
            if (bar !== -1) {
              barre.topBar[bar].content = barre.topBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
          if (barre.bottomBar != null) {
            const bar = barre.bottomBar.findIndex(b => b.content.includes(`zone${i}`))
            if (bar !== -1) {
              barre.bottomBar[bar].content = barre.bottomBar[bar].content.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
          if (barre.topBraces != null) {
            const brace = barre.topBraces.findIndex(b => b.text.includes(`zone${i}`))
            if (brace !== -1) {
              barre.topBraces[brace].text = barre.topBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
          if (barre.bottomBraces != null) {
            const brace = barre.bottomBraces.findIndex(b => b.text.includes(`zone${i}`))
            if (brace !== -1) {
              barre.bottomBraces[brace].text = barre.bottomBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponses[i], 2)}$`)
            }
          }
        }
      }
    }
    return { enonce, barre, reponse: [distance1, distance2, distance3, total], type: 'partie-tout' }
  } // fin de uneDistanceParmiTrois
  const choixFonction = choice([unAchatParmisTrois, uneDistanceParmiTrois])
  return choixFonction(interactif, typeQuestion, decimaux)
} // fin de unePartieTout

const partageEquitable: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma', decimaux = false) => {
  const partageEntreAmis: FonctionProbleme = (interactif = false, typeQuestion: QuestionType = 'schéma', decimaux = false) => {
    const objet = choice(objetsAPartager)
    const prenomData = choice(prenoms)
    const prenom = prenomData.prenom
    const pronom = prenomData.pronom
    let nombreAmis: number
    let nombrePartsParObjet: number
    let nombreObjets: number
    let nombrePartsParAmi: number
    let nombrePartsRestantes: number
    do {
      nombreAmis = randint(4, 9)
      nombrePartsParObjet = randint(objet.partsMinParObjet, objet.partsMaxParObjet) * objet.multiplicateurParts
      nombreObjets = premierAvec(nombreAmis, [], false)
      nombrePartsParAmi = Math.floor(nombreObjets * nombrePartsParObjet / nombreAmis)
      nombrePartsRestantes = nombreObjets * nombrePartsParObjet - nombreAmis * nombrePartsParAmi
    } while (nombrePartsRestantes === 0 || nombreObjets === nombrePartsParObjet ||
    nombreObjets === nombrePartsParAmi || nombrePartsParObjet === nombrePartsParAmi ||
  nombrePartsParAmi === nombreAmis || nombreObjets === nombreAmis || nombrePartsParObjet === nombreAmis)
    let enonce = `${prenom} a zone0 ${objet.nom} chacun contenant zone1 ${objet.nomPart}. Quand ${pronom} les distribue à ses amis, chacun en a zone2 et il en reste ${nombrePartsRestantes}. Combien a-t-${pronom} d'amis ?<br><br>
    Réponse : ${prenom} a zone3 amis.`
    const barre = new SchemaEnBoite({
      topBraces: [
        { start: 1, end: 9, text: 'zone0 fois', type: 'curl' }
      ],
      topBar: [
        { color: 'lightgray', length: 1, content: 'zone1', options: { style: ' border-right: dashed 1px;' } },
        { color: 'lightgray', length: 7, content: ' \\ldots', options: { justify: 'start', style: 'border-left: none;' } },
      ],
      bottomBar: [
        { color: 'lightgray', length: 2, content: 'zone2', options: { style: ' border-right: dashed 1px;' } },
        { color: 'lightgray', length: 5, content: ' \\ldots', options: { justify: 'start', style: ' border-left: none;' } },
        { color: 'lightgray', length: 1, content: texNombre(nombrePartsRestantes, 0) }
      ],
      bottomBraces: [
        { start: 1, end: 8, text: 'zone3 fois', type: 'curl' }
      ]
    })

    const reponse: [number, number, number, number] = [
      nombreObjets,
      nombrePartsParObjet,
      nombrePartsParAmi,
      nombreAmis
    ]
    const zoneAQuestionner = combinaisonListes(['e', 's'], 4)
    for (let i = 0; i <= 3; i++) {
      if (typeQuestion === 'schéma') {
        enonce = enonce.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
      } else if (typeQuestion === 'énoncé') {
        if (barre.topBar != null) {
          const bar = barre.topBar.filter(b => b.content.includes(`zone${i}`))
          if (bar.length > 0) {
            barre.topBar.forEach(b => {
              b.content = b.content.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
            })
          }
        }
        if (barre.bottomBar != null) {
          const bar = barre.bottomBar.findIndex(b => b.content.includes(`zone${i}`))
          if (bar !== -1) {
            barre.bottomBar[bar].content = barre.bottomBar[bar].content.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
          }
        }
        if (barre.topBraces != null) {
          const brace = barre.topBraces.findIndex(b => b.text.includes(`zone${i}`))
          if (brace !== -1) {
            barre.topBraces[brace].text = barre.topBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
          }
        }
        if (barre.bottomBraces != null) {
          const brace = barre.bottomBraces.findIndex(b => b.text.includes(`zone${i}`))
          if (brace !== -1) {
            barre.bottomBraces[brace].text = barre.bottomBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
          }
        }
      } else {
        if (zoneAQuestionner[i] === 'e') {
          enonce = enonce.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
        } else {
          if (barre.topBar != null) {
            const bar = barre.topBar.findIndex(b => b.content.includes(`zone${i}`))
            if (bar !== -1) {
              barre.topBar[bar].content = barre.topBar[bar].content.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
            }
          }
          if (barre.bottomBar != null) {
            const bar = barre.bottomBar.findIndex(b => b.content.includes(`zone${i}`))
            if (bar !== -1) {
              barre.bottomBar[bar].content = barre.bottomBar[bar].content.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
            }
          }
          if (barre.topBraces != null) {
            const brace = barre.topBraces.findIndex(b => b.text.includes(`zone${i}`))
            if (brace !== -1) {
              barre.topBraces[brace].text = barre.topBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
            }
          }
          if (barre.bottomBraces != null) {
            const brace = barre.bottomBraces.findIndex(b => b.text.includes(`zone${i}`))
            if (brace !== -1) {
              barre.bottomBraces[brace].text = barre.bottomBraces[brace].text.replace(`zone${i}`, `$${texNombre(reponse[i], 2)}$`)
            }
          }
        }
      }
    }
    return { enonce, barre, reponse, type: 'partage' }
  } // fin de partageEntreAmis

  const choixFonction = choice([partageEntreAmis])
  return choixFonction(interactif, typeQuestion, decimaux)
} // fin de partageEquitable

/**
 * Fonction qui va produire l'énoncé et la correction en choisissant aléatoirement une fonction problème.
 * C'est aussi dans cette fonction qu'est géré l'interactivité le cas échéant.
 * @param exercice
 * @param typeQuestion
 * @param startInteractif
 * @returns
 */
function genereEnonces (exercice: Exercice, typeQuestion: QuestionType, startInteractif = 0) : { enonce: string, nextInteractif: number, correction: string } {
  const interactif = exercice.interactif
  const fonctionsGenerales = [sommeTroisParties, unePartieTout, partageEquitable]
  const fonctionEnonce = choice(fonctionsGenerales)
  let { enonce, barre, reponse, type } = fonctionEnonce(interactif, typeQuestion)
  let i = startInteractif
  let enonceCorr = enonce
  const barreCorr = new SchemaEnBoite({ topBraces: barre.topBraces ? JSON.parse(JSON.stringify(barre.topBraces)) : undefined, bottomBraces: barre.bottomBraces ? JSON.parse(JSON.stringify(barre.bottomBraces)) : undefined, topBar: JSON.parse(JSON.stringify(barre.topBar)), bottomBar: JSON.parse(JSON.stringify(barre.bottomBar)) })
  for (let k = 0; k < 4; k++) {
    if (enonceCorr.includes(`zone${k}`)) {
      enonceCorr = enonceCorr.replaceAll(`zone${k}`, `$${miseEnEvidence(texNombre(reponse[k], 2))}$`)
    }
    if (barreCorr.topBraces != null) {
      const brace = barreCorr.topBraces.findIndex(b => b.text.includes(`zone${k}`))
      if (brace !== -1) {
        barreCorr.topBraces[brace].text = barreCorr.topBraces[brace].text.replace(`zone${k}`, `$${miseEnEvidence(texNombre(reponse[k], 2))}$`)
      }
    }
    if (barreCorr.bottomBraces != null) {
      const brace = barreCorr.bottomBraces.findIndex(b => b.text.includes(`zone${k}`))
      if (brace !== -1) {
        barreCorr.bottomBraces[brace].text = barreCorr.bottomBraces[brace].text.replace(`zone${k}`, `$${miseEnEvidence(texNombre(reponse[k], 2))}$`)
      }
    }
    if (barreCorr.topBar != null) {
      const bar = barreCorr.topBar.findIndex(b => b.content.includes(`zone${k}`))
      if (bar !== -1) {
        barreCorr.topBar[bar].content = barreCorr.topBar[bar].content.replace(`zone${k}`, `$${miseEnEvidence(texNombre(reponse[k], 2))}$`)
      }
    }
    if (barreCorr.bottomBar != null) {
      const bar = barreCorr.bottomBar.findIndex(b => b.content.includes(`zone${k}`))
      if (bar !== -1) {
        barreCorr.bottomBar[bar].content = barreCorr.bottomBar[bar].content.replace(`zone${k}`, `$${miseEnEvidence(texNombre(reponse[k], 2))}$`)
      }
    }
  }
  enonceCorr = typeQuestion === 'schéma'
    ? `Le problème :<br><br>${enonceCorr}<br><br>
  se modélise par le schéma de type ${type} suivant :<br>
${barreCorr.display()}`
    : typeQuestion === 'énoncé'
      ? `Le schéma : <br>${barreCorr.display()}<br>
correspond à l'énoncé ci-dessous :<br><br>
${enonceCorr}`
      : `Voici l'énoncé et le schéma correspondant :<br><br>
${enonceCorr}<br>
${barreCorr.display()}`

  for (let k = 0; k < 4; k++) {
    if (enonce.includes(`zone${k}`)) {
      if (interactif && exercice != null) {
        enonce = enonce.replaceAll(`zone${k}`, ajouteChampTexteMathLive(exercice, i, 'schemaEnBoite'))
        handleAnswers(exercice, i, { reponse: { value: texNombre(reponse[k], 2), options: { noFeedback: true } } })
        i++
      } else {
        enonce = enonce.replace(`zone${k}`, '$\\ldots$')
        i++
      }
    }
  }
  for (let k = 0; k < 4; k++) {
    if (barre.topBraces != null) {
      const braces = barre.topBraces.filter(b => b.text.includes(`zone${k}`))
      if (braces.length > 0) {
        if (interactif && exercice != null) {
          braces.forEach(b => {
            b.text = b.text.replace(`zone${k}`, ajouteChampTexteMathLive(exercice, i, 'schemaEnBoite'))
            handleAnswers(exercice, i, { reponse: { value: texNombre(reponse[k], 2), options: { noFeedback: true } } })
          })
          i++
        } else {
          braces.forEach(b => {
            b.text = b.text.replace(`zone${k}`, '\\ldots')
          }
          )
          i++
        }
      }
    }
    if (barre.bottomBraces != null) {
      const braces = barre.bottomBraces.filter(b => b.text.includes(`zone${k}`))
      if (braces.length > 0) {
        if (interactif && exercice != null) {
          braces.forEach(b => {
            b.text = b.text.replace(`zone${k}`, ajouteChampTexteMathLive(exercice, i, 'schemaEnBoite'))
            handleAnswers(exercice, i, { reponse: { value: texNombre(reponse[k], 2), options: { noFeedback: true } } })
          })
          i++
        } else {
          braces.forEach(b => {
            b.text = b.text.replace(`zone${k}`, '\\ldots')
          })
          i++
        }
      }
    }
    if (barre.topBar != null) {
      const bars = barre.topBar.filter(b => b.content.includes(`zone${k}`))
      if (bars.length > 0) {
        if (interactif && exercice != null) {
          bars.forEach(b => {
            b.content = b.content.replace(`zone${k}`, ajouteChampTexteMathLive(exercice, i, 'schemaEnBoite'))
            handleAnswers(exercice, i, { reponse: { value: texNombre(reponse[k], 2), options: { noFeedback: true } } })
          }
          )
          i++
        } else {
          bars.forEach(b => {
            b.content = b.content.replace(`zone${k}`, '\\ldots')
          }
          )
          i++
        }
      }
    }
    if (barre.bottomBar != null) {
      const bars = barre.bottomBar.filter(b => b.content.includes(`zone${k}`))
      if (bars.length > 0) {
        if (interactif && exercice != null) {
          bars.forEach(b => {
            b.content = b.content.replace(`zone${k}`, ajouteChampTexteMathLive(exercice, i, 'schemaEnBoite'))
            handleAnswers(exercice, i, { reponse: { value: texNombre(reponse[k], 2), options: { noFeedback: true } } })
          })
          i++
        } else {
          bars.forEach(b => {
            b.content = b.content.replace(`zone${k}`, '\\ldots')
          }
          )
          i++
        }
      }
    }
  }
  const texte = `${enonce}<br><br>
  ${barre.display()}<br><br>`
  return { enonce: texte, nextInteractif: i, correction: enonceCorr }
}

export default class ModelisationProblemes extends Exercice {
  constructor () {
    super()

    this.nbQuestions = 1
    this.besoinFormulaireTexte = ['Types de questions', 'nombres séparés par des tirets\n1 : Compléter le schéma\n2 : Compléter l\'énoncé\n3 : Compléter le schéma et l\'énoncé\n4 : Mélange']
    this.sup = '1'
    this.sup = 2
    this.sup2 = 3
    this.sup3 = 3

    this.correctionDetailleeDisponible = true
    this.correctionDetaillee = true
  }

  nouvelleVersion () {
    const typeDeQuestions = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: 3, defaut: 1, melange: 4, nbQuestions: this.nbQuestions, listeOfCase: ['schéma', 'énoncé', 'mixte'] }) as unknown as QuestionType[]
    let indexInteractif = 0
    for (let i = 0; i < this.nbQuestions;) {
      const { enonce, nextInteractif, correction } = genereEnonces(this, typeDeQuestions[i], indexInteractif)
      indexInteractif = nextInteractif
      if (this.questionJamaisPosee(i, enonce.split(' ')[0])) {
        this.listeQuestions.push(enonce)
        this.listeCorrections.push(correction)
        i++
      }
    }
  }
}

import { choice } from '../../lib/outils/arrayOutils'
import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint, ppcm, gestionnaireFormulaireTexte } from '../../modules/outils.js'
import { ecritureAlgebrique, ecritureAlgebriqueSauf1, rienSi1 } from '../../lib/outils/ecritures'
import { ceil } from 'mathjs'
import { texNombre } from '../../lib/outils/texNombre'
import { remplisLesBlancs } from '../../lib/interactif/questionMathLive'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { listeDesDiviseurs, premiersEntreBornes } from '../../lib/outils/primalite.js'
import { abs } from '../../lib/outils/nombres.js'
import { miseEnEvidence, texteEnCouleurEtGras } from '../../lib/outils/embellissements.js'
import numberCompare from '../../lib/interactif/comparisonFunctions'
import Decimal from 'decimal.js'
export const titre = 'Problèmes avec les systèmes d\'équations du premier degré'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '21/03/2024'
export const uuid = '6fbf9'
export const refs = {
  'fr-ch': ['11FA6-8'],
  'fr-fr': ['2G34-9']
}
// export const dateDeModifImportante = '24/10/2021'

/**
 * Description didactique de l'exercice
 * @author Nathan Scheinmann et Fanny Boitard
*/

export default class systemeEquationsPremDeg extends Exercice {
  constructor () {
    super()
    this.consigne = ''
    this.nbQuestions = 3
    this.besoinFormulaireTexte = ['Type de questions', '1: Problème elèves \n2 : Problème rectangle \n3 : Problème nombre de chaque type \n4 : Problème recette \n5 : Problème achats différents  \n6 : Problème ages \n7 : trains \n8 : Mélange']
    this.sup = this.besoinFormulaireTexte[1].length + 1 // par défaut, dernière option (mélange)
    this.correctionDetailleeDisponible = true
  }

  nouvelleVersion () {
    if (this.nbQuestions === 1) {
      this.consigne = 'Résoudre le problème suivant :'
    } else {
      this.consigne = 'Résoudre les problèmes suivants :'
    }
    this.listeQuestions = []
    this.listeCorrections = []
    this.autoCorrection = []

    const listeTypeQuestions = gestionnaireFormulaireTexte({
      saisie: this.sup,
      min: 1,
      max: 7,
      melange: 8,
      defaut: 8,
      nbQuestions: this.nbQuestions
    })

    const eqToLatex = function (vect : Array<number>, nomVal : Array<string>, inSys : boolean) {
      let expr = ''
      let checkPreviousNull = true
      for (let i = 0; i < 3; i++) {
        if ((vect.slice(0, 3).every(item => item === 0)) && i === 0) {
          expr = expr + '0'
        } else if (!(vect[i] === 0) && checkPreviousNull) {
          if (nomVal[i] === '') {
            expr = expr + `${texNombre(vect[i], 0)}${nomVal[i]}`
          } else {
            expr = expr + `${rienSi1(vect[i])}${nomVal[i]}`
          }
          checkPreviousNull = false
        } else if (!(vect[i] === 0) && !checkPreviousNull) {
          if (nomVal[i] === '') {
            expr = expr + `${ecritureAlgebrique(vect[i])}${nomVal[i]}`
          } else {
            expr = expr + `${ecritureAlgebriqueSauf1(vect[i])}${nomVal[i]}`
          }
          checkPreviousNull = false
        }
      }
      if (inSys === true) {
        expr = expr + ' &='
      } else {
        expr = expr + '='
      }
      checkPreviousNull = true
      for (let i = 3; i < 6; i++) {
        if ((vect.slice(3).every(item => item === 0)) && i === 3) {
          expr = expr + '0'
        } else if (!(vect[i] === 0) && checkPreviousNull) {
          if (nomVal[i] === '') {
            expr = expr + `${texNombre(vect[i], 0)}${nomVal[i]}`
          } else {
            expr = expr + `${rienSi1(vect[i])}${nomVal[i]}`
          }
          checkPreviousNull = false
        } else if (!(vect[i] === 0) && !checkPreviousNull) {
          if (nomVal[i] === '') {
            expr = expr + `${ecritureAlgebrique(vect[i])}${nomVal[i]}`
          } else {
            expr = expr + `${ecritureAlgebriqueSauf1(vect[i])}${nomVal[i]}`
          }
          checkPreviousNull = false
        }
      }
      return expr
    }
    const printSystem = function (eq1 : string, eq2 : string) {
      let expr = ''
      expr = expr + `\\begin{cases}\\begin{aligned}${eq1}\\\\${eq2}\\end{aligned}\\end{cases}`
      return expr
    }

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      this.comment = 'Dans cet exercice, des problèmes sont donnés à résoudre. Les solutions sont entières. Le premier problème se résout par la méthode de comparaison et le deuxième problème fait intervenir un membre du second degré qui s\'annule. Le système est ensuite résolu par le méthode de combinaison linéaire.'
      let texte = ''
      let texteCorr = ''
      switch (listeTypeQuestions[i]) {
        // ******************************************************Problème 1*********************************************************************************************
        case 1: {
          let divN: number[]
          let n: number
          do {
            n = randint(10, 500, premiersEntreBornes(10, 500))
            divN = listeDesDiviseurs(n)
          }
          while (divN.length < 7)
          const va = randint(2, ceil(divN.length / 2) - 1)
          const vb = randint(2, ceil(divN.length / 2) - 1, [va])
          const na = divN[va]
          const a = divN[divN.length - va]
          const nb = divN[vb]
          const b = divN[divN.length - vb]
          const tot = na * a
          const diff = na - nb
          const plusMoins = diff > 0 ? 'plus' : 'moins'
          const plusMoinsSigne = diff > 0 ? '-' : '+'
          texte = `On doit répartir des élèves dans des groupes pour une excursion. Si on met $${String(a)}$ élèves par groupe, alors on au besoin de $${String(abs(diff))}$ groupe${(diff > 1 || diff < -1) ? 's' : ''} de ${plusMoins} que si on met $${String(b)}$ élèves par groupe. Combien d'élèves y a-t-il ?`
          if (this.correctionDetaillee) {
            texteCorr = texteCorr + `On pose \\[\\begin{cases}\\begin{aligned}x&=\\text{Nombre total d'élèves}\\\\ y&=\\text{Le nombre de groupes de } ${String(a)} \\text{ élèves}\\end{aligned}\\end{cases}\\] 
            On a donc qu'il y a $y$ groupes de $${String(a)}$ élèves et $y${plusMoinsSigne + String(abs(diff))}$ groupes de $${String(b)}$ élèves. On a donc le système suivant :
             \\[${printSystem(eqToLatex([0, a, 0, 1, 0, 0], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([0, b, 0, 1, 0, 0], ['x', `(y${plusMoinsSigne + abs(diff)})`, '', 'x', 'y', ''], true))}\\] 
            On le résout par comparaison et on obtient d'abord que $y=${String(na)}$ et par suite que $x=${String(tot)}$. Donc: `
          }
          texteCorr = texteCorr + `Le nombre d'élèves est ${texteEnCouleurEtGras(`${String(tot)}`)}`
          if (this.interactif) {
            texte += '<br>' + remplisLesBlancs(this, i, '\\text{Le nombre d\'élèves est }%{champ1}')
            handleAnswers(this, i, {
              bareme: (listePoints: number[]) => [listePoints[0], 1],
              champ1: { value: tot },
              compare: numberCompare
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, a, b, tot)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
        // ******************************************************Problème 2 *********************************************************************************************
        case 2:{
          const largeur = randint(10, 30)
          const longueur = randint(largeur + 1, 45)
          const perimetre = 2 * (longueur + largeur)
          let cLongueur = randint(5, longueur - 5)
          let cLargeur = randint(5, largeur - 5)
          const choixLongueur = choice([0, 1])
          const choixLargeur = choice([0, 1])
          if (choixLongueur === 0) {
            cLongueur = -cLongueur
          }
          if (choixLargeur === 0) {
            cLargeur = -cLargeur
          }
          const sLongueur = [['-', 'diminue'], ['+', 'augmente']][choixLongueur]
          const sLargeur = [['-', 'diminue'], ['+', 'augmente']][choixLargeur]
          const diffAire = cLongueur * cLargeur + longueur * cLargeur + cLongueur * largeur
          const diffAireSigneTexte = diffAire > 0 ? 'augmente' : 'diminue'
          texte = `Le périmètre d'un terrain rectangulaire vaut $${String(perimetre)
          }\\,\\text{m}$. Si on ${sLargeur[1]} la largeur d'un terrain rectangulaire de $${String(abs(cLargeur))}\\,\\text{m}$ et on 
         ${sLongueur[1]} la longueur de $${String(abs(cLongueur))}\\,\\text{m}$, l'aire du terrain ${diffAireSigneTexte} de $${String(abs(diffAire))}\\,\\text{m}^2$. Déterminer les mesures du terrain ?`
          if (this.correctionDetaillee) {
            texteCorr = texteCorr + `On pose \\[\\begin{cases}\\begin{aligned}x&=\\text{Largeur initiale}\\\\ y&=\\text{Longeur initiale}\\end{aligned}\\end{cases}\\] 
          On a le système suivant avec la première équation obtenue par l'égalité sur l'aire et la deuxième sur le périmètre :
           \\[${printSystem(eqToLatex([1, 0, 0, 1, 0, diffAire], [`(x${sLargeur[0] + String(abs(cLargeur))})(y${sLongueur[0] + String(abs(cLongueur))})`, 'y', '', 'xy', 'y', ''], true), eqToLatex([2, 2, 0, 0, 0, perimetre], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
          On le résout le système et on obtient d'abord que $x=${largeur}\\,\\text{m}$ , puis que $y=${longueur}\\,\\text{m}$.`
          }
          texteCorr = texteCorr + `<br>La largeur du terrain vaut $${miseEnEvidence(`${largeur}\\,\\text{m}`)}$ et sa longueur $${miseEnEvidence(`${longueur}\\,\\text{m}`)}$.`
          if (this.interactif) {
            texte += '<br>' + remplisLesBlancs(this, i, '\\text{La largeur vaut }%{champ1}\\,\\text{m} \\text{ et la longeur vaut }%{champ2}\\,\\text{m}')
            handleAnswers(this, i, {
              bareme: (listePoints : number[]) => [listePoints[0] + listePoints[1], 2],
              champ1: { value: largeur },
              champ2: {
                value: longueur,
                compare: numberCompare
              }
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, largeur, longueur, cLargeur, cLongueur)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
        // ****************************************************** Problème 3 *********************************************************************************************
        case 3: {
          const p3NbElementsType1 = randint(10, 30)
          const p3NbElementsType2 = randint(10, 30)
          const p3NbElementsTotal = p3NbElementsType1 + p3NbElementsType2
          const p3NbProprieteType1 = randint(2, 5)
          const p3NbProprieteType2 = randint(p3NbProprieteType1 + 1, 10)
          const p3NbProprietesTotal = p3NbProprieteType1 * p3NbElementsType1 + p3NbProprieteType2 * p3NbElementsType2

          const p3Themes = [
            { lieu: 'Dans un drôle de zoo', objet: 'animaux', 'objet et preposition': "d'animaux", 'certains ou certaines': 'certains', propriete: 'pattes' },
            { lieu: 'Dans un musée', objet: 'brochures', 'certains ou certaines': 'certaines', 'objet et preposition': 'de brochures', propriete: 'pages' },
            { lieu: 'Chez un fleuriste', objet: 'fleurs', 'certains ou certaines': 'certaines', 'objet et preposition': 'de fleurs', propriete: 'pétales' },
            { lieu: 'Dans un port', objet: 'bateaux', 'certains ou certaines': 'certains', 'objet et preposition': 'de bateaux', propriete: 'voiles' }
          ]
          const p3Theme = p3Themes[Math.floor(Math.random() * p3Themes.length)]

          texte = ''
          texteCorr = ''
          texte = `${p3Theme.lieu}, on trouve des ${p3Theme.objet} de deux types: ${p3Theme['certains ou certaines']} ${p3Theme.objet} ont $${String(p3NbProprieteType1)}$ ${p3Theme.propriete}, et d'autres ont $${String(p3NbProprieteType2)}$ ${p3Theme.propriete}.
          Sachant qu'on compte au total $${String(p3NbElementsTotal)}$ ${p3Theme.objet} et $${String(p3NbProprietesTotal)}$ ${p3Theme.propriete}, déterminer le nombre ${p3Theme['objet et preposition']} de chaque type.`

          if (this.correctionDetaillee) {
            texteCorr = texteCorr + `On pose \\[\\begin{cases}\\begin{aligned}x&=\\text{nombre ${p3Theme['objet et preposition']} à } ${String(p3NbProprieteType1)} \\text{ ${p3Theme.propriete} }\\\\ y&=\\text{nombre de ${p3Theme['objet et preposition']} à } ${String(p3NbProprieteType2)} \\text{ ${p3Theme.propriete} }\\end{aligned}\\end{cases}\\] 
            Puisqu'il y a au total $${String(p3NbElementsTotal)}$ ${p3Theme.objet}, on a \\[x+y=${p3NbElementsTotal}\\] Par ailleurs, si on compte les ${p3Theme.propriete}, il y a $x$ ${p3Theme.objet} qui en ont $${String(p3NbProprieteType1)}$ et $y$ ${p3Theme.objet} qui en ont $${String(p3NbProprieteType2)}$ pour un total de $${String(p3NbProprietesTotal)}$ ${p3Theme.propriete}, 
            autrement dit : \\[${rienSi1(p3NbProprieteType1)}x + ${rienSi1(p3NbProprieteType2)}y  =${p3NbProprietesTotal}\\] 
            On a donc le système suivant : \\[${printSystem(eqToLatex([1, 1, 0, 0, 0, p3NbElementsTotal], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p3NbProprieteType1, p3NbProprieteType2, 0, 0, 0, p3NbProprietesTotal], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
            On le résout par substitution.<br> On obtient d'abord, de la première ligne, que $y=${p3NbElementsTotal}-x$. 
            <br>Puis, par substitution dans la deuxième ligne: $${rienSi1(p3NbProprieteType1)} x + ${rienSi1(p3NbProprieteType2)} (${String(p3NbElementsTotal)}-x) = ${String(p3NbProprietesTotal)}$<br>Ce qui donne: $${rienSi1(p3NbProprieteType1)} x + ${String(p3NbProprieteType2 * p3NbElementsTotal)}- ${rienSi1(p3NbProprieteType2)} x = ${String(p3NbProprietesTotal)}$ <br> 
            Puis : $ ${rienSi1(p3NbProprieteType1 - p3NbProprieteType2)}x=${p3NbProprietesTotal}-${p3NbProprieteType2 * p3NbElementsTotal} \\implies ${rienSi1(p3NbProprieteType1 - p3NbProprieteType2)}x=${p3NbProprietesTotal - p3NbProprieteType2 * p3NbElementsTotal} $
            <br> Et donc : $x=(${String(p3NbProprietesTotal - p3NbProprieteType2 * p3NbElementsTotal)}) \\div (${String(p3NbProprieteType1 - p3NbProprieteType2)})=$ $${String(p3NbElementsType1)}$ ${p3Theme.objet} à  $${String(p3NbProprieteType1)}$  ${p3Theme.propriete}. 
            <br> Pour trouver $y$, on peut reprendre ce qui nous a servi pour la substitution: $ y=${String(p3NbElementsTotal)}-x=${String(p3NbElementsTotal)}-${String(p3NbElementsType1)}=$ $${String(p3NbElementsType2)}$ ${p3Theme.objet} à  $${String(p3NbProprieteType2)}$  ${p3Theme.propriete}.
            <br>Finalement: `
          }
          texteCorr = texteCorr + `$${miseEnEvidence(`\\text{Il y a } ${String(p3NbElementsType1)} \\text{ ${p3Theme.objet} à } ${String(p3NbProprieteType1)} \\text{ ${p3Theme.propriete}} \\text{ et } ${String(p3NbElementsType2)} \\text{ ${p3Theme.objet} à }${String(p3NbProprieteType2)} \\text{ ${p3Theme.propriete}}`)}$.`
          if (this.interactif) {
            texte += `<br>Le nombre ${p3Theme['objet et preposition']} à $${String(p3NbProprieteType1)}$ ${p3Theme.propriete} est` + remplisLesBlancs(this, i, `%{champ1} \\text{ et le nombre ${p3Theme['objet et preposition']} à } ${String(p3NbProprieteType2)} \\text{ ${p3Theme.propriete} est } %{champ2}`)
            handleAnswers(this, i, {
              bareme: (listePoints : number[]) => [listePoints[0] + listePoints[1], 2],
              champ1: { value: p3NbElementsType1 },
              champ2: { value: p3NbElementsType2 },
              compare: numberCompare
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, p3NbProprieteType1, p3NbProprieteType2, p3NbElementsTotal, p3NbProprietesTotal)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
        // ****************************************************** Problème 4 *********************************************************************************************
        case 4:{
          const p4Unites = ['€'] // ajouter les "$" pas évident
          const p4Unite = p4Unites[Math.floor(Math.random() * p4Unites.length)]
          // Farine
          const p4FarinePrixAvant = 0.5 * randint(7, 14) // le prix au kg
          const p4FarineTypeVariation = 1 // pour l'instant que des augmentations Math.random() < 0.5 ? -1 : 1; // -1 ou +1
          const p4FarineTexteVariation = p4FarineTypeVariation < 0 ? 'diminué' : 'augmenté'
          const p4FarinePourcentageVariation = randint(1, 5) * 10
          const p4FarineTauxVariation = 1 + p4FarineTypeVariation * p4FarinePourcentageVariation / 100
          const p4FarinePrixApres = p4FarinePrixAvant * p4FarineTauxVariation
          const p4FarineQuantite = randint(5, 10)
          // Cassonade
          const p4CassonadePrixAvant = randint(5, 11) / 2
          const p4CassonadeTypeVariation = Math.random() < 0.5 ? -1 : 1 // -1 ou +1
          const p4CassonadeTexteVariation = p4CassonadeTypeVariation < 0 ? 'diminué' : 'augmenté'
          const p4CassonadePourcentageVariation = randint(0, 4) * 10 + 5// les pourcentages doivent être différents pour qu'il y ait une solution unique, et on reste sur des pourcentages simples du coup, l'un un est un multiple de 10, l'aute de 5.
          const p4CassonadeTauxVariation = 1 + p4CassonadeTypeVariation * p4CassonadePourcentageVariation / 100
          const p4CassonadePrixApres = p4CassonadePrixAvant * p4CassonadeTauxVariation
          const p4CassonadeQuantite = randint(2, p4FarineQuantite - 1)
          // Total
          const p4TotalAvant = p4FarineQuantite * p4FarinePrixAvant + p4CassonadeQuantite * p4CassonadePrixAvant
          const p4TotalApres = (p4FarineQuantite * p4FarinePrixApres + p4CassonadeQuantite * p4CassonadePrixApres)

          texte = `Pour préparer des muffins, Aline a besoin de $${String(p4FarineQuantite)}$ kilogrammes de farine et $${String(p4CassonadeQuantite)}$ kilogrammes de cassonade. 
          L'année dernière, elle dépensait au total $${String(p4TotalAvant)}$ ${p4Unite} pour la farine et la cassonade.
          En une année, le prix de la farine a ${p4FarineTexteVariation} de $${String(p4FarinePourcentageVariation)} \\%\\,,$ et le prix de la cassonade a ${p4CassonadeTexteVariation} de $${String(p4CassonadePourcentageVariation)}\\%\\,.$ 
          Elle doit maintenant payer $ ${texNombre(p4TotalApres, 2)} $ ${p4Unite} pour se procurer les mêmes ingrédients.
          Combien coûtaît un kilogramme de farine et un kilogramme de cassonade l'année dernière ?`
          if (this.correctionDetaillee) {
            texteCorr = texteCorr + `On pose \\[\\begin{cases}\\begin{aligned}x&=\\text{prix d'un kg de farine l'année dernière}\\\\ y&=\\text{prix d'un kg de cassonade l'année dernière}\\end{aligned}\\end{cases}\\] 
          Il y a un an, on payait $${String(p4TotalAvant)}$ pour $${String(p4FarineQuantite)}$ kg de farine + $${String(p4CassonadeQuantite)}$ kg de cassonade donc: $${rienSi1(p4FarineQuantite)}x + ${rienSi1(p4CassonadeQuantite)}y  =${p4TotalAvant}$
          <br>Le prix de la farine a ${p4FarineTexteVariation} de $${String(p4FarinePourcentageVariation)} \\% $, il est donc aujourd'hui de : $x \\times (1+\\dfrac{${p4FarinePourcentageVariation}}{100})=${p4FarineTauxVariation.toFixed(2)}x$ 
          <br>De même, le prix de la cassonade a ${p4CassonadeTexteVariation} de $${String(p4CassonadePourcentageVariation)} \\%$, il est donc de : $y \\times (1+\\dfrac{${p4CassonadePourcentageVariation}}{100})=${p4CassonadeTauxVariation.toFixed(2)}y$ 
          <br>Le coût cette année est donc de : $ ${p4FarineQuantite} \\times ${rienSi1(p4FarineTauxVariation)} x + ${p4CassonadeQuantite} \\times ${rienSi1(p4CassonadeTauxVariation)} y  =${Number(p4TotalApres).toLocaleString('FR-fr', { maximumFractionDigits: 1 })} $
          <br>Finalement, on doit résoudre le système d'équations: 
           \\[${printSystem(eqToLatex([p4FarineQuantite, p4CassonadeQuantite, 0, 0, 0, p4TotalAvant], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p4FarineQuantite * p4FarineTauxVariation, p4CassonadeQuantite * p4CassonadeTauxVariation, 0, 0, 0, p4TotalApres], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
          Multiplions la première ligne par $${String(p4FarineTauxVariation)}$, on obtient:
           \\[${printSystem(eqToLatex([p4FarineQuantite * p4FarineTauxVariation, p4CassonadeQuantite * p4FarineTauxVariation, 0, 0, 0, p4TotalAvant * p4FarineTauxVariation], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p4FarineQuantite * p4FarineTauxVariation, p4CassonadeQuantite * p4CassonadeTauxVariation, 0, 0, 0, p4TotalApres], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
          Maintenant, si on fait ligne 1 - ligne 2, les $x$ s'éliminent et il reste: $(${texNombre(p4CassonadeQuantite * p4FarineTauxVariation, 2)}-${texNombre(p4CassonadeQuantite * p4CassonadeTauxVariation, 2)})y=${texNombre(p4TotalAvant * p4FarineTauxVariation - p4TotalApres, 2)}.$
          <br> Et donc: $y=\\dfrac{${texNombre(p4TotalAvant * p4FarineTauxVariation - p4TotalApres, 2)}}{${texNombre(p4CassonadeQuantite * p4FarineTauxVariation, 2)}-${texNombre(p4CassonadeQuantite * p4CassonadeTauxVariation, 2)}} = ${p4CassonadePrixAvant}$
          <br>
          Multiplions maintenant la première ligne par $${String(p4CassonadeTauxVariation)}$, on obtient:
          \\[${printSystem(eqToLatex([p4FarineQuantite * p4CassonadeTauxVariation, p4CassonadeQuantite * p4CassonadeTauxVariation, 0, 0, 0, p4TotalAvant * p4CassonadeTauxVariation], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p4FarineQuantite * p4FarineTauxVariation, p4CassonadeQuantite * p4CassonadeTauxVariation, 0, 0, 0, p4TotalApres], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
          En faisant ligne 1 - ligne 2, les $y$ s'éliminent et il reste: $ (${p4FarineQuantite * p4CassonadeTauxVariation}-${p4FarineQuantite * p4FarineTauxVariation})x= ${texNombre(p4TotalAvant * p4CassonadeTauxVariation - p4TotalApres, 2)} $
          <br> Et donc: $ x=\\dfrac{${texNombre(p4TotalAvant * p4CassonadeTauxVariation - p4TotalApres, 2)}}{${p4FarineQuantite * p4CassonadeTauxVariation}-${p4FarineQuantite * p4FarineTauxVariation}}=${p4FarinePrixAvant} $
          <br>Finalement: `
          }
          texteCorr = texteCorr + `$${miseEnEvidence(`\\text{l'année dernière, 1kg de farine coûtait } ${texNombre(p4FarinePrixAvant, 2)} \\text{ ${p4Unite} et 1k de cassonade coûtait } ${texNombre(p4CassonadePrixAvant, 2)} \\text{ ${p4Unite}}`)}$.`
          if (this.interactif) {
            texte += '<br>' + remplisLesBlancs(this, i, '\\text{L\'année dernière, 1kg de farine coûtait } %{champ1} \\text{' + p4Unite + ' et 1kg de cassonade coûtait } %{champ2} \\text{' + p4Unite + ' }')
            const d1 = new Decimal(p4FarinePrixAvant)
            handleAnswers(this, i, {
              bareme: (listePoints : number[]) => [listePoints[0] + listePoints[1], 2],
              champ1: { value: d1 },
              champ2: { value: new Decimal(p4CassonadePrixAvant) },
              compare: numberCompare
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, p4TotalAvant, p4TotalApres, p4FarinePourcentageVariation, p4CassonadePourcentageVariation)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
        // ****************************************************** Problème 5 *********************************************************************************************
        case 5: {
          const p5Quantite11 = randint(10, 20)
          const p5Quantite12 = randint(10, 20)
          const p5Quantite21 = p5Quantite11 + (Math.random() < 0.5 ? -1 : 1) * randint(2, 8)// diffère d'au moins 2 avec la premiere quantité
          const p5Quantite22 = p5Quantite12 + (Math.random() < 0.5 ? -1 : 1) * randint(2, 8)
          const p5Quantite31 = p5Quantite11 + (Math.random() < 0.5 ? -1 : 1) * randint(2, Math.abs(p5Quantite21 - p5Quantite11) - 1)// doit être différent des deux premieres quantites
          const p5Quantite32 = p5Quantite12 + (Math.random() < 0.5 ? -1 : 1) * randint(2, Math.abs(p5Quantite22 - p5Quantite21) - 1)
          const p5Prix1 = randint(2, 20)
          const p5Prix2 = randint(p5Prix1 + 2, 40)
          // calculées
          const p5Total1 = p5Prix1 * p5Quantite11 + p5Prix2 * p5Quantite12
          const p5Total2 = p5Prix1 * p5Quantite21 + p5Prix2 * p5Quantite22
          const p5Total3 = p5Prix1 * p5Quantite31 + p5Prix2 * p5Quantite32
          const p5ppcmQ1 = ppcm(p5Quantite11, p5Quantite21)
          const p5ppcmQ2 = ppcm(p5Quantite12, p5Quantite22)

          const p5Themes = [
            { contexte: 'Au marché', objet1: 'banane', objet2: 'mangue', premierMoment: 'Le lundi', deuxiemeMoment: 'Le mardi', troisiemeMoment: 'Le mercredi', verbeAction: 'achète', verbePropriete: 'coûtent', verbeQuestionInfinif: 'coûter', nomPropriete: 'prix', unite: 'doublons' },
            { contexte: 'Pour des entraînements de hockey', objet1: 'rondelle', objet2: 'cône', premierMoment: 'Le lundi', deuxiemeMoment: 'Le mardi', troisiemeMoment: 'Le mercredi', verbeAction: 'transporte', verbePropriete: 'pèsent', verbeQuestionInfinif: 'peser', nomPropriete: 'poids', unite: 'kg' },
            { contexte: 'Dans sa chambre', objet1: 'livre', objet2: 'cahier', premierMoment: 'Le lundi', deuxiemeMoment: 'Le mardi', troisiemeMoment: 'Le mercredi', verbeAction: 'empile', verbePropriete: 'atteignent en hauteur', verbeQuestionInfinif: 'atteindre en hauteur', nomPropriete: 'hauteur', unite: 'm' }
          ]
          const p5Theme = p5Themes[Math.floor(Math.random() * p5Themes.length)]

          texte =
          `${p5Theme.contexte}, Bob ${p5Theme.verbeAction}  des ${p5Theme.objet1}s et des ${p5Theme.objet2}s.
          <br>${p5Theme.premierMoment}, il ${p5Theme.verbeAction} $${String(p5Quantite11)}$ ${p5Theme.objet1}s et $${String(p5Quantite12)}$ ${p5Theme.objet2}s qui ${p5Theme.verbePropriete} au total $${String(p5Total1)}\\,\\text{${p5Theme.unite}}$.
          <br>${p5Theme.deuxiemeMoment}, il ${p5Theme.verbeAction} $${String(p5Quantite21)}$ ${p5Theme.objet1}s et $${String(p5Quantite22)}$ ${p5Theme.objet2}s qui ${p5Theme.verbePropriete} au total $${String(p5Total2)}\\,\\text{${p5Theme.unite}}$.
          <br>${p5Theme.troisiemeMoment}, il ${p5Theme.verbeAction} $${String(p5Quantite31)}$ ${p5Theme.objet1}s et $${String(p5Quantite32)}$ ${p5Theme.objet2}s. 
          <br>Combien cela va-t-il ${p5Theme.verbeQuestionInfinif} ?`

          if (this.correctionDetaillee) {
            texteCorr += `Posons \\[\\begin{cases}\\begin{aligned}x&=\\text{${p5Theme.nomPropriete} d'un ${p5Theme.objet1}}\\\\ y&=\\text{${p5Theme.nomPropriete} d'un ${p5Theme.objet2}}\\end{aligned}\\end{cases}\\] 
            ${p5Theme.premierMoment}, Bob ${p5Theme.verbeAction} $${String(p5Quantite11)}$ ${p5Theme.objet1}s et $${String(p5Quantite12)}$ ${p5Theme.objet2}s qui ${p5Theme.verbePropriete} au total $${String(p5Total1)}\\,\\text{${p5Theme.unite}}$: $${rienSi1(p5Quantite11)}x + ${rienSi1(p5Quantite12)}y  =${p5Total1}\\,\\text{${p5Theme.unite}}$.
            <br>${p5Theme.deuxiemeMoment} Bob ${p5Theme.verbeAction} $${String(p5Quantite21)}$ ${p5Theme.objet1}s et $${String(p5Quantite22)}$ ${p5Theme.objet2}s qui ${p5Theme.verbePropriete} au total $${String(p5Total2)}\\,\\text{${p5Theme.unite}}$: $${rienSi1(p5Quantite21)}x + ${rienSi1(p5Quantite22)}y  =${p5Total2}\\,\\text{${p5Theme.unite}}$.
            <br>Finalement, on doit résoudre le système d'équations: 
            \\[${printSystem(eqToLatex([p5Quantite11, p5Quantite12, 0, 0, 0, p5Total1], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p5Quantite21, p5Quantite22, 0, 0, 0, p5Total2], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
            Multiplions la première ligne par $${String(p5ppcmQ1 / p5Quantite11)}$, et la seconde ligne par $${String(p5ppcmQ1 / p5Quantite21)}$, on obtient:
             \\[${printSystem(eqToLatex([p5ppcmQ1, p5ppcmQ1 / p5Quantite11 * p5Quantite12, 0, 0, 0, p5ppcmQ1 / p5Quantite11 * p5Total1], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p5ppcmQ1, p5ppcmQ1 / p5Quantite21 * p5Quantite22, 0, 0, 0, p5ppcmQ1 / p5Quantite21 * p5Total2], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
            En faisant ligne 1 - ligne 2, les $x$ s'éliminent et il reste: $(${p5ppcmQ1 / p5Quantite11 * p5Quantite12 - p5ppcmQ1 / p5Quantite21 * p5Quantite22})y=${p5ppcmQ1 / p5Quantite11 * p5Total1 - p5ppcmQ1 / p5Quantite21 * p5Total2}$
            <br> Et donc: $y=\\dfrac{${p5ppcmQ1 / p5Quantite11 * p5Total1 - p5ppcmQ1 / p5Quantite21 * p5Total2}}{${p5ppcmQ1 / p5Quantite11 * p5Quantite12 - p5ppcmQ1 / p5Quantite21 * p5Quantite22}} = ${p5Prix2}$
            <br>Multiplions maintenant la première ligne par $${String(p5ppcmQ2 / p5Quantite12)}$, et la seconde ligne par $${String(p5ppcmQ2 / p5Quantite22)}$, on obtient:
             \\[${printSystem(eqToLatex([p5ppcmQ2 / p5Quantite12 * p5Quantite11, p5ppcmQ2, 0, 0, 0, p5ppcmQ2 / p5Quantite12 * p5Total1], ['x', 'y', '', 'x', 'y', ''], true), eqToLatex([p5ppcmQ2 / p5Quantite22 * p5Quantite21, p5ppcmQ2, 0, 0, 0, p5ppcmQ2 / p5Quantite22 * p5Total2], ['x', 'y', '', 'x', 'y', ''], true))}\\] 
             En faisant ligne 1 - ligne 2, les $y$ s'éliminent et il reste: $(${p5ppcmQ2 / p5Quantite12 * p5Quantite11 - p5ppcmQ2 / p5Quantite22 * p5Quantite21})x=${p5ppcmQ2 / p5Quantite12 * p5Total1 - p5ppcmQ2 / p5Quantite22 * p5Total2}$
            <br> Et donc: $x= ${p5Prix1}$
            <br>${p5Theme.troisiemeMoment}, $${String(p5Quantite31)}$ ${p5Theme.objet1}s et $${String(p5Quantite32)}$ ${p5Theme.objet2}s vont donc ${p5Theme.verbeQuestionInfinif} : $${p5Quantite31}\\times${p5Prix1}+${p5Quantite32}\\times${p5Prix2}=${p5Total3}$. 
            <br>Finalement: `
          }

          texteCorr = texteCorr + `$ ${miseEnEvidence('\\text{cela va ' + p5Theme.verbeQuestionInfinif + ' } ' + p5Total3 + '\\, \\text{ ' + p5Theme.unite + ' }')} $`

          if (this.interactif) {
            texte += '<br>' + remplisLesBlancs(this, i, '\\text{Cela va ' + p5Theme.verbeQuestionInfinif + ' : }%{champ1} \\,\\text{ ' + p5Theme.unite + '}')
            handleAnswers(this, i, {
              bareme: (listePoints: number[]) => [listePoints[0], 1],
              champ1: { value: p5Total3 },
              compare: numberCompare
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, p5Quantite11, p5Quantite12, p5Quantite21, p5Quantite22)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
        // ****************************************************** Problème 6 *********************************************************************************************
        case 6: {
          const p6AgeAlice = randint(8, 20)
          const p6RatioAvant = randint(2, 4)
          const p6AnneesAvant = randint(2, 7)
          const p6AnneesApres = randint(5, 20)
          // calculés
          const p6AgeBob = (p6AgeAlice - p6AnneesAvant) * p6RatioAvant + p6AnneesAvant
          const p6TotalApres = p6AgeAlice + p6AgeBob + 2 * p6AnneesApres

          texte =
          `Il y a $${String(p6AnneesAvant)}$ ans, Bob avait $${String(p6RatioAvant)}$ fois l'âge d'Alice. Dans $${String(p6AnneesApres)}$ ans, la somme de leurs âges sera $${String(p6TotalApres)}$ ans. Déterminer les âges d'Alice et de Bob aujourd'hui.`
          if (this.correctionDetaillee) {
            texteCorr += `Posons \\[\\begin{cases}\\begin{aligned}x&=\\text{âge d'Alice aujourd'hui}\\\\ y&=\\text{âge de Bob aujourd'hui}\\end{aligned}\\end{cases}\\] 
          Il y a $${String(p6AnneesAvant)}$ ans, Alice avait $(x-${p6AnneesAvant})$ ans et Bob avait $(y-${p6AnneesAvant})$ ans. Par ailleurs Bob avait $${String(p6RatioAvant)}$ fois l'âge d'Alice. 
          <br>Donc : $(y-${p6AnneesAvant})=${p6RatioAvant}\\times(x-${p6AnneesAvant})$
          <br>Dans $${String(p6AnneesApres)}$ ans, Alice aura $(x+${p6AnneesApres})$ ans et Bob aura $(y+${p6AnneesApres})$ ans. La somme de leurs âges sera $${String(p6TotalApres)}$. 
          <br>Donc: $(y+${p6AnneesApres})+(x-${p6AnneesApres})=${p6TotalApres}$
          <br>Finalement, on doit résoudre le système d'équations: 
          \\[\\begin{cases}\\left( y-${p6AnneesAvant}\\right) =${p6RatioAvant}\\left( x-${p6AnneesAvant}\\right) \\\\ \\left( x+${p6AnneesApres}\\right) +\\left( y+${p6AnneesApres}\\right) =${p6TotalApres}\\end{cases}\\] 
          En développant et en reordonnant:
          \\[\\begin{cases}y =${rienSi1(p6RatioAvant)} x-${p6AnneesAvant * p6RatioAvant - p6AnneesAvant} (*) \\\\ y=${p6TotalApres}-x-${2 * p6AnneesApres}\\end{cases}\\] 
          Par comparaison, on obtient  $${rienSi1(p6RatioAvant)} x-${p6AnneesAvant * p6RatioAvant + p6AnneesAvant}=${p6TotalApres}-x-${2 * p6AnneesApres}$ 
          <br>Puis: $${rienSi1(p6RatioAvant + 1)} x=${p6TotalApres - 2 * p6AnneesApres + (p6RatioAvant - 1) * p6AnneesAvant}$ et donc: $x=${p6AgeAlice}$
          <br>Pour $y$ reprenons la ligne $(*)$ système: $y =${rienSi1(p6RatioAvant)} x-${p6AnneesAvant * p6RatioAvant - p6AnneesAvant} = ${rienSi1(p6RatioAvant)} \\times ${p6AgeAlice} -${p6AnneesAvant * p6RatioAvant - p6AnneesAvant}=${p6AgeBob}$
          <br>Finalement: `
          }
          texteCorr += `$ ${miseEnEvidence("\\text{Aujourd'hui, Alice a } " + p6AgeAlice + ' \\text{ ans et Bob a } ' + p6AgeBob + ' \\text{ ans }')} $`
          if (this.interactif) {
            texte += '<br>' + remplisLesBlancs(this, i, '\\text{Aujourd\'hui, Alice a }%{champ1}\\,\\text{ ans} \\text{ et Bob a }%{champ2}\\,\\text{ ans}')
            handleAnswers(this, i, {
              bareme: (listePoints : number[]) => [listePoints[0] + listePoints[1], 2],
              champ1: { value: p6AgeAlice },
              champ2: { value: p6AgeBob },
              compare: numberCompare
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, p6AgeAlice, p6AgeBob, p6RatioAvant, p6AnneesAvant, p6AnneesApres, p6TotalApres)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
        // ****************************************************** Problème 7 *********************************************************************************************
        case 7:{
          const p7vitesseTrain1 = randint(7, 20) * 10
          const p7vitesseTrain2 = p7vitesseTrain1 + randint(2, 10) * 10
          const p7TempsCroisement = randint(2, 5)
          const p7HeureDepart = randint(7, 12)
          // calculés
          const p7DistanceCroisement = p7vitesseTrain1 * p7TempsCroisement
          const p7DistanceTotale = p7DistanceCroisement + p7vitesseTrain2 * p7TempsCroisement
          const p7HeureCroisement = p7TempsCroisement + p7HeureDepart

          texte =
          `Un train part de la ville A à $${String(p7HeureDepart)}$h et roule à la vitesse de $${String(p7vitesseTrain1)}$ km/h vers la ville B.
           A la même heure, un train part de B et roule vers A à $${String(p7vitesseTrain2)}$ km/h. Déterminer l'heure à laquelle les deux trains se croiseront sachant que les deux villes sont éloignées de $${String(p7DistanceTotale)}\\,\\text{km}$.`
          if (this.correctionDetaillee) {
            texteCorr += `Posons \\[\\begin{cases}\\begin{aligned}t&=\\text{temps entre le départ et le croisement, en heures}\\\\ d&=\\text{la distance entre A et l'endroit du croisement}\\end{aligned}\\end{cases}\\]
          On se rappelle que, d'une manière générale, la vitesse ($v$), la distance ($d$) et le temps ($t$) sont reliés par: $v=\\dfrac{d}{t}$
          <br>Le premier train parcourt $d\\,\\text{km}$ en $t$ heures à une vitesse de $${String(p7vitesseTrain1)}$ km/h
          Donc : $${p7vitesseTrain1}=\\dfrac{d}{t}$ ce qui donne: $${p7vitesseTrain1} \\times t = d$
          <br>Le deuxième train parcourt $(${p7DistanceTotale}-d)\\,\\text{km}$ en $t$ heures à une vitesse de $${String(p7vitesseTrain2)}\\,\\text{km/h}$.
          Donc : $${p7vitesseTrain2}=\\dfrac{(${p7DistanceTotale}-d)}{t}$ ce qui donne: $${p7vitesseTrain2} \\times t = ${p7DistanceTotale}-d$
          <br>Finalement, on doit résoudre le système d'équations: 
          \\[\\begin{cases}${p7vitesseTrain1} \\times t = d \\\\ ${p7vitesseTrain2} \\times t = ${p7DistanceTotale}-d\\end{cases}\\] 
          Ligne 1: $d=${p7vitesseTrain1} \\times t$
          <br>On substituant $d$ par $${p7vitesseTrain1} \\times t$ dans la deuxième ligne :   $${p7vitesseTrain2} \\times t = ${p7DistanceTotale}-${p7vitesseTrain1} \\times t$
          <br>$${p7vitesseTrain2 + p7vitesseTrain1} \\times t = ${p7DistanceTotale} $ et donc $ t=\\dfrac{${p7DistanceTotale}}{${p7vitesseTrain2 + p7vitesseTrain1}}=${p7TempsCroisement}$
          <br>Donc: Les deux trains se croisent $${String(p7TempsCroisement)}$ heures après le départ
          <br>Donc: `
          }
          texteCorr += `$ ${miseEnEvidence('\\text{Les deux trains se croisent à } ' + p7HeureCroisement + ' \\text{h}')} $`
          if (this.interactif) {
            texte += '<br>' + remplisLesBlancs(this, i, '\\text{Les deux trains se croisent à }%{champ1}h')
            handleAnswers(this, i, {
              bareme: (listePoints: number[]) => [listePoints[0], 1],
              champ1: { value: p7HeureCroisement },
              compare: numberCompare
            },
            { formatInteractif: 'fillInTheBlank' }
            )
          }
          if (this.questionJamaisPosee(i, p7TempsCroisement, p7vitesseTrain1, p7vitesseTrain2)) {
            this.listeQuestions.push(texte)
            this.listeCorrections.push(texteCorr)
            i++
          }
          break }
      }
      cpt++
      listeQuestionsToContenu(this)
    }
  }
}

import Exercice from '../Exercice'
import { gestionnaireFormulaireTexte, listeQuestionsToContenu, randint } from '../../modules/outils'
import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'
import { lettreDepuisChiffre } from '../../lib/outils/outilString'

export const titre = 'Calculer une expression avec des parenthèses'

export const dateDePublication = '30/06/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = '5e37d'
export const refs = {
  'fr-fr': ['6C33-3'],
  'fr-ch': []
}
/**
 *
 * @author
*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = 'Calculer en détaillant les étapes de calculs.'
    this.nbQuestions = 6 // nombre de questions
    this.besoinFormulaireTexte = ['Types d\'expression', 'Nombres séparés par des tirets\n1 : Deux Parenthèses séparées\n2 : Deux parenthèses imbriquées\n3: Une seule parenthèse']
    this.sup = '1-2-3'
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['deuxParenthesesseparees', 'deuxParenthesesimbriquees', 'UneParenthese']
    const listeTypeQuestions = gestionnaireFormulaireTexte({ saisie: this.sup, min: 1, max: 3, melange: 4, defaut: 4, listeOfCase: typeQuestionsDisponibles, nbQuestions: this.nbQuestions })

    // const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    const avecDivision = false // pas de division pour le moment

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const lettre = lettreDepuisChiffre(i + 1)
      let texte = '' // texte de la question
      let texteCorr = ''
      let txtArbre :string = ''
      let tree :BinaryTree | undefined
      const op1 = unOperateur(avecDivision)
      // eviter 1+((2+3)+4)
      // const op2 =  unOperateur(avecDivision)
      const op2 = ((op1 !== '+') && (op1 !== '*')) ? unOperateur(avecDivision, [op1]) : unOperateur(avecDivision)
      const op3 = unOperateur(avecDivision)

      switch (listeTypeQuestions[i]) {
        case 'deuxParenthesesseparees':
          tree = new BinaryTree(
            new TreeNode(op1,
              new TreeNode(op2,
                new TreeNode(randint(1, 10)),
                new TreeNode(randint(1, 10))
              ),
              new TreeNode(op3,
                new TreeNode(randint(1, 10)),
                new TreeNode(randint(1, 10))
              )
            )
          )
          break
        case 'deuxParenthesesimbriquees':
          tree = new BinaryTree(
            new TreeNode(op1,
              new TreeNode(randint(1, 10)),
              new TreeNode(op2,
                new TreeNode(randint(1, 10)),
                new TreeNode(op3,
                  new TreeNode(randint(1, 10)),
                  new TreeNode(randint(1, 10))
                )
              )
            )
          )
          braceLArbre(tree.root)
          break
        case 'UneParenthese':
        default:
          tree = new BinaryTree(
            new TreeNode(op1,
              new TreeNode(op2,
                new TreeNode(randint(1, 10)),
                new TreeNode(randint(1, 10))
              ),
              new TreeNode(randint(1, 10))
            )
          )
          braceLArbre(tree.root)
          break
      }
      if (tree !== undefined) {
        verifiePositif(tree.root)
        texte += `$${lettre} = ${ecritExpression(tree.root)}$`
        texteCorr += texte + '<br>'
        if (tree.root !== null) {
          txtArbre = ''
          do {
            effectueUneEtape(tree.root)
            txtArbre += `$${lettre} = ${ecritExpression(tree.root)}$<br>`
          } while ((typeof tree.root.value !== 'number'))
          texteCorr += `${txtArbre}<br>`
        }
        tree = undefined
      }
      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

type oper = '+' | '-' | '*' | '/'
class TreeNode {
  constructor (
    public value: number | oper,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}
class BinaryTree implements Iterable<number | oper> {
  constructor (public root: TreeNode | null) {} // private root: TreeNode | null) {}

  * [Symbol.iterator] (): Iterator<number | oper> {
    function * inOrderTraversal (node: TreeNode | null): Generator<number | oper> {
      if (node) {
        if (node.left) yield * inOrderTraversal(node.left)
        yield node.value
        if (node.right) yield * inOrderTraversal(node.right)
      }
    }

    yield * inOrderTraversal(this.root)
  }
}

function ecritExpression (node: TreeNode | null, cote: string = 'Centre', result:string = '', niveau:number = 0): void | string {
  if (node === null) { return '' }
  let rslt = ''

  if ((cote !== 'Centre') && (typeof node.value !== 'number')) {
    rslt += '('
  }
  rslt += ecritExpression(node.left, 'Gauche', rslt, niveau)
  if (node.value === '*') { rslt += ' \\times' } else { rslt += `${node.value}` }
  rslt += ecritExpression(node.right, 'Droite', rslt, niveau)
  if ((cote !== 'Centre') && (typeof node.value !== 'number')) {
    rslt += ')'
  }
  return rslt
}

function evalueArbre (node: TreeNode | null, unPas:boolean = true, stop:boolean = false): number {
  if (node === null) { return 0 }
  let rslt = 0
  const rsltGauche = evalueArbre(node.left, unPas, stop)
  const rsltDroite = evalueArbre(node.right, unPas, stop)
  if ((typeof node.value !== 'number')) {
    switch (node.value) {
      case '+':
        rslt = rsltGauche + rsltDroite
        break
      case '-':
        rslt = rsltGauche - rsltDroite
        break
      case '*':
        rslt = rsltGauche * rsltDroite
        break
      case '/':
        rslt = rsltDroite !== 0 ? rsltGauche / rsltDroite : 0
        break
      default:
        rslt = 0
    }
  } else {
    if (typeof node.value === 'number') { rslt = node.value }

    return rslt
  }
  return rslt
}

function effectueUneEtape (node: TreeNode | null): boolean {
  if (node === null) { return false }
  let rslt = 0
  let stop = false
  if (node.left !== null && node.right !== null &&
     (typeof node.left.value === 'number') && (typeof node.right.value === 'number')) {
    const rsltGauche = node.left.value
    const rsltDroite = node.right.value
    if ((typeof node.value !== 'number')) {
      switch (node.value) {
        case '+':
          rslt = rsltGauche + rsltDroite
          break
        case '-':
          rslt = rsltGauche - rsltDroite
          break
        case '*':
          rslt = rsltGauche * rsltDroite
          break
        case '/':
          rslt = rsltDroite !== 0 ? rsltGauche / rsltDroite : 0
          break
        default:
          rslt = 0
      }
    }
    node.value = rslt
    node.left = null  // new TreeNode(rsltGauche)
    node.right = null // new TreeNode(rsltDroite)
    stop = true
  }
  stop = effectueUneEtape(node.left) || effectueUneEtape(node.right) || stop
  return stop
}

function braceLArbre (node: TreeNode | null): boolean {
  if (node === null) { return false }
  const stop = false
  if ((node !== null) && (typeof node.value !== 'number')) {
    if (choice([0, 1]) === 1) {
      const treeTemp = node.right
      node.right = node.left
      node.left = treeTemp
    }
  }

  braceLArbre(node.left)
  braceLArbre(node.right)
  return stop
}

function verifiePositif (node: TreeNode | null): boolean {
  if (node === null) { return false }
  const stop = false
  if ((node !== null) && (typeof node.value !== 'number')) {
    if (node.value === '-') {
      const rsltGauche = evalueArbre(node.left)
      const rsltDroite = evalueArbre(node.right)
      if (rsltGauche - rsltDroite < 0) {
        const treeTemp = node.right
        node.right = node.left
        node.left = treeTemp
      }
    }
  }
  verifiePositif(node.left)
  verifiePositif(node.right)
  return stop
}

function unOperateur (avecDivision: boolean = false, eviter:oper[] = []): oper {
  let rslt :oper
  if (avecDivision) {
    rslt = choice(['+', '-', '*', '+', '-', '*', '/'], eviter)
  } else { rslt = choice(['+', '-', '*'], eviter) }
  return rslt
}

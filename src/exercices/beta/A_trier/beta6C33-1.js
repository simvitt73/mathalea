import Exercice from '../../Exercice'
import { listeQuestionsToContenu, randint, calculANePlusJamaisUtiliser } from '../../../modules/outils'
export const titre = 'Parenthèses manquantes'

/**
 * Priorités opératoires, placer les parenthèses.
 * @author Cédric Grolleau

 */
export default class Priorites extends Exercice {
  constructor () {
    super()

    this.consigne = "Si besoin, ajoute des parenthèses pour rendre l'égalité correcte. <br> S'il y a plusieurs fois la même égalité trouve des solutions différentes."
    this.nbQuestions = 2

    this.spacing = 3
    this.spacingCorr = 3
  }

  nouvelleVersion () {
    let texte; let texteCorr; let a; let b; let c; let d; let i; let e
    let m; let n; let f; let l; let g; let k; let p; let prevchoice; let choice; let cpt = 0 //
    texte = ''
    texteCorr = ''
    for (i = 0; i < this.nbQuestions && cpt < 50;) {
      e = randint(1, 3)
      m = randint(1, 3)
      n = randint(1, 6)
      f = randint(1, 4)
      l = randint(1, 4)
      g = randint(2, 3)
      k = calculANePlusJamaisUtiliser(f * e)
      c = calculANePlusJamaisUtiliser(m * e)
      a = calculANePlusJamaisUtiliser(n * c)
      b = calculANePlusJamaisUtiliser(k * c)
      d = calculANePlusJamaisUtiliser(c * e * l)
      prevchoice = []
      texte = ''
      texteCorr = ''
      for (p = 0; p < 3; p++) {
        choice = randint(0, 6, prevchoice)
        prevchoice.push(choice)
        switch (choice) {
          case 0:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(a + b / c + (d / e + f) * g)} $ <br> `
            texteCorr += `$${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(a + b / c + (d / e + f) * g)} $<br>`
            break
          case 1:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser((a + b) / c + d / e + f * g)}  $<br>`
            texteCorr += `$ (${a} + ${b}) \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser((a + b) / c + d / e + f * g)} $<br>`
            break
          case 2:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser((a + b / c + d / e + f) * g)} $<br>`
            texteCorr += `$ ( ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} ) \\times ${g} = ${calculANePlusJamaisUtiliser((a + b / c + d / e + f) * g)} $<br>`
            break
          case 3:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser((a + b / c + d) / e + f * g)} $<br>`
            texteCorr += `$ (${a} + ${b} \\div ${c} + ${d}) \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser((a + b / c + d) / e + f * g)} $<br>`
            break
          case 4:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(((a + b) / c + d / e + f) * g)} $<br>`
            texteCorr += `$ ((${a} + ${b}) \\div ${c} + ${d} \\div ${e} + ${f}) \\times ${g} = ${calculANePlusJamaisUtiliser(((a + b) / c + d / e + f) * g)} $<br>`
            break
          case 5:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(a + (b / c + d) / e + f * g)} $<br>`
            texteCorr += `$ ${a} + ( ${b} \\div ${c} + ${d} ) \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(a + (b / c + d) / e + f * g)} $<br>`
            break
          case 6:
            texte += `$ ${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(a + b / c + d / e + f * g)} $ <br> `
            texteCorr += `$${a} + ${b} \\div ${c} + ${d} \\div ${e} + ${f} \\times ${g} = ${calculANePlusJamaisUtiliser(a + b / c + d / e + f * g)} $<br>`
            break
        }
      }
      if (this.listeQuestions.indexOf(texte) === -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

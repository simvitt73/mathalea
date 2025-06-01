import { context } from '../../modules/context'
import './ShemasEnBoite.css'
import { texNombre } from './texNombre'

type AccoladeType = {
  start: number, // colonne de début (1 = première colonne)
  end: number, // colonne de fin = start + longueur de l'accolade
  text: string,
  type?: 'curl' | 'arrow', // pour le style de l'accolade, 'curl' pour les accolades classiques, 'arrow' pour les accolades avec une flèche
  options?: {
    justify?: 'start' | 'center' | 'end', // pour justifier le texte à gauche, au centre ou à droite
    color?: string, // pour la couleur du texte
    fontSize?: string, // pour la taille de la police
    fontWeight?: string, // pour le poids de la police
    lineHeight?: string, // pour la hauteur de ligne
  }
}
type BarreSchemaType = {
  color: string
  length: number
  content: string,
  options?: {
    justify?: 'start' | 'center' | 'end', // pour justifier le texte à gauche, au centre ou à droite
    color?: string, // pour la couleur du texte
    lineHeight?: string, // pour la hauteur de ligne
    fontSize?: string, // pour la taille de la police
    fontWeight?: string, // pour le poids de la police
    textAlign?: 'left' | 'center' | 'right', // pour aligner le texte à gauche, au centre ou à droite
    style?: string, // pour ajouter un style CSS supplémentaire
    // par exemple: 'border: 1px solid black;'
    // pour ajouter une bordure ou d'autres styles
    // on peut aussi ajouter d'autres options si besoin
  }
}
type LigneSchemaType = BarreSchemaType[]
type LigneAccoladeType = AccoladeType[]
export default class SchemaEnBoite {
  topBraces?: LigneAccoladeType
  bottomBraces?: LigneAccoladeType
  topBar: LigneSchemaType
  bottomBar: LigneSchemaType

  constructor ({ topBar, bottomBar, bottomBraces, topBraces }: { topBar: LigneSchemaType, bottomBar: LigneSchemaType, bottomBraces?: LigneAccoladeType, topBraces?: LigneAccoladeType } = { topBar: [], bottomBar: [] }) {
    this.topBar = topBar
    this.bottomBar = bottomBar
    if (bottomBraces) {
      this.bottomBraces = bottomBraces
    }
    if (topBraces) {
      this.topBraces = topBraces
    }
  }

  concat (boite: SchemaEnBoite): SchemaEnBoite {
    return new SchemaEnBoite({ topBar: this.topBar.concat(boite.topBar) ?? [], bottomBar: this.bottomBar.concat(boite.bottomBar) ?? [], bottomBraces: this.bottomBraces?.concat(boite.bottomBraces ?? []) ?? [], topBraces: this.topBraces?.concat(boite.topBraces ?? []) ?? [] })
  }

  display (): string {
    if (context.isHtml) {
      let ligneAccoladeH = ''
      if (this.topBraces) {
        for (let k = 0; k < this.topBraces.length; k++) {
          const brace = this.topBraces[k]
          const start = brace.start
          const end = brace.end
          const texte = brace.text
          const type = brace.type ?? 'curl' // 'curl' par défaut
          const options = brace.options ?? {}
          const justify = options.justify ?? 'center' // 'center' par défaut
          const color = options.color ?? 'black' // 'black' par défaut
          const fontSize = options.fontSize ?? '1em' // '1em' par défaut
          const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
          const lineHeight = options.lineHeight ?? '1.2em' // '1.2em' par défaut
          // On crée la ligne d'accolade en fonction du type
          // et des options
          if (start != null && end != null && texte != null) {
            ligneAccoladeH += type === 'arrow'
              ? `<div class="SchemaTop" style="grid-row: 1; grid-column-start: ${start}; grid-column-end: ${end}; text-align:center; border: none;">
                    <div class="latexAccoladeTop" style="text-align: ${justify}; color: ${color}; font-size: ${fontSize}; font-weight: ${fontWeight}; line-height: ${lineHeight}">${texte}</div>
                  <div class="horizontalArrow">
                    <div class="horizontalArrowHead" style="transform: rotate(180deg);"></div>
                    <div class="horizontalArrowLine"></div>
                    <div class="horizontalArrowHead"></div>
                  </div>
                </div>\n`
              : `<div class="SchemaTop" style="grid-row: 1; grid-column-start: ${start}; grid-column-end: ${end}; text-align:center; border: none">
                    <div class="latexAccoladeTop" style="text-align: ${justify}; color: ${color}; font-size: ${fontSize}; font-weight: ${fontWeight}; line-height: ${lineHeight}">${texte}</div>
                    <div class="braceTop">
                      <div class="braceTopLeft">
                        <div class="curlTopLeftLeft"></div>
                        <div class="lineTopLeftMiddle"></div>
                        <div class="curlTopLeftRight"></div>
                      </div>
                      <div class="braceTopRight">
                        <div class="curlTopRightLeft"></div>
                        <div class="lineTopRightMiddle"></div>
                        <div class="curlTopRightRight"></div>
                      </div>
                    </div>
                </div>\n`
          }
        }
      }
      let ligne1 = ''
      let start = 1
      for (let k = 0; k < this.topBar.length; k++) {
        // On crée la ligne du haut
        // en fonction des barres et de leurs options
        const barre = this.topBar[k]
        if (barre.length <= 0) continue // On ignore les barres de longueur 0
        if (barre.content == null) barre.content = '' // On met un contenu vide si pas défini
        if (barre.color == null) barre.color = 'lightgray' // On met une couleur par défaut si pas définie
        if (barre.options == null) barre.options = {} // On met un objet vide si pas défini
        const options = barre.options ?? {}
        const justify = options.justify ?? 'center' // 'center' par défaut
        const color = options.color ?? 'black' // 'black' par défaut
        const fontSize = options.fontSize ?? '1em' // '1em' par défaut
        const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
        const lineHeight = options.lineHeight ?? '1.2em' // '1.2em' par défaut
        const style = options.style ?? '' // 'none' par défaut
        // On crée la barre en fonction des options
        // et de la longueur
        // On ajoute la barre à la ligne
        ligne1 += `<div class="SchemaItem" style="grid-row: 2; grid-column-start: ${start}; grid-column-end: ${start + barre.length}; background-color:${barre.color}; justify-content:${justify}; color:${color}; font-size:${fontSize}; font-weight:${fontWeight}; line-height:${lineHeight}; ${style}">${barre.content}</div>\n`
        start += barre.length
      }
      let ligne2 = ''
      start = 1
      for (let k = 0; k < this.bottomBar.length; k++) {
        // On crée la ligne du bas
        // en fonction des barres et de leurs options
        const barre = this.bottomBar[k]
        if (barre.length <= 0) continue // On ignore les barres de longueur 0
        if (barre.content == null) barre.content = '' // On met un contenu vide si pas défini
        if (barre.color == null) barre.color = 'lightgray' // On met une couleur par défaut si pas définie
        if (barre.options == null) barre.options = {} // On met un objet vide si pas défini
        const options = barre.options ?? {}
        const justify = options.justify ?? 'center' // 'center' par défaut
        const color = options.color ?? 'black' // 'black' par défaut
        const fontSize = options.fontSize ?? '1em' // '1em' par défaut
        const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
        const style = options.style ?? '' // 'none' par défaut
        // On crée la barre en fonction des options
        // et de la longueur
        // On ajoute la barre à la ligne
        ligne2 += `<div class="SchemaItem" style="grid-row: 3; grid-column-start: ${start}; grid-column-end: ${start + barre.length}; background-color:${barre.color}; justify-content:${justify}; color:${color}; font-size:${fontSize}; font-weight:${fontWeight}; line-height: 1.2em; ${style}">${barre.content}</div>\n`
        start += barre.length
      }
      let ligneAccoladeB = ''
      if (this.bottomBraces) {
        for (let k = 0; k < this.bottomBraces.length; k++) {
          const brace = this.bottomBraces[k]
          const start = brace.start
          const end = brace.end
          const texte = brace.text
          const type = brace.type ?? 'curl' // 'curl' par défaut
          const options = brace.options ?? {}
          const justify = options.justify ?? 'center' // 'center' par défaut
          const color = options.color ?? 'black' // 'black' par défaut
          const fontSize = options.fontSize ?? '1em' // '1em' par défaut
          const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
          const lineHeight = options.lineHeight ?? '1.2em' // '1.2em' par défaut
          if (start != null && end != null && texte != null) {
            ligneAccoladeB += type === 'arrow'
              ? `<div class="SchemaBottom" style="grid-row: 4; grid-column-start: ${start}; grid-column-end: ${end}; text-align:center; border: none;">
                  <div class="horizontalArrow">
                    <div class="horizontalArrowHead" style="transform: rotate(180deg);"></div>
                    <div class="horizontalArrowLine"></div>
                    <div class="horizontalArrowHead"></div>
                  </div>
                    <div class="latexAccoladeBottom" style="text-align: ${justify}; color: ${color}; font-size: ${fontSize}; font-weight: ${fontWeight}; line-height: ${lineHeight}">${texte}</div>
                </div>\n`
              : `<div class="SchemaBottom" style="grid-row: 4; grid-column-start: ${start}; grid-column-end: ${end}; text-align:center; border: none;">
            <div class="braceBottom">
              <div class="braceBottomLeft">
                <div class="curlBottomLeftLeft"></div>
                <div class="lineBottomLeftMiddle"></div>
                <div class="curlBottomLeftRight"></div>
              </div>
              <div class="braceBottomRight">
                  <div class="curlBottomRightLeft"></div>
                  <div class="lineBottomRightMiddle"></div>
                  <div class="curlBottomRightRight"></div>
              </div>
            </div>
             <div class="latexAccoladeBottom">${texte}</div>
            </div>\n`
          }
        }
      }
      return `<div class="SchemaContainer">${ligneAccoladeH}\n${ligne1}\n${ligne2}\n${ligneAccoladeB}</div>`
    } else { // latex
      let latex = '\\begin{tikzpicture}\n'
      if (this.topBraces) {
        for (let k = 0; k < this.topBraces.length; k++) {
          const brace = this.topBraces[k]
          const start = (brace.start - 1) * 2 / 3
          const end = (brace.end - 1) * 2 / 3
          const texte = brace.text
          const type = brace.type ?? 'curl' // 'curl' par défaut
          const options = brace.options ?? {}
          const color = options.color ?? 'black' // 'black' par défaut
          const fontSize = options.fontSize ?? '1em' // '1em' par défaut
          const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
          if (start != null && end != null && texte != null) {
            // Gestion du style du texte
            let styleTexte = ''
            if (color) styleTexte += `\\textcolor{${color}}{`
            let fontSizeCmd = ''
            if (fontSize) {
              // Conversion simple pour quelques tailles courantes
              if (fontSize === 'small') fontSizeCmd = '\\small '
              else if (fontSize === 'large') fontSizeCmd = '\\large '
              else if (fontSize === 'Large') fontSizeCmd = '\\Large '
              else if (fontSize === 'footnotesize') fontSizeCmd = '\\footnotesize '
              // Pour d'autres tailles, il faudrait gérer plus finement
            }
            let fontWeightCmd = ''
            if (fontWeight === 'bold') fontWeightCmd = '\\textbf{'
            // lineHeight et justify sont difficiles à rendre en latex tikz, on ignore ou on pourrait utiliser node options avancées

            // Utilisation de styleTexte pour ouvrir la couleur, et fermeture à la fin
            const texteLatex = `${styleTexte}${fontSizeCmd}${fontWeightCmd}${texte}${fontWeight === 'bold' ? '}' : ''}${color ? '}' : ''}`

            // Justify: left/center/right
            if (type === 'arrow') {
              // Flèche horizontale avec texte au-dessus
              latex += `\\draw[<->,thick] (${start.toFixed(1)},3.2) -- (${end.toFixed(1)},3.2) node[above, pos=0.5] {${texteLatex}};\n`
            } else {
              // Accolade classique
              latex += `\\draw[decorate,decoration={brace,amplitude=10pt},xshift=0pt,yshift=0pt] (${start.toFixed(1)},3) -- node[above=10pt, pos=0.5] {${texteLatex}} (${end.toFixed(1)},3);\n`
            }
          }
        }
      }
      let start = 0
      for (let k = 0; k < this.topBar.length; k++) {
        const barre = this.topBar[k]
        const end = start + barre.length * 2 / 3
        if (barre.length <= 0) continue // On ignore les barres de longueur 0
        if (barre.content == null) barre.content = '' // On met un contenu vide si pas défini
        if (barre.color == null) barre.color = 'lightgray' // On met une couleur par défaut si pas définie
        if (barre.options == null) barre.options = {} // On met un objet vide si pas défini
        const options = barre.options ?? {}
        const justify = options.justify ?? 'center' // 'center' par défaut
        const color = options.color ?? 'black' // 'black' par défaut
        const fontSize = options.fontSize ?? '1em' // '1em' par défaut
        const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
        const lineHeight = options.lineHeight ?? '1.2em'
        // '1.2em' par défaut
        let rectHeight = 1 // hauteur par défaut
        if (lineHeight && typeof lineHeight === 'string') {
          // Essaye d'extraire un nombre depuis la string (ex: "1.5em" => 1.5)
          const match = lineHeight.match(/^([\d.]+)(em|pt|cm|mm)?$/)
          if (match) {
            const value = parseFloat(match[1])
            // On suppose que la hauteur par défaut (1) correspond à 1.2em
            // donc on ajuste proportionnellement
            if (match[2] === 'em' || !match[2]) {
              rectHeight = value / 1.2
            } else if (match[2] === 'pt') {
              rectHeight = value / 12 // 12pt ≈ 1.2em
            } else if (match[2] === 'cm') {
              rectHeight = value / 0.508 // 0.508cm ≈ 1.2em
            } else if (match[2] === 'mm') {
              // 5.08mm ≈ 1.2em
            }
          }
        }
        // Gestion du style du texte
        let styleTexte = ''
        if (color) styleTexte += `\\textcolor{${color}}{`
        let fontSizeCmd = ''
        if (fontSize) {
          if (fontSize === 'small') fontSizeCmd = '\\small '
          else if (fontSize === 'large') fontSizeCmd = '\\large '
          else if (fontSize === 'Large') fontSizeCmd = '\\Large '
          else if (fontSize === 'footnotesize') fontSizeCmd = '\\footnotesize '
        }
        let fontWeightCmd = ''
        if (fontWeight === 'bold') fontWeightCmd = '\\textbf{'
        // lineHeight et justify sont difficiles à rendre en latex tikz, on ignore ou on pourrait utiliser node options avancées

        // Utilisation de styleTexte pour ouvrir la couleur, et fermeture à la fin
        const texteLatex = `${styleTexte}${fontSizeCmd}${fontWeightCmd}${barre.content}${fontWeight === 'bold' ? '}' : ''}${color ? '}' : ''}`
        let xText
        if (justify === 'start') {
          xText = start + 0.1
        } else if (justify === 'end') {
          xText = end - 0.1
        } else {
          xText = (start + end) / 2
        }
        latex += `\\draw[fill=${barre.color}] (${start.toFixed(1)},${2}) rectangle (${end.toFixed(1)},${2 + rectHeight});\n`
        latex += `\\draw (${xText.toFixed(2)},${(2 + rectHeight / 2).toFixed(2)}) node[anchor=${justify === 'start' ? 'west' : justify === 'end' ? 'east' : 'center'}] {${texteLatex}};\n`
        start += barre.length * 2 / 3
      }
      start = 0
      for (let k = 0; k < this.bottomBar.length; k++) {
        const barre = this.bottomBar[k]
        const end = start + barre.length * 2 / 3
        if (barre.length <= 0) continue // On ignore les barres de longueur 0
        if (barre.content == null) barre.content = '' // On met un contenu vide si pas défini
        if (barre.color == null) barre.color = 'lightgray' // On met une couleur par défaut si pas définie
        if (barre.options == null) barre.options = {} // On met un objet vide si pas défini
        const options = barre.options ?? {}
        const justify = options.justify ?? 'center' // 'center' par défaut
        const color = options.color ?? 'black' // 'black' par défaut
        const fontSize = options.fontSize ?? '1em' // '1em' par défaut
        const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
        const lineHeight = options.lineHeight ?? '1.2em' // '1.2em' par défaut
        // '1.2em' par défaut
        let rectHeight = 1 // hauteur par défaut
        if (lineHeight && typeof lineHeight === 'string') {
          // Essaye d'extraire un nombre depuis la string (ex: "1.5em" => 1.5)
          const match = lineHeight.match(/^([\d.]+)(em|pt|cm|mm)?$/)
          if (match) {
            const value = parseFloat(match[1])
            // On suppose que la hauteur par défaut (1) correspond à 1.2em
            // donc on ajuste proportionnellement
            if (match[2] === 'em' || !match[2]) {
              rectHeight = value / 1.2
            } else if (match[2] === 'pt') {
              rectHeight = value / 12 // 12pt ≈ 1.2em
            } else if (match[2] === 'cm') {
              rectHeight = value / 0.508 // 0.508cm ≈ 1.2em
            } else if (match[2] === 'mm') {
              // 5.08mm ≈ 1.2em
            }
          }
        }
        // Gestion du style du texte
        let styleTexte = ''
        if (color) styleTexte += `\\textcolor{${color}}{`
        let fontSizeCmd = ''
        if (fontSize) {
          if (fontSize === 'small') fontSizeCmd = '\\small '
          else if (fontSize === 'large') fontSizeCmd = '\\large '
          else if (fontSize === 'Large') fontSizeCmd = '\\Large '
          else if (fontSize === 'footnotesize') fontSizeCmd = '\\footnotesize '
        }
        let fontWeightCmd = ''
        if (fontWeight === 'bold') fontWeightCmd = '\\textbf{'
        // lineHeight et justify sont difficiles à rendre en latex tikz, on ignore ou on pourrait utiliser node options avancées

        // Utilisation de styleTexte pour ouvrir la couleur, et fermeture à la fin
        const texteLatex = `${styleTexte}${fontSizeCmd}${fontWeightCmd}${barre.content}${fontWeight === 'bold' ? '}' : ''}${color ? '}' : ''}`
        let xText
        if (justify === 'start') {
          xText = start + 0.1
        } else if (justify === 'end') {
          xText = end - 0.1
        } else {
          xText = (start + end) / 2
        }
        latex += `\\draw[fill=${barre.color}] (${start.toFixed(1)},${2 - rectHeight}) rectangle (${end.toFixed(1)},2);\n`
        latex += `\\draw (${xText.toFixed(2)},${(2 - rectHeight / 2).toFixed(2)}) node[anchor=${justify === 'start' ? 'west' : justify === 'end' ? 'east' : 'center'}] {${texteLatex}};\n`
        start += barre.length * 2 / 3
      }
      if (this.bottomBraces) {
        for (let k = 0; k < this.bottomBraces.length; k++) {
          const brace = this.bottomBraces[k]
          const start = (brace.start - 1) * 2 / 3
          const end = (brace.end - 1) * 2 / 3
          const texte = brace.text
          const type = brace.type ?? 'curl' // 'curl' par défaut
          const options = brace.options ?? {}
          const color = options.color ?? 'black' // 'black' par défaut
          const fontSize = options.fontSize ?? '1em' // '1em' par défaut
          const fontWeight = options.fontWeight ?? 'normal' // 'normal' par défaut
          if (start != null && end != null && texte != null) {
            // Gestion du style du texte
            let styleTexte = ''
            if (color) styleTexte += `\\textcolor{${color}}{`
            let fontSizeCmd = ''
            if (fontSize) {
              // Conversion simple pour quelques tailles courantes
              if (fontSize === 'small') fontSizeCmd = '\\small '
              else if (fontSize === 'large') fontSizeCmd = '\\large '
              else if (fontSize === 'Large') fontSizeCmd = '\\Large '
              else if (fontSize === 'footnotesize') fontSizeCmd = '\\footnotesize '
              // Pour d'autres tailles, il faudrait gérer plus finement
            }
            let fontWeightCmd = ''
            if (fontWeight === 'bold') fontWeightCmd = '\\textbf{'
            // lineHeight et justify sont difficiles à rendre en latex tikz, on ignore ou on pourrait utiliser node options avancées

            // Utilisation de styleTexte pour ouvrir la couleur, et fermeture à la fin
            const texteLatex = `${styleTexte}${fontSizeCmd}${fontWeightCmd}${texte}${fontWeight === 'bold' ? '}' : ''}${color ? '}' : ''}`
            // Justify: left/center/right
            if (type === 'arrow') {
              // Flèche horizontale avec texte en dessous
              latex += `\\draw[<->,thick] (${start.toFixed(1)},0.8) -- (${end.toFixed(1)},0.8) node[below, pos=0.5] {${texteLatex}};\n`
            } else {
              // Accolade classique
              latex += `\\draw[decorate,decoration={brace,amplitude=10pt},xshift=0pt,yshift=0pt] (${end.toFixed(1)},1) -- node[below=10pt, pos=0.5] {${texteLatex}} (${start.toFixed(1)},1);\n`
            }
          }
        }
      }
      latex += '\\end{tikzpicture}'
      return latex
    }
  }

  /**
   *
   * @param nb1 Le premier facteur (celui de la ligne du haut)
   * @param nb2 Le deuxième facteur (celui de l'accolade)
   * @param precision Le nombre de décimales
   * @param produit Le produit au format string si on veut écrire autre chose que '?' (écrit dans la case du dessous)
   * @returns
   */
  static multiplication (nb1: number | undefined, nb2: number | undefined, precision: number, produit:string | undefined): SchemaEnBoite {
    const seb = new SchemaEnBoite({
      topBraces: [
        {
          start: 1,
          end: 8 + precision * 2,
          text: nb2 != null ? `$${texNombre(nb2, precision)}\\text{ fois}$` : '? fois',
        }
      ], /* // Pour les test d'ajustement css (J-C)
      bottomBraces: [
        {
          start: 1,
          end: 8 + precision * 2,
          text: 'produit',
        }
      ], */
      topBar: [
        {
          length: 2 + precision,
          color: 'lightgray',
          content: nb1 != null ? `$${texNombre(nb1, precision)}$` : '?',
        },
        {
          length: 3,
          color: 'lightgray',
          content: '\\ldots',
        },
        {
          length: 2 + precision,
          color: 'lightgray',
          content: nb1 != null ? `$${texNombre(nb1, precision)}$` : '?',
        }
      ],
      bottomBar: [
        {
          length: 7 + precision * 2,
          color: 'white',
          content: produit != null ? produit : '?' // `${nb1 * nb2}`,
        }
      ]
    })
    return seb
  }

  /**
 *
 * @param dividende Le dividende (écrit dans la case du dessous)
 * @param quotient Le diviseur (nombre entier de fois écrit sur l'accolade)
 * @param diviseur Le diviseur (écrit dans les cases du dessus)
 * @param precision nombre de chiffres après la virgule du dividende et du diviseur
 * @returns
 */
  static division (dividende: number | undefined, diviseur: number | undefined, quotient: number | undefined, precision: number): SchemaEnBoite {
    const seb = new SchemaEnBoite({
      topBraces: [
        {
          start: 1,
          end: 8 + 2 * precision,
          text: quotient == null ? '? fois' : `${texNombre(quotient, 0)} fois`,
        }
      ],
      topBar: [
        { color: 'lightgray', length: 2 + precision, content: diviseur == null ? '?' : `$${texNombre(diviseur, precision)}$` },
        { color: 'lightgray', length: 3, content: '\\ldots' },
        { color: 'lightgray', length: 2 + precision, content: diviseur == null ? '?' : `$${texNombre(diviseur, precision)}$` },
      ],
      bottomBar: [
        { color: 'white', length: 7 + 2 * precision, content: dividende == null ? '?' : `$${texNombre(dividende, precision)}$` },
      ]
    })
    return seb
  }

  /**
   *
   * @param diviseur diviseur (est écrit dans les cases du dessus)
   * @param dividende dividende (est écrit dans la case du dessous, mettre undefined pour avoir un ?)
   * @param quotient Le nombre de fois écrit sur l'accolade (un string qui peut être égal à '?')
   * @param reste Le reste de la division (un string qui peut être égal à '?')
   * @param precision
   * @returns
   */
  static divisionAvecReste (dividende: number | undefined, diviseur: number | undefined, quotient: number | undefined, precision: number, reste?: string): SchemaEnBoite {
    const seb = new SchemaEnBoite({
      topBraces: [
        {
          start: 1,
          end: 8 + 2 * precision,
          text: quotient == null ? '? fois' : `$${quotient}$ fois`,
        }
      ],
      topBar: [
        { color: 'lightgray', length: 2 + precision, content: diviseur == null ? '?' : `$${texNombre(diviseur, precision)}$` },
        { color: 'lightgray', length: 3, content: '\\ldots' },
        { color: 'lightgray', length: 2 + precision, content: diviseur == null ? '?' : `$${texNombre(diviseur, precision)}$` },
        { color: 'lightgray', length: 2, content: reste ?? '?' }
      ],
      bottomBar: [
        { color: 'white', length: 9 + 2 * precision, content: dividende == null ? '?' : `$${texNombre(dividende, precision)}$` },
      ]
    })
    return seb
  }

  static addition (nb1: number | undefined, nb2: number | undefined, precision: number): SchemaEnBoite {
    const seb = new SchemaEnBoite({
      topBar: [
        { color: 'lightgray', length: 2 + precision, content: nb1 != null ? `$${texNombre(nb1, precision)}$` : '?' },
        { color: 'lightgray', length: 2 + precision, content: nb2 != null ? `$${texNombre(nb2, precision)}$` : '?' },
      ],
      bottomBar: [
        { color: 'white', length: 4 + precision * 2, content: '?' },
      ]
    })
    return seb
  }

  static soustraction (terme1: number | undefined, difference: number | undefined, terme2: number | undefined, precision: number): SchemaEnBoite {
    const seb = new SchemaEnBoite({
      topBar: [
        { color: 'lightgray', length: 2 + precision, content: terme2 == null ? '?' : `$${texNombre(terme2, precision)}$` },
        { color: 'lightgray', length: 2 + precision, content: difference == null ? '?' : `$${texNombre(difference, precision)}$` },
      ],
      bottomBar: [
        { color: 'white', length: 4 + precision * 2, content: terme1 == null ? '?' : `$${texNombre(terme1, precision)}$` },
      ]
    })
    return seb
  }
}

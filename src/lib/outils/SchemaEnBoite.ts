import { context } from '../../modules/context'

type BarreSchemaType = {
    color: string
    longueur: number
    content: string
}
type LigneSchemaType = BarreSchemaType[]
export default class SchemaEnBoite {
  haut: LigneSchemaType
  bas: LigneSchemaType

  constructor ({ haut, bas }: { haut: LigneSchemaType, bas: LigneSchemaType } = { haut: [], bas: [] }) {
    this.haut = haut
    this.bas = bas
  }

  concat (boite: SchemaEnBoite): SchemaEnBoite {
    return new SchemaEnBoite({ haut: this.haut.concat(boite.haut) ?? [], bas: this.bas.concat(boite.bas) ?? [] })
  }

  display (): string {
    if (context.isHtml) { // à refaire avec une table...
      const haut = this.haut.map(barre => `<span style="color:${barre.color};">${barre.content.repeat(barre.longueur)}</span>`).join('') ?? ''
      const bas = this.bas.map(barre => `<span style="color:${barre.color};">${barre.content.repeat(barre.longueur)}</span>`).join('') ?? ''
      return `${haut}<br>${bas}`
    } else {
      const ligne1 = this.haut.map(barre => `${barre.color} ${barre.longueur} "${barre.content}"`).join(' ') ?? ''
      const ligne2 = this.bas.map(barre => `${barre.color} ${barre.longueur} "${barre.content}"`).join(' ') ?? ''
      return `\\ModeleBarre{${ligne1}}{${ligne2}}`
    }
  }
}

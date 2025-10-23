import Stat from '../../lib/mathFonctions/Stat'
import { texteEnCouleurEtGras } from '../../lib/outils/embellissements'
import { texNombre } from '../../lib/outils/texNombre'
import { randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const uuid = 'a5ab7'
export const refs = {
  'fr-fr': ['betaBAM'],
  'fr-ch': [],
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Comparer deux nombres'
export const dateDePublication = '02/09/2025'
export default class BetaBAM extends Exercice {
  constructor() {
    super()
    this.nbQuestions = 1
    this.nbQuestionsModifiable = false
    this.spacing = 2
    this.besoinFormulaire2CaseACocher = ['Avec les légendes', true]
    this.sup2 = true
    this.besoinFormulaireCaseACocher = ['Avec les valeurs', true]
    this.sup = true
  }

  nouvelleVersion() {
    const q1 = randint(2, 3)
    const q3 = randint(7, 10)
    const mediane = randint(q1 + 2, q3 - 2)
    const min = 1
    const max = 11

    const serie = Stat.createSerieFromQuartiles({
      q1,
      mediane,
      q3,
      min,
      max,
      isInteger: true,
      n: 30,
    })
    const stat = new Stat(serie)
    const boite = Stat.boiteAMoustache(stat.serie)
    const valeurs = boite.valeurs
    const ecartInterquartile = boite.q3 - boite.q1
    const borneInf = boite.q1 - 1.5 * ecartInterquartile
    const borneSup = boite.q3 + 1.5 * ecartInterquartile
    const valeursHorsBornes = stat.serie.filter(
      (v) => v < borneInf || v > borneSup,
    )
    const bonneReponse = valeursHorsBornes.length > 0 ? 'Oui' : 'Non'
    this.listeQuestions[0] = `Voici la série de nombres : ${stat.listeSerie({ triee: false, tableau: false })}.<br>
Peut-on affirmer qu'il y a des valeurs aberrantes dans cette série selon la méthode de la boîte à moustaches ?<br>
${stat.traceBoiteAMoustache({ size: 25, height: 4, legendeOn: this.sup2, valeursOn: this.sup })}<br>
Et voici l'histogramme de cette série :<br>
${stat.histogramme({ cumul: false, croissance: true, barres: true, percentVsEffectifs: false })}
${stat.histogramme({ cumul: false, croissance: true, barres: false, percentVsEffectifs: false })}
${stat.histogramme({ cumul: true, croissance: true, barres: true, percentVsEffectifs: false })}
${stat.histogramme({ cumul: true, croissance: true, barres: false, percentVsEffectifs: true })}`
    this.listeCorrections[0] = `Rangeons les valeurs de la série par ordre croissant : ${valeurs.join(', ')}.<br>
    Pour déterminer s'il y a des valeurs aberrantes dans la série, nous devons calculer l'écart interquartile (IQR).<br>
$Q_1 = ${texNombre(boite.q1, 2)}$, $Q_3 = ${texNombre(boite.q3, 2)}$<br>
$\\text{IQR} = Q_3 - Q_1 = ${texNombre(ecartInterquartile, 2)}$<br>
Les bornes pour détecter les valeurs aberrantes sont :<br>
Borne inférieure $= Q_1 - 1{,}5 * \\text{ IQR} = ${texNombre(borneInf, 2)}$<br>
Borne supérieure $= Q_3 + 1{,}5 * \\text{ IQR} = ${texNombre(borneSup, 2)}$<br>
Les valeurs aberrantes sont celles qui sont en dehors de ces bornes : ${valeursHorsBornes.length > 0 ? valeursHorsBornes.join(', ') : 'Aucune'}.<br>
Donc, peut-on affirmer qu'il y a des valeurs aberrantes dans cette série ? ${texteEnCouleurEtGras(bonneReponse)}.`
  }
}

import SommeSuiteArithmetique from '../1e/1AL11-8b'
export const titre = 'Calculer les sommes de termes d\'une suite arithmétique.'
export const dateDePublication = '25/08/2025'
export const amcReady = true
export const amcType = 'AMCNum'
export const interactifReady = true
export const interactifType = 'mathLive'

/**
 * Clone de 1AL11-8b pour les auto 1er
 * @author Stéphane Guyon
 */

export const uuid = '50a70'

export const refs = {
  'fr-fr': ['1A-SN3'],
  'fr-ch': []
}
export default class Auto1ASN3 extends SommeSuiteArithmetique {
  constructor () {
    super()
    this.versionQcm = true
  }
}

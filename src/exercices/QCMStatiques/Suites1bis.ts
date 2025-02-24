import ExerciceQcm from '../ExerciceQcm'

export const uuid = 'TSsuites1'
export const refs = {
  'fr-fr': ['TSA2-QCM04'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'QCM de cours : Suites numériques'
export const dateDePublication = '23/02/2025'

const affirmations = [
  { text: 'Toute suite bornée est convergente', correct: false },
  { text: 'Toute suite minorée et croissante converge', correct: true },
  { text: 'Toute suite croissante majorée par L, converge vers L', correct: true },
  { text: 'Toute suite convergente est bornée', correct: true },
  { text: 'Toute suite décroissante est minorée', correct: false },
  { text: 'Toute suite alternée converge', correct: false },
  { text: 'Une suite arithmétique de raison positive est divergente', correct: true },
  { text: 'Toute suite qui tend vers 0 est bornée', correct: true },
  { text: 'Une suite géométrique de raison strictement supérieure à 1 diverge', correct: true },
  { text: 'Une suite constante est toujours convergente', correct: true }
];

function getRandomAffirmations() {
  return affirmations.sort(() => 0.5 - Math.random()).slice(0, 4);
}

export default class SuitesNumeriquesQCM extends ExerciceQcm {
  versionOriginale: () => void = () => {
    this.reponses = getRandomAffirmations();

    this.enonce = 'Parmi les affirmations suivantes sur les suites numériques, cochez celles qui sont vraies :';
    
    this.correction = 'Rappelons quelques propriétés importantes :<br>';
    this.correction += '- Une suite bornée n\'est pas nécessairement convergente.<br>';
    this.correction += '- Une suite croissante et majorée converge nécessairement vers sa borne supérieure.<br>';
    this.correction += '- Toute suite convergente est forcément bornée.';
  }

  constructor () {
    super();
    this.options = { vertical: true, ordered: false };
    this.versionOriginale();
  }
}

import { runTest } from '../../helpers/run'
import type { BrowserContext, Locator, Page } from 'playwright'
import { clean } from '../../helpers/text'
import prefs from '../../helpers/prefs'

type ExerciseType = 'classique' | 'simple'

const ViewValidKeys = <const>['start', 'diaporama', 'apercu', 'eleve', 'LaTeX', 'AMC']
type ViewValidKeysType = typeof ViewValidKeys
type View = ViewValidKeysType[number]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isView (obj: unknown): obj is View {
  if (obj == null || typeof obj !== 'string') return false
  return ViewValidKeys.includes(obj as View)
}

const StudentVariationValidKeys = <const>['Tous les exercices sur une page', 'Une page par exercice', 'Toutes les questions sur une page', 'Une page par question', 'Course aux nombres']
type StudentVariationValidKeysType = typeof StudentVariationValidKeys
type StudentVariation = StudentVariationValidKeysType[number]
function isStudentVariation (obj: unknown): obj is StudentVariation {
  if (obj == null || typeof obj !== 'string') return false
  return StudentVariationValidKeys.includes(obj as StudentVariation)
}

const LatexVariationValidKeys = <const>['Coopmaths', 'Classique', 'ProfMaquette', 'ProfMaquetteQrcode', 'Can']
type LatexVariationValidKeysType = typeof LatexVariationValidKeys
type LatexVariation = LatexVariationValidKeysType[number]
function isLatexVariation (obj: unknown): obj is LatexVariation {
  if (obj == null || typeof obj !== 'string') return false
  return LatexVariationValidKeys.includes(obj as LatexVariation)
}

const AMCVariationValidKeys = <const>['AMCcodeGrid', 'AMCassociation', 'manuscrits']
type AMCVariationValidKeysType = typeof AMCVariationValidKeys
type AMCVariation = AMCVariationValidKeysType[number]
function isAMCVariation (obj: unknown): obj is AMCVariation {
  if (obj == null || typeof obj !== 'string') return false
  return AMCVariationValidKeys.includes(obj as AMCVariation)
}

type Variation = '' | StudentVariation | LatexVariation | AMCVariation

type State = {
  url: string
  view: string
  numbers: string[]
  exerciseType: ExerciseType
}

type CallbackType = (page: Page, view: View, variation: Variation, exerciseType: ExerciseType, questionNb: number) => Promise<void>

const states: State[] = []

async function test (page: Page) {
  const browser = prefs.browserInstance
  if (browser === null) throw Error('can\'t test a null browser')
  const [context] = browser.contexts()
  const questionsNb = 20
  const hostname = local ? `http://localhost:${process.env.CI ? '80' : '5173'}/alea/` : 'https://coopmaths.fr/alea/'
  const classicExerciseUrl = hostname + '?uuid=0e6bd&id=6C10-1&n=10&d=10&s=2-3-4-5-6-7-8-9-10&s2=1&s3=true&uuid=0e6bd&id=6C10-1&n=10&d=10&s=2-3-4-5-6-7-8-9-10&s2=1&s3=true'
  await testUrl(classicExerciseUrl, page, context, questionsNb, 'classique')
  const simpleExerciseUrl = hostname + '?uuid=4ba86&id=canc3C04&n=10&d=10&cd=1&uuid=4ba86&id=canc3C04&n=10&d=10&cd=1'
  await testUrl(simpleExerciseUrl, page, context, questionsNb, 'simple')
  return isConsistent()
}

async function testUrl (url: string, page: Page, context: BrowserContext, questionsNb: number, exerciseType: ExerciseType) {
  const callback = async (page: Page, view: View, variation: Variation, exerciseType: ExerciseType, questionNb: number) => {
    if (view === 'diaporama') {
      await diaporamaStatePush(page, view, exerciseType, questionsNb)
    } else if (view === 'LaTeX' || view === 'AMC') {
      if (!isLatexVariation(variation) && !isAMCVariation(variation)) throw new Error('LaTeX or AMC callback called with invalid variation')
      if (view === 'LaTeX' && !isLatexVariation(variation)) throw new Error('LaTeX invalid variation')
      if (view === 'AMC' && !isAMCVariation(variation)) throw new Error('AMC invalid variation')
      await LatexStatePush(page, view, variation, exerciseType, questionsNb)
    } else {
      if (view === 'eleve' && !isStudentVariation(variation)) throw new Error('Student callback called with invalid view')
      await defaultViewStatePush(page, view, variation, exerciseType)
    }
  }
  await page.goto(url)
  await page.waitForLoadState('networkidle')
  await callback(page, 'start', '', exerciseType, questionsNb)
  await checkSlideshow(page, exerciseType, questionsNb, callback)
  await callback(page, 'start', '', exerciseType, questionsNb)
  await checkStudent(page, context, exerciseType, questionsNb, callback)
  await callback(page, 'start', '', exerciseType, questionsNb)
  await checkLatex(page, exerciseType, questionsNb, callback)
  await callback(page, 'start', '', exerciseType, questionsNb)
  await checkAmc(page, exerciseType, questionsNb, callback)
  await callback(page, 'start', '', exerciseType, questionsNb)
}

async function diaporamaStatePush (page: Page, view: View, exerciseType: ExerciseType, questionsNb: number) {
  const url = page.url()
  const numbers: string[] = []
  for (let i = 0; i < questionsNb; i++) {
    numbers.push(await getSlideshowNumbers(page))
    await page.locator('.bx-skip-next').click()
  }
  states.push({
    url,
    view,
    numbers,
    exerciseType
  })
}

async function LatexStatePush (page: Page, view: 'LaTeX' | 'AMC', variation: LatexVariation | AMCVariation, exerciseType: ExerciseType, questionsNb: number) {
  const url = page.url()
  await waitForLatex(page, variation)
  const latex = await getLatex(page)
  const numbers = getLatexNumbers(latex, view, variation, questionsNb)
  states.push({
    url,
    view: view + ':' + variation,
    numbers,
    exerciseType
  })
}

async function defaultViewStatePush (page: Page, view: View, variation: Variation, exerciseType: ExerciseType) {
  const url = page.url()
  await page.waitForSelector('.katex')
  const locators = await page.locator('.katex').all()
  const numbers = await getNumbers(locators)
  if (view === 'eleve' && (variation === 'Une page par exercice' || variation === 'Course aux nombres' || variation === 'Une page par question')) {
    // Bizarrement, les nombres se répètent 3 fois à partir du deuxième exercice dans ces vues au lieu de 2 partout ailleurs
    // À modifier lorsque ce problème de duplication sera réglé
    const duplicationBeginningIndex = variation === 'Une page par exercice' ? numbers.length / 2 : 1
    for (let i = 0; i < numbers.length; i++) {
      if (i >= duplicationBeginningIndex) {
        numbers[i] = numbers[i].slice(0, Math.round(numbers[i].length * 2 / 3))
      }
    }
    if (variation === 'Course aux nombres') {
      numbers.pop()
    }
  }
  states.push({
    url,
    view,
    numbers,
    exerciseType
  })
}

async function getNumbers (locators: Locator[]) {
  const numbers: string[] = []
  for (const locator of locators) {
    const innerText = await locator.innerText()
    const number = clean(innerText, ['cr']).replace(/\D/g, '')
    numbers.push(number)
  }
  return numbers
}

async function checkSlideshow (page: Page, exerciseType: ExerciseType, questionsNb: number, callback: CallbackType) {
  await page.locator('div[data-tip="Diaporama"]').click()
  await checkSlideshowPlay(page, questionsNb, exerciseType, callback)
  await checkSlideshowPreview(page, questionsNb, exerciseType, callback)
  await page.locator('.bx-x').first().click()
}

async function checkSlideshowPlay (page: Page, questionsNb: number, exerciseType: ExerciseType, callback: CallbackType) {
  await page.locator('#diaporama-play-button').click()
  callback(page, 'diaporama', '', exerciseType, questionsNb)
}

async function getSlideshowNumbers (page: Page) {
  await page.waitForSelector('#question0')
  const locator = page.locator('#question0')
  const innerText = await locator.innerText()
  const number = clean(innerText, ['cr']).replace(/\D/g, '')
  return number
}

async function checkSlideshowPreview (page: Page, questionNb: number, exerciseType: ExerciseType, callback: CallbackType) {
  await page.locator('.bx-detail').click()
  await callback(page, 'apercu', '', exerciseType, questionNb)
  await page.locator('.bx-arrow-back').click()
}

async function checkStudent (page: Page, context: BrowserContext, exerciseType: ExerciseType, questionNb: number, callback: CallbackType) {
  await page.locator('.bx-link').click()
  await checkStudentVariation('Tous les exercices sur une page', page, context, exerciseType, questionNb, callback)
  await checkStudentVariation('Une page par exercice', page, context, exerciseType, questionNb, callback)
  await checkStudentVariation('Toutes les questions sur une page', page, context, exerciseType, questionNb, callback)
  await checkStudentVariation('Une page par question', page, context, exerciseType, questionNb, callback)
  await checkStudentVariation('Course aux nombres', page, context, exerciseType, questionNb, callback)
  await page.locator('.bx-x').first().click()
}

async function checkStudentVariation (variation: Variation, page: Page, browserContext: BrowserContext, exerciseType: ExerciseType, questionNb: number, callback: CallbackType) {
  await page.click(`text=${variation}`)
  page.click('text=Visualiser') // Si on await ici, on risque de manquer le context.waitForEvent('page') qui suit
  const newPage = await browserContext.waitForEvent('page')
  await newPage.waitForLoadState('networkidle')

  if (variation === 'Course aux nombres') {
    await newPage.click('text=Démarrer')
    await newPage.waitForTimeout(6000)
  }
  await callback(newPage, 'eleve', variation, exerciseType, questionNb)
  await newPage.close()
}

async function checkLatex (page: Page, exerciseType: ExerciseType, questionsNb: number, callback: CallbackType) {
  await checkLatexVariation(page, 'LaTeX', 'Coopmaths', exerciseType, questionsNb, callback)
  await checkLatexVariation(page, 'LaTeX', 'Classique', exerciseType, questionsNb, callback)
  await checkLatexVariation(page, 'LaTeX', 'ProfMaquette', exerciseType, questionsNb, callback)
  await checkLatexVariation(page, 'LaTeX', 'ProfMaquetteQrcode', exerciseType, questionsNb, callback)
  await checkLatexVariation(page, 'LaTeX', 'Can', exerciseType, questionsNb, callback)
}

async function checkLatexVariation (page: Page, view: 'LaTeX' | 'AMC', variation: LatexVariation | AMCVariation, exerciseType: ExerciseType, questionsNb: number, callback: CallbackType) {
  await page.locator(`button[data-tip="${view}"]`).click()
  await page.click(`input[type="radio"][value="${variation}"]`)
  await callback(page, view, variation, exerciseType, questionsNb)
  await page.locator('.bx-x').first().click()
}

async function waitForLatex (page: Page, model: LatexVariation | AMCVariation) {
  switch (model) {
    case 'Coopmaths':
      await page.waitForFunction(() => {
        const preElement = document.querySelector('pre')
        if (preElement && preElement.textContent) {
          return preElement.textContent.includes('\\begin{EXO}{')
        }
        return false
      })
      break
    case 'Classique':
      await page.waitForFunction(() => {
        const preElement = document.querySelector('pre')
        if (preElement && preElement.textContent) {
          return preElement.textContent.includes('\\begin{EXO}{')
        }
        return false
      })
      break
    case 'ProfMaquette':
      await page.waitForFunction(() => {
        const preElement = document.querySelector('pre')
        if (preElement && preElement.textContent) {
          return preElement.textContent.includes('\\begin{Maquette}[Fiche]{Niveau= ,Classe= ,Date=   ,Theme=Exercices}')
        }
        return false
      })
      break

    default:
      break
  }
}

async function getLatex (page: Page) {
  const questionSelector = 'pre.w-full'
  const locator = page.locator(questionSelector)
  return await locator.innerText()
}

function getLatexNumbers (latex: string, view: 'LaTeX' | 'AMC', model: LatexVariation | AMCVariation, questionsNb: number) {
  const lineRegex: RegExp = view === 'LaTeX' ? model === 'Can' ? /\\CompteurTC\s+&[^\r\n]*/g : /\\item[^\r\n]*/g : /\$ [^\r\n]*/g
  const rawLines: string[] = latex.match(lineRegex) || []
  if (model === 'Can') {
    const rawNumbers = rawLines.map(line => line.replace(/\D/g, ''))
    // const cleanNumbers = rawNumbers.map(number => number.slice(1))
    const cleanNumbers = rawNumbers
    return cleanNumbers.map(number => number + number)
  } else {
    const numbersQuestionsAnswers = rawLines.map(line => line.replace(/\D/g, '') + line.replace(/\D/g, ''))
    return removeAnswers(numbersQuestionsAnswers, view, model, rawLines.length, questionsNb)
  }
}

function removeAnswers (calculationsQuestionsAnswers: string[], view: 'LaTeX' | 'AMC', model: LatexVariation | AMCVariation, linesNumber: number, questionsNb: number): string[] {
  if (view === 'LaTeX') {
    if (model === 'ProfMaquette' || model === 'ProfMaquetteQrcode') {
      const firstExercise = calculationsQuestionsAnswers.slice(0, questionsNb / 2)
      const secondExercise = calculationsQuestionsAnswers.slice(questionsNb, questionsNb + questionsNb / 2)
      return [...firstExercise, ...secondExercise]
    } else {
      return calculationsQuestionsAnswers.slice(0, linesNumber / 2) // Supprime la deuxième moitié qui correspond aux réponses
    }
  } else {
    return calculationsQuestionsAnswers
  }
}

async function checkAmc (page: Page, exerciseType: ExerciseType, questionsNb: number, callback: CallbackType) {
  await checkLatexVariation(page, 'AMC', 'AMCcodeGrid', exerciseType, questionsNb, callback)
  await checkLatexVariation(page, 'AMC', 'AMCassociation', exerciseType, questionsNb, callback)
  await checkLatexVariation(page, 'AMC', 'manuscrits', exerciseType, questionsNb, callback)
}

function isConsistent () {
  const differenceIndexes = getDifferencesIndexes()
  if (differenceIndexes.length > 0) {
    for (const differenceIndex of differenceIndexes) {
      console.log(`Il y a une différence entre la vue ${states[differenceIndex - 1].view} et la vue ${states[differenceIndex].view} pour les exercices de type ${states[differenceIndex].exerciseType}`)
      console.log(states[differenceIndex - 1], states[differenceIndex])
    }
    return false
  }
  return true
}

function getDifferencesIndexes () {
  const differenceIndexes: number[] = []
  for (let i = 1; i < states.length; i++) {
    for (let j = 0; j < states[i].numbers.length; j++) {
      if (
        states[i].exerciseType === states[i - 1].exerciseType &&
          states[i].numbers[j] !== states[i - 1].numbers[j] &&
          !(states[i].exerciseType === 'simple' && (states[i].view.startsWith('AMC:') || states[i - 1].view.startsWith('AMC:'))) // Les exercices simples n'ont pas de sortie AMC
      ) {
        differenceIndexes.push(i)
        break
      }
    }
  }
  return differenceIndexes
}

const local = true
if (process.env.CI) {
  // utiliser pour les tests d'intégration
  prefs.headless = true
  runTest(test, import.meta.url, { pauseOnError: false })
} else {
  runTest(test, import.meta.url, { pauseOnError: true })
}

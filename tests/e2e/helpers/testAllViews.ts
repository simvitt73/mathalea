import type { BrowserContext, Page } from 'playwright'
import prefs from './prefs'

export const ViewValidKeys = <const>['start', 'diaporama', 'apercu', 'eleve', 'LaTeX', 'AMC']
type ViewValidKeysType = typeof ViewValidKeys
export type View = ViewValidKeysType[number]
export function isView (obj: unknown): obj is View {
  if (obj == null || typeof obj !== 'string') return false
  return ViewValidKeys.includes(obj as View)
}

export const StudentVariationValidKeys = <const>['Tous les exercices sur une page', 'Une page par exercice', 'Toutes les questions sur une page', 'Une page par question', 'Course aux nombres']
type StudentVariationValidKeysType = typeof StudentVariationValidKeys
export type StudentVariation = StudentVariationValidKeysType[number]
export function isStudentVariation (obj: unknown): obj is StudentVariation {
  if (obj == null || typeof obj !== 'string') return false
  return StudentVariationValidKeys.includes(obj as StudentVariation)
}

export const LatexVariationValidKeys = <const>['Coopmaths', 'Classique', 'ProfMaquette', 'ProfMaquetteQrcode', 'Can']
type LatexVariationValidKeysType = typeof LatexVariationValidKeys
export type LatexVariation = LatexVariationValidKeysType[number]
export function isLatexVariation (obj: unknown): obj is LatexVariation {
  if (obj == null || typeof obj !== 'string') return false
  return LatexVariationValidKeys.includes(obj as LatexVariation)
}

export const AMCVariationValidKeys = <const>['AMCcodeGrid', 'AMCassociation', 'manuscrits']
type AMCVariationValidKeysType = typeof AMCVariationValidKeys
export type AMCVariation = AMCVariationValidKeysType[number]
export function isAMCVariation (obj: unknown): obj is AMCVariation {
  if (obj == null || typeof obj !== 'string') return false
  return AMCVariationValidKeys.includes(obj as AMCVariation)
}

export type Variation = '' | StudentVariation | LatexVariation | AMCVariation

export type CallbackType = (page: Page, view: View, variation: Variation) => Promise<void>

const local = true

export async function testAllViews (page: Page, params: string, callback: CallbackType) {
  const browser = prefs.browserInstance
  if (browser === null) throw Error('can\'t test a null browser')
  const [context] = browser.contexts()
  const hostname = local ? `http://localhost:${process.env.CI ? '80' : '5173'}/alea/?` : 'https://coopmaths.fr/alea/?'
  await page.goto(hostname + params)
  await page.waitForLoadState('networkidle')
  await callback(page, 'start', '')
  await checkSlideshow(page, callback)
  await callback(page, 'start', '')
  await checkStudent(page, context, callback)
  await callback(page, 'start', '')
  await checkLatex(page, callback)
  await callback(page, 'start', '')
  await checkAmc(page, callback)
  await callback(page, 'start', '')
}

async function checkSlideshow (page: Page, callback: CallbackType) {
  await page.locator('div[data-tip="Diaporama"]').click()
  await page.waitForURL(url => url.searchParams.get('v') === 'diaporama')
  await checkSlideshowPlay(page, callback)
  await checkSlideshowPreview(page, callback)
  await page.locator('.bx-x').first().click()
}

async function checkSlideshowPlay (page: Page, callback: CallbackType) {
  await page.locator('#diaporama-play-button').click()
  await callback(page, 'diaporama', '')
}

async function checkSlideshowPreview (page: Page, callback: CallbackType) {
  await page.locator('.bx-detail').click()
  await callback(page, 'apercu', '')
  await page.locator('.bx-arrow-back').click()
}

async function checkStudent (page: Page, context: BrowserContext, callback: CallbackType) {
  await page.locator('.bx-link').click()
  await checkStudentVariation('Tous les exercices sur une page', page, context, callback)
  if (getExercisesCount(page) > 1) await checkStudentVariation('Une page par exercice', page, context, callback)
  await checkStudentVariation('Toutes les questions sur une page', page, context, callback)
  await checkStudentVariation('Une page par question', page, context, callback)
  await checkStudentVariation('Course aux nombres', page, context, callback)
  await page.locator('.bx-x').first().click()
}

async function checkStudentVariation (variation: Variation, page: Page, browserContext: BrowserContext, callback: CallbackType) {
  await page.click(`text=${variation}`)
  page.click('text=Visualiser') // Si on await ici, on risque de manquer le context.waitForEvent('page') qui suit
  const newPage = await browserContext.waitForEvent('page')
  await newPage.waitForLoadState('networkidle')

  if (variation === 'Course aux nombres') {
    await newPage.click('text=Démarrer')
    await newPage.waitForTimeout(6000)
  }
  await callback(newPage, 'eleve', variation)
  await newPage.close()
}

function getExercisesCount (page: Page): number {
  return page.url().split('&').filter(el => el.startsWith('uuid=')).length
}

async function checkLatex (page: Page, callback: CallbackType) {
  await checkLatexVariation(page, 'LaTeX', 'Coopmaths', callback)
  await checkLatexVariation(page, 'LaTeX', 'Classique', callback)
  await checkLatexVariation(page, 'LaTeX', 'ProfMaquette', callback)
  await checkLatexVariation(page, 'LaTeX', 'ProfMaquetteQrcode', callback)
  await checkLatexVariation(page, 'LaTeX', 'Can', callback)
}

async function checkLatexVariation (page: Page, view: 'LaTeX' | 'AMC', variation: LatexVariation | AMCVariation, callback: CallbackType) {
  await page.locator(`button[data-tip="${view}"]`).click()
  await page.click(`input[type="radio"][value="${variation}"]`)
  await waitForLatex(page, variation)
  await callback(page, view, variation)
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

async function checkAmc (page: Page, callback: CallbackType) {
  if (!await isAmcAvailable(page)) return
  await checkLatexVariation(page, 'AMC', 'AMCcodeGrid', callback)
  await checkLatexVariation(page, 'AMC', 'AMCassociation', callback)
  await checkLatexVariation(page, 'AMC', 'manuscrits', callback)
}

async function isAmcAvailable (page: Page): Promise<boolean> {
  await page.locator('button[data-tip="AMC"]').click()
  await page.waitForTimeout(1000)
  const AmcErrorLocator = await page.getByRole('dialog').locator('.bxs-error').all()
  if (AmcErrorLocator.length > 0) {
    await page.getByRole('dialog').getByRole('button', { name: '' }).locator('.bx-x').click()
    await page.locator('.bx-x').first().click()
    return false
  }
  await page.locator('.bx-x').first().click()
  return true
}

export function getUrlParam (page: Page, param: string): string {
  const url = page.url()
  if (!url.includes(`${param}=`)) return ''
  return url.split('?')[1].split('&').filter(el => el.startsWith(`${param}=`))[0].split('=')[1]
}

import type { Page } from 'playwright'
import prefs from '../../helpers/prefs'
import { runTest } from '../../helpers/run'
import { getUrlParam, testAllViews, type Variation, type View } from '../../helpers/testAllViews'

// Exemple de test avec des paramètres définis dans les variables d'environnement :
// params=id=5A11-1&n=4&d=10&s=2-5-10&s2=4&s3=1&s4=1&cd=1 pnpm testExercice

let params = 'uuid=d7e11&id=4C20&n=5&d=10&s=12&s2=true&cd=1' // paramètres par défaut utilisés si non définis dans les variables d'environnement (voir ci-dessus)

async function test (page: Page) {
  const shellId = Object.entries(process.env).filter(([key]) => key === 'params').map(el => el[1])[0]
  if (shellId) params = shellId
  await testAllViews(page, params, callback)
  console.warn(`Les captures d'écran sont dans le dossier screenshots/${getUrlParam(page, 'id')}`)
  console.warn('N\'oubliez pas de tester les différents paramètres de votre exercice !')
  return true
}

type Scenario = {
  displayCorrectionSelectors: string[]
  isMultipleDisplayCorrectionSelectorsOnSamePage?: boolean
  isMultiplePagesView?: boolean
  navigationSelectors?: string[]
  callbackBeforeNavigation?: (page: Page, i: number) => Promise<void>
}

const callback = async (page: Page, view: View, variation: Variation) => {
  const scenario = getScenario(page, view, variation)
  if (scenario.isMultiplePagesView) {
    if (!scenario.navigationSelectors || scenario.navigationSelectors.length === 0) {
      console.error('View has multiple pages but no navigation selector is found') // Je ne sais pas pourquoi mais the throw new Error apparaît comme <empty line> dans la console et donc on ne sait pas ce qui a causé l'erreur
      throw new Error('View has multiple pages but no navigation selector is found')
    }
    if (scenario.displayCorrectionSelectors.length !== 0 && scenario.displayCorrectionSelectors.length - 1 !== scenario.navigationSelectors.length) {
      console.error('In multiple pages scenario, displayCorrectionSelectors should be empty or have the same length as scenario.navigationSelectors minus one')
      throw new Error('In multiple pages scenario, displayCorrectionSelectors should be empty or have the same length as scenario.navigationSelectors minus one')
    }
    for (let i = 0; i < scenario.navigationSelectors.length + 1; i++) {
      if (scenario.displayCorrectionSelectors.length !== 0) {
        await displayCorrection(page, scenario, i)
      }
      await page.waitForTimeout(100) // to limit white screenshots
      await action(page, view, variation, String(i + 1))
      if (scenario.callbackBeforeNavigation) await scenario.callbackBeforeNavigation(page, i)
      if (scenario.navigationSelectors[i] !== '' && i < scenario.navigationSelectors.length) await page.locator(scenario.navigationSelectors[i]).click()
    }
  } else {
    await displayCorrection(page, scenario, 0)
    await action(page, view, variation)
  }
}

async function displayCorrection (page: Page, scenario: Scenario, displayCorrectionSelectorIndex: number) {
  if (scenario.displayCorrectionSelectors.length === 0) return
  const displayCorrectionSelector = scenario.displayCorrectionSelectors[displayCorrectionSelectorIndex]
  if (displayCorrectionSelector === '') return
  if (scenario.isMultipleDisplayCorrectionSelectorsOnSamePage) {
    const correctionToggles = await page.locator(displayCorrectionSelector).all()
    for (let i = correctionToggles.length - 1; i >= 0; i--) {
      await correctionToggles[i].click()
    }
  } else {
    await page.locator(displayCorrectionSelector).click()
  }
}

async function action (page: Page, view: View, variation: Variation, append?: string) {
  const id = getUrlParam(page, 'id')
  await page.screenshot({ path: `screenshots/${id}/${view}${variation !== '' ? `-${variation}` : ''}${append !== undefined ? `-${append}` : ''}.png` })
}

function getScenario (page: Page, view: View, variation: Variation): Scenario {
  const questionsNb = parseInt(getUrlParam(page, 'n'))
  if (view === 'start') {
    return {
      displayCorrectionSelectors: ['.bx-check-circle']
    }
  } else if (view === 'diaporama') {
    const callbackBeforeNavigation = async (page: Page, i: number) => {
      await page.locator('.bx-show').click()
      await action(page, view, variation, `${i + 1}-correction`)
    }
    return {
      displayCorrectionSelectors: [],
      isMultiplePagesView: true,
      navigationSelectors: new Array(questionsNb).fill('.bx-skip-next'),
      callbackBeforeNavigation
    }
  } else if (view === 'apercu') {
    return {
      displayCorrectionSelectors: ['.bx-toggle-left'],
    }
  } else if (view === 'eleve') {
    if (variation === 'Une page par question') {
      const navigationSelectors = []
      for (let i = 0; i < questionsNb - 1; i++) {
        navigationSelectors.push(`#questionTitleID${i + 1}`)
      }
      return {
        displayCorrectionSelectors: new Array(questionsNb).fill('.bx-toggle-right:not(.hidden .bx-toggle-right)'),
        isMultiplePagesView: true,
        navigationSelectors
      }
    } else if (variation === 'Course aux nombres') {
      return {
        displayCorrectionSelectors: [],
        isMultiplePagesView: true,
        navigationSelectors: new Array(questionsNb - 1).fill('.bxs-chevron-right')
      }
    } else if (variation === 'Toutes les questions sur une page') {
      return {
        displayCorrectionSelectors: ['.bx-toggle-right'],
        isMultipleDisplayCorrectionSelectorsOnSamePage: true
      }
    } else if (variation === 'Tous les exercices sur une page') {
      return {
        displayCorrectionSelectors: ['text=Voir la correction']
      }
    }
  }
  return {
    displayCorrectionSelectors: [],
  }
}

if (process.env.CI) {
  // utiliser pour les tests d'intégration
  prefs.headless = true
  runTest(test, import.meta.url, { pauseOnError: false })
} else {
  runTest(test, import.meta.url, { pauseOnError: true })
}

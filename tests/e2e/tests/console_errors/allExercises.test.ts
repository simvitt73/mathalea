import { runSeveralTests } from '../../helpers/run.js'
import type { Locator, Page } from 'playwright'
import { logError as lgE, log as lg, getFileLogger } from '../../helpers/log'
import prefs from '../../helpers/prefs.js'
import { findStatic, findUuid } from '../../helpers/filter.js'
import { createIssue } from '../../helpers/issue.js'
import { rangeMinMax } from '../../../../src/lib/outils/nombres'

const logConsole = getFileLogger('exportConsole', { append: true })

function log (...args: unknown[]) {
  lg(args)
  logConsole(args)
}

function logError (...args: unknown[]) {
  lgE(args)
  logConsole(args)
}

function logDebug (...args: unknown[]) {
  if (process.env.CI && process.env.DEBUG !== null && process.env.DEBUG !== undefined) {
    if ((process.env.DEBUG as string).replaceAll(' ', '') === 'DEBUG') {
      log(args)
    }
  }
}

type Form = {
  description: string,
  locator: Locator,
  type: 'check' | 'num' | 'text',
  values: string[] | number[] | boolean[]
}

async function getForms (page: Page) {
  const settingsLocator = page.locator('#settings0')
  const formChecks: Form[] = []
  for (let i = 0; i < 5; i++) {
    const formCheck = settingsLocator.locator(`#settings-check${i + 1}-0`)
    if (await formCheck.isVisible()) {
      const label = formCheck.locator('xpath=preceding-sibling::label')
      formChecks.push({
        description: await label.innerHTML(),
        locator: formCheck,
        type: 'check',
        values: [true, false]
      })
    }
  }
  const formNums: Form[] = []
  for (let i = 0; i < 5; i++) {
    const formNum = settingsLocator.locator(`#settings-formNum${i + 1}-0`)
    if (await formNum.isVisible()) {
      const label = formNum.locator('xpath=preceding-sibling::label')
      const min = Number(await formNum.getAttribute('min'))
      const max = Number(await formNum.getAttribute('max'))
      if (max < min) {
        logError('Max should be greater than min', 'url', page.url(), 'formulaire:', `#settings-formNum${i + 1}-0`, 'label:', label, 'min:', min, 'max:', max)
        throw new Error('Max should be greater than min')
      }
      formNums.push({
        description: await label.innerHTML(),
        locator: formNum,
        type: 'num',
        values: rangeMinMax(min, max)
      })
    }
  }
  const formTexts: Form[] = []
  for (let i = 0; i < 5; i++) {
    const formText = settingsLocator.locator(`#settings-formText${i + 1}-0`)
    if (await formText.isVisible()) {
      const parent = formText.locator('..')
      const label = parent.locator('xpath=preceding-sibling::label')
      const dataTip = await parent.getAttribute('data-tip')
      formTexts.push({
        description: await label.innerHTML(),
        locator: formText,
        type: 'text',
        values: getAllNumbersFromString(dataTip || '')
      })
    }
  }
  return { formTexts, formChecks, formNums }
}

function getAllNumbersFromString (inputString: string) {
  const regex = /\d+/g // Regex pattern to match one or more digits
  const matches = inputString.match(regex)
  return matches ? matches.map(Number) : []
}

async function action (page: Page) {
  // clic sur nouvel énoncé 3 fois
  const buttonNewData = page.getByRole('button', { name: 'Nouvel énoncé ' })
  logDebug('Actualier (nouvel énoncé) 3 fois')
  await buttonNewData.click({ clickCount: 3 })
  logDebug('fin Actualier (nouvel énoncé) 3 fois')
  // Active le mode interactif
  const activateInteractivityButton = page.getByRole('button', { name: 'Rendre interactif' })
  if (await activateInteractivityButton.isVisible()) {
    await activateInteractivityButton.click()
    logDebug('Active le mode interactif')
    // selectionne les questions
    const questionSelector = 'li[id^="exercice0Q"]'
    await page.waitForSelector(questionSelector)
    log('new URL (mode interactif): ' + page.url())
    const locators = await page.locator(questionSelector).all()
    log('nbre de questions:' + locators.length)
    // => TODOS à poursuivre
    // Cliquer sur vérifier les données
    const buttonVerifier = page.locator('#verif0')
    logDebug('Vérifier les réponses')
    await buttonVerifier.click()
    await page.waitForSelector('article + div')
    const buttonResult = await page.locator('article + div').innerText()
    log(buttonResult)
    logDebug('Actualier (nouvel énoncé) 3 fois')
    await buttonNewData.click({ clickCount: 3 })
    logDebug('fin Actualier (nouvel énoncé) 3 fois')
  } else {
    // MGu : obligé car parfois on rate l'exception car trop rapide
    // await new Promise((resolve) => setTimeout(resolve, 1000)) // GV : Si on attend 1 seconde après chaque cas, il va falloir 1 an si on veut tester toutes les possibilités
  }
}

async function checkEachCombinationOfParams (page: Page) {
  logDebug('On cherche les formulaires de paramètres')
  const { formChecks, formNums, formTexts } = await getForms(page)
  logDebug('fin : On cherche les formulaires de paramètres')
  // On range par ordre décroissant pour facilement exclure les formulaires vides
  const allForms = [formNums, formTexts, formChecks].sort((a, b) => b.length - a.length)
  const forms1 = allForms[0]
  const forms2 = allForms[1]
  const forms3 = allForms[2]

  logDebug('On vérifie chaque combinaison de paramètres')
  if (forms1.length === 0) {
    logDebug('Les formulaires sont tous vides')
    await action(page)
  } else {
    for (const form1 of forms1) {
      logDebug('On vérifie chaque valeur du premier type de formulaire')
      for (const value1 of form1.values) {
        await setParam(form1, value1)
        if (forms2.length === 0) {
          logDebug('Le deuxième type de formulaire est vide')
          await action(page)
        } else {
          for (const form2 of forms2) {
            logDebug('On vérifie chaque valeur du deuxième type de formulaire')
            for (const value2 of form2.values) {
              await setParam(form2, value2)
              if (forms3.length === 0) {
                logDebug('Le troisième type de formulaire est vide')
                await action(page)
              } else {
                for (const form3 of forms3) {
                  logDebug('On vérifie chaque valeur du troisième type de formulaire')
                  for (const value3 of form3.values) {
                    await setParam(form3, value3)
                    await action(page)
                  }
                  logDebug('fin : On vérifie chaque valeur du troisième type de formulaire')
                }
              }
            }
            logDebug('fin : On vérifie chaque valeur du deuxième type de formulaire')
          }
        }
      }
      logDebug('fin : On vérifie chaque valeur du premier type de formulaire')
    }
  }
  logDebug('fin : On vérifie chaque combinaison de paramètres')
}

async function setParam (form: Form, value: string | number | boolean) {
  logDebug('Set les paramètres')
  if (form.type === 'check') {
    if (value) {
      await form.locator.check()
    } else {
      await form.locator.uncheck()
    }
  }
  if (form.type === 'num') {
    await form.locator.fill(value.toString())
  }
  if (form.type === 'text') {
    await form.locator.fill(value.toString())
  }
  logDebug('fin Set les paramètres')
}

async function getConsoleTest (page: Page, urlExercice: string) {
  log(urlExercice)
  // on configure à 5 min le timeout
  page.setDefaultTimeout(5 * 60 * 1000)

  // await page.reload()
  const messages: string[] = []

  try {
    page.on('pageerror', msg => {
      if (msg.message !== 'Erreur de chargement de Mathgraph') { // mtgLoad : 3G22
        messages.push(page.url() + ' ' + msg.stack)
        logError(msg)
      }
    })
    page.on('crash', msg => {
      messages.push(page.url() + ' ' + msg)
      logError(msg)
    })
    // Listen for all console events and handle errors
    page.on('console', msg => {
      // if (msg.type() === 'error') {
      if (!msg.text().includes('[vite]') &&
          !msg.text().includes('[bugsnag] Loaded!') &&
          !msg.text().includes('No character metrics for') && // katex
          !msg.text().includes('LaTeX-incompatible input') && // katex
          !msg.text().includes('mtgLoad') && // mtgLoad : 3G22
          !msg.text().includes('MG32div0') && // MG32div0 : 3G22
          !msg.text().includes('UserFriendlyError: Le chargement de mathgraph') &&
          !msg.location().url.includes('mathgraph32')
      ) {
        if (!msg.text().includes('<HeaderExercice>')) {
          messages.push(page.url() + ' ' + msg.text())
        }
      }
      // }
    })

    logDebug('On charge la page')
    await page.goto(urlExercice)
    await page.waitForLoadState('networkidle')
    logDebug('fin : On charge la page')

    // Correction
    // On cherche les questions
    logDebug('On cherche les questions')
    await page.waitForSelector('div.mb-5>ul>div#consigne0-0')
    logDebug('fin : On cherche les questions')
    // on clique sur nouvel énoncé 3 fois pour chaque combinaison de paramètres
    await checkEachCombinationOfParams(page)
    // Paramètres ça va les refermer puisqu'ils sont ouverts par défaut
    const buttonParam = page.getByRole('button', { name: 'Changer les paramètres de l\'' })
    logDebug('Ferme les paramètres ')
    if (await buttonParam.isVisible()) {
      await buttonParam.click()
    }
    if (messages.length > 0) {
      logError(messages)
      logError(`Il y a ${messages.length} erreurs : ${messages.join('\n')}`)
      await createIssue(urlExercice, messages, ['console'], log)
      return 'KO'
    }
  } catch (error) {
    // si une exception comme timeout: on récupère la requete
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    messages.push('erreur:' + message)
    logError(messages)
    logError(`Il y a ${messages.length} erreurs : ${messages.join('\n')}`)
    if (!message.includes('net::ERR_CONNECTION_REFUSED')) {
      // le serveur ne répond pas... si net::ERR_CONNECTION_REFUSED
      await createIssue(urlExercice, messages, ['console'], log)
    }
    return 'KO'
  }
  return 'OK'
}

async function testRunAllLots (filter: string) {
  // return testAll(page, '6e/6G23')
  const uuids = filter.includes('dnb') ? await findStatic(filter) : await findUuid(filter)
  for (let i = 0; i < uuids.length && i < 300; i += 10) {
    const ff : ((page: Page) => Promise<boolean>)[] = []
    for (let k = i; k < i + 10 && k < uuids.length; k++) {
      const myName = 'test' + uuids[k][1]
      const f = async function (page: Page) {
        // Listen for all console logs
        page.on('console', msg => {
          logConsole(msg.text())
        })
        const hostname = local ? `http://localhost:${process.env.CI ? '80' : '5173'}/alea/` : 'https://coopmaths.fr/alea/'
        log(`uuid=${uuids[k][0]} exo=${uuids[k][1]} i=${k} / ${uuids.length}`)
        const resultReq = await getConsoleTest(page, `${hostname}?uuid=${uuids[k][0]}&id=${uuids[k][1].substring(0, uuids[k][1].lastIndexOf('.')) || uuids[k][1]}&alea=${alea}&testCI`)
        log(`Resu: ${resultReq} uuid=${uuids[i][0]} exo=${uuids[k][1]}`)
        return resultReq === 'OK'
      }
      Object.defineProperty(f, 'name', { value: myName, writable: false })
      ff.push(f)
    }
    runSeveralTests(ff, import.meta.url, { pauseOnError: false, silent: false, debug: false })
  }
}

const alea = 'e906e'
const local = true

if (process.env.CI && process.env.NIV !== null && process.env.NIV !== undefined) {
  // utiliser pour les tests d'intégration
  const filter = (process.env.NIV as string).replaceAll(' ', '')
  prefs.headless = true
  log(filter)
  testRunAllLots(filter)
} else {
  // prefs.headless = true
  // prefs.slowMo = 100
  // testRunAllLots('can')
  // testRunAllLots('6e')
  // testRunAllLots('5e')
  // testRunAllLots('4e')
  // testRunAllLots('3e')
  // testRunAllLots('2e')
  // testRunAllLots('1e')
  // testRunAllLots('QCM')
  // testRunAllLots('TEx')
  // testRunAllLots('TSpe')
  // testRunAllLots('techno1')
  // testRunAllLots('QCMBac')
  // testRunAllLots('QCMBrevet')
  // testRunAllLots('QCMStatiques')

  // pour faire un test sur un exercice particulier:
  testRunAllLots('4e/4C32.js')
  // testRunAllLots('2e/2G12-6')
}

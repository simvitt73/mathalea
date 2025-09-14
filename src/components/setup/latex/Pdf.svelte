<script lang="ts">
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte'
  import { get } from 'svelte/store'
  import { Carousel, initTE } from 'tw-elements'
  import type TypeExercice from '../../../exercices/Exercice'
  import Latex, {
      doesLatexNeedsPics,
      type LatexFileInfos,
      type latexFileType
  } from '../../../lib/Latex'
  import {
      mathaleaGetExercicesFromParams,
  } from '../../../lib/mathalea.js'
  import { darkMode, exercicesParams } from '../../../lib/stores/generalStore'
  import { referentielLocale } from '../../../lib/stores/languagesStore'
  import Footer from '../../Footer.svelte'
  import NavBar from '../../shared/header/NavBar.svelte'
  import SimpleCard from '../../shared/ui/SimpleCard.svelte'
  import FormConfigSection from './FormConfigSection.svelte'
  import { decodeBase64, encodeBase64 } from './LatexConfig'
  import PdfResult from './PdfResult.svelte'

  let pdfParam = ''
  let showAdvanced = false; // toggle pour les paramètres avancés



  const url = new URL(window.location.href)
  const decoded = decodeBase64(url.searchParams.get("pdfParam") || "") as Partial<LatexFileInfos>

  /**
   * Toutes les variables configurables par l'interface WEB
   * qui adaptent la sortie PDF
   */
  let latexFileInfos: LatexFileInfos = {
    title: '',
    reference: '',
    subtitle: '',
    style: 'ProfMaquette',
    fontOption: 'StandardFont',
    tailleFontOption: 12,
    dysTailleFontOption: 14,
    correctionOption: 'AvecCorrection',
    qrcodeOption: 'SansQrcode',
    typeFiche: 'Fiche',
    durationCanOption: '9 min',
    titleOption: 'SansTitre',
    nbVersions: 1,
    exos: {},      // tu peux garder vide par défaut
    ...decoded     // ⚡ écrase les valeurs par défaut si présente
  }

  url.searchParams.set('pdfParam', encodeBase64(latexFileInfos))

  const imgStylePartialUrls = {
    Coopmaths: 'images/exports/export-coopmaths',
    Classique: 'images/exports/export-classique',
    ProfMaquette: 'images/exports/export-profmaquette',
    ProfMaquetteQrcode: 'images/exports/export-profmaquette-qrcode',
    Can: 'images/exports/export-can',
  }
  let exercices: TypeExercice[]
  let latexFile: latexFileType = {
    contents: { preamble: '', intro: '', content: '', contentCorr: '' },
    latexWithoutPreamble: '',
    latexWithPreamble: '',
  }
  let isExerciceStaticInTheList = false
  let picsWanted: boolean
  let promise: Promise<void>
  

  const latex = new Latex()

  async function initExercices(indexesToLoad?: number[]) {
    log('initExercices')
    const interfaceParams = get(exercicesParams)
    interfaceParams.forEach((e) => {
      e.interactif = '0'
    })
    exercices = await mathaleaGetExercicesFromParams(interfaceParams)
    latex.addExercices(exercices.filter((ex, index) => ex.typeExercice !== 'html' && (!indexesToLoad || indexesToLoad.includes(index))))
    isExerciceStaticInTheList = latex.isExerciceStaticInTheList()
    latexFile.contents = await latex.getContents(latexFileInfos)
    picsWanted = doesLatexNeedsPics(latexFile.contents)
  }

  async function updateLatexWithAbortController() {
    const clone = UpdateController.update()
    if (clone.signal?.aborted) {
      return Promise.reject(
        new DOMException(
          'Aborted in updateLatexWithAbortController',
          'AbortError',
        ),
      )
    }

    return new Promise<void>(async (resolve, reject) => {
      // Listen for abort event on signal
      const rej = () => {
        log('reject')
        clone.signal?.removeEventListener('abort', rej)
        reject(
          new DOMException(
            'Aborted in updateLatexWithAbortController',
            'AbortError',
          ),
        )
      }
      clone.signal?.addEventListener('abort', rej)
      // Something fake async
      await updateLatex(clone)
        .then(() => {
          clone.signal?.removeEventListener('abort', rej)
          log('Promise resolu')
          resolve()
        })
        .catch((err) => {
          reject(new DOMException(`Aborted : ${err.message}`, 'AbortError'))
        })
    })
  }

  async function updateLatex(clone: LatexFileInfos) {
    try {
      log('updateLatex')
      // await new Promise((resolve) => setTimeout(resolve, 10000))
      latexFile = await latex.getFile(clone)
      log('fin updateLatex')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        // nouvelle demande de fichier LATEX demandée
        throw error
      }
      console.error('Erreur lors de la création du code LaTeX :', error)
      latexFile.latexWithoutPreamble = '% Erreur à signaler'
    }
  }

  class UpdateController {
    static controller: AbortController | undefined
    static update() {
      if (UpdateController.controller === undefined) {
        UpdateController.controller = new AbortController()
      } else {
        UpdateController.controller.abort()
        UpdateController.controller = new AbortController()
      }
      const clone = structuredClone(latexFileInfos)
      clone.signal = UpdateController.controller.signal
      return clone
    }
  }

  const debug = url.searchParams.get('log') === '5' || false
  function log(str: string) {
    if (debug) {
      console.info(str)
    }
  }

  $: {
    if (latex.exercices.length > 0) {
      log('update')
      latexFileInfos = {
        ...latexFileInfos,
        exos: {
          ...latexFileInfos.exos
          // les blocrep sont déjà des sous-objets clonés quand tu les modifies
        }
      }
      pdfParam = encodeBase64(latexFileInfos)
      url.searchParams.set('pdfParam', pdfParam)
      history.replaceState(null, "", url)  // change l’URL sans recharger

      promise = updateLatexWithAbortController().catch((err) => {
        if (err.name === 'AbortError') {
          log('Promise Aborted')
        } else {
          log('Promise Rejected')
        }
      })
    }
  }

  async function forceUpdate() {
    log('forceUpdate')
    latexFileInfos.title = latexFileInfos.title
  }

  onMount(async () => {
    initTE({ Carousel })
    promise = initExercices()
      .then(() => updateLatexWithAbortController())
      .catch((err) => {
        if (err.name === 'AbortError') {
          log('Promise Aborted')
        } else {
          log('Promise Rejected')
        }
      })
    document.addEventListener('updateAsyncEx', forceUpdate)
  })

  onDestroy(async () => {
    document.removeEventListener('updateAsyncEx', forceUpdate)
  })

  beforeUpdate(async () => {
    // console.log('beforeUpdate')
  })

  afterUpdate(async () => {
    // console.log('afterUpdate')
  })

 
</script>

<main
  class="bg-coopmaths-canvas dark:bg-coopmathsdark-canvas {$darkMode.isActive
    ? 'dark'
    : ''}"
>
  <NavBar
    subtitle="PDF"
    subtitleType="export"
    handleLanguage="{() => {}}"
    locale="{$referentielLocale}"
  />

  <section
    class="px-4 py-0 bg-coopmaths-canvas dark:bg-coopmathsdark-canvas"
  >

    <h1
      class="text-center md:text-left text-coopmaths-struct dark:text-coopmathsdark-struct text-2xl md:text-4xl font-bold"
    >
      Visualisation du PDF     
         <button
          class="mx-2 tooltip tooltip-left tooltip-neutral"
          data-tip="Changer les paramètres du PDF"
          type="button"
          on:click="{() => {
            showAdvanced = !showAdvanced
          }}"
        >
          <i
            class="text-coopmaths-action hover:text-coopmaths-action-lightest dark:text-coopmathsdark-action dark:hover:text-coopmathsdark-action-lightest bx bx-slider"
          ></i>
        </button>
    </h1>
    {#if showAdvanced}
    <div
      class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <div
        class="flex flex-col w-full md:flex-row justify-between rounded-lg bg-coopmaths-canvas-dark shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-coopmathsdark-canvas-dark"
      >
        <div class="flex flex-col py-4 pl-16 w-2/3">
          <FormConfigSection
            {latex}
            bind:latexFileInfos
            {promise}
          />
        </div>
        <!-- Carousel de vignette pour les aperçus -->
        <div class="flex justify-center w-full md:w-1/3">
          <div
            id="carouselExampleSlidesOnly"
            class="relative w-2/3 md:w-full"
            data-te-carousel-init
            data-te-ride="carousel"
          >
            <div
              class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
            >
              <!-- first item -->
              <div
                class="relative float-left -mr-[100%] w-full transition-transform duration-[300ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active
              >
                <img
                  src="{`${imgStylePartialUrls[latexFileInfos.style]}-thumb1.png`}"
                  alt="{latexFileInfos.style} image-1"
                  class="block h-auto w-full rounded-r-lg"
                />
              </div>
              <!-- second item -->
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[300ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  src="{`${imgStylePartialUrls[latexFileInfos.style]}-thumb2.png`}"
                  alt="{latexFileInfos.style} image-2"
                  class="block h-auto w-full rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimpleCard icon="{''}" title="{'Éléments de titres'}">
        <div class="flex flex-col w-full justify-start items-start space-y-2">
          <input
            type="text"
            id="export-latex-titre-input"
            class="border-1 w-full disabled:opacity-20 border-coopmaths-action dark:border-coopmathsdark-action focus:border-coopmaths-action-lightest dark:focus:border-coopmathsdark-action-lightest focus:outline-0 focus:ring-0 focus:border-1 bg-coopmaths-canvas dark:bg-coopmathsdark-canvas text-sm text-coopmaths-corpus-light dark:text-coopmathsdark-corpus-light placeholder:opacity-40"
            placeholder="{latexFileInfos.style === 'Can'
              ? 'Course aux nombres'
              : 'Titre'}"
            bind:value="{latexFileInfos.title}"
          />
          <input
            type="text"
            id="export-latex-reference-input"
            class=" border-1 w-full disabled:opacity-20 border-coopmaths-action dark:border-coopmathsdark-action focus:border-coopmaths-action-lightest dark:focus:border-coopmathsdark-action-lightest focus:outline-0 focus:ring-0 focus:border-1 bg-coopmaths-canvas dark:bg-coopmathsdark-canvas text-sm text-coopmaths-corpus-light dark:text-coopmathsdark-corpus-light placeholder:opacity-40"
            placeholder="{latexFileInfos.style === 'Coopmaths' ||
            latexFileInfos.style === 'ProfMaquetteQrcode' ||
            latexFileInfos.style === 'ProfMaquette'
              ? 'Référence'
              : 'Haut de page gauche'}"
            bind:value="{latexFileInfos.reference}"
            disabled="{latexFileInfos.style === 'Can'}"
          />
          <input
            type="text"
            id="export-latex-soustitre-input"
            class="border-1 w-full disabled:opacity-20 border-coopmaths-action dark:border-coopmathsdark-action focus:border-coopmaths-action-lightest dark:focus:border-coopmathsdark-action-lightest focus:outline-0 focus:ring-0 focus:border-1 bg-coopmaths-canvas dark:bg-coopmathsdark-canvas text-sm text-coopmaths-corpus-light dark:text-coopmathsdark-corpus-light placeholder:opacity-40"
            placeholder="{latexFileInfos.style === 'Coopmaths' ||
            latexFileInfos.style === 'ProfMaquetteQrcode' ||
            latexFileInfos.style === 'ProfMaquette'
              ? 'Sous-titre / Chapitre'
              : 'Pied de page droit'}"
            bind:value="{latexFileInfos.subtitle}"
            disabled="{latexFileInfos.style === 'Can'}"
          />
        </div>
      </SimpleCard>
      <SimpleCard icon="{''}" title="{'Nombre de versions des exercices'}">
        <input
          type="number"
          id="export-latex-nb-versions-input"
          class="min-w-14 border-1 w-1/5 border-coopmaths-action dark:border-coopmathsdark-action focus:border-coopmaths-action-lightest dark:focus:border-coopmathsdark-action-lightest focus:outline-0 focus:ring-0 focus:border-1 bg-coopmaths-canvas dark:bg-coopmathsdark-canvas text-sm text-coopmaths-corpus-light dark:text-coopmathsdark-corpus-light"
          name="numberOfVersions"
          maxlength="2"
          min="1"
          max="20"
          bind:value="{latexFileInfos.nbVersions}"
        />
      </SimpleCard>
    </div>
    {/if}
    <div
      class="shadow-md bg-coopmaths-canvas-dark dark:bg-coopmathsdark-canvas-dark text-coopmaths-corpus dark:text-coopmathsdark-corpus w-full overflow-y-auto overflow-x-scroll text-xs h-[70vh]">
      {#await promise}
        <p>Chargement en cours...</p>
      {:then}
        <PdfResult {latex} {latexFileInfos} />
      {/await}
    </div>
  </section>
  <footer>
    <Footer />
  </footer>
</main>

<style>
  footer {
    margin-top: auto;
  }
</style>

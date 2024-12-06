<script lang="ts">
  import Diaporama from './setup/diaporama/Diaporama.svelte'
  import Eleve from './display/eleve/Eleve.svelte'
  import ConfigEleve from './setup/configEleve/ConfigEleve.svelte'
  import Latex from './setup/latex/Latex.svelte'
  import {
    darkMode,
    exercicesParams,
    freezeUrl,
    globalOptions,
    isInIframe
  } from '../lib/stores/generalStore'
  import { context } from '../modules/context.js'
  import {
    ElementButtonInstrumenpoche,
    ElementInstrumenpoche
  } from '../modules/ElementInstrumenpoche.js'
  import Amc from './setup/amc/Amc.svelte'
  import Anki from './setup/anki/Anki.svelte'
  import Moodle from './setup/moodle/Moodle.svelte'
  import Start from './setup/start/Start.svelte'
  import { onMount } from 'svelte'
  import {
    mathaleaUpdateExercicesParamsFromUrl,
    mathaleaUpdateUrlFromExercicesParams
  } from '../lib/mathalea'
  import Can from './display/can/Can.svelte'
  import { canOptions } from '../lib/stores/canStore'
  import type { CanSolutionsMode } from '../lib/types/can'
  import { updateReferentielLocaleFromURL } from '../lib/stores/languagesStore'
  import Alacarte from './setup/alacarte/Alacarte.svelte'
  import { tick } from 'svelte'

  let isInitialUrlHandled = false

  context.versionMathalea = 3
  if (customElements.get('alea-instrumenpoche') === undefined) {
    customElements.define('alea-instrumenpoche', ElementInstrumenpoche)
    customElements.define(
      'alea-buttoninstrumenpoche',
      ElementButtonInstrumenpoche
    )
  }

  // let InterfaceExercicesParams : any
  // exercicesParams.subscribe(value => {
  //   console.log('exercicesParams updated')
  //   if (InterfaceExercicesParams){
  //     if (JSON.stringify(InterfaceExercicesParams) !== JSON.stringify(value)){
  //       console.log('exercicesParams updated and difference')
  //       console.log(JSON.stringify(InterfaceExercicesParams))
  //     }
  //     InterfaceExercicesParams = value
  //   } else {
  //     InterfaceExercicesParams = value
  //   }
  //   console.log(JSON.stringify(value))
  // })

  // Gestion des recorders (Moodle, Capytale, etc. )
  // Lorsque la page d'accueil est dans un iFrame, l'URL est bloquée et les boutons d'exports cachés
  const url = new URL(window.location.href)
  const recorder = url.searchParams.get('recorder')
  if (recorder !== null) {
    isInIframe.set(true)
    freezeUrl.set(true)
  } else {
    isInIframe.set(false)
  }

  // Gestion des paramètres de la CAN
  const canDuration = url.searchParams.get('canD')
  if (canDuration !== null) {
    $canOptions.durationInMinutes = parseInt(canDuration)
  }
  const canSub = url.searchParams.get('canT')
  if (canSub !== null) {
    $canOptions.subTitle = canSub
  }
  const canSolAccess = url.searchParams.get('canSA')
  if (canSolAccess !== null) {
    $canOptions.solutionsAccess = canSolAccess === 'true'
  }
  const canSolMode = url.searchParams.get('canSM')
  if (canSolMode !== null) {
    $canOptions.solutionsMode = canSolMode as CanSolutionsMode
  }
  const canIsInteractive = url.searchParams.get('canI')
  if (canIsInteractive !== null) {
    $canOptions.isInteractive = canIsInteractive === 'true'
  }
  onMount(handleInitialUrl)

  let currentView = $globalOptions.v;

  $: {
    // 2024-12-6
    // On force la mise à jour du DOM pour éviter que 2 components se retrouvent dans le DOM en même temps
    if ($globalOptions.v !== currentView) {
      currentView = null;
      tick().then(() => {
        currentView = $globalOptions.v;
      });
    }
  }

  $: {
    if (isInitialUrlHandled) {
      mathaleaUpdateUrlFromExercicesParams($exercicesParams)
    }
    context.isDiaporama = $globalOptions.v === 'diaporama'
    if ($globalOptions.v === 'latex') {
      context.isHtml = false
    } else {
      context.isHtml = true
    }
    if ($globalOptions.v === 'confeleve') {
      context.isHtml = false
    }
    if ($globalOptions.v === 'alacarte') {
      context.isHtml = false
    }
    if ($globalOptions.v === 'amc') {
      context.isAmc = true
      context.isHtml = false
    } else {
      context.isAmc = false
    }
    context.vue = ''
    if ($globalOptions.v === 'diaporama') context.vue = 'diap' // for compatibility
    if ($globalOptions.v === 'latex') context.vue = 'latex' // for compatibility
    if ($globalOptions.v === 'can') context.vue = 'can' // for compatibility
    // lorsque l'éditeur sera intégré à la v3, il faudra mettre à true cette propriété pour l'editeur
    context.isInEditor = false
  }

  function handleInitialUrl () {
    updateReferentielLocaleFromURL()
    const urlOptions = mathaleaUpdateExercicesParamsFromUrl()
    globalOptions.update(() => {
      return urlOptions
    })
    isInitialUrlHandled = true
  }

  function isDevMode () {
    return window.location.href.startsWith('http://localhost')
  }

</script>

<div class=" {$darkMode.isActive
  ? 'dark'
  : ''} subpixel-antialiased bg-coopmaths-canvas dark:bg-coopmathsdark-canvas" id="appComponent">
  {#if currentView === 'diaporama' || currentView === 'overview'}
    <Diaporama />
  {:else if currentView === 'can'}
    <Can />
  {:else if currentView === 'eleve'}
    <Eleve />
  {:else if currentView === 'latex'}
    <Latex />
  {:else if currentView === 'alacarte'}
    <Alacarte />
  {:else if currentView === 'confeleve'}
    <ConfigEleve />
  {:else if currentView === 'amc'}
    <Amc />
  {:else if currentView === 'moodle'}
    <Moodle />
  {:else if currentView === 'anki'}
    <Anki />
  {:else}
    <Start />
  {/if}
</div>

{#if isDevMode()}
  <dialog
    id="notifDialog"
    class="rounded-xl p-6 bg-coopmaths-canvas text-coopmaths-corpus dark:bg-coopmathsdark-canvas-dark dark:text-coopmathsdark-corpus-light shadow-lg"
  ></dialog>
{/if}

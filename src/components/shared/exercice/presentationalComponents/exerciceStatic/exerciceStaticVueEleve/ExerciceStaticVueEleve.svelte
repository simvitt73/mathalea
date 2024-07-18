<script lang="ts">
  import { retrieveResourceFromUuid } from '../../../../../../lib/components/refUtils'
  import {
    resourceHasPlace,
    isStaticType,
    type JSONReferentielObject,
    isCrpeType,
    EXAMS
  } from '../../../../../../lib/types/referentiels'
  /**
   * Gestion du référentiel pour la recherche de l'uuid
   */
  import referentielStaticFR from '../../../../../../json/referentielStaticFR.json'
  import referentielStaticCH from '../../../../../../json/referentielStaticCH.json'

  import referentielBibliotheque from '../../../../../../json/referentielBibliotheque.json'
  import type { HeaderPropsForEleveStatic } from '../../../../../../lib/types/ui'
  import {
    globalOptions,
    isMenuNeededForExercises
  } from '../../../../../../lib/stores/generalStore'
  import HeaderExerciceVueEleve from '../../shared/HeaderExerciceVueEleve.svelte'
  import ButtonCycle from '../../../../forms/ButtonCycle.svelte'
  import ButtonText from '../../../../forms/ButtonText.svelte'
  // on rassemble les deux référentiel statique
  const allStaticReferentiels: JSONReferentielObject = {
    ...referentielBibliotheque,
    ...referentielStaticFR,
    ...referentielStaticCH
  }
  // on supprime les entrées par thème qui entraîne des doublons
  delete allStaticReferentiels['Brevet des collèges par thème - APMEP']
  delete allStaticReferentiels['BAC par thème - APMEP']
  delete allStaticReferentiels['CRPE (2015-2019) par thème - COPIRELEM']
  delete allStaticReferentiels['CRPE (2022-2023) par thème']
  delete allStaticReferentiels['E3C par thème - APMEP']
  delete allStaticReferentiels['EVACOM par thème']

  export let uuid: string
  export let indiceExercice: number
  export let indiceLastExercice: number
  export let zoomFactor: string
  export let isSolutionAccessible: boolean
  const foundResource = retrieveResourceFromUuid(allStaticReferentiels, uuid)
  const resourceToDisplay =
    isStaticType(foundResource) || isCrpeType(foundResource) ? { ...foundResource } : null
  const exercice =
    resourceToDisplay === null
      ? null
      : {
          png:
            typeof resourceToDisplay.png === 'string'
              ? [resourceToDisplay.png]
              : resourceToDisplay.png,
          pngCor:
            typeof resourceToDisplay.pngCor === 'string'
              ? [resourceToDisplay.pngCor]
              : resourceToDisplay.pngCor
        }
  let isCorrectionVisible = false
  let headerExerciceProps: HeaderPropsForEleveStatic
  if (resourceToDisplay !== null) {
    console.log(JSON.stringify(resourceToDisplay))
    headerExerciceProps = {
      title: '',
      indiceExercice
    }
    if (resourceHasPlace(resourceToDisplay)) {
      headerExerciceProps.title = `${resourceToDisplay.typeExercice.toUpperCase()} ${
        resourceToDisplay.mois || ''
      } ${resourceToDisplay.annee} ${resourceToDisplay.lieu} - ${resourceToDisplay.numeroInitial}`
    } else {
      headerExerciceProps.title = resourceToDisplay.titre ?? resourceToDisplay.uuid
    }
  }

  let noCorrectionAvailable = false

  function handleNoCorrectionAvailable () {
    noCorrectionAvailable = true
  }

  function switchCorrectionVisible () {
    isCorrectionVisible = !isCorrectionVisible
  }
</script>

<HeaderExerciceVueEleve
  {...headerExerciceProps}
  {indiceExercice}
  showNumber={indiceLastExercice > 0 && $globalOptions.presMode !== 'un_exo_par_page'}
  isMenuNeededForExercises={$isMenuNeededForExercises}
  presMode={$globalOptions.presMode}
/>

<div class="flex flex-col w-full mb-10 lg:mb-20">
  <div
    class="{resourceToDisplay?.typeExercice === 'static'
      ? 'block'
      : 'hidden'} ml-2 lg:ml-6 mb-2 lg-mb-6"
  >
    <ButtonCycle orderedEntries={['Indice', 'Réponse', 'Solution détaillée', 'Tout masquer']} />
  </div>
  <!-- Bouton pour examen -->
  <div
    class={$globalOptions.isSolutionAccessible &&
    resourceToDisplay &&
    EXAMS.includes(resourceToDisplay?.typeExercice)
      ? 'flex ml-2 lg:ml-6 mb-2 lg-mb-6 pt-2 pb-6'
      : 'hidden'}
  >
    <ButtonText
      text={isCorrectionVisible ? 'Masquer la correction' : 'Voir la correction'}
      icon={isCorrectionVisible ? 'bx-hide' : 'bx-show'}
      class="py-[2px] px-2 text-[0.7rem] w-36"
      inverted={true}
      on:click={switchCorrectionVisible}
    />
  </div>
  {#if exercice}
    {#each exercice.png as url}
      <img src={url} style="width: calc(45% * {zoomFactor}" alt="énoncé" class="max-lg:hidden ml-2 lg:ml-6 " />
      <img src={url} style="width: calc(100% * {zoomFactor}" alt="énoncé" class="lg:hidden ml-2 lg:ml-6 " />
    {/each}
  {/if}

  {#if $globalOptions.staticDisplayStyle.hint}
    {#if resourceToDisplay && Object.keys(resourceToDisplay).includes('pngIndice')}
      <div
        class="relative border-l-coopmaths-warn-800 dark:border-l-coopmathsdark-warn border-l-[3px] text-coopmaths-corpus dark:text-coopmathsdark-corpus mt-6 lg:mt-2 mb-6 py-2 pl-4"
        id="hint{indiceExercice}"
      >
        <img
          src={resourceToDisplay.pngIndice}
          style="width: calc(100% * {zoomFactor}"
          alt="Indice"
        />
        <div
          class="absolute flex flex-row py-[1.5px] px-3 rounded-t-md justify-center items-center -left-[3px] -top-[15px] bg-coopmaths-warn-800 dark:bg-coopmathsdark-warn font-semibold text-xs text-coopmaths-canvas dark:text-coopmathsdark-canvas"
        >
          Indice
        </div>
        <div
          class="absolute border-coopmaths-warn-800 dark:border-coopmathsdark-warn bottom-0 left-0 border-b-[3px] w-4"
        />
      </div>
    {/if}
  {/if}

  {#if $globalOptions.staticDisplayStyle.answer && isSolutionAccessible}
    {#if resourceToDisplay && Object.keys(resourceToDisplay).includes('pngReponse')}
      <div
        class="relative border-l-coopmaths-struct-light dark:border-l-coopmathsdark-warn border-l-[3px] text-coopmaths-corpus dark:text-coopmathsdark-corpus mt-6 lg:mt-2 mb-6 py-2 pl-4"
        id="answer{indiceExercice}"
      >
        <img
          src={resourceToDisplay.pngReponse}
          style="width: calc(100% * {zoomFactor}"
          alt="Réponse"
        />
        <div
          class="absolute flex flex-row py-[1.5px] px-3 rounded-t-md justify-center items-center -left-[3px] -top-[15px] bg-coopmaths-struct-light dark:bg-coopmathsdark-struct-light font-semibold text-xs text-coopmaths-canvas dark:text-coopmathsdark-canvas"
        >
          Réponse
        </div>
        <div
          class="absolute border-coopmaths-struct-light dark:border-coopmathsdark-struct-light bottom-0 left-0 border-b-[3px] w-4"
        />
      </div>
    {/if}
  {/if}

  {#if isCorrectionVisible}
    <div
      class="relative border-l-coopmaths-struct dark:border-l-coopmathsdark-struct border-l-[3px] text-coopmaths-corpus dark:text-coopmathsdark-corpus mt-12 lg:mt-6 mb-6 py-2 pl-4"
      id="correction{indiceExercice}"
    >
      <div class="container">
        {#if exercice}
          {#each exercice.pngCor as url}
            {#if noCorrectionAvailable}
              <p class="text-red-500">Aucune correction disponible</p>
            {:else}
              <img
                src={url}
                class="p-2"
                style="width: calc(100% * {zoomFactor}"
                alt="correction"
                on:error={handleNoCorrectionAvailable}
              />
            {/if}
          {/each}
        {/if}
      </div>
      <!-- <div class="absolute border-coopmaths-struct dark:border-coopmathsdark-struct top-0 left-0 border-b-[3px] w-10" /> -->
      <div
        class="absolute flex flex-row py-[1.5px] px-3 rounded-t-md justify-center items-center -left-[3px] -top-[15px] bg-coopmaths-struct dark:bg-coopmathsdark-struct font-semibold text-xs text-coopmaths-canvas dark:text-coopmathsdark-canvas"
      >
        Correction
      </div>
      <div
        class="absolute border-coopmaths-struct dark:border-coopmathsdark-struct bottom-0 left-0 border-b-[3px] w-4"
      />
    </div>
  {/if}
</div>

<script lang="ts">
  import BasicGridModal from '../../../../shared/modal/BasicGridModal.svelte'
  import BreadcrumbHeader from '../../../../shared/header/BreadcrumbHeader.svelte'
  import { doesImageExist } from '../../../../../lib/components/images'
  import CardForStatic from '../../../../shared/ui/CardForStatic.svelte'
  import {
    isStaticType,
    type JSONReferentielEnding,
    type StaticItemInreferentiel
  } from '../../../../../lib/types/referentiels'

  export let isVisible: boolean
  export let bibliothequePathToSection: string[]
  export let bibliothequeUuidInExercisesList: string[]
  export let bibliothequeDisplayedContent: Record<string, JSONReferentielEnding>
  // let bibliothequeChoiceModal: BasicGridModal

  const buildBiblioToBeDisplayed = (): StaticItemInreferentiel[] => {
    const results: StaticItemInreferentiel[] = []
    if (bibliothequeDisplayedContent) {
      Object.values(bibliothequeDisplayedContent).forEach((item) => {
        if (isStaticType(item)) {
          results.push(item)
        }
      })
    }
    return results
  }
</script>

<!-- Fenêtre de dialogue pour le choix des exercices de la bibliothèque statique -->
<BasicGridModal bind:isDisplayed={isVisible}>
  <div slot="header">
    <BreadcrumbHeader path={bibliothequePathToSection} />
  </div>
  <div slot="content">
    <div class="mx-2 pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each buildBiblioToBeDisplayed() as exercise, i (exercise.uuid)}
          {#if doesImageExist(exercise.png)}
            <CardForStatic
              indice={'static-card-' + exercise.uuid + '-' + i.toString()}
              {exercise}
              selected={bibliothequeUuidInExercisesList.includes(exercise.uuid)}
            />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</BasicGridModal>

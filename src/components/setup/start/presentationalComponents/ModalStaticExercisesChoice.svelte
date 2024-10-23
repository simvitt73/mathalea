<script lang="ts">
  import { doesImageExist } from '../../../../lib/components/images'
  import { isStaticType, type JSONReferentielEnding, type StaticItemInReferentiel } from '../../../../lib/types/referentiels'
  import BreadcrumbHeader from '../../../shared/header/BreadcrumbHeader.svelte'
  import BasicClassicModal from '../../../shared/modal/BasicClassicModal.svelte'
  import CardForStatic from '../../../shared/ui/CardForStatic.svelte'

  export let staticExercisesChoiceModal: BasicClassicModal
  export let showStaticExercisesChoiceDialog: boolean
  export let bibliothequePathToSection: string[]
  export let bibliothequeUuidInExercisesList: string[]
  export let bibliothequeDisplayedContent: Record<string, JSONReferentielEnding>

  const buildBiblioToBeDisplayed = (): StaticItemInReferentiel[] => {
    const results: StaticItemInReferentiel[] = []
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
<BasicClassicModal
bind:this={staticExercisesChoiceModal}
bind:isDisplayed={showStaticExercisesChoiceDialog}>
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
              reversed={true}
            />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</BasicClassicModal>

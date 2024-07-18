<script lang="ts">
  import ExerciceStaticVueEleve from './exerciceStaticVueEleve/ExerciceStaticVueEleve.svelte'
  import ExerciceStaticVueProf from './exerciceStaticVueProf/ExerciceStaticVueProf.svelte'

  export let vue: 'prof' | 'eleve'
  export let uuid: string
  export let indiceExercice: number
  export let indiceLastExercice: number
  export let zoomFactor: string
  export let isSolutionAccessible: boolean
</script>

{#if vue === 'prof'}
  <ExerciceStaticVueProf
    {indiceExercice}
    {indiceLastExercice}
    {uuid}
    {zoomFactor}
    {isSolutionAccessible}
    on:exerciseRemoved
    on:exerciseRemoved
  />
{:else if vue === 'eleve'}
  <ExerciceStaticVueEleve
    {indiceExercice}
    {indiceLastExercice}
    {uuid}
    {zoomFactor}
    {isSolutionAccessible}
    on:exerciseRemoved
  />
{/if}

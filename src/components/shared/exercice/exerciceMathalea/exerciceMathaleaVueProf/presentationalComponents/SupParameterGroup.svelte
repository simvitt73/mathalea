<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { IExercice } from '../../../../../../lib/types'
  import InputNumber from '../../../../forms/InputNumber.svelte'

  export let supIndex: 1 | 2 | 3 | 4 | 5
  export let exercice: IExercice
  export let exerciceIndex: number
  export let supValue: any
  export let formNum: { titre: string; champs: string[] | number } | undefined =
    undefined

  const dispatch = createEventDispatcher()

  $: suffix = supIndex === 1 ? '' : supIndex.toString()

  $: caseACocher =
    exercice[`besoinFormulaire${suffix}CaseACocher` as keyof IExercice]
  $: texte = exercice[`besoinFormulaire${suffix}Texte` as keyof IExercice]

  function handleChange() {
    dispatch('change')
  }
</script>

{#if caseACocher}
  <div class="container">
    <label
      class="text-sm md:text-normal text-coopmaths-struct dark:text-coopmathsdark-struct font-light"
      for="settings-check{supIndex}-{exerciceIndex}"
    >
      {#if typeof caseACocher !== 'boolean'}
        {caseACocher[0]} :
      {/if}
    </label>
    <input
      name="settings-check{supIndex}"
      type="checkbox"
      id="settings-check{supIndex}-{exerciceIndex}"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      class="ml-2 bg-coopmaths-canvas-dark dark:bg-coopmathsdark-canvas border-coopmaths-action text-coopmaths-action dark:border-coopmathsdark-action dark:text-coopmathsdark-action focus:ring-1 focus:ring-coopmaths-action dark:focus:ring-coopmathsdark-action h-4 w-4 rounded cursor-pointer checked:bg-coopmaths-action"
      bind:checked={supValue}
      on:change={handleChange}
    />
  </div>
{/if}

{#if formNum}
  {#if Array.isArray(formNum.champs)}
    <div class="flex flex-col">
      <form
        id="settings-form-formNum{supIndex}-{exerciceIndex}"
        action=""
        autocomplete="off"
      >
        <label
          class="text-sm md:text-normal text-coopmaths-struct dark:text-coopmathsdark-struct font-light"
          for="settings-formNum{supIndex}-{exerciceIndex}"
          >{formNum.titre} :</label
        >
        <select
          class="flex flex-auto w-full text-coopmaths-corpus-lightest dark:text-coopmathsdark-corpus-dark border-1 border-coopmaths-action dark:border-coopmathsdark-action focus:border-coopmaths-action dark:focus:border-coopmathsdark-action-lightest focus:outline-0 focus:ring-0 focus:border-1 bg-coopmaths-canvas-dark dark:bg-coopmathsdark-canvas-dark"
          name="formNum{supIndex}"
          id="settings-formNum{supIndex}-{exerciceIndex}"
          bind:value={supValue}
          on:change={handleChange}
        >
          {#each formNum.champs as entree, i}
            <option
              value={i + 1}
              class="bg-coopmaths-canvas-dark dark:bg-coopmathsdark-canvas-dark"
              >{entree}</option
            >
          {/each}
        </select>
      </form>
    </div>
  {:else}
    <div>
      <label
        class="text-sm md:text-normal text-coopmaths-struct dark:text-coopmathsdark-struct font-light"
        for="settings-formNum{supIndex}-{exerciceIndex}"
        >{formNum.titre} :
      </label>
      <InputNumber
        id="settings-formNum{supIndex}-{exerciceIndex}"
        min={1}
        max={formNum.champs}
        bind:value={supValue}
        on:change={handleChange}
      />
    </div>
  {/if}
{/if}

{#if texte}
  <form
    id="settings-form-formText{supIndex}-{exerciceIndex}"
    name="settings-form-formText{supIndex}"
    autocomplete="off"
    on:submit|preventDefault={handleChange}
  >
    {#if typeof texte !== 'boolean'}
      <label
        class="text-sm md:text-normal text-coopmaths-struct dark:text-coopmathsdark-struct font-light"
        for="settings-formText{supIndex}-{exerciceIndex}"
      >
        <div>{texte[0]} :</div>
        <div
          class="w-full pl-4 pb-2 whitespace-pre-wrap text-[80%] text-coopmaths-struct-light leading-tight"
        >
          {texte[1]}
        </div>
      </label>
      <input
        class="w-full text-coopmaths-corpus-lightest dark:text-coopmathsdark-corpus-dark border-1 border-coopmaths-action dark:border-coopmathsdark-action focus:border-coopmaths-action dark:focus:border-coopmathsdark-action-lightest focus:outline-0 focus:ring-0 focus:border-1 bg-coopmaths-canvas-dark dark:bg-coopmathsdark-canvas-dark"
        name="settings-formText{supIndex}"
        id="settings-formText{supIndex}-{exerciceIndex}"
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        bind:value={supValue}
        on:input={handleChange}
      />
    {/if}
  </form>
{/if}

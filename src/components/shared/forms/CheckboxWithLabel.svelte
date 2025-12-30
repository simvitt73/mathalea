<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let id: string
  export let isChecked: boolean
  export let isDisabled: boolean = false
  export let label: string

  const dispatch = createEventDispatcher()
</script>

<div class="flex flex-row justify-start items-center px-4 mt-1">
  <input
    {id}
    aria-describedby={id}
    type="checkbox"
    class="w-4 h-4 rounded
      bg-coopmaths-canvas dark:bg-coopmathsdark-canvas
      {isDisabled
      ? 'border-coopmaths-action/20 dark:border-coopmathsdark-action/20'
      : 'border-coopmaths-action dark:border-coopmathsdark-action cursor-pointer'}
      checked:bg-coopmaths-action dark:checked:bg-coopmathsdark-action
      focus:ring-3
      focus:ring-coopmaths-action dark:focus:ring-coopmathsdark-action"
    bind:checked={isChecked}
    on:change={() => dispatch('change', isChecked)}
    disabled={isDisabled}
  />
  <label
    for={id}
    class="ml-3 text-sm
      {isDisabled
      ? 'text-coopmaths-corpus/20 dark:text-coopmathsdark-corpus/20'
      : 'text-coopmaths-corpus/70 dark:text-coopmathsdark-corpus/70 cursor-pointer'}
      {isChecked ? 'font-semibold' : 'font-light'}"
  >
    {label}
  </label>
</div>

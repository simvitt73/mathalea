<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let id: string
  export let min: number = 1
  export let max: number = 100
  export let value: number | undefined | null = undefined
  export let isDisabled: boolean = false

  const dispatch = createEventDispatcher()

  // Display value: empty string when undefined/null, otherwise the number
  $: displayValue = value === undefined || value === null ? '' : value

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement
    const rawValue = target.value

    if (rawValue === '') {
      console.log(value)
      value = undefined
      dispatch('change', undefined)
    } else {
      let numValue = Number(rawValue)
      // Clamp to min/max
      if (numValue < min) numValue = min
      if (numValue > max) numValue = max
      value = numValue
      dispatch('change', value)
    }
  }

  function decrement() {
    const step = $$props.step || 1
    if (value === undefined || value === null) {
      // If empty, set to max value when decrementing
      value = max
    } else if (value - step >= min) {
      value = value - step
    }
    dispatch('change', value)
  }

  function increment() {
    const step = $$props.step || 1
    if (value === undefined || value === null) {
      // If empty, set to min value when incrementing
      value = min
    } else if (value + step <= max) {
      value = value + step
    }
    dispatch('change', value)
  }
</script>

<span class="inline-flex items-center w-fit">
  <button
    type="button"
    class="w-8 h-8 flex items-center justify-center
      bg-coopmaths-canvas dark:bg-coopmathsdark-canvas
      border border-r-0
      border-coopmaths-action dark:border-coopmathsdark-action
      text-coopmaths-action dark:text-coopmathsdark-action
      hover:bg-coopmaths-action hover:text-coopmaths-canvas
      dark:hover:bg-coopmathsdark-action dark:hover:text-coopmathsdark-canvas
      disabled:opacity-30 disabled:cursor-not-allowed
      rounded-l"
    disabled={isDisabled ||
      (value !== undefined && value !== null && value <= min)}
    on:click={decrement}
    aria-label="Diminuer"
  >
    <i class="bx bx-minus"></i>
  </button>
  <input
    type="number"
    {id}
    {min}
    {max}
    step={$$props.step || 1}
    value={displayValue}
    on:input={handleInput}
    class="{$$props.class} w-14 h-8 text-center
    text-coopmaths-corpus dark:text-coopmathsdark-corpus
      bg-coopmaths-canvas dark:bg-coopmathsdark-canvas
      border-y
      border-coopmaths-action dark:border-coopmathsdark-action
      focus:border-y focus:outline-0 focus:ring-0
      focus:border-coopmaths-action-lightest dark:focus:border-coopmathsdark-action-lightest
      disabled:opacity-30"
    disabled={isDisabled}
  />
  <button
    type="button"
    class="w-8 h-8 flex items-center justify-center
      bg-coopmaths-canvas dark:bg-coopmathsdark-canvas
      border border-l-0
      border-coopmaths-action dark:border-coopmathsdark-action
      text-coopmaths-action dark:text-coopmathsdark-action
      hover:bg-coopmaths-action hover:text-coopmaths-canvas
      dark:hover:bg-coopmathsdark-action dark:hover:text-coopmathsdark-canvas
      disabled:opacity-30 disabled:cursor-not-allowed
      rounded-r"
    disabled={isDisabled ||
      (value !== undefined && value !== null && value >= max)}
    on:click={increment}
    aria-label="Augmenter"
  >
    <i class="bx bx-plus"></i>
  </button>
</span>

<style>
  /* Cacher les flèches natives */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    display: none;
  }
  input[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
</style>

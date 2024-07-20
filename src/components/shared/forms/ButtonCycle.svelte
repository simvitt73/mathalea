<script lang="ts">
  export let orderedEntries: string[] = ['first', 'second']
  let current: number = 0
  function next (): void {
    if (current < orderedEntries.length - 1) {
      current += 1
    } else {
      current = 0
    }
    currentState = orderedEntries.at(current - 1)
  }

  export let currentState = orderedEntries[current]
</script>

<button
  type="button"
  class="{$$props.class || 'py-[2px] px-2 text-[0.7rem] w-36'}
    border border-coopmaths-action
    text-coopmaths-action dark:text-coopmathsdark-action
    bg-coopmaths-canvas dark:bg-coopmathsdark-canvas
    hover:bg-coopmaths-action dark:hover:bg-coopmathsdark-action
    hover:text-coopmaths-canvas dark:hover:text-coopmathsdark-canvas"
  on:click={next}
>
  <div>{orderedEntries[current]}</div>
</button>

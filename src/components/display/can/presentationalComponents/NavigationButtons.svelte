<script lang="ts">
  import { onMount } from 'svelte'
  import type { CanState } from '../../../../lib/types/can'
  import ShortPagination from './ShortPagination.svelte'

  export let current: number
  export let numberOfQuestions: number
  export let handleEndOfRace: () => void
  export let state: CanState
  export let resultsByQuestion: boolean[]

  let isModalOpen = false
  let dialog: HTMLDialogElement

  $: if (dialog && isModalOpen) dialog.showModal()
  $: if (dialog && !isModalOpen) dialog.close()

  function swipe(node: HTMLElement) {
    let touchStartX = 0
    let touchStartY = 0
    let touchStartTime = 0

    const minSwipeDistance = 60
    const maxSwipeTime = 300

    function handleTouchStart(event: TouchEvent) {
      touchStartX = event.touches[0].clientX
      touchStartY = event.touches[0].clientY
      touchStartTime = Date.now()
    }

    function handleTouchEnd(event: TouchEvent) {
      const touchEndX = event.changedTouches[0].clientX
      const touchEndY = event.changedTouches[0].clientY
      const touchEndTime = Date.now()

      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY
      const deltaTime = touchEndTime - touchStartTime

      // Check if swipe is horizontal enough and fast enough
      if (Math.abs(deltaX) > Math.abs(deltaY) && deltaTime <= maxSwipeTime) {
        if (Math.abs(deltaX) >= minSwipeDistance) {
          if (deltaX > 0 && current > 0) {
            // Swipe right - go to previous
            current -= 1
          } else if (deltaX < 0 && current < numberOfQuestions - 1) {
            // Swipe left - go to next
            current += 1
          }
        }
      }
    }

    node.addEventListener('touchstart', handleTouchStart, { passive: true })
    node.addEventListener('touchend', handleTouchEnd, { passive: true })

    return {
      destroy() {
        node.removeEventListener('touchstart', handleTouchStart)
        node.removeEventListener('touchend', handleTouchEnd)
      },
    }
  }

  onMount(() => {
    setTimeout(() => {
      const endButtonDiv = document.getElementById('race-ended-by-user-btn')
      if (endButtonDiv) {
        endButtonDiv.removeAttribute('disabled')
      }
    }, 5 * 1000)
  })
</script>

<div
  use:swipe
  class="w-full pb-8 md:pb-10 px-10 space-y-4 flex flex-col md:flex-row justify-start md:justify-between items-center"
>
  <div></div>
  <div class="flex flex-row space-x-10">
    <button
      class="md:hidden flex justify-center items-center"
      type="button"
      aria-label="Reculer de 10 questions"
      on:click={() => {
        if (current >= 10) {
          current -= 10
        }
      }}
    >
      <i
        class="bx bxs-chevrons-left text-3xl md:text-7xl
            {current < 10
          ? 'text-coopmaths-action/10 dark:text-coopmathsdark-action/10'
          : 'text-coopmaths-action dark:text-coopmathsdark-action hover:text-coopmaths-action-lightest dark:hover:text-coopmathsdark-action-lightest'}"
      ></i>
    </button>
    <button
      type="button"
      aria-label="Question précédente"
      on:click={() => {
        if (current > 0) {
          current -= 1
        }
      }}
    >
      <i
        class="bx bxs-chevron-left md:bxs-left-arrow text-3xl md:text-7xl
            {current === 0
          ? 'text-coopmaths-action/10 dark:text-coopmathsdark-action/10'
          : 'text-coopmaths-action dark:text-coopmathsdark-action hover:text-coopmaths-action-lightest dark:hover:text-coopmathsdark-action-lightest'}"
      ></i>
    </button>
    <ShortPagination {current} {state} {resultsByQuestion} />
    <button
      type="button"
      aria-label="Question suivante"
      on:click={() => {
        if (current < numberOfQuestions - 1) {
          current += 1
        }
      }}
    >
      <i
        class="bx bxs-chevron-right md:bxs-right-arrow text-3xl md:text-7xl
            {current === numberOfQuestions - 1
          ? 'text-coopmaths-action/10 dark:text-coopmathsdark-action/10'
          : 'text-coopmaths-action dark:text-coopmathsdark-action hover:text-coopmaths-action-lightest dark:hover:text-coopmathsdark-action-lightest'}"
      ></i>
    </button>
    <button
      class="md:hidden flex justify-center items-center"
      type="button"
      aria-label="Avancer de 10 questions"
      on:click={() => {
        if (current + 10 <= numberOfQuestions - 1) {
          current += 10
        }
      }}
    >
      <i
        class="bx bxs-chevrons-right text-3xl md:text-7xl
            {current > numberOfQuestions - 11
          ? 'text-coopmaths-action/10 dark:text-coopmathsdark-action/10'
          : 'text-coopmaths-action dark:text-coopmathsdark-action hover:text-coopmaths-action-lightest dark:hover:text-coopmathsdark-action-lightest'}"
      ></i>
    </button>
  </div>
  <div>
    {#if state === 'race'}
      <button
        id="race-ended-by-user-btn"
        type="button"
        class="inline-block p-2 md:p-4 font-bold rounded-lg text-sm md:text-xl leading-normal text-coopmaths-canvas dark:text-coopmathsdark-canvas transition duration-150 ease-in-out bg-coopmaths-action hover:bg-coopmaths-action-lightest focus:bg-coopmaths-action-lightest dark:bg-coopmathsdark-action dark:hover:bg-coopmathsdark-action-lightest dark:focus:bg-coopmathsdark-action-lightest focus:outline-none focus:ring-0 active:bg-coopmaths-action-light dark:active:bg-coopmathsdark-action-light disabled:bg-coopmaths-action/10"
        on:click={() => (isModalOpen = true)}
        disabled
      >
        Rendre la copie
      </button>
    {/if}
  </div>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:click|self={() => (isModalOpen = false)}
  on:close={() => (isModalOpen = false)}
  class="m-auto rounded-md bg-coopmaths-canvas dark:bg-coopmathsdark-canvas p-0 backdrop:bg-black/50"
>
  <div class="min-[576px]:max-w-125">
    <div
      class="flex shrink-0 items-center justify-between rounded-t-md p-4 bg-coopmaths-warn-900 dark:bg-coopmathsdark-warn"
    >
      <h5
        class="text-xl leading-normal text-coopmaths-canvas dark:text-coopmathsdark-canvas font-bold"
      >
        Attention !
      </h5>
      <button
        type="button"
        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 text-coopmaths-canvas dark:text-coopmathsdark-canvas-darkest"
        on:click={() => (isModalOpen = false)}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <div class="relative p-4">
      <div
        class="flex flex-col space-y-4 text-coopmaths-corpus dark:text-coopmathsdark-corpus"
      >
        <div class="w-full flex justify-center items-center p-8">
          <i
            class="bx bxs-error text-coopmaths-warn-900 dark:text-coopmathsdark-warn-dark text-[70px]"
          ></i>
        </div>
        <div>
          Si vous cliquez sur le bouton
          <span class="font-bold">Terminer</span>
          alors vous ne pourrez plus revenir en arrière.
        </div>
        <div>Que souhaitez-vous faire ?</div>
      </div>
    </div>

    <div
      class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-neutral-100/50"
    >
      <button
        type="button"
        class="inline-block rounded bg-coopmaths-action-200 dark:bg-coopmathsdark-action-lightest px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-coopmaths-action dark:text-coopmathsdark-action-dark transition duration-150 ease-in-out hover:bg-coopmaths-action-400 focus:bg-coopmaths-action-400"
        on:click={() => (isModalOpen = false)}
      >
        Annuler
      </button>
      <button
        type="button"
        class="ml-1 inline-block rounded bg-coopmaths-action dark:bg-coopmathsdark-action px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-coopmaths-canvas dark:text-coopmathsdark-canvas transition duration-150 ease-in-out hover:bg-coopmaths-action-dark focus:bg-coopmaths-action-dark"
        on:click={() => {
          handleEndOfRace()
          isModalOpen = false
        }}
      >
        Terminer
      </button>
    </div>
  </div>
</dialog>

<script lang="ts">
  import ButtonIconTooltip from '../forms/ButtonIconTooltip.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let brandImagePath: string | null = 'assets/images/vendors/bordas/bordas_logo.png'
  export let productImagePath: string | null = 'assets/images/vendors/bordas/myriade_logo.png'
  export let state: boolean = false
  export let iconOnTrue: string = 'bx-log-out-circle'
  export let iconOnFalse: string = 'bxs-cog'
  function switchState() {
    dispatch('banner-state')
  }
</script>

<div
  id="vendor-banner"
  class="flex flex-col items-center justify-center w-full px-2 lg:px-8 bg-coopmaths-canvas"
>
  <div class="flex items-center justify-between w-full p-4">
    <img src="assets/svg/logo_mathalea.svg" alt="Dé MathALÉA" class="h-7 lg:h-9" />
    <div class="flex flex-row m-0 p-0 items-center justify-center space-x-3">
      <img class="h-6 lg:h-8" src={productImagePath} alt="Manual" />
      <img class="h-6 lg:h-8" src={brandImagePath} alt="Brand" />
    </div>
    <ButtonIconTooltip
      icon={state ? iconOnTrue : iconOnFalse}
      tooltip="Accéder aux réglages"
      class="hidden lg:block text-3xl"
      on:click={switchState}
    />
  </div>
  <ButtonIconTooltip
    icon={state ? iconOnTrue : iconOnFalse}
    tooltip="Accéder aux réglages"
    class="block lg:hidden text-3xl"
    on:click={switchState}
  />
</div>

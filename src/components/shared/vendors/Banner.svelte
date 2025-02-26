<script lang="ts">
  import ButtonIcon from '../forms/ButtonIcon.svelte'
  let brandImagePath: string | null = 'assets/images/vendors/bordas/bordas_logo.png'
  let manualImagePath: string | null = 'assets/images/vendors/bordas/myriade_logo.png'
</script>

<div
  id="vendor-banner"
  class="flex items-center justify-center w-full px-2 lg:px-8 bg-coopmaths-canvas"
>
  <div class="flex items-center justify-between w-full p-4">
    <img src="assets/svg/logo_mathalea.svg" alt="Dé MathALÉA" class="h-9" />
    <div class="flex flex-row m-0 p-0 items-center justify-center space-x-3">
      <img class="h-8" src={manualImagePath} alt="Manual" />
      <img class="h-8" src={brandImagePath} alt="Brand" />
    </div>
    <ButtonIcon icon="bxs-cog" class="text-3xl" />
  </div>
</div>

<script>
  import {
    mdiDiamondStone,
    mdiCommentAccountOutline,
    mdiCoffeeOutline,
    mdiEmailOutline,
    mdiPhone,
    mdiGoogleMaps,
    mdiCartOutline,
    mdiClose,
  } from "@mdi/js";

  export let icon;
  export let size = 1;

  const dict = {
    diamond: mdiDiamondStone,
    comment: mdiCommentAccountOutline,
    coffee: mdiCoffeeOutline,
    email: mdiEmailOutline,
    phone: mdiPhone,
    maps: mdiGoogleMaps,
    shop: mdiCartOutline,
    close: mdiClose,
  };

  const path = dict[icon];
  const fontSize = size * 24;
</script>

{#if path}
  <svg viewBox="0 0 24 24" style="font-size: {fontSize}px">
    <path d={path} />
  </svg>
{/if}

<style>
  svg {
    fill: currentColor;
    width: 1em;
    display: inline-block;
    font-size: inherit;
    overflow: visible;
    vertical-align: -0.125em;
  }
</style>

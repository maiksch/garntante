<script>
  // import { faCoffee } from "@fortawesome/free-solid-svg-icons";
  // import { faGem } from "@fortawesome/free-regular-svg-icons";

  import {
    mdiDiamondStone,
    mdiCommentAccountOutline,
    mdiCoffeeOutline
  } from "@mdi/js";

  export let icon;
  export let size = 1;

  const dict = {
    diamond: mdiDiamondStone,
    comment: mdiCommentAccountOutline,
    coffee: mdiCoffeeOutline
  };

  const path = dict[icon];
  const fontSize = size * 24;
</script>

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

{#if path}
  <svg viewBox="0 0 24 24" style="font-size: {fontSize}px">
    <path d={path} />
  </svg>
{/if}

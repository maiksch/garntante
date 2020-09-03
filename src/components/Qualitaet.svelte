<script>
  import Icon from "./Icon.svelte";

  export let icon = "";
  export let title = "";

  const [first, second] = title.split(" ");
</script>

<style>
  hr {
    width: 5em;
    border-top: 2px solid black;
  }

  @media (min-width: 1000px) {
    article {
      width: 33.333%;
      padding: 0 3px;
    }
  }
</style>

<article class="center frontpage-quality">
  <Icon {icon} size="2" />
  <h2 class="h1 mt0 mx-auto">
    <span>{first}</span>
    <span class="primary-color">{second}</span>
  </h2>
  <hr class="mx-auto" />

  <p>
    <slot />
  </p>
</article>

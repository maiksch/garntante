<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Newsletter from "$lib/Newsletter.svelte";
  import "basscss/css/basscss.css";

  export let segment;
</script>

<Header {segment} />

<main class="container">
  <slot />
</main>

<Footer />

<!-- <Newsletter /> -->

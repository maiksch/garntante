<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Newsletter from "../components/Newsletter.svelte";

  export let segment;
</script>

<Header {segment} />

<main class="container">
  <slot />
</main>

<Footer />

<!-- <Newsletter /> -->

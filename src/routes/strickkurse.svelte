<script context="module">
  import { getStrickkurse } from "$lib/contentful";

  export async function load({ fetch }) {
    return {
      props: {
        strickkurse: await getStrickkurse(fetch),
      },
    };
  }
</script>

<script>
  import Banner from "$lib/Banner.svelte";
  import Strickkurs from "$lib/Strickkurs.svelte";
  import routes from "$lib/routes";

  export let strickkurse = [];
</script>

<Banner route={routes.strickkurse} />

<div class="flex flex-auto">
  <article>
    <div class="content-wrapper">
      <p>
        Komm zu unserem regelmäßigen Stricktreff oder&nbsp;lerne etwas Neues in
        einem unserer Strickkurse.
      </p>
      <p>
        Du möchtest an einem der Kurse teilnehmen? Dann melde dich telefonisch
        unter <a href="tel:+4052161312">(040) 52 16 1312</a> oder persönlich bei
        uns im Laden an, wir vereinbaren dann gerne einen
        <strong>individuellen Termin</strong> für dich.
      </p>
    </div>
    <div class="strickkurse">
      {#each strickkurse as strickkurs}
        <Strickkurs {strickkurs} />
      {/each}
    </div>
  </article>
</div>

<style>
  .strickkurse {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.5em;
  }

  @media (min-width: 40em) {
    .strickkurse {
      justify-content: space-between;
    }
  }

  @media (min-width: 60em) {
    .strickkurse {
      margin-left: -3.33333%;
      justify-content: flex-start;
    }
  }

  p:first-of-type {
    margin-top: 0;
  }
</style>

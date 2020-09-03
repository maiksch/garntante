<script context="module">
  import { getStrickkurse } from "contentful";

  let strickkurse = [];

  export async function preload() {
    strickkurse = await getStrickkurse();
  }
</script>

<script>
  import Banner from "../../components/Banner.svelte";
  import Strickkurs from "./Strickkurs.svelte";

  import routes from "routes";
</script>

<style>
  .product_table {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }

  @media (min-width: 60em) {
    .product_table {
      margin-right: -1%;
      margin-left: -1%;
    }
  }

  p:first-of-type {
    margin-top: 0;
  }
</style>

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
        uns im Laden an, wir vereinbaren dann gerne einen <strong>individuellen
          Termin</strong> für dich.
      </p>
    </div>
    <div class="product_table">
      {#each strickkurse as strickkurs}
        <Strickkurs {strickkurs} />
      {/each}
    </div>
  </article>
</div>

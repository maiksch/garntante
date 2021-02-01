<script context="module">
  import { getStrickkurse } from "contentful";

  let strickkurse = [];

  export async function preload() {
    strickkurse = await getStrickkurse();
  }
</script>

<script>
  import Banner from "../components/Banner.svelte";
  import Qualitaet from "../components/Qualitaet.svelte";
  import StrickkursThumbnail from "../components/StrickkursThumbnail.svelte";

  import routes from "routes";
</script>

<Banner route={routes.home} />

<div class="flex flex-auto flex-column">
  <section class="qualities-container">
    <Qualitaet icon="diamond" title="Hohe Qualität">
      Bei uns findest du traumhafte Garne und hochwertiges Strickzubehör. Unser
      Angebot findest du <a href={routes.wolle.url}>hier</a> auf der Website oder
      direkt bei uns im Laden.
    </Qualitaet>

    <Qualitaet icon="comment" title="Gute Beratung">
      Wir lieben das Stricken und beraten dich gern bei all deinen Fragen.
      Besuche uns dafür auf <a href="https://www.facebook.com/Garntante/"
        >Facebook</a
      > oder komme einfach persönlich vorbei.
    </Qualitaet>

    <Qualitaet icon="coffee" title="Hier Wohlfühlen">
      Ob bei der Auswahl deiner Wolle oder bei unserem Stricktreff mit
      Gleichgesinnten, fühle dich bei uns ganz wie Zuhause.
    </Qualitaet>
  </section>

  <section>
    <div class="frontpage-heading center hreset">
      <h1 class="hreset"><span>Gemeinsam Stricken</span></h1>
    </div>

    <div class="frontpage-events-container">
      {#each strickkurse as strickkurs}
        <StrickkursThumbnail src={strickkurs.bild} title={strickkurs.titel} />
      {/each}
    </div>
  </section>
</div>

<style>
  section:not(:first-of-type) {
    margin-top: 2.5em;
  }

  .qualities-container {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    .qualities-container {
      display: flex;
      max-width: inherit;
    }
  }

  .frontpage-events-container {
    display: flex;
    flex-wrap: wrap;
    width: 333px;
    margin: 0 auto;
  }

  @media (min-width: 52em) {
    .frontpage-events-container {
      width: auto;
      justify-content: space-between;
      padding: 0 10%;
    }
  }

  @media (min-width: 64em) {
    .frontpage-events-container {
      justify-content: flex-start;
      margin-left: -2%;
      padding: 0;
    }
  }

  .frontpage-heading h1 {
    padding: 10px 15px 15px 15px;
    margin: 0;
    max-width: none;
  }

  .frontpage-heading h1 span {
    border: 2px solid #d2615f;
    border-right: 0;
    border-left: 0;
    border-top: 0;
    font-size: 50px;
  }
</style>

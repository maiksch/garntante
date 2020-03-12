<script>
  import Icon from "../../components/Icon.svelte";
  import Banner from "../../components/Banner.svelte";
  import Qualitaet from "./Qualitaet.svelte";
  import Strickkurs from "./Strickkurs.svelte";

  let strickkurse = [
    {
      src: "/assets/strickkurse/stricktreff.jpg",
      title: "Stricktreff"
    },
    {
      src: "/assets/strickkurse/einzelstunde.jpg",
      title: "Einzelstunde"
    },
    {
      src: "/assets/strickkurse/anfaenger.jpg",
      title: "Anfängerkurs: Stricken"
    },
    {
      src: "/assets/strickkurse/anfaenger-haekeln.jpg",
      title: "Anfängerkurs: Häkeln"
    },
    {
      src: "/assets/strickkurse/toe-up.jpg",
      title: "Toe-up Sockenstrickkurs"
    }
  ];
</script>

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
      width: 678px;
    }
  }

  @media (min-width: 64em) {
    .frontpage-events-container {
      width: 100%;
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

<Banner
  src="/assets/banner-startseite.jpg"
  title="Deine Wollgeschäfte in Hamburg" />

<section class="qualities-container">
  <Qualitaet icon="diamond" title="Hohe Qualität">
    Bei uns findest du traumhafte Garne und hochwertiges Strickzubehör. Unser
    Angebot findest du
    <a href="/unsere-wolle">hier</a>
    auf der Website oder direkt bei uns im Laden.
  </Qualitaet>

  <Qualitaet icon="comment" title="Gute Beratung">
    Wir lieben das Stricken und beraten dich gern bei all deinen Fragen. Besuche
    uns dafür auf
    <a href="https://www.facebook.com/Garntante/">Facebook</a>
    oder komme einfach persönlich vorbei.
  </Qualitaet>

  <Qualitaet icon="coffee" title="Hier Wohlfühlen">
    Ob bei der Auswahl deiner Wolle oder bei unserem Stricktreff mit
    Gleichgesinnten, fühle dich bei uns ganz wie Zuhause.
  </Qualitaet>
</section>

<section>
  <div class="frontpage-heading center hreset">
    <h1 class="hreset">
      <span>Gemeinsam Stricken</span>
    </h1>
  </div>

  <div class="frontpage-events-container">
    {#each strickkurse as strickkurs}
      <Strickkurs src={strickkurs.src} title={strickkurs.title} />
    {/each}
  </div>
</section>

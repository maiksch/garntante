<script>
  import Icon from "../../components/Icon.svelte";
  import Banner from "../../components/Banner.svelte";
  import Qualitaet from "./Qualitaet.svelte";

  let strickkurse = [];
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

<!-- <section class="frontpage-section">

    <div class="frontpage-heading center hreset">
      <h1 class="m0 hreset">
        <span>Gemeinsam Stricken</span>
      </h1>
    </div>

    <div class="frontpage-events-container">
      {#each strickkurse as strickkurs}
        <div class="frontpage-event">
          <article>
            <a href={strickkurs.link}>
              <img
                class="frontpage-event-image"
                src={strickkurs.imageSrc}
                alt={strickkurs.imageAlt} />
              <div class="frontpage-event-title">
                <b>{strickkurs.title}</b>
              </div>
            </a>
          </article>
        </div>
      {/each}
    </div>

  </section> -->
<!-- </div> -->

<script>
  import Icon from "../components/Icon.svelte";
  import Banner from "../components/Banner.svelte";

  import routes from "routes";
</script>

<style>
  .kontakt-wrapper {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    .kontakt-wrapper {
      display: flex;
      max-width: inherit;
    }
  }

  hr {
    width: 5em;
    border-top: 2px solid black;
  }

  article {
    text-align: center;
  }

  article + article {
    margin-top: 1em;
  }

  @media (min-width: 1000px) {
    article {
      width: 33.333%;
      padding: 0 3px;
    }

    article + article {
      margin-top: 0;
    }
  }
</style>

<Banner route={routes.kontakt} />

<section class="kontakt-wrapper flex flex-wrap">
  <article>
    <Icon icon="email" size="2" />
    <h1 class="h2 mt0 mx-auto">Schreib uns eine Mail</h1>
    <hr class="mx-auto short" />
    <p>
      Gerne kannst du uns unter der Adresse <a
        href="mailto:kontakt@garntante.de">kontakt@garntante.de</a> eine E-Mail schicken.
      <br /> Wir treten dann so schnell wie möglich mit dir in Kontakt.
    </p>
  </article>
  <article>
    <Icon icon="phone" size="2" />
    <h1 class="h2 mt0 mx-auto">Ruf uns an</h1>
    <hr class="mx-auto short" />
    <p>
      Wir sind unter <a href="tel:+494052161312">(040) 52 16 1312</a> zu unseren
      Geschäftszeiten zu erreichen. Ruf uns an und wir stehen dir gern zur Verfügung.
    </p>
  </article>
  <article>
    <Icon icon="maps" size="2" />
    <h1 class="h2 mt0 mx-auto">Komm uns besuchen</h1>
    <hr class="mx-auto short" />
    <p>
      Wir sind 6 Tage in der Woche für dich da, um bei der Wahl der richtigen
      Wolle zu unterstützen. Komm dafür einfach vorbei.
    </p>
  </article>
</section>

<section class="pt3">
  <iframe
    title="Garntante bei Google Maps"
    style="border: 0;"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.7251123110364!2d10.054319716219974!3d53.562674380024966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ea411564067%3A0xe66a35b8356d338b!2sGarntante!5e0!3m2!1sde!2sus!4v1486999716033"
    width="100%"
    height="450"
    frameborder="0"
    allowfullscreen="allowfullscreen" />
</section>

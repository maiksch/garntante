<script>
  import Banner from "../components/Banner.svelte";
</script>

<style>
  p {
    padding-top: 0;
    margin: 0 auto;
  }

  img {
    width: 100%;
    margin: 1em 0;
  }

  h1 {
    margin-block-start: 1em;
    margin-block-end: 0.6em;
  }

  @media (min-width: 500px) {
    img {
      width: 200px;
    }

    h1 {
      margin-block-start: 1.5em;
    }
  }

  .content-wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<Banner page="wolle" title="Über unsere Wolle" />

<div class="flex">
  <div class="content-wrapper flex-auto">
    <article>
      <p>
        Bei uns findest du traumhafte Garne und hochwertiges Strickzubehör für
        gemütliche Strickstunden. Auf dieser Seite erhältst du einen groben
        Überblick über die Wolle, die wir bei uns im Laden führen. Eine genaue
        Auflistung aller Garne findest du unter unserem
        <a
          href="http://www.ravelry.com/shops/garntante/yarns"
          target="_blank"
          rel="me noopener noreferrer">
          Ravelry Eintrag
        </a>
        .
      </p>

      <h1>Artyarns und The Fibre Co.</h1>
      <p>
        Wenn du dir etwas ganz besonderes gönnen möchtest findest du hier
        Luxusgarne mit integrierten Perlen und Pailetten von Artyarns. Außerdem
        führen wir edle Garne der Marke The Fibre Co., welche man beim Stricken
        nie wieder aus der Hand legen möchte.
      </p>

      <h1>Atelier Zitron</h1>
      <p>
        Hochwertige, modische Garne von Sockenwolle über Merino extrafine bis
        hin zu exklusiver Seide der Marke Atelier Zitron, Qualiät aus
        Deutschland, findest du ebenfalls bei uns. Die Herstellung dieser Garne
        erfolgt nach Oeko-Tex Standard 100, Produktklasse 1, wonach diese auch
        für Babys und Kleinkinder bis zu 3 Jahren geeignet sind.
      </p>
      <div class="flex justify-center">
        <img
          src="http://www.garntante.de/wp-content/uploads/2017/01/Logo_STD_100-1_Image_RC.png"
          alt="Oeko-Tex Standard 100" />
      </div>
      <p>
        Mehr Informationen dazu findest Du
        <a
          href="https://www.oeko-tex.com/de/business/certifications_and_services/ots_100/ots_100_start.xhtml"
          target="_blank"
          rel="noopener noreferrer">
          hier
        </a>
        .
      </p>

      <h1>Rohrspatz und Wollmeise</h1>
      <p>
        Ein Blick auf Rohrspatz und Wollmeise lohnt sich für dich auf jeden
        Fall, wenn du handgefärbte Garne mit hoher Farbbrillianz und
        Farbechtheit liebst. Hier sind die Farben alle biologisch abbaubar und
        umweltfreundlich, da ausschließlich mit Lebensmittelchemie gefärbt wird.
        Beim Stricken besteht allerdings Suchtgefahr!
      </p>

      <h1>Manos del Uruguay und BC Garne</h1>
      <p>
        Bist du auf der Suche nach Naturgarnen wirst du in Form von den
        handgefärbten Naturgarnen der Marke Manos del Uruguay fündig. Das
        Markenzeichen dieser Fair Trade Garne sind die komplexen Farben. Jeder
        einzelne Strang wird bis zu 6 mal gefärbt um die besondere Farbtiefe zu
        erzielen und ist somit ein Unikat.
      </p>
      <div class="flex justify-center">
        <img
          class="wp-image-400 alignright"
          src="http://www.garntante.de/wp-content/uploads/2017/01/gots-logo_rgb-300x300.jpg"
          alt="Global Organic Textile Standard"
          srcset="https://www.garntante.de/wp-content/uploads/2017/01/gots-logo_rgb-300x300.jpg
          300w,
          https://www.garntante.de/wp-content/uploads/2017/01/gots-logo_rgb-150x150.jpg
          150w,
          https://www.garntante.de/wp-content/uploads/2017/01/gots-logo_rgb.jpg
          350w"
          sizes="(max-width: 91px) 100vw, 91px" />
      </div>
      <p>
        Von Baumwolle über Seide bis kuschelweiche Baby Alpaka bieten wir die BC
        Garne aus Dänemark welche größtenteils nach
        <a
          href="http://www.global-standard.org/de/"
          target="_blank"
          rel="noopener noreferrer">
          GOTS (Global Organic Textile Standard)
        </a>
        Richtlinien produziert werden.
      </p>

      <h1>Lang Yarns, Online und Lana Grossa</h1>
      <p>
        Für die neuesten Modetrends bieten wir einen Querschnitt durch das
        Angebot dieser sehr bekannten Marken. Die angesagtesten Garne findest du
        bei uns im Laden. Hier ist für jeden Häkel- und Strickfreund das
        richtige dabei.
      </p>

      <h1>Tolle Wolle bei uns im Laden</h1>
      <p>
        Bei all dieser Auswahl von hochwertiger Wolle wirst du bestimmt fündig.
        Möchtest Du diese traumhaften Garne selbst in die Hand nehmen, komm
        einfach zu unseren Geschäftszeiten vorbei oder besuch uns bei unserem
        <a href="/strickkurse">Stricktreff</a>
        . Wir freuen uns auf dich.
      </p>
      <br />
      <p>
        Wenn du auf dem neuesten Stand bleiben möchtest, was wir für tolle Wolle
        im Laden haben, trage dich doch in unseren Newsletter ein.
      </p>
    </article>
  </div>
</div>

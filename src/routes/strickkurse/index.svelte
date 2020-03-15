<script>
  import Banner from "../../components/Banner.svelte";
  import Strickkurs from "./Strickkurs.svelte";

  import routes from "../../routes.js";

  const strickkurse = [
    {
      titel: "Stricktreff",
      img:
        "https://www.garntante.de/wp-content/uploads/2017/02/Fotolia_136834645_S-e1489925505388.jpg",
      preis: "kostenlos",
      beschreibung:
        "Stricken alleine langweilt dich? Dann komm doch zu uns in die Garntante. Wir treffen uns um in lockerer Runde gemeinsam die Nadeln klappern zu lassen.",
      dauer: "2 Stunden",
      termine: "Dienstags, jede ungerade Woche von 18-20 Uhr.",
      material: "Alles was du für dein aktuelles Strickprojekt benötigst."
    },
    {
      titel: "Stricktreff",
      img:
        "https://www.garntante.de/wp-content/uploads/2017/02/Fotolia_136834645_S-e1489925505388.jpg",
      preis: "kostenlos",
      beschreibung:
        "Stricken alleine langweilt dich? Dann komm doch zu uns in die Garntante. Wir treffen uns um in lockerer Runde gemeinsam die Nadeln klappern zu lassen.",
      dauer: "2 Stunden",
      termine: "Dienstags, jede ungerade Woche von 18-20 Uhr.",
      material: "Alles was du für dein aktuelles Strickprojekt benötigst."
    },
    {
      titel: "Stricktreff",
      img:
        "https://www.garntante.de/wp-content/uploads/2017/02/Fotolia_136834645_S-e1489925505388.jpg",
      preis: "kostenlos",
      beschreibung:
        "Stricken alleine langweilt dich? Dann komm doch zu uns in die Garntante. Wir treffen uns um in lockerer Runde gemeinsam die Nadeln klappern zu lassen.",
      dauer: "2 Stunden",
      termine: "Dienstags, jede ungerade Woche von 18-20 Uhr.",
      material: "Alles was du für dein aktuelles Strickprojekt benötigst."
    }
  ];
</script>

<style>
  .product_table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  p:first-of-type {
    margin-top: 0;
  }
</style>

<Banner page={routes.strickkurse} title="Stricktreff und Kurse" />

<div class="flex flex-auto">
  <article>
    <p>
      Komm zu unserem regelmäßigen Stricktreff oder&nbsp;lerne etwas Neues in
      einem unserer Strickkurse.
    </p>
    <p>
      Du möchtest an einem der Kurse teilnehmen? Dann melde dich telefonisch
      unter
      <a href="tel:+4052161312">(040) 52 16 1312</a>
      oder persönlich bei uns im Laden an, wir vereinbaren dann gerne einen
      <strong>individuellen Termin</strong>
      für dich.
    </p>
    <div class="product_table">
      {#each strickkurse as strickkurs}
        <Strickkurs {strickkurs} />
      {/each}
    </div>
  </article>
</div>

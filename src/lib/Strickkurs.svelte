<script>
  export let strickkurs;

  const preis = strickkurs.preis ? `${strickkurs.preis}€` : "kostenlos";
</script>

<article class="strickkurs">
  <section class="header"><b>{strickkurs.titel}</b></section>
  <section class="image">
    <img
      width="510"
      height="340"
      src={strickkurs.bild}
      alt={strickkurs.titel}
    />
    <div class="price"><span>{preis}</span></div>
  </section>
  <section>
    <div class="content">
      <p>{strickkurs.beschreibung}</p>
      <p><strong>Dauer:</strong> <span>{strickkurs.dauer}</span></p>
      {#if strickkurs.termine}
        <p><strong>Termine:</strong> <span>{strickkurs.termine}</span></p>
      {/if}
      <p>
        <strong>Material:</strong>

        {#if strickkurs.materialien.length === 1}
          <span>{strickkurs.materialien[0]}</span>
        {:else}
          <ul>
            {#each strickkurs.materialien as material}
              <li>{material}</li>
            {/each}
          </ul>
        {/if}
      </p>
      {#if strickkurs.buchenLink}
        <p>
          <a
            class="buchen-link"
            href={strickkurs.buchenLink}
            target="_blank"
            rel="noopener">Jetzt Termin buchen</a
          >
        </p>
      {/if}
    </div>
  </section>
</article>

<style>
  .strickkurs {
    height: 100%;
    border: 1px solid #eee;
    position: relative;
    display: inline-block;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: 2em;
  }

  @media (min-width: 40em) {
    .strickkurs {
      width: 49%;
    }
  }

  @media (min-width: 60em) {
    .strickkurs {
      width: 30%;
      margin-left: 3.33333%;
    }
  }

  .buchen-link {
    font-weight: bold;
  }

  .header {
    background: #eee;
    color: #d2615f;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding: 1em;
    font-size: 1.125em;
  }

  .image {
    width: 100%;
    min-height: 144px;
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
  }

  .price {
    position: absolute;
    top: 130px;
    width: 100%;
    font-size: 1.125em;
  }

  .price span {
    color: white;
    background: black;
    background: rgba(210, 97, 95, 0.8);
    padding: 10px;
  }

  .content {
    padding: 15px;
  }

  .content p:first-child {
    margin-top: 0;
  }

  .content p:last-child {
    margin-bottom: 0;
  }

  .content > p > span {
    display: block;
  }
</style>

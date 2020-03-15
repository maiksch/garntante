<script>
  export let strickkurs;
</script>

<style>
  article {
    height: 100%;
    border: 1px solid #eee;
    position: relative;
    display: inline-block;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: 2em;
  }

  @media (min-width: 40em) {
    article {
      width: 48.27586%;
    }
  }

  @media (min-width: 60em) {
    article {
      width: 31.03448%;
    }
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
</style>

<article>
  <section class="header">
    <b>{strickkurs.titel}</b>
  </section>
  <section class="image">
    <img width="510" height="340" src={strickkurs.img} alt={strickkurs.title} />
    <div class="price">
      <span>{strickkurs.preis}</span>
    </div>
  </section>
  <section>
    <div class="content">
      <p>{strickkurs.beschreibung}</p>
      <p>
        <strong>Dauer:</strong>
        <br />
        {strickkurs.dauer}
      </p>
      <p>
        <strong>Termine:</strong>
        <br />
        {strickkurs.termine}
      </p>
      <p>
        <strong>Material:</strong>
        <br />
        {strickkurs.material}
      </p>
    </div>
  </section>
</article>

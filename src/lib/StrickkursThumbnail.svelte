<script>
  export let src = "";
  export let title = "";
</script>

<article class="frontpage-event">
  <a href="/strickkurse">
    <img {src} alt={title} />
    <div class="title"><b>{title}</b></div>
  </a>
</article>

<style>
  article {
    position: relative;
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .title {
    position: absolute;
    color: white;
    top: 50%;
    margin-top: -18px;
    background-color: rgba(210, 97, 95, 0.6);
    padding: 0 10px 5px 10px;
  }

  .frontpage-event {
    width: auto;
  }

  @media (min-width: 52em) {
    .frontpage-event {
      width: 49%;
    }
  }

  @media (min-width: 64em) {
    .frontpage-event {
      width: 31.33333%;
      margin-left: 2%;
    }
  }
</style>

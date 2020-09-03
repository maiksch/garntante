<script>
  export let src = "";
  export let title = "";
</script>

<style>
  .frontpage-event {
    width: auto;
  }

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

  @media (min-width: 52em) {
    .frontpage-event {
      width: 50%;
      float: left;
      padding-left: 0.46296%;
      padding-right: 0.46296%;
    }
  }

  @media (min-width: 64em) {
    .frontpage-event {
      width: 33.33333%;
      float: left;
      padding-left: 0.46296%;
      padding-right: 0.46296%;
    }
  }
</style>

<div class="frontpage-event">
  <article>
    <a href="/strickkurse">
      <img {src} alt={title} />
      <div class="title"><b>{title}</b></div>
    </a>
  </article>
</div>

<script>
  export let route;

  const page = route.url;
  const title = route.banner || route.title;
  const src = `/assets/banner/${page}.jpg`;
</script>

<div class="flex xs-hide header-image-container">
  <div class="flex-auto">
    <img class="header-image" {src} alt={title} />
    <div class="header-image-title" class:home={page === "home"}>
      <h1>{title}</h1>
    </div>
  </div>
</div>

<style>
  .header-image-container {
    display: none;
  }

  @media (min-width: 52em) {
    .header-image-container {
      display: flex;
      margin-bottom: 2em;
      position: relative;
    }
  }

  .header-image {
    -webkit-box-flex: auto;
    -ms-flex: auto;
    flex: auto;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .header-image-title {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
  }

  .header-image-title.home {
    bottom: 10%;
    text-align: left;
  }

  .header-image-title h1 {
    font-size: 2em;
    max-width: none;
    margin: 0;
    color: white;
    background: black;
    background: rgba(210, 97, 95, 0.8);
    padding: 10px 0;
  }

  .header-image-title.home h1 {
    font-size: 1.5em;
    max-width: 350px;
    margin: 0;
    color: white;
    background: black;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
  }
</style>

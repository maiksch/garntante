<script>
  export let src;
  export let title;
</script>

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

  .header_img_page_title_front_page {
    position: absolute;
    width: 100%;
    display: block;
    bottom: 10%;
  }

  .header_img_page_title_front_page h1 {
    font-size: 1.5em;
    max-width: 350px;
    margin: 0;
    color: white;
    background: black;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
  }
</style>

<div class="flex xs-hide header-image-container">
  <div class="flex-auto">
    <img class="header-image" {src} alt={title} />
    <div class="header_img_page_title_front_page">
      <h1>{title}</h1>
    </div>
  </div>
</div>

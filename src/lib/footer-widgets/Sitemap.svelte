<script>
  import routes from "$lib/routes";
</script>

<article>
  <h2>Sitemap</h2>
  <ul>
    <li><a href="/datenschutz">Datenschutzbelehrung</a></li>
    <li><a href="/impressum">Impressum</a></li>
    <li><a href="/{routes.kontakt.url}">{routes.kontakt.title}</a></li>
    <li><a href="/{routes.strickkurse.url}">{routes.strickkurse.title}</a></li>
    <li><a href="/{routes.wolle.url}">{routes.wolle.title}</a></li>
  </ul>
</article>

<style>
  article {
    display: none;
  }

  @media (min-width: 40em) {
    article {
      display: block;
    }
  }

  ul {
    margin: 0;
  }
</style>

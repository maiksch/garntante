<script>
  import routes from "../../routes.js";
</script>

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

<article>
  <h2>Sitemap</h2>
  <ul>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/datenschutzbelehrung">Datenschutzbelehrung</a>
    </li>
    <li>
      <a href="/impressum">Impressum</a>
    </li>
    <li>
      <a href="/kontakt">Kontakt</a>
    </li>
    <li>
      <a href="/{routes.strickkurse}">Stricktreff und Kurse</a>
    </li>
    <li>
      <a href="/{routes.wolle}">Über unsere Wolle</a>
    </li>
    <li>
      <a href="/wissen">Wissenswertes</a>
    </li>
  </ul>
</article>

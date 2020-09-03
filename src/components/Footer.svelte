<script>
  import Sitemap from "./footer-widgets/Sitemap.svelte";
  import Kontakt from "./footer-widgets/Kontakt.svelte";
  import Oeffnungszeiten from "./footer-widgets/Oeffnungszeiten.svelte";
  import SozialeNetzwerke from "./footer-widgets/SozialeNetzwerke.svelte";

  let today = new Date();
  let currentYear = today.getFullYear();
</script>

<style>
  footer {
    margin-top: 3em;
    background-color: #f4f4f4;
  }

  .copyright {
    background-color: #d2615f;
    color: white;
    line-height: 35px;
    text-align: center;
  }

  .footer-widgets {
    margin-bottom: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<footer>
  <div class="container footer-widgets">
    <Sitemap />
    <Kontakt />
    <Oeffnungszeiten />
    <SozialeNetzwerke />
  </div>

  <div class="copyright">
    <span>Garntante © {currentYear}</span>
  </div>
</footer>

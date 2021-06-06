<script>
  import routes from "$lib/routes";
  import Icon from "./Icon.svelte";

  export let segment;

  const MOBILE_NAV_PX = 640;

  let showMobileNavigation = false;
  let showMobileOnlyLinks = false;
  let windowWidth;

  $: {
    segment;
    showMobileNavigation = false;
  }

  $: showMobileOnlyLinks = windowWidth < MOBILE_NAV_PX;

  function toggleMobileNavigation() {
    showMobileNavigation = !showMobileNavigation;
  }
</script>

<svelte:window bind:outerWidth={windowWidth} />

<header class="container">
  <div class="brand-secondary-nav-wrapper">
    <a href="/">
      <img class="brand-logo" alt="Garntante Logo" src="/assets/logo.png" />
    </a>

    <nav class="secondary-nav">
      <ul class="menu">
        <li><a href="/{routes.impressum.url}">Impressum</a></li>
      </ul>
    </nav>
  </div>

  <nav class="main-nav">
    <ul id="main-nav" class="menu">
      <li class="dropdown-icon">
        <span on:click={toggleMobileNavigation}>Menu ☰</span>
      </li>
      <li
        class:active={segment === routes.wolle.url}
        class:show={showMobileNavigation}
      >
        <a href="/{routes.wolle.url}">{routes.wolle.title}</a>
      </li>
      <li class:show={showMobileNavigation}>
        <a href="https://shop.garntante.de/" target="_blank" rel="noopener">
          <Icon icon="shop" /> Shop
        </a>
      </li>
      <li
        class:active={segment === routes.strickkurse.url}
        class:show={showMobileNavigation}
      >
        <a href="/{routes.strickkurse.url}">{routes.strickkurse.title}</a>
      </li>
      <li
        class:active={segment === routes.kontakt.url}
        class:show={showMobileNavigation}
      >
        <a href="/{routes.kontakt.url}">{routes.kontakt.title}</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    margin-bottom: 2em;
  }

  .main-nav ul {
    background: #d2615f;
  }

  .main-nav ul li {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .main-nav ul li a,
  .main-nav ul li span {
    background-color: #d2615f;
    font-family: "Roboto Slab", serif;
    color: white;
    text-align: center;
    display: block;
    padding: 10px;
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-nav ul li a:hover {
    color: white;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .main-nav ul li:first-child {
    border-top: none;
    border-bottom: 2px solid white;
  }
  .main-nav ul li:nth-child(2) {
    border-top: none;
  }
  .main-nav ul li:not(:first-child) {
    display: none;
  }

  .main-nav ul li:last-child {
    border-bottom: none;
  }

  .main-nav ul li.show {
    display: block;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .brand-logo {
    padding: 15px 0;
    display: flex;
  }

  .secondary-nav {
    display: none;
  }

  .secondary-nav ul {
    padding: 0.5em 0;
  }

  .secondary-nav ul a {
    padding: 5px;
    color: grey;
  }

  .brand-secondary-nav-wrapper {
    display: flex;
    justify-content: center;
  }

  /* Medium Size Monitors */
  @media (min-width: 40em) {
    .secondary-nav {
      display: block;
    }
    .brand-secondary-nav-wrapper {
      justify-content: space-between;
    }
  }

  /* Big Size Monitors */
  @media (min-width: 52em) {
    header {
      margin-bottom: 0;
    }

    nav ul {
      display: flex;
    }

    .main-nav ul {
      justify-content: flex-start;
      border: 1px solid transparent;
      border-radius: 10px 10px 0 0;
    }
    .main-nav ul .active a {
      background-color: white;
      color: #d2615f;
    }
    .main-nav ul .active a:hover {
      background-color: white;
      color: #d2615f;
    }
    .main-nav ul li {
      flex: 1 1 0;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      border-top: none;
      border-bottom: none;
    }
    .main-nav ul li.dropdown-icon {
      display: none;
    }

    .main-nav ul li a,
    .main-nav ul li span {
      line-height: 25px;
    }
    .main-nav ul li:nth-child(2) {
      border-left: none;
    }
    .main-nav ul li:nth-child(2) a {
      border-radius: 10px 0 0 0;
    }

    .main-nav ul li:not(:first-child) {
      display: block;
    }

    .main-nav ul li:last-child {
      border-right: none;
    }
    .main-nav ul li:last-child a {
      border-radius: 0 10px 0 0;
    }
  }
</style>

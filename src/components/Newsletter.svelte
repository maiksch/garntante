<script>
  import Icon from "./Icon.svelte";
  import { createContact } from "sendinblue";

  const HIDE_NEWSLETTER_POPUP_KEY = "hide-newsletter-popup";

  let show = false;
  let email = "";

  if (process.browser) {
    const hideNewsletterPopup = localStorage.getItem(HIDE_NEWSLETTER_POPUP_KEY);
    if (!hideNewsletterPopup) {
      setTimeout(() => (show = true), 1);
    }
  }

  function close() {
    show = false;
  }

  function submit() {
    close();
    if (process.browser) {
      // localStorage.setItem(HIDE_NEWSLETTER_POPUP_KEY, true);
    }
    createContact(email);
  }
</script>

{#if show}
  <div class="newsletter_popup">
    <span id="newsletter_popup_closer" on:click={close}>
      <Icon icon="close" />
    </span>
    <h2>Unser Newsletter</h2>
    <p>
      Erfahre mehr über unsere Kurse, tolle Strickprojekte und Neuigkeiten rund
      ums Stricken
    </p>
    <div class="tnp tnp-subscription">
      <form on:submit={submit}>
        <table border="0">
          <tbody>
            <tr>
              <td align="left">
                <input
                  class="tnp-email"
                  placeholder="E-Mail Adresse"
                  type="email"
                  name="ne"
                  required=""
                  bind:value={email}
                />
              </td>
            </tr>
            <tr>
              <td class="tnp-td-submit">
                <input class="tnp-submit" type="submit" value="Eintragen" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
{/if}

<style>
  h2 {
    font-size: 1.625em;
    line-height: 1.15384615;
    margin-top: 1.15384616em;
    margin-bottom: 0.38461539em;
  }

  .newsletter_popup h2 {
    margin-top: 0;
  }

  .newsletter_popup {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    border: 5px solid #d2615f;
    color: black;
    z-index: 99;
    padding: 10px;
  }

  @media (min-width: 52em) {
    .newsletter_popup {
      position: fixed;
      right: 10px;
      bottom: 10px;
      width: 300px;
    }

    h2 {
      font-size: 2em;
      line-height: 1.25;
      margin-bottom: 0.34375em;
      max-width: 18em;
    }
  }

  .newsletter_popup #newsletter_popup_closer {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .newsletter_popup .tnp {
    margin-bottom: 0;
  }
  .tnp-subscription {
    display: block;
    margin: 15px auto;
    max-width: 500px;
    width: 100%;
  }

  .tnp-subscription {
    margin: 15px 0;
  }

  .newsletter_popup form table {
    width: 100%;
  }

  .tnp-subscription input[type="email"],
  .tnp-subscription input[type="submit"] {
    width: 100%;
    height: 50px;
    padding: 10px;
    display: block;
    border: 1px;
    border-color: #ddd;
    background-color: #f4f4f4;
    background-image: none;
    text-shadow: none;
    color: #444;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    line-height: normal;
    box-sizing: border-box;
  }

  .newsletter_popup form table tr td input[type="email"] {
    padding: 10px;
    line-height: 1em;
    font-size: 1em;
    width: 100%;
  }

  .newsletter_popup form table tr td .tnp-submit {
    cursor: pointer;
    display: block;
    background-image: none;
    text-shadow: none;
    line-height: normal;
    box-sizing: border-box;
    height: auto;
    margin: 0;
    background-color: #d2615f;
    color: white;
    border: 0;
    padding: 10px;
    font-size: 1em;
    width: 100%;
  }
</style>

const API_KEY =
  "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";
const LIST_ID = 3;
const CONFIRMATION_TEMPLATE = 4;
const REDIRECTION_URL = "https://garntante.de/newsletter-confirmation/";

export async function createContact(email) {
  let url = "https://api.sendinblue.com/v3/contacts/doubleOptinConfirmation";
  let options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
    body: JSON.stringify({
      updateEnabled: false,
      email,
      includeListIds: [LIST_ID],
      templateId: CONFIRMATION_TEMPLATE,
      redirectionUrl: REDIRECTION_URL,
    }),
  };
  const result = await window.fetch(url, options);
  const json = await result.json();
  console.log(json);
}

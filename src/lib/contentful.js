const ACCESS_TOKEN = "kETy1huwM2ihWWStvei_GyfEfZInqypqMgerW6CQjDg";
const DOMAIN = "https://cdn.contentful.com";
const SPACE = "kfq4u4erlijk";

let entries;

export async function getStrickkurse(fetch) {
  const contentType = "strickkurs";
  const url = `${DOMAIN}/spaces/${SPACE}/environments/master/entries?content_type=${contentType}&order=fields.sortierung`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    method: "GET",
  });

  entries = await response.json();

  return entries.items.map((entry) => toStrickkurs(entry));
}

function toStrickkurs(data) {
  return {
    titel: data.fields.titel,
    beschreibung: data.fields.beschreibung,
    dauer: data.fields.dauer,
    termine: data.fields.termine,
    materialien: data.fields.materialien,
    preis: data.fields.preis,
    bild: `https:${getBild(data.fields.bild).fields.file.url}`,
    buchenLink: data.fields.buchenLink,
  };
}

function getBild(asset) {
  const includes = entries.includes.Asset;
  return includes.find((include) => include.sys.id === asset.sys.id);
}

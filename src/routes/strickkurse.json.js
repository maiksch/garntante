const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_TOKEN;
const SPACE = import.meta.env.VITE_CONTENTFUL_SPACE;
const DOMAIN = "https://cdn.contentful.com";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
  const contentType = "strickkurs";
  const url = `${DOMAIN}/spaces/${SPACE}/environments/master/entries?content_type=${contentType}&order=fields.sortierung`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    method: "GET",
  });

  const entries = await response.json();
  const includes = entries.includes.Asset;
  const body = entries.items.map((entry) => toStrickkurs(entry, includes));

  if (body) {
    return {
      status: 200,
      body,
    };
  }
}

function toStrickkurs(data, includes) {
  return {
    titel: data.fields.titel,
    beschreibung: data.fields.beschreibung,
    dauer: data.fields.dauer,
    termine: data.fields.termine,
    materialien: data.fields.materialien,
    preis: data.fields.preis,
    bild: `https:${getBild(data.fields.bild, includes).fields.file.url}`,
    buchenLink: data.fields.buchenLink,
  };
}

function getBild(asset, includes) {
  return includes.find((include) => include.sys.id === asset.sys.id);
}

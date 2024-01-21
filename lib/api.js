// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const BOOKDESIGN_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  description
  thumbnail {
    url
  }
  featuredImage {
    url
  }
  secondaryImage {
    url
  }
`;

const ABOUT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  bio
`;

const CONTACT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  email
  phone
  location {
    lon
    lat
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for projects with an "projects" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["projects"] },
    }
  ).then((response) => response.json());
}

export async function getAllBookDesigns(
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const bookDesigns = await fetchGraphQL(
    `query {
        bookDesignCollection(where:{slug_exists: true}, order: date_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${BOOKDESIGN_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return bookDesigns?.data?.bookDesignCollection?.items;
}

export async function getBookDesign(slug, isDraftMode = false) {
  const bookDesign = await fetchGraphQL(
    `query {
        bookDesignCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${BOOKDESIGN_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return bookDesign?.data?.bookDesignCollection?.items[0];
}

export async function getAbout(isDraftMode = false) {
  const about = await fetchGraphQL(
    `query {
        aboutCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            ${ABOUT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return about?.data?.aboutCollection?.items[0];
}

export async function getContactDetails(isDraftMode = false) {
  const contact = await fetchGraphQL(
    `query {
      contactCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${CONTACT_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  console.log(contact);
  return contact?.data?.contactCollection?.items[0];
}

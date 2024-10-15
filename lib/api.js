// Set a variable that contains all the fields needed when a fetch for content is performed
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

const ILLUSTRATION_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  description
  featuredImage {
    url
  }
  gallery {
    url
  }
`;

const FINEART_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  description
  featuredImage {
    url
  }
  gallery {
    url
  }
`;

const GRAPHICDESIGN_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  description
  featuredImage {
    url
  }
  gallery {
    url
  }
`;

const ABOUT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  bio {
    json
  }
  testimonial1 {
    sys {
      id
    }
    author
    quote
  }
  testimonial2 {
    sys {
      id
    }
    author
    quote
  }
`;

const CONTACT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  email
  contactBlurb
`;

const PROJECT_GRAPHQL_FIELDS = `
 sys {
        id
      }
      listName
      slug
      projectsCollection {
        items {
          ... on BookDesign {
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
          }
          ... on FineArt {
            sys {
              id
            }
            title
            slug
            description
            featuredImage {
              url
            }
            galleryCollection {
              items {
                url
              }
            }
          }
          ... on GraphicDesign {
            sys {
              id
            }
            title
            slug
            description
            featuredImage {
              url
            }
            galleryCollection {
              items {
                url
              }
            }
          }
          ... on Illustration {
            sys {
              id
            }
            title
            slug
            description
            featuredImage {
              url
            }
            galleryCollection {
              items {
                url
              }
            }
          }
        }
      }
`;

async function fetchGraphQL(query, preview = false) {
  console.log("fetchGraphQL");
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
        next: { tags: ["projects"] },
      }
    );
    const json = await response.json();
    if (json.errors) {
      console.error("Contentful errors: ", json.errors);
    }
    return json;
  } catch (error) {
    console.error("Error fetching data from Contentful: ", error);
    throw error;
  }
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
  return contact?.data?.contactCollection?.items[0];
}

export async function getProject(slug, isDraftMode = false) {
  console.log("getProject");
  const project = await fetchGraphQL(
    `query {
        projectsCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );

  console.log("project: ", project);

  return project?.data?.projectsCollection?.items[0];
}

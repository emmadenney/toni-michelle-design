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
            featuredImage {
              url
            }
            galleryCollection {
              items {
                url
              }
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

  return project?.data?.projectsCollection?.items[0];
}

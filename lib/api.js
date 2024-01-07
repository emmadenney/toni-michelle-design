// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const PROJECT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  name
  slug
  brief
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

function extractProjectEntries(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items;
}

export async function getAllProjects(
  // For this demo set the default limit to always return 3 articles.
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const projects = await fetchGraphQL(
    `query {
        projectCollection(where:{slug_exists: true}, order: created_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  console.log("PROJECTS", projects);
  return extractProjectEntries(projects);
}

export async function getProject(slug, isDraftMode = false) {
  const project = await fetchGraphQL(
    `query {
        projectCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractProjectEntries(project)[0];
}

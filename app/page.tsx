import { getProject } from "../lib/api";
import { draftMode } from "next/headers";
import BookList from "./Components/book-list";

export default async function HomePage() {
  const { isEnabled } = draftMode();
  const project = await getProject("books", isEnabled);

  const { projectsCollection } = project;

  if (projectsCollection.items.length == 0) {
    return <p>No projects found</p>;
  }

  return (
    <main id="top-of-page">
      <div className="cover-text-container">
        <p className="cover-text main-font">
          COVER DESIGN | <br id="cover-text-break-1" />
          GRAPHICS <br id="cover-text-break-2" />| ILLUSTRATION | FINE ART
        </p>
      </div>
      <BookList bookDesigns={projectsCollection.items} />
    </main>
  );
}

import { getProject } from "../lib/api";
import { draftMode } from "next/headers";
import BookList from "./Components/book-list";

export default async function HomePage() {
  const { isEnabled } = draftMode();
  const project = await getProject("books", isEnabled);

  if (!project) {
    return <p>No project found</p>;
  }

  const { projectsCollection } = project;

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

import Image from "next/image";
import { getProject } from "../lib/api";
import { draftMode } from "next/headers";

export default async function HomePage() {
  const { isEnabled } = draftMode();
  // const bookDesigns = await getAllBookDesigns(isEnabled);

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
          GRAPHICS | <br id="cover-text-break-2" />
          ILLUSTRATION | FINE ART
        </p>
      </div>
      <div className="book-list-container">
        {projectsCollection.items.map((bookDesign: any) => (
          <div key={bookDesign.sys.id} className="book-list-item">
            {/* <Link href={`/book-designs/${bookDesign.slug}`}> */}
            <div className="book-cover-container">
              <Image
                alt={bookDesign.title}
                className="book-cover"
                height="600"
                src={bookDesign.thumbnail.url}
                width="400"
              />
            </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </main>
  );
}

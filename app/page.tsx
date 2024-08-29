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
    <main>
      <div className="cover-text-container">
        <p className="cover-text main-font">
          COVER DESIGN | GRAPHICS | ILLUSTRATION | FINE ART
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

{
  /* <div className="book-list-item">
          <div className="book-cover-container">
            <Image
              alt="placeholder"
              className="book-cover"
              height="600"
              src={book1}
              width="400"
            />
          </div>
        </div>
        <div className="book-list-item">
          <div className="book-cover-container">
            <Image
              alt="placeholder"
              className="book-cover"
              height="600"
              src={book2}
              width="400"
            />
          </div>
        </div>
        <div className="book-list-item">
          <div className="book-cover-container">
            <Image
              alt="placeholder"
              className="book-cover"
              height="600"
              src={book3}
              width="400"
            />
          </div>
        </div> */
}

import Image from "next/image";
import Link from "next/link";
import { getAllBookDesigns } from "../lib/api";
import { draftMode } from "next/headers";

export default async function HomePage() {
  const { isEnabled } = draftMode();
  const bookDesigns = await getAllBookDesigns(isEnabled);
  return (
    <main>
      <div className="cover-text-container">
        <p className="cover-text main-font">
          COVER DESIGN | GRAPHICS | ILLUSTRATION | FINE ART
        </p>
      </div>
      <div className="book-list-container">
        {bookDesigns.map((bookDesign: any) => (
          <div key={bookDesign.sys.id} className="book-list-item">
            {/* <Link href={`/book-designs/${bookDesign.slug}`}> */}
            <div className="book-cover-container">
              <Image
                alt="placeholder"
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

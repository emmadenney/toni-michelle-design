import Image from "next/image";
import Link from "next/link";
import { getAllBookDesigns } from "../lib/api";
import { draftMode } from "next/headers";

export default async function HomePage() {
  const { isEnabled } = draftMode();
  const bookDesigns = await getAllBookDesigns(isEnabled);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed dark:text-zinc-400 body-font">
                Check out my latest book design projects!
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {bookDesigns.map((bookDesign: any) => (
                <div
                  key={bookDesign.sys.id}
                  className="h-full flex flex-col rounded-lg shadow-lg"
                >
                  <Link href={`/book-designs/${bookDesign.slug}`}>
                    <div className="book-cover-container">
                      <Image
                        alt="placeholder"
                        className="book-cover"
                        height="400"
                        src={bookDesign.thumbnail.url}
                        width="350"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

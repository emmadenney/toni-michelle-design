import { getAllBookDesigns, getBookDesign } from "../../../lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const allBookDesigns = await getAllBookDesigns();

  return allBookDesigns.map((bookDesign) => ({
    slug: bookDesign.slug,
  }));
}

export default async function BookDesign({ params }) {
  const { isEnabled } = draftMode();
  const bookDesign = await getBookDesign(params.slug, isEnabled);

  if (!bookDesign) {
    notFound();
  }
  console.log("BOOK DESIGN", bookDesign);
  return (
    <main className="min-h-screen p-24 bg-white">
      <section className="w-full">
        <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-zinc-900">
              {bookDesign.title}
            </h1>
            <p className="max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              {bookDesign.description}
            </p>
          </div>
          <div className="flex flex-row items-center justify-around">
            <div className="space-y-8 lg:space-y-10">
              <Image
                alt="Book Design Cover"
                className="w-50 h-full object-cover"
                height="500"
                src={bookDesign.featuredImage.url}
                width="400"
              />
            </div>
            {bookDesign.secondaryImage ? (
              <div className="space-y-8 lg:space-y-10">
                <Image
                  alt="Project Image"
                  className="w-50 h-full"
                  height="365"
                  src={bookDesign.secondaryImage.url}
                  width="400"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

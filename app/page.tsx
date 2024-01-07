import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "../lib/api";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const projects = await getAllProjects(isEnabled);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-800">
                Toni Michelle Design
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Check out my latest book design projects!
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project: any) => (
                <div
                  key={project.sys.id}
                  className="h-full flex flex-col rounded-lg shadow-lg"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      alt="placeholder"
                      className="w-full h-full"
                      height="400"
                      src={project.thumbnail.url}
                      width="350"
                    />
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

import { getAllProjects, getProject } from "../../../../lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const allProjects = await getAllProjects();

  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Project({ params }) {
  const { isEnabled } = draftMode();
  const project = await getProject(params.slug, isEnabled);

  if (!project) {
    notFound();
  }
  console.log("PROJECT", project);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-zinc-900">
              {project.name}
            </h1>
            <p className="max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              {project.brief}
            </p>
          </div>
          <div className="space-y-8 lg:space-y-10">
            <Image
              alt="Project Image"
              className="w-100 h-full object-cover"
              height="365"
              src={project.featuredImage.url}
              width="650"
            />
          </div>
          <div className="space-y-8 lg:space-y-10">
            <Image
              alt="Project Image"
              className="w-50 h-full"
              height="365"
              src={project.secondaryImage.url}
              width="650"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

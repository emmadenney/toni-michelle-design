import Contact from "@/Components/contact";
import ContactForm from "@/Components/contact-form";
import { getAbout } from "../../lib/api";

export default async function AboutPage() {
  const about = await getAbout();
  console.log(about);

  return (
    <main className="min-h-screen p-24 bg-white">
      <section className="w-full">
        <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-zinc-900 text-center">
              About Me
            </h1>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-900 text-center">
              {about.bio}
            </p>
          </div>
          <Contact />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

import { getContactDetails } from "../../lib/api";

export default async function Contact() {
  const contactDetails = await getContactDetails();
  console.log(contactDetails);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-zinc-900 text-center">
        Contact
      </h1>
      <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-900 text-center">
        {contactDetails.phone}
        <br />
        {contactDetails.email}
      </p>
    </div>
  );
}

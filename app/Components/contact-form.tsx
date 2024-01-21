export default async function ContactForm() {
  // const submitFormHandler = () => {};
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-zinc-900 text-center">
        Enquire
      </h1>
      <form className="text-2xl tracking-tighter sm:text-2xl text-zinc-500 flex flex-col py-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="w-full rounded-md border border-gray-500 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="w-full rounded-md border border-gray-500 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
        ></input>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          className="w-full rounded-md border border-gray-500 bg-white py-10 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
        ></input>
        <button
          // onClick={submitFormHandler}
          className="hover:shadow-form rounded-md bg-gray-800 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <main id="contact" className="bg-zinc-900 pb-10">
        <h1 className="pt-8 lg:pt-12 text-center text-amber-600 text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
          Get In Touch With Us!
        </h1>
        <div className="flex flex-col lg:flex-row items-center place-content-evenly bigger-screens:place-content-center">
          <div className="pt-10 lg:pt-0 text-balance lg:text-pretty text-center md:text-left max-w-md lg:max-w-lg bigger-screens:max-w-xl bigger-screens:mx-20">
            <h2 className="text-zinc-300 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight mb-5">
              Questions? Fill out the form to contact John!
            </h2>
            <p className="text-zinc-300 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight mb-5">
              Alternatively, email or call John directly from one of the links
              below!
            </p>
            <div className="text-amber-600 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight mb-5">
              <a href="mailto:email@gmail.com">email@gmail.com</a>
              <a
                href="tel:0274930320"
                className="lg:px-3 pt-4 lg:pt-0 block lg:inline-block"
              >
                0274930320
              </a>
            </div>
            <p className="text-zinc-300 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight mb-5">
              We will get back to you as soon as possible!
            </p>
          </div>
          <div className="pt-10 lg:pt-20">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-11/12 md:w-full mx-4 bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-11/12 md:w-full mx-4 bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-11/12 md:w-full mx-4 bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                className="w-11/12 md:w-full mx-4 bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-zinc-950 py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="text-center">
              <button className="border-2 rounded-xl border-zinc-950 bg-amber-600 transition-all duration-1000 hover:bg-zinc-950 hover:text-amber-600 px-3 py-3 mx-3 lg:mx-4">
                <span>
                  <a href="">Submit</a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

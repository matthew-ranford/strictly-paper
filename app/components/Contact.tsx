import { titan } from '@/fonts'

export default function Contact() {
  return (
    <>
      <main id="contact" className="bg-zinc-900 pb-10">
        <div className={titan.className}>
          <h1 className="pt-8 lg:pt-12 text-center text-amber-500 text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
            Get In Touch With Us!
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center place-content-evenly bigger-screens:place-content-center">
          <div className="pt-10 lg:pt-0 text-balance lg:text-pretty text-center md:text-center lg:text-left max-w-md lg:max-w-lg bigger-screens:max-w-xl bigger-screens:mx-20">
            <h2 className="text-zinc-200 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight mb-5">
              Questions? Fill out the form to contact John!
            </h2>
            <p className="text-zinc-200 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight mb-5">
              Alternatively, email or call John directly from one of the links
              below!
            </p>
            <div className="text-amber-500 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight mb-5">
              <a href="mailto:email@gmail.com">john.daken@gmail.com</a>
              <span className="text-zinc-200 hidden sm:inline"> | </span>
              <a
                href="tel:0274930320"
                className="pt-4 lg:pt-0 block lg:inline-block"
              >
                +64 27 493 0320
              </a>
            </div>
            <p className="text-zinc-200 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight mb-5">
              For any painting related enquiries, we recommend
              <a
                href="https://www.atd-decorators.co.nz"
                target="_blank"
                className="text-amber-500"
              >
                {' '}
                ATD Decorators
              </a>{' '}
            </p>
            <p className="text-zinc-200 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight mb-5">
              We will get back to you as soon as possible!
            </p>
          </div>
          <div className="pt-10 lg:pt-20 md:pe-6 lg:pe-0">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Name<span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-11/12 md:w-full mx-4 bg-zinc-200 rounded border border-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Email Address<span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-11/12 md:w-full mx-4 bg-zinc-200 rounded border border-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                className="w-11/12 md:w-full mx-4 bg-zinc-200 rounded border border-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-zinc-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-zinc-300 ps-4"
              >
                Message<span className="text-amber-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="w-11/12 md:w-full mx-4 bg-zinc-200  rounded border border-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-zinc-950 py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="text-center">
              <button className="border-2 rounded-xl border-zinc-950 bg-amber-500 transition-all duration-1000 hover:bg-zinc-950 hover:text-amber-500 px-3 py-3 mx-3 lg:mx-4">
                <span>
                  <a href="">Submit</a>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
          <p className="text-zinc-950">
            <a href="#home">TO TOP</a>
          </p>
        </div>
        <div className="pt-6 ps-4 pe-4">
          <p className="text-center text-sm text-amber-500">
            © 2024 Strictly Paper | All rights reserved | +64 27 493 0320
          </p>
        </div>
      </main>
    </>
  )
}

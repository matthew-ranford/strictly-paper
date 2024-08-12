'use client'

import Image from 'next/image'
import aboutImage from '../../public/images/about-image.png'

// Margin for the main class
// mt-10 lg:mt-20 2xl:mt-24 bigger-screens:mt-32

export default function About() {
  return (
    <>
      <main id="about" className="bg-zinc-900 pb-10 relative">
        <div>
          <Image
            src={aboutImage}
            width="2732"
            height="1536"
            alt="John putting up wallpaper"
            className="about-image"
          />
        </div>
        <div className="text-center pt-8 lg:pt-12 pl-24 lg:pl-64 2xl:pl-72 bigger-screens:pl-96">
          <h1 className="text-amber-600 text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
            Who We Are!
          </h1>
        </div>
        <div className="pt-10 flex justify-end text-zinc-300 text-balance text-right lg:text-left text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight">
          <p className="max-w-3xl 2xl:max-w-5xl bigger-screens:max-w-7xl ps-4 pe-8 lg:pe-20 bigger-screens:mr-10">
            John provides award winning wallpaper hanging to both residential
            and commercial customers, in Wellington and the surrounding region.
            <span className="block pt-6">
              An expert installer of all wallcoverings - wallpaper, murals,
              commercial wide vinyls and luxury materials such as grasscloth,
              textiles, fabrics, flock, silk and metallics.
            </span>
            <span className="block pt-6">
              Whether one wall or several rooms, the finesse and same level of
              detail are put into every project and because of this, John has
              quickly become the installer of choice for many of Wellingtons top
              interior designers, builders, architects and painting company
              owners.
            </span>
          </p>
        </div>
      </main>
    </>
  )
}

'use client'

import Image from 'next/image'
import aboutImage from '../../public/images/about-image.png'

export default function About() {
  return (
    <>
      <main id="about" className="relative mt-20">
        <div>
          <Image
            src={aboutImage}
            width="2732"
            height="1536"
            alt="John putting up wallpaper"
            className="about-image"
          />
        </div>
        <div className="text-center pt-12 pl-64">
          <h1 className="text-amber-600 text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
            Who We Are!
          </h1>
        </div>
        <div className="pt-12 flex justify-end text-balance text-xl ">
          <p className="max-w-3xl pe-20">
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

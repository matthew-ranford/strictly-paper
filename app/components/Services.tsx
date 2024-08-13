'use client'

import Image from 'next/image'
import { WobbleCard } from '@/components/ui/wobble-card'

export default function Services() {
  return (
    <>
      <main id="services" className="bigger-screens:mt-32 pb-4">
        <div className="text-right pt-8 lg:pt-12 pe-20 bigger-screens:pe-52">
          <h1 className="text-amber-600 text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
            Services We Offer!
          </h1>
        </div>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto w-5/6 lg:w-full">
          <WobbleCard containerClassName="col-span-1 max-h-[100px] lg:max-h-[250px] lg:mt-20 bg-amber-600">
            <h2 className="text-center text-xl lg:text-3xl text-zinc-950">
              We work Nationwide!
            </h2>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-900 lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-md">
              <h2 className="text-left text-balance text-5xl lg:text-7xl tracking-[-0.015em] text-amber-600">
                Residential
              </h2>
              <p className="pt-4 text-left text-zinc-300">
                This is the majority of our business, working in family homes
                and private residences on a daily basis. Cleanliness is a
                priority and using the latest dustless sanding equipment for
                wall preparation, dust is virtually non existent. Wallpapers are
                often a big investment and set the scene in a home for years to
                come. You can rest assured, it will be expertly hung.
              </p>
            </div>
            <Image
              src="/images/gallery-2.png"
              width={800}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 top-2 lg:-right-[38%] grayscale filter -bottom-10 object-contain hidden lg:block"
            />
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-900 lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-md">
              <h2 className="text-left text-balance text-5xl lg:text-7xl tracking-[-0.015em] text-amber-600">
                Commercial
              </h2>
              <p className="pt-4 text-left text-zinc-300">
                Commercial wallcoverings can start to push the boundaries of
                what wallpaper is.. often 1.3 metres wide and made on a variety
                of backings (cloth, fleece, hessian) a lot of wallpaper hangers
                are just not up to the different challenges presented. Stefan
                has nearly 20 years of hanging experience with these materials,
                working to tight deadlines on major building sites.
              </p>
            </div>
            <Image
              src="/images/gallery-3.png"
              width={800}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 top-2 lg:-right-[38%] grayscale filter -bottom-10 object-contain hidden lg:block"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 max-h-[250px] lg:mt-20 bg-amber-600">
            <h2 className="text-center text-xl lg:text-3xl text-zinc-950">
              Contact us today!
            </h2>
          </WobbleCard>
        </div>
      </main>
    </>
  )
}

'use client'

import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'
import { titan } from '@/fonts'

export default function Gallery() {
  const images = [
    'images/gallery-0.png',
    'images/gallery-1.png',
    'images/gallery-2.png',
    'images/gallery-3.png',
  ]

  return (
    <>
      <main id="gallery" className="mt-10 bg-zinc-900">
        <div className="lg:flex lg:justify-end">
          <div className="pt-8 lg:pt-36 2xl:pt-52 bigger-screens:pt-96 pb-6">
            <div className={titan.className}>
              <h1 className="text-left text-amber-600 text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight px-6 lg:px-0 lg:pe-32 2xl:pe-52 bigger-screens:pe-10 block bigger-screens:inline-block">
                Our{' '}
                <span className="lg:block bigger-screens:inline-block">
                  Work!
                </span>
              </h1>
            </div>
            <p className="text-left text-zinc-300 pt-10 px-8 lg:px-0 2xl:px-6 pb-4 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight text-balance lg:max-w-sm 2xl:max-w-xl bigger-screens:max-w-2xl block">
              Whether you&apos;re looking for inspiration or seeking the perfect
              design to elevate your home!{' '}
              <span className="block pt-4">
                A wallpapering gallery highlights the endless possibilities of
                turning walls into works of art.
              </span>
            </p>
          </div>
          <ImagesSlider
            className="h-[40rem] lg:h-[38rem] lg:w-[54.7rem] 2xl:h-[51rem] 2xl:w-[62.5rem] bigger-screens:h-[80rem] bigger-screens:w-[103rem]"
            images={images}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            ></motion.div>
          </ImagesSlider>
        </div>
      </main>
    </>
  )
}

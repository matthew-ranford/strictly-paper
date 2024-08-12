'use client'

import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <>
      <main id="gallery" className="pb-10">
        <div className="lg:flex lg:justify-end">
          <div className="pt-8 lg:pt-36 bigger-screens:pt-[40rem] pb-6">
            <h1 className="text-left text-amber-600 text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight px-6 lg:px-0 lg:pe-32 2xl:pe-28 bigger-screens:pe-4 block bigger-screens:inline-block">
              Our{' '}
              <span className="lg:block bigger-screens:inline-block">
                Work!
              </span>
            </h1>
            <p className="text-left pt-10 px-8 lg:px-0 2xl:px-6 pb-4 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight text-balance lg:max-w-xs 2xl:max-w-sm bigger-screens:max-w-2xl block">
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

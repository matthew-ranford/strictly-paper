'use client'

import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'
import { titan } from '@/fonts'
import { useState } from 'react'

export default function Gallery() {
  const [hasAnimated, setHasAnimated] = useState(false)

  const images = [
    { src: '/images/gallery-0.jpg', alt: 'Wallpaper | Wallpapering image one' },
    { src: '/images/gallery-1.jpg', alt: 'Wallpaper | Wallpapering image two' },
    {
      src: '/images/gallery-2.jpg',
      alt: 'Wallpaper | Wallpapering image three',
    },
    {
      src: '/images/gallery-3.jpg',
      alt: 'Wallpaper | Wallpapering image four',
    },
    {
      src: '/images/gallery-4.jpg',
      alt: 'Wallpaper | Wallpapering image five',
    },
    { src: '/images/gallery-5.jpg', alt: 'Wallpaper | Wallpapering image six' },
    {
      src: '/images/gallery-6.png',
      alt: 'Wallpaper | Wallpapering image seven',
    },
    {
      src: 'images/gallery-7.jpg',
      alt: 'Wallpaper | Wallpapering image eight',
    },
    {
      src: '/images/gallery-8.png',
      alt: 'Wallpaper | Wallpapering image nine',
    },
    { src: '/images/gallery-9.png', alt: 'Wallpaper | Wallpapering image ten' },
    {
      src: 'images/gallery-10.jpg',
      alt: 'Wallpaper | Wallpapering image eleven',
    },
    {
      src: '/images/gallery-11.png',
      alt: 'Wallpaper | Wallpapering image twelve',
    },
    {
      src: '/images/gallery-12.png',
      alt: 'Wallpaper | Wallpapering image thirteen',
    },
    {
      src: '/images/gallery-13.png',
      alt: 'Wallpaper | Wallpapering image fourteen',
    },
    {
      src: '/images/gallery-14.png',
      alt: 'Wallpaper | Wallpapering image fifteen',
    },
    {
      src: 'images/gallery-15.jpg',
      alt: 'Wallpaper | Wallpapering image sixteen',
    },
    {
      src: 'images/gallery-16.jpg',
      alt: 'Wallpaper | Wallpapering image seventeen',
    },
    {
      src: 'images/gallery-17.jpg',
      alt: 'Wallpaper | Wallpapering image eighteen',
    },
    {
      src: 'images/gallery-18.jpg',
      alt: 'Wallpaper | Wallpapering image nineteen',
    },
  ]

  return (
    <>
      <main id="gallery" className="mt-10 bg-zinc-900">
        <div className="lg:flex lg:justify-end">
          <div className="pt-8 lg:pt-24 2xl:pt-52 bigger-screens:pt-96 pb-6">
            <motion.div
              className={titan.className}
              initial={{ opacity: 0, y: -5 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.25 }}
              animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
              onViewportEnter={() => {
                if (!hasAnimated) {
                  setHasAnimated(true)
                }
              }}
            >
              <h1 className="text-center text-amber-500 text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight px-6 lg:px-0 lg:pe-32 2xl:pe-52 bigger-screens:pe-10 block bigger-screens:inline-block">
                Our{' '}
                <span className="lg:block bigger-screens:inline-block">
                  Work!
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -2 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.5,
              }}
              animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
              onViewportEnter={() => {
                if (!hasAnimated) {
                  setHasAnimated(true)
                }
              }}
            >
              <p className="text-center lg:text-left text-zinc-200 pt-10 px-8 lg:px-0 2xl:px-6 pb-4 text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight text-balance lg:max-w-sm 2xl:max-w-xl bigger-screens:max-w-2xl block">
                Whether you&apos;re looking for inspiration or seeking the
                perfect design to elevate your home!{' '}
                <span className="block pt-4">
                  A wallpapering gallery highlights the endless possibilities of
                  turning walls into works of art.
                </span>
                <span className="sm:block pt-4 hidden">
                  Use the left and right arrow keys to scan through our gallery.
                </span>
              </p>
            </motion.div>
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

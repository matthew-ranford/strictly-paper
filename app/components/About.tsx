'use client'

import Image from 'next/image'
import aboutImage from '../../public/images/about-image.png'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <>
      <main id="about" className="bg-zinc-900 pb-10 sm:mt-40 lg:mt-0 relative">
        <div>
          <Image
            src={aboutImage}
            width="2732"
            height="1536"
            alt="John putting up wallpaper"
            className="about-image"
          />
        </div>
        <div className="text-center pt-8 lg:pt-12 pl-24 md:pl-44 lg:pl-64 2xl:pl-72 bigger-screens:pl-96">
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
            <h1 className="text-amber-500 text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
              Who We Are!
            </h1>
          </motion.div>
        </div>
        <motion.div
          className="pt-10 flex justify-end text-zinc-200 text-balance text-right lg:text-left text-xl 2xl:text-2xl bigger-screens:text-3xl leading-tight tracking-tight"
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
          <p className="max-w-3xl 2xl:max-w-5xl bigger-screens:max-w-7xl ps-4 pe-8 lg:pe-20 bigger-screens:mr-10">
            With over four decades of expertise, John has mastered the art of
            turning walls into stunning canvases. From elegant residential
            spaces to vibrant commercial environments, he brings a meticulous
            eye for detail and a passion for perfection to every project. 
            <span className="block pt-6">
              Whether you&apos;re dreaming of a cozy living room makeover or a
              bold mural for your office, John ensures a flawless finish and
              your utmost satisfaction.
            </span>
            <span className="block pt-6 bigger-screens:pb-10">
              Serving the greater Wellington area, John has experience with an
              array of wall coverings and murals, making him your go-to for all
              your wall transformation needs.
            </span>
          </p>
        </motion.div>
      </main>
    </>
  )
}

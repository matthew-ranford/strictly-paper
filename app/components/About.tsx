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
            John provides award winning wallpaper hanging to both residential
            and commercial customers, in Wellington and the surrounding region.
            <span className="block pt-6">
              An expert installer of all wallcoverings - wallpaper, murals,
              commercial wide vinyls and luxury materials such as grasscloth,
              textiles, fabrics, flock, silk and metallics.
            </span>
            <span className="block pt-6 bigger-screens:pb-10">
              Whether one wall or several rooms, the finesse and same level of
              detail are put into every project and because of this, John has
              quickly become the installer of choice for many of Wellingtons top
              interior designers, builders, architects and painting company
              owners.
            </span>
          </p>
        </motion.div>
      </main>
    </>
  )
}

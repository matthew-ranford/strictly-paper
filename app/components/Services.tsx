'use client'

import Image from 'next/image'
import residentialImage from '../../public/images/gallery-9.png'
import commercialImage from '../../public/images/gallery-12.png'
import { WobbleCard } from '@/components/ui/wobble-card'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Services() {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <>
      <main id="services" className="2xl:mt-14 bigger-screens:mt-32 pb-4">
        <div className="text-right pt-8 lg:pt-12 pe-20 md:pe-32 lg:pe-20 bigger-screens:pe-56">
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
              Services We Offer!
            </h1>
          </motion.div>
        </div>
        <motion.div
          className="mt-14 bigger-screens:mt-44 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl bigger-screens:max-w-screen-2xl mx-auto w-5/6 md:w-7/12 lg:w-full"
          initial={{ opacity: 0, y: -5 }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.25 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          onViewportEnter={() => {
            if (!hasAnimated) {
              setHasAnimated(true)
            }
          }}
        >
          <WobbleCard containerClassName="col-span-1 max-h-[100px] lg:max-h-[250px] lg:mt-20 bg-amber-500">
            <div className={titan.className}>
              <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-zinc-950 bigger-screens:pt-6">
                Greater Wellington Region!
              </h2>
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-900 lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-md md:max-w-3xl lg:max-w-md bigger-screens:max-w-xl">
              <div className={titan.className}>
                <h2 className="text-left text-balance text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] text-amber-500">
                  Residential
                </h2>
              </div>
              <p className="pt-4 px-2 text-left text-xl 2xl:text-xl bigger-screens:text-2xl leading-tight tracking-tight text-zinc-200">
                This is the majority of our business, working in family homes
                and private residences on a daily basis. Cleanliness is a
                priority and using the latest dustless sanding equipment for
                wall preparation, dust is virtually non existent.
              </p>
            </div>
            <Image
              src={residentialImage}
              width={800}
              height={500}
              alt="Wallpaper | Wallpapering in a residential home"
              className="absolute -right-4 top-0 lg:-right-[38%] bigger-screens:-right-[25%] -bottom-10 object-contain hidden lg:block"
            />
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-900 lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-md md:max-w-3xl lg:max-w-md  bigger-screens:max-w-xl">
              <div className={titan.className}>
                <h2 className="text-left text-balance text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] text-amber-500">
                  Commercial
                </h2>
              </div>
              <p className="pt-4 px-2 text-left text-xl 2xl:text-xl bigger-screens:text-2xl leading-tight tracking-tight text-zinc-200">
                Commercial wallcoverings can start to push the boundaries of
                what wallpaper is.. often 1.3 metres wide and made on a variety
                of backings (cloth, fleece, hessian) a lot of wallpaper hangers
                are just not up to the different challenges presented.
              </p>
            </div>
            <Image
              src={commercialImage}
              width={800}
              height={500}
              alt="Wallpaper | Wallpapering for a commercial business"
              className="absolute -right-4 top-0 lg:-right-[40%] bigger-screens:-right-[25%] -bottom-10 object-contain hidden lg:block"
            />
          </WobbleCard>
          <a href="#contact">
            <WobbleCard containerClassName="col-span-1 max-h-[250px] lg:mt-20 bg-amber-500">
              <div className={titan.className}>
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-zinc-950 bigger-screens:pt-6">
                  Contact us today!
                </h2>
              </div>
            </WobbleCard>
          </a>
        </motion.div>
      </main>
    </>
  )
}

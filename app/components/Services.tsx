'use client'

import { WobbleCard } from '@/components/ui/wobble-card'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'
import { useState } from 'react'

import Image from 'next/image'
import residentialImage from '../../public/images/gallery-9.png'
import commercialImage from '../../public/images/gallery-12.png'

export default function Services() {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <>
      <main
        id="services"
        className="sm:mt-10 lg:mt-0 2xl:mt-14 bigger-screens:mt-32 pb-4"
      >
        <div className="text-center md:text-right pt-8 lg:pt-12 pe-4 md:pe-32 lg:pe-20 bigger-screens:pe-56">
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
          <WobbleCard containerClassName="col-span-1 max-h-[100px] lg:max-h-[250px] lg:my-auto bg-amber-500">
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
                <h2 className="text-center md:text-left text-balance text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] text-amber-500">
                  Residential
                </h2>
              </div>
              <div className="pt-4 px-2 text-center md:text-left text-xl 2xl:text-xl bigger-screens:text-2xl leading-tight tracking-tight text-zinc-200">
                <p className="pt-4">
                  John specializes in bringing life to residential spaces,
                  whether it&apos;s a cherished family home or a freshly built
                  property.
                </p>
                <p className="pt-4">
                  {' '}
                  John works closely with homeowners and investors alike,
                  delivering stunning transformations that range from entire
                  home makeovers to striking murals, feature walls, and even
                  ceilings.
                </p>
                <p className="pt-4">
                  Whether you&apos;re refreshing a beloved space or adding the
                  finishing touches to a new build, John&apos;s expertise
                  ensures every detail is crafted with care and precision.
                </p>
              </div>
            </div>
            <Image
              src={residentialImage}
              width={800}
              height={500}
              alt="Wallpaper | Wallpapering in a residential home"
              className="absolute -right-4 inset-y-24 bigger-screens:inset-y-26 lg:-right-[38%] bigger-screens:-right-[25%] -bottom-10 object-contain hidden xl:block"
            />
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-900 lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-md md:max-w-3xl lg:max-w-md  bigger-screens:max-w-xl">
              <div className={titan.className}>
                <h2 className="text-center md:text-left text-balance text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] text-amber-500">
                  Commercial
                </h2>
              </div>
              <div className="pt-4 px-2 text-center md:text-left text-xl 2xl:text-xl bigger-screens:text-2xl leading-tight tracking-tight text-zinc-200">
                <p>
                  Navigating the complexities of commercial projects requires a
                  skilled touch, and John excels in working around bustling
                  office spaces and staff with minimal disruption.
                </p>
                <p className="pt-4">
                  Whether it&apos;s coordinating after-hours work or seamlessly
                  integrating into the daily flow, John&apos;s exceptional
                  communication and organizational skills ensure that your
                  business continues running smoothly.
                </p>
                <p className="pt-4">
                  John collaborates closely with each client, delivering
                  top-notch results while maintaining the efficiency and
                  professionalism your busy environment demands.
                </p>
              </div>
            </div>
            <Image
              src={commercialImage}
              width={800}
              height={500}
              alt="Wallpaper | Wallpapering for a commercial business"
              className="absolute -right-4 inset-y-24 bigger-screens:inset-y-32 lg:-right-[39%] bigger-screens:-right-[25%] -bottom-10 object-contain hidden xl:block"
            />
          </WobbleCard>
          <a href="#contact">
            <WobbleCard containerClassName="col-span-1 max-h-[250px] lg:my-44 bigger-screens:my-64 bg-amber-500">
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

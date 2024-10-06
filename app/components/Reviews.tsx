'use client'

import { Highlight } from '@/components/ui/hero-highlight'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Reviews() {
  const [hasAnimated, setHasAnimated] = useState(false)

  // InfiniteMovingCards
  const testimonials = [
    {
      name: 'The company I work for works closely with Strictly Paper and we have been impressed with their communication, efficency, work quality and professionalism.',
      title: 'Matthew',
      quote: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'We had John come and do a wallpapering job in our grandkids bedroom. He did an amazing job which we absolutely love. We found John very professional and easy to communicate with. We would totally recommend John for any job big or small',
      title: 'Bruce & Jenni Johnson',
      quote: '⭐⭐⭐⭐⭐',
    },
    {
      name: "We imported wallpaper from England, that arrived in one big roll. It had to be cut then matched. John did a marvellous job for us. He came the day before to lay it all out, then wallpapered the next day. The following day he came back to check that it looked OK. It looks amazing, to be honest, we can't even see the joins. John was great to deal with, very friendly and did not seem at all fazed at the prospect of this unusual wallpaper. He is a true craftsman, and we would not hesitate to recommend him to anyone who wants an excellent wallpaper job done by a professional and easy to deal with person.",
      title: 'Andrew & Rose',
      quote: '⭐⭐⭐⭐⭐',
    },
  ]

  return (
    <>
      <main id="reviews" className="mt-10 pb-10">
        <div className="text-center pt-8 pb-6 lg:pb-10 ps-2 pe-2">
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
            <h1 className="text-zinc-950 text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
              What our{' '}
              <Highlight>
                <span className="text-amber-500 mx-4">clients</span>
              </Highlight>{' '}
              have to say?
            </h1>
          </motion.div>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </main>
    </>
  )
}

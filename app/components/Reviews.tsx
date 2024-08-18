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
      name: 'My company works closely with Strictly Paper and we have been impressed with their communication, efficency, work quality and professionalism.',
      title: 'Nathan',
      quote: '⭐⭐⭐⭐⭐',
    },
    {
      name: ' We must say that the service was excellent, attendance to review the work and submit the quote was very fast, pricing extremely competitive and all site staff were friendly, time-efficient and left the areas clean and tidy when complete.',
      title: 'PFMB Properties Ltd',
      quote: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'I highly recommend Strictly Paper to anyone wanting wallpapering work carried out by a professional, competitive, competent and qualified company who offer advice and options, provide fast service and all works carried out are done to a high standard.',
      title: 'Megan',
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

'use client'

import { titan, interHeroText } from '@/fonts'
import { FlipWords } from '@/components/ui/flip-words'
import { motion } from 'framer-motion'

export default function Hero() {
  const words = ['Space', 'Home', 'Area', 'Walls']

  return (
    <>
      <motion.main
        className="hero-wrapper h-[800px] md:h-[600px] 2xl:h-[900px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'linear', duration: 2.5 }}
      >
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="hero-screen-video hidden md:block"
          aria-label="video animation of interior home, no audio"
        >
          <source
            src="video/hero-video.mp4"
            type="video/mp4"
            className="hero-screen-video"
          />
          <track src="" kind="captions" label="no-audio" />
        </video>
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="hero-screen-video md:hidden"
          aria-label="video animation of interior home, no audio"
        >
          <source
            src="video/hero-video-mobile.mp4"
            type="video/mp4"
            className="hero-screen-video"
          />
          <track src="" kind="captions" label="no-audio" />
        </video>
        <div className="absolute">
          <div className="smaller-screens:mt-[19rem] phone-screens:mt-[17rem] mt-[19rem] sm:mt-[21rem] md:mt-32 lg:mt-36 2xl:mt-44 md:max-w-3xl lg:max-w-6xl 2xl:max-w-screen-xl px-6 md:px-8 lg:px-32 2xl:px-20 bigger-screens:px-64">
            <div className={titan.className}>
              <h1 className="smaller-screens:text-4xl text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl bigger-screens:text-8xl leading-none tracking-tight">
                Transform Your <FlipWords words={words} /> with Elegance
              </h1>
            </div>
          </div>
          <div className="smaller-screens:mt-4 phone-screens:mt-10 mt-0 sm:mt-10 md:mt-4 lg:mt-0 smaller-screens:text-lg text-xl 2xl:text-xl leading-tight tracking-tight pt-4 bigger-screens:pt-5 px-8 lg:px-[8.5rem] 2xl:px-20 bigger-screens:px-[17rem] max-w-[400px] sm:max-w-xl md:max-w-sm lg:max-w-3xl bigger-screens:max-w-6xl">
            <div className={interHeroText.className}>
              <p className="pe-4">
                At Strictly Paper, we specialize in turning walls into works of
                art.
              </p>
              <p className="pt-4 pe-2">
                With our expert wallpapering services, we bring your vision to
                life, creating stunning, unique interiors that reflect your
                style and personality.
              </p>
            </div>
            <div className="-px-4 pt-10 bigger-screens:pt-16">
              <div className={interHeroText.className}>
                <button className="rounded-xl bg-amber-300 text-zinc-950 transition-all duration-1000 hover:bg-zinc-100 hover:text-zinc-950 py-4 px-7 sm:px-8 sm:py-4 text-base">
                  <a href="#contact">Get a quote</a>
                </button>
                <button className="border border-zinc-950 rounded-xl bg-transparent transition-all duration-1000 hover:bg-zinc-950 text-zinc-950 hover:text-zinc-100 py-4 px-7 sm:px-8 sm:py-4 mx-3 lg:mx-6 text-base">
                  <a href="#services">Our services</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  )
}

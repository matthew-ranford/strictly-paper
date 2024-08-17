'use client'

import { titan, interHeroText } from '@/fonts'
import { FlipWords } from '@/components/ui/flip-words'

export default function Hero() {
  const words = ['Space', 'Home', 'Area', 'Walls']

  return (
    <>
      <main className="hero-wrapper">
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="hero-screen-video"
          aria-label="video animation of interior home, no audio"
        >
          <source
            src="video/hero-video.mp4"
            type="video/mp4"
            className="hero-screen-video"
          />
          <track src="" kind="captions" label="no-audio" />
        </video>
        <div className="absolute">
          <div className="mt-44 lg:mt-52 2xl:mt-72 lg:max-w-6xl 2xl:max-w-screen-2xl px-6 lg:px-28 2xl:px-20 bigger-screens:px-60">
            <div className={titan.className}>
              <h1 className="text-5xl lg:text-7xl 2xl:text-8xl bigger-screens:text-9xl leading-none tracking-tight">
                Transform Your <FlipWords words={words} /> with Elegance
              </h1>
            </div>
          </div>
          <div className="text-xl 2xl:text-2xl bigger-screens:text-3xl leading-none tracking-tight pt-8 bigger-screens:pt-16 px-6 lg:px-[7.5rem] 2xl:px-20 bigger-screens:px-64 max-w-3xl bigger-screens:max-w-7xl">
            <div className={interHeroText.className}>
              <p className="pe-4">
                At <span className="text-amber-500">Strictly Paper</span>, we
                specialize in turning walls into works of art.
              </p>
              <p className="pt-4 pe-2">
                With our expert wallpapering services, we bring your vision to
                life, creating stunning, unique interiors that reflect your
                style and personality.
              </p>
            </div>
            <div className="pt-6 2xl:pt-10 bigger-screens:pt-16">
              <div className={titan.className}>
                <button className="border-2 rounded-xl  bg-amber-500 transition-all duration-1000 hover:bg-zinc-950 hover:text-amber-500 py-3 px-3 sm:px-4 sm:py-4">
                  <a href="#services">Our Services</a>
                </button>
                <button className="border-2 rounded-xl  bg-amber-500 transition-all duration-1000 hover:bg-zinc-950 hover:text-amber-500 py-3 px-3 sm:px-4 sm:py-4 mx-3 lg:mx-4">
                  <a href="#contact">Get a Quote</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

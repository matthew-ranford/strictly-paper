'use client'

export default function Hero() {
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
          <div className="mt-52 max-w-6xl px-28">
            <h1 className="text-7xl leading-none tracking-tight">
              Transform Your Space with Elegance
            </h1>
          </div>
          <div className="text-xl leading-none tracking-tight pt-8 px-[7.5rem] max-w-3xl">
            <p>
              At <span className="text-amber-600">Strictly Paper</span>, we
              specialize in turning walls into works of art.
            </p>
            <p className="pt-4">
              With our expert wallpapering services, we bring your vision to
              life, creating stunning, unique interiors that reflect your style
              and personality.
            </p>
            <div className="pt-6">
              <button className="border-2 rounded-xl border-zinc-950 bg-amber-600 transition-all duration-1000 hover:bg-zinc-950 hover:text-amber-600 px-3 py-3">
                <a href="#about">Who we Are</a>
              </button>
              <button className="border-2 rounded-xl border-zinc-950 bg-amber-600 transition-all duration-1000 hover:bg-zinc-950 hover:text-amber-600 px-3 py-3 mx-4">
                <a href="#contact">Get a Quote</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

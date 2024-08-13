import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  )
}

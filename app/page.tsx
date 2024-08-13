import About from './components/About'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Gallery /> */}
    </>
  )
}


import '../app/global.css'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Footer from '../components/Footer.tsx'
import FeaturedArt from '../components/FeaturedArt.tsx'

function Home() {
  return (
    <main className="relative min-h-screen bg-elysian1">
       <div className="flex flex-col gap-24 lg:gap-60">
        <Navbar />
        <Hero />
        <FeaturedArt/>
        <Footer />
      </div>
    </main>
  )
}

export default Home

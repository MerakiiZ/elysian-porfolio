
import '../app/global.css'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Footer from '../components/Footer.tsx'
import TestContent from '../components/TestContent.tsx'
import FeaturedArt from '../components/FeaturedArt.tsx'

function App() {
  return (
    <main className="relative min-h-screen bg-elysian1">
       <div className="flex flex-col gap-32">
        <Navbar />
        <Hero />.
        <Footer />
      </div>
    </main>
  )
}

export default App
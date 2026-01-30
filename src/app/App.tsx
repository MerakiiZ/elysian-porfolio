
import '../app/global.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FloatingContainer } from '../components/FloatingContainer.tsx'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Footer from '../components/Footer.tsx'
import FeaturedArt from '../components/FeaturedArt.tsx'

function App() {
  return (
    <main className="relative min-h-screen bg-elysian1">
       <div className="flex flex-col gap-32">
        <Navbar />
        <Hero />.
        <FeaturedArt/>
        <Footer />
      </div>
    </main>
  )
}

export default App
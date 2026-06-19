import '../app/global.css'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-28 px-6">
        <h1 className="text-4xl font-audiowide text-stone-800">About</h1>
      </section>
      <Footer />
    </main>
  )
}

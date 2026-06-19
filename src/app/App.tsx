import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/About"
import Commissions from "../pages/commissions"
import Contact from "../pages/contact"
import Gallery from "../pages/Gallery"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

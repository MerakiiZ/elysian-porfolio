import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
    <Navbar />
    <App />
  </StrictMode>,
)
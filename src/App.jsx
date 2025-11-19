import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Demo from './components/Demo'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Demo />
      <Testimonials />
      <FAQ />
      <Contact />

      <footer className="py-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} LocalAI Assist. Toate drepturile rezervate.</p>
          <div className="text-sm text-slate-600">Creat pentru afaceri locale: restaurante • clinici • saloane • service auto • stomatologie</div>
        </div>
      </footer>
    </div>
  )
}

export default App

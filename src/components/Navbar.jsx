import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { label: 'How It Works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-500 shadow-lg" />
            <span className="font-semibold text-slate-900">LocalAI Assist</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors">Get Started</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="py-2 text-slate-800" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium w-max" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

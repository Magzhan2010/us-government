import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-navy-900/95 backdrop-blur-xl border-b border-blue-500/15 shadow-lg shadow-black/30' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white font-black text-lg tracking-widest uppercase hover:text-blue-400 transition-colors duration-200">
          🦅 АҚШ Үкіметі
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/55 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white text-2xl transition-colors"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-navy-900/98 border-t border-blue-500/15 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/65 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

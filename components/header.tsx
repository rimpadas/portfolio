'use client'

import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-background via-background/95 to-background backdrop-blur-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold animate-fadeIn">
          <span className="gradient-text">Rimpa Das</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs sm:text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group whitespace-nowrap"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 border-t border-primary/20">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

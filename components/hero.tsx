'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Web Developer'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero-background relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb-1 animate-orbFloat" />
        <div className="hero-orb hero-orb-2 animate-orbFloat2" />
        <div className="hero-orb hero-orb-3 animate-orbFloat3" />
        <div className="hero-grid" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      </div>
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative py-12 md:py-20 w-full">
        <div className="text-center space-y-5 md:space-y-8 mb-10 md:mb-16 animate-slideUp">
          <div className="space-y-4 md:space-y-6">
            <p className="text-primary font-mono text-xs tracking-widest uppercase font-bold">Welcome to my portfolio</p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">I&apos;m</span>
              <span className="gradient-text block">Rimpa Das</span>
            </h1>

            <div className="flex items-center justify-center gap-2 md:gap-3 pt-1 md:pt-2">
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                {displayText || 'Web Developer'}
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-primary animate-pulse">.</span>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto font-light px-2">
            I create beautiful, responsive web experiences with React, TypeScript, and modern technologies. Focused on clean code, user-centered design, and building products that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-1 md:pt-2">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold text-sm sm:text-base rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-2 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary/50 text-primary font-semibold text-sm sm:text-base rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-500 hover:-translate-y-2">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-primary/25 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.05s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 text-center space-y-3 md:space-y-4">
              <div className="flex justify-center">
                <div className="p-3 w-fit bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-all duration-300">
                  <span className="text-2xl md:text-3xl block">⚡</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">Fast & Responsive</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">Optimized code. Mobile-first design. Cross-browser compatibility.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-secondary/25 rounded-2xl p-8 hover:border-secondary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 w-fit bg-secondary/15 rounded-lg group-hover:bg-secondary/25 transition-all duration-300">
                  <span className="text-3xl block">🎨</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">Beautiful Design</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">Modern aesthetics. Smooth animations. User-focused experience.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-accent/25 rounded-2xl p-8 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 w-fit bg-accent/15 rounded-lg group-hover:bg-accent/25 transition-all duration-300">
                  <span className="text-3xl block">🚀</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">Scalable Code</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">Clean architecture. Best practices. Performance focused.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

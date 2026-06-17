'use client'

export function About() {
  return (
    <section id="about" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="mb-10 md:mb-16 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-center text-foreground/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Building beautiful, responsive web applications with modern technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-primary/25 rounded-lg md:rounded-2xl p-5 md:p-7 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.05s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="p-2 md:p-3 w-fit bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-all duration-300">
                <span className="text-2xl md:text-3xl block">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">Fast & Responsive</h3>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-light">Optimized code. Mobile-first design. Cross-browser compatibility.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-secondary/25 rounded-lg md:rounded-2xl p-5 md:p-7 hover:border-secondary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="p-2 md:p-3 w-fit bg-secondary/15 rounded-lg group-hover:bg-secondary/25 transition-all duration-300">
                <span className="text-2xl md:text-3xl block">🎨</span>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-foreground mb-1 md:mb-2 group-hover:text-secondary transition-colors">Beautiful Design</h3>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-light">Modern aesthetics. Smooth animations. User-focused experience.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-accent/25 rounded-lg md:rounded-2xl p-5 md:p-7 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="p-3 w-fit bg-accent/15 rounded-lg group-hover:bg-accent/25 transition-all duration-300">
                <span className="text-3xl block">🛠️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">Expert Tools</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">React, TypeScript, Next.js. Component architecture. API integration.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-primary/25 rounded-2xl p-7 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="p-3 w-fit bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-all duration-300">
                <span className="text-3xl block">🚀</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Scalable Code</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">Clean architecture. Best practices. Performance focused.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-accent/25 rounded-2xl p-7 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="p-3 w-fit bg-accent/15 rounded-lg group-hover:bg-accent/25 transition-all duration-300">
                <span className="text-3xl block">🧪</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">Testing & CI</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">Unit/integration testing, automated pipelines, and reliable deployments.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/40 border border-primary/25 rounded-2xl p-7 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden" style={{ animationDelay: '0.35s' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="p-3 w-fit bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-all duration-300">
                <span className="text-3xl block">🤝</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Collaboration</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">Product-minded development, stakeholder communication, and agile processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

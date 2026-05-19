'use client'

export function Experience() {
  const workExp = [
    {
      role: 'Web Developer',
      company: 'Itobuz Technologies',
      period: '2021 - Present',
      description: 'Building modern web applications with React.js and Next.js'
    }
  ]

  const stats = [
    { label: '4+ Years', value: 'Professional Experience' },
    { label: '20+ Projects', value: 'Delivered' },
    { label: '100% Focused', value: 'On Quality' }
  ]

  return (
    <section id="experience" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="mb-10 md:mb-16 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-center text-foreground/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            4+ years of professional web development at Itobuz Technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-gradient-to-br from-card/90 via-card/60 to-background/30 border border-primary/25 rounded-2xl p-9 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-3 text-center animate-slideUp overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <div className="text-5xl font-bold gradient-text group-hover:drop-shadow-lg transition-all duration-300">{stat.label}</div>
                <p className="text-foreground/70 font-medium text-lg">{stat.value}</p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full mx-auto transition-all duration-500 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

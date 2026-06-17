'use client'

export function Projects() {
  const projects = [
      {
      title: 'Mareana',
      description: 'Mareana main site and demo request pages',
      tech: 'WordPress',
      icon: '🛍️',
      link: 'https://mareana.com/'
    },
     {
      title: 'RCMB',
      description: 'RCMB institutional site',
      tech: 'WordPress',
      icon: '🏛️',
      link: 'https://rcmb.in/'
    },
     {
      title: 'Nirva Old-age Home',
      description: 'Senior care platform with resident profiles and contact features',
      tech: 'Next.js',
      icon: '👵',
      link: 'https://nirva-oldage-home.vercel.app'
    },
    {
      title: 'Pharmastock',
      description: 'Pharmaceutical inventory & stock management dashboard',
      tech: 'React.js',
      icon: '💊',
      link: ''
    },
   
    {
      title: 'Health Admin',
      description: 'Healthcare admin dashboard for appointments and records',
      tech: 'React.js',
      icon: '🏥',
      link: ''
    },
    {
      title: 'Hotel Management',
      description: 'Hotel management solution with booking and guest management',
      tech: 'React.js',
      icon: '🏨',
      link: ''
    },
    {
      title: 'Trouvaille',
      description: 'Travel profile and destination showcase',
      tech: 'WordPress',
      icon: '✈️',
      link: ''
    },
    {
      title: 'Design Studio',
      description: 'Design studio portfolio and service showcase',
      tech: 'HTML/CSS',
      icon: '🎨',
      link: 'https://www.designstudiouiux.com/'
    },
    {
      title: 'TipTop Dorm Shop',
      description: 'E-commerce storefront for dorm essentials',
      tech: 'Shopify/WordPress',
      icon: '🛒',
      link: 'https://tiptopdormshop.com/'
    },
    {
      title: 'BiteApp',
      description: 'Food ordering & delivery landing',
      tech: 'React',
      icon: '🍔',
      link: 'https://www.biteapp.in/'
    },
    {
      title: 'SoftwareValue',
      description: 'Corporate site for AI/software valuation services',
      tech: 'WordPress',
      icon: '🧠',
      link: 'https://www.softwarevalue.ai/'
    },
   
    {
      title: 'Leap Green Energy',
      description: 'Renewable energy solutions website',
      tech: 'React/WordPress',
      icon: '🌱',
      link: 'https://leapgreenenergy.com/'
    }
  ]

  return (
    <section id="projects" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="mb-10 md:mb-16 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-center text-foreground/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            A selection of my best work across various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-card/80 via-card/50 to-background/30 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 cursor-pointer animate-slideUp overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-screen blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl group-hover:from-primary/30 group-hover:to-secondary/20 transition-all duration-300">
                    <span className="text-4xl block">{project.icon}</span>
                  </div>
                  <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-primary/15 border border-primary/40 text-primary uppercase tracking-widest">
                    {project.tech}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-base leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4">
                  <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" />
                </div>
                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/15 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <p className="text-foreground/60">Projects Built</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <p className="text-foreground/60">Years Developing</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <p className="text-foreground/60">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-t from-card/40 to-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="animate-slideUp">
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">Rimpa Das</span>
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Web Developer specializing in React.js, Next.js, and TypeScript. Creating beautiful, performant web applications with 4+ years of experience.
            </p>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Projects</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Experience</a></li>
            </ul>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <a href="https://www.linkedin.com/in/rimpa-das-226470220" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:rimpadas309@gmail.com" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Email
                </a>
              </li>
              <li><a href="tel:9804275483" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Phone</a></li>
              <li><span className="text-foreground/60">Howrah, India</span></li>
            </ul>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.15s' }}>
            <h4 className="font-semibold text-foreground mb-4">Current Role</h4>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/70">
                <strong className="text-primary">Web Developer</strong>
              </p>
              <p className="text-foreground/60">
                Itobuz Technologies
              </p>
              <p className="text-foreground/60 text-xs">
                Sept 2021 - Present
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/60 text-center md:text-left animate-fadeIn">
            © {currentYear} Rimpa Das. All rights reserved. Crafted with passion for beautiful web experiences.
          </p>
          <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {[
              { 
                icon: '💼', 
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/rimpa-das-226470220'
              },
              { 
                icon: '📧', 
                label: 'Email',
                href: 'mailto:rimpadas309@gmail.com'
              },
              { 
                icon: '📱', 
                label: 'Phone',
                href: 'tel:9804275483'
              },
              { 
                icon: '📍', 
                label: 'Location',
                href: '#contact'
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                title={social.label}
                className="group w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-lg hover:border-primary/60 hover:from-primary/40 hover:to-secondary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <p className="text-xs text-foreground/50">
            Built with Next.js, React, TypeScript, and Tailwind CSS | Designed for modern, responsive web experiences
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="mb-10 md:mb-16 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            <span className="gradient-text">Let&apos;s Get In Touch</span>
          </h2>
          <p className="text-center text-foreground/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Form */}
          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="relative bg-gradient-to-br from-card/80 via-card/50 to-background/30 border border-primary/20 rounded-2xl p-8 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-screen blur-3xl opacity-50" />
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none hover:border-primary/40"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message
                </button>
                {submitted && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 animate-slideUp">
                    <p className="text-sm text-green-400 font-medium">
                      ✓ Message received! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <a href="mailto:rimpadas309@gmail.com" className="group block">
              <div className="bg-gradient-to-br from-card/80 to-card/40 rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:from-primary/40 transition-all duration-300">
                    📧
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-foreground/70">rimpadas309@gmail.com</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/rimpa-das-226470220" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-gradient-to-br from-card/80 to-card/40 rounded-xl p-6 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:from-secondary/40 transition-all duration-300">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">LinkedIn</h3>
                    <p className="text-foreground/70">Rimpa Das</p>
                  </div>
                </div>
              </div>
            </a>

            <div className="group block">
              <div className="bg-gradient-to-br from-card/80 to-card/40 rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70">9804275483</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group block">
              <div className="bg-gradient-to-br from-card/80 to-card/40 rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-foreground/70">Howrah, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

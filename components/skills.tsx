'use client'

export function Skills() {
  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'TypeScript', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'JavaScript ES6+', level: 95 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'GraphQL', level: 85 },
    { name: 'REST APIs', level: 90 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Git & Version Control', level: 90 },
    { name: 'UI/UX Implementation', level: 90 },
    { name: 'Performance Optimization', level: 88 },
  ]

  return (
    <section id="skills" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="mb-10 md:mb-16 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            <span className="gradient-text">Core Technologies</span>
          </h2>
          <p className="text-center text-foreground/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Specialized in modern web development with expertise across the full stack
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gradient-to-br from-card/80 via-card/50 to-background/30 border border-primary/20 rounded-xl p-5 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-2 cursor-default animate-slideUp overflow-hidden"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full mix-blend-screen blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">{skill.name}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="h-2 bg-background/40 rounded-full overflow-hidden flex-1 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 group-hover:shadow-lg group-hover:shadow-primary/50"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-foreground/60 group-hover:text-foreground/80 transition-colors">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

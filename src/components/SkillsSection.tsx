import { Video, Palette, Zap, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

const skills = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional editing with advanced techniques and seamless transitions.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-500/20 to-cyan-500/10',
    percentage: 95,
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative visual solutions including branding and marketing materials.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-500/20 to-pink-500/10',
    percentage: 92,
  },
  {
    icon: Zap,
    title: 'Color Grading',
    description: 'Expert correction and grading to enhance mood and visual appeal.',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    bgGradient: 'from-orange-500/20 to-amber-500/10',
    percentage: 90,
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'End-to-end creation from concept development to final delivery.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgGradient: 'from-emerald-500/20 to-teal-500/10',
    percentage: 88,
  }
];

export function SkillsSection() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 blur-3xl"
          style={{ transform: `translateY(${(scrollY - 1600) * 0.04}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-neon-magenta/10 to-neon-cyan/10 blur-3xl"
          style={{ transform: `translateY(${(scrollY - 1600) * -0.03}px)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-neon-blue">What I Do Best</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Combining technical expertise with creative vision to deliver exceptional results across multiple disciplines.
          </p>
        </div>

        {/* Skills Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="group relative reveal-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
              
              <div className={`relative bg-gradient-to-br ${skill.bgGradient} backdrop-blur-xl rounded-3xl border border-border/50 p-8 overflow-hidden h-full hover:border-transparent transition-all duration-500`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${skill.gradient} rounded-full blur-2xl`} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Title Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <skill.icon className="w-8 h-8 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all duration-300">
                          {skill.title}
                        </h3>
                        <span className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${skill.gradient}`}>
                          {skill.percentage}% Mastery
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {skill.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: hoveredSkill === index ? `${skill.percentage}%` : '0%',
                          transition: 'width 1s ease-out'
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Expertise Marquee */}
        <div className="reveal-up">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Technical Expertise</span>
            </h3>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 py-6">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Marquee - Continuous smooth scroll */}
            <div className="flex w-max animate-scroll-infinite">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 md:gap-6 px-2 md:px-3">
                  {[
                    { name: 'Canva Designer', logo: '/lovable-uploads/logo-canva.jpg' },
                    { name: 'Adobe Photoshop', logo: '/lovable-uploads/logo-photoshop.jpg' },
                    { name: 'After Effects', logo: '/lovable-uploads/logo-after-effects.jpg' },
                    { name: 'Adobe Illustrator', logo: '/lovable-uploads/logo-illustrator.jpg' },
                    { name: 'Final Cut Pro', logo: '/lovable-uploads/logo-final-cut-pro.jpg' },
                    { name: 'Figma', logo: '/lovable-uploads/logo-figma.jpg' },
                    { name: 'Cinema 4D', logo: '/lovable-uploads/logo-cinema-4d.jpg' },
                    { name: 'Blender', logo: '/lovable-uploads/logo-blender.jpg' },
                    { name: 'Adobe Premiere Pro', logo: '/lovable-uploads/logo-premiere-pro.jpg' },
                    { name: 'Sketch', logo: '/lovable-uploads/logo-sketch.png' },
                    { name: 'Adobe XD', logo: '/lovable-uploads/logo-adobe-xd.png' },
                    { name: 'Creative Cloud', logo: '/lovable-uploads/logo-creative-cloud.png' },
                    { name: 'Adobe InDesign', logo: '/lovable-uploads/logo-indesign.png' }
                  ].map((tech) => (
                    <div
                      key={`${setIndex}-${tech.name}`}
                      className="group/logo flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card/80 border border-border/50 p-2 md:p-3 hover:scale-110 hover:border-neon-blue/50 transition-all duration-300 shadow-lg hover:shadow-neon-blue/20"
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

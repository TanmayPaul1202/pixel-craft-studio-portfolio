import { Video, Palette, Zap, Camera, Film, Brush, Wand2, Image, Layers, Layout, Sparkles, Music, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const skills = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing with advanced techniques, storytelling, and seamless transitions.',
    color: 'neon-blue',
    delay: '0s'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative visual design solutions including branding, logos, and marketing materials.',
    color: 'neon-purple',
    delay: '0.1s'
  },
  {
    icon: Zap,
    title: 'Color Grading',
    description: 'Expert color correction and grading to enhance mood, atmosphere, and visual appeal.',
    color: 'neon-magenta',
    delay: '0.2s'
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'End-to-end content creation from concept development to final delivery.',
    color: 'neon-cyan',
    delay: '0.3s'
  }
];

export function SkillsSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-neon-blue/10 blur-xl"
        style={{
          transform: `translate(${(scrollY - 1600) * 0.08}px, ${(scrollY - 1600) * 0.12}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-neon-purple/10 blur-xl"
        style={{
          transform: `translate(${(scrollY - 1600) * -0.06}px, ${(scrollY - 1600) * -0.1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-accent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional results across multiple disciplines.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className={`bg-gradient-card border-border hover:border-${skill.color}/50 transition-all duration-500 hover-scale reveal-up group`}
              style={{ animationDelay: skill.delay }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon with Glow Effect */}
                <div className={`mx-auto mb-6 w-16 h-16 rounded-full bg-${skill.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={`h-8 w-8 text-${skill.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Skill Level Indicator */}
                <div className="mt-6">
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className={`h-full bg-${skill.color} rounded-full animate-scale-in`}
                      style={{ 
                        width: '90%',
                        animationDelay: `${parseFloat(skill.delay) + 0.5}s`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Expert Level</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center reveal-up">
          <h3 className="text-2xl font-semibold mb-8 text-neon-blue">Technical Expertise</h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Marquee container - logos only, fast moving */}
            <div className="flex animate-marquee-fast">
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
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
                      className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background/80 border border-border/50 p-2 md:p-3 hover:scale-110 hover:border-neon-blue/50 transition-all duration-300 shadow-lg"
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
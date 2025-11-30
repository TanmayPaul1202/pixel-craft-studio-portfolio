import { Video, Palette, Zap, Camera, Film, Brush, Wand2, Image, Layers, Layout, Sparkles, Music, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-neon-blue/10 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-neon-purple/10 blur-xl"></div>

      <div className="container mx-auto px-6">
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
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Adobe Premiere Pro', icon: Film, color: 'neon-blue' },
              { name: 'After Effects', icon: Zap, color: 'neon-purple' },
              { name: 'Adobe Photoshop', icon: Image, color: 'neon-cyan' },
              { name: 'Adobe Illustrator', icon: Brush, color: 'neon-magenta' },
              { name: 'Canva Designer', icon: Palette, color: 'neon-blue' },
              { name: 'DaVinci Resolve', icon: Video, color: 'neon-purple' },
              { name: 'Final Cut Pro', icon: Film, color: 'neon-cyan' },
              { name: 'Cinema 4D', icon: Layers, color: 'neon-magenta' },
              { name: 'Blender', icon: Wand2, color: 'neon-blue' },
              { name: 'Figma', icon: Layout, color: 'neon-purple' },
              { name: 'Motion Graphics', icon: Sparkles, color: 'neon-cyan' },
              { name: 'Sound Design', icon: Music, color: 'neon-magenta' },
              { name: 'Color Theory', icon: Eye, color: 'neon-blue' }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative animate-float"
                  style={{ 
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <Card className={`relative bg-gradient-card border-2 border-${tech.color}/30 hover:border-${tech.color}/60 transition-all duration-300 overflow-hidden cursor-pointer`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${tech.color}/5 via-transparent to-${tech.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute inset-0 shadow-[0_0_25px_rgba(59,130,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-4 flex flex-col items-center gap-3 relative z-10 min-w-[140px]">
                      <div className={`p-3 bg-${tech.color}/20 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 text-${tech.color}`} />
                      </div>
                      <p className="text-sm font-medium text-center leading-tight">{tech.name}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
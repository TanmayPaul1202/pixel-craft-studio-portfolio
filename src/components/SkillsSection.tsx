import { Video, Palette, Zap, Camera } from 'lucide-react';
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
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Adobe Premiere Pro', 'After Effects', 'Adobe Photoshop', 'Adobe Illustrator',
              'Canva Designer', 'DaVinci Resolve', 'Final Cut Pro', 'Cinema 4D', 'Blender',
              'Figma', 'Motion Graphics', 'Sound Design', 'Color Theory'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted/30 rounded-full text-sm border border-border hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
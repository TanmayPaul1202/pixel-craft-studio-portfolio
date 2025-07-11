import { ExternalLink, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Wedding Highlights - Mumbai',
    category: 'Wedding Video',
    description: 'Cinematic wedding story capturing the essence of traditional ceremonies with modern storytelling.',
    tags: ['Color Grading', 'Multi-cam', 'Audio Sync'],
    image: '🎬',
    color: 'neon-blue'
  },
  {
    title: 'Agro Business Branding',
    category: 'Corporate Branding',
    description: 'Complete brand identity and promotional video for agricultural business expansion.',
    tags: ['Branding', 'Motion Graphics', 'Voice Over'],
    image: '🌱',
    color: 'neon-purple'
  },
  {
    title: 'IT Company Explainer',
    category: 'Explainer Video',
    description: 'Animated explainer video showcasing software solutions with engaging visuals.',
    tags: ['Animation', '2D Graphics', 'Scripting'],
    image: '💻',
    color: 'neon-magenta'
  },
  {
    title: 'Hotel Promotional Video',
    category: 'Commercial',
    description: 'Luxury hotel showcase highlighting amenities and guest experiences.',
    tags: ['Drone Footage', 'Luxury Edit', 'Music Sync'],
    image: '🏨',
    color: 'neon-cyan'
  },
  {
    title: 'School Annual Event',
    category: 'Event Coverage',
    description: 'Complete coverage of annual school function with highlights reel and full ceremony.',
    tags: ['Event Edit', 'Highlights', 'Multi-format'],
    image: '🎓',
    color: 'neon-yellow'
  },
  {
    title: 'Fashion Brand Campaign',
    category: 'Fashion Video',
    description: 'Dynamic fashion campaign showcasing clothing collection with trendy editing.',
    tags: ['Fashion Edit', 'Color Pop', 'Trendy Cuts'],
    image: '👗',
    color: 'neon-blue'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-32 right-10 w-40 h-40 rounded-full bg-neon-magenta/10 blur-xl float-animation"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 rounded-full bg-neon-cyan/10 blur-xl float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work That <span className="text-transparent bg-clip-text bg-gradient-accent">Speaks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative projects that demonstrate technical expertise, artistic vision, and client satisfaction.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal-up">
          {['All', 'Wedding Video', 'Corporate Branding', 'Commercial', 'Event Coverage'].map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 
                ? "bg-gradient-accent hover:opacity-90 text-background" 
                : "border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-background"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-gradient-card border-border hover:border-${project.color}/50 transition-all duration-500 hover-scale reveal-up group cursor-pointer overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-muted/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                  {project.image}
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/20">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge 
                  variant="outline" 
                  className={`mb-3 border-${project.color}/50 text-${project.color}`}
                >
                  {project.category}
                </Badge>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/30 rounded text-xs text-muted-foreground hover:bg-muted/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-up">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing that exceeds your expectations and brings your vision to life.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-accent hover:opacity-90 text-background font-semibold px-8 py-4 rounded-full glow-blue hover-scale"
          >
            Get Started Today
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center reveal-up">
          <div>
            <div className="text-3xl font-bold text-neon-blue mb-2">15+</div>
            <div className="text-muted-foreground">Wedding Videos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-purple mb-2">25+</div>
            <div className="text-muted-foreground">Brand Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-magenta mb-2">40+</div>
            <div className="text-muted-foreground">Commercial Videos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-cyan mb-2">30+</div>
            <div className="text-muted-foreground">Event Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
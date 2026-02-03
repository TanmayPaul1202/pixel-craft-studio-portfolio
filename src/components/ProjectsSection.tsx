import { ExternalLink, Play, Sparkles, ArrowRight, Eye, Layers, Film, Palette, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const projects = [
  {
    title: 'Traditional Wedding Invitation',
    category: 'Graphic Design',
    description: 'Elegant multi-event wedding invitation with traditional Indian artwork.',
    tags: ['Print Design', 'Traditional', 'Multi-Event'],
    image: '/lovable-uploads/graphic-design-1.jpg',
    gradient: 'from-rose-500/20 to-pink-500/20',
    accent: 'rose'
  },
  {
    title: 'Haldi Ceremony Invitation',
    category: 'Graphic Design',
    description: 'Organic illustrated design with marigold garlands and traditional elements.',
    tags: ['Illustration', 'Festive', 'Floral Design'],
    image: '/lovable-uploads/graphic-design-2.jpg',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    accent: 'amber'
  },
  {
    title: 'Royal Wedding Invitation',
    category: 'Graphic Design',
    description: 'Luxurious wedding card with ornate patterns and golden accents.',
    tags: ['Luxury Design', 'Ornate', 'Cultural'],
    image: '/lovable-uploads/graphic-design-3.jpg',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accent: 'blue'
  },
  {
    title: 'Modern Wedding Reception Card',
    category: 'Graphic Design',
    description: 'Contemporary illustrated couple design with elegant purple tones.',
    tags: ['Modern', 'Illustration', 'Reception'],
    image: '/lovable-uploads/graphic-design-4.jpg',
    gradient: 'from-violet-500/20 to-purple-500/20',
    accent: 'violet'
  },
  {
    title: 'Elegant Floral Save the Date',
    category: 'Graphic Design',
    description: 'Romantic save the date card with white roses and elegant typography.',
    tags: ['Save the Date', 'Floral', 'Elegant'],
    image: '/lovable-uploads/graphic-design-5.jpg',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: 'emerald'
  },
  {
    title: 'Premium Couple Invitation',
    category: 'Graphic Design',
    description: 'Sophisticated wedding invitation with couple illustration.',
    tags: ['Premium', 'Couple Art', 'Floral Frame'],
    image: '/lovable-uploads/graphic-design-6.jpg',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accent: 'pink'
  },
  {
    title: 'Wedding Highlights - Mumbai',
    category: 'Wedding Video',
    description: 'Cinematic wedding story capturing the essence of traditional ceremonies.',
    tags: ['Color Grading', 'Multi-cam', 'Audio Sync'],
    image: '🎬',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    accent: 'blue'
  },
  {
    title: 'Agro Business Branding',
    category: 'Corporate Branding',
    description: 'Complete brand identity and promotional video for agricultural business.',
    tags: ['Branding', 'Motion Graphics', 'Voice Over'],
    image: '🌱',
    gradient: 'from-green-500/20 to-emerald-500/20',
    accent: 'green'
  }
];

const categories = [
  { name: 'All', icon: Layers, count: 8 },
  { name: 'Graphic Design', icon: Palette, count: 6 },
  { name: 'Wedding Video', icon: Film, count: 1 },
  { name: 'Corporate Branding', icon: Building2, count: 1 }
];

const stats = [
  { value: '50+', label: 'Graphic Designs', color: 'from-rose-500 to-pink-500' },
  { value: '15+', label: 'Wedding Videos', color: 'from-blue-500 to-cyan-500' },
  { value: '25+', label: 'Brand Projects', color: 'from-violet-500 to-purple-500' },
  { value: '40+', label: 'Commercial Videos', color: 'from-amber-500 to-yellow-500' }
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-neon-magenta/10 to-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-magenta/10 to-neon-cyan/10 border border-neon-magenta/20 mb-6">
            <Sparkles className="w-4 h-4 text-neon-magenta animate-pulse" />
            <span className="text-sm font-medium text-neon-magenta">Featured Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Work That{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan animate-gradient-x">
                Speaks
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="hsl(var(--neon-magenta))" />
                    <stop offset="0.5" stopColor="hsl(var(--neon-purple))" />
                    <stop offset="1" stopColor="hsl(var(--neon-cyan))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of creative excellence — where vision meets execution
          </p>
        </div>

        {/* Category Filter - Modern Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal-up">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  group relative px-6 py-3 rounded-2xl font-medium transition-all duration-500
                  ${isActive 
                    ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan text-background shadow-lg shadow-neon-magenta/25' 
                    : 'bg-card/50 text-muted-foreground hover:text-foreground border border-border hover:border-neon-magenta/30'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  {category.name}
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs
                    ${isActive ? 'bg-background/20' : 'bg-muted/50'}
                  `}>
                    {category.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`
                group relative rounded-3xl overflow-hidden reveal-up
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 3 ? 'lg:col-span-2' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Background */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${project.gradient}
                transition-all duration-700
                ${hoveredIndex === index ? 'scale-110 opacity-70' : 'opacity-40'}
              `} />
              
              {/* Glass Card */}
              <div className="relative h-full min-h-[320px] backdrop-blur-sm bg-card/30 border border-white/10 p-6 flex flex-col transition-all duration-500 group-hover:bg-card/50 group-hover:border-white/20">
                {/* Project Image */}
                <div className={`
                  relative rounded-2xl overflow-hidden mb-6 flex-shrink-0
                  ${index === 0 ? 'h-64' : 'h-44'}
                `}>
                  {project.image.startsWith('/') ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-0 rounded-xl"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="border-white/30 text-white hover:bg-white/20 rounded-xl backdrop-blur-md"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={`
                      w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}
                      transition-all duration-500
                    `}>
                      <span className={`
                        text-6xl transition-all duration-500
                        ${hoveredIndex === index ? 'scale-125' : 'scale-100'}
                      `}>
                        {project.image}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Category Badge */}
                  <Badge 
                    className={`
                      w-fit mb-3 bg-gradient-to-r ${project.gradient} border-0 
                      text-foreground font-medium px-3 py-1 rounded-lg
                    `}
                  >
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className={`
                    font-bold mb-2 transition-all duration-300
                    ${index === 0 ? 'text-2xl' : 'text-lg'}
                    group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-magenta group-hover:to-neon-cyan
                  `}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-magenta to-neon-cyan flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-background" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 reveal-up">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 text-center overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 reveal-up">
          <div className="relative inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-white/10 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-magenta/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Create Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-cyan">
                  Amazing
                </span>
                ?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's collaborate to bring your vision to life with stunning designs that captivate.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-magenta to-neon-cyan hover:opacity-90 text-background font-semibold px-8 py-6 rounded-2xl shadow-lg shadow-neon-magenta/25 hover:shadow-neon-magenta/40 transition-all duration-500 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

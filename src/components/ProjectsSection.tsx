import { ExternalLink, Play, Sparkles, ArrowRight, ArrowLeft, Eye, Layers, Film, Palette, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useRef, useEffect } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [filteredProjects]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.snap-center')?.clientWidth || 320;
    const gap = 24;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  // Track active card on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const children = el.querySelectorAll('.snap-center');
      let closest = 0;
      let minDist = Infinity;
      const center = el.scrollLeft + el.clientWidth / 2;
      children.forEach((child, i) => {
        const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).clientWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [filteredProjects]);

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
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal-up">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setActiveIndex(0);
                  if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                }}
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

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-end gap-2 mb-6 reveal-up">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? 'border-neon-magenta/40 bg-card/60 text-foreground hover:bg-neon-magenta/20 hover:border-neon-magenta/60'
                : 'border-border/30 text-muted-foreground/30 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? 'border-neon-cyan/40 bg-card/60 text-foreground hover:bg-neon-cyan/20 hover:border-neon-cyan/60'
                : 'border-border/30 text-muted-foreground/30 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="reveal-up">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`snap-center flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[420px] group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'scale-100' : 'scale-[0.95] opacity-80'
                }`}
              >
                {/* Card Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />

                {/* Glass Card */}
                <div className="relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    {project.image.startsWith('/') ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                        
                        {/* Hover overlay with action */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                            <Eye className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                        <span className="text-7xl group-hover:scale-125 transition-transform duration-500">
                          {project.image}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 -mt-8 relative z-10">
                    {/* Category Badge */}
                    <Badge className={`mb-3 bg-gradient-to-r ${project.gradient} border-0 text-foreground font-medium px-3 py-1 rounded-lg text-xs`}>
                      {project.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-magenta group-hover:to-neon-cyan">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/5 group-hover:border-white/15 group-hover:bg-white/10 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const children = el.querySelectorAll('.snap-center');
                  if (children[index]) {
                    (children[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? 'w-8 bg-gradient-to-r from-neon-magenta to-neon-cyan'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
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

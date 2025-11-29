import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <div className="relative mx-auto w-48 h-32 transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/pcs-logo.png" 
              alt="Pixel Craft Studio Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Main Headline - Bold & Large */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-gradient">
              Video Editor &<br />Graphic Designer
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto">
            Creating premium visual stories that captivate,<br />inspire, and leave lasting impressions
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            onClick={onExploreWork}
            className="bg-gradient-primary hover:opacity-90 text-background font-semibold text-lg px-10 py-7 rounded-full shadow-lg glow-orange transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-6 w-6" />
            View Work
          </Button>
          
          <Button
            size="lg"
            onClick={onContact}
            className="glass-card hover:bg-primary/10 text-foreground font-semibold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 border-2 border-primary/30"
          >
            Hire Me
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>

        {/* Minimal Stats */}
        <div className="flex flex-wrap justify-center gap-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">5+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Years</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

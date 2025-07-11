import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-neon-blue/20 blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-neon-purple/20 blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 rounded-full bg-neon-magenta/20 blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-hero p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl">
              🎬
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Welcome to </span>
            <span className="text-transparent bg-clip-text bg-gradient-hero neon-text">
              Pixel Craft Studio
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our work is more than you think.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Professional video editing, graphic design, and content creation 
            that exceeds expectations and brings your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-background font-semibold px-8 py-4 rounded-full glow-blue hover-scale"
              onClick={onExploreWork}
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background font-semibold px-8 py-4 rounded-full hover-scale"
              onClick={onContact}
            >
              <Play className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-magenta mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
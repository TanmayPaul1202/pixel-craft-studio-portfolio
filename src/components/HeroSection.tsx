
import { ArrowRight, MessageCircle, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-blue/30 blur-2xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-neon-purple/30 blur-2xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-neon-magenta/20 blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 reveal-up">
          <img 
            src="/lovable-uploads/a91f2a74-b164-4c9d-b67b-1999638f0ce6.png" 
            alt="Pixel Craft Studio Logo" 
            className="w-32 h-32 mx-auto mb-4 hover-scale"
          />
        </div>

        {/* Studio Name */}
        <div className="mb-6 reveal-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-neon-blue neon-text">Pixel</span>
            <span className="text-neon-magenta neon-text"> Craft</span>
            <span className="text-neon-purple neon-text block md:inline md:ml-4">Studio</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-8 reveal-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground">
            Our work is <span className="text-transparent bg-clip-text bg-gradient-accent font-semibold">more than you think</span>
          </p>
        </div>

        {/* Profile Picture Placeholder */}
        <div className="mb-8 reveal-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-32 h-32 rounded-full bg-gradient-card border-4 border-neon-blue/50 mx-auto flex items-center justify-center hover-scale">
            <Sparkles className="h-12 w-12 text-neon-blue" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Professional Video Editor & Designer</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-up" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            onClick={onExploreWork}
            className="bg-gradient-accent hover:scale-105 transition-all duration-300 text-lg px-8 py-4 glow-blue group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={onContact}
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300 text-lg px-8 py-4 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>

        {/* Animated Intro Text */}
        <div className="mt-12 reveal-up" style={{ animationDelay: '1s' }}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional video editing, graphic design, and content creation services that bring your vision to life with creativity and precision.
          </p>
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

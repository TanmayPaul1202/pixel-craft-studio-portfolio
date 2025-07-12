
import { ArrowRight, MessageCircle, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Clean Profile Logo */}
        <div className="mb-8 reveal-up">
          <div className="relative mx-auto w-32 h-32">
            <img 
              src="/lovable-uploads/2c923ae7-2377-4856-ace5-b3b4159939ef.png" 
              alt="Profile Logo" 
              className="w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Simplified Studio Name */}
        <div className="mb-6 reveal-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-foreground">
            Pixel Craft Studio
          </h1>
        </div>

        {/* Clean Tagline */}
        <div className="mb-8 reveal-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-3">
            Professional Video Editor & Creative Designer
          </p>
          <p className="text-lg text-muted-foreground">
            Creating visual stories that captivate and inspire
          </p>
        </div>

        {/* Simple Rating */}
        <div className="mb-8 reveal-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-current" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Trusted by 100+ satisfied clients</p>
        </div>

        {/* Clean CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-up mb-10" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            onClick={onExploreWork}
            className="bg-primary hover:bg-primary/90 transition-colors duration-200 text-lg px-8 py-3"
          >
            <Play className="mr-2 h-5 w-5" />
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={onContact}
            className="border-border hover:bg-muted transition-colors duration-200 text-lg px-8 py-3"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        {/* Simplified Intro Text */}
        <div className="reveal-up" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto p-6 bg-muted/30 rounded-xl border border-border/50">
            <p className="text-base text-muted-foreground leading-relaxed">
              Specializing in cinematic video editing, motion graphics, and brand identity design. 
              I transform your creative vision into compelling visual stories.
            </p>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-10 border border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

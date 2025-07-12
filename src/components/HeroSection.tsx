
import { ArrowRight, MessageCircle, Play, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/20 blur-3xl float-animation opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/25 blur-3xl float-animation opacity-70" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-neon-magenta/15 blur-2xl float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* New Profile Logo */}
        <div className="mb-8 reveal-up">
          <div className="relative mx-auto w-40 h-40">
            <img 
              src="/lovable-uploads/2c923ae7-2377-4856-ace5-b3b4159939ef.png" 
              alt="Profile Logo" 
              className="w-full h-full hover-scale transition-all duration-500 drop-shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Studio Name */}
        <div className="mb-8 reveal-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-neon-cyan neon-text drop-shadow-lg">Pixel</span>
            <span className="text-neon-magenta neon-text drop-shadow-lg"> Craft</span>
            <span className="text-neon-purple neon-text block md:inline md:ml-4 drop-shadow-lg">Studio</span>
          </h1>
        </div>

        {/* Enhanced Tagline */}
        <div className="mb-10 reveal-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-4">
            Professional Video Editor & Creative Designer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Creating <span className="text-transparent bg-clip-text bg-gradient-accent font-semibold">visual magic</span> that exceeds expectations
          </p>
        </div>

        {/* Rating/Testimonial */}
        <div className="mb-10 reveal-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center space-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-neon-yellow fill-current" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Trusted by 100+ satisfied clients worldwide</p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-up mb-12" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            onClick={onExploreWork}
            className="bg-gradient-accent hover:scale-110 transition-all duration-300 text-lg px-10 py-5 glow-blue group shadow-2xl border-0"
          >
            <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" />
            View My Portfolio
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={onContact}
            className="border-2 border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300 text-lg px-10 py-5 hover:scale-110 shadow-xl backdrop-blur-sm"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Let's Collaborate
          </Button>
        </div>

        {/* Enhanced Intro Text */}
        <div className="reveal-up" style={{ animationDelay: '1s' }}>
          <div className="max-w-3xl mx-auto p-6 bg-muted/20 backdrop-blur-sm rounded-2xl border border-border/30">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in cinematic video editing, motion graphics, and brand identity design. 
              I transform your creative vision into compelling visual stories that captivate and inspire.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-neon-cyan rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-4 bg-neon-cyan rounded-full mt-2 animate-pulse shadow-lg shadow-neon-cyan/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

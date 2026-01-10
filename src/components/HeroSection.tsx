import { ArrowRight, MessageCircle, Play, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContact: () => void;
}

const roles = ['Video Editor', 'Graphic Designer', 'Motion Artist', 'Brand Creator'];
const tagline = "Transforming ideas into stunning visuals that captivate, inspire, and leave a lasting impression";

export function HeroSection({ onExploreWork, onContact }: HeroSectionProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Role text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for tagline
  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (index < tagline.length) {
        setDisplayedText(tagline.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">Creative Studio</span>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-10 reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/pcs-logo.png" 
                alt="Pixel Craft Studio Logo" 
                className="relative h-40 md:h-52 w-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8 reveal-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-orbitron">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">
                  Pixel
                </span>
              </span>
              <span className="text-foreground mx-4">Craft</span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-blue">
                  Studio
                </span>
              </span>
            </h1>
          </div>

          {/* Animated Role */}
          <div className="text-center mb-6 reveal-up h-12" style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden h-full flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-light text-muted-foreground">
                Professional{' '}
                <span 
                  key={currentRole}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold animate-fade-in"
                >
                  {roles[currentRole]}
                </span>
              </p>
            </div>
          </div>

          {/* Tagline with Typing Effect */}
          <div className="text-center mb-12 reveal-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed min-h-[60px]">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-0.5 h-5 bg-neon-blue ml-1 animate-pulse"></span>
              )}
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 reveal-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">100+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-magenta">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-blue">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-up mb-12" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={onExploreWork}
              className="group relative bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-background font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neon-purple/30"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onContact}
              className="group border-2 border-neon-purple/50 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Let's Connect
            </Button>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center gap-3 reveal-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-neon-yellow fill-neon-yellow" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Rated <span className="text-foreground font-semibold">5.0</span> by our amazing clients
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        {['01', '02', '03'].map((num, i) => (
          <div key={num} className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-xs text-muted-foreground hover:border-neon-blue hover:text-neon-blue transition-colors cursor-pointer">
            {num}
          </div>
        ))}
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent"></div>
          <span className="text-xs text-muted-foreground tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
            Est. 2022
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

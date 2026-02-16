import { ArrowRight, MessageCircle, Play, Star, Sparkles, ChevronDown } from 'lucide-react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/8 rounded-full blur-[120px] animate-ios-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-purple/8 rounded-full blur-[120px] animate-ios-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Split Layout */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          
          {/* Left Side — Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="mb-6 reveal-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
                <span className="text-xs font-semibold tracking-wider uppercase text-neon-blue">Creative Studio</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="mb-6 reveal-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue">
                  Pixel
                </span>
                <span className="block text-foreground font-light tracking-[0.15em] uppercase text-[0.6em] mt-1">
                  Craft
                </span>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-magenta">
                  Studio
                </span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="mb-5 reveal-up h-10" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl font-light text-muted-foreground">
                Professional{' '}
                <span 
                  key={currentRole}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold animate-fade-in"
                >
                  {roles[currentRole]}
                </span>
              </p>
            </div>

            {/* Tagline */}
            <div className="mb-8 reveal-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg min-h-[48px]">
                {displayedText}
                {isTyping && (
                  <span className="inline-block w-0.5 h-4 bg-neon-blue ml-1 animate-pulse" />
                )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 reveal-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={onExploreWork}
                className="group relative bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-white font-semibold text-base px-7 py-5 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neon-purple/30"
              >
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onContact}
                className="group border border-border/50 bg-card/30 backdrop-blur-xl text-foreground hover:bg-card/50 hover:border-border text-base px-7 py-5 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95 hover:scale-[1.02]"
              >
                <MessageCircle className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Let's Connect
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-6 md:gap-10 reveal-up" style={{ animationDelay: '0.5s' }}>
              {[
                { value: '50+', label: 'Happy Clients' },
                { value: '150+', label: 'Projects Done' },
                { value: '2+', label: 'Years Exp.' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — Visual */}
          <div className="flex items-center justify-center order-1 lg:order-2 reveal-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/15 to-neon-magenta/20 rounded-[3rem] blur-[80px] scale-110" />
              
              {/* Main card */}
              <div className="relative bg-card/40 backdrop-blur-2xl border border-border/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/20">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                    <img 
                      src="/lovable-uploads/pcs-logo.png" 
                      alt="Pixel Craft Studio Logo" 
                      className="relative h-36 md:h-44 w-auto transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-neon-yellow fill-neon-yellow" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Rated <span className="text-foreground font-semibold">5.0</span> by our clients
                  </p>
                </div>

                {/* Decorative lines */}
                <div className="absolute top-6 right-8 flex flex-col gap-1.5 opacity-30">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-neon-blue to-transparent rounded-full" />
                  <div className="w-5 h-0.5 bg-gradient-to-r from-neon-purple to-transparent rounded-full" />
                  <div className="w-3 h-0.5 bg-gradient-to-r from-neon-magenta to-transparent rounded-full" />
                </div>
                <div className="absolute bottom-6 left-8 flex flex-col gap-1.5 opacity-30">
                  <div className="w-3 h-0.5 bg-gradient-to-l from-neon-blue to-transparent rounded-full" />
                  <div className="w-5 h-0.5 bg-gradient-to-l from-neon-purple to-transparent rounded-full" />
                  <div className="w-8 h-0.5 bg-gradient-to-l from-neon-magenta to-transparent rounded-full" />
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-blue/10 rounded-3xl blur-sm border border-neon-blue/20 rotate-12 animate-ios-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-neon-magenta/10 rounded-2xl blur-sm border border-neon-magenta/20 -rotate-12 animate-ios-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1.5 animate-bounce opacity-60">
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

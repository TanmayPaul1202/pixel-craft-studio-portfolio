import { ArrowRight, MessageCircle, Play, Sparkles, ChevronDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* Dramatic Background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Intense gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-neon-purple/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-neon-magenta/8 via-transparent to-transparent" />
        
        {/* Large dramatic orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/10 rounded-full blur-[180px]"
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          
          {/* Left Side — Text Content */}
          <div className="flex flex-col justify-center">
            {/* Logo with dramatic glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="mb-8"
            >
              <div className="relative group inline-block">
                <div className="absolute -inset-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <img 
                  src="/lovable-uploads/pcs-logo.png" 
                  alt="Pixel Craft Studio Logo" 
                  className="relative h-28 md:h-36 w-auto transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue/15 to-neon-purple/15 border border-neon-blue/30 backdrop-blur-xl">
                <Zap className="w-4 h-4 text-neon-blue animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neon-blue">Creative Studio</span>
                <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
              </div>
            </motion.div>

            {/* Main Title — Bigger & Bolder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                  Pixel
                </span>
                <span className="block text-foreground font-light tracking-[0.2em] uppercase text-[0.55em] mt-1">
                  Craft
                </span>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-magenta bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite_reverse]">
                  Studio
                </span>
              </h1>
            </motion.div>

            {/* Animated Role — Larger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-5 h-12"
            >
              <p className="text-2xl md:text-3xl font-light text-muted-foreground">
                Professional{' '}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-bold"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg min-h-[56px]">
                {displayedText}
                {isTyping && (
                  <span className="inline-block w-0.5 h-5 bg-neon-blue ml-1 animate-pulse" />
                )}
              </p>
            </motion.div>

            {/* CTA Buttons — Bigger & Bolder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={onExploreWork}
                className="group relative overflow-hidden bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-2xl transition-all duration-300 active:scale-95 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center">
                  <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-125" />
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onContact}
                className="group border-2 border-border/50 bg-card/20 backdrop-blur-xl text-foreground hover:bg-card/40 hover:border-neon-purple/50 text-lg px-8 py-6 rounded-2xl transition-all duration-300 active:scale-95 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12 group-hover:text-neon-purple" />
                Let's Connect
              </Button>
            </motion.div>

            {/* Stats Row — Bolder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-8 md:gap-12"
            >
              {[
                { value: '50+', label: 'Happy Clients' },
                { value: '150+', label: 'Projects Done' },
                { value: '2+', label: 'Years Exp.' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex flex-col cursor-default"
                >
                  <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-muted-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground mt-1 tracking-wide">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side — Hero Image with dramatic effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center justify-center relative"
          >
            {/* Multi-layered ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 via-neon-purple/25 to-neon-magenta/30 rounded-full blur-[120px] scale-150" />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/15 via-transparent to-neon-magenta/15 rounded-full blur-[80px] scale-125 animate-ios-pulse" />
            
            {/* Rotating ring effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full border border-neon-blue/10"
              style={{ borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full border border-neon-purple/10"
              style={{ borderStyle: 'dashed' }}
            />

            <motion.img 
              src="/lovable-uploads/hero-memoji.png" 
              alt="Creative team" 
              className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto object-contain drop-shadow-[0_0_40px_rgba(96,165,250,0.3)] scale-125"
              whileHover={{ scale: 1.35, transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — Dramatic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-semibold">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-neon-blue rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

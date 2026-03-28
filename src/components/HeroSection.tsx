import { ArrowRight, MessageCircle, Play, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    }, 35);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Interactive gradient that follows mouse */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-20 transition-all duration-[2s] ease-out"
          style={{
            background: 'radial-gradient(circle, hsl(var(--neon-blue)) 0%, hsl(var(--neon-purple)) 50%, transparent 70%)',
            left: `${mousePos.x * 60}%`,
            top: `${mousePos.y * 60}%`,
          }}
        />
        
        {/* Accent orbs */}
        <motion.div
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[20%] w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.15, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] bg-neon-blue/8 rounded-full blur-[120px]"
        />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* Subtle horizontal lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, hsl(var(--foreground) / 0.1) 79px, hsl(var(--foreground) / 0.1) 80px)',
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Corner accents */}
        <svg className="absolute top-16 right-16 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <motion.circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="hsl(var(--neon-blue))"
            strokeWidth="0.5"
            strokeDasharray="4 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50" cy="50" r="30"
            fill="none"
            stroke="hsl(var(--neon-purple))"
            strokeWidth="0.5"
            strokeDasharray="2 8"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <svg className="absolute bottom-24 left-16 w-24 h-24 opacity-10" viewBox="0 0 100 100">
          <motion.rect
            x="20" y="20" width="60" height="60" rx="8"
            fill="none"
            stroke="hsl(var(--neon-magenta))"
            strokeWidth="0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Floating particles */}
        {[
          { left: '12%', top: '25%', size: 3, delay: 0, color: '--neon-blue' },
          { left: '85%', top: '35%', size: 2, delay: 1, color: '--neon-purple' },
          { left: '75%', top: '70%', size: 4, delay: 2, color: '--neon-magenta' },
          { left: '20%', top: '65%', size: 2.5, delay: 0.5, color: '--neon-blue' },
          { left: '50%', top: '15%', size: 2, delay: 1.5, color: '--neon-purple' },
          { left: '90%', top: '55%', size: 3, delay: 3, color: '--neon-cyan' },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              backgroundColor: `hsl(var(${p.color}))`,
              boxShadow: `0 0 ${p.size * 4}px hsl(var(${p.color}) / 0.5)`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-blue/25 bg-neon-blue/5 backdrop-blur-xl shadow-[0_0_20px_rgba(96,165,250,0.08)]">
              <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neon-blue/90">Creative Studio</span>
              <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 relative"
          >
            {/* Glow behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-magenta/10 blur-[80px] scale-150" />
            
            <h1 className="relative text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[10.5rem] font-black leading-[0.82] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              <motion.span 
                className="block italic bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-blue)), hsl(var(--neon-purple)))',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Pixel
              </motion.span>
              <span className="block text-foreground/90 font-extralight tracking-[0.35em] uppercase text-[0.38em] my-1 md:my-2">
                Craft
              </span>
              <motion.span 
                className="block italic bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(var(--neon-magenta)), hsl(var(--neon-purple)), hsl(var(--neon-blue)))',
                }}
                animate={{ backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Studio
              </motion.span>
            </h1>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-blue/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-neon-purple/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-purple/50" />
          </motion.div>

          {/* Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mb-6 h-10 flex items-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground/80">
              Professional{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ y: 16, opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -16, opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.35 }}
                  className="inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta"
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
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mb-12 max-w-xl mx-auto"
          >
            <p className="text-base md:text-lg text-muted-foreground/60 leading-relaxed min-h-[52px]">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-[2px] h-[18px] bg-neon-blue/80 ml-0.5 animate-pulse align-middle" />
              )}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={onExploreWork}
              className="group relative overflow-hidden bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta text-primary-foreground font-semibold text-base px-8 py-5 rounded-full transition-all duration-500 active:scale-95 hover:scale-105 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta via-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative flex items-center gap-2">
                <Play className="h-4 w-4 fill-current" />
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onContact}
              className="group border border-border/40 bg-card/10 backdrop-blur-2xl text-foreground/80 hover:text-foreground hover:bg-card/20 hover:border-neon-purple/30 text-base px-8 py-5 rounded-full transition-all duration-500 active:scale-95 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
            >
              <MessageCircle className="mr-2 h-4 w-4 transition-all group-hover:text-neon-purple group-hover:rotate-6" />
              Let's Connect
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center"
          >
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '150+', label: 'Projects Done' },
              { value: '2+', label: 'Years Exp.' },
            ].map((stat, i, arr) => (
              <div key={i} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex flex-col items-center px-6 md:px-10 cursor-default"
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground/90 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-medium text-muted-foreground/50 mt-1 tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </motion.div>
                {i < arr.length - 1 && (
                  <div className="w-px h-10 bg-border/20" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-muted-foreground/40 tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[18px] h-7 rounded-full border border-muted-foreground/20 flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[3px] h-[3px] bg-neon-blue/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

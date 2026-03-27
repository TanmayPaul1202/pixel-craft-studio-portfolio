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
      {/* Abstract Geometric Background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/8 via-background to-neon-purple/8" />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[15%] w-72 h-72 border border-neon-blue/15 rounded-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-48 h-48 border border-neon-purple/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[15%] left-[8%] w-64 h-64 border border-neon-magenta/10 rotate-45"
          style={{ borderRadius: '30%' }}
        />
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[25%] w-4 h-4 bg-neon-blue/30 rounded-full blur-[2px]"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-3 h-3 bg-neon-purple/40 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ y: [10, -20, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[40%] w-2 h-2 bg-neon-magenta/30 rounded-full"
        />

        {/* Large ambient glow blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-neon-blue/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-neon-purple/15 rounded-full blur-[150px]"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content — Full-width centered */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 backdrop-blur-xl">
              <Zap className="w-4 h-4 text-neon-blue" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-neon-blue">Creative Studio</span>
              <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            </div>
          </motion.div>

          {/* Main Title — Massive & Centered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.85] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                Pixel
              </span>
              <span className="block text-foreground font-extralight tracking-[0.25em] uppercase text-[0.45em] mt-2">
                Craft
              </span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-magenta bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite_reverse]">
                Studio
              </span>
            </h1>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8"
          />

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 h-12"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
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
            className="mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto min-h-[56px]">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-0.5 h-5 bg-neon-blue ml-1 animate-pulse" />
              )}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={onExploreWork}
              className="group relative overflow-hidden bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-primary-foreground font-bold text-lg px-10 py-6 rounded-full transition-all duration-300 active:scale-95 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(96,165,250,0.35)]"
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
              className="group border-2 border-border/50 bg-card/20 backdrop-blur-xl text-foreground hover:bg-card/40 hover:border-neon-purple/50 text-lg px-10 py-6 rounded-full transition-all duration-300 active:scale-95 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12 group-hover:text-neon-purple" />
              Let's Connect
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-10 md:gap-16"
          >
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '150+', label: 'Projects Done' },
              { value: '2+', label: 'Years Exp.' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex flex-col items-center cursor-default"
              >
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground mt-1.5 tracking-wider uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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

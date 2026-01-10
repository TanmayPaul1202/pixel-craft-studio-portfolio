import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent animate-pulse" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo */}
            <motion.div
              animate={{ 
                filter: ['drop-shadow(0 0 20px hsl(var(--neon-blue)))', 'drop-shadow(0 0 40px hsl(var(--neon-purple)))', 'drop-shadow(0 0 20px hsl(var(--neon-blue)))']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/pcs-logo.png" 
                alt="Pixel Craft Studio" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </motion.div>

            {/* Brand name with animated letters */}
            <div className="flex items-center gap-2 mb-8">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold font-orbitron text-neon-blue"
              >
                Pixel
              </motion.span>
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold font-orbitron text-neon-magenta"
              >
                Craft
              </motion.span>
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold font-orbitron text-neon-purple"
              >
                Studio
              </motion.span>
            </div>

            {/* Progress bar */}
            <div className="w-64 md:w-80 h-1 bg-muted rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta rounded-full"
              />
            </div>

            {/* Loading text */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm text-muted-foreground font-poppins tracking-widest uppercase"
            >
              Loading Experience...
            </motion.div>

            {/* Percentage */}
            <motion.div
              className="mt-2 text-xl font-orbitron text-foreground"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-neon-blue"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

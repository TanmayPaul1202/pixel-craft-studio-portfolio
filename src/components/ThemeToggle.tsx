import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-purple/0 to-neon-magenta/0 group-hover:from-neon-blue/10 group-hover:via-neon-purple/10 group-hover:to-neon-magenta/10 transition-all duration-300" />
      <Sun className={`h-5 w-5 absolute transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100 text-neon-yellow'}`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100 text-neon-blue' : '-rotate-90 scale-0 opacity-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

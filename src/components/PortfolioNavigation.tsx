import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface PortfolioNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function PortfolioNavigation({ activeSection, onSectionChange }: PortfolioNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error signing out',
        description: error.message,
      });
    } else {
      toast({
        title: 'Signed out',
        description: 'You have been signed out successfully.',
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
      isScrolled 
        ? 'bg-background/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/30 shadow-lg shadow-black/5' 
        : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Navigation - centered unified bar for all screen sizes */}
          <div className="flex items-center">
            <div className="flex items-center gap-0.5 sm:gap-1 bg-muted/40 backdrop-blur-xl backdrop-saturate-150 rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 border border-white/10 shadow-lg shadow-black/5">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden group active:scale-95 ${
                    activeSection === item.id 
                      ? 'text-background' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta rounded-full shadow-lg shadow-neon-purple/30 animate-ios-scale-in"></span>
                  )}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeSection !== item.id ? 'bg-muted/0 group-hover:bg-white/10' : ''
                  }`}></span>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
              
              {/* Separator */}
              <span className="w-px h-5 sm:h-6 bg-white/15 mx-0.5 sm:mx-1"></span>
              
              {/* Theme toggle inside pill */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

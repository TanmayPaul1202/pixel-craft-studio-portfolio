import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles, LogIn, LogOut, User } from 'lucide-react';
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
        <div className="flex items-center justify-center h-20 md:h-24">
          {/* Desktop Navigation - centered unified bar */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-muted/40 backdrop-blur-xl backdrop-saturate-150 rounded-full px-2 py-2 border border-white/10 shadow-lg shadow-black/5">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden group active:scale-95 ${
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
              <span className="w-px h-6 bg-white/15 mx-1"></span>
              
              {/* Theme toggle inside pill */}
              <ThemeToggle />
              
              {/* Auth inside pill */}
              {!loading && (
                user ? (
                  <>
                    <Button
                      variant="ghost"
                      onClick={() => navigate('/dashboard')}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10"
                    >
                      <User className="w-4 h-4 text-neon-purple" />
                      <span className="text-sm text-foreground">{user.email?.split('@')[0]}</span>
                    </Button>
                    <Button 
                      onClick={handleSignOut}
                      variant="ghost"
                      className="rounded-full hover:bg-white/10 px-3"
                    >
                      <LogOut className="w-4 h-4" />
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => navigate('/auth')}
                    className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-background font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button, Theme Toggle & Auth */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            {!loading && !user && (
              <Button 
                onClick={() => navigate('/auth')}
                size="sm"
                className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-background font-semibold px-4 py-2 rounded-full transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="relative w-12 h-12 rounded-full bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-neon-blue/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu className="h-5 w-5" />
              </span>
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <X className="h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - iOS-style sheet */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-2 border-t border-white/10 bg-background/50 backdrop-blur-2xl rounded-b-3xl mx-2 mb-2 px-4">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`w-full text-left py-4 px-6 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-3 active:scale-[0.98] ${
                  isMenuOpen ? 'animate-ios-slide-up' : ''
                } ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 text-foreground border border-white/20 shadow-lg shadow-neon-purple/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5 hover:pl-8'
                }`}
              >
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-lg shadow-neon-purple/50"></span>
                )}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            {/* Mobile Auth */}
            <div className="pt-4 space-y-3">
              {!loading && (
                user ? (
                  <>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        navigate('/dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-muted/30 border border-border/50 hover:border-neon-purple/50 hover:bg-neon-purple/10"
                    >
                      <User className="w-4 h-4 text-neon-purple" />
                      <span className="text-sm text-foreground">{user.email}</span>
                    </Button>
                    <Button 
                      onClick={handleSignOut}
                      variant="outline"
                      className="w-full border-border/50 hover:border-neon-magenta/50 hover:bg-neon-magenta/10 py-4 rounded-xl"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => navigate('/auth')}
                    className="w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-background font-semibold py-4 rounded-xl"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

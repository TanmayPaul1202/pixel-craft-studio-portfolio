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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/pcs-logo.png" 
                alt="Pixel Craft Studio Logo" 
                className="relative h-14 md:h-16 w-auto transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl md:text-2xl font-bold font-orbitron tracking-tight">
                <span className="text-neon-blue">Pixel</span>
                <span className="text-neon-magenta">Craft</span>
              </span>
              <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Studio</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-muted/30 backdrop-blur-md rounded-full px-2 py-2 border border-border/50">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden group ${
                    activeSection === item.id 
                      ? 'text-background' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {/* Active Background */}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta rounded-full animate-pulse"></span>
                  )}
                  {/* Hover Effect */}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeSection !== item.id ? 'bg-muted/0 group-hover:bg-muted/50' : ''
                  }`}></span>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            {!loading && (
              user ? (
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/30 border border-border/50 hover:border-neon-purple/50 hover:bg-neon-purple/10"
                  >
                    <User className="w-4 h-4 text-neon-purple" />
                    <span className="text-sm text-foreground">{user.email?.split('@')[0]}</span>
                  </Button>
                  <Button 
                    onClick={handleSignOut}
                    variant="outline"
                    className="border-border/50 hover:border-neon-magenta/50 hover:bg-neon-magenta/10 rounded-full transition-all duration-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => navigate('/auth')}
                  className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta hover:opacity-90 text-background font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/30"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              )
            )}
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

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-2 border-t border-border/30">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 text-foreground border border-neon-purple/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:pl-8'
                }`}
              >
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"></span>
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

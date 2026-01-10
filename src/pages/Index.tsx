import { useState, useEffect } from 'react';
import { PortfolioNavigation } from '@/components/PortfolioNavigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GraphicDesignGallery } from '@/components/GraphicDesignGallery';
import { ContactSection } from '@/components/ContactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CustomCursor } from '@/components/CustomCursor';
import { Preloader } from '@/components/Preloader';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle scroll animation reveals with enhanced effects
  useEffect(() => {
    // Section observer for main section transitions
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Element observer for individual reveal animations
    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add staggered delay for multiple elements
          const delay = entry.target.getAttribute('data-delay');
          if (delay) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, parseInt(delay));
          } else {
            entry.target.classList.add('active');
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    const sections = document.querySelectorAll('section[id]');
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-rotate, .reveal-stagger');
    
    // Animation pattern assignments
    const animationPatterns = ['section-fade', 'section-slide-left', 'section-zoom', 'section-slide-right', 'section-clip', 'section-flip'];
    
    sections.forEach((section, index) => {
      const sectionId = section.id;
      
      if (sectionId === 'home') {
        section.classList.add('section-fade');
      } else {
        const patternIndex = index % animationPatterns.length;
        section.classList.add(animationPatterns[patternIndex]);
      }
      
      sectionObserver.observe(section);
    });
    
    revealElements.forEach((el) => elementObserver.observe(el));

    // Smooth parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
      revealElements.forEach((el) => elementObserver.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-background text-foreground font-poppins cursor-none ${isLoading ? 'overflow-hidden' : ''}`}>
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Navigation */}
      <PortfolioNavigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <main>
        <HeroSection 
          onExploreWork={scrollToProjects}
          onContact={scrollToContact}
        />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <GraphicDesignGallery />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold font-orbitron">
                <span className="text-neon-blue">Pixel</span>
                <span className="text-neon-magenta">Craft</span>
                <span className="text-neon-purple ml-2">Studio</span>
              </span>
            </div>
            <div className="text-muted-foreground">
              <p>&copy; 2025 Pixel Craft Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Index;

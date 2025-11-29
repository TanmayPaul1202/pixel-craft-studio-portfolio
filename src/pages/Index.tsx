import { useState, useEffect } from 'react';
import { PortfolioNavigation } from '@/components/PortfolioNavigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GraphicDesignGallery } from '@/components/GraphicDesignGallery';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll animation reveals
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Update active section based on which section is in view
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all reveal elements and sections
    const revealElements = document.querySelectorAll('.reveal-up');
    const sections = document.querySelectorAll('section[id]');
    
    revealElements.forEach((el) => observer.observe(el));
    sections.forEach((section) => observer.observe(section));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      sections.forEach((section) => observer.unobserve(section));
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
    <div className="min-h-screen bg-background text-foreground font-poppins">
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
        <ServicesSection />
        <ProjectsSection />
        <GraphicDesignGallery />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer - Minimal */}
      <footer className="py-12 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl font-bold text-gradient">
              Pixel Craft Studio
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

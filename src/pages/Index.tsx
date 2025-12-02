import { useState, useEffect } from 'react';
import { PortfolioNavigation } from '@/components/PortfolioNavigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GraphicDesignGallery } from '@/components/GraphicDesignGallery';
import { ContactSection } from '@/components/ContactSection';
import { CustomCursor } from '@/components/CustomCursor';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll animation reveals
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
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
    
    // Apply different animation classes to different sections
    sections.forEach((section, index) => {
      const sectionId = section.id;
      
      // Alternate animation patterns for visual variety
      if (sectionId === 'home') {
        section.classList.add('section-fade');
      } else if (index % 3 === 0) {
        section.classList.add('section-slide-left');
      } else if (index % 3 === 1) {
        section.classList.add('section-zoom');
      } else {
        section.classList.add('section-slide-right');
      }
    });
    
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
    <div className="min-h-screen bg-background text-foreground font-poppins cursor-none">
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
  );
};

export default Index;

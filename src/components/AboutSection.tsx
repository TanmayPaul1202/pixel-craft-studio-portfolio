import { GraduationCap, Award, Target, Sparkles, Star, Zap, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlights = [
    { icon: Star, text: 'Creative Excellence', color: 'from-amber-400 to-orange-500' },
    { icon: Heart, text: 'Client-Focused', color: 'from-pink-400 to-rose-500' },
    { icon: Zap, text: 'Cutting-Edge Tech', color: 'from-cyan-400 to-blue-500' },
  ];

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--neon-purple) / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, hsl(var(--neon-blue) / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, hsl(var(--neon-magenta) / 0.2) 0%, transparent 60%)`,
            transform: `translateY(${(scrollY - 800) * 0.05}px)`,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 blur-3xl"
        style={{
          transform: `translate(${(scrollY - 800) * 0.08}px, ${(scrollY - 800) * 0.05}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-neon-magenta/15 to-neon-cyan/15 blur-3xl"
        style={{
          transform: `translate(${(scrollY - 800) * -0.06}px, ${(scrollY - 800) * -0.04}px)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-medium text-neon-purple">Get to Know Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-blue">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate creator dedicated to bringing your vision to life through exceptional design and storytelling.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Section - Spanning 7 columns */}
          <div className="lg:col-span-7 reveal-up">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-blue rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-3xl border border-border/50 p-8 md:p-10 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neon-purple/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neon-blue/10 to-transparent rounded-tr-full" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
                    Who I Am
                  </h3>
                  
                  <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      I am a professional <span className="text-foreground font-medium">video editor</span>, <span className="text-foreground font-medium">graphic designer</span>, and <span className="text-foreground font-medium">content creator</span>. I'm passionate about creating work that not only meets but exceeds client expectations.
                    </p>
                    <p>
                      As the founder of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-magenta font-semibold">Pixel Craft Studio</span>, I promise creative, impactful work designed to impress. Every project is an opportunity to push creative boundaries and deliver something truly exceptional.
                    </p>
                  </div>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {highlights.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border/50 backdrop-blur-sm group/tag hover:border-neon-purple/50 transition-all duration-300"
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-4 h-4 text-foreground" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section - Spanning 5 columns */}
          <div className="lg:col-span-5 space-y-6 reveal-up">
            {/* Education Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-6 hover:border-neon-blue/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Education</h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold mb-1">
                      BA in Digital Film
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Emphasis in Editing & Visual Effects • 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Info Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-6 hover:border-neon-purple/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Pixel Craft Studio</h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold mb-1">
                      Founder & Creative Director
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Leading exceptional visual content creation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-2xl border border-border/50 p-6 hover:border-neon-magenta/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">My Mission</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To create visually stunning content that tells compelling stories, builds brands, and creates lasting impact for every client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

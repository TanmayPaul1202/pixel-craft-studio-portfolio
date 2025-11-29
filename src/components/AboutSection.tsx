import { Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Content - Glassmorphism Card */}
          <div className="glass-card p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Profile Image Placeholder with Gradient Frame */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Sparkles className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>

              {/* Bio - Large Clean Typography */}
              <div className="space-y-6 text-center">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                  Professional <span className="text-gradient font-semibold">Video Editor</span> and <span className="text-gradient font-semibold">Graphic Designer</span> with a passion for creating visual stories that captivate and inspire.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  As the founder of <span className="text-primary font-medium">Pixel Craft Studio</span>, I specialize in transforming creative visions into stunning reality. Every project is an opportunity to push boundaries and deliver exceptional results that exceed expectations.
                </p>

                {/* Education Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 glass-card mt-8">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    BA in Digital Film • Editing & VFX Specialist
                  </span>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                {[
                  { title: 'Creative Excellence', desc: 'Every project perfected' },
                  { title: 'Client-Focused', desc: 'Your vision, realized' },
                  { title: 'Modern Techniques', desc: 'Cutting-edge tools' }
                ].map((point, index) => (
                  <div key={point.title} className="text-center p-6 rounded-2xl bg-card/30 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="text-3xl mb-3 text-gradient font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

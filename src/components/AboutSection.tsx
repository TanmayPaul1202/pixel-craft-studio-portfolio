import { GraduationCap, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate creator dedicated to bringing your vision to life through exceptional design and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="reveal-up">
            <Card className="relative bg-gradient-card border-2 border-neon-cyan/30 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-neon-cyan">Who I Am</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I am a professional video editor, graphic designer, and content creator. I'm passionate about creating work that not only meets but exceeds client expectations.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  As the founder of Pixel Craft Studio, I promise creative, impactful work designed to impress. Every project is an opportunity to push creative boundaries and deliver something truly exceptional.
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group/item">
                    <div className="w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)] group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-shadow"></div>
                    <span className="text-foreground font-medium">Creative Excellence in Every Project</span>
                  </div>
                  <div className="flex items-center space-x-3 group/item">
                    <div className="w-3 h-3 bg-neon-magenta rounded-full shadow-[0_0_10px_rgba(236,72,153,0.6)] group-hover/item:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-shadow"></div>
                    <span className="text-foreground font-medium">Client-Focused Approach</span>
                  </div>
                  <div className="flex items-center space-x-3 group/item">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)] group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-shadow"></div>
                    <span className="text-foreground font-medium">Cutting-Edge Techniques</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cards Section */}
          <div className="space-y-6 reveal-up">
            {/* Education Card */}
            <Card className="relative bg-gradient-card border-2 border-neon-blue/30 transition-all duration-300 hover-scale group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 shadow-[0_0_30px_rgba(59,130,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-blue/20 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <GraduationCap className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-neon-blue font-medium mb-2">
                      BA in Digital Film with Emphasis in Editing and Visual Effects
                    </p>
                    <p className="text-muted-foreground">Completed in 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Studio Info Card */}
            <Card className="relative bg-gradient-card border-2 border-neon-purple/30 transition-all duration-300 hover-scale group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 shadow-[0_0_30px_rgba(168,85,247,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-purple/20 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <Award className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Pixel Craft Studio</h4>
                    <p className="text-neon-purple font-medium mb-2">Founder & Creative Director</p>
                    <p className="text-muted-foreground">
                      Leading a creative studio focused on delivering exceptional visual content and exceeding client expectations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="relative bg-gradient-card border-2 border-neon-magenta/30 transition-all duration-300 hover-scale group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/10 via-transparent to-neon-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 shadow-[0_0_30px_rgba(236,72,153,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-magenta/20 rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                    <Target className="h-6 w-6 text-neon-magenta" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">My Mission</h4>
                    <p className="text-muted-foreground">
                      To create visually stunning content that tells compelling stories, builds brands, and creates lasting impact for every client.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
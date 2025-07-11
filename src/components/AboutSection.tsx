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
            <h3 className="text-2xl font-semibold mb-6 text-neon-blue">Who I Am</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a professional video editor, graphic designer, and content creator. I'm passionate about creating work that not only meets but exceeds client expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As the founder of Pixel Craft Studio, I promise creative, impactful work designed to impress. Every project is an opportunity to push creative boundaries and deliver something truly exceptional.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                <span className="text-foreground">Creative Excellence in Every Project</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-magenta rounded-full"></div>
                <span className="text-foreground">Client-Focused Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                <span className="text-foreground">Cutting-Edge Techniques</span>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="space-y-6 reveal-up">
            {/* Education Card */}
            <Card className="bg-gradient-card border-border hover:border-neon-blue/50 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-blue/20 rounded-lg">
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
            <Card className="bg-gradient-card border-border hover:border-neon-purple/50 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-purple/20 rounded-lg">
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
            <Card className="bg-gradient-card border-border hover:border-neon-magenta/50 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-magenta/20 rounded-lg">
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
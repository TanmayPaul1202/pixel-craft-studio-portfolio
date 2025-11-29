import { Film, Palette, Smartphone, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing from basic cuts to cinematic productions with color grading and effects',
    icon: Film,
    features: ['Color Correction', 'Motion Graphics', 'Audio Enhancement', 'Multi-camera Editing']
  },
  {
    title: 'Motion Graphics',
    description: 'Dynamic animations and motion design for engaging visual content',
    icon: Sparkles,
    features: ['Logo Animation', 'Intro/Outro', 'Kinetic Typography', 'Visual Effects']
  },
  {
    title: 'Graphic Design',
    description: 'Modern branding, logos, and marketing materials that make your business stand out',
    icon: Palette,
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Illustrations']
  },
  {
    title: 'Social Media Content',
    description: 'Optimized content creation for all digital platforms with engaging thumbnails',
    icon: Smartphone,
    features: ['YouTube Videos', 'Instagram Reels', 'Thumbnails', 'Stories']
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid - Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass-card group hover:scale-[1.02] transition-all duration-300 border border-primary/10 hover:border-primary/30 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-primary">
                  <service.icon className="h-8 w-8 text-background" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

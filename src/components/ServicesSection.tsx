import { useState } from 'react';
import { Play, Star, Clock, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Basic to Advanced Video Editing',
    description: 'Professional video editing services from simple cuts to complex multi-layer productions with advanced effects.',
    features: ['Multi-camera editing', 'Color correction', 'Audio enhancement', 'Motion graphics'],
    price: 'Starting from ₹500',
    color: 'neon-blue',
    icon: Play
  },
  {
    title: 'YouTube & Social Media Videos',
    description: 'Optimized content creation for digital platforms with engaging thumbnails and platform-specific formatting.',
    features: ['Platform optimization', 'Thumbnail design', 'Intro/Outro creation', 'Social media formats'],
    price: 'Starting from ₹800',
    color: 'neon-purple',
    icon: Star
  },
  {
    title: 'Event Highlights & Music Videos',
    description: 'Capture and enhance your special moments with cinematic storytelling and professional production.',
    features: ['Event documentation', 'Music synchronization', 'Cinematic effects', 'Multi-angle coverage'],
    price: 'Starting from ₹1,500',
    color: 'neon-magenta',
    icon: Clock
  },
  {
    title: 'Corporate & Commercial Content',
    description: 'Professional business content including real estate videos, explainer videos, and promotional materials.',
    features: ['Corporate branding', 'Explainer videos', 'Real estate tours', 'Product showcases'],
    price: 'Starting from ₹2,000',
    color: 'neon-cyan',
    icon: Package
  }
];

const additionalServices = [
  'Subtitles & Captions',
  'Logo Animation',
  'Intro/Outro Creation',
  'Rush Delivery (24-48 hours)',
  'Custom Packages',
  'Bulk Project Discounts'
];

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [showPricing, setShowPricing] = useState(false);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-20 w-24 h-24 rounded-full bg-neon-purple/20 blur-xl float-animation"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-neon-blue/20 blur-xl float-animation" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-accent">I Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive creative services tailored to bring your vision to life with professional quality and artistic excellence.
          </p>
          
          {/* Pricing Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowPricing(!showPricing)}
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
          >
            {showPricing ? 'Hide Pricing' : 'Show Pricing'}
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-gradient-card border-border hover:border-${service.color}/50 transition-all duration-300 hover-scale reveal-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-${service.color}/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-6 w-6 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleService(index)}
                    className="ml-2"
                  >
                    {expandedService === index ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {showPricing && (
                  <div className={`mb-4 p-3 bg-${service.color}/10 rounded-lg`}>
                    <span className={`text-${service.color} font-semibold`}>
                      {service.price}
                    </span>
                  </div>
                )}

                {expandedService === index && (
                  <div className="space-y-3 animate-fade-in-up">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center reveal-up">
          <h3 className="text-2xl font-semibold mb-8 text-neon-purple">Additional Services</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
            {additionalServices.map((service, index) => (
              <Badge
                key={service}
                variant="outline"
                className="px-4 py-2 text-sm border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service}
              </Badge>
            ))}
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-300">
              <Clock className="h-8 w-8 text-neon-blue mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Fast Turnaround</h4>
              <p className="text-sm text-muted-foreground">Rush delivery available for urgent projects</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-300">
              <Package className="h-8 w-8 text-neon-purple mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Custom Packages</h4>
              <p className="text-sm text-muted-foreground">Tailored solutions for unique requirements</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-300">
              <Star className="h-8 w-8 text-neon-magenta mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Bulk Discounts</h4>
              <p className="text-sm text-muted-foreground">Special rates for multiple projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
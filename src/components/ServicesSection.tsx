
import { useState } from 'react';
import { Play, Star, Clock, Package, ChevronDown, ChevronUp, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Graphic Design & Branding',
    description: 'Professional graphic design services including wedding invitations, branding materials, and custom illustrations.',
    features: ['Wedding Invitations', 'Logo Design', 'Business Cards', 'Brand Identity'],
    price: 'Starting from ₹170',
    color: 'neon-magenta',
    icon: FileText,
    detailedPricing: [
      { service: 'Wedding Invitations', description: 'Custom designed wedding cards with traditional/modern themes', price: '₹399-₹680 per design' },
      { service: 'Logo Design', description: 'Professional logo creation for businesses', price: '₹390' },
      { service: 'Business Card', description: 'Professional business card design', price: '₹220' },
      { service: 'Posters & Banners', description: 'Social media and print posters', price: '₹170-₹499' },
      { service: 'Brochures', description: 'Multi-page brochure design', price: '₹399' },
      { service: 'ID Cards', description: 'Employee or membership ID cards', price: '₹299' },
      { service: 'Certificates', description: 'Award and achievement certificates', price: '₹220' },
      { service: 'Bio Data/Resume', description: 'Professional resume design', price: '₹199-₹210 per page' }
    ]
  },
  {
    title: 'Basic to Advanced Video Editing',
    description: 'Professional video editing services from simple cuts to complex multi-layer productions with advanced effects.',
    features: ['Multi-camera editing', 'Color correction', 'Audio enhancement', 'Motion graphics'],
    price: 'Starting from ₹350-₹500 per minute',
    color: 'neon-blue',
    icon: Play,
    detailedPricing: [
      { service: 'Basic Editing', description: 'Cutting, trimming, transitions, and export', price: '₹350-₹500 per minute' },
      { service: 'Standard Editing', description: 'Color correction, sound balancing, simple text overlays', price: '₹500-₹800 per minute' },
      { service: 'Social Media Videos', description: 'Optimized short videos for platforms (15-60 secs)', price: '₹1,000-₹2,500 per video' },
      { service: 'Event Highlights', description: 'Wedding, birthday, or travel highlight reels', price: '₹2,000-₹5,000 per video' },
      { service: 'YouTube Video Editing', description: 'Edits for YouTube, including intros, subtitles, and effects', price: '₹1,500-₹3,500 per video' },
      { service: 'Corporate Videos', description: 'Business or promotional content with professional touches', price: '₹3,000-₹8,000 per video' },
      { service: 'Real Estate Videos', description: 'Edits for property showcases with transitions, labels, and music', price: '₹3,000-₹7,000 per video' },
      { service: 'Music Videos', description: 'Syncing footage with beats, adding effects and transitions', price: '₹4,000-₹10,000 per video' },
      { service: 'Short Films', description: 'Storyline edits, scene cuts, sound design, and color grading', price: '₹5,000-₹12,000 per project' },
      { service: 'Explainer Videos', description: 'Animated or live-action educational videos', price: '₹4,000-₹10,000 per minute' }
    ]
  },
  {
    title: 'YouTube & Social Media Videos',
    description: 'Optimized content creation for digital platforms with engaging thumbnails and platform-specific formatting.',
    features: ['Platform optimization', 'Thumbnail design', 'Intro/Outro creation', 'Social media formats'],
    price: 'Starting from ₹420',
    color: 'neon-purple',
    icon: Star,
    detailedPricing: [
      { service: 'Video/Reel', description: 'Social media video content', price: '₹420' },
      { service: 'Story Design', description: 'Instagram/Facebook story graphics', price: '₹170' },
      { service: 'Poster Design', description: 'Social media poster designs', price: '₹170' },
      { service: 'Animated Post', description: 'Animated social media content', price: '₹340' },
      { service: 'Ad Creative', description: 'Advertisement creative designs', price: '₹440' },
      { service: 'Thumbnail', description: 'YouTube thumbnail design', price: '₹380' },
      { service: 'Banners', description: 'Social media banner designs', price: '₹499' },
      { service: 'Magazine Cover', description: 'Professional magazine cover design', price: '₹680' }
    ]
  },
  {
    title: 'Event Highlights & Music Videos',
    description: 'Capture and enhance your special moments with cinematic storytelling and professional production.',
    features: ['Event documentation', 'Music synchronization', 'Cinematic effects', 'Multi-angle coverage'],
    price: 'Starting from ₹2,000',
    color: 'neon-magenta',
    icon: Clock,
    detailedPricing: [
      { service: 'Event Highlights', description: 'Wedding, birthday, or travel highlight reels', price: '₹2,000-₹5,000 per video' },
      { service: 'Music Videos', description: 'Syncing footage with beats, adding effects and transitions', price: '₹4,000-₹10,000 per video' }
    ]
  },
  {
    title: 'Corporate & Commercial Content',
    description: 'Professional business content including real estate videos, explainer videos, and promotional materials.',
    features: ['Corporate branding', 'Explainer videos', 'Real estate tours', 'Product showcases'],
    price: 'Starting from ₹3,000',
    color: 'neon-cyan',
    icon: Package,
    detailedPricing: [
      { service: 'Corporate Videos', description: 'Business or promotional content with professional touches', price: '₹3,000-₹8,000 per video' },
      { service: 'Real Estate Videos', description: 'Edits for property showcases with transitions, labels, and music', price: '₹3,000-₹7,000 per video' },
      { service: 'Explainer Videos', description: 'Animated or live-action educational videos', price: '₹4,000-₹10,000 per minute' },
      { service: 'Short Films', description: 'Storyline edits, scene cuts, sound design, and color grading', price: '₹5,000-₹12,000 per project' }
    ]
  }
];

const brandingServices = [
  { service: 'Logo', price: '₹390' },
  { service: 'Business Card', price: '₹220' },
  { service: 'ID Card', price: '₹299' },
  { service: 'Price List', price: '₹220' },
  { service: 'Certificate', price: '₹220' },
  { service: 'Letter Heads', price: '₹120' },
  { service: 'Rack Cards', price: '₹160' },
  { service: 'Brochures', price: '₹399' }
];

const personalServices = [
  { service: 'Video Invitation', price: '₹420' },
  { service: 'Invitation Card', price: '₹399' },
  { service: 'Bio Data (Per Page)', price: '₹210' },
  { service: 'Resume', price: '₹199' }
];

const additionalServices = [
  'Subtitles & Captions (₹200-₹500 per minute)',
  'Logo Animation (₹1,500-₹5,000 per project)',
  'Intro/Outro Creation (₹1,000-₹3,000 per intro/outro)',
  'Rush Delivery (20-50% extra for 1-2 days)',
  'Custom Packages (Combine services for discounts)',
  'Bulk Discounts (Projects exceeding 10 videos or ₹50,000)'
];

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showBranding, setShowBranding] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);

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
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background mr-4"
          >
            {showPricing ? 'Hide Detailed Pricing' : 'Show Detailed Pricing'}
          </Button>

          {/* Price List Download */}
          <Button
            variant="outline"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background"
            onClick={() => window.open('/lovable-uploads/a91f2a74-b164-4c9d-b67b-1999638f0ce6.png', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Price List
          </Button>
        </div>

        {/* Main Services Grid */}
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

                <div className={`mb-4 p-3 bg-${service.color}/10 rounded-lg`}>
                  <span className={`text-${service.color} font-semibold`}>
                    {service.price}
                  </span>
                </div>

                {expandedService === index && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {showPricing && service.detailedPricing && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white">Detailed Pricing:</h4>
                        {service.detailedPricing.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-start p-2 bg-muted/10 rounded">
                            <div>
                              <span className="font-medium text-sm">{item.service}</span>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                            <span className={`text-${service.color} font-semibold text-sm`}>
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Branding Services */}
        <div className="mb-16 reveal-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Branding Services</h3>
            <Button
              variant="outline"
              onClick={() => setShowBranding(!showBranding)}
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
            >
              {showBranding ? 'Hide Branding Services' : 'Show Branding Services'}
            </Button>
          </div>
          
          {showBranding && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
              {brandingServices.map((service, index) => (
                <div key={service.service} className="p-4 bg-gradient-card rounded-lg border border-neon-blue/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{service.service}</span>
                    <span className="text-neon-blue font-semibold">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Personal Services */}
        <div className="mb-16 reveal-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-neon-purple">Personal Services</h3>
            <Button
              variant="outline"
              onClick={() => setShowPersonal(!showPersonal)}
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background"
            >
              {showPersonal ? 'Hide Personal Services' : 'Show Personal Services'}
            </Button>
          </div>
          
          {showPersonal && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
              {personalServices.map((service, index) => (
                <div key={service.service} className="p-4 bg-gradient-card rounded-lg border border-neon-purple/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{service.service}</span>
                    <span className="text-neon-purple font-semibold">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Services */}
        <div className="text-center reveal-up mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-neon-magenta">Additional Services & Benefits</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
            {additionalServices.map((service, index) => (
              <Badge
                key={service}
                variant="outline"
                className="px-4 py-2 text-sm border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta hover:text-background transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service}
              </Badge>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-card p-6 rounded-lg border border-neon-cyan/20 mb-8">
            <h4 className="text-xl font-semibold mb-4 text-neon-cyan">Why Choose Pixel Craft Studio?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-muted-foreground">• Unique & Modern Designs</p>
                <p className="text-muted-foreground">• Quick Turnaround Time</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">• Affordable & Transparent Pricing</p>
                <p className="text-muted-foreground">• 100% Client Satisfaction</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-neon-magenta/10 rounded">
              <p className="text-neon-magenta font-semibold">Special Offer: Get 10% OFF on your first order - Limited Time Only!</p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-muted/10 p-6 rounded-lg text-left max-w-2xl mx-auto">
            <h4 className="font-semibold mb-3 text-center">Important Notes:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Final prices depend on project complexity, duration, and client requirements</li>
              <li>• Client briefing: Ensure a clear understanding of the project before starting</li>
              <li>• Payment terms: Consider upfront payment (50%) and the rest upon delivery</li>
              <li>• 50% advance payment is required to start the project</li>
              <li>• Revisions are available (first revision is free; ₹300 for additional revisions)</li>
              <li>• Final delivery will be provided upon full payment</li>
              <li>• Mode of Payment: UPI / Gpay / Phonepe / Paytm Only</li>
            </ul>
          </div>
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

        {/* License Agreement Section */}
        <div className="mt-16 text-center reveal-up">
          <h3 className="text-2xl font-semibold mb-6 text-neon-yellow">License Agreement</h3>
          <div className="bg-gradient-card p-6 rounded-lg border border-neon-yellow/20 max-w-4xl mx-auto text-left">
            <h4 className="font-semibold mb-4 text-center text-neon-yellow">End User License Agreement</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>The Contents are royalty free and may be published, broadcasted and distributed through broadcast channels in completed client and personal, and professional works.</p>
              <p>Use the items as much as you like, for as many projects as you need.</p>
              <p><strong>You may NOT:</strong> sell, redistribute, incorporate in a separate product or give the Contents of this collection to anyone. You may not sell or incorporate the work for distribution on stock footage websites with things like elements, projects files, template, layers, etc.</p>
              <p>Pixel Craft Studio Packs are developed as a suite of tools for editors, animators, filmmakers, designers and artists of all kinds! Enjoy!</p>
              <p>All Pixel Craft Studio Packs, Templates, and Pixel Craft Studio Extension for After Effects & Premiere Pro are intellectual property of Pixel Craft Studio, LLC.</p>
              <p className="text-center pt-4">
                <strong>For any inquiries, please contact: </strong>
                <span className="text-neon-yellow">pixcrft.studio@gmail.com</span>
              </p>
            </div>
            <div className="text-center mt-4">
              <Button
                variant="outline"
                className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-background"
                onClick={() => window.open('/lovable-uploads/510034e1-c78d-4731-8e8d-9e03104e5323.png', '_blank')}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Full License Agreement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

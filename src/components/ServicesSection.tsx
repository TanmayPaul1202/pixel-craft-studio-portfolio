import { useState, useEffect } from 'react';
import { Play, Star, Clock, Package, ChevronDown, ChevronUp, Download, FileText, Zap, Palette, Video, Camera, Sparkles, ArrowRight, Check, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Graphic Design & Branding',
    description: 'Professional graphic design services including wedding invitations, branding materials, and custom illustrations.',
    features: ['Wedding Invitations', 'Logo Design', 'Business Cards', 'Brand Identity'],
    price: 'Starting from ₹170',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-500/20 to-rose-500/10',
    icon: Palette,
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
    title: 'Video Editing',
    description: 'Professional video editing from simple cuts to complex multi-layer productions with advanced effects.',
    features: ['Multi-camera editing', 'Color correction', 'Audio enhancement', 'Motion graphics'],
    price: 'Starting from ₹350/min',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/20 to-cyan-500/10',
    icon: Video,
    detailedPricing: [
      { service: 'Basic Editing', description: 'Cutting, trimming, transitions, and export', price: '₹350-₹500 per minute' },
      { service: 'Standard Editing', description: 'Color correction, sound balancing, simple text overlays', price: '₹500-₹800 per minute' },
      { service: 'Social Media Videos', description: 'Optimized short videos for platforms (15-60 secs)', price: '₹1,000-₹2,500 per video' },
      { service: 'Event Highlights', description: 'Wedding, birthday, or travel highlight reels', price: '₹2,000-₹5,000 per video' },
      { service: 'YouTube Video Editing', description: 'Edits for YouTube, including intros, subtitles, and effects', price: '₹1,500-₹3,500 per video' },
      { service: 'Corporate Videos', description: 'Business or promotional content with professional touches', price: '₹3,000-₹8,000 per video' }
    ]
  },
  {
    title: 'Social Media Content',
    description: 'Optimized content creation for digital platforms with engaging thumbnails and platform-specific formatting.',
    features: ['Platform optimization', 'Thumbnail design', 'Intro/Outro creation', 'Social media formats'],
    price: 'Starting from ₹170',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-500/20 to-violet-500/10',
    icon: Camera,
    detailedPricing: [
      { service: 'Video/Reel', description: 'Social media video content', price: '₹420' },
      { service: 'Story Design', description: 'Instagram/Facebook story graphics', price: '₹170' },
      { service: 'Poster Design', description: 'Social media poster designs', price: '₹170' },
      { service: 'Animated Post', description: 'Animated social media content', price: '₹340' },
      { service: 'Ad Creative', description: 'Advertisement creative designs', price: '₹440' },
      { service: 'Thumbnail', description: 'YouTube thumbnail design', price: '₹380' },
      { service: 'Banners', description: 'Social media banner designs', price: '₹499' }
    ]
  },
  {
    title: 'Premium Productions',
    description: 'High-end content for commercial use including real estate tours, explainer videos, and promotional materials.',
    features: ['Corporate branding', 'Explainer videos', 'Real estate tours', 'Product showcases'],
    price: 'Starting from ₹3,000',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-500/20 to-orange-500/10',
    icon: Zap,
    detailedPricing: [
      { service: 'Corporate Videos', description: 'Business or promotional content with professional touches', price: '₹3,000-₹8,000 per video' },
      { service: 'Real Estate Videos', description: 'Edits for property showcases with transitions, labels, and music', price: '₹3,000-₹7,000 per video' },
      { service: 'Explainer Videos', description: 'Animated or live-action educational videos', price: '₹4,000-₹10,000 per minute' },
      { service: 'Music Videos', description: 'Syncing footage with beats, adding effects and transitions', price: '₹4,000-₹10,000 per video' },
      { service: 'Short Films', description: 'Storyline edits, scene cuts, sound design, and color grading', price: '₹5,000-₹12,000 per project' }
    ]
  }
];

const brandingServices = [
  { service: 'Logo', price: '₹390', icon: '🎨' },
  { service: 'Business Card', price: '₹220', icon: '💼' },
  { service: 'ID Card', price: '₹299', icon: '🪪' },
  { service: 'Price List', price: '₹220', icon: '📋' },
  { service: 'Certificate', price: '₹220', icon: '📜' },
  { service: 'Letter Heads', price: '₹120', icon: '📄' },
  { service: 'Rack Cards', price: '₹160', icon: '🗂️' },
  { service: 'Brochures', price: '₹399', icon: '📰' }
];

const personalServices = [
  { service: 'Video Invitation', price: '₹420', icon: '🎬' },
  { service: 'Invitation Card', price: '₹399', icon: '💌' },
  { service: 'Bio Data (Per Page)', price: '₹210', icon: '📑' },
  { service: 'Resume', price: '₹199', icon: '📝' }
];

const additionalServices = [
  { service: 'Subtitles & Captions', price: '₹200-₹500/min', icon: '💬' },
  { service: 'Logo Animation', price: '₹1,500-₹5,000', icon: '✨' },
  { service: 'Intro/Outro Creation', price: '₹1,000-₹3,000', icon: '🎭' },
  { service: 'Rush Delivery', price: '+20-50%', icon: '⚡' },
  { service: 'Custom Packages', price: 'Discounted', icon: '🎁' },
  { service: 'Bulk Discounts', price: '10+ projects', icon: '📦' }
];

const whyChooseUs = [
  { title: 'Unique & Modern', subtitle: 'Creative Designs', icon: Sparkles, color: 'from-cyan-400 to-blue-500' },
  { title: 'Quick Turnaround', subtitle: 'Fast Delivery', icon: Zap, color: 'from-yellow-400 to-orange-500' },
  { title: 'Affordable Pricing', subtitle: 'Best Value', icon: Gift, color: 'from-green-400 to-emerald-500' },
  { title: '100% Satisfaction', subtitle: 'Quality Guaranteed', icon: Star, color: 'from-pink-400 to-rose-500' }
];

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-3xl"
          style={{ transform: `translate(${(scrollY - 2400) * -0.03}px, ${(scrollY - 2400) * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-neon-magenta/15 to-neon-purple/15 rounded-full blur-3xl"
          style={{ transform: `translate(${(scrollY - 2400) * 0.04}px, ${(scrollY - 2400) * -0.06}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">I Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your vision into reality with premium creative services tailored to your unique needs
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={showPricing ? "default" : "outline"}
              onClick={() => setShowPricing(!showPricing)}
              className={`rounded-full px-6 ${showPricing ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' : 'border-primary/50 hover:bg-primary/10'}`}
            >
              {showPricing ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
              {showPricing ? 'Hide Pricing' : 'View Pricing'}
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-6 border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10"
              onClick={() => window.open('/lovable-uploads/a91f2a74-b164-4c9d-b67b-1999638f0ce6.png', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Price List
            </Button>
          </div>
        </div>

        {/* Main Services Grid - Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 reveal-up cursor-pointer ${
                expandedService === index ? 'ring-2 ring-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleService(index)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
              
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <CardContent className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg`}>
                    {service.price}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 text-muted-foreground border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Expand Indicator */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="text-sm text-muted-foreground">
                    {showPricing ? 'Click to view details' : 'Click to expand'}
                  </span>
                  <ArrowRight className={`h-5 w-5 text-primary transition-transform duration-300 ${expandedService === index ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </div>

                {/* Expanded Pricing Details */}
                {expandedService === index && showPricing && (
                  <div className="mt-6 pt-6 border-t border-border/30 animate-fade-in-up">
                    <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Detailed Pricing
                    </h4>
                    <div className="space-y-3">
                      {service.detailedPricing.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="flex justify-between items-start p-3 rounded-xl bg-background/30 hover:bg-background/50 transition-colors"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-sm text-foreground">{item.service}</span>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                          </div>
                          <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} ml-4 whitespace-nowrap`}>
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Branding Services */}
          <div className="reveal-up">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Branding Services</h3>
                    <p className="text-sm text-muted-foreground">Professional brand identity</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {brandingServices.map((item, index) => (
                    <div 
                      key={item.service}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-background/30 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.service}</p>
                        <p className="text-sm font-bold text-blue-400">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Services */}
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-purple-500/20 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Personal Services</h3>
                    <p className="text-sm text-muted-foreground">Special occasion designs</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {personalServices.map((item, index) => (
                    <div 
                      key={item.service}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-background/30 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.service}</p>
                        <p className="text-sm font-bold text-purple-400">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20 reveal-up">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Services & Add-ons</span>
            </h3>
            <p className="text-muted-foreground">Enhance your projects with premium features</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((item, index) => (
              <div 
                key={item.service}
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-sm font-medium text-foreground mb-1">{item.service}</p>
                <p className="text-xs font-bold text-amber-400">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="reveal-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/80 border border-border/50 backdrop-blur-xl p-8 md:p-12">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-magenta/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">Pixel Craft Studio</span>?
                </h3>
                <p className="text-muted-foreground">Experience excellence in every project</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={item.title}
                    className="group text-center p-6 rounded-2xl bg-background/30 border border-border/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-1`}>{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              
              {/* Special Offer Banner */}
              <div className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 p-6 border border-pink-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                  <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                      Get 10% OFF on your first order!
                    </p>
                    <p className="text-muted-foreground text-sm">Limited Time Offer - Don't Miss Out!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16 bg-card/50 backdrop-blur-sm p-8 rounded-2xl text-left max-w-3xl mx-auto border border-border/30 reveal-up">
          <h4 className="font-semibold mb-4 text-center text-lg flex items-center justify-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Important Notes
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              'Final prices depend on project complexity, duration, and client requirements',
              'Client briefing: Ensure a clear understanding of the project before starting',
              'Payment terms: Consider upfront payment (50%) and the rest upon delivery',
              'Revisions are available (first revision is free; ₹300 for additional revisions)',
              'Mode of Payment: UPI / Gpay / Phonepe / Paytm Only'
            ].map((note, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Clock, title: 'Fast Turnaround', description: 'Rush delivery available for urgent projects', color: 'neon-blue' },
            { icon: Package, title: 'Custom Packages', description: 'Tailored solutions for unique requirements', color: 'neon-purple' },
            { icon: Star, title: 'Bulk Discounts', description: 'Special rates for multiple projects', color: 'neon-magenta' }
          ].map((highlight, idx) => (
            <div key={highlight.title} className="text-center p-6 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors duration-300 border border-border/30">
              <highlight.icon className={`h-8 w-8 text-${highlight.color} mx-auto mb-3`} />
              <h4 className="font-semibold mb-2">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* License Agreement Section */}
        <div className="mt-16 text-center reveal-up">
          <h3 className="text-2xl font-semibold mb-6 text-neon-yellow">License Agreement</h3>
          <div className="bg-gradient-card p-6 rounded-lg border border-neon-yellow/20 max-w-4xl mx-auto text-left">
            <h4 className="font-semibold mb-4 text-center text-neon-yellow">End User License Agreement</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>The Contents are royalty free and may be published, broadcasted and distributed through broadcast channels in completed client and personal, and professional works.</p>
              <p>Use the items as much as you like, for as many projects as you need.</p>
              <p><strong className="text-foreground">You may NOT:</strong> sell, redistribute, incorporate in a separate product or give the Contents of this collection to anyone. You may not sell or incorporate the work for distribution on stock footage websites with things like elements, projects files, template, layers, etc.</p>
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

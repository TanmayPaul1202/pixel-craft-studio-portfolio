import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Palette, Heart, FileText, DollarSign, Youtube, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const designCategories = [
  {
    id: 'wedding',
    title: 'Wedding Design',
    icon: Heart,
    color: 'neon-magenta',
    description: 'Beautiful wedding invitations and event cards',
    images: [
      '/lovable-uploads/graphic-design-1.jpg',
      '/lovable-uploads/graphic-design-2.jpg',
      '/lovable-uploads/graphic-design-3.jpg',
      '/lovable-uploads/graphic-design-4.jpg',
      '/lovable-uploads/graphic-design-5.jpg',
      '/lovable-uploads/graphic-design-6.jpg',
      '/lovable-uploads/graphic-design-7.jpg',
      '/lovable-uploads/graphic-design-8.jpg',
      '/lovable-uploads/graphic-design-9.jpg',
      '/lovable-uploads/graphic-design-10.jpg',
      '/lovable-uploads/wedding-offer.jpg'
    ]
  },
  {
    id: 'festival',
    title: 'Festival Design',
    icon: Sparkles,
    color: 'neon-yellow',
    description: 'Creative festival and celebration designs',
    images: [
      '/lovable-uploads/festival-offer.jpg'
    ]
  },
  {
    id: 'logo',
    title: 'Logo Design',
    icon: Palette,
    color: 'neon-blue',
    description: 'Professional brand identity and logo creation',
    images: [
      '/lovable-uploads/logo-nikitas.jpg',
      '/lovable-uploads/logo-sneha-studio.jpg',
      '/lovable-uploads/logo-catering.jpg',
      '/lovable-uploads/logo-lalwani.jpg',
      '/lovable-uploads/logo-radhe-store.jpg',
      '/lovable-uploads/logo-krinas.jpg',
      '/lovable-uploads/logo-sews-cafe.jpg'
    ]
  },
  {
    id: 'brochure',
    title: 'Brochure Design',
    icon: FileText,
    color: 'neon-purple',
    description: 'Marketing brochures and promotional materials',
    images: []
  },
  {
    id: 'bill',
    title: 'Bill & Invoice',
    icon: DollarSign,
    color: 'neon-cyan',
    description: 'Professional bill and invoice templates',
    images: []
  },
  {
    id: 'thumbnail',
    title: 'YouTube Thumbnail',
    icon: Youtube,
    color: 'neon-magenta',
    description: 'Eye-catching thumbnails for social media',
    images: [
      '/lovable-uploads/thumbnail-noodles.jpg',
      '/lovable-uploads/thumbnail-gaming.jpg',
      '/lovable-uploads/thumbnail-travel.jpg',
      '/lovable-uploads/thumbnail-analysis.jpg'
    ]
  }
];

export function GraphicDesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState<typeof designCategories[0] | null>(null);
  const [fullSizeImage, setFullSizeImage] = useState<{ url: string; index: number } | null>(null);

  const handleImageClick = (imageUrl: string, index: number) => {
    setFullSizeImage({ url: imageUrl, index });
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedCategory || !fullSizeImage) return;
    const totalImages = selectedCategory.images.length;
    let newIndex = direction === 'next' 
      ? (fullSizeImage.index + 1) % totalImages 
      : (fullSizeImage.index - 1 + totalImages) % totalImages;
    setFullSizeImage({ url: selectedCategory.images[newIndex], index: newIndex });
  };

  return (
    <section id="graphic-design" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-32 right-10 w-40 h-40 rounded-full bg-neon-purple/10 blur-xl float-animation"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 rounded-full bg-neon-magenta/10 blur-xl float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Graphic <span className="text-transparent bg-clip-text bg-gradient-accent">Design Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of design services, from wedding invitations to professional branding solutions.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designCategories.map((category, index) => (
            <Card
              key={category.id}
              onClick={() => category.images.length > 0 && setSelectedCategory(category)}
              className={`bg-gradient-card border-border hover:border-${category.color}/50 transition-all duration-500 hover-scale reveal-up group ${
                category.images.length > 0 ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`mx-auto mb-6 w-20 h-20 rounded-full bg-${category.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-10 w-10 text-${category.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {category.description}
                </p>

                {/* Badge */}
                {category.images.length > 0 ? (
                  <Badge variant="outline" className={`border-${category.color}/50 text-${category.color}`}>
                    {category.images.length} Design{category.images.length > 1 ? 's' : ''}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-muted text-muted-foreground">
                    Coming Soon
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              {selectedCategory && (
                <>
                  <selectedCategory.icon className={`h-8 w-8 text-${selectedCategory.color}`} />
                  {selectedCategory.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {selectedCategory?.images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image, index)}
                className="relative group overflow-hidden rounded-lg border border-border hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${selectedCategory.title} ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Full Size</span>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Size Image Lightbox */}
      {fullSizeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setFullSizeImage(null)}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={() => setFullSizeImage(null)}
          >
            <X className="h-8 w-8" />
          </Button>

          {/* Previous button */}
          {selectedCategory && selectedCategory.images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20 z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <ChevronLeft className="h-10 w-10" />
            </Button>
          )}

          {/* Image */}
          <img
            src={fullSizeImage.url}
            alt="Full size view"
            className="max-w-[90vw] max-h-[90vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          {selectedCategory && selectedCategory.images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20 z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <ChevronRight className="h-10 w-10" />
            </Button>
          )}

          {/* Image counter */}
          {selectedCategory && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {fullSizeImage.index + 1} / {selectedCategory.images.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageLightboxProps {
  image: { url: string; index: number } | null;
  images: string[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function ImageLightbox({ image, images, onClose, onNavigate }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
      style={{ opacity: 1 }}
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 h-12 w-12"
        onClick={onClose}
      >
        <X className="h-8 w-8" />
      </Button>

      {/* Previous button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 text-white hover:bg-white/20 z-10 h-14 w-14"
          onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
        >
          <ChevronLeft className="h-12 w-12" />
        </Button>
      )}

      {/* Image */}
      <img
        src={image.url}
        alt="Full size view"
        className="max-w-[90vw] max-h-[90vh] object-contain animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 text-white hover:bg-white/20 z-10 h-14 w-14"
          onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
        >
          <ChevronRight className="h-12 w-12" />
        </Button>
      )}

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full">
        {image.index + 1} / {images.length}
      </div>
    </div>
  );
}

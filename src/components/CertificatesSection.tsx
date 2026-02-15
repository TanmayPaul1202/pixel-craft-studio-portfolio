import { Award, BadgeCheck, Sparkles, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

const certificates = [
  {
    id: 'canva-essentials',
    title: 'Canva Essentials',
    issuer: 'Canva Design School',
    issueDate: 'January 31, 2026',
    credentialId: '89b49b',
    description: 'Mastered Canva design tools and techniques for creating stunning visual content.',
    image: '/lovable-uploads/certificate-canva-essentials.jpg',
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
    bgGradient: 'from-purple-500/20 to-pink-500/10',
    verifyUrl: 'https://www.canva.com/design-school/certification-award/89b49b07-f46b-4a49-97b5-c0cc922bf979',
  }
];

export function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null);
  const images = certificates.map(cert => cert.image);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const newIndex = direction === 'prev' 
      ? (selectedImage.index - 1 + images.length) % images.length
      : (selectedImage.index + 1) % images.length;
    setSelectedImage({ url: images[newIndex], index: newIndex });
  };

  return (
    <section id="certificates" className="py-10 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-magenta/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-medium text-neon-purple">Verified Credentials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-yellow">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Continuously learning and upgrading skills with industry-recognized certifications.
          </p>
        </div>

        {/* Certificates */}
        <div className="max-w-3xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group reveal-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${cert.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
              
              <div className={`relative flex flex-col sm:flex-row gap-5 p-5 bg-gradient-to-br ${cert.bgGradient} backdrop-blur-xl rounded-2xl border border-border/50 hover:border-neon-purple/50 transition-all duration-500`}>
                {/* Certificate Thumbnail */}
                <div 
                  className="relative w-full sm:w-48 h-36 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ url: cert.image, index })}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
                    <ExternalLink className="w-5 h-5 text-neon-purple" />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-neon-purple/50">
                    <BadgeCheck className="w-3 h-3 text-neon-purple" />
                    <span className="text-[10px] font-medium text-neon-purple">Verified</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}>
                      <Sparkles className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-magenta transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2.5 py-1 rounded-full bg-background/50 border border-border/50">
                      <span className="text-foreground/70">Issued: </span>
                      <span className="font-medium text-foreground">{cert.issueDate}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-background/50 border border-border/50 font-mono">
                      ID: {cert.credentialId}
                    </span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-magenta/20 border border-neon-purple/50 hover:border-neon-purple transition-all duration-300"
                      >
                        <BadgeCheck className="w-3 h-3 text-neon-purple" />
                        <span className="font-medium text-neon-purple">Verify</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        image={selectedImage}
        images={images}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}

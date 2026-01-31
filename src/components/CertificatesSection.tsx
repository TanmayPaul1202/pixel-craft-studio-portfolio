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
    <section id="certificates" className="py-16 relative overflow-hidden">
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group reveal-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${cert.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
              
              <div className={`relative bg-gradient-to-br ${cert.bgGradient} backdrop-blur-xl rounded-3xl border border-border/50 overflow-hidden hover:border-neon-purple/50 transition-all duration-500`}>
                {/* Certificate Image */}
                <div 
                  className="relative aspect-[16/11] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ url: cert.image, index })}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-neon-purple/50">
                    <BadgeCheck className="w-4 h-4 text-neon-purple" />
                    <span className="text-xs font-medium text-neon-purple">Verified</span>
                  </div>
                  
                  {/* View Full Certificate Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-neon-purple/50">
                      <ExternalLink className="w-4 h-4 text-neon-purple" />
                      <span className="text-sm font-medium">View Full Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-magenta transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Sparkles className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/50 border border-border/50">
                      <span className="text-foreground/70">Issued:</span>
                      <span className="font-medium text-foreground">{cert.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/50 border border-border/50">
                      <span className="text-foreground/70">ID:</span>
                      <span className="font-medium font-mono text-foreground">{cert.credentialId}</span>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-magenta/20 border border-neon-purple/50 hover:border-neon-purple hover:from-neon-purple/30 hover:to-neon-magenta/30 transition-all duration-300 group/verify"
                      >
                        <BadgeCheck className="w-3.5 h-3.5 text-neon-purple" />
                        <span className="font-medium text-neon-purple">Verify Credential</span>
                        <ExternalLink className="w-3 h-3 text-neon-purple opacity-0 -translate-x-1 group-hover/verify:opacity-100 group-hover/verify:translate-x-0 transition-all duration-300" />
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

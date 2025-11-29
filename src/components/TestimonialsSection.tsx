import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'Pixel Craft Studio transformed our brand identity completely. The logo and marketing materials exceeded our expectations. Highly professional!',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Priya Sharma',
    role: 'Wedding Couple',
    content: 'Our wedding video was absolutely stunning! The attention to detail and cinematic quality made our special day even more memorable.',
    rating: 5,
    avatar: '👰'
  },
  {
    name: 'Anil Patel',
    role: 'Content Creator',
    content: 'Best video editor I have worked with. Fast turnaround, creative ideas, and always delivers on time. My YouTube channel has grown significantly!',
    rating: 5,
    avatar: '🎥'
  },
  {
    name: 'Sneha Reddy',
    role: 'Restaurant Owner',
    content: 'The menu designs and social media content created by Pixel Craft Studio helped us attract more customers. Very creative and professional work!',
    rating: 5,
    avatar: '🍽️'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="glass-card hover:scale-[1.02] transition-all duration-300 border border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary mb-6 opacity-50" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

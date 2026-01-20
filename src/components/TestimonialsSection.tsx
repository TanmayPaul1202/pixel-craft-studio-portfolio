import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Business Owner',
    company: 'Radhe Store',
    image: '/lovable-uploads/logo-radhe-store.jpg',
    rating: 5,
    review: 'Pixel Craft Studio transformed our brand identity completely. The logo design and marketing materials exceeded our expectations. Highly professional team!',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    name: 'Priya Patel',
    role: 'Cafe Owner',
    company: "Sew's Cafe",
    image: '/lovable-uploads/logo-sews-cafe.jpg',
    rating: 5,
    review: 'The video editing for our promotional content was absolutely stunning. Quick turnaround and amazing attention to detail. Will definitely work again!',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    name: 'Amit Lalwani',
    role: 'Entrepreneur',
    company: 'Lalwani Enterprises',
    image: '/lovable-uploads/logo-lalwani.jpg',
    rating: 5,
    review: 'Outstanding wedding invitation videos! The creativity and quality were top-notch. Our guests loved them. Thank you for making our special day even more memorable.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    name: 'Sneha Gupta',
    role: 'Studio Manager',
    company: 'Sneha Studio',
    image: '/lovable-uploads/logo-sneha-studio.jpg',
    rating: 5,
    review: 'Professional, creative, and reliable. The social media content they created helped us increase our online presence significantly. Highly recommend!',
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30'
  },
  {
    name: 'Krina Mehta',
    role: 'Event Planner',
    company: 'Krinas Events',
    image: '/lovable-uploads/logo-krinas.jpg',
    rating: 5,
    review: 'The festival posters and event materials were perfect. They captured the essence of our events beautifully. Great communication throughout the project.',
    gradient: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30'
  },
  {
    name: 'Nikita Shah',
    role: 'Content Creator',
    company: 'Nikitas Vlogs',
    image: '/lovable-uploads/logo-nikitas.jpg',
    rating: 5,
    review: 'Amazing thumbnail designs that increased my video click-through rates! They understand YouTube aesthetics perfectly. Fast delivery and great prices.',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    borderColor: 'border-indigo-500/30'
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 backdrop-blur-sm rounded-full border border-border/50 mb-6">
            <Star className="h-5 w-5 text-neon-purple fill-neon-purple" />
            <span className="text-sm font-medium text-neon-purple uppercase tracking-wider">Client Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">
              What Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about working with Pixel Craft Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm border ${testimonial.borderColor} hover:scale-[1.02] transition-all duration-500 reveal-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-foreground" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted/50 ring-2 ring-border/50 group-hover:ring-primary/50 transition-all duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary/80">{testimonial.company}</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 reveal-up">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
              {[
                { value: '50+', label: 'Happy Clients', icon: '😊' },
                { value: '150+', label: 'Projects Done', icon: '🎨' },
                { value: '5.0', label: 'Average Rating', icon: '⭐' },
                { value: '100%', label: 'Satisfaction', icon: '💯' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

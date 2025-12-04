import { useState } from 'react';
import { Mail, Phone, Instagram, MessageCircle, Send, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pixcraft.studio@gmail.com',
      link: 'mailto:pixcraft.studio@gmail.com',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 87807 90466',
      link: 'tel:+918780790466',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@pixelcraft.studio_',
      link: 'https://instagram.com/pixelcraft.studio_',
      gradient: 'from-pink-500 to-orange-400'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Quick Message',
      link: 'https://wa.me/918780790466',
      gradient: 'from-green-500 to-emerald-400'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', time: 'By Appointment' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Contact Us
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your creative vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-8 reveal-up">
            {/* Get In Touch Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                  Get In Touch
                </h3>
                
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex items-center gap-4 p-4 rounded-2xl bg-background/50 hover:bg-background/80 border border-transparent hover:border-border/50 transition-all duration-300"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg group-hover/item:scale-110 group-hover/item:shadow-xl transition-all duration-300`}>
                        <method.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground font-medium">{method.title}</p>
                        <p className="text-foreground font-semibold truncate group-hover/item:text-primary transition-colors duration-300">
                          {method.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b border-border/30 last:border-0"
                    >
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-semibold text-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3 reveal-up">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-border/50 h-full">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  Send a Message
                </h3>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formData.name 
                            ? '-top-2.5 text-xs bg-card px-2 text-primary' 
                            : 'top-4 text-muted-foreground'
                        }`}
                      >
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="h-14 bg-background/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 px-4"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email 
                            ? '-top-2.5 text-xs bg-card px-2 text-primary' 
                            : 'top-4 text-muted-foreground'
                        }`}
                      >
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="h-14 bg-background/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 px-4"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label 
                      htmlFor="subject" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'subject' || formData.subject 
                          ? '-top-2.5 text-xs bg-card px-2 text-primary' 
                          : 'top-4 text-muted-foreground'
                      }`}
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="h-14 bg-background/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 px-4"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs bg-card px-2 text-primary z-10' 
                          : 'top-4 text-muted-foreground'
                      }`}
                    >
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="min-h-[160px] bg-background/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 px-4 pt-5 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group"
                  >
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Floating Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
          <Button
            size="sm"
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300"
            onClick={() => window.open('https://wa.me/918780790466', '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button
            size="sm"
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300"
            onClick={() => window.open('mailto:pixcraft.studio@gmail.com', '_blank')}
          >
            <Mail className="h-6 w-6" />
          </Button>
          <Button
            size="sm"
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:scale-110 transition-all duration-300"
            onClick={() => window.open('https://instagram.com/pixelcraft.studio_', '_blank')}
          >
            <Instagram className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

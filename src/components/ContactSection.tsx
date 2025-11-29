import { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/pixelcraft.studio_',
      color: 'hover:text-primary'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/918780790466',
      color: 'hover:text-secondary'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:pixcraft.studio@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch
          </p>
        </div>

        {/* Contact Form - Clean & Minimal */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground text-lg mb-3 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary h-14 text-lg rounded-2xl"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground text-lg mb-3 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary h-14 text-lg rounded-2xl"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-foreground text-lg mb-3 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background/50 border-primary/20 focus:border-primary min-h-[160px] text-lg rounded-2xl resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 text-background font-semibold text-lg py-7 rounded-full shadow-lg glow-orange transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Social Icons - Clean White Space */}
          <div className="flex justify-center gap-6 mt-16">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110"
          onClick={() => window.open('https://wa.me/918780790466', '_blank')}
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </div>
    </section>
  );
}

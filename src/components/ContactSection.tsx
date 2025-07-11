import { useState } from 'react';
import { Mail, Phone, Instagram, MessageCircle, Send, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pixcraft.studio@gmail.com',
      link: 'mailto:pixcraft.studio@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 87807 90466',
      link: 'tel:+918780790466',
      color: 'neon-purple'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@pixelcraft.studio_',
      link: 'https://instagram.com/pixelcraft.studio_',
      color: 'neon-magenta'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Quick Message',
      link: 'https://wa.me/918780790466',
      color: 'neon-cyan'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-blue/20 blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-neon-purple/20 blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="reveal-up">
            <h3 className="text-2xl font-semibold mb-8 text-neon-blue">Get In Touch</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className={`bg-gradient-card border-border hover:border-${method.color}/50 transition-all duration-300 hover-scale group cursor-pointer`}
                  onClick={() => window.open(method.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-${method.color}/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className={`h-6 w-6 text-${method.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:text-white transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className={`text-${method.color} group-hover:text-white transition-colors duration-300`}>
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-neon-purple" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="reveal-up">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-purple">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-muted/20 border-border focus:border-neon-blue"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-muted/20 border-border focus:border-neon-blue"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 bg-muted/20 border-border focus:border-neon-blue"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 bg-muted/20 border-border focus:border-neon-blue min-h-[120px]"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-accent hover:opacity-90 text-background font-semibold py-3 rounded-full glow-blue hover-scale"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Floating Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover-scale"
            onClick={() => window.open('https://wa.me/918780790466', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-neon-blue hover:opacity-90 text-background shadow-lg hover-scale"
            onClick={() => window.open('mailto:pixcraft.studio@gmail.com', '_blank')}
          >
            <Mail className="h-5 w-5" />
          </Button>
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-gradient-hero hover:opacity-90 text-background shadow-lg hover-scale"
            onClick={() => window.open('https://instagram.com/pixelcraft.studio_', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 64, 64]}>
            <MeshDistortMaterial
              color="#8b5cf6"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
          <Sphere args={[0.8, 32, 32]} position={[3, 1, -2]}>
            <MeshDistortMaterial
              color="#00ffff"
              attach="material"
              distort={0.5}
              speed={1.5}
              roughness={0.1}
              metalness={0.9}
            />
          </Sphere>
        </Float>
        
        <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
          <Sphere args={[0.6, 32, 32]} position={[-2.5, -1, 1]}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.4}
              speed={3}
              roughness={0.3}
              metalness={0.7}
            />
          </Sphere>
        </Float>
      </Suspense>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'saurabhccs10@gmail.com',
      href: 'mailto:saurabhccs10@gmail.com',
      color: 'tech-cyan'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91-9835180230',
      href: 'tel:+919835180230',
      color: 'tech-green'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'NIT Agartala, Tripura, India',
      href: '#',
      color: 'tech-blue'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      username: 'saurabh2226',
      href: 'https://github.com/saurabh2226',
      color: 'tech-purple'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      username: 'saurabh-kumar-3ab422255',
      href: 'https://www.linkedin.com/in/saurabh-kumar-3ab422255',
      color: 'tech-blue'
    },
    {
      icon: <ExternalLink className="h-6 w-6" />,
      label: 'Portfolio',
      username: 'saurabhportfolio-pi.vercel.app',
      href: 'https://saurabhportfolio-pi.vercel.app/',
      color: 'tech-cyan'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-tech-purple">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and programming.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="gradient-card border-border/50 shadow-tech">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-white hover:scale-105 transition-smooth"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 3D Scene */}
            <div className="h-64 rounded-2xl shadow-tech overflow-hidden">
              <ContactScene />
            </div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div key={info.label} variants={itemVariants}>
                  <Card className="gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-${info.color}/20`}>
                          <div className={`text-${info.color}`}>
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{info.label}</h4>
                          {info.href !== '#' ? (
                            <a 
                              href={info.href}
                              className={`text-${info.color} hover:underline transition-smooth`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Connect with me</h3>
              {socialLinks.map((social, index) => (
                <motion.div key={social.label} variants={itemVariants}>
                  <Card className="gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth">
                    <CardContent className="p-6">
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className={`p-3 rounded-full bg-${social.color}/20 group-hover:bg-${social.color}/30 transition-smooth`}>
                          <div className={`text-${social.color}`}>
                            {social.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{social.label}</h4>
                          <p className={`text-${social.color} group-hover:underline transition-smooth`}>
                            {social.username}
                          </p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="gradient-card border-border/50 shadow-tech max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently open to new opportunities and exciting projects. 
                Let's build something amazing together!
              </p>
              <Button 
                variant="default" 
                size="lg"
                className="gradient-primary text-white hover:scale-105 transition-smooth"
                asChild
              >
                <a href="mailto:saurabhccs10@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
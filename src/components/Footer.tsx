import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/saurabh2226',
      icon: <Github className="h-5 w-5" />,
      color: 'tech-purple'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saurabh-kumar-3ab422255',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'tech-blue'
    },
    {
      name: 'Email',
      href: 'mailto:saurabhccs10@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      color: 'tech-cyan'
    },
    {
      name: 'Portfolio',
      href: 'https://saurabhportfolio-pi.vercel.app/',
      icon: <ExternalLink className="h-5 w-5" />,
      color: 'tech-green'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-6 gradient-card border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-tech-purple/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-tech-cyan/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Saurabh Kumar
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Full Stack Developer and competitive programmer passionate about building 
              scalable web applications and solving complex algorithmic challenges.
            </p>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Current:</span> B.Tech Electronics & Instrumentation Engineering
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Institution:</span> NIT Agartala
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">LeetCode:</span> Max Rating 1823 • 500+ Problems
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-muted-foreground hover:text-${social.color} transition-smooth group`}
                >
                  <span className={`group-hover:text-${social.color} transition-smooth`}>
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Saurabh Kumar. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React, Three.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                Open Source on GitHub
              </span>
              <a
                href="https://github.com/saurabh2226"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-smooth group"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
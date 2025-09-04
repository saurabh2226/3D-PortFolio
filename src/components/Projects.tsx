import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Cpu, Users, Video } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Torus, Float } from '@react-three/drei';
import { Suspense } from 'react';

const ProjectScene = ({ type }: { type: 'algo' | 'video' | 'general' }) => {
  const colors = {
    algo: '#8b5cf6', // purple
    video: '#3b82f6', // blue  
    general: '#00ffff' // cyan
  };

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      
      <Suspense fallback={null}>
        {type === 'algo' && (
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Box args={[1.5, 1.5, 1.5]} rotation={[0.4, 0.4, 0]}>
              <meshStandardMaterial color={colors.algo} transparent opacity={0.8} />
            </Box>
          </Float>
        )}
        
        {type === 'video' && (
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere args={[1, 32, 32]}>
              <meshStandardMaterial color={colors.video} transparent opacity={0.8} />
            </Sphere>
          </Float>
        )}
        
        {type === 'general' && (
          <Float speed={1} rotationIntensity={2} floatIntensity={1}>
            <Torus args={[1, 0.4, 16, 100]} rotation={[0.5, 0, 0]}>
              <meshStandardMaterial color={colors.general} transparent opacity={0.8} />
            </Torus>
          </Float>
        )}
      </Suspense>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Algo-Scheduler',
      description: 'Advanced CPU scheduling algorithms implementation in C++ to optimize resource allocation and system performance.',
      longDescription: 'Comprehensive implementation of various CPU scheduling algorithms including FCFS, Round Robin, and Priority scheduling. The project demonstrates deep understanding of operating system concepts and optimization techniques.',
      tech: ['C++', 'Scheduling Algorithms', 'Data Structures', 'Priority Queues', 'Makefile'],
      achievements: [
        'Improved efficiency by 15%',
        'Reduced average wait time by 10%',
        'Implemented multiple scheduling algorithms'
      ],
      github: 'https://github.com/saurabh2226/Scheduling-Algorithm',
      demo: 'https://youtu.be/gOwIlG28B1Y?si=2umzWgx_F5TiMKdY',
      icon: <Cpu className="h-6 w-6" />,
      type: 'algo' as const,
      featured: true
    },
    {
      title: 'Video Conferencing Platform',
      description: 'Real-time video conferencing application with advanced features like screen sharing and secure authentication.',
      longDescription: 'Full-featured video conferencing platform built with Next.js, supporting 100+ concurrent users with real-time chat, screen sharing, and secure JWT authentication.',
      tech: ['Next.js', 'TypeScript', 'Clerk', 'MongoDB', 'Tailwind CSS', 'WebRTC'],
      achievements: [
        'Supports 100+ secure video calls',
        'Real-time chat and screen sharing',
        'JWT-based authentication for 500+ users'
      ],
      github: 'https://github.com/saurabh2226/Video-Conferencing-Website',
      demo: '#',
      icon: <Video className="h-6 w-6" />,
      type: 'video' as const,
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with cart management, payment integration, and admin dashboard.',
      longDescription: 'Comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment processing, and administrative controls.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe API'],
      achievements: [
        'Complete shopping cart functionality',
        'Secure payment integration',
        'Admin dashboard for inventory management'
      ],
      github: '#',
      demo: '#',
      icon: <Code className="h-6 w-6" />,
      type: 'general' as const,
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-tech-cyan">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development, 
            algorithm implementation, and system design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`${project.featured ? 'lg:h-[500px]' : 'lg:h-[400px]'}`}
            >
              <Card className={`gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth h-full ${
                project.featured ? 'ring-1 ring-primary/30' : ''
              }`}>
                <CardContent className="p-0 h-full">
                  <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} h-full`}>
                    {/* 3D Scene */}
                    <div className={`relative ${project.featured ? '' : 'lg:col-span-1'} h-64 lg:h-full`}>
                      <div className="absolute inset-0 rounded-l-lg overflow-hidden">
                        <ProjectScene type={project.type} />
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm">
                          {project.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 flex flex-col justify-between ${project.featured ? '' : 'lg:col-span-2'}`}>
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.featured ? project.longDescription : project.description}
                            </p>
                          </div>
                          {project.featured && (
                            <Badge variant="default" className="gradient-primary text-white">
                              Featured
                            </Badge>
                          )}
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-tech-purple">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-tech-green">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="bg-background/50 text-foreground hover:bg-primary/20 transition-smooth"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4 pt-6">
                        <Button 
                          variant="default" 
                          className="gradient-primary text-white hover:scale-105 transition-smooth"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                        
                        {project.demo !== '#' && (
                          <Button 
                            variant="outline" 
                            className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background transition-smooth"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="default" 
            size="lg"
            className="gradient-primary text-white hover:scale-105 transition-smooth"
            asChild
          >
            <a href="https://github.com/saurabh2226" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
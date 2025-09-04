import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Suspense } from 'react';

const FloatingCube = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const FloatingSphere = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh position={[-2, 1, -1]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#00ffff" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const FloatingTorus = () => {
  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={1}>
      <mesh position={[0, -1.5, 1]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.8, 0.3, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[0, 0, 0]}
          >
            SAURABH
            <meshStandardMaterial color="#8b5cf6" />
          </Text3D>
        </Center>
        
        <FloatingCube />
        <FloatingSphere />
        <FloatingTorus />
      </Suspense>
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-tech-purple/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-tech-cyan/20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-tech-blue/30 blur-2xl animate-bounce-slow" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-muted-foreground font-medium"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-tech-purple to-tech-cyan bg-clip-text text-transparent"
            >
              Saurabh Kumar
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-foreground"
            >
              Full Stack Developer & Problem Solver
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Electronics Engineering student at NIT Agartala with expertise in React, Node.js, and competitive programming. 
              Passionate about creating scalable web applications and solving complex algorithmic challenges.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="default" size="lg" className="gradient-primary text-white hover:scale-105 transition-smooth">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            
            <Button variant="outline" size="lg" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background transition-smooth">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/saurabh2226"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border hover:border-tech-purple hover:bg-tech-purple/10 transition-smooth group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-tech-purple transition-smooth" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/saurabh-kumar-3ab422255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border hover:border-tech-blue hover:bg-tech-blue/10 transition-smooth group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-tech-blue transition-smooth" />
            </a>
            
            <a
              href="mailto:saurabhccs10@gmail.com"
              className="p-3 rounded-full bg-card/50 border border-border hover:border-tech-cyan hover:bg-tech-cyan/10 transition-smooth group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-tech-cyan transition-smooth" />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[600px] w-full relative"
        >
          <div className="absolute inset-0 rounded-2xl shadow-glow">
            <Scene3D />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;
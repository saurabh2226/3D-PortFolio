import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Trophy, Users } from 'lucide-react';

const About = () => {
  const skills = {
    'Programming Languages': ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    'Frameworks & Libraries': ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Redux', 'Tailwind CSS'],
    'Backend & Databases': ['RESTful APIs', 'JWT Authentication', 'MongoDB', 'MySQL', 'Socket.IO', 'Firebase'],
    'CS Fundamentals': ['DSA', 'OOPs', 'Operating Systems', 'DBMS', 'Computer Networks'],
    'Dev Tools': ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'Netlify', 'Vercel', 'Render']
  };

  const experiences = [
    {
      company: 'Newton School',
      role: 'Technical Intern',
      period: 'May 2025 - July 2025',
      type: 'Remote',
      achievements: [
        'Instructed 100+ junior students in DSA (C++) and web development',
        '30% average improvement in coding assessment scores',
        'Conducted 25+ live sessions and technical doubt-solving hours'
      ],
      icon: <Users className="h-6 w-6" />
    },
    {
      company: 'WeekendSync',
      role: 'Full Stack Developer Intern',
      period: 'Nov 2024 - Jan 2025',
      type: 'Remote',
      achievements: [
        'Engineered end-to-end features in modular monorepo architecture',
        'Boosted internal productivity tooling speed by 30%',
        'Reduced API response times by 45% with Redis caching'
      ],
      icon: <Code className="h-6 w-6" />
    }
  ];

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
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-tech-purple">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Electronics Engineering student at NIT Agartala with a strong foundation in 
            full-stack development and competitive programming. I love building scalable solutions and 
            tackling complex algorithmic challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Education & Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="gradient-card border-border/50 shadow-tech">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-tech-green/20">
                    <Brain className="h-6 w-6 text-tech-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-tech-purple pl-4">
                    <h4 className="font-semibold text-lg">B.Tech Electronics & Instrumentation</h4>
                    <p className="text-tech-purple font-medium">National Institute of Technology, Agartala</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026 • CGPA: 7.0</p>
                  </div>
                  
                  <div className="border-l-4 border-tech-blue pl-4">
                    <h4 className="font-semibold">Senior Secondary (XII)</h4>
                    <p className="text-tech-blue font-medium">JD Public School, Chapra</p>
                    <p className="text-sm text-muted-foreground">2019 - 2021 • 76%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 shadow-tech">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-tech-cyan/20">
                    <Trophy className="h-6 w-6 text-tech-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Competitive Programming</h3>
                    <p className="text-muted-foreground">Problem Solving Stats</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-2xl font-bold text-tech-purple">1823</div>
                    <div className="text-sm text-muted-foreground">LeetCode Max Rating</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-2xl font-bold text-tech-cyan">500+</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-2xl font-bold text-tech-blue">1500+</div>
                    <div className="text-sm text-muted-foreground">Codeforces Rating</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-2xl font-bold text-tech-green">450+</div>
                    <div className="text-sm text-muted-foreground">CP Problems</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/20">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-lg font-semibold">{exp.role}</h4>
                          <p className="text-tech-purple font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="gradient-card border-border/50 shadow-tech h-full">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-tech-purple">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-background/50 text-foreground hover:bg-primary/20 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
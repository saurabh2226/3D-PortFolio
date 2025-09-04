import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Target, Star, Code2, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Meta Hacker Cup 2024',
      description: 'Global Rank 2827 out of 22K+ participants in Round 1',
      category: 'Competition',
      rank: '#2827',
      participants: '22K+',
      icon: <Trophy className="h-6 w-6" />,
      color: 'tech-cyan',
      link: 'https://drive.google.com/file/d/1U793Yd3V-FEAyL_rIurxNdzYUe-YdjIF/view?usp=sharing'
    },
    {
      title: 'Flipkart Grid 6.0',
      description: 'Qualified for Level 3 of Software Development Track',
      category: 'Hackathon',
      rank: 'Level 3',
      participants: '10K+',
      icon: <Code2 className="h-6 w-6" />,
      color: 'tech-blue',
      link: 'https://drive.google.com/file/d/1yeo53W5Jfu8a22xutdbmLLi17LkuFE93/view?usp=sharing'
    },
    {
      title: 'TATA ElXSI GenAI Hackathon',
      description: 'Achieved 3rd Rank in GenAI Hackathon 2024',
      category: 'Hackathon',
      rank: '3rd Place',
      participants: '5K+',
      icon: <Award className="h-6 w-6" />,
      color: 'tech-green',
      link: 'https://drive.google.com/file/d/1NvWeQSCwr1wNZlNT0A5DVuNkiBklfm1K/view?usp=sharing'
    },
    {
      title: 'Smart India Hackathon 2023',
      description: 'Finalists among 100+ teams at NIT Agartala',
      category: 'Hackathon',
      rank: 'Finalist',
      participants: '100+',
      icon: <Users className="h-6 w-6" />,
      color: 'tech-purple',
      link: 'https://drive.google.com/file/d/1igkeagj0EAfq54_jahDAH5iGRccxjGPB/view?usp=sharing'
    },
    {
      title: 'Newton School Coderush',
      description: 'AIR 274 in Newton School Coderush November 2023',
      category: 'Competition',
      rank: 'AIR 274',
      participants: '1K+',
      icon: <Target className="h-6 w-6" />,
      color: 'tech-cyan',
      link: 'https://drive.google.com/file/d/1OIELNMEE8cklQIYRlqVuQg5edijEzpat/view?usp=sharing'
    },
    {
      title: 'JEE Main 2022',
      description: 'Ranked among top 5 percentile students',
      category: 'Academic',
      rank: 'Top 5%',
      participants: '1.1M+',
      icon: <Star className="h-6 w-6" />,
      color: 'tech-green',
      link: '#'
    }
  ];

  const stats = [
    { label: 'LeetCode Max Rating', value: '1823', color: 'tech-purple' },
    { label: 'Problems Solved', value: '500+', color: 'tech-cyan' },
    { label: 'Codeforces Rating', value: '1500+', color: 'tech-blue' },
    { label: 'Contest Participations', value: '50+', color: 'tech-green' }
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
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Awards & <span className="text-tech-green">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for excellence in competitive programming, hackathons, and technical competitions.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="gradient-card border-border/50 shadow-tech text-center hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-full bg-${achievement.color}/20 group-hover:bg-${achievement.color}/30 transition-smooth`}>
                      <div className={`text-${achievement.color}`}>
                        {achievement.icon}
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`bg-${achievement.color}/20 text-${achievement.color} border-${achievement.color}/30`}
                    >
                      {achievement.category}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-border/50">
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${achievement.color}`}>
                          {achievement.rank}
                        </div>
                        <div className="text-xs text-muted-foreground">Rank</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-muted-foreground">
                          {achievement.participants}
                        </div>
                        <div className="text-xs text-muted-foreground">Participants</div>
                      </div>
                    </div>

                    {achievement.link !== '#' && (
                      <div className="pt-4">
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center text-sm text-${achievement.color} hover:underline transition-smooth`}
                        >
                          View Certificate →
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Coding Profiles</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">LeetCode</h4>
                  <p className="text-muted-foreground">Max Rating: 1823 • 500+ Problems Solved</p>
                </div>
                
                <a
                  href="https://leetcode.com/u/saurabh0202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-tech-purple hover:text-tech-cyan transition-smooth"
                >
                  Visit Profile →
                </a>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 shadow-tech hover:shadow-glow transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-tech-blue/20 mx-auto flex items-center justify-center mb-4">
                    <Trophy className="h-8 w-8 text-tech-blue" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Codeforces</h4>
                  <p className="text-muted-foreground">Max Rating: 1500+ • 450+ Problems Solved</p>
                </div>
                
                <a
                  href="https://codeforces.com/profile/saurabh_codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-tech-blue hover:text-tech-cyan transition-smooth"
                >
                  Visit Profile →
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
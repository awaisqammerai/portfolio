import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Award, Star, GitBranch } from 'lucide-react';

export default function GitHub() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const achievements = [
    {
      icon: Star,
      title: 'GitHub Contributions',
      value: '500+',
      description: 'Active contributions across multiple projects',
    },
    {
      icon: GitBranch,
      title: 'Public Repositories',
      value: '25+',
      description: 'Open-source projects and code samples',
    },
    {
      icon: Award,
      title: 'Certifications',
      value: '8+',
      description: 'Professional certifications in AI and ML',
    },
    {
      icon: Github,
      title: 'Followers',
      value: '200+',
      description: 'Growing community of developers',
    },
  ];

  const certifications = [
    'TensorFlow Developer Certificate',
    'Google Cloud Professional Data Engineer',
    'AWS Certified Machine Learning Specialty',
    'IBM Data Science Professional Certificate',
    'DeepLearning.AI Specialization',
    'Kaggle Expert Badge',
    'Python for Data Science - Advanced',
    'Machine Learning Engineering Specialization',
  ];

  return (
    <section id="github" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              GitHub & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              My contributions, projects, and professional accomplishments
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card-lg text-center space-y-3 hover:glow-green transition-smooth"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto"
                  >
                    <Icon size={24} className="text-accent" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">{achievement.value}</div>
                    <div className="text-sm font-semibold text-foreground">{achievement.title}</div>
                    <div className="text-xs text-foreground/60 mt-1">{achievement.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.a
              href="https://github.com/Awais-qammer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-smooth border border-accent/30 hover:border-accent/60"
            >
              <Github size={20} />
              Visit My GitHub Profile
            </motion.a>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground text-center">Professional Certifications</h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 glass-card-md hover:glow-cyan transition-smooth"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{cert}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

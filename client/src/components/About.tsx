import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PROFILE_IMG = '/manus-storage/profile-photo_c3954d1d.png';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Certifications', value: '8+' },
    { label: 'Happy Clients', value: '20+' },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Discover my journey, passion, and expertise in AI and Data Science
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Image */}
            <div className="relative flex justify-center">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' } as any}
                className="relative z-10 w-64 h-64 rounded-2xl overflow-hidden glass-card p-1 glow-cyan"
              >
                <img
                  src={PROFILE_IMG}
                  alt="Awais Qammer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity } as any}
                className="absolute w-72 h-72 rounded-2xl bg-cyan-400/10 blur-3xl"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Passionate About Data & AI
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm a Data Scientist and AI Engineer with a deep passion for transforming raw data into actionable insights and building intelligent systems that solve real-world problems. My journey in AI and machine learning has been driven by curiosity and a commitment to excellence.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">My Vision</h4>
                <p className="text-foreground/70 leading-relaxed">
                  I aim to leverage cutting-edge AI and data science techniques to create innovative solutions that drive business growth and positively impact society. Whether it's predictive analytics, machine learning models, or AI automation, I'm committed to delivering excellence.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">What I Do</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span>Build and deploy machine learning models for predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span>Create AI-powered web applications and automation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span>Develop interactive data visualizations and dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span>Provide data analysis and consulting services</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card-md text-center space-y-2 hover:glow-green transition-smooth"
              >
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

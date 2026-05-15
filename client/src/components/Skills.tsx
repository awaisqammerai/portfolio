import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'R'],
    },
    {
      title: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM'],
    },
    {
      title: 'Data Science',
      skills: ['Data Analysis', 'Statistical Modeling', 'Feature Engineering', 'Deep Learning', 'NLP'],
    },
    {
      title: 'Data Visualization',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      title: 'Web & APIs',
      skills: ['Flask', 'Streamlit', 'FastAPI', 'REST APIs', 'Web Scraping'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Jupyter', 'Google Colab', 'Docker', 'AWS'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and expertise
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card-lg space-y-4 hover:glow-green transition-smooth cursor-default"
              >
                <h3 className="text-xl font-semibold text-accent">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/30 hover:border-accent/60 transition-smooth"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Bars */}
          <motion.div
            variants={itemVariants}
            className="mt-16 space-y-8"
          >
            <h3 className="text-2xl font-bold text-foreground text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Machine Learning', level: 95 },
                { name: 'Data Analysis', level: 90 },
                { name: 'Deep Learning', level: 88 },
                { name: 'Data Visualization', level: 85 },
                { name: 'Python Programming', level: 92 },
                { name: 'AI Automation', level: 87 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-accent font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const timeline = [
    {
      type: 'experience',
      title: 'Senior Data Scientist',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading AI/ML initiatives, building predictive models, and mentoring junior data scientists.',
      highlights: ['ML Model Development', 'Team Leadership', 'AI Strategy'],
    },
    {
      type: 'experience',
      title: 'Machine Learning Engineer',
      company: 'Data Analytics Corp',
      period: '2022 - 2023',
      description: 'Developed and deployed machine learning models for business intelligence and automation.',
      highlights: ['Model Deployment', 'Feature Engineering', 'API Development'],
    },
    {
      type: 'education',
      title: 'Advanced Machine Learning Specialization',
      company: 'Coursera',
      period: '2023',
      description: 'Completed comprehensive specialization in advanced ML techniques and deep learning.',
      highlights: ['Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
      type: 'experience',
      title: 'Junior Data Scientist',
      company: 'StartUp Ventures',
      period: '2021 - 2022',
      description: 'Analyzed complex datasets and built initial ML models for product recommendations.',
      highlights: ['Data Analysis', 'Python', 'SQL'],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      period: '2017 - 2021',
      description: 'Specialized in AI and machine learning with focus on practical applications.',
      highlights: ['AI & ML', 'Data Structures', 'Algorithms'],
    },
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

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
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              My professional journey and learning milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            className="max-w-3xl mx-auto space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-accent to-transparent" />
                )}

                {/* Timeline item */}
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
                      item.type === 'experience'
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    }`}
                  >
                    {item.type === 'experience' ? '💼' : '🎓'}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex-1 glass-card-lg space-y-3 hover:glow-green transition-smooth"
                  >
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-accent font-semibold text-sm">{item.company}</p>
                      <p className="text-foreground/50 text-sm">{item.period}</p>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-2 py-1 rounded text-xs bg-accent/10 text-accent font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

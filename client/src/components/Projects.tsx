import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
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
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const projects = [
    {
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI powered by transformer models and NLP techniques. Features context awareness and multi-language support.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Stock Prediction System',
      description: 'Machine learning system for predicting stock market trends using LSTM networks and technical analysis indicators.',
      tech: ['Python', 'PyTorch', 'Time Series', 'Pandas'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Face Recognition App',
      description: 'Deep learning application for real-time face detection, recognition, and verification using CNN architectures.',
      tech: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow'],
      github: '#',
      demo: '#',
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Advanced sentiment analysis tool using transformer models to classify text emotions and opinions with high accuracy.',
      tech: ['Python', 'BERT', 'NLP', 'Streamlit'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Data Dashboard',
      description: 'Interactive data visualization dashboard with real-time analytics, custom filters, and exportable reports.',
      tech: ['Power BI', 'SQL', 'Python', 'Tableau'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Recommendation System',
      description: 'Collaborative filtering and content-based recommendation engine for personalized product suggestions.',
      tech: ['Python', 'Scikit-learn', 'SQL', 'FastAPI'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Showcasing my best work in AI, machine learning, and data science
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group glass-card-lg space-y-4 hover:glow-cyan transition-smooth overflow-hidden"
              >
                {/* Project Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded text-xs bg-accent/10 text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-smooth text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 transition-smooth text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

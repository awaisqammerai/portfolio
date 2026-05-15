import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
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

  const blogPosts = [
    {
      title: 'Getting Started with TensorFlow 2.0',
      excerpt: 'A comprehensive guide to building neural networks with TensorFlow 2.0, covering the basics to advanced techniques.',
      date: 'May 10, 2024',
      category: 'Tutorial',
      readTime: '8 min read',
    },
    {
      title: 'Machine Learning Best Practices',
      excerpt: 'Essential best practices for building production-ready ML models, from data preprocessing to model deployment.',
      date: 'May 5, 2024',
      category: 'Best Practices',
      readTime: '12 min read',
    },
    {
      title: 'Deep Learning for NLP: A Practical Guide',
      excerpt: 'Explore deep learning techniques for natural language processing, including transformers and attention mechanisms.',
      date: 'April 28, 2024',
      category: 'Deep Learning',
      readTime: '15 min read',
    },
  ];

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Insights and tutorials on AI, machine learning, and data science
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group glass-card-lg space-y-4 hover:glow-cyan transition-smooth flex flex-col"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/50">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-accent font-semibold flex items-center gap-1"
                  >
                    Read <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg glass-card text-foreground font-semibold transition-smooth hover:glow-cyan border border-border/50"
            >
              View All Articles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

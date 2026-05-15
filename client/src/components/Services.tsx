import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Zap, Brain, TrendingUp, Layers, PieChart } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Deep dive into your data to uncover insights, patterns, and opportunities for business growth.',
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows using intelligent AI systems and machine learning.',
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business problems and requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced statistical and ML techniques.',
    },
    {
      icon: Layers,
      title: 'AI Web Applications',
      description: 'Build intelligent web applications powered by AI and machine learning backends.',
    },
    {
      icon: PieChart,
      title: 'Dashboard Development',
      description: 'Create interactive dashboards for real-time data visualization and business intelligence.',
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive AI and data science solutions tailored to your needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group glass-card-lg space-y-4 hover:glow-cyan transition-smooth"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth"
                  >
                    <Icon size={28} className="text-accent" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="pt-4 text-accent font-semibold text-sm flex items-center gap-2"
                  >
                    Learn more →
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold transition-smooth hover:shadow-lg hover:glow-green"
            >
              Let's Discuss Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations Inc.',
      content: 'Awais delivered exceptional ML models that improved our prediction accuracy by 40%. Highly professional and detail-oriented.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Data Analytics Corp',
      content: 'Outstanding work on the AI automation project. The system reduced manual work by 70% and saved us significant costs.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartUp Ventures',
      content: 'Awais is a talented data scientist who understands business needs. Great communication and problem-solving skills.',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'Director of Analytics, Enterprise Solutions',
      content: 'Excellent technical expertise combined with business acumen. Delivered complex ML projects on time and within budget.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card-lg space-y-4 hover:glow-green transition-smooth"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed italic">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

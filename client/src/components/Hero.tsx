import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663617414279/CFAYmNx4BYUjBJH7Lc8Y4C/hero-gradient-bg-WJXYyartLb2iJJAn8xwWrQ.webp';
const PROFILE_IMG = '/manus-storage/profile-photo_c3954d1d.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/awais-qammer', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Awais-qammer', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/awaisqammer?igsh=MWcxaTczNDZmNzcwbg==', label: 'Instagram' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-background/40 z-0" />

      {/* Animated grid overlay */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity } as any}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663617414279/CFAYmNx4BYUjBJH7Lc8Y4C/ai-tech-pattern-V6uQeqwtusFRpaRjac2ehg.webp")',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-accent font-medium text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 } as any}
              >
                Welcome to my portfolio
              </motion.p>
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Turning Data Into{' '}
                <span className="gradient-text">Intelligent Solutions</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 max-w-lg leading-relaxed"
            >
              I'm Awais Qammer, a Data Scientist & AI Engineer passionate about building intelligent systems that solve real-world problems. Specializing in machine learning, deep learning, and data analytics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold flex items-center gap-2 transition-smooth hover:glow-green-lg hover:shadow-lg"
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg glass-card text-foreground font-semibold transition-smooth hover:glow-cyan-lg hover:shadow-lg"
              >
                Contact Me
              </motion.button>
            </motion.div>


          </div>

          {/* Right - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            {/* Animated background circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' } as any}
              className="absolute w-80 h-80 rounded-full border-2 border-accent/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' } as any}
              className="absolute w-96 h-96 rounded-full border-2 border-cyan-400/20"
            />

            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' } as any}
              className="relative z-10 w-72 h-72 rounded-full overflow-hidden glass-card p-1 animate-pulse-glow"
            >
              <img
                src={PROFILE_IMG}
                alt="Awais Qammer"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* Glowing accent */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity } as any}
              className="absolute w-80 h-80 rounded-full bg-accent/10 blur-3xl"
            />
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}

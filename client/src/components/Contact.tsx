import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'awaisqammer12@gmail.com',
      link: 'mailto:awaisqammer12@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 3367260435',
      link: 'tel:+923367260435',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      link: '#',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

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
              Let's Build <span className="gradient-text">Intelligent Solutions</span> Together
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help you achieve your goals
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card-lg space-y-3 hover:glow-green transition-smooth text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto"
                  >
                    <Icon size={24} className="text-accent" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto glass-card-lg space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold flex items-center justify-center gap-2 transition-smooth hover:shadow-lg hover:glow-green"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

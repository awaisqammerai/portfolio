import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/awais-qammer', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Awais-qammer', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/awaisqammer?igsh=MWcxaTczNDZmNzcwbg==', label: 'Instagram' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container py-12 space-y-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display text-2xl gradient-text cursor-pointer"
            >
              AQ
            </motion.div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Data Scientist & AI Engineer crafting intelligent solutions for real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-foreground/60 hover:text-accent transition-smooth text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg glass-card text-accent hover:glow-green transition-smooth"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>© {currentYear} Awais Qammer — Data Scientist & AI Engineer</span>
            <Heart size={14} className="text-accent fill-accent" />
          </div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-2 rounded-lg glass-card text-accent hover:glow-green transition-smooth"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";
import { motion, type Variants } from "framer-motion";

export default function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const itemUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } }
  };
  return (
    <section className="section container-px mx-auto text-center glow min-h-[80vh] flex flex-col justify-center">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}>
        <motion.h1 variants={itemUp} className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
          Launch Your Career In <span className="text-primary">Digital World</span> 
          <br className="hidden md:block" /> In Melattur , Malappuram
        </motion.h1>
        <motion.h6 variants={itemUp} className="mt-6 text-xl md:text-2xl font-medium text-foreground/90 max-w-4xl mx-auto leading-relaxed">
          Learn hands-on with agency-style projects, mentorship, and 100% placement support.
        </motion.h6>
        <motion.div variants={itemUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="#courses" className="rounded-full bg-primary text-background px-6 py-3 font-medium hover:shadow-xl transition-all duration-300">
            Get Started
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="/contact" className="rounded-full border border-white/15 px-6 py-3 font-medium hover:bg-white/10 transition-all duration-300">
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}




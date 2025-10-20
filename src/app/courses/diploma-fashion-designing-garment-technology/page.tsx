"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaClock, FaLayerGroup, FaBriefcase } from "react-icons/fa";

const container: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } } };

export default function FashionCoursePage() {
  const modules = [
    "Fashion Illustration & Drawing",
    "Textile Knowledge",
    "Pattern Making",
    "Garment Construction",
    "Fashion Business & Marketing",
    "Computer-Aided Design (CAD)",
  ];

  const roles = [
    "Fashion Designer",
    "Garment Technologist",
    "Fashion Stylist",
    "Boutique Owner",
    "Fashion Consultant",
    "Pattern Maker",
  ];

  return (
    <section className="container-px mx-auto">
      {/* Hero */}
      <div className="w-screen ml-[calc(50%-50vw)]">
        <div className="relative text-white text-center min-h-[360px] md:min-h-[480px] flex items-center justify-center flex-col px-4 overflow-hidden">
          <Image
            src="/assets/course/fas.jpg"
            alt="Fashion design sketches and garments"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/60" />
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="relative z-10 max-w-5xl mx-auto px-4">
            <motion.div variants={itemUp} className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-yellow-400 text-black text-sm font-bold md:text-sm shadow">
                Design + Technology
              </span>
            </motion.div>
            <motion.h1 variants={itemUp} className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Diploma in Fashion Designing & Garment Technology
            </motion.h1>
            <motion.div variants={itemUp} className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-white/90">
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white shadow-md ring-1 ring-white/20 text-sm md:text-base">
                <FaClock className="text-base md:text-lg" /> 4-6 Months
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md ring-1 ring-white/20 text-sm md:text-base">
                <FaLayerGroup className="text-base md:text-lg" /> 6 Modules
              </span>
            </motion.div>
            <motion.a variants={itemUp} href="#apply" className="inline-block mt-8 rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Overview */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="mt-16 md:mt-24 px-5 md:px-20 text-center">
        <motion.h2 variants={itemUp} className="text-2xl md:text-3xl font-bold text-center">Course Overview</motion.h2>
        <motion.p variants={itemUp} className="mt-3 text-foreground/90 max-w-4xl mx-auto text-lg leading-relaxed text-center">
          From fashion illustration to garment construction, launch your fashion career with comprehensive training in design and technology. Learn from industry experts and work on real projects to build a portfolio that showcases your unique style and technical skills.
        </motion.p>
      </motion.div>

          {/* Available Batches */}
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-18 md:mt-24 mb-20 md:mb-22 px-5 md:px-20 text-center">
              <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-bold">Available Batches</motion.h3>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {[ 
                  { title: "Morning Batch", time: "9:00 AM - 12:00 PM" },
                  { title: "Afternoon Batch", time: "1:00 PM - 4:00 PM" },
                  { title: "Weekend Batch", time: "Saturday & Sunday" },
                ].map(b => (
                  <motion.div key={b.title} variants={itemUp} className="rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white shadow-sm hover:shadow-md p-6">
                    <div className="font-semibold text-lg">{b.title}</div>
                    <div className="mt-2 text-white/90">{b.time}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
      

      {/* Modules */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-18 md:mt-24 mb-20 md:mb-22px-5 md:px-20">
        <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-bold text-center">Course Modules</motion.h3>
        <div className="mt-6 max-w-4xl mx-auto">
          {modules.map((m, i) => (
            <motion.details key={m} variants={itemUp} className="group px-4 md:px-6 py-4 bg-white text-slate-900 rounded-xl border border-black/5 shadow-sm mb-3 open:shadow-md open:border-primary/30">
              <summary className="list-none cursor-pointer flex items-center justify-between font-semibold text-lg">
                <span className="text-slate-900">{i + 1}. {m}</span>
                <span className="text-slate-500 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-slate-700">Brief about {m}. Practical assignments included.</div>
            </motion.details>
          ))}
        </div>
      </motion.div>

      {/* Career Opportunities (Gradient band) */}
      <div className="w-screen ml-[calc(50%-50vw)] mt-16 md:mt-24">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary/90 to-black">
          <div className="container-px mx-auto">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-bold text-white text-center">Career Opportunities</motion.h3>
              <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto px-5 md:px-0">
                {roles.map((title) => (
                  <motion.div key={title} variants={itemUp} className="flex items-start gap-4 bg-white text-slate-900 rounded-xl border border-black/5 shadow-sm p-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-content-center shrink-0">
                      <FaBriefcase />
                    </div>
                    <div className="font-semibold">{title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CTA (no background) */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-16 md:mt-24 mb-20 md:mb-20 px-5 md:px-20 text-center">
        <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-extrabold">Ready to begin your Fashion journey?</motion.h3>
        <motion.p variants={itemUp} className="mt-2 text-foreground/80">Enroll now and transform your creativity into a profession</motion.p>
        <motion.div variants={itemUp} className="mt-8 flex items-center justify-center gap-4">
          <a href="#apply" className="inline-flex items-center justify-center rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow hover:shadow-lg transition">Enroll Now</a>
          <a href="/contact" className="inline-flex items-center justify-center rounded-lg border border-primary/60 text-foreground px-6 py-3 font-semibold hover:bg-primary/5 transition">Contact Us</a>
        </motion.div>
      </motion.div>

      <div id="apply" className="h-12" />
    </section>
  );
}

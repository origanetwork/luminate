"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaClock, FaLayerGroup, FaStar, FaBriefcase } from "react-icons/fa";

const container: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } } };

export default function CoursePage() {
  const modules = [
    "Social Media Marketing",
    "Search Engine Optimization (SEO)",
    "Google Ads (PPC) Advertising",
    "YouTube Marketing",
    "WordPress Website Designing",
    "E-commerce Marketing",
    "Wati: WhatsApp Business API",
    "Google Business Profile",
    "Mobile Marketing",
    "Affiliate Marketing",
    "Email Marketing",
    "Google Analytics",
    "Google Search Console",
    "Google Tag Manager",
    "Google Sheets: Managing Your Files",
    "Technical SEO & Audit",
    "Content Strategy",
    "Branding Basics",
  ];

  const tools = [
    "Google Ads",
    "Google Analytics",
    "Google Search Console",
    "WordPress",
    "Mailchimp",
    "Canva",
    "SEMrush",
    "Facebook Ads Manager",
    "YouTube Studio",
  ];

  return (
    <section className="container-px mx-auto">
      {/* Hero */}
      <div className="w-screen ml-[calc(50%-50vw)]">
        <div className="relative text-white text-center min-h-[420px] md:min-h-[560px] flex items-center justify-center flex-col px-4 overflow-hidden">
          <Image
            src="/assets/course/d&a.jpg"
            alt="Digital marketing analytics dashboard background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/60" />
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="relative z-10 max-w-5xl mx-auto px-4">
            <motion.div variants={itemUp} className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/15 backdrop-blur text-white text-xs md:text-sm border border-white/25 shadow-sm">
                AI‑Integrated
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-yellow-400 text-black text-xs md:text-sm shadow">
                Most Popular
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-green-500 text-white text-xs md:text-sm shadow">
                100% Job Guarantee
              </span>
            </motion.div>
            <motion.h1 variants={itemUp} className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Diploma in Digital Marketing & Advertising
            </motion.h1>
            <motion.div variants={itemUp} className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-white/90">
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-sm md:text-base">
                <FaClock className="text-base md:text-lg" /> 6 Months
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-sm md:text-base">
                <FaLayerGroup className="text-base md:text-lg" /> 18 Modules
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-sm md:text-base">
                <FaStar className="text-base md:text-lg" /> Placement Support
              </span>
            </motion.div>
            <motion.a variants={itemUp} href="#apply" className="inline-block mt-8 rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </div>

       

      {/* Overview */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="mt-20 md:mt-28 px-5 md:px-20 text-center">
        <motion.h2 variants={itemUp} className="text-2xl md:text-3xl font-bold text-center ">Course Overview</motion.h2>
        <motion.p variants={itemUp} className="mt-8 text-foreground/90 text-lg max-w-4xl mx-auto leading-relaxed text-center">
          Master the complete digital marketing ecosystem from social media to SEO, paid advertising to website creation. 
          This AI‑integrated course covers 18 comprehensive modules designed to make you job‑ready from day one. Learn from 
          industry experts and work on real projects to build a portfolio that stands out.
        </motion.p>
      </motion.div>

       {/* Available Batches */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-20 md:mt-28 px-5 md:px-20 text-center">
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

      
      {/* CTA Band
      <div className="w-screen ml-[calc(50%-50vw)] mt-16 md:mt-24">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary/90 to-black text-center text-white">
          <div className="container-px mx-auto">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-extrabold">Ready to Start Your Digital Marketing Journey?</motion.h3>
              <motion.p variants={itemUp} className="mt-2 text-white/90">Enroll now and transform your career with 100% placement support</motion.p>
              <motion.div variants={itemUp} className="mt-8 flex items-center justify-center gap-4">
                <a href="#apply" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-6 py-3 font-semibold shadow hover:shadow-lg transition">
                  Enroll Now
                </a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-lg border border-white/70 text-white px-6 py-3 font-semibold hover:bg-white/10 transition">
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div> */}

      {/* Modules (Accordion using details/summary) */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-20 md:mt-28 px-5 md:px-20">
        <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-bold text-center ">Course Modules</motion.h3>
        <div className="mt-10 max-w-4xl mx-auto">
          {modules.map((m, i) => (
            <motion.details key={m} variants={itemUp} className="group px-4 md:px-6 py-4 bg-white text-slate-900 rounded-xl border border-black/5 shadow-sm mb-3 open:shadow-md open:border-primary/30">
              <summary className="list-none cursor-pointer flex items-center justify-between font-semibold text-lg">
                <span className="text-slate-900">{i + 1}. {m}</span>
                <span className="text-slate-500 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-slate-700">
                Brief about {m}. Hands‑on tasks and project work included.
              </div>
            </motion.details>
          ))}
        </div>
      </motion.div>


      {/* Career Opportunities (Gradient band) */}
      <div className="w-screen ml-[calc(50%-50vw)] mt-20 md:mt-28">
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-black">
          <div className="container-px mx-auto">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-bold text-black text-center">Career Opportunities</motion.h3>
              <motion.p variants={itemUp} className="mt-2 text-white/90 text-center max-w-3xl mx-auto">Roles you can pursue after completing this program</motion.p>
              <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto px-5 md:px-0">
                {[
                  { title: "Digital Marketing Executive", sub: "₹15,000 - ₹25,000/month" },
                  { title: "SEO Specialist", sub: "₹18,000 - ₹30,000/month" },
                  { title: "Social Media Manager", sub: "₹20,000 - ₹35,000/month" },
                  { title: "PPC Expert", sub: "₹20,000 - ₹40,000/month" },
                  { title: "Content Marketing Manager", sub: "₹25,000 - ₹45,000/month" },
                  { title: "Digital Marketing Consultant", sub: "Project‑based" },
                ].map((r) => (
                  <motion.div key={r.title} variants={itemUp} className="flex items-start gap-4 bg-white text-slate-900 rounded-xl border border-black/5 shadow-sm p-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-content-center shrink-0">
                      <FaBriefcase />
                    </div>
                    <div>
                      <div className="font-semibold">{r.title}</div>
                      <div className="text-primary mt-1 text-sm font-medium">{r.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    

      {/* Tools */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-20 md:mt-28 px-5 md:px-20 text-center">
        <motion.h3 variants={itemUp} className="text-2xl md:text-3xl font-bold">Tools & Software Covered</motion.h3>
        <motion.p variants={itemUp} className="mt-2 text-foreground/80">Master industry‑standard tools used by professionals worldwide</motion.p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tools.map(t => (
            <motion.div key={t} variants={itemUp} className="rounded-xl bg-white text-slate-900 border border-black/5 shadow-sm hover:shadow-md p-4 md:p-5 transition">
              {t}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div id="apply" className="h-12" />
    </section>
  );
}

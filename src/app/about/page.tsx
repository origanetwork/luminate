"use client";
import { motion, type Variants } from "framer-motion";
import { FaBullseye, FaEye, FaUserTie, FaAward, FaBolt, FaHandsHelping, FaChalkboardTeacher, FaRegBuilding, FaLightbulb, FaRegCheckCircle } from "react-icons/fa";

const container: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const item: Variants = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } } };

export default function AboutPage() {
  return (
    <section className="container-px mx-auto pt-0">
      {/* Hero gradient banner (full-width) */}     
      <div className="w-screen ml-[calc(50%-50vw)] mt-0">
        <div
          className="text-white text-center bg-no-repeat bg-cover bg-center min-h-[260px] md:min-h-[360px] flex items-center justify-center flex-col px-4"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0.50) 10%, rgba(0,0,0,0.60) 10%), url('/assets/about/aboutbanner.png')",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] tracking-tight ">About <span className="text-primary">Luminate Education </span> Campus</h1>
          <p className="mt-3 text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]">Empowering Future Digital Professionals</p>
        </div>
      </div>

      {/* Vision & Mission */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-[70px] grid md:grid-cols-2 gap-6 px-5 md:px-20">
        <motion.article variants={item} className="card mx-2 md:mx-4 px-8 md:px-10 py-8 md:py-10 bg-white text-foreground rounded-xl shadow-md min-h-[260px] md:min-h-[320px] flex flex-col justify-start items-start">
          <div className="text-primary text-3xl mb-2"><FaEye /></div>
          <h3 className="text-xl md:text-2xl mt-4 font-bold text-primary">Our Vision</h3>
          <p className="mt-8 text-foreground/90 text-lg leading-relaxed">
            To become Kerala's leading digital skills academy, transforming thousands of students into
            industry-ready professionals while maintaining 100% employment for graduates.
          </p>
        </motion.article>
        <motion.article variants={item} className="card mx-2 md:mx-4 px-8 md:px-10 py-8 md:py-10 bg-white text-foreground rounded-xl shadow-md min-h-[260px] md:min-h-[320px] flex flex-col justify-start items-start">
          <div className="text-primary text-3xl mb-2"><FaBullseye /></div>
          <h3 className="text-xl md:text-2xl mt-4 font-bold text-primary">Our Mission</h3>
          <p className="mt-8 text-foreground/90 text-lg leading-relaxed">
            To provide practical, AI-integrated education that ensures job readiness from day one; making
            digital skills accessible to all and creating a pipeline of talented professionals for the digital economy.

          </p>
        </motion.article>
      </motion.div>

      {/* Values */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-16 text-center px-5 md:px-20">
        <motion.h2 variants={item} className="text-2xl md:text-3xl font-bold">Our <span className="text-primary"> Values</span></motion.h2>
        <motion.p variants={item} className="mt-3 text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">The principles that guide everything we do</motion.p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={item} className="card p-6 lg:p-8 bg-white text-slate-900 rounded-xl shadow items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
              <FaAward className="text-4xl" />
            </div>
            <h3 className="font-bold text-primary">Excellence in Education</h3>
            <p className="mt-2 text-foreground/90 text-lg">We maintain the highest standards in curriculum design and delivery.</p>
          </motion.div>
          <motion.div variants={item} className="card p-6 lg:p-8 bg-white text-slate-900 rounded-xl shadow items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
              <FaHandsHelping className="text-4xl" />
            </div>
            <h3 className="font-bold text-primary">Student-First Approach</h3>
            <p className="mt-2 text-foreground/90 text-lg">Every decision we make prioritizes student success and career growth.</p>
          </motion.div>
          <motion.div variants={item} className="card p-6 lg:p-8 bg-white text-slate-900 rounded-xl shadow items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
              <FaBolt className="text-4xl" />
            </div>
            <h3 className="font-bold text-primary">Industry Relevance</h3>
            <p className="mt-2 text-foreground/90 text-lg">Our courses are constantly updated to match industry demands.</p>
          </motion.div>
          <motion.div variants={item} className="card p-6 lg:p-8 bg-white text-slate-900 rounded-xl shadow items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
              <FaLightbulb className="text-4xl" />
            </div>
            <h3 className="font-bold text-primary">Integrity & Transparency</h3>
            <p className="mt-2 text-foreground/90 text-lg">We believe in honest communication and ethical practices.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Differentiators */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-16 mb-16 md:mb-24 text-center px-5 md:px-20 group/section">
        <motion.h2 variants={item} className="text-2xl md:text-3xl font-bold [.blue-mode_&]:text-background">What <span className="text-primary"> Makes Us </span>Different</motion.h2>
        <motion.p variants={item} className="mt-3 text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto [.blue-mode_&]:text-background/80">Discover the Luminate advantage</motion.p>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {[
            "AI-Integrated Curriculum",
            "100% Placement Guarantee",
            "Live Project Training",
            "Government-Recognized Certificates",
            "Expert Industry Trainers",
            "Modern Infrastructure",
            "Small Batch Sizes",
            "Hands-On Learning",
            "Post-Placement Support",
            "Flexible Batch Timings",
          ].map((text) => (
            <motion.div
              key={text}
              variants={item}
              className="group bg-white text-slate-900 rounded-xl border border-black/5 shadow-sm hover:shadow-md p-4 md:p-5 text-left flex items-center gap-4 transition"
            >
              <div className="w-10 h-10 rounded-full grid place-content-center border border-primary/30 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition [.blue-mode_&]:border-white/30 [.blue-mode_&]:bg-white/10 [.blue-mode_&]:text-white [.blue-mode_&]:group-hover:bg-white [.blue-mode_&]:group-hover:text-primary">
                <FaRegCheckCircle className="text-lg" />
              </div>
              <span className="font-semibold text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.05)]">{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

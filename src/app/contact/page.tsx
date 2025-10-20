 "use client";
 import { motion, type Variants } from "framer-motion";
 import { FaEnvelope, FaPhone, FaLocationArrow, FaArrowRight } from "react-icons/fa";

export default function ContactPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  };
  return (
    <section className="section container-px mx-auto">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="text-center max-w-3xl mx-auto">
        <motion.h1 variants={item} className="text-3xl  md:text-4xl font-bold mb-2">Contact</motion.h1>
        {/* <p className="mt-3 text-lg md:text-xl leading-relaxed text-foreground/90">
          We’d love to hear from you. Reach us via email or phone, or send a message using the form.
        </p> */}
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid lg:grid-cols-2 gap-6">
        {/* Left: contact info */}
        <motion.div variants={item} className="surface p-6 md:p-8 shadow-lg rounded-2xl">
          <ul className="space-y-4">
            <motion.li variants={item} className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <div>
                  <div className="text-sm opacity-80">Email</div>
                  <div className="font-medium">info@luminateeducation.com</div>
                </div>
              </div>
              <a href="mailto:info@luminateeducation.com" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-background">
                <FaArrowRight />
              </a>
            </motion.li>
            <motion.li variants={item} className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <div>
                  <div className="text-sm opacity-80">Mobile</div>
                  <div className="font-medium">+91 7012 598 502</div>
                </div>
              </div>
              <a href="tel:+917034643551" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-background">
                <FaArrowRight />
              </a>
            </motion.li>
             <motion.li variants={item} className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <div>
                  <div className="text-sm opacity-80">Mobile</div>
                  <div className="font-medium">+91 7306 358 534</div>
                </div>
              </div>
              <a href="tel:+917034643551" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-background">
                <FaArrowRight />
              </a>
            </motion.li>
            <motion.li variants={item} className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-4 py-3">
              <div className="flex items-start gap-3">
                <FaLocationArrow className="text-primary mt-1" />
                <div>
                  <div className="text-sm opacity-80">Location</div>
                  <div className="font-medium leading-relaxed">
                    2nd Floor, Ali Tower Building,<br />
                    Near Bus Stand, Melattur
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=2nd+Floor,+Ali+Tower+Building,+Near+Bus+Stand,+Melattur"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-background"
              >
                <FaArrowRight />
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Right: contact form */}
        <motion.div variants={item} className="surface p-6 md:p-8 shadow-lg rounded-2xl">
          <form className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" placeholder="Full Name" className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" placeholder="Phone Number" className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Message" rows={4} className="w-full rounded-lg bg-background/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <button type="submit" className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 text-background px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">
              Send Your Message
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Map embed */}
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10">
        <motion.div variants={item} className="surface rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Luminate Location Map"
            src="https://www.google.com/maps?q=2nd+Floor,+Ali+Tower+Building,+Near+Bus+Stand,+Melattur&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";
import { LazyMotion, domAnimation, m, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { PiMegaphoneDuotone } from "react-icons/pi";
import { TbCurrencyDollar, TbWorldWww } from "react-icons/tb";
import { MdAccountCircle, MdOutlineDesignServices } from "react-icons/md";
import { type IconType } from "react-icons";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  description: string;
  href: string;
  Icon: IconType;
};

const courses: Course[] = [
  {
    id: "course-digital-advertising",
    title: "Diploma in Digital Advertising",
    description:
      "Master paid ads across Google, Meta and more. Learn campaign setup, optimization and analytics.",
    href: "/courses/diploma-digital-marketing-advertising",
    Icon: PiMegaphoneDuotone,
  },
 

   {
    id: "course-web-dev",
    title: "Website Development",
    description:
      "Build modern, responsive websites with real-world stacks and deployment best practices.",
    href: "/courses/website-dev",
    Icon: TbWorldWww,
  },
  {
    id: "course-Buisness-Acc",
    title: "Diploma in Buisness Accounting",
    description:
      "Design fundamentals of buisness accounting , tax management and gst management",
    href: "/courses/accounting",
    Icon: MdAccountCircle,
  },
  
   {
    id: "course-graphics-video",
    title: "Diploma in Graphic Design & Video Editing",
    description:
      "Design fundamentals to motion graphics and editing workflows for social and brand content.",
    href: "/courses/diploma-graphic-design-video-editing",
    Icon: MdOutlineDesignServices,
  }, 
  {
    id: "course-fashion-design",
    title: "Diploma in Fashion Designing & Garment Technology",
    description:
     "Design fundamentals to motion graphics and editing workflows for social and brand content.",
    href: "/courses/diploma-fashion-designing-garment-technology",
   Icon: MdOutlineDesignServices,
  },
  {
    id: "course-digital-marketing",
    title: "Diploma in Digital Marketing",
    description:
      "SEO, SEM, SMM, content, automation and analytics with hands‑on live style projects, social media marketing and more.",
    href: "/courses/diploma-digital-marketing-advertising",
    Icon: TbCurrencyDollar,
  },
   
  
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.3 } },
};

export default function CoursesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const enableMotion = mounted && !shouldReduceMotion;
  return (
    <section id="courses" className="section container-px mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">Course Details</h2>
        <p className="mt-4 text-foreground/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Explore programs designed for different skill levels and career goals. Learn with practical,
          project-based training and mentorship.
        </p>
      </div>

      <LazyMotion features={domAnimation} strict>
        <m.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ id, title, description, href, Icon }, idx) => (
            <m.article
              key={id}
              id={id}
              className="card p-8 lg:p-10 surface shadow-lg hover:shadow-xl transition-all duration-300 group hover-elevate"
              initial={enableMotion ? { opacity: 0, y: 16 } : undefined}
              animate={enableMotion ? { opacity: 1, y: 0 } : undefined}
              transition={enableMotion ? { type: "tween", duration: 0.3, delay: idx * 0.06 } : undefined}
              whileHover={enableMotion ? { y: -4 } : undefined}
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 text-primary grid place-content-center group-hover:scale-105 transition-transform">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-lg md:text-xl leading-relaxed text-foreground/90">{description}</p>
              <Link
                href={href}
                className="mt-6 inline-block rounded-full bg-gradient-to-r from-primary to-primary/80 text-background px-5 py-2 font-medium shadow hover:shadow-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </m.article>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}

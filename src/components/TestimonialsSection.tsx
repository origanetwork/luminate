"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  message: string;
  avatarSrc?: string; // path under public, e.g. /assets/testimonials/name.jpg
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mohammed Shafeeque C",
    message:
      "Practical learning at its best. The hands-on training and live project exposure boosted my confidence a lot. The campus vibe is positive and supportive. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum.",
    avatarSrc: "/assets/testimontal/OIP.jpg",
  },
  {
    id: "t2",
    name: "Najiya",
    message:
      "The program gave me the exact skills I needed to stand out in digital marketing and secure a great position. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum.",
    avatarSrc: "/assets/testimontal/T1.jpg",
  },
  {
    id: "t3",
    name: "Rahul K",
    message:
      "Structured curriculum, caring mentors, and real-world assignments. I highly recommend Luminate to anyone serious about their career. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum.",
    avatarSrc: "/assets/testimontal/T2.jpg",
  },
  {
    id: "t4",
    name: "Ayesha M",
    message:
      "From zero to confident! The projects and guidance made complex topics simple and practical. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum.",
    avatarSrc: "/assets/testimontal/T3.jpg",
  },
  {
    id: "t5",
    name: "Suhail P",
    message:
      "Excellent mentor support and peer community. Weekly reviews kept me accountable and improving every module. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum.",
    avatarSrc: "/assets/testimontal/T4.webp",
  },
  {
    id: "t6",
    name: "Nimisha V",
    message:
      "I landed interviews within weeks of finishing. Portfolio-focused tasks made a big difference. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum.",
    avatarSrc: "/assets/testimontal/OIP.jpg",
  },
];



export default function TestimonialsSection() {
  const slides = useMemo(() => TESTIMONIALS, []);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLQuoteElement | null)[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    const el = itemRefs.current[index];
    const container = containerRef.current;
    if (!el || !container) return;

    const targetLeft = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
    container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }, [index]);

  return (
    <section id="testimonials" className="px-0 pt-6 md:pt-8 pb-12 md:pb-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-primary font-semibold tracking-wide uppercase text-sm md:text-base">Testimonial</h2>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          What Our <span className="text-primary">Students</span> Say
        </h2>
      </div>

      <div className="mt-6 md:mt-8 relative">
        <div ref={containerRef} className="overflow-x-auto no-scrollbar scroll-snap-x mandatory px-4 md:px-8">
          <div className="flex items-stretch gap-4 md:gap-6">
            {slides.map((t, i) => (
              <blockquote
                key={t.id}
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
                className="scroll-snap-align-center min-w-[80%] sm:min-w-[70%] md:min-w-[60%] lg:min-w-[40%]"
              >
                <div
                  className={`w-full p-6 md:p-10 surface shadow-lg transition-all duration-300 ${
                    i === index ? "scale-100 opacity-100" : "scale-95 opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    {t.avatarSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.avatarSrc} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/15 text-primary grid place-content-center font-semibold">
                        {t.name.slice(0,1)}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      {t.role && <div className="text-sm text-foreground/70">{t.role}</div>}
                    </div>
                  </div>
                  <div className="mt-4 text-lg md:text-xl leading-relaxed text-foreground/90">
                    {t.message}
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-2 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



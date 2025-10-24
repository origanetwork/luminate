"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";

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
    name: "Jesma",
    message:
      "Practical learning at its best. The hands-on training and live project exposure boosted my confidence a lot. The campus vibe is positive and supportive. I learned to work with real clients and gained skills that I now use in my daily work.",
    avatarSrc: "/assets/testimontal/t1.jpeg",
  },
  // {
  //   id: "t2",
  //   name: "Fathima",
  //   message:
  //     "The program gave me the exact skills I needed to stand out in digital marketing and secure a great position. The trainers were always ready to guide and clarify doubts. I now feel much more confident managing campaigns and analyzing results independently.",
  //   avatarSrc: "/assets/testimontal/t2.jpeg",
  // },
  {
    id: "t3",
    name: "Ramees",
    message:
      "Structured curriculum, caring mentors, and real-world assignments made learning enjoyable. Every module built perfectly on the previous one. I highly recommend Luminate to anyone serious about career growth and wanting to learn by doing.",
    avatarSrc: "/assets/testimontal/t3.jpeg",
  },
  {
    id: "t4",
    name: "Mubarak",
    message:
      "From zero to confident! The projects and guidance made complex topics simple and practical. I loved how the mentors encouraged creativity and teamwork. This course truly transformed how I approach problem-solving and professional growth.",
    avatarSrc: "/assets/testimontal/t4.jpeg",
  },
  {
    id: "t5",
    name: "Basil Zaman",
    message:
      "Excellent mentor support and a great peer community. Weekly reviews kept me accountable and helped me improve every module. The collaborative learning environment pushed me to challenge myself and stay consistent throughout the course.",
    avatarSrc: "/assets/testimontal/t5.jpeg",
  },
  {
    id: "t6",
    name: "Nasim",
    message:
      "I landed interviews within weeks of finishing. The portfolio-focused tasks helped me showcase real skills to employers. The program didn’t just teach me concepts — it taught me how to apply them effectively in real-world scenarios.",
    avatarSrc: "/assets/testimontal/t6.jpeg",
  },
  {
    id: "t7",
    name: "Rana",
    message:
      "A well-structured program that focuses on real-world outcomes. The personalized feedback and projects made all the difference. I especially loved how the mentors encouraged us to think strategically rather than just follow instructions.",
    avatarSrc: "/assets/testimontal/t7.jpeg",
  },
  {
    id: "t8",
    name: "Shamil",
    message:
      "I really appreciated the practical approach. Every session had something valuable I could immediately apply in my work. The mix of theory and hands-on practice gave me clarity and confidence in handling client projects effectively.",
    avatarSrc: "/assets/testimontal/t8.jpeg",
  },
  {
    id: "t9",
    name: "Ashik",
    message:
      "Supportive mentors and engaging sessions throughout. The projects helped me gain the confidence to start my professional journey. The program made me realize my potential and taught me how to turn ideas into actionable results.",
    avatarSrc: "/assets/testimontal/t9.jpeg",
  },
  {
    id: "t10",
    name: "Ajnas",
    message:
      "Supportive mentors and well-structured sessions made learning enjoyable. The practical projects helped me build confidence and understand how to apply concepts in real scenarios. I truly discovered my strengths during this program.",
    avatarSrc: "/assets/testimontal/Ajnas.jpeg",
  },
  {
    id: "t11",
    name: "Fidha",
    message:
      "The mentors were approachable and always available to guide us. Working on real projects gave me hands-on experience and boosted my confidence to take on professional challenges. I’m proud of how far I’ve come through this journey.",
    avatarSrc: "/assets/testimontal/Fidha.jpeg",
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
                  <div className="flex items-start justify-between gap-3 md:gap-4">
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
                    <div className="flex items-center gap-1 text-yellow-400 shrink-0">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <AiFillStar key={idx} className="w-4 h-4 md:w-5 md:h-5" />
                      ))}
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
              suppressHydrationWarning
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



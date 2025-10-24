"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I choose the best digital marketing course in Kerala?",
    a: "Look for practical training, expert instructors, real projects, certifications, and strong reviews.",
  },
  {
    q: "What certifications should an institute provide?",
    a: "Google Ads, Meta Blueprint, HubSpot, Google Analytics, and more.",
  },
  {
    q: "Will I get practical experience during the course?",
    a: "Yes—work on live client-style projects with mentorship.",
  },
  {
    q: "What is the placement assistance provided by the institute?",
    a: "we provide 100% placement assistance to the students after the completion of the course."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section container-px mx-auto grid lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">Frequently <span className="text-primary">Asked Questions</span></h2>
        <div className="mt-6 space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="card p-6">
              <button suppressHydrationWarning className="w-full text-left flex items-center justify-between" onClick={() => setOpen(idx === open ? -1 : idx)}>
                <span className="text-lg font-medium">{item.q}</span>
                <span className="text-2xl text-primary">{open === idx ? "–" : "+"}</span>
              </button>
              {open === idx && <p className="mt-3 text-foreground/80">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
      <form id="contact" className="card p-6 space-y-4">
        <h3 className="text-xl font-semibold">Ask your question</h3>
        <input suppressHydrationWarning className="w-full rounded-md bg-background/40 border border-white/10 px-4 py-3" placeholder="Your name" />
        <input suppressHydrationWarning type="email" className="w-full rounded-md bg-background/40 border border-white/10 px-4 py-3" placeholder="Your email" />
        <textarea suppressHydrationWarning className="w-full rounded-md bg-background/40 border border-white/10 px-4 py-3" rows={4} placeholder="Your question" />
        <button suppressHydrationWarning className="rounded-full bg-primary text-background px-6 py-3 font-medium">Send your message</button>
      </form>
    </section>
  );
}




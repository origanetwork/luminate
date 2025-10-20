import { FiArrowUpRight } from "react-icons/fi";

const features = [
  { title: "why Luminate ?", body: "Master digital marketing with real projects, mentorship, and growth.", href: "#why" },
  { title: "courses", body: "From fundamentals to advanced strategies with placement support.", href: "#courses" },
  { title: "campuslife", body: "A collaborative, modern campus fostering creativity and skills.", href: "#campus" },
];

export default function FeatureCards() {
  return (
    <section className="section mx-auto px-6 md:px-12 lg:px-16">
      <div className="grid md:grid-cols-3 gap-6 mx-4 md:mx-8">
        {features.map((f, index) => (
          <article key={f.title} className={`card p-8 mx-2 md:mx-0 transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px] hover:scale-105 animate-fade-in-up opacity-0`} style={{animationDelay: `${index * 200}ms`, animationFillMode: 'forwards'}}>
            <h3 className="text-2xl font-semibold mb-3 capitalize">{f.title}</h3>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">{f.body}</p>
            <a href={f.href} className="inline-flex items-center gap-2 group">
              <span className="sr-only">Learn More</span>
              <div className="w-14 h-14 rounded-full bg-primary text-background grid place-content-center group-hover:bg-primary/80 group-hover:text-background transition">
                <FiArrowUpRight />
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

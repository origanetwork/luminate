import Image from "next/image";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="section bg-background/50">
      <div className="mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mx-4 md:mx-8">
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About <span className="text-primary">Luminate Education</span> 
              <br /> Campus
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-foreground/90">
              <p>
                Luminate Education Campus is Kerala&apos;s premier digital education institute located in Melattur, Malappuram. 
                We specialize in AI-integrated diploma courses that combine practical learning with guaranteed job placement.
              </p>
              <p>
                Our mission is simple: Transform students into industry-ready professionals. With 100+ successful placements, 
                expert trainers, and modern infrastructure, we&apos;re not just an institute—we&apos;re your launchpad to a successful digital career.
              </p>
              <p>
                Our courses are designed to give you the skills and knowledge to succeed in the digital marketing industry.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative animate-fade-in-right">
            <Image 
              src="/assets/about/about.jpeg" 
              alt="Luminate Education Campus - Students learning with modern technology" 
              width={500} 
              height={500} 
              className="w-full h-[500px] rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}






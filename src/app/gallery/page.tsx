import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Luminate",
  description: "Explore our Programs, Class moments, and Events in a beautifully categorized gallery.",
};

export default function GalleryPage() {
  return (
    <div className="font-sans">
      {/* Page Title */}
      <div className="py-12 pb-0 ">
        <div className="container-px mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-foreground">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-lg text-center text-foreground/90 max-w-2xl mx-auto mt-3 leading-relaxed">
            Explore our <span className="font-medium text-foreground">Programs</span>, <span className="font-medium text-foreground">Class Moments</span>, and <span className="font-medium text-foreground">Events</span>
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-blue-400 mx-auto mt-6 mb-2 rounded-full"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative z-10 bg-[var(--background)] transition-colors duration-300">
        <div className="absolute inset-0 bg-[var(--background)]" aria-hidden="true"></div>
        <div className="relative z-20">
          <div className="container-px mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="bg-[var(--card)] rounded-2xl overflow-hidden shadow-xl">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

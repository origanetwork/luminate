"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type GalleryCategory = "Program" | "Class" | "Event";

interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

const ALL: GalleryCategory | "All" = "All";

const BUTTONS: (GalleryCategory | "All")[] = ["All", "Program", "Class", "Event"];

export default function Gallery() {
  const [active, setActive] = useState<typeof ALL | GalleryCategory>(ALL);

  // Organized gallery items with institution-focused images
  const items = useMemo<GalleryItem[]>(
    () => [
      // Program (Showcasing course materials and certifications)
      { 
        src: "/assets/gallery/program/pr1.jpeg", 
        alt: "Accounting Program at Luminate", 
        category: "Program" 
      },
      { 
        src: "/assets/gallery/program/pr2.jpeg", 
        alt: "Graphic Design Program", 
        category: "Program" 
      },
      { 
        src: "/assets/gallery/program/pr3.jpg", 
        alt: "Google Ads Certification Program", 
        category: "Program" 
      },
      { 
        src: "/assets/about/aboutbanner.png", 
        alt: "NIELIT Certification Program", 
        category: "Program" 
      },

      // Class (Showcasing learning environment and student activities)
      { 
        src: "/assets/gallery/class/1.jpeg", 
        alt: "Interactive Class Session", 
        category: "Class" 
      },
      { 
        src: "/assets/gallery/class/c1.jpg", 
        alt: "Practical Training Session", 
        category: "Class"
      },
      { 
        src: "/assets/gallery/class/c2.webp", 
        alt: "Group Learning Activity", 
        category: "Class" 
      },
      { 
        src: "/assets/about/about.jpeg", 
        alt: "Campus Learning Environment", 
        category: "Class" 
      },

      // Event (Showcasing institution events and activities)
      { 
        src: "/assets/gallery/Event/dance.jpg", 
        alt: "Industry Workshop Event", 
        category: "Event" 
      },
      { 
        src: "/assets/gallery/Event/onam.jpeg", 
        alt: "Certification Ceremony", 
        category: "Event" 
      },
      { 
        src: "/assets/gallery/Event/xmas.jpeg", 
        alt: "Campus Cultural Event", 
        category: "Event" 
      },
      { 
        src: "/assets/gallery/class/p1.jpeg", 
        alt: "Industry Expert Session", 
        category: "Event" 
      },
    ],
    []
  );

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  return (
    <section className="container-px mx-auto py-12">
      <header className="mb-12 w-full">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {BUTTONS.map((label) => {
            const selected = active === label;
            return (
              <button
                key={label}
                aria-pressed={selected}
                onClick={() => setActive(label as GalleryCategory | typeof ALL)}
                className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                  ${selected
                    ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/30 border border-primary/20"
                    : "bg-white/90 text-foreground border border-gray-200 hover:border-primary/30 hover:bg-white hover:shadow-md dark:bg-gray-800/90 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"}
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {label}
                </span>
                {selected && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
              </button>
            );
          })}
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[10rem] sm:auto-rows-[12rem] lg:auto-rows-[14rem]">
        {filtered.map((item, idx) => (
          <figure
            key={item.src + idx}
            className={`relative overflow-hidden rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-sm group transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:border-gray-700/50 dark:hover:border-primary/70 ${
              // Make a pleasant mosaic by enlarging every 5th and 9th tile
              idx % 9 === 0
                ? "col-span-2 row-span-2"
                : idx % 5 === 0
                ? "row-span-2"
                : ""
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={idx < 6}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
              <div className="w-full">
                <span className="inline-block bg-primary/90 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-2 shadow-md">
                  {item.category}
                </span>
                <p className="text-white text-sm font-medium line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {item.alt}
                </p>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

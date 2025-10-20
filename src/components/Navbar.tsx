"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const courses = [
  { label: "Diploma in Digital Marketing & Advertising", href: "/courses/diploma-digital-marketing-advertising" },
  { label: "Diploma in Graphic Design & Video Editing", href: "/courses/diploma-graphic-design-video-editing" },
  { label: "Diploma in Fashion Design & Garment Technology", href: "/courses/diploma-fashion-designing-garment-technology" },
  { label: "Buisness Accounting", href: "/courses/accounting" },
  { label: "Website Development", href: "/#course-web-dev" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [theme, setTheme] = useState<string>("blue");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const preferred = stored === "light" ? "light" : "blue";
    setTheme(preferred);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", preferred);
    }
  }, []);

  const handleThemeChange = (next: string) => {
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-background/95 border-b border-white/10 shadow-lg">
      <div className="hidden md:block bg-primary text-background py-2 px-4">
        <div className="container-px mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 7012 598 502</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@luminateeducation.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span className="text-cyan-200 font-medium">
              100% Placement Support | AI-Integrated Courses
            </span>
          </div>
        </div>
      </div>
      <nav className="container-px mx-auto flex items-center justify-between h-20 relative">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo/logo.png"
            alt="Luminate logo"
            width={48}
            height={48}
            priority
            className="rounded-sm bg-white p-1 shadow-sm dark:shadow-md dark:shadow-white/10 border border-white/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 w-10 h-10 md:w-12 md:h-12"
          />
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center w-12 h-12 -mr-2 p-3 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="i-heroicons-bars-3 text-3xl">
            {open ? '✕' : '≡'}
          </span>
        </button>
        <ul className="hidden md:flex items-center gap-6 text-base font-medium text-foreground/90 md:absolute md:left-1/2 md:-translate-x-1/2 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full">
          <li><Link href="/" className="hover:text-primary transition-colors duration-200 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
          </Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors duration-200 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
          </Link></li>
          {/* <li><Link href="/#why-us" className="hover:text-primary transition-colors duration-200 relative group font-medium">
            Placements
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
          </Link></li> */}
          <li className="relative">
            <button
              className="hover:text-primary inline-flex items-center gap-1 transition-colors duration-200 relative group font-medium"
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
            >
              Courses
              <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▾</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
            </button>
            {coursesOpen && (
              <div className="absolute left-0 mt-3 w-[320px] lg:w-[420px] p-2 rounded-xl bg-background/95 border border-white/10 shadow-xl">
                <ul className="max-h-[70vh] overflow-auto divide-y divide-white/5">
                  {courses.map((c) => (
                    <li key={c.label}>
                      <Link
                        href={c.href}
                        className="block px-4 py-3 hover:bg-white/5 text-foreground rounded-md"
                        onClick={() => setCoursesOpen(false)}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li><Link href="/gallery" className="hover:text-primary transition-colors duration-200 relative group font-medium">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
          </Link></li>
          <li><Link href="/blog" className="hover:text-primary transition-colors duration-200 relative group font-medium">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
          </Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors duration-200 relative group font-medium">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
          </Link></li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => handleThemeChange(theme === "light" ? "blue" : "light")}
            className="inline-flex items-center gap-2 rounded-xl bg-background/80 border border-primary/20 text-foreground px-4 py-2.5 text-sm font-medium hover:bg-background/90 hover:border-primary/40 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <span className="text-base">{theme === "light" ? "🌙" : "☀️"}</span>
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>
          <Link href="#cta" className="rounded-full bg-gradient-to-r from-primary to-primary/80 text-background px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Enquire Now
          </Link>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-sm">
          <ul className="container-px py-4 space-y-4 text-foreground/90">
            <li>
              <Link 
                href="/" 
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <button 
                className="w-full text-left py-3 text-lg font-medium hover:text-primary transition-colors flex justify-between items-center" 
                onClick={() => setCoursesOpen((v) => !v)}
              >
                <span>Courses</span>
                <span className="transform transition-transform duration-200">{coursesOpen ? '▲' : '▼'}</span>
              </button>
              {coursesOpen && (
                <ul className="mt-2 ml-4 space-y-3 border-l-2 border-primary/20 pl-4 py-2">
                  {courses.map((c) => (
                    <li key={c.label}>
                      <Link 
                        href={c.href} 
                        onClick={() => { setOpen(false); setCoursesOpen(false); }} 
                        className="block py-2 text-base hover:text-primary transition-colors"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link 
                href="/#why-us" 
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium hover:text-primary transition-colors"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link 
                href="/gallery" 
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium hover:text-primary transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium opacity-80">Theme</label>
                <button
                  aria-label="Toggle theme"
                  onClick={() => handleThemeChange(theme === "light" ? "blue" : "light")}
                  className="inline-flex items-center gap-2 bg-background/80 border border-primary/20 text-foreground rounded-xl px-3 py-2 text-sm font-medium hover:bg-background/90 hover:border-primary/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <span className="text-base">{theme === "light" ? "🌙" : "☀️"}</span>
                  <span>{theme === "light" ? "Blue" : "Light"}</span>
                </button>
              </div>
            </li>
            <li><Link href="#cta" onClick={() => setOpen(false)} className="inline-block rounded-full bg-primary text-background px-4 py-2 font-medium shadow">Enquire Now</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}




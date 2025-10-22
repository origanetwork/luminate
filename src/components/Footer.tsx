"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Center Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_70%,rgba(0,0,0,0.2)_100%)]"></div>
        
        {/* Left Side Gradient */}
        <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
        
        {/* Top and Bottom Fade */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <div className="container-px mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/80 p-1.5 rounded-md backdrop-blur-sm">
                <Image 
                  src="/assets/logo/logo.png" 
                  alt="Luminate logo" 
                  width={76} 
                  height={76} 
                  className="rounded-sm"
                />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent [text-shadow:_0_0_15px_rgba(96,165,250,0.17)] transition-all duration-500 hover:from-white hover:to-blue-200 hover:scale-105">
                LUMINATE
              </h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering the next generation with industry-relevant skills through innovative learning solutions.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link 
                href="?" 
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/20"
              >
                Login
              </Link>
              <div className="h-6 w-px bg-white/20"></div>
              {[
                { 
                  href: "https://www.facebook.com/share/1BoNVkvvQt/", 
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.88 1.094 0 2.238.195 2.238.195v2.45h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                  label: "Facebook",
                  color: "#1877F2"
                },
                {
                  href: "https://www.instagram.com/luminate_melattur?igsh=MXExdG5mMjh5eG9lYg==",
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z",
                  label: "Instagram",
                  color: "#E4405F"
                },
                {
                  href: "https://youtube.com/@luminateeducationmelattur?si=0otsV1KGBhbQ5nWM", 
                  icon: "M10 15l5.19-3L10 9v6zm10-12.5c0-.83-.67-1.5-1.5-1.5H5.5C4.67 1 4 1.67 4 2.5v19c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-19z", // YouTube play button SVG path
                  label: "YouTube",
                  color: "#FF0000"
                },
                {
                  href: "#linkedln",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  label: "LinkedIn",
                  color: "#0A66C2"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white/40 transition-all duration-200 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label === "Instagram" ? (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      style={{ color: social.color }}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" />
                    </svg>
                  ) : social.label === "YouTube" ? (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2.5" y="5.5" width="19" height="13" rx="3" ry="3" fill={social.color} />
                      <polygon points="10,9 16,12 10,15" fill="#ffffff" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: social.color }}
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d={social.icon} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Blog', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center group text-white hover:text-blue-100 transition-colors font-medium"
                  >
                    <span className="w-2 h-0.5 bg-white mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:mr-4"></span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pb-2">
              Our Courses
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Digital Marketing', path: '/courses/diploma-digital-marketing-advertising' },
                { name: 'Graphic Design', path: '/courses/diploma-graphic-design-video-editing' },
                { name: 'Fashion Design', path: '/courses/diploma-fashion-designing-garment-technology' },
                { name: 'Business Accounting', path: '/courses/accounting' },
                { name: 'Website Development', path: '/courses/website-dev' },
              ].map((course) => (
                <li key={course.name}>
                  <Link 
                    href={course.path}
                    className="flex items-center group text-white hover:text-blue-100 transition-colors font-medium"
                  >
                    <span className="w-2 h-0.5 bg-white mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:mr-4"></span>
                    <span>{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <span className="block text-white font-medium group-hover:text-blue-100 transition-colors">1st Floor, ALI TOWER BUILDING</span>
                  <span className="text-blue-100/70 text-sm">NEAR BUS STAND, MELATTUR</span>
                </div>
              </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <a href="tel:+917012598502" className="block text-white font-medium hover:text-blue-100 transition-colors group-hover:translate-x-0.5">+91 7012 598 502</a>
                  <span className="text-blue-100/70 text-sm">Mon-Sat: 9AM - 6PM</span>
                </div>
              </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <a href="mailto:info@luminateeducation.com" className="block text-white font-medium hover:text-blue-100 transition-colors group-hover:translate-x-0.5">luminate950@gmail.com</a>
                  <span className="text-blue-100/70 text-sm">We&apos;ll respond within 24 hours</span>
                </div>
              </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="justify-center">
            <p className="text-white/80 text-sm text-center">
              &copy; {currentYear} Luminate Education. All rights reserved 
            </p>
            <p className="text-white/80 text-sm text-center">
              Design & Developed by{' '}
              <a 
                href="https://www.origanetworks.com/" 
                className="text-white text-sm hover:text-blue-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Origa Networks
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
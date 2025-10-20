"use client";

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';

// Only render on client-side to avoid hydration mismatch
export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-6 bottom-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact Us"
      >
        <FaPhone className="w-6 h-6" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close contact modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            
            <div className="space-y-4">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/917306358534"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-600">+91 7306 358 534</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm font-medium">Chat Now</span>
              </a>

              {/* Phone Call */}
              <a
                href="tel:+917306358534"
                className="flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaPhone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Call Us</p>
                    <p className="text-sm text-gray-600">+91 7306 358 534</p>
                  </div>
                </div>
                <span className="text-blue-600 text-sm font-medium">Call Now</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@luminateeducation.com"
                className="flex items-center justify-between p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <FaEnvelope className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email Us</p>
                    <p className="text-sm text-gray-600">info@luminateeducation.com</p>
                  </div>
                </div>
                <span className="text-purple-600 text-sm font-medium">Email Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

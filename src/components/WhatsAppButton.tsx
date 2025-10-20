"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/917012598502"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9" />
      </Link>
    </div>
  );
}

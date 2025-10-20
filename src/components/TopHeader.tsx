import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="hidden md:block bg-gradient-to-r from-[#496fad] via-[#496fad]/90 to-black text-white py-1 px-4 sticky top-0 z-50">
      <div className="container-px mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <FaPhone className="w-4 h-4 text-white font-bold" />
            <span>+91 7012 598 502</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="w-4 h-4 text-white font-bold" />
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
  );
}

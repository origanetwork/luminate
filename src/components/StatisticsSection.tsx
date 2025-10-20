"use client";
import { FaUsers, FaBuilding, FaGraduationCap, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('statistics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  const stats = [
    {
      icon: <FaUsers className="w-12 h-12" />,
      value: "30+",
      label: "Students Placed"
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      value: "10+",
      label: "Partner Companies"
    },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      value: "6",
      label: "Diploma Programs"
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      value: "100%",
      label: "Placement Rate"
    }
  ];

  return (
    <section id="statistics-section" className="py-16 bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="container-px mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center transform transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="flex justify-center mb-4">
                <div className="text-primary hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-counter">
                {stat.value}
              </div>
              <div className="text-foreground/70 text-base md:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

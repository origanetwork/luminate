import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CertificationsGrid from "@/components/CertificationsGrid";
import FAQSection from "@/components/FAQSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <HeroSection />
        <FeatureCards />
        <AboutSection />
        <StatisticsSection />
        <WhyChooseSection />
        <CoursesSection />
        <TestimonialsSection />
        <CertificationsGrid />
        <FAQSection />
      </main>
    </div>
  );
}

import { FaBullseye, FaRobot, FaBriefcase, FaAward } from "react-icons/fa";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "100% Job Guarantee",
      description: "We don't just train, we place! Every graduate gets job placement support with our 30+ partner companies."
    },
    {
      icon: <FaRobot className="w-8 h-8 text-primary" />,
      title: "AI-Integrated Courses",
      description: "Learn with cutting-edge AI tools and technologies. Stay ahead in the fast-paced digital world."
    },
    {
      icon: <FaBriefcase className="w-8 h-8 text-primary" />,
      title: "Practical Learning",
      description: "Live projects, real assignments, and hands-on training. Learn by doing, not just watching."
    },
    {
      icon: <FaAward className="w-8 h-8 text-primary" />,
      title: "Government-Recognized",
      description: "Earn certificates recognized by CTDCAES and endorsed by Google, NIELIT, MSME, and other authorities."
    }
  ];

  return (
    <section id="why-us" className="section bg-gradient-to-br from-primary via-primary/90 to-black">
      <div className="mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-black">Luminate Education</span>  Campus
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for aspiring digital professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 md:mx-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up opacity-0`} style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}>
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

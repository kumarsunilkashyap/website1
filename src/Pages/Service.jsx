import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We provide modern web development services using the latest technologies.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Our team creates high-quality mobile applications for both Android and iOS.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "We design user-friendly interfaces with a focus on user experience.",
    icon: "🎨",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto mt-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

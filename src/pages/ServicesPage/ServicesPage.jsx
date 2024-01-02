import React from "react";

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive and scalable websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "Graphic Design",
      description:
        "Our creative team designs eye-catching graphics and branding materials.",
      icon: "🎨",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and user-friendly interfaces to enhance user experiences.",
      icon: "📲",
    },
    {
      title: "AI Solution",
      description:
        "Implementing artificial intelligence solutions to automate and optimize processes.",
      icon: "🤖",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-5 px-20">
      <div className="container mx-auto">
        <div className="pb-10">
          <h2 className="text-3xl text-center font-semibold text-gray-800 pt-8">
            Our Services
          </h2>
          <p className="text-gray-700 text-center pt-5">
            We offer a range of services to meet your business needs and elevate
            your online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" group bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-300"
            >
              <div
                className="text-2xl mb-4 group-hover:animate-bounce"
                title={service.title}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

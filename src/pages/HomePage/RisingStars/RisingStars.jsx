import React from "react";
import RisingStarCard from "./RisingStarCard";
import star_1 from "../../../assets/r1.jpg";
import star_2 from "../../../assets/r2.jpg";
import star_3 from "../../../assets/r3.jpg";
import star_4 from "../../../assets/r4.jpg";
const RisingStars = () => {
  const risingStars = [
    {
      name: "John Smith",
      role: "Frontend Developer",
      image: star_1,
      social: {
        twitter: "https://twitter.com/johnsmith",
        linkedin: "https://www.linkedin.com/in/johnsmith",
        github: "https://github.com/johnsmith",
        portfolio: "https://www.johnsmith.dev",
      },
    },
    {
      name: "Ella Thompson",
      role: "Product Designer",
      image: star_2,
      social: {
        twitter: "https://twitter.com/ellathompson",
        linkedin: "https://www.linkedin.com/in/ellathompson",
        github: "https://github.com/ellathompson",
        portfolio: "https://www.ellathompson.design",
      },
    },
    {
      name: "Mike Johnson",
      role: "Backend Developer",
      image: star_3,
      social: {
        twitter: "https://twitter.com/mikejohnson",
        linkedin: "https://www.linkedin.com/in/mikejohnson",
        github: "https://github.com/mikejohnson",
        portfolio: "https://www.mikejohnson.dev",
      },
    },
    {
      name: "Emma Davis",
      role: "UX/UI Designer",
      image: star_4,
      social: {
        twitter: "https://twitter.com/emmadavis",
        linkedin: "https://www.linkedin.com/in/emmadavis",
        github: "https://github.com/emmadavis",
        portfolio: "https://www.emmadavis.design",
      },
    },
  ];

  return (
    <section className="bg-gray-100 py-48 px-20">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto p-8 text-secondary font-medium text-center">
          <h2 className="text-4xl font-bold mb-8  text-gray-800">
            Rising Stars
          </h2>
          <p className="text-gray-600 leading-6">
            Our Extraordinary Talent & Dedicated Rising Stars
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {risingStars.map((member, index) => (
            <RisingStarCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisingStars;

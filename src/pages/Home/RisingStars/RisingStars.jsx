import React from "react";
import RisingStarCard from "./RisingStarCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const RisingStars = () => {
  const risingStars = [
    {
      name: "Oliver Aguilerra",
      role: "Product Manager",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      social: {
        twitter: "https://twitter.com/oliveraguilerra",
        linkedin: "https://www.linkedin.com/in/oliveraguilerra",
        github: "https://github.com/oliveraguilerra",
        portfolio: "https://www.oliveraguilerra.com",
      },
    },
    {
      name: "Marta Clermont",
      role: "Design Team Lead",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      social: {
        twitter: "https://twitter.com/martaclermont",
        linkedin: "https://www.linkedin.com/in/martaclermont",
        github: "https://github.com/martaclermont",
        portfolio: "https://www.martaclermont.com",
      },
    },
    {
      name: "Sophie Williams",
      role: "UX/UI Designer",
      image:
        "https://images.pexels.com/photos/3764359/pexels-photo-3764359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      social: {
        twitter: "https://twitter.com/sophiewill",
        linkedin: "https://www.linkedin.com/in/sophiewilliams",
        github: "https://github.com/sophiewill",
        portfolio: "https://www.sophiewilliams.design",
      },
    },
    {
      name: "Alex Rodriguez",
      role: "Software Engineer",
      image:
        "https://images.pexels.com/photos/3750715/pexels-photo-3750715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      social: {
        twitter: "https://twitter.com/alexrod",
        linkedin: "https://www.linkedin.com/in/alexrodriguez",
        github: "https://github.com/alexrod",
        portfolio: "https://www.alexrodriguez.dev",
      },
    },
    {
      name: "Oliver Aguilerra",
      role: "Product Manager",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      social: {
        twitter: "https://twitter.com/oliveraguilerra",
        linkedin: "https://www.linkedin.com/in/oliveraguilerra",
        github: "https://github.com/oliveraguilerra",
        portfolio: "https://www.oliveraguilerra.com",
      },
    },
  ];

  return (
    // <section className="bg-gray-100 min-h-screen md:px-20 px-10">
    //   <div className="container mx-auto text-center">
    //     <div className="max-w-3xl mx-auto p-8 text-secondary font-medium text-center">
    //       <h2 className="text-4xl font-bold mb-8  text-gray-800">
    //         Rising Stars
    //       </h2>
    //       <p className="text-gray-600 leading-6">
    //         Our Extraordinary Talent & Dedicated Rising Stars
    //       </p>
    //     </div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    //       {risingStars.map((member, index) => (
    //         <RisingStarCard key={index} member={member} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="bg-gray-100 min-h-screen md:px-20 px-10">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto p-8 text-secondary font-medium text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Rising Stars
          </h2>
          <p className="text-gray-600 leading-6">
            Our Extraordinary Talent & Dedicated Rising Stars
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is <= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
              grid: {
                rows: 1,
              },
            },
            // when window width is <= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 1,
              },
            },
            // when window width is <= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {risingStars.map((member, index) => (
            <SwiperSlide key={index}>
              <RisingStarCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RisingStars;

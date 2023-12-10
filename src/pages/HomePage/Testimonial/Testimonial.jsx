import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "John Doe",
    position: "CEO, Company ABC",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    position: "CTO, Company XYZ",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          What our clients say
        </h2>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                testimonial={testimonial}
                index={index}
              ></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;

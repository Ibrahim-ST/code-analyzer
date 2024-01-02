import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const RisingStarCard = ({ member }) => {
  const [style, set] = useSpring(() => ({
    transform: "scale(1)",
    opacity: 1,
    config: {
      duration: 500,
    },
  }));

  return (
    <animated.div
      className="w-full p-6 rounded-md shadow-xl cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{ ...style }}
      onMouseEnter={() => set({ transform: "scale(1.05)", opacity: 0.9 })}
      onMouseLeave={() => set({ transform: "scale(1)", opacity: 1 })}
    >
      <img
        src={member.imgURL}
        alt={member.name}
        className="w-full h-40 object-cover mx-auto mb-4 rounded-lg"
      />
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={member.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 mx-2"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href={member.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 mx-2"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={member.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black mx-2"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <a
        href={member.social.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 block mt-4 text-center"
      >
        Portfolio
      </a>
    </animated.div>
  );
};

export default RisingStarCard;

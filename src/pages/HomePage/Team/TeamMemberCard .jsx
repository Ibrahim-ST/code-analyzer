import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const TeamMemberCard = ({ member }) => {
  const [style, set] = useSpring(() => ({
    transform: 'scale(1)',
    opacity: 1,
    config: {
      duration: 300, // Adjust the duration (in milliseconds) as needed
    },
  }));

  return (
    <animated.div
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{
        ...style,
      }}
      onMouseEnter={() => set({ transform: 'scale(1.05)', opacity: 0.9 })}
      onMouseLeave={() => set({ transform: 'scale(1)', opacity: 1 })}
    >
      <img
        src={member.imgURL}
        alt={member.name}
        className="w-32 h-32 object-cover mx-auto mb-4 rounded-full shadow-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
      <p className="text-gray-600 text-center">{member.role}</p>
      <div className="flex justify-center mt-4">
        <a
          href={member.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 mx-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href={member.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 mx-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={member.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black mx-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={member.social.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black mx-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
        >
          <FaGlobe size={24} />
        </a>
      </div>
    </animated.div>
  );
};

export default TeamMemberCard;

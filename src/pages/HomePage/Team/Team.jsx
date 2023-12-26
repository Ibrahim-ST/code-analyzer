import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import TeamMemberCard from "../Team/TeamMemberCard ";
import demo_team from "../../../assets/demo_team.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Md. Hosen Zisad",
      role: "Research & Software Engineer",
      image: demo_team,
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        portfolio: "https://www.johndoe.com",
      },
    },
    {
      name: "Sultan Md. Ayman",
      role: "Frontend Engineer & Visual Designer",
      image: demo_team,
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        portfolio: "https://www.johndoe.com",
      },
    },
    {
      name: "Md. Ibrahim Siddiquee",
      role: "Software Engineer",
      image: demo_team,
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        portfolio: "https://www.johndoe.com",
      },
    },
    // Add more team members as needed
  ];
  

  return (
    <section className="bg-gray-100  min-h-screen px-2 sm:px-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Our Team
          </h2>
          <p className="text-gray-600 leading-6">
            Meet the talented individuals who are making waves in our team and
            contributing to our success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, id) => (
            <TeamMemberCard key={id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

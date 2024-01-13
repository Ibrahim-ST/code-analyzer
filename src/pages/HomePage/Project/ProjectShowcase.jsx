import { useEffect, useState } from "react";
import demo_project from "../../../assets/demo-project.jpg";
import LoadingIcon from "../../../components/LoadingIcon";
import useData from "../../../hooks/useData";

const ProjectShowcaseTabs = ({ loading, error, filteredProjects }) => {
  if (loading && !error) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-20">
        <LoadingIcon />
        <LoadingIcon />
        <LoadingIcon />
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects?.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-white rounded-md shadow-md cursor-pointer"
        >
          <img
            src={project.imgURL}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcaseTabs;

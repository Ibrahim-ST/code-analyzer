import { useEffect, useState } from "react";
import demo_project from "../../../assets/demo-project.jpg";
import LoadingIcon from "../../../components/LoadingIcon";
import useData from "../../../hooks/useData";

const ProjectShowcaseTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [projects, setProjects] = useState([]);

  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: "Project One",
      category: "software",
      description:
        "Description for Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: demo_project,
    },
    {
      id: 2,
      title: "Project Two",
      category: "machine-learning",
      description:
        "Description for Project Two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: demo_project,
    },
    {
      id: 3,
      title: "Project Two",
      category: "machine-learning",
      description:
        "Description for Project Two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: demo_project,
    },
    // Add more projects as needed
  ];

  const projectURL = "projects.json";
  const { data: projects, loading } = useData(projectURL);

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects?.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen px-20 py-20 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 pt-8 mb-8">
          Our Projects
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-6">
          <button
            className={`mr-4 mb-2 px-4 py-2 font-semibold focus:outline-none transition ${
              selectedCategory === "all"
                ? "text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                : "text-gray-500 cursor-pointer"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`mr-4 mb-2 px-4 py-2 font-semibold focus:outline-none transition ${
              selectedCategory === "software"
                ? "text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                : "text-gray-500 cursor-pointer"
            }`}
            onClick={() => setSelectedCategory("software")}
          >
            Software Development
          </button>
          <button
            className={`mr-4 mb-2 px-4 py-2 font-semibold focus:outline-none transition ${
              selectedCategory === "machine-learning"
                ? "text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                : "text-gray-500 cursor-pointer"
            }`}
            onClick={() => setSelectedCategory("machine-learning")}
          >
            Machine Learning
          </button>
          <button
            className={`mr-4 mb-2 px-4 py-2 font-semibold focus:outline-none transition ${
              selectedCategory === "graphic-visual"
                ? "text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                : "text-gray-500 cursor-pointer"
            }`}
            onClick={() => setSelectedCategory("graphic-visual")}
          >
            Graphics & Visual Design
          </button>
          <button
            className={`mb-2 px-4 py-2 font-semibold focus:outline-none transition ${
              selectedCategory === "ai"
                ? "text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                : "text-gray-500 cursor-pointer"
            }`}
            onClick={() => setSelectedCategory("ai")}
          >
            AI
          </button>
        </div>

        {/* Project Cards */}
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
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-20">
            <LoadingIcon />
            <LoadingIcon />
            <LoadingIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcaseTabs;

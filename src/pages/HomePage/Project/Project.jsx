import { useEffect, useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import useData from "../../../hooks/useData";

const Project = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("all");

const baseURL = "https://code-analyzer-server.vercel.app/all-projects";
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://code-analyzer-server.vercel.app/all-projects");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     setLoading(false);
  //     setProjects(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError(true);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {data: projects, loading, error} = useData(baseURL)

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
        <ProjectShowcase loading={loading} error={error} filteredProjects={filteredProjects} />
      </div>
    </div>
  );
};

export default Project;

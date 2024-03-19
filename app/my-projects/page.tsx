import React from "react";
import { projects } from "../data/data";
import ProjectCard from "./components/ProjectCard";
const MyProjects = () => {
  return (
    <div className="page-container">
      <h2 className=" text-2xl font-bold mb-4">My Project</h2>
      <div className=" flex flex-row flex-wrap gap-10 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

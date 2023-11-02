import React from "react";
import ProjectsHeader from "./header_components/projects_header";
import Page from "../enums/page";
import ProjectDisplays from "./project_displays";
import "../styles/square_project_displays.css";

type ProjectGroupProps = {
  projectName: string;
  projectDescription: string;
  handleTextClick: (page: Page) => void;
};

const Projects: React.FC<ProjectGroupProps> = ({
  handleTextClick,
  projectName,
  projectDescription,
}) => {
  return (
    <>
      <ProjectDisplays />
      <ProjectsHeader handleClick={handleTextClick} />
      <div className="Projects">
        <div className="ImageBox">{projectName}</div>
        <p className="Description">{projectDescription} </p>
      </div>
    </>
  );
};
export default Projects;

import React from "react";
import ProjectsHeader from "./header_components/projects_header";
import Page from "../enums/page";

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
      <ProjectsHeader handleClick={handleTextClick} />
      <div className="projects">
        <div className="circle">{projectName}</div>
        <p className="paragraph">{projectDescription} </p>
      </div>
    </>
  );
};
export default Projects;

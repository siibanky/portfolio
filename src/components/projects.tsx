import React from "react";
import ProjectsHeader from "./header_components/projects_header";
import Page from "../enums/page";
import ProjectDisplays from "./project_displays";
import "../styles/square_project_displays.css";
import SplitScreen from "./split_screen";

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
        <p id="TurtleGameDescription">
          The game Turtle Swim is similar to Flappy Bird, <br />I created this
          game because .... <br />
          Turtle Swim uses React, Typescript, ect...
        </p>
        <p id="FoodWebDescription">
          I created this project using... <br />I was inspired by my love for
          cooking...
        </p>
        <p id="ProjectProjectDescription">
          Another one of my project descriptions goes here
        </p>
        <div className="ImageBox">{projectName}</div>
        <p className="Description">{projectDescription} </p>
      </div>
    </>
  );
};
export default Projects;

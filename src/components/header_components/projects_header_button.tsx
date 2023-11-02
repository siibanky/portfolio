import React from "react";
import Page from "../../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const ProjectsHeaderButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="ProjectsHeaderEntry"
      onClick={(e) => handleClick(Page.PROJECTS)}
    >
      Projects
    </button>
  );
};

export default ProjectsHeaderButton;

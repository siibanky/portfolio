import React from "react";
import Page from "../../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const ProjectsHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="projectsHeader">
      <button id="about" onClick={(e) => handleClick(Page.HOME)}>
        About me
      </button>
      <button id="skills" onClick={(e) => handleClick(Page.SKILLS)}>
        Skills
      </button>
      <button id="contacts" onClick={(e) => handleClick(Page.CONTACTS)}>
        Contacts
      </button>
    </div>
  );
};

export default ProjectsHeader;

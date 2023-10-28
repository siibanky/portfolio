import React from "react";
import Page from "../../enums/page";
interface Props {
  handleClick: (page: Page) => void;
}

const SkillsHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="skillsHeader">
      <button id="about" onClick={(e) => handleClick(Page.HOME)}>
        About me
      </button>
      <button id="projects" onClick={(e) => handleClick(Page.PROJECTS)}>
        Projects
      </button>
      <button id="contacts" onClick={(e) => handleClick(Page.CONTACTS)}>
        Contacts
      </button>
    </div>
  );
};

export default SkillsHeader;

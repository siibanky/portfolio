import React from "react";
import Page from "../../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const ContactsHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="contactHeader">
      <button id="about" onClick={(e) => handleClick(Page.HOME)}>
        {" "}
        About me
      </button>
      <button id="projects" onClick={(e) => handleClick(Page.PROJECTS)}>
        Projects
      </button>
      <button id="skills" onClick={(e) => handleClick(Page.SKILLS)}>
        Skills
      </button>
    </div>
  );
};

export default ContactsHeader;

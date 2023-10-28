import React from "react";
import Page from "../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const Links: React.FC<Props> = ({ handleClick }) => {
  return (
    <div className="evenly-spaced">
      <button id="Projects" onClick={(e) => handleClick(Page.PROJECTS)}>
        Projects
      </button>
      <button id="Skills" onClick={(e) => handleClick(Page.SKILLS)}>
        Skills
      </button>
      <button id="Contact" onClick={(e) => handleClick(Page.CONTACTS)}>
        Contacts
      </button>
    </div>
  );
};

export default Links;

import React from "react";
import Page from "../../enums/page";
import AboutMeHeaderbutton from "./about_me_header_button";
import SkillsHeaderButton from "./skills_header_button";
import ContactsHeaderButton from "./contacts_header_button";

interface Props {
  handleClick: (page: Page) => void;
}

const ProjectsHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="ProjectsHeaderWrapper" className="HeaderWrapper">
      <AboutMeHeaderbutton handleClick={handleClick} />
      <SkillsHeaderButton handleClick={handleClick} />
      <ContactsHeaderButton handleClick={handleClick} />
    </div>
  );
};

export default ProjectsHeader;

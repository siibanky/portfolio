import React from "react";
import Page from "../../enums/page";
import AboutMeHeaderbutton from "./about_me_header_button";
import ProjectsHeaderButton from "./projects_header_button";
import SkillsHeaderButton from "./skills_header_button";

interface Props {
  handleClick: (page: Page) => void;
}

const ContactsHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="ContactHeaderWrapper" className="HeaderWrapper">
      <AboutMeHeaderbutton handleClick={handleClick} />
      <ProjectsHeaderButton handleClick={handleClick} />
      <SkillsHeaderButton handleClick={handleClick} />
    </div>
  );
};

export default ContactsHeader;

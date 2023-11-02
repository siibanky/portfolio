import React from "react";
import Page from "../../enums/page";
import ContactsHeaderButton from "./contacts_header_button";
import ProjectsHeaderButton from "./projects_header_button";
import AboutMeHeaderbutton from "./about_me_header_button";
interface Props {
  handleClick: (page: Page) => void;
}

const SkillsHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="SkillsHeaderWrapper" className="HeaderWrapper">
      <AboutMeHeaderbutton handleClick={handleClick} />
      <ProjectsHeaderButton handleClick={handleClick} />
      <ContactsHeaderButton handleClick={handleClick} />
    </div>
  );
};

export default SkillsHeader;

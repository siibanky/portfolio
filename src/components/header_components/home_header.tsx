import React from "react";
import Page from "../../enums/page";
import ProjectsHeaderButton from "./projects_header_button";
import SkillsHeaderButton from "./skills_header_button";
import ContactsHeaderButton from "./contacts_header_button";

interface Props {
  handleClick: (page: Page) => void;
}
const HomeHeader: React.FC<Props> = ({ handleClick }) => {
  return (
    <div id="HomeHeaderWrapper" className="HeaderWrapper">
      <ProjectsHeaderButton handleClick={handleClick} />
      <SkillsHeaderButton handleClick={handleClick} />
      <ContactsHeaderButton handleClick={handleClick} />
    </div>
  );
};

export default HomeHeader;

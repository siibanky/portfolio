import React from "react";
import Page from "../../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const SkillsHeaderButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="SkillsHeaderEntry"
      onClick={(e) => handleClick(Page.SKILLS)}
    >
      Skills
    </button>
  );
};

export default SkillsHeaderButton;

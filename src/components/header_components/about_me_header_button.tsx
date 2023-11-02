import React from "react";
import Page from "../../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const AboutMeHeaderbutton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="AboutHeaderEntry"
      onClick={(e) => handleClick(Page.HOME)}
    >
      About me
    </button>
  );
};

export default AboutMeHeaderbutton;

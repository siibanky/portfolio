import React from "react";
import Page from "../../enums/page";
import Links from "../links";
import "../../styles/header.css";

interface Props {
  handleLinkClick: (page: Page) => void;
}
const HomeHeader: React.FC<Props> = ({ handleLinkClick }) => {
  return (
    <div id="homeHeader">
      <Links handleClick={handleLinkClick} />
    </div>
  );
};

export default HomeHeader;

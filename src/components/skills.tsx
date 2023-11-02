import Page from "../enums/page";
import CssLogo from "../svg/svg_css_logo";
import HtmlLogo from "../svg/svg_html_logo";
import JsLogo from "../svg/svg_js_logo";
import SkillsHeader from "./header_components/skills_header";
import "../styles/skills_logos.css";

interface Props {
  handleTextClick: (page: Page) => void;
}

const Skills: React.FC<Props> = ({ handleTextClick }) => {
  return (
    <>
      <SkillsHeader handleClick={handleTextClick} />
      <CssLogo />
      <HtmlLogo />
      <JsLogo />
    </>
  );
};

export default Skills;

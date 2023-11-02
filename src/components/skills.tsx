import Page from "../enums/page";
import SkillsHeader from "./header_components/skills_header";

interface Props {
  handleTextClick: (page: Page) => void;
}

const Skills: React.FC<Props> = ({ handleTextClick }) => {
  return (
    <>
      <SkillsHeader handleClick={handleTextClick} />
    </>
  );
};

export default Skills;

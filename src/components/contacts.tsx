import Page from "../enums/page";
import GithubCat from "../svg/svg_github_cat";
import ContactHeader from "./header_components/contacts_header";
import "../styles/contacts_page.css";
import LinkedinLogo from "../svg/svg_linkedin_logo";

interface Props {
  handleTextClick: (page: Page) => void;
}

const Contacts: React.FC<Props> = ({ handleTextClick }) => {
  return (
    <div>
      <ContactHeader handleClick={handleTextClick} />
      <p id="ContactMe">Contact Me</p>
      <p id="email">siibanky24@gmail.com</p>
      <p id="phoneNum">440-662-8888</p>
      <GithubCat />
      <LinkedinLogo />
    </div>
  );
};

export default Contacts;

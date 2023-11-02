import Page from "../enums/page";
import ContactHeader from "./header_components/contacts_header";

interface Props {
  handleTextClick: (page: Page) => void;
}

const Contacts: React.FC<Props> = ({ handleTextClick }) => {
  return (
    <div>
      <ContactHeader handleClick={handleTextClick} />
      <p id="email">siibanky24@gmail.com</p>
      <p id="phoneNum">440-662-8888</p>
    </div>
  );
};

export default Contacts;

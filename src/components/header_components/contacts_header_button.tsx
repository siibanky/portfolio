import React from "react";
import Page from "../../enums/page";

interface Props {
  handleClick: (page: Page) => void;
}

const ContactsHeaderButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="ContactHeaderEntry"
      onClick={(e) => handleClick(Page.CONTACTS)}
    >
      Contacts
    </button>
  );
};
export default ContactsHeaderButton;

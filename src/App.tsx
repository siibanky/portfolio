import react, { useState } from "react";
import Home from "./components/home";
import "./styles/index.css";
import "./styles/headers.css";
import Page from "./enums/page";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Skills from "./components/skills";

function App() {
  const [currentPage, setCurrentPage] = useState(Page.HOME);

  const handleTextClick = (page: Page) => {
    setCurrentPage(page);
  };

  const isHome = currentPage === Page.HOME;
  const isProject = currentPage === Page.PROJECTS;
  const isContact = currentPage === Page.CONTACTS;
  const isSkills = currentPage === Page.SKILLS;

  return (
    <>
      {isHome && <Home handleTextClick={handleTextClick} />}
      {isProject && (
        <Projects
          projectName={""}
          projectDescription={""}
          handleTextClick={handleTextClick}
        />
      )}
      {isContact && <Contacts handleTextClick={handleTextClick} />}
      {isSkills && <Skills handleTextClick={handleTextClick} />}
    </>
  );
}
export default App;

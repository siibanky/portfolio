import "../styles/index.css";
import "../styles/header.css";
import HomeHeader from "./header_components/home_header";
import Page from "../enums/page";

interface Props {
  handleTextClick: (page: Page) => void;
}

const Home: React.FC<Props> = ({ handleTextClick }) => {
  return (
    <>
      <HomeHeader handleLinkClick={handleTextClick} />
      <div className="intro">
        <p className="imSierra">Hi there, I'm Sierra Banky</p>
        <p className="text">
          I am currently studying front-end engineering with codecademy, hoping
          to further my career within the field of cybersecurity. I started to
          become fascinated with code in 2022 after hearing about everything you
          can do and create. In my freetime I enjoy reading, cooking, designing
          new projects, and taking my two dogs Watson and Cooper hiking.
        </p>
      </div>
    </>
  );
};

export default Home;

import "../styles/about_me.css";
import HomeHeader from "./header_components/home_header";
import Page from "../enums/page";
import SplitScreen from "./split_screen";
import "../styles/split_screen.css";

interface Props {
  handleTextClick: (page: Page) => void;
}

const Home: React.FC<Props> = ({ handleTextClick }) => {
  return (
    <>
      <HomeHeader handleClick={handleTextClick} />
      <SplitScreen />
      <div id="Square">
        <p className="ImSierra">
          Hi there, <br />
          I'm Sierra Banky
        </p>
        <p className="AboutMe"> About Me</p>
        <p className="Bio">
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

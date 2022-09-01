import AboutMe from "./MainComponents/AboutMe.component";
import { Articles } from "./MainComponents/Articles.component";
import { MainWelcome } from "./MainComponents/MainWelcome.component";
import "./Main.style.css";

const Main = () => {
  return (
    <main className="main font-body">
      {/* Main Welcome */}
      <MainWelcome />
      {/* <!-- About Me --> */}
      <AboutMe />
      {/* articels */}
      <Articles />

      {/* <!-- projects --> */}
      {/* <Projects /> */}
    </main>
  );
};

export default Main;

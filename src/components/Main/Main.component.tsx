import AboutMe from "./MainComponents/AboutMe.component";
import { Articles } from "./MainComponents/Articles.component";
import { MainWelcome } from "./MainComponents/MainWelcome.component";
import "./Main.style.css";
import { Projects } from "./MainComponents/Projects.component";
import { Experience } from "./MainComponents/Experience.component";

const Main = () => {
  return (
    <main className="main font-body">
      {/* Main Welcome */}
      <MainWelcome />

      {/* <!-- About Me --> */}
      <AboutMe />

      {/* Experience */}

      <Experience />

      {/* articels */}
      <Articles />

      {/* <!-- projects --> */}
      <Projects />
    </main>
  );
};

export default Main;

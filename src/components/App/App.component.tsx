import Header from "../Header/Header.component";
import "./App.style.css";
import Main from "../Main/Main.component";
import ThemeChanger from "../ThemeChanger/ThemeChanger.component";
import NavBarMob from "../NavBar/NavBarMob.component";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingSpinnerStateData } from "../../recoil/atoms.state";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.component";
import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useRecoilState(loadingSpinnerStateData);

  useEffect(() => {
    setLoading(false);
  }, [loading, setLoading]);

  return (
    <div className="app dark:bg-[#1c2c35] transition duration-500 min-h-screen overflow-hidden flex flex-col justify-between">
      <div className="relative min-h-[72px] z-30">
        <Header />
      </div>
      <NavBarMob />

      <div className="ex-sm:hidden md:block fixed right-3 bottom-3">
        <ThemeChanger />
      </div>
      {loading ? <LoadingSpinner /> : false}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <footer className="my-2">
        <div className="w-[80%] h-[2px] bg-gray-600 mx-auto my-2"></div>
        <div
          className="container mx-auto  flex text-black gap-2 justify-between flex-wrap 
            md:px-4 ex-sm:px-2 dark:text-white
            xl:px-4
          "
        >
          <p>&copy;sultondev</p>
          <a
            href="https://github.com/sultondev/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://instagram.com/sultondev/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/sultondev/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

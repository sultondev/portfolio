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
    <div className="app dark:bg-[#263440] transition duration-500 min-h-screen overflow-hidden">
      <div className="relative min-h-[72px]">
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
    </div>
  );
}

export default App;

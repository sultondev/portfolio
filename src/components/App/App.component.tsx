import Header from "../Header/Header.component";
import "./App.style.css";
import Main from "../Main/Main.component";
import ThemeChanger from "../ThemeChanger/ThemeChanger.component";
import NavBarMob from "../NavBar/NavBarMob.component";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingSpinnerStateData } from "../../recoil/atoms.state";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.component";
import { useEffect } from "react";
import Footer from "../Footer/Footer.component";
import { NotFound } from "../NotFound/NotFound.component";

function App() {
  const [loading, setLoading] = useRecoilState(loadingSpinnerStateData);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, [loading, setLoading]);

  if (location.pathname === "/home") {
    navigate("/", { replace: true });
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app bg-white md:dark:bg-[#020A13] ex-sm:dark:bg-[#1C2C35] transition duration-500 min-h-screen overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <Header />
      {/* Navbar mobile size */}
      <NavBarMob />
      <div className="ex-sm:hidden md:block fixed z-10 right-3 bottom-3">
        <ThemeChanger />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

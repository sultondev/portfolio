import Header from "../Header/Header.component";
import "./App.style.css";
import Main from "../Main/Main.component";
import ThemeChanger from "../ThemeChanger/ThemeChanger.component";

function App() {
  return (
    <div className="app dark:bg-black transition duration-500 min-h-screen">
      <div className="relative min-h-[72px]">
        <Header />
      </div>
      <div className="ex-sm:hidden md:block fixed right-3 bottom-3">
        <ThemeChanger />
      </div>

      <Main />
    </div>
  );
}

export default App;

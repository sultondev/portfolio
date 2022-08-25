import { useRecoilState } from "recoil";
import { navBarDefaultStateData } from "../../recoil/atoms.state";
import NavBar from "../NavBar/NavBar.component";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );

  function setClassState(
    state: string,
    stateChanger: (value: string) => void,
    firstClass: string,
    secondClass: string
  ) {
    if (state === firstClass) {
      stateChanger(secondClass);
    } else {
      stateChanger(firstClass);
    }
  }

  return (
    <div className="relative min-h-[72px] z-30">
      <header className="fixed top-0 w-full bg-gray-600/20 dark:bg-gray-600/5 backdrop-blur-md py-4">
        <div
          className="container flex justify-between items-center mx-auto 
        ex-sm:px-4
        sm:px-2
        md:px-4
        xl:px-4
      "
        >
          <Link to="/" className="text-2xl dark:text-white ex-sm:font-bold">
            &#60;<span className="md:inline ex-sm:hidden">SULTON</span>DEV/&#62;
          </Link>
          <NavBar />

          <div className="md:hidden ex-sm:flex justify-center items-center">
            <button
              className="text-4xl text-black dark:text-blue-600"
              onClick={() => {
                setClassState(
                  menuState,
                  setMenuState,
                  "animate-show-menu left-0",
                  "animate-hide-menu -left-[100%]"
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-inherit"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

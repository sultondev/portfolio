import { useRecoilState } from "recoil";
import { navBarDefaultStateData } from "../../recoil/atoms.state";
import NavBar from "../NavBar/NavBar.component";
import NavBarMob from "../NavBar/NavBarMob.component";

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
    <header className="fixed top-0 w-full bg-gray-600/5 dark:bg-gray-600/5 backdrop-blur-md py-4">
      <div
        className="container flex justify-between items-center mx-auto 
        ex-sm:px-4
        sm:px-2
        md:px-0
      "
      >
        <h1 className="text-2xl dark:text-white ex-sm:font-bold">
          &#60;<span className="md:inline ex-sm:hidden">SULTON</span>DEV/&#62;
        </h1>
        <NavBar />
        <NavBarMob />

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
  );
};

export default Header;

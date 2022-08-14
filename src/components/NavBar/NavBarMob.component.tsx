import { useRecoilState } from "recoil";
import { navBarDefaultStateData } from "../../recoil/atoms.state";

import ThemeChanger from "../ThemeChanger/ThemeChanger.component";
const NavBarMob = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );

  return (
    <nav
      className={`nav absolute w-full
    h-full
    md:hidden
    top-0
    z-50
    ${menuState}
    `}
    >
      <div
        className="flex flex-col 
        justify-between
        items-start
        h-screen
        bg-[#243b4a]
        dark:bg-[#111a20]
        p-4
        "
      >
        <button
          className="ex-sm:text-2xl text-left text-white dark:text-blue-600"
          onClick={() => {
            setMenuState("animate-hide-menu -left-[100%]");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-inherit"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <ul
          className="
        flex flex-col
        text-black
        font-bold
        text-2xl   
        dark:text-white
        ex-sm:gap-4
        "
        >
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default NavBarMob;

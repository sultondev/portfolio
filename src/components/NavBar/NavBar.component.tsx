import { Link } from "react-router-dom";
import NavBarData from "../../data/components/NavBar/NavBar.data";

const NavBar = () => {
  return (
    <nav
      className="nav flex items-center 
    ex-sm:hidden 
    md:flex"
    >
      <ul
        className="flex items-center dark:text-white 
        gap-4
        font-medium
        sm:text-lg
        sm:font-light
        sm:gap-2
        md:gap-4
        xl:gap-6 xl:text-xl
      "
      >
        {NavBarData &&
          NavBarData.map((data: string, index: number) => {
            return (
              <li key={data + index}>
                <Link
                  to={"/" + data.toLowerCase()}
                  className="md:text-xs  dark:hover:text-[#64ffda]"
                >
                  <span className="text-sm text-black dark:text-[#64ffda]">
                    0{index}.
                  </span>{" "}
                  {data}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default NavBar;

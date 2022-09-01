import { Link } from "react-router-dom";

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
        <li>
          <Link to="/" className="md:text-base  dark:hover:text-[#64ffda]">
            <span className="text-sm text-black dark:text-[#64ffda]">01.</span>{" "}
            About
          </Link>
        </li>
        {/* <li>
          <Link to="/skills">Skills</Link>
        </li> */}
        <li>
          <Link
            to="/projects"
            className="md:text-base  dark:hover:text-[#64ffda]"
          >
            <span className="text-sm text-black dark:text-[#64ffda]">02.</span>{" "}
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="md:text-base  dark:hover:text-[#64ffda]">
            <span className="text-sm text-black dark:text-[#64ffda]">03.</span>{" "}
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="md:text-base  dark:hover:text-[#64ffda]"
          >
            <span className="text-sm text-black dark:text-[#64ffda]">04.</span>{" "}
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

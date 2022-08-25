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
        xl:gap-6
      "
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

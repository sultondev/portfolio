const NavBar = () => {
  return (
    <nav
      className="nav flex items-center 
    ex-sm:hidden 
    md:flex"
    >
      <ul
        className="flex items-center dark:text-white 
        sm:text-lg
        font-medium
        ex-sm:gap-4
      "
      >
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

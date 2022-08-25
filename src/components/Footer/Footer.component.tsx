const Footer = () => {
  return (
    <footer className="my-2">
      <div className="w-[80%] h-[2px] bg-gray-600 mx-auto my-2"></div>
      <div
        className="container mx-auto  flex text-black gap-2 justify-between flex-wrap 
            md:px-4 ex-sm:px-2 dark:text-white
            xl:px-4
          "
      >
        <p>&copy;sultondev</p>
        <a
          href="https://github.com/sultondev/"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://instagram.com/sultondev/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/sultondev/"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;

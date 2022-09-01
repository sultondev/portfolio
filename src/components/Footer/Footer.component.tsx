import githubIcon from "../../assets/icons/social-media/GitHub.svg";
import instagramIcon from "../../assets/icons/social-media/Instagram.svg";
import twitterIcon from "../../assets/icons/social-media/twitter.svg";
import "./Footer.style.css";
const Footer = () => {
  return (
    <footer className="footer my-2 relative z-20 bg-inherit">
      <div className="w-[80%] h-[2px] bg-gray-600 mx-auto my-2"></div>
      <div
        className="container mx-auto 
            relative
            flex
          dark:text-white
            md:justify-center
            md:p-2
            ex-sm:px-2 ex-sm:py-4 ex-sm:flex-col-reverse ex-sm:items-center ex-sm:gap-2 
          "
      >
        <p
          className="footer-copyright
          font-light text-base 
          text-center
          md:text-right ex-sm:text-center
          col-span-3
          "
        >
          Made by SULTONDEV Copyright 2022 . All rights reserved.
        </p>

        <div
          className="footer-social flex flex-wrap md:flex-row items-center gap-4
          md:absolute md:right-0 md:top-0
          "
        >
          <a
            href="https://github.com/sultondev/"
            target="_blank"
            rel="noreferrer"
            className="footer-social__links footer-social__github flex md:gap-2 ex-sm:gap-2 items-center hover:text-[#575757]"
          >
            <span
              className=" flex justify-center items-center bg-black 
              
              md:p-2 ex-sm:p-2 rounded-full dark:bg-none"
            >
              <img
                src={githubIcon}
                alt="Github"
                className="md:w-6 ex-sm:w-6 ex-sm:h-6"
              />{" "}
            </span>
          </a>
          <a
            href="https://instagram.com/sultondev/"
            target="_blank"
            rel="noreferrer"
            className="footer-social__links footer-social__instagram flex md:gap-2 ex-sm:gap-2 items-center hover:text-[#eb072f]"
          >
            <span
              className=" flex justify-center items-center bg-black 
              
              md:p-2 ex-sm:p-2 rounded-full dark:bg-none"
            >
              <img
                src={instagramIcon}
                alt="Github"
                className="md:w-6 ex-sm:w-6 ex-sm:h-6"
              />{" "}
            </span>
          </a>
          <a
            href="https://twitter.com/sultondev/"
            target="_blank"
            rel="noreferrer"
            className="footer-social__links footer-social__twitter flex md:gap-2 ex-sm:gap-2 items-center hover:text-[#00c1c1]"
          >
            <span
              className=" flex justify-center items-center  bg-black 
              
              md:p-2 ex-sm:p-2 rounded-full dark:bg-none"
            >
              <img
                src={twitterIcon}
                alt="Github"
                className="md:w-6 ex-sm:w-6 ex-sm:h-6"
              />{" "}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

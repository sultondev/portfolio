import Logo from "../../../assets/images/logo/logo-1.png";
import { DotArrow } from "../../Templates/DotArrow/DotArrow.template";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section
      className="text-black dark:text-white transition-all duration-700 
          h-screen min-h-[820px]
          flex justify-center items-center
    "
    >
      <div
        className="container
          mx-auto xl:max-w-[900px]
          text-xl
          xl:block xl:px-4
          ex-sm:px-2 ex-sm:max-w-[510px]
          ex-sm:flex ex-sm:flex-col
        "
      >
        <h3 className="relative flex items-center md:text-xl gap-4">
          <div className="">
            <span className="text-black dark:text-[#64ffda] ">01.</span>{" "}
            <span className="font-bold md:text-2xl">AboutMe</span>
          </div>
          <span className="w-1/3 h-[1px] bg-gray-500"></span>
        </h3>
        <div className="flex flex-wrap-reverse my-10 gap-14 lg:flex-row ex-sm:flex-col-reverse">
          <div
            className="flex flex-col gap-4 max-w-[510px] 
          xl:text-base
          ex-sm:text-sm
          "
          >
            <p className="md:text-justify ex-sm:text-left text-black dark:text-[#8892b0]">
              Hello! My name is Sultan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try creating a website for games — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p className="md:text-justify ex-sm:text-left text-black dark:text-[#8892b0]">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p className="md:text-justify ex-sm:text-left text-black dark:text-[#8892b0]">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 text-justify text-black dark:text-[#8892b0] md:text-base">
              <li className="relative">
                <DotArrow /> JavaScript
              </li>
              <li className="relative">
                <DotArrow /> React JS
              </li>
              <li className="relative">
                <DotArrow /> TypeScript
              </li>
              <li className="relative">
                <DotArrow /> Axios
              </li>
              <li className="relative">
                <DotArrow /> Vercel
              </li>
              <li className="relative">
                <DotArrow /> Git & Github
              </li>
            </ul>
            <Link
              to="/about"
              className="text-black dark:text-gray-600 md:text-base underline underline-offset-2"
            >
              More info
            </Link>
          </div>
          <span className="mx-auto w-auto h-auto relative">
            <img
              src={Logo}
              alt=""
              className="rounded-xl min-w-[300px] w-[300px] min-h-[300px] h-[300px]"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import "./Main.style.css";
import selfImage from "../../assets/images/DEVeloper.png";
import reactIcon from "../../assets/icons/technologies/React.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <div className="main-welcome dark:bg-[url('./pixels-neon.gif')] w-full relative">
        <div
          className="absolute top-0 w-screen h-full z-[1] dark:bg-gradient-to-b  
        ex-sm:dark:from-black/20 ex-sm:dark:to-black/40
          md:dark:from-black/40 md:dark:to-black/90
        "
        ></div>
        <div
          className="container dark:text-white  flex
          relative
          z-10
        md:px-4
        ex-sm:flex-col-reverse
        ex-sm:justify-center
        md:justify-between items-center h-[80vh]  mx-auto
        md:flex-row
        lg:px-6
        xl:px-4
      "
        >
          <div
            className="flex flex-col justify-around items-start py-10 
          md:min-h-[200px]
          md:basis-1/2
          ex-sm:gap-10
          ex-sm:min-h-[400px]
          md:gap-6
          2xl:gap-20
        "
          >
            <h2
              className="
            ex-sm:text-center ex-sm:px-2
            ex-sm:text-xl 
            md:text-left
            lg:text-2xl
            md:text-lg
            xl:text-3xl
            2xl:text-4xl
            "
            >
              Hi there 👋, I{`'`}m Sultan.{" "}
              <span className="underline">Ambitious</span>, young, self-taught
              software engineer from{" "}
              <span className="underline">Uzbekistan</span> this is about me.
            </h2>
            <p
              className="text-xl 
            md:text-justify 
          lg:text-base
          md:text-sm
          ex-sm:text-center
          ex-sm:text-base
          xl:text-xl
          2xl:text-2xl
          "
            >
              I specialize in rapidly prototyping software companies and web
              applications. I talk about my journey on{" "}
              <a
                href="https://twitter.com/sultondev"
                className="underline hover:text-cyan-300"
              >
                Twitter
              </a>
              , commit code to{" "}
              <a
                href="https://github.com/sultondev"
                className="underline hover:text-gray-600"
              >
                Github
              </a>
              , and take shots on{" "}
              <a
                href="https://dribbble.com/sultondev"
                className="underline hover:text-pink-500"
              >
                Dribbble
              </a>
              .
            </p>
          </div>
          <div
            className="picture-wrapper relative flex
        md:flex
        ex-sm:hidden
        "
          >
            <div
              className="picture-wrapper__blob 
            w-[700px] h-[700px]
          2xl:w-[700px] 2xl:h-[700px] 
          lg:w-[500px] lg:h-[600px]  
          md:w-[300px] md:h-[400px]
          xl:w-[600px] xl:h-[400px]
          flex justify-center items-center"
            >
              <img
                src={selfImage}
                className="picture-wrapper__img relative z-10 
              2xl:w-[400px] 
              ex-sm:w-[200px]
              md:w-[220px]  
              lg:w-[260px]
              xl:w-[360px]
              "
                alt=""
              />
              <svg
                className=" h-full absolute 2xl:w-[700px]
              lg:w-[520px]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffff"
                  d="M50.6,-68.9C64.3,-59.8,73.1,-43.2,73.3,-27.4C73.5,-11.6,65.1,3.4,58.8,17.9C52.4,32.3,48,46.2,38.6,54.4C29.1,62.6,14.6,65,1.8,62.6C-11,60.2,-22,52.8,-32.9,45.1C-43.7,37.4,-54.3,29.2,-64.2,16.6C-74.1,4.1,-83.3,-13,-80.5,-27.6C-77.7,-42.1,-62.9,-54.2,-47.5,-62.7C-32.1,-71.3,-16.1,-76.2,1.2,-77.9C18.5,-79.6,37,-78,50.6,-68.9Z"
                  transform="translate(100 100)"
                  // className="text-white dark:bg-white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* articels */}
      <div
        className="container mx-auto h-[20vh] 
        my-20
        dark:text-white 
        ex-sm:px-2 ex-sm:my-4 ex-sm:min-h-[300px]
        xl:px-4
      "
      >
        <div className="flex w-full justify-between">
          <h2
            className="
          ex-sm:text-xl 
          ex-sm:text-center 
          ex-sm:font-medium
          md:font-light
          xl:text-2xl xl:font-normal 
          "
          >
            Latest Articles
          </h2>
          <Link
            to="/articles"
            className="
          xl:text-2xl xl:font-normal           
          "
          >
            All articles &gt;&gt;
          </Link>
        </div>
        <ul className="flex flex-col gap-10 justify-between my-10 xl:px-0 ex-sm:px-4">
          <li className="flex gap-4">
            <div className="">
              <img src={reactIcon} alt="" />
            </div>
            <div className="">
              <div className="ex-sm:text-base ex-sm">What is react JS</div>
              <div className="ex-sm:text-xs text-gray-400/90">
                August 19, 2021
              </div>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="">
              <img src={reactIcon} alt="" />
            </div>
            <div className="">
              <div className="ex-sm:text-base ex-sm">What is react JS</div>
              <div className="ex-sm:text-xs text-gray-400/90">
                August 19, 2021
              </div>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="">
              <img src={reactIcon} alt="" />
            </div>
            <div className="">
              <div className="ex-sm:text-base ex-sm">What is react JS</div>
              <div className="ex-sm:text-xs text-gray-400/90">
                August 19, 2021
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- projects --> */}
      <div
        className="container mx-auto 
        ex-sm:px-2
        xl:px-4
        md:px-4 
        "
      >
        <div className="">
          <h3
            className="text-black dark:text-white 
          ex-sm:text-xl 
          ex-sm:text-left 
          ex-sm:font-medium
          md:font-light 
          xl:text-2xl xl:font-normal 
          "
          >
            Projects
          </h3>
        </div>
        <ul className="">
          <li className=""></li>
        </ul>
      </div>
    </main>
  );
};

export default Main;

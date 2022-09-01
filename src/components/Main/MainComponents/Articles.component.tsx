import reactIcon from "../../../assets/icons/technologies/React.svg";
import { Link } from "react-router-dom";

export const Articles = () => {
  return (
    <div
      className="container mx-auto h-[20vh]
        md:my-20
        dark:text-white 
        ex-sm:px-2 ex-sm:my-16 ex-sm:min-h-[300px]
        xl:px-4
      "
    >
      <div className="flex items-center w-full justify-between">
        <h2
          className="
          ex-sm:text-base
          ex-sm:text-center 
          ex-sm:font-medium
          md:font-light
          xl:text-xl xl:font-normal 
          "
        >
          Latest Articles
        </h2>
        <Link
          to="/articles"
          className="
          xl:text-xl xl:font-normal
          animate-pulse
          ex-sm:text-xs

          "
        >
          All articles
          <span className="ml-2 ex-sm:text-xs md:text-lg duration-100">
            &gt;
          </span>
          <span className="ex-sm:text-xs md:text-lg duration-200">&gt;</span>
        </Link>
      </div>
      <ul className="main-articles flex flex-col justify-between my-10 xl:px-0 ex-sm:px-4 relative">
        <li className="main-articles__items before:hidden dark:before:block relative border overflow-hidden border-slate-500 rounded-t-md">
          <span className="main-articles__span hidden dark:block"></span>
          <Link to="/" className="flex  gap-4  py-4 px-4">
            <div className="">
              <img src={reactIcon} alt="" />
            </div>
            <div className="">
              <div className="ex-sm:text-base ex-sm">What is react JS</div>
              <div className="ex-sm:text-xs text-gray-400/90">
                August 19, 2021
              </div>
            </div>
          </Link>
        </li>
        <li className="main-articles__items before:hidden dark:before:block relative border overflow-hidden border-slate-500">
          <span className="main-articles__span hidden dark:block"></span>
          <Link to="/" className="flex  gap-4  py-4 px-4">
            <div className="">
              <img src={reactIcon} alt="" />
            </div>
            <div className="">
              <div className="ex-sm:text-base ex-sm">What is react JS</div>
              <div className="ex-sm:text-xs text-gray-400/90">
                August 19, 2021
              </div>
            </div>
          </Link>
        </li>
        <li className="main-articles__items before:hidden dark:before:block relative border overflow-hidden border-slate-500 rounded-b-md">
          <span className="main-articles__span hidden dark:block"></span>
          <Link to="/" className="flex  gap-4  py-4 px-4">
            <div className="">
              <img src={reactIcon} alt="" />
            </div>
            <div className="">
              <div className="ex-sm:text-base ex-sm">What is react JS</div>
              <div className="ex-sm:text-xs text-gray-400/90">
                August 19, 2021
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

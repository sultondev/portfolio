import reactIcon from "../../../assets/icons/technologies/React.svg";
import { Link } from "react-router-dom";

export const Articles = () => {
  return (
    <section className="h-[70vh] min-h-[500px] flex justify-center items-center">
      <div
        className="container mx-auto h-[20vh]
        max-w-[900px]
      dark:text-white 
        md:my-20
        ex-sm:px-2 ex-sm:my-16 ex-sm:min-h-[300px]
        xl:px-4
      "
      >
        <h3 className="relative flex items-center md:text-xl gap-4">
          <div className="">
            <span className="text-black dark:text-[#64ffda]">02.</span>{" "}
            <span className="font-bold md:text-2xl">LatestArticles</span>
          </div>
          <span className="w-1/3 h-[1px] bg-gray-500"></span>
        </h3>
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
        <Link
          to="/articles"
          className="
          xl:text-xl xl:font-normal
          animate-pulse
          ex-sm:text-xs

          "
        >
          More articles
          <span className="ml-2 ex-sm:text-xs md:text-lg duration-100">
            &gt;
          </span>
          <span className="ex-sm:text-xs md:text-lg duration-200">&gt;</span>
        </Link>
      </div>
    </section>
  );
};

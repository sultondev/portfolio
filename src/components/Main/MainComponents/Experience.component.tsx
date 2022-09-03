import { selectedCompanyStateData } from "../../../recoil/atoms.state";
import { useRecoilState } from "recoil";
import ExperienceData from "../../../data/components/Experience/Experience.data";
import { ExperienceProps } from "../../../typing/types/Experience.type";
import { DotArrow } from "../../Templates/DotArrow/DotArrow.template";

export const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useRecoilState<ExperienceProps>(
    selectedCompanyStateData
  );

  return (
    <section className="experience flex justify-center items-start text-black dark:text-white min-h-[400px]">
      <div className="container mx-auto max-w-[700px] md:px-2 ex-sm:px-4">
        <h3 className="relative flex items-center md:text-xl gap-4">
          <div className="">
            <span className="text-black dark:text-[#64ffda]">02.</span>{" "}
            <span className="font-bold md:text-2xl">Where I’ve Worked</span>
          </div>
          <span className="w-1/3 h-[1px] bg-gray-500"></span>
        </h3>
        <div className="flex md:flex-row ex-sm:items-center md:items-start ex-sm:flex-col md:gap-4 ex-sm:gap-6 my-10">
          <ul
            className={`experience-list min-w-[180px] h-fit flex flex-col relative before:w-[2px]`}
            style={
              {
                "--active-top": `${caclTop(
                  ExperienceData.length,
                  selectedCompany.id - 1
                )}%`,
                "--before-height": `${beforeHeight(ExperienceData.length)}%`,
              } as any
            }
          >
            {ExperienceData &&
              ExperienceData.map((data: ExperienceProps, index: number) => {
                const { companyName, id } = data;
                const activeRes = selectedCompany.id - 1 === index;
                return (
                  <li
                    key={companyName + id}
                    className="experience-list__item md:text-xs ex-sm:text-base"
                  >
                    <button
                      className={`experience-list__btn dark:text-[#8892b0] ${
                        activeRes ? "-active" : " "
                      } dark: hover:bg-[#15213E] hover:text-[#64ffda] py-2 px-4`}
                      onClick={() => {
                        setSelectedCompany(ExperienceData[index]);
                      }}
                    >
                      {companyName}
                    </button>
                  </li>
                );
              })}
          </ul>
          <div className="experience-data">
            <h3 className="experience-data__header md:text-base">
              <span className="experience-data__header-role">
                {selectedCompany.jobRole}
              </span>{" "}
              <span className="experience-data__header-at">@</span>{" "}
              <a
                href={`${selectedCompany.linkForCompany}`}
                className="experience-data__header-link"
                target={"_blank"}
                rel="noreferrer"
              >
                {selectedCompany.companyName}{" "}
              </a>
            </h3>
            <div className="flex gap-3 items-center">
              <p className="experience-data__start md:text-xs">
                {selectedCompany.startDate}
              </p>
              <span> - </span>
              <p className="experience-data__end md:text-xs">
                {selectedCompany.endDate}
              </p>
            </div>
            {/* resps -> responsibilities */}
            <div className="experience-resps">
              {selectedCompany.responsibilities.map(
                (data: string, index: number) => {
                  return (
                    <p
                      className="experience-data__resps items-start flex gap-4 py-2 md:text-justify md:text-sm ex-sm:text-left"
                      key={data}
                    >
                      <span className="flex justify-start pt-1 md:text-xl">
                        <DotArrow />
                      </span>
                      {data}
                    </p>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function caclTop(length: number, orderIndx: number) {
  console.log((100 / length) * orderIndx);
  return (100 / length) * orderIndx;
}

function beforeHeight(length: number) {
  return 100 / length;
}

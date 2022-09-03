import { atom } from "recoil";
import ExperienceData from "../data/components/Experience/Experience.data";
import { ExperienceProps } from "../typing/types/Experience.type";

export const navBarDefaultStateData = atom<string>({
  key: "navBarDefaultStateData",
  default: "-right-[100%] -left-[100%] bottom-0",
});

export const loadingSpinnerStateData = atom<boolean>({
  key: "loadingSpinnerStateData",
  default: true,
});

export const selectedCompanyStateData = atom<ExperienceProps>({
  key: "selectedCompanyStateData",
  default: ExperienceData[0],
});

import { atom } from "recoil";
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner.component";

export const navBarDefaultStateData = atom<string>({
  key: "navBarDefaultStateData",
  default: "-right-[100%] -left-[100%] bottom-0",
});

export const loadingSpinnerStateData = atom<boolean>({
  key: "loadingSpinnerStateData",
  default: true,
});

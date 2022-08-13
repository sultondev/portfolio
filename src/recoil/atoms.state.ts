import { atom } from "recoil";

export const navBarDefaultStateData = atom<string>({
  key: "navBarDefaultStateData",
  default: "-right-[100%] -left-[100%] bottom-0",
});

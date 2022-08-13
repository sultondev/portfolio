import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
const useDarkMode = (): [string, Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = useMemo(() => {
    return theme === "dark" ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;

    localStorage.setItem("theme", theme);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);
  return [colorTheme, setTheme];
};

export default useDarkMode;

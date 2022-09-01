import { useMemo } from "react";
import useDarkMode from "../../hook/useDarkMode.hook";
const ThemeChanger = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const imgContainer = useMemo(() => {
    return renderingOptions(colorTheme === "light");
  }, [colorTheme]);
  return (
    <section>
      <button
        className="text-black dark:text-white p-2 rounded-full bg-indigo-600"
        onClick={() => setTheme(colorTheme)}
      >
        {imgContainer}
      </button>
    </section>
  );
};

export default ThemeChanger;

function renderingOptions(shouldRender: boolean) {
  if (shouldRender) {
    return (
      <svg
        className="w-6 h-6 text-inherit"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    );
  }

  return (
    <svg
      className="w-6 h-6 text-black dark:text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  );
}

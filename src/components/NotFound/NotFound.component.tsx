import "./NotFound.style.css";

export const NotFound = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div
        title="404"
        className="glitch notFound text-6xl text-black/80 dark:text-white"
      >
        404 - Not found
      </div>
    </div>
  );
};

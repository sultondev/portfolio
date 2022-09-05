export const Contacts = () => {
  return (
    <section className="contacts">
      <div
        className="container mx-auto 
        ex-sm:px-2
        xl:px-4
        md:px-4
        max-w-[600px]
        "
      >
        <div className="flex flex-col gap-10 min-h-[400px] items-center text-center">
          <h3 className="relative flex justify-center items-center dark:text-[#64ffda] md:text-xl ex-sm:text-base gap-4">
            <span className="">04.</span>{" "}
            <span className="font-normal md:text-xl">What is next?</span>
          </h3>
          <h4 className="text-4xl font-bold text-black dark:text-[#ccd6f6]">
            Get In Touch
          </h4>
          <p className="text-lg text-black dark:text-[#a8b2d1]">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <a
            className="text-black hover:bg-black hover:text-white dark:text-[#64ffda] transition-all py-4 px-6 border border-black dark:border-[#64ffda] rounded-md
          dark:hover:text-black dark:hover:bg-[#64ffda]
          "
            href="mailto:sultondeveloper@gmail.com"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

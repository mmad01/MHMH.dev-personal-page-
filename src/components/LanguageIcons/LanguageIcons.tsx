function LanguageIcons() {
  return (
    <div className="bg-[#091427] opacity-60 w-6/13 sm:w-10/12 md:w-full h-[80px] sm:h-[150px] mt-30 flex justify-between items-center transition-all duration-300">
      <img
        src="/icons/JS.png"
        alt="javascript"
        className=" h-[55px] sm:h-[70px] opacity-40"
      />
      <img
        src="/icons/ts.png"
        alt="typescript"
        className=" h-[55px] sm:h-[70px] opacity-40"
      />
      <img
        src="/icons/react.png"
        alt="React"
        className=" h-[45px] sm:h-[60px] opacity-40"
      />
      <img
        src="/icons/nextjs.png"
        alt="Nextjs"
        className=" h-[35px] sm:h-[50px] opacity-40"
      />
    </div>
  );
}

export default LanguageIcons;

function ServiceCategories() {
  return (
    <div className="relative w-40 sm:w-11/10 lg:w-auto">
      <div className="bg-[#101B2E] opacity-30 w-full absolute h-[80px] sm:h-[184px] rounded-xl z-0"></div>
      <div className="rounded-xl  border-1 border-[#282f3b]  h-[80px] sm:h-[184px] flex items-center justify-between ">
        <svg
          className="w-[20px] sm:w-[44px] bo dark:text-[#F8E7A1] ml-10 relative right-7 sm:right-0 z-10 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        <div className=" w-full h-[104px] flex justify-end mr-2">
          <div className=" w-7/10 flex flex-col mr-10">
            <h1 className="text-[10px] sm:text-[22px] lg:text-[40px] w-6/2 sm:w-auto relative top-9 sm:top-0 left-2 sm:left-0 font-[Yekan-Bold] z-10 ">
              طراحی وب سایت
            </h1>
            <h2 className="opacity-50 text-[8px] sm:text-[16px] lg:text-[24px] w-5/2 sm:w-auto font-[Yekan-Fat] relative top-10 sm:top-10 lg:top-0 left-5 sm:left-0">
              +80 پروژه
            </h2>
          </div>
          <img
            src="/icons/webdisicon.svg"
            alt="webdisicon"
            className="mr-[32px] w-4/12 sm:w-auto relative left-3/12 sm:left-0"
          />
        </div>
      </div>
    </div>
  );
}
export default ServiceCategories
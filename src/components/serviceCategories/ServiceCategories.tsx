function ServiceCategories() {
  return (
    <div className="relative w-15/20 lg:w-auto">
      <div className="bg-[#101B2E] opacity-30 w-full absolute h-[184px] rounded-xl z-0"></div>
      <div className="rounded-xl  border-1 border-[#282f3b]  h-[184px] flex items-center justify-between ">
        <svg
          className="w-[44px] h-[42px bo dark:text-[#F8E7A1] ml-10 z-10 "
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
            <h1 className="text-[26px] lg:text-[40px] font-[Yekan-Bold] z-10">
              طراحی وب سایت
            </h1>
            <h2 className="opacity-50 text-[16px] lg:text-[24px] font-[Yekan-Fat]">
              +80 پروژه
            </h2>
          </div>
          <img
            src="/icons/webdisicon.svg"
            alt="webdisicon"
            className="mr-[32px]"
          />
        </div>
      </div>
    </div>
  );
}
export default ServiceCategories
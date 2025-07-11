import type { ServiceCategoriesTypes } from "../../types";

function ServiceCategories({
  title,
  description,
  Serimgurl,
}: ServiceCategoriesTypes) {
  return (
    <div className="relative w-40 sm:w-11/10 lg:w-auto">
      <div className="bg-[#101B2E] opacity-30 w-full absolute h-[80px] sm:h-[184px] rounded-xl z-0"></div>
      <div className="rounded-xl border border-[#282f3b] h-[80px] sm:h-[184px] flex items-center justify-between relative z-10 px-4 sm:px-8">
        <svg
          className="w-[20px] sm:w-[44px] text-[#F8E7A1]"
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

        <div className="flex w-full h-full items-center justify-end gap-4">
          <div className="flex flex-col justify-center w-7/12">
            <h1 className="text-[10px] sm:text-[22px] lg:text-[40px] font-[Yekan-Bold]">
              {title}
            </h1>
            <h2 className="opacity-50 text-[8px] sm:text-[16px] lg:text-[24px] font-[Yekan-Fat]">
              {description}
            </h2>
          </div>

          <img
            src={Serimgurl}
            alt="webdisicon"
            className="w-4/12 sm:w-[104px] sm:h-[104px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCategories;

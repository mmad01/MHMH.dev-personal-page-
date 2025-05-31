import type { Navclick } from "../../types";

function Navbar({
  onServicesClick,
  onPortfolioClick,
  onContactUsClick,
  onMainClick,
}: Navclick) {
  return (
    <div className="h-[128px] fixed flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#4f349f] via-[#030e21] to-[#18416b] mt-5">
      <div className="h-[48px] w-10/12 flex items-center justify-between">
        <div className="w-[500px] flex flex-row-reverse justify-between text-[#FFFFFF] font-[Yekan-Bold]">
          <button
            onClick={onServicesClick}
            className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110"
          >
            خدمات
          </button>
          <button
            onClick={onPortfolioClick}
            className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110"
          >
            نمونه کار ها
          </button>
          <button
            onClick={onContactUsClick}
            className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110"
          >
            ارتباط
          </button>
          <button className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110">
            درباره
          </button>
        </div>
        <div className="flex items-center">
          <button className="font-[Yekan-Bold] text-3xl text-[#8a2be2] mr-1">
            *
          </button>
          <button
            onClick={onMainClick}
            className="px-4 py-2 border-2 border-[#8a2be2] rounded-md font-[Yekan-Fat] text-3xl text-white hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110"
          >
            محمدمِهدی
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

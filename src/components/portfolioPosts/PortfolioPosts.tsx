import type { DataTypes } from "../../types";

function PortfolioPosts({ name , description , imgurl , imgalt }:DataTypes) {
  return (
    <div className="bg-[#101B2E] w-[80px] sm:w-[160px] md:w-[200px] lg:w-[250px] xl:w-[200px] 2xl:w-[260px] h-[125px] sm:h-[184px] md:h-[234px] lg:h-[284px] rounded-xl flex flex-col mb-10 sm:mb-20 mr-8 sm:mr-20 cursor-pointer hover:bg-[#222f43] active:bg-[#192538] text-end">
      <img
        src={imgurl}
        alt={imgalt}
        className="mt-2 w-[80px] h-[60px] sm:w-[160px] sm:h-[121px] md:w-[200px] md:h-[151px] lg:w-[250px] lg:h-[189px] xl:w-[200px] xl:h-[151px] 2xl:w-[260px] 2xl:h-[196px]"
      />
      <div className=" w-full h-20  mt-3 font-[Yekan-Fat] flex flex-col justify-center items-end">
        <h1 className="w-1/1 sm:w-auto relative left-5 sm:left-0 text-[8px] sm:text-[13px] md:text-[17px] lg:text-[22px] xl:text-end text-white mr-5">
          {name}
        </h1>
        <h1 className="relative left-5 sm:left-0 text-[#868490] text-[8px] sm:text-[12px] md:text-[16px] lg:text-[21px] mr-5">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default PortfolioPosts;

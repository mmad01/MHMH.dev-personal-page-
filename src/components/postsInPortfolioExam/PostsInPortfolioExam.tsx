function PostsInPortfolioExam() {
  return (
    <div className="bg-[#101B2E] w-[80px] sm:w-[160px] md:w-[200px] lg:w-[250px] xl:w-[200px] 2xl:w-[260px] h-[125px] sm:h-[184px] md:h-[234px] lg:h-[284px] rounded-xl flex flex-col mb-10 sm:mb-20 mr-8 sm:mr-20 cursor-pointer hover:bg-[#222f43] active:bg-[#192538] text-end">
      <img src="/images/imagepost.svg" alt="post image" className="mt-2" />
      <div className=" w-full h-20  mt-3 font-[Yekan-Fat] flex flex-col justify-center items-end">
        <h1 className="w-1/1 sm:w-auto relative left-5 sm:left-0 text-[8px] sm:text-[13px] md:text-[17px] lg:text-[22px] xl:text-end text-white mr-5">
          اپلیکیشن موبایل استریمینگ
        </h1>
        <h1 className="relative left-5 sm:left-0 text-[#868490] text-[8px] sm:text-[12px] md:text-[16px] lg:text-[21px] mr-5">
          اپلیکیشن موبایل
        </h1>
      </div>
    </div>
  );
}

export default PostsInPortfolioExam;

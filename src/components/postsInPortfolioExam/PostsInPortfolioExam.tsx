function PostsInPortfolioExam() {
  return (
    <div className="bg-[#101B2E] w-[160px] md:w-[200px] lg:w-[250px] h-[184px] md:h-[234px] lg:h-[284px] rounded-xl flex flex-col mb-20 mr-20 cursor-pointer hover:bg-[#222f43] active:bg-[#192538]">
      <img src="/images/imagepost.svg" alt="post image" className="mt-2" />
      <div className=" w-full h-20  mt-3 font-[Yekan-Fat] flex flex-col justify-center items-end">
        <h1 className="text-[13px] md:text-[17px] lg:text-[22px] text-white mr-5">
          اپلیکیشن موبایل استریمینگ
        </h1>
        <h1 className="text-[#868490] text-[12px] md:text-[16px] lg:text-[21px] mr-5">
          اپلیکیشن موبایل
        </h1>
      </div>
    </div>
  );
}

export default PostsInPortfolioExam;

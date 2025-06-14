import PostsInPortfolio from "../postsInPortfolio/PostsInPortfolio";

function PortfolioExam() {
  return (
    <div className="mt-20 flex justify-center w-full relative">
      <div className="flex justify-center bg-[#101B2E] opacity-30 w-10/12 h-[993px] rounded-xl absolute z-0"></div>
      <div className="z-10 w-10/12 h-[993px] flex flex-col items-center">
        <div className="flex justify-between items-center h-[93px]  mt-10 mb-10 w-11/12">
          <h1 className="text-[#F8E7A1] text-[20px]">🖚 همه را ببینید</h1>
          <h1 className="text-white text-[62px] font-[Yekan-Bold]">
            نمونه کارهای ما
          </h1>
        </div>
        <div className=" w-11/12 h-195 flex flex-wrap flex-row-reverse justify-between">
          <PostsInPortfolio />
          <PostsInPortfolio />
          <PostsInPortfolio />
          <PostsInPortfolio />
          <PostsInPortfolio />
          <PostsInPortfolio />
        </div>
      </div>
    </div>
  );
}

export default PortfolioExam;

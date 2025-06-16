import { Link } from "react-router-dom";
import PostsInPortfolioExam from "../../components/postsInPortfolioExam/PostsInPortfolioExam";

function Portfolio() {
  return (
    <div className="flex items-center flex-col">
      <Link
        to="/"
        className="text-white  text-2xl mt-10 h-20 w-1/12 bg-[#091936] hover:border-2 active:border-black cursor-pointer flex items-center justify-center rounded-4xl font-[Yekan-Fat] "
      >
        <button>بازگشت</button>
      </Link>
      <h1 className="text-white text-6xl mt-10 h-40 w-10/12 bg-[#091936] flex items-center justify-center rounded-4xl font-[Yekan-Fat] ">
        همه پروژه ها
      </h1>
      <div className="w-full flex justify-center mt-20">
        <div className="bg-[#071225] w-10/12 flex flex-wrap justify-center p-10 rounded-4xl">
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
          <PostsInPortfolioExam />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

import { Link } from "react-router-dom";
import PortfolioPosts from "../../components/portfolioPosts/PortfolioPosts";
import { data } from "../../data";

function Portfolio() {
  return (
    <div className="flex items-center flex-col">
      <Link
        to="/"
        className="text-white text-sm md:text-md lg:text-lg xl:text-xl mt-10 h-10 lg:h-20 w-3/12 lg:w-1/12 bg-[#091936] hover:border-2 active:border-black cursor-pointer flex items-center justify-center rounded-4xl font-[Yekan-Fat] "
      >
        <button>بازگشت</button>
      </Link>
      <h1 className="text-white text-xl lg:text-2xl mt-10 h-20 w-10/12 bg-[#091936] flex items-center justify-center rounded-4xl font-[Yekan-Fat] ">
        همه پروژه ها
      </h1>
      <div className="w-full flex justify-center mt-20">
        <div className="bg-[#071225] w-9/10 sm:w-10/12 rounded-4xl">
          <div className="relative left-3 sm:left-0 w-1/1 flex flex-wrap justify-center p-10">
            {data.map((item) => (
              <PortfolioPosts
                id={item.id}
                name={item.name}
                description={item.description}
                imgurl={item.imgurl}
                imgalt={item.imgalt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

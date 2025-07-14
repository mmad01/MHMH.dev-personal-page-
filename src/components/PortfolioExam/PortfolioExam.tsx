import { Link } from "react-router-dom";
import PortfolioPosts from "../portfolioPosts/PortfolioPosts";
import { data } from "../../data";

function PortfolioExam() {
  return (
    <div className="mt-30 sm:mt-30 flex justify-center w-9/17 sm:w-14/17 md:w-1/1 lg:h-330 xl:h-auto relative right-8 sm:right-0  transition-all duration-300">
      <div className="flex justify-center bg-[#101B2E] opacity-30 w-10/12 h-[450px] sm:h-[930px] md:h-[1060px] lg:h-[1220px] xl:h-[900px] rounded-xl absolute left-10 md:left-auto z-0"></div>
      <div className="z-10 w-10/12 h-auto flex flex-col items-center relative bottom-13 sm:bottom-0">
        <div className="flex justify-between items-center h-[93px]  mt-10 mb-10 w-11/12 transition-all duration-300">
          <Link to="/Portfolio">
            <h1 className="text-[#F8E7A1] text-[10px] sm:text-[16px] lg:text-[20px]">
              👈 همه را ببینید
            </h1>
          </Link>
          <h1 className="text-white text-[20px] sm:text-[42px] lg:text-[62px] font-[Yekan-Bold]">
            نمونه کارهای ما
          </h1>
        </div>
        <div className="lg:w-11/12 h-95 sm:h-195 flex flex-wrap flex-row-reverse justify-between relative left-4 sm:left-10">
          <PortfolioPosts
            key={data[data.length - 1].id}
            id={data[data.length - 1].id}
            name={data[data.length - 1].name}
            description={data[data.length - 1].description}
            imgurl={data[data.length - 1].imgurl}
            imgalt={data[data.length - 1].imgalt}
          />
          <PortfolioPosts
            key={data[data.length - 2].id}
            id={data[data.length - 2].id}
            name={data[data.length - 2].name}
            description={data[data.length - 2].description}
            imgurl={data[data.length - 2].imgurl}
            imgalt={data[data.length - 2].imgalt}
          />
          <PortfolioPosts
            key={data[data.length - 3].id}
            id={data[data.length - 3].id}
            name={data[data.length - 3].name}
            description={data[data.length - 3].description}
            imgurl={data[data.length - 3].imgurl}
            imgalt={data[data.length - 3].imgalt}
          />
          <PortfolioPosts
            key={data[data.length - 4].id}
            id={data[data.length - 4].id}
            name={data[data.length - 4].name}
            description={data[data.length - 4].description}
            imgurl={data[data.length - 4].imgurl}
            imgalt={data[data.length - 4].imgalt}
          />
          <PortfolioPosts
            key={data[data.length - 5].id}
            id={data[data.length - 5].id}
            name={data[data.length - 5].name}
            description={data[data.length - 5].description}
            imgurl={data[data.length - 5].imgurl}
            imgalt={data[data.length - 5].imgalt}
          />
          <PortfolioPosts
            key={data[data.length - 6].id}
            id={data[data.length - 6].id}
            name={data[data.length - 6].name}
            description={data[data.length - 6].description}
            imgurl={data[data.length - 6].imgurl}
            imgalt={data[data.length - 6].imgalt}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioExam;

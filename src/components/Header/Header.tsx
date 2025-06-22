function Header() {
  return (
    <div className="mt-[160px] h-auto flex justify-center relative left-10 md:left-6 lg:left-[-10px] xl:right-0">
      <div className="flex items-end justify-between w-10/12 flex-col-reverse lg:flex-row lg:justify-between">
        <div className="flex justify-between text-right mt-40 mr-20 sm:mr-0 relative right-36 w-10/12 md:right-0 md:w-1/1 lg:bottom-23 xl:bottom-0 lg:flex-col lg:justify-between lg:w-1.5/12 lg:mt-0 transition-all duration-300">
          <div className="flex flex-col w-9/11  h-[192px] mr-12">
            <h2 className="font-[Yekan-Bold] text-[24px] text-[#868490] text-right">
              سابقه کاری
              <br />
              {"(سال)"}
            </h2>
            <h1 className="font-[Yekan-Bold] text-[72px] text-[#FFFFFF]">+3</h1>
          </div>

          <div className="flex flex-col w-9/11  h-[192px] mr-12">
            <h2 className="font-[Yekan-Bold] text-[24px] text-[#868490] text-right">
              پروژه های انجام شده
            </h2>
            <h1 className="font-[Yekan-Bold] text-[72px] text-[#FFFFFF] md:mt-10 lg:mt-0">
              +220
            </h1>
          </div>

          <div className="flex flex-col w-9/11  h-[192px] mr-12 relative right-10 lg:right-0">
            <h2 className="font-[Yekan-Bold] text-[24px] text-[#868490] text-right">
              کلاینت
            </h2>
            <h1 className="font-[Yekan-Bold] text-[72px] text-[#FFFFFF] mt-9 md:mt-10 lg:mt-0">
              +60
            </h1>
          </div>
        </div>

        <div className="flex w-full h-screen justify-center relative left-[-70px] sm:left-[-30px] md:left-10 lg:contents transition-all duration-300">
          <img
            src="/images/prof.jpg"
            alt="profile"
            className="w-4/12 h-[655.31px] object-cover relative lg:bottom-15 xl:bottom-0"
          />

          <div className="flex justify-start items-end flex-col relative  md:right-0 w-110 lg:w-auto">
            <h2 className="text-[#868490] text-[23px] font-[Yekan-Bold] mb-5 relative right-40 md:right-30 lg:right-0 md:text-[47px]">
              برنامه نویس فرانت
            </h2>
            <h1 className="text-[#FFFFFF] text-[40px] relative right-40 md:right-14 md:w-10/12 md:text-[70px] lg:text-end lg:right-0 lg:w-1/1 font-[Yekan-Bold] transition-all duration-300">
              محمدمِهدی عظیمی
            </h1>
            <div className="w-[183px] h-[8px] bg-[#F8E7A1] mt-20 mb-40 relative right-40 lg:right-0 lg:mb-20"></div>
            <p className=" text-[#868490] font-[Yekan-Medium] text-[20px] w-9/16 relative right-40 bottom-35 lg:bottom-0 md:w-10/16 lg:w-auto lg:right-0 text-end xl:w-9/12 transition-all duration-300">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

function Header() {
  return (
    <div className="mt-[160px] h-auto flex justify-center">
      <div className="flex justify-between w-10/12">
        <div className="w-1.5/12 flex flex-col justify-between text-right">
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
            <h1 className="font-[Yekan-Bold] text-[72px] text-[#FFFFFF]">
              +220
            </h1>
          </div>

          <div className="flex flex-col w-9/11  h-[192px] mr-12">
            <h2 className="font-[Yekan-Bold] text-[24px] text-[#868490] text-right">
              کلاینت
            </h2>
            <h1 className="font-[Yekan-Bold] text-[72px] text-[#FFFFFF]">
              +60
            </h1>
          </div>
        </div>

        <img src="/images/prof.svg" alt="profile" />

        <div className="w-[387px] flex flex-col justify-start items-end">
          <h2 className="text-[#868490] text-[47px] font-[Yekan-Bold] mb-5 ">
            برنامه نویس فرانت
          </h2>
          <h1 className=" text-[#FFFFFF] text-[70px] text-end w-9/6 font-[Yekan-Bold]">
            محمدمِهدی عظیمی
          </h1>
          <div className="w-[183px] h-[8px] bg-[#F8E7A1] mt-20 mb-20"></div>
          <p className="text-[20px] text-[#868490] font-[Yekan-Medium] text-end">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;

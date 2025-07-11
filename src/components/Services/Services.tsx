import ServiceCategories from "../serviceCategories/ServiceCategories";

function Services() {
  return (
    <div className="mt-20 sm:mt-30 flex items-center justify-center  text-white text-end relative left-[-60px] sm:left-[-40px] md:left-0 lg:right-0 transition-all duration-300">
      <div className="w-10/12 sm:w-10/12 h-[365px] sm:h-[608px] flex">
        <div className="w-3/12 sm:w-9/12 flex flex-col justify-between mr-16 lg:mr-10 ">
          <ServiceCategories
            title={"ری‌اکت"}
            description={"'+10'پروژه"}
            Serimgurl="/images/react-logo.svg"
          />
          <ServiceCategories
            title={"نکست‌جی‌اس"}
            description={"'+4'پروژه"}
            Serimgurl="/images/NextjsLogo.jpg"
          />
          <ServiceCategories
            title={"نود‌جی‌اس"}
            description={"'0'پروژه"}
            Serimgurl="/images/node-js-logo.png"
          />
        </div>
        <div className=" w-6/12 lg:w-4/12  relative right-15 sm:right-0 transition-all duration-300">
          <h1 className="text-[20px] md:text-[25px] relative right-40 sm:right-14 md:right-0 lg:text-[30px] xl:text-[62px] font-[Yekan-Bold]">
            دسته‌بندی سرویس ها
          </h1>
          <p className="mt-5 text-[15px] sm:text-[20px] w-6/12 sm:w-9/12 md:w-10/12 relative md:left-10 lg:text-[23px] font-[Yekan-Medium] ">
            تو این بخش می‌تونی دسته‌بندی کامل خدمات من رو ببینی؛ از طراحی رابط
            کاربری و تجربه کاربری تا توسعه فرانت‌اند با تکنولوژی‌های روز مثل
            <span dir="ltr"> React و NextJs</span>. هر سرویس با تمرکز روی کیفیت
            و رضایت شما انجام میشه تا بهترین نتیجه برای پروژه‌هات به دست بیاد و
            همیشه پیشرفت کنیم.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

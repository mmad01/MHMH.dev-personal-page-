function ContactUs() {
  return (
    <div className="flex justify-center xl:mb-30 2xl:mb-0 transition-all duration-300 relative left-18 md:left-20 xl:left-15 top-[-300px] sm:top-35 md:top-30 lg:top-0 lg:left-0">
      <div className="mt-0 sm:mt-40 w-10/12 flex relative h-40 sm:h-147">
        <div className=" lg:mr-20 xl:mr-0 flex flex-col justify-between items-end transition-all duration-300 h-[128px] sm:h-auto">
          <h1 className="font-[Yekan-Bold] text-[11px] sm:text-[20px] md:text-[22px] lg:text-[30px] xl:text-[40px] xl2:text-[50px] text-white text-left xl:text-right w-2/10 sm:w-4/10 xl:w-6/10 relative right-115 sm:right-40 md:right-20 lg:right-[-80px] xl:right-0 bottom-33 sm:bottom-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </h1>
          <h2 className="text-[#F8E7A1] text-[10px] sm:text-[15px] md:text-[17px] lg:text-[23px] xl:text-[20px] relative right-128 sm:right-75 md:right-50 lg:right-0 xl:right-0 bottom-30 sm:bottom-57 md:bottom-30 lg:bottom-0 xl:bottom-0 font-[Yekan-Bold]">
            👈 با ما در ارتباط باشید
          </h2>
        </div>
        <img
          src="/images/imageContact.svg"
          alt="imageContact"
          className="lg:ml-20 xl:ml-0 absolute bottom-22 sm:bottom-32 md:bottom-27 lg:bottom-[-13px] left-[-100px] sm:left-[-90px] xl:left-[-100px] 2xl:left-[-16px] w-3/15 sm:w-7/15 object-cover h-50 sm:h-150 lg:w-125 xl:w-auto transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default ContactUs;

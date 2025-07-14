function ContactUs() {
  return (
    <div className="w-[360px] sm:w-[640px] md:w-auto flex justify-center  transition-all duration-300 top-[-300px] sm:top-35 md:top-30 lg:top-0">
      <div className="mt-0 sm:mt-40 h-[150px] sm:h-auto  w-10/12 flex flex-row-reverse justify-between`">
        <div className="w-[170px] sm:w-[700px] h-[150px] sm:h-auto flex flex-col  justify-between items-end transition-all duration-300">
          <h1 className="font-[Yekan-Bold] text-[20px] sm:text-[55px] md:text-[60px] lg:text-[70px] xl:text-[90px] 2xl:text-[100px] text-white text-end xl:text-right w-1/1">
            آیا می‌خواهید محصولی عالی و تأثیرگذار تولید کنید؟
          </h1>
          <button className="text-[#F8E7A1] text-[10px] sm:text-[15px] md:text-[17px] lg:text-[23px] xl:text-[20px] font-[Yekan-Bold] cursor-pointer active:bg-gradient-to-br from-[#051838] to-[#133a7e]">
            👈 با ما در ارتباط باشید
          </button>
        </div>
        <img
          src="/images/imageContact.svg"
          alt="imageContact"
          className="w-1/2 sm:w-7/15 object-cover sm:h-150 lg:w-125 xl:w-auto transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default ContactUs;

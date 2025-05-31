function ContactUs() {
  return (
    <div className="flex justify-center">
      <div className=" mt-40 w-10/12 flex flex-row-reverse relative h-147">
        <div className="flex flex-col justify-between items-end">
          <h1 className="font-[Yekan-Bold] text-[50px] text-white text-right w-6/10 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </h1>
          <h2 className="text-[#F8E7A1] text-[20px] font-[Yekan-Bold]">
            🖚 با ما در ارتباط باشید
          </h2>
        </div>
        <img
          src="/images/imageContact.svg"
          alt="imageContact"
          className="absolute left-0"
        />
      </div>
    </div>
  );
}

export default ContactUs
import ServiceCategories from "../serviceCategories/ServiceCategories";

function Services() {
  return (
    <div className="mt-30 flex items-center justify-center  text-white text-end">
      <div className="w-10/12 h-[608px]  flex">
        <div className=" w-8/12 flex flex-col justify-between mr-10 ">
          <ServiceCategories />
          <ServiceCategories />
          <ServiceCategories />
        </div>
        <div className=" w-4/12  ">
          <h1 className="text-[62px] font-[Yekan-Bold]">دسته‌بندی سرویس ها</h1>
          <p className="mt-5 text-[23px] font-[Yekan-Medium]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

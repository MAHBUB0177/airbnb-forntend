import React from "react";
import { categoryList, getwayList } from "../common/getwaylist";
import Slider from "react-slick";

const FooterGetway = () => {
  const settings = {
    dots: false,
    infinite: false,
    // speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-50 md:px-10 lg:px-20 pb-5 mt-8">
      <p className="text-xl font-semibold pb-5 pt-5 px-2 md:px-0">
        {" "}
        Inspiration for future getaways
      </p>
      {/* //for large device */}
      <div className="hidden xl:block">
        <div className=" flex justify-start gap-5 border-b-[1px] border-slate-300 pb-3">
          {categoryList.map((item, i) => (
            <p key={i}>{item?.title}</p>
          ))}
        </div>
      </div>

      {/* //for small device */}
      <div className="xl:hidden px-8 md:px-0 gap-8 border-b-[1px] border-slate-300 pb-3 ">
        <Slider {...settings}>
          {categoryList?.map((item, i) => (
            <>
              <div className="flex justify-start  gap-0 pt-1" key={i}>
                <div>
                  <p className="text-sm text-#FFFFFF mt-1">{item.title}</p>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>

      <div className="px-2 mx-auto justify-center items-center md:justify-start md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-4 gap-6">
        {getwayList.map((item, i) => (
          <div className="" key={i}>
            <p className="font-bold text-sm">{item?.title}</p>
            <p className="text-textprimary text-sm">{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterGetway;

import React, { useState } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CardContinue from "./card-continue/Card_Continue";
import movieContinue from "../data/dataContinue";
function ContinueMovie() {
  const [data,setData] =useState(movieContinue)
  return (
    <div className=" h-[360px]  mx-40 mt-10">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper h-[100%]"
        slidesPerView={5}
        spaceBetween={30}
      >
        {data.map((item, indexx) => {
          return (
            <SwiperSlide className="p-2 " key={indexx}>
              <CardContinue data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ContinueMovie;

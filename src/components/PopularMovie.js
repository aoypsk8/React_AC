import React, { useState } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import moviePopular from "../data/dataPopular";
import CardPopular from "./card-popular/Card_Popular";
function PopularMovie() {
  const [data,setData] =useState(moviePopular)
  return (
    <div className=" h-[360px] w- mx-40 mt-10">
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
              <CardPopular data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PopularMovie;

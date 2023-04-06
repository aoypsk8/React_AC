import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CardCategory from "./card-category/Card_Category";
import dc from "../Image/images-category/dc.jpg";
import disney from "../Image/images-category/disney.jpg";
import marvel from "../Image/images-category/marvel.jpg";
import pixar from "../Image/images-category/pixar.png";
import star from "../Image/images-category/star.jpg";
import netflix1 from "../Image/images-category/netflix1.jpg";
import colombi from "../Image/images-category/colombi.jpg";
import dm from "../Image/images-category/dm.png";
import fox from "../Image/images-category/fox.png";
import un from "../Image/images-category/un.jpg";
import wb from "../Image/images-category/wb.jpg";
export default function Category() {
  return (
    <div className="mx-10 h-32 mt-10  md:mx-40 ">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper h-[100%]"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1250: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: dc }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: disney }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: marvel }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: pixar }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: star }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: netflix1 }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: colombi }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: dm }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: fox }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: un }} />
        </SwiperSlide>
        <SwiperSlide className="md:p-2 ">
          <CardCategory data={{ imgSrc: wb }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

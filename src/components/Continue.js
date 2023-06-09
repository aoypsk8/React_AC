import React, { useState } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect } from "react";
import CardContinue from "./Cards/Card_Continue";
function ContinueMovie() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b19963e9b16345156607f460bfeb06e6";
  // https://api.themoviedb.org/3/movie/top_rated?api_key=b19963e9b16345156607f460bfeb06e6
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // axios.get(requests.requestPopular).then((res)=>{
    //   setMo(res.data.results);
    // })
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="h-[300px] md:h-[360px]  mx-10 mt-10 md:mx-40">
      {/* {mo.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))} */}
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
        {movies.map((item) => {
          return (
            <SwiperSlide className="md:p-2 " key={item.id}>
              <CardContinue data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ContinueMovie;

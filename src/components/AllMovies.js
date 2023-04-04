import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect } from "react";
import CardAllMoives from "./Cards/Card_AllMovies";
function AllMovies() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b19963e9b16345156607f460bfeb06e6";
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
    <div className="h-[100%] mx-40 mt-24 grid grid-cols-4 gap-20">
      {movies.map((item) => {
        return (
          <div key={item.id}>
            <CardAllMoives data={item} />
          </div>
        );
      })}
      {/* {movies.map((item) => {
        return (
          <SwiperSlide className="p-2 " key={item.id}>
            <CardContinue data={item} />
          </SwiperSlide>
        );
      })} */}
    </div>
  );
}

export default AllMovies;

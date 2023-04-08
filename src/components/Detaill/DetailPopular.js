import { useParams } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./style.css";
import PopularMovie from "../PopularMovie";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
const DetailPopular = () => {
  const [movies, setMovies] = useState();
  const baseImg = `https://www.themoviedb.org/t/p/w220_and_h330_face${movies?.poster_path}`;
  const baseImgBg = `https://www.themoviedb.org/t/p/w220_and_h330_face${movies?.backdrop_path}`;
  const { popularId } = useParams();
  //const singleProduct = movies?.find((m) => m.id === parseInt(popularId));

  const API_URL = `https://api.themoviedb.org/3/movie/${popularId}?api_key=b19963e9b16345156607f460bfeb06e6`;
  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovies(data);
        } else {
          alert("No data");
        }
      })
      .catch((error) => console.log(error));
  }, [API_URL]);
  return (
    <div className="bg-[#262626]">
      <Navbar />
      <div className="w-[100%] flex justify-center md:h-[620px] relative md:top-24 top-16 ">
        <div className="bg-red-300 my-10 mx-5 md:mx-10 h-[280px] md:h-[450px] w-[100%] relative">
          {/* card */}
          <div className="absolute h-[100%] w-[100%] z-0 md:h-[100%] md:w-[100%]">
            <img
              src={baseImgBg}
              alt=""
              className="h-[100%] w-[100%] object-cover opacity-70"
            />
          </div>
          <div className="absolute h-[70%] top-12 md:top-0 w-[100%] md:h-[100%] md:w-[100%] flex md:mx-10 mx-4">
            <div className="h-[100%] w-[100%] md:w-[25%] ">
              <img
                src={baseImg}
                alt=""
                className="md:h-[100%] md:w-[100%] h-[90%] w-[90%] md:object-none object-cover rounded-xl"
              />
            </div>
            {/* detail */}
            <div className="h-[75%] w-[70%] md:mt-12 mr-4">
              <div>
                {/* title */}
                <p className="text-xl md:text-5xl font-bold text-white">
                  {movies?.original_title}
                </p>
                <p className="text-gray-300 text-base md:text-lg mt-3 font-bold">
                  {movies?.release_date} |
                  <span className="mx-3 font-bold">
                    {movies?.genres.map((genres) => {
                      return <span>{genres.name}</span>;
                    })}
                  </span>{" "}
                  |
                  <span className="mx-3 font-bold">
                    {movies?.runtime} Minutes
                  </span>
                </p>
                <p className="hidden md:block text-xl text-white  mt-3 font-bold">
                  Overview :{" "}
                  <span className="text-lg text-gray-300 font-bold">
                    {movies?.overview}
                  </span>
                </p>

                <p className="text-xl text-white  mt-3 font-bold hidden md:block">
                  Author:
                  {movies?.production_companies.map((author) => {
                    return (
                      <span className="text-lg text-gray-300 font-bold">
                        {" "}
                        {author.name} |{" "}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex mt-5 ">
                  <button className="absolute z-40 top-[340px] left-[360px] w-[150px] h-[45px] bg-[#262626] rounded-full flex">
                    <BsPlayFill className="icons-button-play pb-2 ml-2" />
                    <p className="text-red-600 text-lg pt-2">Watch</p>
                  </button>
                  <button className="absolute z-40 top-[340px] left-[500px] w-[150px] h-[45px] bg-[#262626]  rounded-full flex ml-10">
                    <AiOutlinePlus className="icons-button-play pb-2 ml-1" />
                    <p className="text-red-600 text-lg pt-2">Add List</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail movies */}
      <div className=" mx-5 mt-10 md:mx-40 md:h-[500px] ">
        <p className="text-xl md:text-3xl font-bold text-white ">Detail Movies</p>
        <div className="mx-5 mt-1 md:mx-10 md:mt-5">
          {/* title */}
          <p className="text-base md:text-2xl text-white">
            <span className="text-lg md:text-2xl font-bold text-white">Name : </span>
            {movies?.original_title}
          </p>
          <p className="text-white text-base md:text-2xl md:mt-3">
            <span className="text-lg md:text-2xl font-bold text-white">Create At : </span>
            {movies?.release_date}
          </p>
          <p className="text-white text-base md:text-2xl md:mt-1">
            <span className="text-lg md:text-2xl  font-bold text-white">Time : </span>
            <span className="mx-3 ">{movies?.runtime} Minutes</span>
          </p>
          <p className="text-base md:text-2xl text-white md:mt-1">
            <span className="text-lg md:text-2xl font-bold text-white">Genre : </span>
            {movies?.genres.map((genres) => {
              return <span>{genres.name} | </span>;
            })}
          </p>
          <p className="text-base md:text-2xl text-white md:mt-3">
            <span className="text-lg md:text-2xl font-bold text-white">Detail : </span>
            <span className="text-base md:text-2xl text-white ">{movies?.overview}</span>
          </p>

          <p className="text-base md:text-2xl text-white md:mt-1">
            <span className="text-lg md:text-2xl font-bold text-white">Author : </span>
            {movies?.production_companies.map((author) => {
              return (
                <span className="text-base md:text-2xl text-white "> {author.name} | </span>
              );
            })}
          </p>
        </div>
      </div>
      {/* Recomment Movies */}
      <div className=" md:mt-[-140px] md:h-[500px] ">
        <p className="text-xl mt-2 mx-5 md:text-3xl text-white md:mx-40 md:mt-10 font-bold">
          Recomment Movie{" "}
        </p>
        <PopularMovie />
      </div>
      <Footer />
    </div>
  );
};
export default DetailPopular;

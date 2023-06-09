import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect } from "react";
import CardAllMoives from "../Cards/Card_AllMovies";
import search from "./img/search.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Search() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=b19963e9b16345156607f460bfeb06e6";
  // https://api.themoviedb.org/3/movie/top_rated?api_key=b19963e9b16345156607f460bfeb06e6
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=b19963e9b16345156607f460bfeb06e6&query=";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setMovies(data.results);
        });
      setSearchTerm("");
    }
  };

  return (
    <div className="h-auto bg-[#262626] ">
      <Navbar />
      <form onSubmit={handleSearch} className="flex justify-center pt-24 md:pt-36">
        <div class="relative flex items-center text-gray-400 focus-within:text-gray-600 col-span-2 w-[300px] h-[40px] md:w-[700px] md:h-[60px] ">
          <img
            src={search}
            alt="search"
            class="w-5 h-5 absolute ml-3 pointer-events-none"
          />
          <input
            type="text"
            name="search"
            placeholder="Search Movies Here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autocomplete="off"
            aria-label="Search "
            class="w-[100%] h-[55px] pl-10 font-semibold placeholder-gray-500 
              text-black rounded-[6px] border-none  ring-borderInput
               focus:ring-borderInput search-fillter"
          />
        </div>
      </form>
      <div className="md:mx-14 mx-10 ">
        <div className="mx-10 h-[100%] mt-10 grid grid-cols-2 md:mx-40 gap-8 md:mt-24 md:grid md:grid-cols-4 md:gap-20 ">
          {movies.map((item) => {
            return (
              <div key={item.id}>
                <CardAllMoives data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;

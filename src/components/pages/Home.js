import React, { useEffect } from "react";
import AllMovies from "../AllMovies";
import Banner from "../Banner";
import Category from "../Category";
import ContinueMovie from "../Continue";
import PopularMovie from "../PopularMovie";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import requests from "../../api/Requests";

function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    //font-noto
    <div className="h-auto bg-[#262626] w-[100%]">
      {/* {JSON.stringify(movie)} */}
      <Navbar />
      <Banner />
      <p className="text-xl text-white mx-10 pt-28 font-bold md:mt-5  md:text-3xl md:mx-40 lg:mt-10">
        Category Movie{" "}
      </p>
      <Category />
      <p className="text-xl text-white mx-10 font-bold md:mt-5  md:text-3xl md:mx-40 lg:mt-10">
        Popular Movie{" "}
      </p>
      <PopularMovie />
      <p className="text-xl text-white mx-10 font-bold mt-2  md:text-3xl md:mx-40 lg:mt-10">
        Continue watching your movie
      </p>
      <ContinueMovie />
      <p className="text-xl text-white mx-10 font-bold mt-2  md:text-3xl md:mx-40 lg:mt-10">
        All movies
      </p>
      <AllMovies />
      <Footer />
    </div>
  );
}

export default Home;

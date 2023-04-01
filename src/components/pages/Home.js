import React from "react";
import AllMovies from "../AllMovies";
import Banner from "../Banner";
import Category from "../Category";
import ContinueMovie from "../Continue";
import PopularMovie from "../PopularMovie";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    //font-noto
    <div className="h-auto bg-[#262626]">
      <Navbar />
      <Banner />
      <Category />
      <p className=" text-3xl text-white mx-40 mt-10 font-bold">
        Popular Movie{" "}
      </p>
      <PopularMovie />
      <p className=" text-3xl text-white mx-40 mt-10 font-bold">
        Continue watching your movie
      </p>
      <ContinueMovie />
      <p className=" text-3xl text-white mx-40 mt-10 font-bold">All movies</p>
      <AllMovies />
      <Footer />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import CardAllMoives from "./card-allMovies/Card_AllMovies";
import movieAll from "../data/dataAllMovies";

function AllMovies() {
  const [data, setData] = useState(movieAll);
  return (
    <div className="h-[100%] mx-40 mt-24 grid grid-cols-4 gap-20">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <CardAllMoives data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default AllMovies;

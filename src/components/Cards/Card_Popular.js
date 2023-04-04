import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function CardPopular(props) {
  
  const { data } = props;
  console.log(data.poster_path);
  const baseImg =`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`
  return (
    <Link to={`/popular/${data.id}`}  style={{ textDecoration: 'none' }}>
      <div className=" h-[90%]">
        <img src={baseImg} alt="1" className="h-[290px] w-[100%] rounded-lg" />
      </div>
      <p className="text-white">{data.original_title}</p>
      <div className="flex justify-between">
        <p className="text-white">{data.release_date}</p>
        <div className="flex">
          <AiFillHeart className="w-[18px] h-[18px] mt-[2px] mr-1 text-white" />
          <IoEyeSharp className="w-[18px] h-[18px] mt-[2px] mr-1 text-white" />
          <div className="flex justify-center">
            <BsFillStarFill className="w-[15px] h-[15px] mt-[2px] mr-1 text-white" />
            <p className="text-white">{data.vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardPopular;

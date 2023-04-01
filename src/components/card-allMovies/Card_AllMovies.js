import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function CardAllMoives(props) {
  const { data } = props;
  return (
    <Link to={`/continue/${data.id}`} style={{ textDecoration: "none" }}>
      <div className="p-2 mt-[-50px]">
        <div className=" h-[90%]">
          <img src={data.image} className="h-[310px] w-[100%] rounded-lg" />
        </div>
        <p className="text-white">{data.title}</p>
        <div className="flex justify-between">
          <p className="text-white">{data.date}</p>
          <div className="flex">
            <AiFillHeart className="w-[18px] h-[18px] mt-[2px] mr-1 text-white" />
            <IoEyeSharp className="w-[18px] h-[18px] mt-[2px] mr-1 text-white" />
            <div className="flex justify-center">
              <BsFillStarFill className="w-[15px] h-[15px] mt-[2px] mr-1 text-white" />
              <p className="text-white">{data.poin}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardAllMoives;

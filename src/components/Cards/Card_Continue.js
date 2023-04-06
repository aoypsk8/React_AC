import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function CardContinue(props) {
  
  const { data } = props;
  console.log(data.poster_path);
  const baseImg =`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`
  return (
    <Link to={`/continue/${data.id}`}  style={{ textDecoration: 'none' }}>
      <div className="h-[70%] md:h-[90%]">
        <img src={baseImg} alt="1" className="h-[200px] w-[80%] md:h-[290px] md:w-[100%] rounded-lg" />
      </div>
      <p className="text-white text-sm md:text-base">{data.original_title}</p>
      <div className="md:flex md:justify-between  hidden ">
        <p className="text-white text-sm md:text-base">{data.release_date}</p>
        <div className="flex">
          <AiFillHeart className="md:w-[18px] md:h-[18px] md:mt-[2px]  text-white" />
          <IoEyeSharp className=" mr-1 md:w-[18px] md:h-[18px] md:mt-[2px] md:mr-1 text-white" />
          <div className="flex justify-center">
            <BsFillStarFill className="md:w-[15px] md:h-[15px] md:mt-[2px] md:mr-1 text-white" />
            <p className="text-white text-sm md:text-base">{data.vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CardContinue;

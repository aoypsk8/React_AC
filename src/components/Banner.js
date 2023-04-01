import React, { useEffect, useState } from "react";
import DataBanner from "../data/dataBanner";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "./Slider.css";
function Banner() {
  const [data] = useState(DataBanner);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="section">
      <div className="section-center">
        {data.map((item, indexPeople) => {
          const { id, image, title, description } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="bg-gray-600 h-[100%] relative">
                <div className="absolute z-40 top-[100px] left-[80px] text-white text-5xl font-bold">
                  {title}
                </div>
                <div className="absolute  z-40 top-[160px] left-[80px] w-[35%] text-white text-2xl font-semibold">
                  {description}
                </div>
                <div className="flex">
                  <button className="absolute z-40 top-[400px] left-[80px] w-[140px] h-[40px] bg-[#262626] rounded-full flex">
                    <BsPlayFill className="icons-button-play pb-3 ml-2" />
                    <p className="text-red-600 text-lg pt-1">Watch</p>
                  </button>
                  <button className="absolute z-40 top-[400px] left-[280px] w-[140px] h-[40px] bg-[#262626]  rounded-full flex">
                    <AiOutlinePlus className="icons-button-play pb-3 ml-1" />
                    <p className="text-red-600 text-lg pt-1">Add List</p>
                  </button>
                </div>
                <img
                  src={image}
                  alt={title}
                  className="w-[100%] h-[100%] absolute z-0 object-cover"
                />
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <GrPrevious className="icon-pn" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <GrNext className="icon-pn" />
        </button>
      </div>
    </div>
  );
}

export default Banner;

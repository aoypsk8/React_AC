import React from "react";

function CardCategory(props) {
    const {imgSrc} = props.data
  return (
      <div className="h-[100%]">
        <img
          src={imgSrc}
          className="h-[70%] w-[98%] md:w-[100%] md:h-[100%] rounded-lg"
          alt=""
        />
      </div>
  );
}

export default CardCategory;

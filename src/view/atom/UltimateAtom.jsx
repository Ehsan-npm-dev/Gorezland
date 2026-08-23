import React from "react";
import { useNavigate } from "react-router-dom";

function UltimateAtom({ icon, text, title, url }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="">
          <img src={icon} alt="" className="size-8  " />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <h3 className="font-bold text-[15px] ">{text}</h3>
          <p className="font-light text-[13px] flex justify-center items-center lg:w-[200px] lg:h-[70px] lg:flex lg:justify-center lg:items-center">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default UltimateAtom;

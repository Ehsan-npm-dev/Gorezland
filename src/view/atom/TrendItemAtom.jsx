import React from "react";
import { useNavigate } from "react-router-dom";

function TrendItemAtom({ url, img, title, par, date }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="md:flex md:justify-center md:items-center md:gap-6">
        <div className="relative right-2">
          <h1 className="font-light text-[11px]">{date}</h1>
          <hr />
          <h3 className="text-orange-500">{title}</h3>

          <p className="font-light text-[12px]">{par}</p>
        </div>

        <div>
          <img src={img} alt=" " className="w-70 h-50 rounded-lg " />
        </div>
      </div>
    </div>
  );
}

export default TrendItemAtom;

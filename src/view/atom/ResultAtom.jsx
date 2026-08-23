import React from "react";
import { useNavigate } from "react-router-dom";

function ResultAtom({ icon, url, title, number }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={icon} alt="" srcset="" className="size-8"/>
        <h3 className="text-orange-700">{number}</h3>
        <h1 className="text-[11px] w-[100px] font-light rounded-sm">{title}</h1>
      </div>
    </div>
  );
}

export default ResultAtom;

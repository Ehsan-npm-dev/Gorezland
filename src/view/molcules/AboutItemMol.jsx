import React from "react";
import { useNavigate } from "react-router-dom";

function AboutItemMol({ icon, title, text, url }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(url);
  };
  return (
    <div onClick={clickHandler}>
      <div className="flex justify-center items-center gap-1 ">
        <span className="flex-col-reverse ">
          <h3 className="font-semibold ">{title}</h3>
          <h5 className="text-sm font-light">{text}</h5>
        </span>
        <img src={icon} alt="" srcset="" className="size-13 rounded-sm" />
      </div>
     
    </div>
  );
}

export default AboutItemMol;

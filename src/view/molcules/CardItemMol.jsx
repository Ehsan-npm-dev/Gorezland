import React from "react";
import { useNavigate } from "react-router-dom";

function CardItemMol({ icon, title, par, bot, url }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(url);
  };
  return (
    <div onClick={clickHandler}>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={icon} alt="logo" className="w-80 h-100 rounded-b-2xl" />
        <h3 className=" font-bold">{title}</h3>
        <p className=" text-sm font-light">{par}</p>
        <button
          type="btn"
          className="border w-48 h-8 text-center text-sm  cursor-pointer rounded-sm font-semibold hover:bg-amber-600 "
        >
          {bot}
        </button>
      </div>
    </div>
  );
}

export default CardItemMol;

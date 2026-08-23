import React from "react";
import { useNavigate } from "react-router-dom";

function UserItemMol({ img, par, name, title, url }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(url);
  };
  return (
    <div onClick={clickHandler}>
      <div className=" rounded-sm flex flex-col items-center">
        <p className="w-60 font-light text-sm h-25 flex justify-center items-center">{par}</p>
        <div className="flex justify-center w-full items-center gap-2">
          <div>
            <img
              src={img}
              alt=""
              className="size-20 rounded-full relative left-10"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-md font-extrabold relative left-9">{name}</h1>
            <h2 className="text-gray-600 text-sm font-extrabold relative left-12">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItemMol;

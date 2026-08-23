import React from "react";
import { useNavigate } from "react-router-dom";

function ActivityItemMol({ img, para, title, url }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(url);
  };
  return (
    <div onClick={clickHandler}>
      <div>
        <div
          className=" w-[238px] h-[188px] flex flex-col justify-around gap-3"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "5px",
          }}
        >
          <div className="">
            <h4 className="text-[12px] text-white w-full font-light">{para}</h4>
            <h2 className="text-xl text-white">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityItemMol;

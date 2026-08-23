import React from "react";
import { useNavigate } from "react-router-dom";

function DeliveryAtom({ url, title, img, text }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="flex justify-center items-center gap-4 ">
        <div className="flex flex-col justify-center gap-1 items-center ">
          <h3 className="text-[13px]">{text}</h3>
          <h5 className="font-light text-[13px]">{title}</h5>
        </div>
        <img src={img} alt="" srcset="" className="size-10" />
      </div>
    </div>
  );
}

export default DeliveryAtom;

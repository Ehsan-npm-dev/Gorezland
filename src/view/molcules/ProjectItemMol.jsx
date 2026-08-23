import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItemMol({ url, img, title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <img src={img} alt="" className="size-80 rounded-b-xl " />
          <h4 className="font-bold text-sm relative bottom-2">{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemMol;

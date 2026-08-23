import React from "react";
import { useNavigate } from "react-router-dom";
 
function ListItemMol({ icon, url, pos, title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="flex justify-between items-center gap-20 md:gap-40 " >
        <span>
          <button>
            <img src={pos} alt="" srcset="" />
          </button>
        </span>
        <div className="flex justify-center items-center gap-5">
          <p className="font-light hover:border-b-2">{title}</p>
          <img src={icon} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default ListItemMol;

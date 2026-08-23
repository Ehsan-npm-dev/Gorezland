import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingAtom({ url, icon, title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div>
        <div>
          <h3
            style={{
              backgroundImage: `url(${icon})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "252px",
              height: "290px",
              borderRadius:"0 5px 0 5px"
            }}
          ></h3>
          <h3 className="text-md font-semibold ">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default TrendingAtom;

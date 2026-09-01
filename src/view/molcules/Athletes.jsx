import React from "react";
import { pics } from "../../assets/Config";
import PicsItemsMol from "./PicsItemsMol";
function Athletes() {
  return (
    <div className=" ">
      <div>
        <h3 className=" h-[8vh] text-xl flex justify-center items-center text-orange-500">  History of Slack </h3>
      </div>
      <div className="md:flex md:flex-wrap md:justify-center md:items-center lg:flex gap-5">
        {pics.map((i) => (
          <PicsItemsMol url={i.url} title={i.title} pos={i.pos} icon={i.icon} />
        ))}
      </div>
    </div>
  );
}

export default Athletes;

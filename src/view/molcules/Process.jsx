import React from "react";
import ListItemMol from "./ListItemMol";
import { lists } from "../../assets/Config";
function Process() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 h-[66vh] ">
        <h3 className="text-xl">
          The <span className="text-orange-400">Effects </span>of Streaming Arts on Life
        </h3>
        <div className="flex flex-col justify-center gap-3">
          {lists.map((i) => (
            <ListItemMol
              url={i.url}
              title={i.title}
              icon={i.icon}
              pos={i.pos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;

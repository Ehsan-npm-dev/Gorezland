import React from "react";
import "./CollegeAtom.css";
function CollegeAtom() {
  return (
    <div className="">
      <div className="  h-[300px] flex flex-col justify-center gap-2 items-center">
        <h3 className="text-xl">
          The roots of this art go back to the ancient rituals and instrumental
          dances <br /> of the <span className="text-red-500"> Maori</span>{" "}
          tribes
        </h3>
        <p className="font-light w-100 md:w-150 text-sm">
          The overall goal is to reach a state of deep and conscious
          concentration in which the athlete, by immersing herself in the rhythm
          and harmony of the instrument, eliminates the boundary between mind
          and movement and achieves dynamic peace and self-knowledge
        </p>
        <span className="btn">
          <button className="border p-1 w-48 h-8 rounded-sm text-sm hover:bg-amber-600 font-semibold">
            find out
          </button>
          <button className="border p-1 w-48 h-8 rounded-sm text-sm hover:bg-amber-600 font-semibold">
            learn mode
          </button>
        </span>
      </div>
    </div>
  );
}

export default CollegeAtom;

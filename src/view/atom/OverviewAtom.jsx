import React from "react";
import Dude from "../../assets/friends/e0ef08f2-73df-4a72-9d92-dc56d5f2370d.jpg"
function OverviewAtom() {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-10">
      <main
        className="flex  justify-center items-center gap-1 w-full text-white rounded-sm h-120 relative top-5"
        style={{
          backgroundImage: `url(${Dude})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative bottom-40 w-100">
          <h2 className="text-sm font-light">Debtis ~ 03 June 2024</h2>
          <h1 className="text-2xl">
            DISCOVER THE MEMBER <br />
            BENEFITS OF <span className="text-red-700"> USA</span> CYCLING
          </h1>
        </div>
      </main>
      <aside className=" w-full flex flex-col justify-center items-center gap-3 h-[63vh]">
        <h3 className="h-1 text-xl font-bold flex justify-center items-center text-orange-500">
          World Of FlowArts
        </h3>
        <p className="text-sm flex flex-col text-[14px] font-light w-90   justify-center items-center rounded-b-sm">
          The main achievement of this art is to reach a state that
          psychologists call flow Learning complex movements with the hands that
          create neural connections between the right and left hemispheres of
          the brain Emotional release and regulation of the nervous system One
          of the most important achievements of practice in the world of flow
          arts
        </p>

        <h5 className="text-md font-semibold text-orange-400 ">Effects & benefits of streaming arts</h5>
        <ul className="font-light text-sm">
          <li className="">Reduce stress and anxiety</li>
          <li className="text-red-500">Nerve and muscle coordination </li>
          <li>Increased concentration </li>
          <li className="text-blue-500">Improve mood</li>
          <li>Increasing trust</li>
        </ul>
      </aside>
    </div>
  );
}

export default OverviewAtom;

import React from "react";
import pak from "../../assets/line/img_4349.jpg";
function DetailSlackAtom() {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-10 md:w-full">
      <main
        className="flex justify-center items-center gap-1 w-full text-white rounded-sm h-[59vh]"
        style={{
          backgroundImage: `url(${pak})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative top-46  lg:relative lg:bottom-20">
          <h2 className="text-sm font-light">DL ~ 03 June 2024</h2>
          <h1 className=" md:text-md text-3xl w-90">
           GOREZ_LAND <br />
            NORTH OF <span className="text-red-700">IRAN</span>
          </h1>
        </div>
      </main>

      <aside className=" w-full flex flex-col justify-center items-center gap-">
        <h3 className="h-12 text-xl font-bold flex justify-center items-center md:relative md:right-2 text-orange-500">
         The Art of Balance Slackline 
        </h3>
        <p className="text-sm font-light md:w-90 w-90">
          Slacklining is more than just a balancing act; it's the art ofs finding
          your balance in the midst of instability. Unlike tightrope walking,
          which is performed on rigid, immobile wires, slacklining is performed
          on a flat strip of polyester or nylon that acts as a living elastic,
          vibrating, swaying, and reacting to your every movement.
        </p>

        <h5 className="text-md font-semibold md:relative md:right-2 h-10 flex justify-center items-center text-orange-500">
         Slackline in life Application of 
        </h5>
        <ul className="font-light text-sm w-90 flex flex-col justify-center gap-1">
          <li className="">
            In addition to strengthening deep and stabilizing muscles (core),
            slacklining improves balance and coordination, creating a powerful
            physique.
          </li>
          <li className="text-red-500">
            In addition to mental focus and being present in the moment, it is a
            unique tool for reducing stress
          </li>
          <li className="text-blue-400">Supplement to enhance motor abilities</li>
          <li>A creative way to improve posture and mental discipline</li>
        </ul>
      </aside>
    </div>
  );
}

export default DetailSlackAtom;

import React from "react";
import green from "../../assets/hogo/IMG_5127.jpg";
import north from "../../assets/hogo/IMG_5126.jpg";
import tehran from "../../assets/hogo/IMG_5135.jpg";
import red from "../../assets/hogo/IMG_5194.png";
import blue from "../../assets/hogo/IMG_5132.jpg";
import { projects } from "../../assets/Config";
import ProjectItemMol from "../molcules/ProjectItemMol";
import goraz from "../../assets/gorez/IMG_2433.jpg";
import golt from "../../assets/hogo/IMG_5125.jpg";
import TrendingMol from "../molcules/TrendingMol";
import sia from "../../assets/friends/84d22688-f6a6-424f-bf27-dd13a2b20818.jpg";
function Project() {
  return (
    <section className="flex flex-col justify-center items-center gap-3">
      <div
        className="flex flex-col justify-center items-center gap-2 w-full text-white h-[90vh]"
        style={{
          backgroundImage: `url(${golt})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-xl">
          Movement ، Dance , <span className="text-red-500">Balance</span>
        </h1>
        <h2 className="text-[16px] font-serif">
          The art of staying suspended, where balance becomes flow
        </h2>
        <p className="text-[13px] font-light w-100 md:w-200">
          Projects that push the boundaries of gravity and creativity in the
          arts of flow and slacklining Our team will organize a series of
          creative performances and projects in the world of slacklining in{" "}
          <br />
          <span className="font-bold text-red-500">Tehran</span> ,the
          <span className="font-bold text-red-500"> North</span> and{" "}
          <span className="text-red-500 font-bold">South</span> of the country
          with you to create motivation, better balance, and create healthy
          competition{" "}
        </p>

        <ul className=" text-sm font-semibold  justify-center items-center gap-2 md:flex md:flex-wrap lg:h-15 h-35 ">
          <li className=" border rounded-lg w-30 h-8 flex justify-center items-center hover:bg-orange-500 font-semibold ">
            Gorezland
          </li>
          <br />
          <li className=" border rounded-lg w-30 h-8 flex justify-center items-center hover:bg-orange-500 font-semibold ">
            Hogo
          </li>
          <br />
          <li className=" border rounded-lg w-30 h-8 flex justify-center items-center hover:bg-orange-500 font-semibold">
            Adventure
          </li>
        </ul>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center lg:gap-10 md:flex md:justify-center h-136 w-full  md:items-center md:gap-5 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={sia} alt="" srcset="" className="w-100 h-80 rounded-4xl" />
          <h1 className="relative bottom-70 text-black text-2xl">
            <span className="text-orange-500">RECORD </span> OF ASIA <br /> <span className="font-bold text-md font-sans">INDIA</span> 
          </h1>
      
        </div>
        <div className="flex flex-col justify-center items-center gap-1 h-50">
          <h2 className="">
            Beautify Your <span className="text-red-500">Space </span>
          </h2>
          <p className="w-90 font-light text-sm ">
            {" "}
            We take balance to a new level, from high-rises to Art streaming
            performances, projects that will <br /> take your breath away
          </p>
          <button className=" border rounded-sm bg-white text-black font-sm w-30 h-8 hover:bg-amber-600  hover:text-white font-semibold text-[13px]">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-1 relative bottom-3">
            <h3 className="text-xl">
              Slackline <span className="text-red-500">One step</span> to
              infinity
            </h3>
            <p className="font-light text-[0.9rem]">
              Balance in movement, freedom in flow
            </p>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-3 lg:flex lg:justify-evenly lg:items-center lg:gap-20">
            <span className="flex flex-col justify-center items-center gap-3">
              <img src={tehran} alt="" className="size-60 rounded-tr-4xl" />
              <h3 className="text-[0.9rem] font-light">Tehran</h3>
            </span>

            <span className="flex flex-col justify-center items-center gap-3">
              <img src={north} alt="" className="size-60 rounded-tr-4xl" />
              <h3 className="text-sm font-light">North</h3>
            </span>
            <span className="flex flex-col justify-center items-center gap-3">
              <img src={red} alt="" className="size-60 rounded-tr-4xl" />
              <h3 className="text-sm font-light">South</h3>
            </span>
          </div>

          <div className="">
            <TrendingMol />
          </div>

          <div className="md:flex w-full md:justify-center md:items-center md:relative md:gap-28 md:top-10 lg:gap-60">
            {projects.map((i) => (
              <ProjectItemMol url={i.url} img={i.img} title={i.title}/>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 relative top-3 h-30">
        <h1 className="text-md font-bold text-orange-600 relative top-2">
          {" "}
          DEVELOPED AND DESIGNED BY EHSAN GANDOMI
        </h1>
        <h2 className=" text-sm">Produced in 2026</h2>
      </div>

      <div className=" w-full lg:w-248 lg:rounded-sm lg:h-110 md:w-185 md:h-86">
        <div
          className="flex flex-col justify-around  items-center text-white rounded-sm md:h-85 h-100 md:justify-center"
          style={{
            backgroundImage: `url(${goraz})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:relative lg:right-67 lg:top-15 relative top-30">
            <h3 className="text-[11px] font-light lg:text-[14px] text-black">
              paradise hogo - 04 June 2025
            </h3>
            <h2 className="text-black">
              TRAVELING WIDTH TEAM IN GOREZLAND<br />
              GADERING AND PRACTICE HIGHLINE
            </h2>
            <p className="font-light text-[12px] lg:text-[14px] text-black">
              WORLD IS YOURS <br />{" "}
              FOCUS AND BALANCE IN COURSE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

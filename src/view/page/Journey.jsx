import React from "react";
import born from "../../assets/line/IMG_4354.jpg";
import Dude from "../../assets/line/IMG_4347.jpg";
import sia from "../../assets/friends/05356e84-d669-497f-8384-7d9fe977edac.jpg";
import hali from "../../assets/friends/IMG_6210.jpg"
function Journey() {
  return (
    <section>
      <div
        className="w-full flex justify-center items-center  h-[90vh]"
        style={{
          backgroundImage: `url(${Dude})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center gap-2 text-white">
          <div className="flex justify-center gap-3 items-center  ">
            <button className="border rounded-xl w-34 h-9  hover:bg-orange-400 hover:text-white text-sm">
              Bestseller
            </button>
            <button className="border rounded-xl w-34 h-9 hover:text-white hover:bg-orange-400 text-sm">
              {" "}
              Free cancelling
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl w-90">
              Learn the art of <span className="text-red-500">balance</span> and
              give your mind peace{" "}
            </h3>
            <p className="text-sm ">
              Find your way to absolute focus with standard slackline equipment
              and FlowArt tools
            </p>
          </div>
          <div>
            <ul className="md:flex md:justify-center md:items-center md:gap-10 text-sm font-semibold  flex justify-center items-center gap-5">
              <li className="hover:text-orange-400">center city</li>
              <li className="hover:text-orange-400">Tehran.Iran</li>
              <li className="hover:text-orange-400">slack.lale</li>
            </ul>
          </div>
        </div>
      </div>

      <main className="md:flex md:justify-center md:items-center md:gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className=" md:top-1 md:w-50 relative top-1 text-orange-400">
            SLACKLINE
          </h1>
          <p className="text-sm font-light w-90">
            Don't focus on the muscles, but rather on the sense of balance and
            connection between mind and body
            <br />
            In today's fast-paced world, balance is not a skill, it's a choice
            <br />
            Balance is the art of finding center amidst instability. Slacklining
            is not just a sport, it is a practice of returning to oneself
          </p>
          <h2 className="text-orange-400">A set of straps and restraints</h2>
          <ul className="font-light text-sm flex flex-col justify-end b w-89 g-amber-300 ">
            <li>
              From the first step on the rope to the first moment of flight
            </li>
            <li> your path on the slackline is built with focus</li>
            <li>
              {" "}
              We have designed and provided equipment that will meet your
              challenges
            </li>
            <li>
              so that you only have to worry about maintaining your balance and
              experiencing the joy of movement
            </li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className=" md:top-1 md:w-50 relative top-1 text-orange-400">
              {" "}
              FLOWARTS
            </h1>
            <p className="text-sm font-light w-89">
              By selecting the most precise and high-quality equipment,e
              <br /> we have created a balance between visual beauty and
              technical performanceating beauty
              <br />
              so that you can step into the path of creating your art with
              complete confidence
              <br />
              Life will definitely be more beautiful with the art of streaming
            </p>
            <h2 className="text-orange-400">
              A tool for creating endless flow
            </h2>
            <ul className="font-light text-sm flex flex-col justify-end b w-89 g-amber-300 ">
              <li>
                Light Dance Instruments : Designed to perform stunning visual
                displays in the dark
              </li>
              <li>
                Staff & Poi : Classic tools for practicing rotation, weight
                control and achieving perfect harmony between mind and body
              </li>
              <li>Floating and rotating tools: creating geometric patterns</li>
            </ul>
          </div>
        </div>
      </main>

      <div className="w-full flex flex-col justify-center h-140 items-center  ">
        <div className="md:flex md:justify-center md:items-center md:gap-1">
          <div className=" w-72 h-50 md:h-111 md:w-100">
            <div className="">
              <h3
                className="flex justify-center items-center w-74 h-60 md:h-125 md:w-100"
                style={{
                  backgroundImage: `url(${sia})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "3px 2px",
                }}
              ></h3>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-1">
            <h1
              className="w-74 bg-amber-300 h-25 md:w-90 md:h-90 md:relative md:top-14 "
              style={{
                backgroundImage: `url(${hali})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "3px 2px",
              }}
            ></h1>
            <div className=" md:flex md:justify-center md:items-center flex justify-center gap-1 items-center">
              <h3
                className="h-25 w-35 md:h-48 md:w-44"
                style={{
                  backgroundImage: `url(${born})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "3px 2px",
                }}
              ></h3>
              <h4
                className="h-25 bg-red-900 w-37 md:h-48 md:w-45"
                style={{
                  backgroundImage: `url(${Dude})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "3px 2px",
                }}
              ></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;

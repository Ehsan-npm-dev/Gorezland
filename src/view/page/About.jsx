import React from "react";
import DeliveryAtom from "../atom/deliveryAtom";
import AboutItemMol from "../molcules/AboutItemMol";
import { reels } from "../../assets/Config";
import { tools } from "../../assets/Config";
import { users } from "../../assets/Config";
import { hours } from "../../assets/Config";
import UltimateAtom from "../atom/UltimateAtom";
import ResultAtom from "../atom/ResultAtom";
import line from "../../assets/gorez/IMG_5459.jpg"
import sky from "../../assets/background/mountion.png";
function About() {
  return (
    <section className=" flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center gap-1 h-[90vh] w-full"
        style={{
          backgroundImage: `url(${line})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
        }}
      >
        <h3 className="text-2xl text-orange-500">BEYOND SPORTS</h3>
        <h2 className="text-[1rem] font-sans text-white">
          {" "}
          A commitment to a<span className="text-red-500"> healthy</span> and
          exciting life
        </h2>
        <p className="font-light text-white text-[0.9rem] md:w-150 w-103 lg:w-200">
          We believe that exercise and physical activity are not a luxury
          choice, but rather the main foundation of quality of life in the
          modern world. Our goal is to eliminate the gap between knowing the
          importance of exercise and its principled implementation, relying on
          up-to-date knowledge and standard methods
        </p>

        {/* <div className=" hidden lg:flex lg:justify-center lg:items-center lg:gap-6 bg-white text-black rounded-lg w-[700px] h-15  ">
          {reels.map((i) => (
            <AboutItemMol
              url={i.url}
              title={i.title}
              icon={i.icon}
              text={i.text}
            />
          ))}
        </div> */}
      </div>

      <main className="flex flex-col justify-center items-center gap-5 w-full">
        <div className="">
          <h1 className="text-[1rem] h-17 flex justify-center items-center w-100  lg:w-140">
            We are not just a website, we are with you on the difficult
            path of change
          </h1>
        </div>
        <div className="md:flex md:justify-center md:items-center md:gap-1">
          {tools.map((i) => (
            <UltimateAtom
              url={i.url}
              title={i.title}
              icon={i.icon}
              text={i.text}
            />
          ))}
        </div>
      </main>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center gap-1.5 h-60">
          <h3 className="text-[1rem] text-orange-400">A summary of our work</h3>
          <p className="font-light text-[0.8rem] w-100 lg:w-125">
            Our group was formed by a gathering of those who sought meaning
            beyond the everyday. Our practice space is where walls fall away and
            boundaries disappear
          </p>
          <button
            type="btn"
            className="font-light text-[14px] border w-30 h-7 rounded-sm hover:bg-amber-500 hover:text-white"
          >
            Explore Our Tours
          </button>
        </div>
        <div className="md:flex w-full md:justify-center md:gap-10 md:items-center lg:gap-25">
          {users.map((i) => (
            <ResultAtom {...i} />
          ))}
        </div>
      </div>

      <div
        className="w-full h-110  flex flex-col justify-center items-center gap-2 text-white md:h-120  "
        style={{
          backgroundImage: `url(${sky})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-md text-orange-500">Stay On The Flexible Line</h1>
        <p className="font-light text-[0.8rem] w-95 md:w-140 lg:w-170">
          Our practice philosophy is based on three pillars: Presence in the
          moment to quiet the noise of the mind, Finding flow to be liberated in
          movement, And building a community where falling is the only way to
          begin learning
        </p>
      </div>

      <div className="md:flex md:justify-center md:items-center md:gap-10 w-full h-40 text-black bg-white">
        {hours.map((i) => (
          <DeliveryAtom {...i} />
        ))}
      </div>
    </section>
  );
}

export default About;

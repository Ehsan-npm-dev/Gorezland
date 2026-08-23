import React from "react";
import TrendItemAtom from "../atom/TrendItemAtom";
import { Trends } from "../../assets/Config";
import gorez from "../../assets/gorez/IMG_5457.jpg"
function TrendingMol() {
  return (
    <section className="lg:flex md:flex lg:justify-center lg:items-center md:justify-center md:items-center lg:gap-2 md:gap-3">
      <div className="w-92 h-160 md:h-120 lg:w-110">
        <div
          className="flex flex-col justify-around gap-70 h-full rounded-xl relative top-6 "
          style={{
            backgroundImage: `url(${gorez})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-white relative top-45">
            <h2 className="text-sm font-bold text-black">Debtis ~ 03 June 2024</h2>
            <h1 className="text-2xl text-black">
              DISCOVER THE MEMBER <br />
              BENEFITS OF USA CYCLING
            </h1>
          </div>
        </div>
      </div>

      <div className="w-92 h-160 rounded-b-md md:h-120 lg:w-110   ">
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className="md:relative md:right-27 md:top-2">Trending News</h3>
          <div className="flex flex-col justify-center items-center gap-13">
            {Trends.map((i) => (
              <TrendItemAtom {...i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingMol;

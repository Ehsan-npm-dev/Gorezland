import React from "react";
import Athletes from "../molcules/Athletes";
import slackLiner from "../../assets/line/img_4353.JPG";
import secret from "../../assets/Photo/ways.png";
import { charts } from "../../assets/Config";
import TrendingAtom from "../atom/TrendingAtom";
import DetailSlackAtom from "../atom/DetailSlackAtom";
import StarAtom from "../atom/StarAtom";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <section
        className="md:flex md:justify-center md:gap-30 md:items-center w-full h-[90vh]"
        style={{
          backgroundImage: `url(${slackLiner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center">
          <img src={secret} alt="rise" className="text-black" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-white  text-xl">
            {/* <span className="text-red-500">In search</span> of a point of
            balance <br /> between earth and sky */}

            {t(" In search of a point of balance between earth and sky ")}
          </h1>

          <p className="font-light text-[0.9rem] text-violet-50 ">
            Slackline dance focuses on the edge of instability, unlike
            traditional <br /> sports that rely on{" "}
            <span className="text-red-500">strength or speed</span> . Slackline
            is about <br /> coordination between nervous system control
          </p>
          <button className="text-white border p-1 w-48 h-8 rounded-sm text-sm hover:bg-amber-600 font-semibold hover:text-black">
            view more
          </button>
        </div>
      </section>
      <section>
        <Athletes />
      </section>

      <section>
        <DetailSlackAtom />
      </section>

      <section className="w-full bg-white ">
        <StarAtom />
      </section>

      <section className="flex flex-col justify-center items-center gap-2 w-full">
        <div className="md:flex md:justify-center md:gap-46 md:items-center w-full">
          <h4 className="text-[1rem] md:text-[0.9rem] font-semibold  flex justify-center items-center">
            Where the earth turns away , and the sky sounds
          </h4>
          <h3 className="text-[0.9rem] font-semibold md:h-[4vh] md:flex md:justify-center md:items-center">
            height means close to the dream
          </h3>
        </div>
        <div className="md:flex md:justify-center md:items-center md:gap-2 lg:flex lg:justify-center lg:gap-7">
          {charts.map((i) => (
            <TrendingAtom {...i} />
          ))}
        </div>
        <div className="w-full flex flex-col justify-center items-center h-50 gap-1">
          <h4 className="text-xl ">
            {" "}
            <span className="text-red-500">Slackline </span> is Here
          </h4>
          <h6 className="text-[16px] font-semibold ">
            ?Why should we start training in this field as soon as possible
          </h6>
          <p className="text-sm w-100 font-light md:w-155 ">
            This sport has a lot of positive effects on a person's body, both
            mentally and physically
            <span className="text-orange-500">
              <br /> Strengthening balance from the ground up, increasing
              coordination and concentration, burning <br />
            </span>
            calories and fitness reducing stress, and many other benefits that
            we will share with you in the future
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from "react";
import dud from "../../assets/line/img_4350.jpg";
import { carts } from "../../assets/Config";
import { deals } from "../../assets/Config";
import CartItemMol from "../molcules/CartItemMol";
import ActivityItemMol from "../molcules/ActivityItemMol";
import OverviewAtom from "../atom/OverviewAtom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css";
import light from "../../assets/Photo/frame 297 (2).png";
import flow from "../../assets/morghabi/img_5128.jpg"
import dan from "../../assets/morghabi/img_5243.jpg"
function Sport() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <section
        style={{
          backgroundImage: `url(${dud})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
        }}
        className="md:flex md:justify-center md:gap-20 md:items-center w-full h-[90vh] flex justify-center items-center"
      >
        <div className="w-full flex flex-col justify-center items-center gap-1 text-white">
          <h1 className="text-xl">
            The art of flow is the dance of the
            <br />
            <span className="text-red-500">Soul </span>amidst chaos and order
          </h1>
          <p className="font-light text-[0.9rem] h-12">
            In the art of flow, the goal is to reach the destination, the goal
            is to dance with the path
          </p>

          <ul className="md:flex md:justify-center md:items-center md:gap-5 flex flex-wrap justify-center gap-3">
            <li className="border rounded-lg w-34 h-8 flex justify-center items-center text-sm hover:bg-orange-600">
              Poi
            </li>
            <li className="border rounded-lg w-34 h-8 flex justify-center items-center text-sm hover:bg-orange-600">
              Staff
            </li>
            <li className="border rounded-lg w-34 h-8 flex justify-center items-center text-sm hover:bg-orange-600">
              DragonStaff
            </li>
            <li className="border rounded-lg w-34 h-8 flex justify-center items-center text-sm hover:bg-orange-600">
              RopeDart
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="flex flex-col justify-center items-center w-full bg-white text-black">
          <div className="md:flex md:justify-center md:items-center md:w-full md:gap-15">
            <div className=" flex flex-col justify-center items-center gap-2">
              <h3 className="text-xl font-bold ">FLOW_ARTS</h3>
              <p className="w-[400px] font-light">
                {" "}
                Flow_arts is more than just a hobby or performance skill, it is
                actually a form of dynamic meditation or movement therapy that
                has amazing effects on mental health and the nervous system
              </p>

              <Link
                to=""
                className="text-sm font-semibold border w-38 h-8 hover:bg-orange-500 flex justify-center items-center rounded-sm"
              >
                {" "}
                learn more
              </Link>
            </div>

            <div className="">
              <Swiper
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                Pagination
                loop={true}
              >
                <SwiperSlide>
                  <img src={light} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={flow} alt="logo" className="rounded-3xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={dan} alt="logo" className=" rounded-3xl" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section>
        <OverviewAtom />
      </section>

      <section className="">
        <h3 className="font-bold h-[13vh] text-xl flex justify-center items-center gap-1 relative top-3">
          FLOW_ARTS <span className="text-gray-400"> BEST OF</span>
        </h3>
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {carts.map((i) => (
            <CartItemMol
              // url={i.url}
              // title={i.title}
              // // price={i.price}
              // img={i.img}
              // detail={i.detail}
              // time={i.time}
              /// خلاصه ///
              {...i}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-3 justify-center items-center relative top-1">
        {deals.map((i) => (
          <ActivityItemMol {...i} />
        ))}
      </section>
    </div>
  );
}

export default Sport;

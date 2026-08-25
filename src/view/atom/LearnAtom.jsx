import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css";
import Mola from "../../assets/morghabi/img_5235.jpg";
import Ame from "../../assets/morghabi/img_5236.jpg";
import Sal from "../../assets/morghabi/img_5199.jpg";
function LearnAtom() {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full text-black h-[94vh] ">
      <div className="md:flex justify-center items-center">
        <div className=" flex flex-col justify-center gap-1 ">
          <h3 className="text-xl font-bold "> OUR TEAM</h3>
          <p className="w-[400px] font-medium">
            {" "}
            At the intersection of the arts of flow and slacklining, our team
            transforms the geometry of movement into an active meditation, where
            the balance of the body on the rope and the dance of the instrument
            in space open a gateway to absolute presence and deep concentration
          </p>

          <Link href="" className="hover:text-orange-500 hover:border-b-2">
            Just Breathe
          </Link>
        </div>

        <div className="">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            Pagination
            loop={true}
          >
            <SwiperSlide>
              <img src={Mola} alt="logo" className="rounded-xl w-90 h-100" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Ame} alt="logo" className="rounded-xl w-90 h-100" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Sal} alt="logo" className="rounded-xl w-90 h-100" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LearnAtom;

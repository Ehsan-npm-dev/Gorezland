import React from "react";
import Light from "../../assets/morghabi/img_5274.jpg";
import fight from "../../assets/morghabi/img_5273.jpg";
import kind from "../../assets/morghabi/img_5234.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./star.css";
function StarAtom() {
  return (
    <div className="">
      <div className="flex flex-col md:flex md:justify-center md:items-center">
        <div className="md:flex ">
          <Swiper
            className="mySwiper"
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            Pagination
            loop={true}
          >
            <SwiperSlide
              className="flex justify-center items-center"
              // style={{
              //   backgroundImage: `url (${Light})`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "center",
              //   backgroundSize: "cover",
              // }}
            >
              <img decoding="async" src={Light} alt="picture" className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <img src={fight} alt="picture" className="rounded-lg" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <img src={kind} alt="picture" className="rounded-lg" />
            </SwiperSlide>
          </Swiper>

          <div className=" flex flex-col justify-center items-center bg-white text-black">
            <div className="flex flex-col justify-center gap-1 ">
              <h1 className="text-xl font-bold">
                World of <span className="text-red-500">Slackline </span>{" "}
              </h1>
              <h3 className="font-medium">Moving meditation</h3>
              <p className="font-light w-[400px]">
                This sport is a combination of art, mental concentration and
                body control. In slacklining, all the muscles of the abdomen,
                back and pelvis must be constantly contracted and expanded to
                maintain balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarAtom;

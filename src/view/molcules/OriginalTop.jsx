import React from "react";
import "./originalTop.css";
import magic from "../../assets/line/img_4348.JPG";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OriginalTop() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage: `url(${magic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[90vh] md:justify-center md:items-center md:flex md:flex-col "
    >
      <div className=" flex flex-col justify-center items-center w-full text-white h-[30vh]   ">
        <h3 className="">
          YOUR <span className="text-red-500">DREAM </span> IS OUR <br />
          MOTIVATION
        </h3>
        <p className="text-sm w-105">
          رویاهای بزرگ ، <span className="text-red-500">در تعادل </span>میان
          سکون و سقوط شکل می گیرند. <br />
          ایستادگی کن ،حتی وقتی مسیر زیر پایت می لرزد
        </p>
        <span class="btn">
          <Link to="/home">
            <button className="border font-semibold p-1 w-42 h-8 text-sm rounded-sm hover:bg-amber-600">
              {t(" Slackline ")}
            </button>
          </Link>
          <Link to="/highline">
            <button className="border p-1 w-42 h-8 text-sm rounded-sm hover:bg-amber-600 font-semibold">
              {t(" Highline")}
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default OriginalTop;

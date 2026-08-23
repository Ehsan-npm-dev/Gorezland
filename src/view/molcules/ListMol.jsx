import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoHomeOutline } from "react-icons/io5";
import { SiTheodinproject } from "react-icons/si";
import { MdRoundaboutRight } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { CiPassport1 } from "react-icons/ci";
import "./listmol.css";
function ListMol() {
  const { t } = useTranslation();
  return (
    <div className=" w-[550px] p-1 text-sm font-light ">
      <ul className="flex justify-around w-full lg:justify-between ">
        <Link to="/home" >
          {" "}
          <li className="dropdown">
            <div className="flex justify-center items-center gap-1">
              <h3 className="hover:text-orange-600 font-semibold hover:border-b-2 hover:border-orange-400">{t(" Slackline ")}</h3>

              <span>
                <IoHomeOutline />
              </span>
            </div>

            <div className="dropdown-content">
              <Link to="/slacklale">Slacklale</Link>
              <Link to="/highline">Highline</Link>
            </div>
          </li>
        </Link>

        <Link to="/sport">
          <li className="dropdown">
            <div className="flex justify-center gap-1 items-center">
              <h3 className="hover:text-orange-600 font-semibold hover:border-b-2 hover:border-orange-400">{t(" Flowarts ")}</h3>

              <span>
                <CiPassport1 />
              </span>
            </div>
            <div className="dropdown-content">
              <div className="flex flex-col justify-center ">
                <Link to="/poi">Poi & Staff</Link>
                <Link to="/course">Course</Link>
              </div>
            </div>
          </li>
        </Link>

        <Link to="/journey">
          <li className="dropdown">
            <div className="flex justify-center items-center gap-1">
              <h3 className="hover:text-orange-600 font-semibold hover:border-b-2 hover:border-orange-600">{t(" Shop ")}</h3>

              <span>
                <GiJourney />
              </span>
            </div>

            <div className="dropdown-content">
              <div className="flex flex-col justify-center ">
                <Link to="/slack">Slack</Link>
                <Link to="/flow">Flow</Link>
                <Link to="/adventure">Adventure</Link>
                <Link to="/flair">Flair Bartending</Link>
              </div>
            </div>
          </li>
        </Link>

        <Link to="/project">
          <li className="dropdown">
            <div className="flex justify-center gap-1 items-center">
              <h3 className="hover:text-orange-600 font-semibold hover:border-b-2 hover:border-orange-400">{t(" Project")}</h3>

              <span>
                <SiTheodinproject />
              </span>
            </div>

            <div className="dropdown-content">
              <Link to="/festival">Festival Hogo</Link>
              <Link to="/events">Events</Link>
            </div>
          </li>
        </Link>

        <Link to="/about">
          <li className="dropdown">
            <div className="flex justify-center items-center gap-1">
              <h3 className="hover:text-orange-600 font-semibold hover:border-b-2 hover:border-red-400">{t(" About Us")}</h3>

              <span>
                <MdRoundaboutRight />
              </span>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ListMol;

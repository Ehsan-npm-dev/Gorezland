import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useRef } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiPassport1 } from "react-icons/ci";
import { GiJourney } from "react-icons/gi";
import { MdRoundaboutRight } from "react-icons/md";
import { SiTheodinproject } from "react-icons/si";
import { useTranslation } from "react-i18next";
import useDarkMode from "../../useDarkMode";
import "./navbar.css";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const { t } = useTranslation();
  const [theme, toggleTheme] = useDarkMode();
  return (
    <header>
      <nav ref={navRef} className="lg:hidden md:hidden">
        <a href="/home" className="flex justify-center items-center gap-1">
          {t(" Slackline ")}
          <span>
            <IoHomeOutline />
          </span>
        </a>
        <a href="/sport" className="flex justify-center items-center gap-1">
          {t(" Flowarts ")}
          <span>
            <CiPassport1 />
          </span>
        </a>
        <a href="/journey" className="flex justify-center items-center gap-1">
          {t(" Shop")}
          <span>
            <GiJourney />
          </span>
        </a>

        <a href="/project" className="flex justify-center items-center gap-1">
          {t(" Project")}
          <span>
            <SiTheodinproject />
          </span>
        </a>
        <a href="/about" className="flex justify-center items-center gap-1">
          {t(" About Us")}
          <span>
            <MdRoundaboutRight />
          </span>
        </a>
        <div className="">
          <button
            className="nav-btn nav-close-btn "
            // style={{
            //   color: theme === "light" ? "black " : "white ",
            // }}
            onClick={showNavbar}
            onChange={toggleTheme}
          >
            <FaTimes
              className="size-6"
              style={{
                color: theme === "dark" ? "white" : "white",
              }}
            />
          </button>
        </div>
      </nav>
      <div>
        <button className="nav-btn" onClick={showNavbar} onChange={toggleTheme}>
          <FaBars className="size-6 text-gray-400" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

import React from "react";
import logo from "../../assets/icon/Logo (2).png";
import icon from "../../assets/Icon/InstagramLogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className=" h-[475px] w-full">
      <footer className="flex flex-col justify-center items-center">
        <div className=" w-full h-[165px]">
          <h1 className="text-2xl relative top-2">
            Ready to grow your business
            <br /> Start with Sark, become faster <br /> every second
          </h1>
          <button className="bg-blue-800 text-white font-semibold text-[12px] w-28 h-9 rounded-md relative top-6 hover:bg-orange-600 hover:text-white">
            start chatting now
          </button>
        </div>
        <section className=" md:flex md:justify-evenly md:items-center md:gap-2 md:h-[110px]">
          <div className="flex justify-center items-center gap-10 h-14 ">
            <Link>
              <img src={icon} alt="" />
            </Link>
            <Link>
              <img src={icon} alt="" />
            </Link>
            <Link>
              <img src={icon} alt="" />
            </Link>
            <Link>
              <img src={icon} alt="" />
            </Link>
          </div>
          <div className="md:flex md:justify-center md:items-center  md:w-100 md:h-10 h-30 flex flex-col justify-center items-center">
            <ul className="md:flex md:justify-center md:items-center md:gap-7 text-sm font-semibold">
              <li className="hover:border-b-2 hover:border-orange-600">
                about
              </li>
              <li className="hover:border-b-2 hover:border-orange-600">
                features
              </li>
              <li className="hover:border-b-2 hover:border-orange-600">
                works
              </li>
              <li className="hover:border-b-2 hover:border-orange-600">
                support
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center ">
            <img src={logo} alt="" className="" />
          </div>
        </section>
        <hr />
        <div className="md:flex md:justify-evenly md:items-center md:w-full md:h-[110px]">
          <span className="md:flex md:justify-center md:items-center md:gap-8 relative top-1">
            <h3 className="text-sm font-semibold hover:text-orange-600 ">
              Privacy Policy
            </h3>
            <h2 className="text-sm font-semibold hover:text-orange-500 ">
              Terms & Conditions
            </h2>
          </span>
          <p className="text-sm font-semibold border-orange-500 border-b-2 relative top-1">
            © Copyright 2024, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

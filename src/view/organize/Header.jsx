import React from "react";
import vector from "../../assets/Icon/bars.png";
import logo from "../../assets/Icon/Logo (2).png";
import ListMol from "../molcules/ListMol";
import { Link } from "react-router-dom";
import person from "../../assets/Icon/User.png";
import { useTranslation } from "react-i18next";
import Navbar from "../molcules/Navbar";
function Header() {
  const {
    i18n: { changeLanguage, language, dir },
  } = useTranslation();

  const onChangeLocale = (e) => {
    const { value } = e.target;
    changeLanguage(value);
  };

  const { t } = useTranslation();

  // console.log(useTranslation());

  return (
    <div className="w-full flex-col">
      <div
        className="flex justify-around items-center p-1  md:gap-80 lg:gap-140 "
        dir={dir()}
      >
        <div className="flex items-center justify-center gap-3">
          {/* <img src={vector} alt="btn" className="md:hidden lg:hidden  " /> */}
          <Navbar/>
          <Link to="/sign">
            <button
              type="btn"
              className="text-white bg-orange-400 text-[13px] font-semibold h-8 items-center font-mono  justify-center gap-1 rounded-b-md hidden md:inline-flex lg:inline-flex cursor-pointer w-[120px] "
            >
               <img src={person} alt="login" className="size-4" />
              {t(" login ")}
             
            </button>
          </Link>
        </div>

        <div className="flex justify-center gap-3">
          <label htmlFor="Language"></label>
          <select
            id="Language"
            className="p-1 font-light text-sm "
            onChange={onChangeLocale}
            value={language}
          >
            <option value="en" className="border rounded-b-md">
              English
            </option>
            <option value="fa" className="">
              persian
            </option>
          </select>

          <img src={logo} alt="logo"/>
        </div>
      </div>
      <div className="hidden lg:inline-block md:inline-flex ">
        <div className="">
          <ListMol />
        </div>
      </div>
    </div>
  );
}

export default Header;

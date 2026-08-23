import React from "react";
import { routes } from "../../assets/Config";
import CardItemMol from "./CardItemMol";
// import { routes } from "../../assets/Config"
import { useTranslation } from "react-i18next";

function Field() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="w-full flex justify-center items-center text-2xl h-11 ">
          The Art of Flow
        </h3>
        <p className="font-light w-100 md:w-130 text-sm">
          They are a set of motor and{" "}
          <span className="text-red-500">skill-based</span> activities that are
          performed using specific tools and relying on rotational and rhythmic
          movement patterns
        </p>
        <div className="md:flex md:flex-wrap md:justify-center md:items-center md:gap-5 lg:flex lg:gap-2 gap-3 ">
          {routes.map((i) => (
            <CardItemMol
              url={i.url}
              title={i.title}
              icon={i.icon}
              par={i.par}
              bot={i.bot}
            />
          ))}
        </div>

        <h5 className="font-bold text-amber-600 h-[10vh] flex justify-center items-center w-full ">
          Performance art belongs to the 20th century and, unlike theater{" "}
          <br />
          performance is anti-narrative
        </h5>
      </div>
    </div>
  );
}

export default Field;

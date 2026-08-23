import React from "react";
import Header from "../organize/Header";
import Footer from "../organize/Footer";
import useDarkMode from "../../useDarkMode";
import { SiDarkreader } from "react-icons/si";
function Layout({ children }) {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div
      className="p-1"
      style={{
        background: theme === "dark" ? "#101010" : "white ",
        color:theme === "dark"?"white":"black",
        transition: ".1s all",
      }}
    >
      <Header />
      <div className="">
        <button
          type="btn"
          onClick={toggleTheme}
          className=" hover:cursor-grab"
          style={{
            background:theme === "dark" ? "black" : "white"
          }}
        >
          <SiDarkreader className="size-6" />
        </button>
      </div>

      <div>{children}</div>

      <Footer/>
    </div>
  );
}

export default Layout;

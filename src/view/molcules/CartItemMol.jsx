import React from "react";
import { useNavigate } from "react-router-dom";

function CartItemMol({ url, img, detail }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(url);
  };
  return (
    <div onClick={clickHandler} className="  md:h-80 md:flex md:justify-center md:items-center">
      <section className="">
        <img src={img} alt="" className="rounded-lg size-60" />
        <h1 className=" text-[0.9rem] h-[5vh] flex justify-center items-center font-bold font-serif relative top-1">
          {detail}
        </h1>
      </section>
    </div>
  );
}

export default CartItemMol;

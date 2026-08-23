import React from "react";
import { useState } from "react";
import "./followAtom.css";
function FollowAtom() {
  const [email, setEmail] = useState(
    " "
    // {
    //   email: {
    //     value: "",
    //     isValid: false,
    //   },
    // },
    // false
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // let userInfo = {
    //   email,
    // };

    // fetch("https://signup-a5828-default-rtdb.firebaseio.com/users.json", {
    //   method: "POST",
    //   body: JSON.stringify(userInfo),
    // }).then((res) => console.log(res));
  };
  return (
    <div className="bg-white text-black w-full">
      <div className=" flex flex-col justify-center items-center h-[30vh]">
        <h3 className="font-bold  text-xl">
          Follow in the same footsteps
        </h3>

        <p className="w-[300px] font-light  ">
          as these amazing players who are currently living the dream. <br />{" "}
          Schedule a free introduction call
        </p>

        <div>
          {" "}
          <form action="" onSubmit={handleSubmit} className="Form">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Your email address"
              className="FormInput"
            />
            <button type="submit" className="FormSubmit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FollowAtom;

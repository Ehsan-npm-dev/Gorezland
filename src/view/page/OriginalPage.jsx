import React from "react";
import OriginalTop from "../molcules/OriginalTop";
import Field from "../molcules/Field";
import CollegeAtom from "../atom/CollegeAtom";
import Process from "../molcules/Process";
import LearnAtom from "../atom/LearnAtom";
import FollowAtom from "../atom/FollowAtom";
function OriginalPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <OriginalTop />
      <Field />
      <CollegeAtom />
      <Process />
      <LearnAtom />
      <FollowAtom />
    </div>
  );
}

export default OriginalPage;

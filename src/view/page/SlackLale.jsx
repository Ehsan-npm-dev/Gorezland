import React from "react";
import slackLiner from "../../assets/hogo/IMG_5125.jpg";
import legends from "../../assets/background/squad-1024x1024.png";
import LearnItemMol from "../molcules/LearnItemMol";
import { learns } from "../../assets/Config";
import logo from "../../assets/Icon/Logo (2).png";
import UserItemMol from "../molcules/UserItemMol";
import { promises } from "../../assets/Config";
function SlackLale() {
  return (
    <div className="flex flex-col justify-center gap-2">
      <section
        className="md:flex md:justify-center md:gap-30 md:items-center w-full h-[90vh] "
        style={{
          backgroundImage: `url(${slackLiner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center text-white h-[90vh]">
          <img src={logo} alt="" />
          <p className=" w-110 md:w-200 font-extrabold text-md">
            هم اکنون در پلتفرم های کامپیوتر ، پلی استیشن 4 و 5 ، ایکس باکس{" "}
            <br />
            ایکس باکس سری ایکس و نینتندو سویچ بازی کنید
          </p>
          <span className="btn">
            <button className="border font-semibold p-1 w-42 h-8 text-sm rounded-sm hover:bg-amber-600">
              {" "}
              مشاهده تریلر
            </button>
            <button className="border font-semibold p-1 w-42 h-8 text-sm rounded-sm hover:bg-amber-600">
              هم اکنون بازی کنید
            </button>
          </span>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl">آخرین اخبار</h1>
          <div className="md:flex md:justify-center md:items-center md:gap-2`0">
            <div className="w-100 h-[30vh] rounded-sm flex flex-col justify-center items-center gap-2  ">
              <h1>
                {" "}
                <span className="text-red-500">افسانه ها</span>بازی را تغییر می دهند
              </h1>
              <p className="text-sm font-light md:w-122">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <button className="border font-semibold p-1 w-42 h-8 text-sm rounded-sm hover:bg-amber-600">
                مطالعه بیشتر
              </button>
            </div>

            <div className="md:flex md:flex-col md:justify-center md:items-center w-100 flex flex-col justify-center gap-1">
              <div
                className="w-full h-[30vh] text-white"
                style={{
                  backgroundImage: `url(${legends})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" ">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>هدف اصلی ما چیست؟</h3>
            <p className="text-sm font-light w-100 md:w-200">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد.
            </p>
            <div className="md:flex md:justify-center md:items-center md:gap-10 lg:gap-20">
              {learns.map((i) => (
                <LearnItemMol {...i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3> مفالات آموزشی وبسایت ما</h3>
          <div className="md:flex md:justify-center md:items-center w-full gap-2">
            <div>right</div>
            <div>left</div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1 className="font-extrabold text-xl">
            <span className="text-orange-600">نظرات</span> کاربران ما
          </h1>
          <div className="md:flex md:justify-center md:items-center md:gap-20 ">
            {promises.map((i) => (
              <UserItemMol {...i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SlackLale;

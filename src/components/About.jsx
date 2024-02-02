import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import Portimg from "../assets/portimg.png";
import { PiSealCheckFill } from "react-icons/pi";

function About() {
  return (
    <div
      id="About"
      className="lg:h-[130vh] h-[130vh] md:h-[90vh] w-[100%] bg-p1"
    >
      <div className="text-4xl font-black lg:ml-[2.8em] ml-6  lg:pt-0 pt-3 lg:w-[12%] md:w-[20%] w-[40%] flex items-center justify-center text-p3">
        <div className="bg-[#18423C] w-[100%]  text-end py-2 rounded-md">
          ABO
        </div>
        <span>UT</span>
      </div>
      <div className="w-[100%] md:h-[70%] h-[90%] bg-p1 flex flex-col md:flex-row items-center justify-around mt-[6em]">
        <div className="md:w-[30%] w-[90%] md:h-[90%] h-[45%] flex relative">
          <div className="h-[100%]  lg:w-[45%] md:w-[95%] w-[90%] bg-[#24EAEA] rounded-2xl">
            <div className="h-[80%] w-[75%] md:w-[90%]  bg-[#B1FFF5] relative left-[7em] md:left-[2em] top-[2em] rounded-2xl shadow-2xl flex lg:hidden  justify-end">
              <img src={Portimg} alt="" className="h-[100%] w-[80%]" />
            </div>
          </div>
          <div className="h-[80%] w-[75%] relative bg-[#B1FFF5] top-[2.7em] md:right-[8em] rounded-2xl shadow-2xl lg:flex  justify-end hidden ">
            <img src={Portimg} alt="" className="h-[100%] w-[80%]" />
          </div>
          <PiSealCheckFill className="text-[#DE762A] text-[100px] absolute  lg:left-[2.1em] md:top-[0.1em]" />
        </div>
        <div className="w-[90%] md:w-[45%] h-[60%] lg:mt-0 mt-6">
          <p className="text-2xl font-medium text-white">
            Hi there, I'm Chidiuto Johns. I'm a specialist in creating websites,
            web applications, writing (poems and blogs) with passion and
            precision.
          </p>
          <p className="text-p4 text-sm font-medium mt-2">
            With a passion for creativity and a commitment to precision, I
            specialize in developing captivating digital experiences. From
            stunning websites to engaging web applications. I bring together
            aesthetics and functionality to deliver exceptional results. Lets
            collaborate and bring your digital vision to life with expertise and
            attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

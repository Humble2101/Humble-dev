import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

function Services() {
  return (
    <div
      id="Services"
      className="h-[100vh] w-[100%] bg-p1 flex flex-col md:flex-row items-center justify-around"
    >
      <div className="flex  md:rotate-[-90deg] text-white text-4xl md:text-7xl font-bold relative md:right-[2.1em]">
        <div className="px-10 pr-5 rounded-md bg-p3">SERVIC</div>ES
      </div>
      {/* <FaReact className="md:relative md:left-[5em] md:bottom-[3.9em] bg-p1 text-6xl text-[#61DAFB]" />
      <SiMongodb className="md:relative bg-p1 text-7xl md:left-[1.6em] text-[#13AA52]" />
      <SiExpress className="md:relative md:left-[3.5em] md:top-[3.8em] bg-p1 text-6xl text-[#000000]" /> */}
      <div className="lg:h-[90%] h-[38%] lg:w-[40%] w-[80%] border-dashed  border-[2px] rounded-full flex items-center justify-center relative md:right-[5em] lg:right-0">
        <FaReact className=" absolute md:top-[3.5em] left-[-0.5em] bg-p1 md:text-6xl text-4xl text-[#61DAFB]" />
        <SiMongodb className="absolute lg:top-[8.3em] md:top-[6.4em] top-[5.6em] md:text-6xl text-5xl text-[#13AA52]" />
        <SiExpress className="absolute top-[-0.5em] bg-p1 md:text-6xl text-4xl text-[#000000]" />
        <div className="h-[63%] w-[63%] border-dotted border-[2px] rounded-full flex items-center justify-center">
          <FaHtml5 className="relative md:bottom-[1.7em] bottom-[1em] md:right-0 right-[0.1em] md:text-6xl text-4xl bg-p1 text-[#E34F26]" />
          <SiCss3 className="relative top-[1em] md:right-[1em] right-[0.6em] md:text-6xl text-4xl bg-p1 text-[#1752B6]" />
          <div className="h-[48%] md:w-[59%] w-[90%] rounded-full bg-p3 index ml-4"></div>
          <RiJavascriptFill className="relative md:bottom-[1.7em] bottom-[0.6em] md:left-[0.4em] left-[0.7em] text-6xl bg-p1 text-[#F7DF1E]" />
          <SiTailwindcss className="relative md:top-[1em] top-[0.7em] text-6xl bg-p1 text-[#38B2AC]" />
        </div>
        <TbBrandNextjs className="absolute lg:top-[1.2em] md:top-[0.8em] top-[1em] bg-p1 md:text-6xl text-4xl" />
        <TbWritingSign className="absolute lg:top-[5.4em] md:top-[4em] top-[6em] bg-p1 md:text-7xl text-4xl text-[gray]" />
        <FaNode className="absolute md:top-[3.5em] right-[-0.5em] bg-p1 md:text-6xl text-4xl text-[#8CC84B]" />
      </div>
    </div>
  );
}

export default Services;

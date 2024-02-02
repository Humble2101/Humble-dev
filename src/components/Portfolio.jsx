import React, { useState } from "react";
import Fast1 from "../assets/fast110.png";
import Fast2 from "../assets/fast11.png";
import Fast3 from "../assets/fast12.png";
import Fast4 from "../assets/fast13.png";
import Fast5 from "../assets/fast14.png";
import Fast6 from "../assets/fast15.png";
import Fast7 from "../assets/fast16.png";
import Fast8 from "../assets/fast17.png";
import Git from "../assets/git.png";
import Git2 from "../assets/git2.png";
import Doom from "../assets/doom.png";
import Doom2 from "../assets/doom.png";
import Death from "../assets/death.png";
import Death2 from "../assets/death2.png";

function Portfolio() {
  const [techport, setTechport] = useState(true);
  const [writePort, setWritePort] = useState(false);

  const openWebsites = () => {
    setTechport(true);
    setWritePort(false);
  };

  const openWritings = () => {
    setWritePort(true);
    setTechport(false);
  };
  return (
    <div
      id="Portfolio"
      className="lg:h-[160vh] h-[280vh] w-[100%] bg-p1 md:pt-[5em] pt-[2em] flex flex-col items-center justify-between"
    >
      <div className="text-4xl font-black lg:mr-[25em] lg:w-[20%] md:w-[35%] w-[80%] flex items-center justify-center text-p3">
        <div className="bg-[#18423C] w-[100%] text-end py-4 rounded-md">
          PORTFOLI
        </div>
        <span>OS</span>
      </div>
      <div className="lg:h-[150vh] h-[270vh] w-[100%] flex flex-col items-center justify-around bg-p1">
        <div className="h-[8vh] md:w-[40%] w-[90%] bg-p3 flex items-center justify-center rounded-lg">
          <div className="w-[80%] flex items-center justify-around">
            <h1
              className=" font-bold text-2xl cursor-pointer"
              onClick={openWebsites}
            >
              Websites
            </h1>
            <h1
              className=" font-bold text-2xl cursor-pointer"
              onClick={openWritings}
            >
              Writings
            </h1>
          </div>
        </div>
        {techport && (
          <div className="w-[90%] lg:h-[80%] h-[95%] flex  flex-col lg:flex-row items-center justify-around">
            <div className="h-[95%] lg:w-[25%] w-[90%] flex items-center justify-between flex-col">
              <img src={Fast1} alt="" className="h-[45%] rounded-xl" />
              <div className="h-[50%] w-[100%] flex flex-col items-center justify-between">
                <div className="h-[50%] w-[100%] flex items-center justify-between">
                  <img
                    src={Fast2}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                  <img
                    src={Fast3}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                  <img
                    src={Fast4}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                </div>
                <div className="h-[100%] w-[100%] text-white">
                  <h1 className="font-bold">FASTHANDS</h1>
                  <p>
                    A web application that connects artisans to people who need
                    their services.
                  </p>
                  <a
                    href="https://fast-hand-project.vercel.app"
                    className="text-p3"
                  >
                    Link.....
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[95%] lg:w-[25%] w-[90%] flex items-center justify-between flex-col">
              <img src={Fast5} alt="" className="h-[45%] rounded-xl" />
              <div className="h-[50%] w-[100%] flex flex-col items-center justify-between">
                <div className="h-[50%] w-[100%] flex items-center justify-between">
                  <img
                    src={Fast6}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                  <img
                    src={Fast7}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                  <img
                    src={Fast8}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                </div>
                <div className="h-[100%] w-[100%] text-white">
                  <h1 className="font-bold">Ecospark</h1>
                  <p>
                    A web application where people can get home services like
                    cooking, cleaning, home delivery etc.
                  </p>
                  <a href="https://eco-spak.vercel.app" className="text-p3">
                    Link...
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[95%] lg:w-[25%] w-[90%] flex items-center justify-between flex-col">
              <img src={Fast1} alt="" className="h-[45%] rounded-xl" />
              <div className="h-[50%] w-[100%] flex flex-col items-center justify-between">
                <div className="h-[50%] w-[100%] flex items-center justify-between">
                  <img
                    src={Fast2}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                  <img
                    src={Fast3}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                  <img
                    src={Fast4}
                    alt=""
                    className="w-[30%] h-[100%] rounded-lg"
                  />
                </div>
                <div className="h-[100%] w-[100%] text-white">
                  <h1 className="font-bold">FASTHANDS</h1>
                  <p>
                    A web application that connects artisans to people who need
                    their services.
                  </p>
                  <a
                    href="https://fast-hand-project.vercel.app"
                    className="text-p3"
                  >
                    Link.....
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {writePort && (
          <div className="w-[90%] h-[90%] flex lg:flex-row flex-col items-center justify-around">
            <div className="lg:w-[30%] w-[90%] h-[90%] flex items-center justify-center flex-col text-white">
              <div className="h-[60%] w-[100%] flex flex-col items-center justify-around">
                <img src={Git} alt="" className="h-[45%] w-[100%]" />
                <img src={Git2} alt="" className="h-[45%] w-[100%]" />
              </div>
              <div className="w-[100%]">
                <h1 className="font-bold">Security Practices for using Git</h1>
                <p>An article on the best security practices of using Git</p>
                <p>Link to the article is below.....</p>
                <a
                  href="https://docs.google.com/document/d/1RmFwykOCC3966ut0KONib8iC7CIKjkNAdQxSiFHTPiA/edit?usp=sharing"
                  className="text-[cornflowerblue] w-[100%]"
                >
                  Link
                </a>
              </div>
            </div>

            <div className="lg:w-[30%] w-[90%] h-[90%] flex items-center justify-center flex-col text-white">
              <div className="h-[60%] w-[100%] flex flex-col items-center justify-around">
                <img src={Doom} alt="" className="h-[45%] w-[100%]" />
                <img src={Doom2} alt="" className="h-[45%] w-[100%]" />
              </div>
              <div className="w-[100%]">
                <h1 className="font-bold">Prince of Doom</h1>
                <p>
                  A poem with a heightend imagery picturing doom as a person.
                </p>
                <p>Link to the Poem is below.....</p>
                <a
                  href="https://docs.google.com/document/d/1Vt53zh8R26A8x4IXvK_-gCWRmxEsv568dLnEiCIo_Uw/edit?usp=sharing"
                  className="text-[cornflowerblue] w-[100%]"
                >
                  Link
                </a>
              </div>
            </div>
            <div className="lg:w-[30%] w-[90%] h-[90%] flex items-center justify-center flex-col text-white">
              <div className="h-[60%] w-[100%] flex flex-col items-center justify-around">
                <img src={Death} alt="" className="h-[45%] w-[100%]" />
                <img src={Death2} alt="" className="h-[45%] w-[100%]" />
              </div>
              <div className="w-[100%]">
                <h1 className="font-bold">Equilibrum of Death</h1>
                <p>A poem on the equilibrum of death.</p>
                <p>Link to the Poem is below.....</p>
                <a
                  href="https://docs.google.com/document/d/17zQUX3XQ_laQKoGGZSKoGJlDy-TXUlFfLZ1Os8WRBCg/edit?usp=sharing"
                  className="text-[cornflowerblue] w-[100%]"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;

import { BsTelephoneFill } from "react-icons/bs";
import React, { useState } from "react";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Mail from "../assets/gmail.png";
import Whatsapp from "../assets/whatsapp.png";
import Instagram from "../assets/instagram.jpeg";
import Twitter from "../assets/Twitter.png";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Header(props) {
  const [openexplore, setOpeneplore] = useState(false);
  const [nav, setNav] = useState(false);
  const [x, setX] = useState(true);

  const explore = () => {
    setOpeneplore(!openexplore);
    setNav(false);
  };
  const OpenNav = () => {
    setNav(!nav);
    setOpeneplore(false);
  };
  const close = () => {
    setOpeneplore(false);
  };
  return (
    <div className="w-[100%] lg:h-[15vh] h-[10vh] flex items-center justify-around bg-p1">
      <div className="w-[30%] lg:w-[12%] mr-[12em] lg:mr-0 md:mr-[10em] ">
        <h2 className="">
          <img src={Logo} alt="" />
        </h2>
      </div>
      <div className="w-[40%] lg:flex items-center justify-around text-p4 font-medium hidden">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">contact</a>
      </div>
      <div className="w-[15%] lg:flex items-center justify-around hidden">
        <div className="border-p2 border-2 px-3 py-2 rounded-md">
          <BsTelephoneFill className="text-p2 text-xl" />
        </div>
        <button
          className=" bg-p3 px-5 py-1 rounded-md font-medium"
          onClick={explore}
        >
          Explore
        </button>
      </div>
      {openexplore && (
        <div className="h-[80vh] lg:h-[80vh] md:h-[60vh] w-[100%] lg:w-[40vw] bg-p2 rounded-md absolute  md:top-[6.3em] lg:top-[5em] top-[4.4em] lg:right-5 flex flex-col items-center justify-around">
          <p
            className="w-[100%] flex justify-end pr-10 text-xl md:text-2xl font-bold"
            onClick={close}
          >
            x
          </p>
          <div className="w-[90%] h-[85%] flex flex-col items-center justify-around">
            <div className="h-[30%] w-[100%] flex items-center justify-around">
              <div className="h-[100%] w-[45%] flex flex-col justify-end">
                <h1 className="text-3xl font-bold">Chidiuto Johns</h1>
                <p className="text-sm">I am a full stack web developer</p>
              </div>
              <div className="h-[100%] w-[43%] flex flex-col justify-end">
                <p>Oyoyo’s close</p>
                <p>Obudu, Cross River State ,Nigeria</p>
                <p className="font-bold">07087657868</p>
                <p className="font-bold">davidjohns2101@gmail.com</p>
              </div>
            </div>
            <div className="h-[30%] w-[100%] flex items-center justify-around">
              <div className="h-[100%] w-[50%] flex flex-col justify-end">
                <h1 className="text-xl font-bold text-[#010F0D]">Education</h1>
                <p className="text-sm lg:text-sm md:text-lg">
                  <span className="font-bold">learnFactory</span>, Beside MTN
                  office, <br />
                  Umungasi, Aba <br />
                  Software Engineering <br />
                  (Fullstack Javascript)
                </p>
              </div>
              <div className="h-[100%] w-[50%] flex flex-col justify-end md:text-lg">
                <p>Poet.</p>
                <p>JavaScript developer.</p>
                <p>React developer.</p>
                <p>Next Js developer.</p>
              </div>
            </div>
            <a
              href="https://docs.google.com/document/d/1vGTVI6Eye6BvY-aSz6NG0Y3SfR9uKhNLY5PlHZggzrA/edit?usp=sharing"
              className="px-5 py-3 bg-p3 shadow-2xl rounded-lg text-p1 font-bold"
            >
              View CV
            </a>
          </div>
          <div className="flex items-center justify-between w-[70%] h-[20%]">
            <a
              href="https://github.com/humblepriest"
              className="w-[13%] cursor-pointer"
            >
              <img src={Github} alt="" className="w-[100%] rounded-lg" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076256585722"
              className="w-[13%]"
            >
              <img src={Facebook} alt="" className="w-[100%] rounded-lg" />
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhumble_david_johns%3Figsh%3DZm5laGx5YXY0eHJy%26fbclid%3DIwAR0xGRpxreOscI6cTAIB93pMvg6LtEo96PCpU-GEM-e4-FzQHPufkk-1mQs&h=AT2DRmtMq2l-JH5hyjmy_pIKHfrdGquTOwRmnnEwgTZpHvHvJ-6jWv1nFPgz2_A9BTtt3mFvJB0H8EVQTqJXpyiUH5P4Dov3Po5ejYl_0SZdXMRs56TUoAQOcciZhQ"
              className="w-[13%]"
            >
              <img src={Instagram} alt="" className="w-[100%] rounded-lg" />
            </a>
            <a href="https://wa.link/cxp2z0" className="w-[13%]">
              <img src={Whatsapp} alt="" className="w-[100%] rounded-lg" />
            </a>
            <a href="#Email" className="w-[13%]">
              <img src={Mail} alt="" className="w-[100%] rounded-lg" />
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2FDavidJohns49092%3Ft%3D5O6yS4IeBlzPIBLD4BTSJA%26s%3D09%26fbclid%3DIwAR19Y-AvsP4yzJ-R4aiHLi-XGk8R2uGINp0yPlRL1uxrTSKDXwJ7gfCi56c&h=AT1hGOb0QS-7R1SqllBgMD3Uhh20CfmQnyxt7iF0qAMdkc68qq5Lx55pliNHB0yaL82ICf99VdOm8GlH8SdMGBHjNHSSoVHLCDZERUWUMR3ulHDHo9-sHTTJCrpyig"
              className="w-[13%] bg-white  md:h-[55%] h-[35%] flex items-center justify-center rounded-md"
            >
              <img src={Twitter} alt="" className="w-[100%] rounded-lg" />
            </a>
          </div>
        </div>
      )}
      <GiHamburgerMenu
        className=" lg:hidden text-p2 text-3xl md:text-5xl"
        onClick={OpenNav}
      />
      {nav && (
        <div className="w-[50vw] md:w-[30vw] h-[40vh] bg-p2 absolute top-[3.8em] md:top-[6em] md:text-xl md:font-semibold right-0 rounded-lg flex flex-col pl-6 text-lg justify-around">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">contact</a>
          <button
            className=" bg-p3 w-[50%] md:py-2 rounded-md md:text-xl font-medium"
            onClick={explore}
          >
            Explore
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;

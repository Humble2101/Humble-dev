import React from "react";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Mail from "../assets/gmail.png";
import Whatsapp from "../assets/whatsapp.png";
import Instagram from "../assets/instagram.jpeg";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="h-[50vh] w-[100%] bg-[#010F0D] flex flex-col items-center justify-center">
      <div className="w-[90%] h-[40%] border-b border-[gray] flex items-center justify-center">
        <h2 className="">
          <img src={Logo} alt="" className="w-[50%]" />
        </h2>
        <div className="w-"></div>
        <div className="w-[40%] lg:flex items-center justify-around text-p4 font-medium hidden">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">contact</a>
        </div>
        <div className="flex items-center justify-between w-[80%] lg:w-[30%] h-[20%]">
          <a
            href="https://github.com/humblepriest"
            className="w-[18%] cursor-pointer"
          >
            <img src={Github} alt="" className="w-[100%] rounded-lg" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100076256585722"
            className="w-[18%]"
          >
            <img src={Facebook} alt="" className="w-[100%] rounded-lg" />
          </a>
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhumble_david_johns%3Figsh%3DZm5laGx5YXY0eHJy%26fbclid%3DIwAR0xGRpxreOscI6cTAIB93pMvg6LtEo96PCpU-GEM-e4-FzQHPufkk-1mQs&h=AT2DRmtMq2l-JH5hyjmy_pIKHfrdGquTOwRmnnEwgTZpHvHvJ-6jWv1nFPgz2_A9BTtt3mFvJB0H8EVQTqJXpyiUH5P4Dov3Po5ejYl_0SZdXMRs56TUoAQOcciZhQ"
            className="w-[18%]"
          >
            <img src={Instagram} alt="" className="w-[100%] rounded-lg" />
          </a>
          <a href="https://wa.link/cxp2z0" className="w-[18%]">
            <img src={Whatsapp} alt="" className="w-[100%] rounded-lg" />
          </a>
          <a
            href="https://mail.google.com/davidjohns2101@gmail.com"
            className="w-[18%]"
          >
            <img src={Mail} alt="" className="w-[100%] rounded-lg" />
          </a>
        </div>
      </div>
      <div className="w-[90%] h-[40%] flex items-center justify-center">
        <p className="text-[gray] text-xl">&copy;Copyright @ 2024 Humble</p>
      </div>
    </div>
  );
}

export default Footer;

import Badass from "../assets/badassprussia.png";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Mail from "../assets/gmail.png";
import Whatsapp from "../assets/whatsapp.png";
import Instagram from "../assets/instagram.jpeg";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/logo.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n46ktsu",
        "template_00ltmrr",
        form.current,
        "c3LoePjYeggmJmrzA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="Contact"
      className="h-[160vh] w-[100%] bg-p1 pt-[5em] flex flex-col items-center justify-between"
    >
      <div className="text-4xl font-black lg:mr-[25em] lg:w-[20%] w-[50%] flex items-center justify-center text-p3">
        <div className="bg-[#18423C] w-[100%] text-end py-4 rounded-md">
          CONTA
        </div>
        <span>CT</span>
      </div>
      <div className="h-[80%] lg:w-[80%] w-[90%] flex lg:flex-row flex-col items-center justify-around lg:mb-0 mb-[3em]">
        <div className="h-[90%] lg:w-[40%] w-[100%] bg-[#0B322D] lg:rounded-l-3xl rounded-t-3xl flex items-center justify-around flex-col">
          <div className="w-[95%] lg:h-[40%] h-[30%] flex items-center justify-center">
            <img src={Badass} alt="" />
          </div>
          <div className="w-[95%] lg:h-[50%] h-[60%] flex flex-col items-center justify-around">
            <h2 className="w-[100%] flex items-center justify-center">
              <img src={Logo} alt="" className="w-[40%]" />
            </h2>

            <p className="text-white text-xl">
              I value excellence,collaboration and client satisfaction. I
              believe in forging strong partnerships to bring your digital
              visions to life.
            </p>
            <div className="flex items-center justify-between w-[90%] h-[20%]">
              <a
                href="https://github.com/humblepriest"
                className="lg:w-[18%] w-[14%] cursor-pointer"
              >
                <img src={Github} alt="" className="w-[100%] rounded-lg" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076256585722"
                className="lg:w-[18%] w-[14%]"
              >
                <img src={Facebook} alt="" className="w-[100%] rounded-lg" />
              </a>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhumble_david_johns%3Figsh%3DZm5laGx5YXY0eHJy%26fbclid%3DIwAR0xGRpxreOscI6cTAIB93pMvg6LtEo96PCpU-GEM-e4-FzQHPufkk-1mQs&h=AT2DRmtMq2l-JH5hyjmy_pIKHfrdGquTOwRmnnEwgTZpHvHvJ-6jWv1nFPgz2_A9BTtt3mFvJB0H8EVQTqJXpyiUH5P4Dov3Po5ejYl_0SZdXMRs56TUoAQOcciZhQ"
                className="lg:w-[18%] w-[14%]"
              >
                <img src={Instagram} alt="" className="w-[100%] rounded-lg" />
              </a>
              <a href="https://wa.link/cxp2z0" className="lg:w-[18%] w-[14%]">
                <img src={Whatsapp} alt="" className="w-[100%] rounded-lg" />
              </a>
              <a
                href="https://mail.google.com/davidjohns2101@gmail.com"
                className="lg:w-[18%] w-[14%]"
              >
                <img src={Mail} alt="" className="w-[100%] rounded-lg" />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="h-[90%] lg:w-[60%] w-[100%] bg-[#010F0D] lg:rounded-r-3xl rounded-b-3xl flex items-center justify-center">
          <div className="h-[95%] w-[90%]">
            <div className="h-[10%] flex flex-col text-white text-xl justify-between">
              <p>Let's connect</p>
              <p>Reach out for collaboration and consultation.</p>
            </div>
            <div className="w-[100%] lg:h-[90%] h-[80%] flex flex-col items-center justify-around relative lg:mt-0 mt-10">
              {/* <div className="w-[100%] flex items-center justify-between h-[8%] relative">
                <input
                  type="name"
                  placeholder="First Name"
                  className="h-[100%] w-[45%] rounded-md  placeholder:text-white placeholder:font-bold bg-gray-600 pl-8 outline-none  text-black"
                />
                <IoPerson className="absolute left-2 top-[0.5em] text-xl hidden lg:flex" />
                <input
                  type="name"
                  placeholder="Last Name"
                  className="h-[100%] w-[45%] rounded-md  placeholder:text-white placeholder:font-bold bg-gray-600 pl-8 outline-none  text-black"
                  radioGroup=""
                />
                <IoPerson className="absolute top-[0.5em] text-xl right-[11.7em] hidden lg:flex" />
              </div>
              <input
                type="email"
                className="h-[10%] w-[100%] placeholder:text-white placeholder:font-bold rounded-md bg-gray-600 outline-none pl-8"
                placeholder="Email"
              />
              <MdEmail className="absolute top-[6.3em] left-2  text-xl hidden lg:flex" />
              <textarea
                name=""
                id=""
                cols="40"
                rows="20"
                className="h-[40%] w-[100%] rounded-md placeholder:text-white placeholder:font-bold bg-gray-600 pl-8 outline-none"
                placeholder="Describe your issues"
              ></textarea>

              <div className="h-[10%] w-[100%]">
                <button className="text-xl font-bold bg-p3 px-8 py-5 rounded-md">
                  Send
                </button>
              </div>  */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-[100%] lg:h-[80%] h-[90%] flex flex-col items-center justify-around"
                id="Email"
              >
                <div className="w-[90%] lg:h-[10%] h-[25%] flex lg:flex-row flex-col items-center justify-between">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full name"
                    className="lg:w-[45%] w-[100%] md:placeholder:text-lg placeholder:text-black bg-[gray] rounded-md pl-4 lg:h-[100%] h-[40%] outline-none"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="lg:w-[45%] w-[100%] md:placeholder:text-lg placeholder:text-sm placeholder:text-black bg-[gray] rounded-md pl-4 lg:h-[100%] h-[40%] outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-[90%] h-[50%] rounded-md pl-4 pt-2 bg-[gray] placeholder:text-black placeholder:text-lg outline-none"
                />
                <input
                  type="submit"
                  value="Send"
                  className="bg-p2 lg:py-3 px-8 py-1 rounded-md text-lg font-semibold cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

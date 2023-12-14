import React, { useRef, useState } from "react";
import Landing from "../components/Contact/Landing";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { styles } from "../style";
import { icon10, icon11 } from "../assets/landing/icon/icon";
import emailjs from "@emailjs/browser";

function Delete() {
  const [loading, isLoading] = useState(false);
  const [request, isRequest] = useState(false);

  const form = useRef();

  const onSubmit = (e) => {
    isLoading(true);
    e.preventDefault();
    isRequest(false);
    emailjs
      .sendForm(
        "service_fcviedm",
        "template_3b0c37l",
        form.current,
        "id3JmKBXtuebmcyPU"
      )
      .then((result) => {
        isLoading(false);
        isRequest(true);
        form.current.reset()
        console.log("Email sent successfully!", result.text);
      })
      .catch((error) => {
        isLoading(false);
        console.error("Error sending email:", error.text);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full h-full items-center gap-8 md:gap-16 md:pt-20 py-5 px-6">
        <div className="flex flex-col md:max-w-xl text-center gap-2 md:gap-4">
          <p className={`${styles.heroHeadText}`}>Delete Request</p>
          <p className={`${styles.heroSubText}`}>
            Please submit your email id for remove your account
          </p>
        </div>
        <form className="flex flex-col" ref={form} onSubmit={onSubmit}>
          <input
            required
            type="text"
            id="email"
            name="email"
            placeholder="Your Email Address"
            className="border border-[#D3D3D3] rounded-md px-4 py-3 bg-[#F3F5F6]"
            autoComplete="email"
          />

          <button
            type="submit"
            className={`px-8 py-2  rounded-full ${
              loading ? "bg-white bg-opacity-10" : "bg-red"
            }  ${loading? "text-red":"text-white"}  mt-10`}
          >
            {loading ? "Loading" : "Submit"}
          </button>
        </form>

        {request && (
          <div>
            <p className={`${styles.heroSubText}`}>
              Delete request placed successfully..
            </p>
          </div>
        )}

        <div className="flex flex-wrap md:justify-center gap-4 md:gap-16">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={icon10}
              alt="phone"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <p className="font-bold text-base md:text-2xl text-red">
              Call Us: <span className="text-black">+001 6547 6589</span>
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img
              src={icon11}
              alt="email"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <p className="font-bold text-base md:text-2xl text-red">
              Mail Us: <span className="text-black">Petbey@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Delete;

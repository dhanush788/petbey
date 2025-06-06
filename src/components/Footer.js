import React from "react";
import { styles } from "../style";

const Footer = () => {
  return (
    <div className="bg-[#F3F5F6] flex items-center flex-col">
      <div className="w-full flex flex-wrap gap-y-8 gap-x-8 md:gap-x-0 md:flex-row py-6 md:py-16 px-6 max-w-7xl">
        <div className="flex md:flex-1">
          <div className="flex flex-col md:mx-auto text-left gap-y-5">
            <div className="flex flex-row">
              <img src="./logo1.png" alt="logo" className="h-12"></img>
            </div>
            <p className={`${styles.heroSubText}`}>
              We're more than a marketplace - we're a network of pet lovers
              dedicated to create a positive and enriching environment for pets
              and their owners.
            </p>
          </div>
        </div>
        <div className="flex md:flex-1">
          <div className="flex flex-col md:mx-auto gap-y-3 ">
            <p className={`${styles.heroSubHeadText}`}>Social Media</p>
            <a
              href="https://www.instagram.com/petbeyindia?igsh=MXJqcWs2MTVnaml4OQ=="
              className={`${styles.heroSubText}`}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093138654971&mibextid=ZbWKwL"
              className={`${styles.heroSubText}`}
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/petbey-india-pvt-ltd/"
              className={`${styles.heroSubText}`}
            >
              LinkedIn
            </a>
            <a
              href="https://wa.link/ybx8kx"
              className={`${styles.heroSubText}`}
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="flex md:flex-1">
          <div className="flex flex-col md:mx-auto gap-y-3 ">
            <p className={`${styles.heroSubHeadText}`}>Quick Link</p>
            <a href="/terms" className={`${styles.heroSubText}`}>
              Terms and Condition
            </a>
            <a href="/privacy" className={`${styles.heroSubText}`}>
              Privacy Policy
            </a>
            <a href="/safety-standards" className={`${styles.heroSubText}`}>
              Safety Standards
            </a>
          </div>
        </div>
        <div className="flex md:flex-1">
          <ul className="flex flex-col md:mx-auto gap-y-3 w-full">
            <p className={`${styles.heroSubHeadText}`}>Get in Touch</p>
            <p className={`${styles.heroSubText}`}>
              Question or feedback? We’d love to hear from you.
            </p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email Address"
              className="border border-[#D3D3D3] rounded-md px-4 py-3 bg-[#F3F5F6] w-full"
              autoComplete="email"
            />
          </ul>
        </div>
      </div>
      <div className="bg-red w-full flex justify-center py-2 md:py-4">
        <p className={`${styles.heroSubText2}`}>
          © 2023 Petbey. All rights reserved.
          <a
            href="http://www.procube.cx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200"
          >
            Powered By Procube.Cx.
          </a>
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;

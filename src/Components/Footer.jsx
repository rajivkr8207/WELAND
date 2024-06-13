import React from "react";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twiter from "../assets/twiter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#051038] w-full">
        <div className="container mx-auto flex justify-around lg:flex-row flex-col py-5 ">
          <div className="mx-7 lg:my-0 my-5">
            <h1 className="text-4xl">Get in Touch</h1>
            <p className="font-['Oswald'] text-[#EBEBEB]">
              Email: support@weland.com
            </p>
            <p className="font-['Oswald'] text-[#EBEBEB]">
              Phone: +1 (234) 567-8901
            </p>
            <p className="font-['Oswald'] text-[#EBEBEB]">
              Address: 123 Virtual Lane, Metaverse City, VR
            </p>
            <p className="flex gap-3 my-3">
              <Link  to='/'>
                <img src={insta} alt="instagram logo" className="w-9 h-9" />
              </Link>
              <Link  to='/'>
                <img src={twiter} alt="twitter logo" className="w-9 h-9" />
              </Link>
              <Link  to='/'>
                <img src={facebook} alt="facebook logo" className="w-9 h-9" />
              </Link>
            </p>
          </div>
          <div className="mx-auto lg:mx-0 lg:my-0 my-5">
            <h1 className="text-4xl">
              Subscribe to <br />
              Newsletter
            </h1>
            <p className="flex">
              <input
                type="text"
                placeholder="Enter your Email"
                className="outline-none bg-[#2f3858] px-2 py-1"
              />
              <button className="font-semibold bg-[#03bab9]  px-5 py-2">
                Submit
              </button>
            </p>
          </div>
        </div>

        <div className="text-center text-lg py-2">
          © {new Date().getFullYear()} WELAND. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;

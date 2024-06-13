import React from "react";
import earth from "../../assets/earth.png";
import About from "./About";
import Vision from "./Vision";
import Questions from "./Questions";
const Main = () => {
  return (
    <>
      <div className="container mx-auto flex lg:flex-row flex-col justify-center  gap-18 items-center lg:h-[80vh] h-auto p-4">
        <div className="lg:w-[30vw] w-full flex flex-col justify-center items-start space-y-4">
          <h1 className="text-5xl font-medium">
            Virtualizing <br />
            Real Estate
            <br />
            Investment
          </h1>
          <p className="text-3xl font-['Oswald'] text-[#CDCDCD]">
            Explore, invest, and own virtual properties like never before.
          </p>
          <button className="font-semibold bg-[#03bab9] rounded-full px-5 py-2">
            Explore Now
          </button>
        </div>
        <div className="lg:w-[30vw] w-full flex justify-center items-center lg:h-[60vh] h-auto">
          <img src={earth} alt="Earth" className="object-contain h-full" />
        </div>
      </div>

      <hr className="w-1/2 mx-auto border-gray-500 border" />
      <About />
      <Vision/>
      <Questions/>
    </>
  );
};

export default Main;

import React from "react";
import earth from "../../assets/earth.png";
const About = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-4xl font-semibold text-center">About WELAND</h1>

        <div className="flex justify-center gap-20 lg:flex-row flex-col">
          <div className="lg:w-[30vw] w-full flex justify-center items-center lg:h-[60vh] h-auto">
            <img src={earth} alt="Earth" className="object-contain h-full" />
          </div>
          <div className="lg:w-[30vw] w-full flex justify-center items-center lg:h-[60vh] h-auto">
            <p className="text-2xl font-['Oswald'] text-[#CDCDCD] text-center">  
            WELAND is an immersive platform that transforms the virtual real estate market. Here, you can explore, invest in, and own virtual properties in a dynamic and
            interactive environment. Join us and be part of the future of digital ownership.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-1/2 mx-auto border-gray-500 border" />
    </>
  );
};

export default About;

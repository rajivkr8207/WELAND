import React from "react";

const Vision = () => {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className=" flex justify-center gap-20 lg:flex-row flex-col">
          <div className="lg:w-[30vw] gap-3  w-full flex justify-center flex-col items-center">
            <h1 className="text-5xl font-semibold">Our Vision</h1>
            <p className="text-xl font-['Oswald'] text-[#CDCDCD] text-center">
              To transform real estate investment with an exciting, easy-to-use
              platform where users can explore, invest, and own virtual
              properties.
            </p>
          </div>
          <div className="lg:w-[30vw] gap-3 w-full flex justify-center flex-col items-center">
          <h1 className="text-5xl font-semibold">Our Mission</h1>
            <p className="text-xl font-['Oswald'] text-[#CDCDCD] text-center">
            We aspire to shape the future of digital ownership, making it accessible, enjoyable, and    
            beneficial for everyone.
            </p>
          </div>
        </div>

        <div className="lg:w-[60vw] w-full mx-auto my-10 py-5 bg-[#33427675] backdrop-blur-lg rounded-lg text-center">
            <h1 className="text-3xl font-semibold  ">Ready to Start Your <br />
            Virtual Real Estate Journey?</h1>
            <button className="font-semibold bg-[#03bab9] rounded-full px-5 py-1 text-xl my-2 shadow-lg ">
            Explore Now
          </button>
        </div>
      </div>

      <hr className="w-1/2 mx-auto border-gray-500 border" />
    </>
  );
};

export default Vision;

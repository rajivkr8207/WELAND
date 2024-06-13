import React from "react";
import { Link } from "react-router-dom";

const Mobilenav = (props) => {
  // console.log(handlechange);
  return (
    <>
      <div className="lg:hidden block absolute top-[10%] left-0 w-[100vw] bg-[#33427675] text-center py-2 backdrop-blur-sm">
        <ul className="flex flex-col gap-12 font-semibold text-xl">
          <li onClick={props.handlechange}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={props.handlechange}>
            <Link to="/explore">Explore Now</Link>
          </li>
          <li onClick={props.handlechange}>
            <Link
              to="/"
              className="bg-[#03bab9] px-5 py-1 text-white rounded-full cursor-pointer"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;

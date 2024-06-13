import React, { Component, useRef } from "react";
import Slider from "react-slick";
import earth from "../../assets/earth.png";
import planet4 from '../../assets/planet 4.png'
import planet6 from '../../assets/planet 6.png'

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const ExploreNow = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-center">
          Choose The Virtual World
        </h1>
        <button className="bg-[#03bab9] px-5 py-1 text-white rounded-lg font-semibold cursor-pointer uppercase my-3 ">
          Titan
        </button>

        <div className="slider-container relative ">
          <div className="absolute top-[47%] left-0 bg-black text-2xl rounded-full p-2 z-10 mx-2" onClick={previous}>
            <FaChevronLeft />
          </div>
          <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
            <div>
              <img src={planet6} alt="Earth" className="object-contain h-full" />
            </div>
            <div>
              <img src={planet4} alt="Earth" className="object-contain h-full" />
            </div>
            <div>
              <img src={earth} alt="Earth" className="object-contain h-full" />
            </div>
            
          </Slider>
          <div className="absolute top-[47%] right-0 bg-black text-2xl rounded-full p-2 z-10 mx-2" onClick={next}>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreNow;

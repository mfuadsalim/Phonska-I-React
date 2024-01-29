import React, { useState } from "react";
import {
  IoCaretBackCircleOutline,
  IoCaretForwardCircleOutline,
} from "react-icons/io5";

const Carousel = () => {
  const slides = [
    require("../assets/carouselimg/foto1.jpg"),
    require("../assets/carouselimg/foto2.jpg"),
    require("../assets/carouselimg/foto3.jpg"),
    require("../assets/carouselimg/foto4.jpg"),
    require("../assets/carouselimg/foto5.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="h-3/4 w-full py-6 relative group ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="w-full h-[400px] rounded-2xl bg-center bg-cover duration-500 shadow-xl"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoCaretBackCircleOutline onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoCaretForwardCircleOutline onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};
export default Carousel;

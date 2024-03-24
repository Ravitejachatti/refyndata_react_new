import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="  md:py-16   sm:px-3 md:px-5 lg:px-20 bg-[#022452] text-white font-poppins ">
      <div className="container  lg:my-[-20px] mx-auto flex flex-col  md:flex-row items-center">
        {/* Column 1 */}
        <div className="md:w-3/5  mx-3 mb-8  md:mb-0 md:mr-4">
          <h1 className="ml-10 text-[20px] md:text-2xl lg:text-3xl font-bold leading-tight mb-4 font-grotesk lg:w-[80%] h-[180]">
            Empowering Success Through Expert IT Talent – Your Gateway to
            Innovation and Efficiency!
          </h1>
          <div className="md:hidden mx=10">
            <img
              src="/home_image/RefyndataHero.svg"
              alt="UsRefyndataHero"
              className="rounded-[10px] w-[90%] h-auto mx-auto ml-[-20] py-5"
            />
          </div>
          <p className="ml-10 text-s  md:text-xl mb-6 w-[80%] md:w-[75%] font-roboto ">
            Let's face it, traditional IT can be slow and fragmented. Refyn Data
            disrupts this by uniting specialists – analysts, developers, and
            testers – in one dynamic hub. Imagine your project needs met
            swiftly, communication flowing effortlessly, and solutions delivered
            with exceptional quality. Experience the Refyn Data difference.
          </p>

          <Link to="/contact">
            <button className=" ml-10 text-center bg-[#0079A0] hover:shadow-lg text-white font-bold py-3 px-4 rounded transform transition-transform hover:translate-y-[-2px]">
              Contact
            </button>
          </Link>
        </div>
        {/* Column 2 */}
        <div className="md:w-2/5 hidden md:block">
          <img
            src="/home_image/RefyndataHero.svg"
            alt="refyndata"
            // Adjust the image size here for larger screens
            className="rounded-[10px] w-[200px] h-[100px] md:w-[400px] md:h-[410px] lg:w-[600px] lg:h-[300px] xl:w-[700px] xl:h-[350px] mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

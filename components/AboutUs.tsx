"use client";
import * as React from "react";

export const AboutUs = () => {
  return (
    <div id="about-us"  className="flex justify-center items-center align-middle justify-items-center bg-blue-500 bg-opacity-5 h-[700px] overflow-hidden"
  style={{
    width: "100%",
    transition: "background-position 0.3s ease",
    backgroundPosition: "0% 0%",
  }}>

                <img loading="lazy" src="illustration1.png" alt="ill1"
                     className="absolute w-[30%] h-[60%] max-w-3/10 rotate-0 bottom-0 top-[500px] right-0 left-[84%] -z-20"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />

                <img loading="lazy" src="illustration1.png" alt="ill1"
                     className="absolute w-[30%] h-[60%] max-w-3/10 rotate-0 bottom-0 top-[1070px] right-0 left-[-20%] filter -z-10"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />

                <img loading="lazy" src="incubator-logo.png" alt="Sairam Incubator Foundation Logo"
                     className="w-[30%] h-[80%] mr-[12%] filter transition-transform duration-500 ease-in-out hover:scale-110"/>

                <div className="flex flex-col w-[40%]">
                    <h2 className="font-montserrat font-bold text-rgba-17-17-17-80 text-7xl">
                         WHY INCUBATION<br/>IN SAIRAM?</h2>
                    <hr className="underline border-b-8 mt-[5%] w-[30%] border-blue-500 rounded-full mb-[5%]"/>
                    <p className="font-montserrat font-normal text-[1.2rem] md:text-[clamp(1.2rem, 0.23rem + 1.14vw, 1.6rem)] leading-[32px] text-454545">
                        The incubation process allows entrepreneurs to preserve capital and gain
                        external support to accelerate their business growth.
                        <br/>Through business incubation, the enterprise center captures each
                        entrepreneur’s uniqueness and offers support and customized services to
                        maximize business potential.
                    </p>
                </div>
            </div>
  );
};

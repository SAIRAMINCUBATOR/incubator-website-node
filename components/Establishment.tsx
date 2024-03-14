"use client";

import * as React from "react";
import img from "@/public/Illustration9.png"
import Image from "next/image";

export const Establishment = () => {
  return (
    <section className="points w-full relative flex gap-10 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-l from-blue-50 via-blue-90 overflow-hidden">
      {/* Images */}
      <Image
        loading="lazy"
        src={img}
        alt="ill1"
        className="absolute lg:w-[50%] lg:h-[100%] w-[45%] h-[30%] max-w-3/10 rotate-0 lg:bottom-0 bottom-[10%] left-[84%] filter"
        style={{
          filter:
            "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
        }}
      />

      <Image
        loading="lazy"
        src={img}
        alt="ill1"
        className="absolute lg:w-[50%] lg:h-[100%] w-[45%] h-[30%] max-w-3/10 rotate-0 lg:bottom-0 bottom-[60%] right-[84%] filter -z-20"
        style={{
          filter:
            "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
        }}
      />
      <div
        className="w-[600px] min-h-[350px] h-full flex flex-col m-3 p-10 bg-white shadow-lg border-4 border-blue-400 border-opacity-50 rounded-2xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-aos="zoom-out"
        data-aos-delay={100}
      >
        <h3 className="font-bold text-lg md:text-2xl text-gray-800">
          ESTABLISHMENT
        </h3>
        <hr className="underline border-b-[7px]  mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]" />
        <p
          className="text-base leading-26 text-gray-600 text-[20.5px] text-justify"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Sri Sairam Techno Incubation Foundation was established on 12th
          September 2020. The thrust areas are Solid Waste Management (SWM),
          Defence, Robotics, Agriculture, Drones, Healthcare & Additive
          manufacturing. Startups Incubated -85, Women Startups -14, Defense
          startups -2, Startups Graduated-17
        </p>
      </div>

      <div
        className="w-[600px] min-h-[350px] h-full flex flex-col m-3 p-10 bg-white shadow-lg border-4 border-blue-400 border-opacity-50 rounded-2xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-aos="zoom-out"
        data-aos-delay={200}
      >
        <h3 className="font-bold text-lg md:text-2xl text-gray-800">VISION</h3>
        <hr className="underline border-b-[7px]  mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]" />
        <p className="text-base text-balance text-gray-600 text-[20.5px] text-justify">
          To be a center of excellence that construct a dynamic and sustainable
          ecosystem for enriching Entrepreneurship Skills.
        </p>
      </div>

      <div
        className="w-[600px] min-h-[350px] h-full flex flex-col m-3 p-10 bg-white shadow-lg border-4 border-blue-400 border-opacity-50 rounded-2xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-aos="zoom-out"
        data-aos-delay={100}
      >
        <h3 className="font-bold text-lg md:text-2xl text-gray-800 ">
          OBJECTIVES
        </h3>
        <hr className="underline border-b-[7px]  mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]" />
        <p className="text-base text-balance text-gray-600 text-[20.5px] text-justify">
          Enhance the graduate engineers knowledge to suit the industry
          requirements. Ready to adopt industry culture. Make students aware of
          latest technology and understand the processes of developing a true
          product.
        </p>
      </div>

      <div
        className="w-[600px] min-h-[350px] h-full flex flex-col m-3 p-10 bg-white shadow-lg border-4 border-blue-400 border-opacity-50 rounded-2xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-aos="zoom-out"
        data-aos-delay={200}
      >
        <h3 className="font-bold text-lg md:text-2xl text-gray-800">MISSION</h3>
        <hr className="underline border-b-[7px] mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]" />
        <p className="text-base text-balance text-gray-600 text-[20.5px] text-justify">
          We are Committed to nurture creativity, innovation and
          entrepreneurship among students, Faculty and aspirants. We strongly
          cultivate industrial culture and standards.We enable process for
          developing ideas into products.
        </p>
      </div>
    </section>
  );
};

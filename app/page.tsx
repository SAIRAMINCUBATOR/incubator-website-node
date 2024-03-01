import Image from "next/image";
import {Slider} from "@/components/Slider"
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import * as React from "react";
import {Navbar} from "@/components/Navbar";

export default function Home() {
    return (
        <div className={"flex justify-center items-center align-middle justify-items-center flex-col"}>
            <Navbar/>
            <div className={"flex justify-center"}>
                <Slider/>
                <Link href={"/form"} className={"absolute top-[80%]"}>
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform-gpu hover:scale-105 hover:bg-blue-500">
                        Apply Now
                    </Button>
                </Link>
            </div>
            <div id="about-us"  className="flex justify-center items-center align-middle justify-items-center bg-blue-500 bg-opacity-5 h-[700px]"
  style={{
    width: "100%",
    transition: "background-position 0.3s ease",
    backgroundPosition: "0% 0%",
  }}>

                <img loading="lazy" src="illustration1.png" alt="ill1"
                     className="absolute w-[30%] h-[60%] max-w-3/10 z-[-1] rotate-0 bottom-0 top-[500px] right-0 left-[84%] filter"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />

                <img loading="lazy" src="illustration1.png" alt="ill1"
                     className="absolute w-[30%] h-[60%] max-w-3/10 z-[-1] rotate-0 bottom-0 top-[1070px] right-0 left-[-20%] filter"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />

                <img loading="lazy" src="incubator-logo.png" alt="Sairam Incubator Foundation Logo"
                     className="w-[30%] h-[80%] mr-[12%]"/>

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
            
            <section
      className="w-full relative flex gap-5 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-l from-blue-50 via-blue-90 overflow-hidden z-20"
    >
      {/* Images */}
      <img loading="lazy" src="illustration9.png" alt="ill1"
                     className="absolute w-[50%] h-[100%] max-w-3/10 z-10 rotate-0 bottom-0 right-0 left-[84%]"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />

<img loading="lazy" src="illustration9.png" alt="ill1"
                     className="absolute w-[50%] h-[100%] max-w-3/10 z-[10] rotate-0 bottom-0 right-[84%] filter"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />

      {/* Point Cards */}
      <div
        className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={100}
      >
        <h3 className="font-bold text-lg md:text-xl text-gray-800">ESTABLISHMENT</h3>
        <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
        <p className="text-base text-justify text-gray-600">
          Sri Sairam Techno Incubation Foundation was established on 12th September 2020...
        </p>
      </div>

      <div
        className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={200}
      >
        <h3 className="font-bold text-lg md:text-xl text-gray-800">VISION</h3>
        <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
        <p className="text-base text-justify text-gray-600">
          To be a center of excellence that constructs a dynamic and sustainable ecosystem for enriching Entrepreneurship Skills.
        </p>
      </div>

      <div
        className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={400}
      >
        <h3 className="font-bold text-lg md:text-xl text-gray-800">OBJECTIVES</h3>
        <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
        <p className="text-base text-justify text-gray-600">
          Enhance the graduate engineers' knowledge to suit the industry requirements. Ready to adopt industry culture. Make students aware of the latest technology and understand the processes of developing a true product.
        </p>
      </div>

      <div
        className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={300}
      >
        <h3 className="font-bold text-lg md:text-xl text-gray-800">MISSION</h3>
        <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
        <p className="text-base text-justify text-gray-600">
          We are committed to nurturing creativity, innovation, and entrepreneurship among students, faculty, and aspirants. We strongly cultivate industrial culture and standards. We enable the process for developing ideas into products.
        </p>
      </div>

      {/* Repeat similar structure for other point cards */}

    </section>
        </div>
    );
}

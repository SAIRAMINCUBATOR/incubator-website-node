import Image, { StaticImageData } from "next/image";
import { Slider } from "@/components/Slider";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import img from "@/public/projects/p1-1.jpg";
import img1 from "@/public/projects/p2-1.jpg";
import img2 from "@/public/projects/p3-1.png";
import img3 from "@/public/projects/p4-1.png";
import img4 from "@/public/projects/p5-1.png";
import img5 from "@/public/projects/p6-1.jpg";

import cimg from "@/public/logo/1.png";
import cimg1 from "@/public/logo/2.png";
import cimg2 from "@/public/logo/3.png";
import cimg3 from "@/public/logo/4.png";
import cimg4 from "@/public/logo/5.png";
import cimg5 from "@/public/logo/6.png";
import cimg6 from "@/public/logo/7.png";
import cimg7 from "@/public/logo/8.png";
import cimg8 from "@/public/logo/9.png";
import cimg9 from "@/public/logo/10.png";
import cimg10 from "@/public/logo/15.png";
import cimg11 from "@/public/logo/16.png";

import sai from "@/public/teams/Sai Prakash Leo Muthu.jpg"

import { Project, TeamInt } from "@/schema";
import { Startup } from "@/components/Startup";
import { Company } from "@/components/Companys";

import { Team } from "@/components/Team";
export default function Home() {
  const projects: Project[] = [
    { title: "Title", description: "description", image: img1, url: "url" },
    { title: "Title", description: "description", image: img2, url: "url" },
    { title: "Title", description: "description", image: img3, url: "url" },
    { title: "Title", description: "description", image: img4, url: "url" },
    { title: "Title", description: "description", image: img5, url: "url" },
  ];
  const images: StaticImageData[] = [img, img1, img2];
  const companyImages: StaticImageData[] = [
    cimg,
    cimg1,
    cimg2,
    cimg3,
    cimg4,
    cimg5,
    cimg6,
    cimg7,
    cimg8,
    cimg9,
    cimg10,
    cimg11,
  ];
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  const teams: TeamInt[] = [
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
  ];
  const teams1: TeamInt[] = [
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
    {
      name: "Dr. Saiprakesh Leo Muthu",
      designation: "CEO",
      image: sai,
      facebook: "https://www.facebook.com/saileomuthu/",
      linkedin: "https://in.linkedin.com/in/sairamceo",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en"

    },
  ];
  return (
    <div
      className={
        "flex justify-center items-center align-middle justify-items-center flex-col"
      }
    >
      <Navbar />
      <div className={"flex justify-center"} id={"home"}>
        <Slider images={images} />
        <Link href={"/form"} className={"absolute top-[80%]"}>
          <Button className={buttonVariants({ variant: "secondary" })}>
            Apply Now
          </Button>
        </Link>
      </div>
      <div id="about-us" className=" flex">
        <img
          loading="lazy"
          src="incubator-logo.png"
          alt="Sairam Incubator Foundation Logo"
          className="incubation-main"
        />

        <div className="flex flex-col w-[40%]">
          <h2 className="font-montserrat font-bold text-rgba-17-17-17-80 text-7xl">
            WHY INCUBATION
            <br />
            IN SAIRAM?
          </h2>
          <hr className="underline border-b-8 mt-[5%] w-[30%] border-blue-500 rounded-full mb-[5%]" />
          <p className="font-montserrat font-normal text-[1.2rem] md:text-[clamp(1.2rem, 0.23rem + 1.14vw, 1.6rem)] leading-[32px] text-454545">
            The incubation process allows entrepreneurs to preserve capital and
            gain external support to accelerate their business growth.
            <br />
            Through business incubation, the enterprise center captures each
            entrepreneur’s uniqueness and offers support and customized services
            to maximize business potential.
          </p>
        </div>
      </div>

      <section className="w-full relative flex gap-5 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-l from-blue-50 via-blue-90 overflow-hidden z-20">
        {/* Images */}
        <img
          loading="lazy"
          src="illustration9.png"
          alt="ill1"
          className="absolute w-[50%] h-[100%] max-w-3/10 z-10 rotate-0 bottom-0 right-0 left-[84%]"
          style={{
            filter:
              "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
          }}
        />

<img loading="lazy" src="illustration9.png" alt="ill1"
                     className="absolute w-[50%] h-[100%] max-w-3/10 z-0 rotate-0 bottom-0 right-[84%] filter"
                     style={{
                       filter: "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
                     }}
                     />
      <div
        className="w-45% min-h-290px h-[300px] flex flex-col m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={100}
      >
        <h3 className="font-bold text-lg md:text-3xl text-gray-800">ESTABLISHMENT</h3>
        <hr className="underline border-b-[7px]  mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]"/>
        <p className="text-base text-justify text-gray-600">
          Sri Sairam Techno Incubation Foundation was established on 12th September 2020...
        </p>
      </div>

      <div
        className="w-45% min-h-290px h-[300px] flex flex-col m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={200}
      >
        <h3 className="font-bold text-lg md:text-3xl text-gray-800">VISION</h3>
        <hr className="underline border-b-[7px]  mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]"/>
        <p className="text-base text-justify text-gray-600">
          To be a center of excellence that constructs a dynamic and sustainable ecosystem for enriching Entrepreneurship Skills.
        </p>
      </div>

      <div
        className="w-45% min-h-290px h-[300px] flex flex-col m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={100}
      >
        <h3 className="font-bold text-lg md:text-3xl text-gray-800">ESTABLISHMENT</h3>
        <hr className="underline border-b-[7px]  mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]"/>
        <p className="text-base text-justify text-gray-600">
          Sri Sairam Techno Incubation Foundation was established on 12th September 2020...
        </p>
      </div>

      <div
        className="w-45% min-h-290px h-[300px] flex flex-col m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-aos="zoom-out"
        data-aos-delay={200}
      >
        <h3 className="font-bold text-lg md:text-3xl text-gray-800">VISION</h3>
        <hr className="underline border-b-[7px] mt-[2%] w-[25%] border-blue-500 rounded-full mb-[5%]"/>
        <p className="text-base text-justify text-gray-600">
          To be a center of excellence that constructs a dynamic and sustainable ecosystem for enriching Entrepreneurship Skills.
        </p>
      </div>

    </section>
            <Projects projects={projects}/>
    

     <section id="fund" className="w-full relative flex flex-col gap-10 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-l from-blue-50 via-blue-90 overflow-hidden z-1">
      {/* Illustration Image */}
      <img loading="lazy" src="illustration14.png" alt="" className="h-[1500px] absolute z-[-1] opacity-30" />

      {/* Heading */}
      <h2 className="our-projects" data-splitting>FUNDS</h2>

      {/* Startup Countups */}
      <div className="flex gap-[200px]">
        {/* Startup Countup 1 */}
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img loading="lazy" src="rupee-logo.png" className="h-[200px] filter brightness-75 hue-rotate-180" />
          <h3 id="fund-countup" className="our-projects">1.01 Cr+</h3>
          <p className="ml-2">funds</p>
        </div>

        {/* Startup Countup 2 */}
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img loading="lazy" src="handshake-icon.png" className="h-[200px] filter brightness-75 hue-rotate-180" />
          <h3 id="company-countup" className="our-projects">85+</h3>
          <p className="ml-2">startups incubated</p>
        </div>
      </div>

      {/* Funds Div Wrapper */}
      <div className="flex gap-[70px]">
        {/* Fund Div 1 */}
        <div className="flex flex-col w-[400px] p-5 h-[400px] bg-white border-4 rounded-xl border-blue-500 border-opacity-50 items-center justify-around" data-aos="fade-up" data-aos-offset="100">
        <img loading="lazy" src="edii-tn.jpg" alt="" className="w-full h-full object-cover" />
          <p className="mt-5 font-semibold text-[18px] text-center">Entrepreneurship Development And Innovation Institute, Tamil Nadu</p>
          <a href="edii.html" className="mt-5 border-[3px] w-[300px] rounded-xl border-blue-500 border-opacity-50 px-[120px] font-semibold pt-1 pb-1 text-blue-500">DETAILS</a>
        </div>

        {/* Fund Div 2 */}
        <div className="flex flex-col w-[400px] p-5 h-[400px] bg-white border-4 rounded-xl border-blue-500 border-opacity-50 items-center justify-around" data-aos="fade-up" data-aos-offset="100" data-aos-delay="100">
          <img loading="lazy" src="iDEX.png" alt="" className="h-[200px] filter self-center" />
          <p className="mt-5 font-semibold text-[18px] text-center">Innovations For Defence Excellence (iDEX)</p>
          <a href="edii.html" className="mt-5 border-[3px] w-[300px] rounded-xl border-blue-500 border-opacity-50 px-[120px] font-semibold pt-1 pb-1 text-blue-500">DETAILS</a>
        </div>
      </div>
    </section>
        </div>
    );
}

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

        <img
          loading="lazy"
          src="illustration9.png"
          alt="ill1"
          className="absolute w-[50%] h-[100%] max-w-3/10 z-[10] rotate-0 bottom-0 right-[84%] filter"
          style={{
            filter:
              "invert(47%) sepia(31%) saturate(4645%) hue-rotate(201deg) brightness(101%) contrast(96%)",
          }}
        />

        {/* Point Cards */}
        <div
          className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-aos="zoom-out"
          data-aos-delay={100}
        >
          <h3 className="font-bold text-lg md:text-xl text-gray-800">
            ESTABLISHMENT
          </h3>
          <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
          <p className="text-base text-justify text-gray-600">
            Sri Sairam Techno Incubation Foundation was established on 12th
            September 2020...
          </p>
        </div>

        <div
          className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-aos="zoom-out"
          data-aos-delay={200}
        >
          <h3 className="font-bold text-lg md:text-xl text-gray-800">VISION</h3>
          <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
          <p className="text-base text-justify text-gray-600">
            To be a center of excellence that constructs a dynamic and
            sustainable ecosystem for enriching Entrepreneurship Skills.
          </p>
        </div>

        <div
          className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-aos="zoom-out"
          data-aos-delay={400}
        >
          <h3 className="font-bold text-lg md:text-xl text-gray-800">
            OBJECTIVES
          </h3>
          <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
          <p className="text-base text-justify text-gray-600">
            Enhance the graduate engineers' knowledge to suit the industry
            requirements. Ready to adopt industry culture. Make students aware
            of the latest technology and understand the processes of developing
            a true product.
          </p>
        </div>

        <div
          className="w-45% min-h-290px h-[300px] flex flex-col gap-10 m-3 p-4 bg-white shadow-lg border-4 border-blue-400 rounded-2xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-aos="zoom-out"
          data-aos-delay={300}
        >
          <h3 className="font-bold text-lg md:text-xl text-gray-800">
            MISSION
          </h3>
          <hr className="w-1/3 mb-5 h-1 bg-gray-500" />
          <p className="text-base text-justify text-gray-600">
            We are committed to nurturing creativity, innovation, and
            entrepreneurship among students, faculty, and aspirants. We strongly
            cultivate industrial culture and standards. We enable the process
            for developing ideas into products.
          </p>
        </div>

        {/* Repeat similar structure for other point cards */}
      </section>
      <Projects projects={projects} />
      <Startup tags1={tags} tags2={tags} />
      <Company images={companyImages} />
      <Team row0={teams} rowN={teams1} />
    </div>
  );
}

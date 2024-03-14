"use client";
import Image, { StaticImageData } from "next/image";
import { Testimonial } from "@/schema";
import { Slider } from "@/components/Slider";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import * as React from "react";
import { Projects } from "@/components/Projects";
import img from "@/public/projects/p1-1.jpg";
import img1 from "@/public/projects/p2-1.jpg";
import img2 from "@/public/projects/p3-1.png";
import img3 from "@/public/projects/p4-1.png";
import img4 from "@/public/projects/p5-1.png";
import img5 from "@/public/projects/p6-1.jpg";

import logo1 from "@/public/logo/1.png";
import logo2 from "@/public/logo/2 .png";
import logo3 from "@/public/logo/3.png";
import logo4 from "@/public/logo/4.png";
import logo5 from "@/public/logo/5.png";
import logo6 from "@/public/logo/6.png";
import logo7 from "@/public/logo/7.png";
import logo8 from "@/public/logo/8.png";
import logo9 from "@/public/logo/8.png";
import logo10 from "@/public/logo/10.png";
import logo15 from "@/public/logo/15.png";

import { ImageData, TeamInt } from "@/schema";
import { Startup } from "@/components/Startup";

import ceo from "@/public/teams/Sai Prakash Leo Muthu.jpg";
import { TeamComponent } from "@/components/Team";
import { Company } from "@/components/Companys";
import GalleryComponent from "@/components/Gallery";

import { Funds } from "@/components/Funds";
import { Establishment } from "@/components/Establishment";
import { AboutUs } from "@/components/AboutUs";
import { HaveAProject } from "@/components/HaveAProject";
import { useEffect, useState } from "react";
import {
  Gallery,
  Lead,
  MainCarousel,
  StartUp,
  Team,
  Testimony,Project,
} from "@prisma/client";
import axios from "axios";
export default function Home() {
  const [MainCarousel, setMainCarousel] = useState<MainCarousel[]>([]);
  const [Testimony, setTestimony] = useState<Testimony[]>([]);
  const [TeamMembers, setTeamMembers] = useState<Team[]>([]);
  const [LeadMembers, setLeadMembers] = useState<Lead[]>([]);
  const [GalleryImages, setGalleryImages] = useState<Gallery[]>([]);
  const [StrtUpData,setStrtUpData]=useState<StartUp[]>([]);
  const [ProjectContent,setProjectContent]=useState<Project[]>([]);
  const getTestimonyData = async () => {
    try {
      const response = await axios.get("/api/components/testimony");
      setTestimony(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };
  const getMainCarouselData = async () => {
    try {
      const response = await axios.get("/api/components/mainCarousel");
      setMainCarousel(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getGallery = async () => {
    try {
      const response = await axios.get("/api/components/gallery");
      setGalleryImages(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getTeamData = async () => {
    try {
      const response = await axios.get("/api/components/team");
      setTeamMembers(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getLeadData = async () => {
    try {
      const response = await axios.get("/api/components/lead");
      setLeadMembers(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getStartUpData = async () => {
    try {
      const response = await axios.get("/api/components/startup");
      setStrtUpData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  }

  const getProjectData = async () => {
    try{
    const response = await axios.get("/api/components/project");
    setProjectContent(response.data.response);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getMainCarouselData();
    getTestimonyData();
    getTeamData();
    getLeadData();
    getGallery();
    getStartUpData();
    getProjectData();
  }, []);

  
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const companies: StaticImageData[] = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo15,
  ];

  return (
    <div
      className={
        "flex justify-center items-center align-middle justify-items-center flex-col"
      }
    >
      {/* <Navbar /> */}
      <div className={"flex justify-center max-h-fit relative"} id={"home"}>
        <Slider images={MainCarousel} />
        <Link href={"/apply"} className={"absolute bottom-20"}>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform-gpu hover:scale-105 hover:bg-blue-500">
            Apply Now
          </Button>
        </Link>
      </div>
      <AboutUs />
      <Establishment />
      <Projects projects={ProjectContent} />
      <Startup tags1={StrtUpData && StrtUpData[0] && StrtUpData[0].list?StrtUpData[0].list:tags} tags2={StrtUpData && StrtUpData[1] && StrtUpData[1].list?StrtUpData[1].list:tags} />
      <Company images={companies} />
      <Funds />

      <TeamComponent row0={LeadMembers} rowN={TeamMembers} />
      <HaveAProject />
      <GalleryComponent images={GalleryImages} />
      <TestimonialSlider testimonycontent={Testimony} />
    </div>
  );
}

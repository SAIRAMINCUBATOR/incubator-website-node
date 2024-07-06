"use client";
import { Slider } from "@/components/Slider";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import * as React from "react";
import { Projects } from "@/components/Projects";

import { ImageData, MainGalleryWithCategory } from "@/schema";
import { Startup } from "@/components/Startup";

import { TeamComponent } from "@/components/Team";
import GalleryComponent from "@/components/Gallery";

import { Funds } from "@/components/Funds";
import { Establishment } from "@/components/Establishment";
import { AboutUs } from "@/components/AboutUs";
import { HaveAProject } from "@/components/HaveAProject";
import { useEffect, useState } from "react";
import {
  MainGallery,
  Lead,
  MainCarousel,
  StartUp,
  Team,
  Testimony,
  Project,
  Company,
} from "@prisma/client";
import axios from "axios";
import { CompanyComponent } from "@/components/Companys";
export default function Home() {
  const [MainCarousel, setMainCarousel] = useState<ImageData[]>([]);
  const [Testimony, setTestimony] = useState<Testimony[]>([]);
  const [TeamMembers, setTeamMembers] = useState<Team[]>([]);
  const [LeadMembers, setLeadMembers] = useState<Lead[]>([]);
  const [GalleryImages, setGalleryImages] = useState<MainGalleryWithCategory[]>([]);
  const [TempGalleryImages, setTempGalleryImages] = useState<MainGalleryWithCategory[]>([]);
  const [StrtUpData, setStrtUpData] = useState<StartUp[]>([]);
  const [ProjectContent, setProjectContent] = useState<Project[]>([]);
  const [Companies, setCompanies] = useState<ImageData[]>([]);
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
      const responseData: MainCarousel[] = response.data.response;
      const formatedResponse: ImageData[] = responseData.map((res) => {
        const data: ImageData = {
          image: res.image,
          name: res.name,
        };
        return data;
      });
      setMainCarousel(formatedResponse);
    } catch (e) {
      console.log(e);
    }
  };

  const getGallery = async () => {
    try {
      const response = await axios.get("/api/components/mainGallery");
      setTempGalleryImages(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getCompany = async () => {
    try {
      const response = await axios.get("/api/components/company");
      const responseData: Company[] = response.data.response;
      const formatedResponse: ImageData[] = responseData.map((res) => {
        const data: ImageData = {
          image: res.image,
          name: res.name,
        };
        return data;
      });
      setCompanies(formatedResponse);
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
  };

  const getProjectData = async () => {
    try {
      const response = await axios.get("/api/components/project");
      setProjectContent(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMainCarouselData();
    getTestimonyData();
    getTeamData();
    getLeadData();
    getGallery();
    getStartUpData();
    getProjectData();
    getCompany();
  }, []);

  useEffect(() => {
    const uniqueCategories = new Set();
    const filteredImages = TempGalleryImages.filter((image) => {
      if (!uniqueCategories.has(image.categoryId)) {
        uniqueCategories.add(image.categoryId);
        return true;
      }
      return false;
    });
    if (filteredImages.length > 0) setGalleryImages(filteredImages);
  }, [TempGalleryImages]);

  return (
    <div
      className={
        "flex justify-center items-center align-middle justify-items-center flex-col"
      }
    >
      <div className={"flex justify-center max-h-fit relative"} id={"home"}>
        <Slider images={MainCarousel} imagesize="object-cover" />
        <Link href={"/apply"} className={"absolute bottom-20"}>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform-gpu hover:scale-105 hover:bg-blue-500">
            Apply Now
          </Button>
        </Link>
      </div>
      <AboutUs />
      <Establishment />
      <Projects projects={ProjectContent} />
      <Startup
        tags1={StrtUpData && StrtUpData[0] && StrtUpData[0].list}
        tags2={StrtUpData && StrtUpData[1] && StrtUpData[1].list}
      />
      <CompanyComponent images={Companies} />
      <Funds />

      <TeamComponent row0={LeadMembers} rowN={TeamMembers} />
      <HaveAProject />
      <GalleryComponent images={GalleryImages} id="gallery" />
      <TestimonialSlider testimonycontent={Testimony} />
    </div>
  );
}

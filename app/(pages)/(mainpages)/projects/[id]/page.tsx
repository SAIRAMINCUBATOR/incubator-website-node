"use client"
import { Slider } from "@/components/Slider";
import { ImageData, TableData } from "@/schema";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import img1 from "@/public/projects/p1-1.jpg";
import img2 from "@/public/projects/p2-1.jpg";
import img3 from "@/public/projects/p3-1.png";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HaveAProject } from "@/components/HaveAProject";
import { Project } from "@prisma/client";
import { CommonSlider } from "@/components/CommonSlider";


const ProjectPage = (req: any, res: any) => {
  useEffect(() => {
    getProjectData();
  }, []);
  const { id } = req?.params;
  const [ProjectContent,setProjectContent]=useState<Project>();
  const getProjectData = async () => {
    try{
    const response = await axios.get(`/api/components/project?id=${id}`);
    setProjectContent(response.data.response);
    console.log(response.data.response)
    }catch(e){
      console.log(e)
    }
  }
  const content: string = `Deep well handpump cause discomfort and fatigue to the user after long hours of operation. To overcome this problem a pendulum incorporated hand pump design was made and fabricated. The prototype built was far more effective and easier to use than the normal pump.
  <br/><br/>
  The long-pivoted shaft is replaced by a pendulum which provides exact torque needed to rise the piston up. The pendulum oscillates with minimum force applied. This design uses the energy stored in the pendulum as an advantage. In this design six strokes can be achieved with an initial force.`;

  const name = "Pendulam Project";
  return (
    <div className="w-full flex flex-col items-center  bg-sky-200/50">
      {ProjectContent && ProjectContent.image && (<CommonSlider images={ProjectContent.image}/>)}
      <div className="md:w-[90%] w-full flex justify-center gap-5 mb-10">
        <div className="p-4 m-4 flex justify-start w-full">
          <Image src={ProjectContent && ProjectContent.image && ProjectContent.image[0]} alt="Main" height={350} width={300} className="h-fit" />
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="relative w-full">
            <span className="text-black font-bold text-[70px] w-1/2">
              {ProjectContent &&ProjectContent.name}
            </span>
            <div className="absolute left-3 -bottom-4 w-[300px] h-2 bg-blue-500 rounded-2xl" />
         </div>
        <div className="text-[19px] font-montserrat" dangerouslySetInnerHTML={{__html:ProjectContent && ProjectContent.content}}/>
        </div>
      </div>
      <HaveAProject />
    </div>
  );
};

export default ProjectPage;

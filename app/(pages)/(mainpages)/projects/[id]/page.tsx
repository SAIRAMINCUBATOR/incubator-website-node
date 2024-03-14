"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import axios from "axios";

import { HaveAProject } from "@/components/HaveAProject";
import { Project } from "@prisma/client";
import { Slider } from "@/components/Slider";
import { ImageData } from "@/schema";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectPage = (req: any, res: any) => {
  const [loading, setLoading] = useState(true);
  const { id } = req?.params;
  const [ProjectContent, setProjectContent] = useState<Project>();
  const getProjectData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/components/project?id=${id}`);
      setProjectContent(response.data.response);
      console.log(response.data.response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center  bg-sky-200/50">
      {ProjectContent && ProjectContent.image && (
        <Slider
          images={ProjectContent.image.map((img) => {
            const image: ImageData = { name: "", image: img };
            return image;
          })}
        />
      )}
      <div className="md:w-[90%] w-full flex justify-center gap-5 mb-10">
        <div className="p-4 m-4 flex justify-start w-full">
          {(!loading && ProjectContent && ProjectContent.image) ? (
            <Image
              src={ProjectContent.image[0]}
              alt="Main"
              height={350}
              width={300}
              className="h-fit"
            />
          ): (
            <Skeleton className="h-fit"/>
          )}
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="relative w-full">
            <span className="text-black font-bold text-[70px] w-1/2">
              {ProjectContent && ProjectContent.name}
            </span>
            <div className="absolute left-3 -bottom-4 w-[300px] h-2 bg-blue-500 rounded-2xl" />
          </div>
          <div
            className="text-[19px] font-montserrat editor"
            dangerouslySetInnerHTML={{
              __html: ProjectContent && ProjectContent.content,
            }}
          />
        </div>
      </div>
      <HaveAProject />
    </div>
  );
};

export default ProjectPage;

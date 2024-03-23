"use client";
import UserButton from "@/components/UserButton";
import StartUpEdit from "@/components/editPage/StartUpEdit";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EditComponent from "@/components/editPage/EditComponent";
import ManagementEdit from "@/components/editPage/Management";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IPREdit from "@/components/editPage/IPR";
import FundingEdit from "@/components/editPage/Funding";
import { cn } from "@/lib/utils";

const EditPage = () => {
  const params = useSearchParams();
  const section = params.get("section");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [modelType, setModelType] = useState("mainCarousel");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setSheetOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (section) setModelType(section);
  }, [section]);

  function SmoothScrollLink({ href, children }) {
    return (
      <Button
        variant={"ghost"}
        className={cn(
          "text-xl w-full p-0 m-0 transition-all duration-200 ease-in",
          modelType == href && "bg-gray-500/50"
        )}
        onClick={(e) => {
          e.preventDefault();

          setModelType(href);
          // setSheetOpen(false);
        }}
      >
        {children}
      </Button>
    );
  }

  function SideBarComponets() {
    return (
      <div className="flex flex-col p-3 items-center gap-5 h-[95vh]">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>

        <div className="flex flex-col p-3 items-center gap-2">
          <SmoothScrollLink href="mainCarousel">Main Slider</SmoothScrollLink>
          <SmoothScrollLink href="project">Project</SmoothScrollLink>
          <SmoothScrollLink href="startup">Start Ups</SmoothScrollLink>
          <SmoothScrollLink href="company">Company</SmoothScrollLink>
          <SmoothScrollLink href="team">Team Members</SmoothScrollLink>
          <SmoothScrollLink href="mainGallery">Gallery</SmoothScrollLink>
          <SmoothScrollLink href="testimony">Testimonial</SmoothScrollLink>
          <SmoothScrollLink href="auxGallery">Gallery 2</SmoothScrollLink>
          <SmoothScrollLink href="collaboration">
            Collaboration
          </SmoothScrollLink>
          <SmoothScrollLink href="management">Management</SmoothScrollLink>
          <SmoothScrollLink href="ipr">IPR</SmoothScrollLink>
          <SmoothScrollLink href="funding">Funding</SmoothScrollLink>
        </div>
        <div className=" bottom-2 absolute">
          <UserButton />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start w-full">
      <div className="hidden lg:flex sticky top-1 left-0 flex-col p-3 items-center gap-5 w-[12%] h-[98vh]">
        <SideBarComponets />
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="lg:hidden block sticky top-[50%] -translate-y-[50%] left-2 w-fit">
          <ChevronRight className="m-0 p-0 text-2xl" size={28} />
        </SheetTrigger>
        <SheetContent className="w-1/2" side="left">
          <SheetHeader>
            <SheetTitle>Sairam Techno Incubator</SheetTitle>
          </SheetHeader>
          <SideBarComponets />
        </SheetContent>
      </Sheet>

      <div className="  lg:ml-0 w-full flex flex-col">
        <EditComponent
          modelName="mainCarousel"
          addType="addMainCarousel"
          editType="editMainCarousel"
          deleteType="deleteMainCarousel"
          editModelType={modelType}
        />
        <EditComponent
          modelName="project"
          addType="addProject"
          editType="editProject"
          deleteType="deleteProject"
          editModelType={modelType}
        />
        <StartUpEdit editModelType={modelType} />

        <EditComponent
          modelName="company"
          addType="addCompany"
          editType="editCompany"
          deleteType="deleteCompany"
          editModelType={modelType}
        />

        <EditComponent
          modelName="lead"
          addType="addLead"
          editType="editLead"
          deleteType="deleteLead"
          editModelType={modelType}
        />

        <EditComponent
          modelName="team"
          addType="addTeam"
          editType="editTeam"
          deleteType="deleteTeam"
          editModelType={modelType}
        />

        <EditComponent
          modelName="mainGallery"
          addType="addMainGallery"
          editType="editMainGallery"
          deleteType="deleteMainGallery"
          editModelType={modelType}
        />

        <EditComponent
          modelName="testimony"
          addType="addTestimony"
          editType="editTestimony"
          deleteType="deleteTestimony"
          editModelType={modelType}
        />

        <EditComponent
          modelName="auxGallery"
          addType="addAuxGallery"
          editType="editAuxGallery"
          deleteType="deleteAuxGallery"
          editModelType={modelType}
        />

        <EditComponent
          modelName="collaboration"
          addType="addCollaboration"
          editType="editCollaboration"
          deleteType="deleteCollaboration"
          editModelType={modelType}
        />

        <ManagementEdit editModelType={modelType} />

        <IPREdit editModelType={modelType} />
        <FundingEdit editModelType={modelType} />
      </div>
    </div>
  );
};

export default EditPage;

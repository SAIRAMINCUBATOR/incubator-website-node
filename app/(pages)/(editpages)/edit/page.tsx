"use client";
import StartUpEdit from "@/components/editPage/StartUpEdit";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EditComponent from "@/components/editPage/EditComponent";
import ManagementEdit from "@/components/editPage/Management";
import IPREdit from "@/components/editPage/IPR";
import FundingEdit from "@/components/editPage/Funding";
import { SideBarComponets } from "@/components/SideBarComponent";

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

  return (
    <div className="flex items-start w-full gap-5">
      <div className="hidden lg:flex sticky top-1 left-2 flex-col p-3 items-center gap-5 w-[12%] h-[98vh]">
        <SideBarComponets
          modelType={modelType}
          setModelType={setModelType}
          setSheetOpen={setSheetOpen}
        />
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="lg:hidden block sticky top-[50%] -translate-y-[50%] left-2 w-fit">
          <ChevronRight className="m-0 p-0 text-2xl" size={28} />
        </SheetTrigger>
        <SheetContent className="w-1/2" side="left">
          <SheetHeader>
            <SheetTitle>Sairam Techno Incubator</SheetTitle>
          </SheetHeader>
          <SideBarComponets
            modelType={modelType}
            setModelType={setModelType}
            setSheetOpen={setSheetOpen}
          />
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
          modelName="facilities"
          addType="addfacilities"
          editType="editfacilities"
          deleteType="deletefacilities"
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
        <EditComponent
          modelName="assesment"
          addType="addAssesment"
          editType="editAssesment"
          deleteType="deleteAssesment"
          editModelType={modelType}
        />
         <EditComponent
          modelName="startupData"
          addType="addStartupData"
          editType="editStartupData"
          deleteType="deleteStartupData"
          editModelType={modelType}
        />
      </div>
    </div>
  );
};

export default EditPage;

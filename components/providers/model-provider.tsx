"use client";

import { useEffect, useState } from "react";
import { AddMainCarouselModel } from "@/components/models/MainCarousel/Add";
import { EditMainCarousel } from "@/components/models/MainCarousel/Edit";
import DeleteMainCarousel from "@/components/models/MainCarousel/Delete";
import { AddTestimony } from "@/components/models/Testimony/Add";
import DeleteTestimony from "@/components/models/Testimony/Delete";
import { EditTestimony } from "@/components/models/Testimony/Edit";
import { AddTeam } from "@/components/models/Team/Add";
import DeleteTeam from "@/components/models/Team/Delete";
import { EditTeam } from "@/components/models/Team/Edit";
import { AddLead } from "@/components/models/Lead/Add";
import { EditLead } from "@/components/models/Lead/Edit";
import DeleteLead from "@/components/models/Lead/Delete";
import { AddMainGalleryModel } from "@/components/models/mainGallery/Add";
import { EditGallery } from "@/components/models/mainGallery/Edit";
import DeleteGallery from "@/components/models/mainGallery/Delete";
import { EditStartUp } from "@/components/models/StartUp/Edit";
import { AddProject } from "@/components/models/Project/Add";
import { EditProject } from "@/components/models/Project/Edit";
import DeleteProject from "@/components/models/Project/Delete";
import { AddCompanyModel } from "@/components/models/Company/Add";
import { EditCompany } from "@/components/models/Company/Edit";
import DeleteCompany from "@/components/models/Company/Delete";
import { AddAuxGalleryComponent } from "@/components/models/auxGallery/Add";
import { EditAuxGallery } from "@/components/models/auxGallery/Edit";
import { DeleteAuxGallery } from "@/components/models/auxGallery/Delete";
import { AddCollaboration } from "@/components/models/collaboration/Add";
import { EditCollaboration } from "@/components/models/collaboration/Edit";
import { DeleteCollaboration } from "@/components/models/collaboration/Delete";
import { EditManagement } from "@/components/models/managementTeam/Edit";
import DeleteManagement from "@/components/models/managementTeam/Delete";
import { EditMentors } from "@/components/models/mentorsTeam/Edit";
import DeleteMentors from "@/components/models/mentorsTeam/Delete";
import { EditAdvisoryBoard } from "@/components/models/advisoryBoardTeam/Edit";
import DeleteAdvisoryBoard from "@/components/models/advisoryBoardTeam/Delete";
import { EditIPR } from "@/components/models/ipr/Edit";
import DeleteIPR from "@/components/models/ipr/Delete";
import { EditFunding } from "@/components/models/fundings/Edit";
import DeleteFunding from "@/components/models/fundings/Delete";
import { AddAssesment } from "../models/Assesment/Add";
import { EditAssesmentModal } from "../models/Assesment/Edit";
import DeleteAssesment from "../models/Assesment/Delete";
import { AddStartupData } from "../models/startupData/Add";
import DeleteStartupData from "../models/startupData/Delete";
import { EditStartupData } from "../models/startupData/Edit";
import { AddMOUData } from "../models/mou/Add";
import { EditMOUData } from "../models/mou/Edit";
import DeleteMOUData from "../models/mou/Delete";
import { AddSSTIFData } from "../models/sstifData/Add";
import { EditSSTIFData } from "../models/sstifData/Edit";
import DeleteSSTIFData from "../models/sstifData/Delete";
import { AddInternshipData } from "../models/internships/Add";
import { EditInternshipData } from "../models/internships/Edit";
import DeleteInternshipData from "../models/internships/Delete";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddMainCarouselModel />
      <EditMainCarousel />
      <DeleteMainCarousel />
      <AddTestimony />
      <DeleteTestimony />
      <EditTestimony />
      <AddTeam />
      <EditTeam />
      <DeleteTeam />
      <AddLead />
      <EditLead />
      <DeleteLead />
      <AddMainGalleryModel />
      <EditGallery />
      <DeleteGallery />
      <EditStartUp />
      <AddProject />
      <EditProject />
      <DeleteProject />
      <AddCompanyModel />
      <EditCompany />
      <DeleteCompany />
      <AddAuxGalleryComponent />
      <EditAuxGallery />
      <DeleteAuxGallery />
      <AddCollaboration />
      <EditCollaboration />
      <DeleteCollaboration />
      {/* <EditManagement/> */}
      <DeleteManagement/>
      {/* <EditMentors/> */}
      <DeleteMentors/>
      {/* <EditAdvisoryBoard/> */}
      <DeleteAdvisoryBoard/>
      <EditIPR/>
      <DeleteIPR/>
      <EditFunding/>
      <DeleteFunding/>
      <AddAssesment/>
      <EditAssesmentModal/>
      <DeleteAssesment/>
      <AddStartupData/>
      <EditStartupData/>
      <DeleteStartupData/>
      <AddMOUData/>
      <EditMOUData/>
      <DeleteMOUData/>
      <AddSSTIFData/>
      <EditSSTIFData/>
      <DeleteSSTIFData/>
      <AddInternshipData/>
      <EditInternshipData/>
      <DeleteInternshipData/>
    </>
  );
};

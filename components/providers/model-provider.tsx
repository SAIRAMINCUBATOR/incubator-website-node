"use client";

import { useEffect, useState } from "react";
import { AddMainCarouselModel } from "../models/MainCarousel/Add";
import { EditMainCarousel } from "../models/MainCarousel/Edit";
import DeleteMainCarousel from "../models/MainCarousel/Delete";
import { AddTestimony } from "../models/Testimony/Add";
import DeleteTestimony from "../models/Testimony/Delete";
import { EditTestimony } from "../models/Testimony/Edit";
import { AddTeam } from "../models/Team/Add";
import DeleteTeam from "../models/Team/Delete";
import { EditTeam } from "../models/Team/Edit";
import { AddLead } from "../models/Lead/Add";
import { EditLead } from "../models/Lead/Edit";
import DeleteLead from "../models/Lead/Delete";
import { AddMainGalleryModel } from "../models/mainGallery/Add";
import { EditGallery } from "../models/mainGallery/Edit";
import DeleteGallery from "../models/mainGallery/Delete";
import { EditStartUp } from "../models/StartUp/Edit";
import { AddProject } from "../models/Project/Add";
import { EditProject } from "../models/Project/Edit";
import DeleteProject from "../models/Project/Delete";
import { AddCompanyModel } from "../models/Company/Add";
import { EditCompany } from "../models/Company/Edit";
import DeleteCompany from "../models/Company/Delete";
import { AddAuxGalleryComponent } from "../models/auxGallery/Add";
import { EditAuxGallery } from "../models/auxGallery/Edit";
import { DeleteAuxGallery } from "../models/auxGallery/Delete";
import { AddCollaboration } from "../models/collaboration/Add";
import { EditCollaboration } from "../models/collaboration/Edit";
import { DeleteCollaboration } from "../models/collaboration/Delete";
import { EditManagement } from "../models/managementTeam/Edit";
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
      <EditManagement/>
    </>
  );
};

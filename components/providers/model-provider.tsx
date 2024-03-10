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
import { AddGalleryModel } from "../models/Gallery/Add";
import { EditGallery } from "../models/Gallery/Edit";
import DeleteGallery from "../models/Gallery/Delete";
import { AddStartUp } from "../models/StartUp/Add";
import { EditStartUp } from "../models/StartUp/Edit";
import DeleteStartUp from "../models/StartUp/Delete";
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
      <EditMainCarousel/>
      <DeleteMainCarousel/>
      <AddTestimony/>
      <DeleteTestimony/>
      <EditTestimony/>
      <AddTeam/>
      <EditTeam/>
      <DeleteTeam/>
      <AddLead/>
      <EditLead/>
      <DeleteLead/>
      <AddGalleryModel/>
      <EditGallery/>
      <DeleteGallery/>
      <AddStartUp/>
      <EditStartUp/>
      <DeleteStartUp/>
    </>
  );
};

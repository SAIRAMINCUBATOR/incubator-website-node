"use client";

import { useEffect, useState } from "react";
import { AddMainCarouselModel } from "../models/MainCarousel/Add";
import { EditMainCarousel } from "../models/MainCarousel/Edit";
import DeleteMainCarousel from "../models/MainCarousel/Delete";

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
    </>
  );
};

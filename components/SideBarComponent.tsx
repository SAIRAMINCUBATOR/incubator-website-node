"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/UserButton";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export const SideBarComponets = ({ modelType, setModelType, setSheetOpen }) => {
  function SmoothScrollLink({ to, children }) {
    return (
      <Button
        variant={"ghost"}
        className={cn(
          "text-xl w-full px-4 m-0 transition-all duration-200 ease-in",
          modelType == to && "bg-gray-500/50"
        )}
        onClick={(e) => {
          e.preventDefault();

          setModelType(to);
          setSheetOpen(false);
        }}
      >
        {children}
      </Button>
    );
  }

  return (
    <div className="flex flex-col p-3 items-center gap-5 h-[95vh]">
      <Link href={"/"}>
        <Button>Home</Button>
      </Link>
      <ScrollArea className="h-[85%] ">
        <div className="flex flex-col p-3 items-center gap-2">
          <SmoothScrollLink to="mainCarousel">Main Slider</SmoothScrollLink>
          <SmoothScrollLink to="project">Project</SmoothScrollLink>
          <SmoothScrollLink to="startup">Start Ups</SmoothScrollLink>
          <SmoothScrollLink to="company">Company</SmoothScrollLink>
          <SmoothScrollLink to="team">Team Members</SmoothScrollLink>
          <SmoothScrollLink to="mainGallery">Gallery</SmoothScrollLink>
          <SmoothScrollLink to="testimony">Testimonial</SmoothScrollLink>
          <SmoothScrollLink to="facilities">Facilities</SmoothScrollLink>
          <SmoothScrollLink to="collaboration">Collaboration</SmoothScrollLink>
          <SmoothScrollLink to="management">Management</SmoothScrollLink>
          <SmoothScrollLink to="ipr">IPR</SmoothScrollLink>
          <SmoothScrollLink to="funding">Funding</SmoothScrollLink>
          <SmoothScrollLink to="assesment">Assesment</SmoothScrollLink>
        </div>
        <ScrollBar color="rgb(156, 153, 175)" />
      </ScrollArea>
      <div className=" bottom-2 absolute">
        <UserButton />
      </div>
    </div>
  );
};

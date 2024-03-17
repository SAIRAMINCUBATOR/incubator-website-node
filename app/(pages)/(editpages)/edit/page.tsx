"use client";
import UserButton from "@/components/UserButton";
import CompanyEdit from "@/components/editPage/CompanyEdit";
import GalleryEdit from "@/components/editPage/GalleryEdit";
import LeadEdit from "@/components/editPage/LeadEdit";
import MainCarouselEdit from "@/components/editPage/MainCarouselEdit";
import ProjectEdit from "@/components/editPage/ProjectEdit";
import StartUpEdit from "@/components/editPage/StartUpEdit";
import TeamEdit from "@/components/editPage/TeamEdit";
import TestimonyEdit from "@/components/editPage/Testimonyedit";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";

const EditPage = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >1024)
      setSheetOpen(false);
  
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  function SmoothScrollLink({ href, children }) {
    return (
      <Link href={href}>
        <Button
          variant="link"
          className="text-xl"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = href.split("#")[1]; // Extract section ID from href
            scrollToSection(sectionId); // Scroll to the section
            setSheetOpen(false)
          }}
        >
          {children}
        </Button>
      </Link>
    );
  }

  function SideBarComponets() {
    return (
      <div className="flex flex-col p-3 items-center gap-5 h-[95vh]">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <SmoothScrollLink href="/edit#carousel">Main Slider</SmoothScrollLink>
        <SmoothScrollLink href="/edit#testimony">Testimonial</SmoothScrollLink>
        <SmoothScrollLink href="/edit#leads">Teams</SmoothScrollLink>
        <SmoothScrollLink href="/edit#gallery">Gallery</SmoothScrollLink>
        <SmoothScrollLink href="/edit#companies">Companies</SmoothScrollLink>
        <SmoothScrollLink href="/edit#startup">Start Ups</SmoothScrollLink>
        <SmoothScrollLink href="/edit#projects">Projects</SmoothScrollLink>

        <div className=" bottom-2 absolute">
          <UserButton />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start w-full">
      <div className="hidden lg:flex sticky top-1 left-0 flex-col p-3 items-center gap-5 w-[10%] h-[98vh]">
        <SideBarComponets />
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="lg:hidden block sticky top-[50%] -translate-y-[50%] left-2 w-fit">
          <ChevronRight className="m-0 p-0 text-2xl" size={28}/>

          </SheetTrigger>
        <SheetContent className="w-1/2" side="left">
          <SheetHeader>
            <SheetTitle>Sairam Techno Incubator</SheetTitle>
           
          </SheetHeader>
          <SideBarComponets/>
        </SheetContent>
      </Sheet>

      <div className=" lg:w-[90%] lg:ml-0 w-full flex flex-col">
        <MainCarouselEdit />
        <TestimonyEdit />
        <LeadEdit />
        <TeamEdit />
        <GalleryEdit />
        <CompanyEdit />
        <StartUpEdit />
        <ProjectEdit />
      </div>
    </div>
  );
};

export default EditPage;

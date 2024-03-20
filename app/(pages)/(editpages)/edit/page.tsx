"use client";
import UserButton from "@/components/UserButton";
import StartUpEdit from "@/components/editPage/StartUpEdit";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

const EditPage = () => {
  const params = useSearchParams();
  const section = params.get("section");
  const [sheetOpen, setSheetOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setSheetOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToSection = (id: string) => {
    if (id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => scrollToSection(section), 1000);
    return () => clearTimeout(timer);
  }, [section]);

  function SmoothScrollLink({ href, children }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const scrollHandler = () => {
        const element = document.getElementById(href.split("#")[1]);
        // if (element) {
        const elementRect = element.getBoundingClientRect();

        const isElementInScrollView =
          elementRect.bottom > 200 && elementRect.top < 200;
        setVisible(isElementInScrollView);
        // }
      };

      document.addEventListener("scroll", scrollHandler);

      scrollHandler();

      return () => {
        document.removeEventListener("scroll", scrollHandler);
      };
    }, []);
    return (
      <Link
        href={href}
        className={
          visible
            ? " underline bg-gray-400 rounded-xl transition-all duration-150 ease-in"
            : ""
        }
      >
        <Button
          variant={"link"}
          className="text-xl "
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = href.split("#")[1]; // Extract section ID from href
            scrollToSection(sectionId); // Scroll to the section
            setSheetOpen(false);
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
        <SmoothScrollLink href="#mainCarousel">Main Slider</SmoothScrollLink>
        <SmoothScrollLink href="#project">Project</SmoothScrollLink>
        <SmoothScrollLink href="#startup">Start Ups</SmoothScrollLink>
        <SmoothScrollLink href="#company">Company</SmoothScrollLink>
        <SmoothScrollLink href="#lead">Team Leads</SmoothScrollLink>
        <SmoothScrollLink href="#team">Team Members</SmoothScrollLink>
        <SmoothScrollLink href="#mainGallery">Gallery</SmoothScrollLink>
        <SmoothScrollLink href="#testimony">Testimonial</SmoothScrollLink>

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

      <div className=" lg:w-[90%] lg:ml-0 w-full flex flex-col">
        <EditComponent
          modelName="mainCarousel"
          addType="addMainCarousel"
          editType="editMainCarousel"
          deleteType="deleteMainCarousel"
        />
        <EditComponent
          modelName="project"
          addType="addProject"
          editType="editProject"
          deleteType="deleteProject"
        />
        <StartUpEdit />

        <EditComponent
          modelName="company"
          addType="addCompany"
          editType="editCompany"
          deleteType="deleteCompany"
        />

        <EditComponent
          modelName="lead"
          addType="addLead"
          editType="editLead"
          deleteType="deleteLead"
        />

        <EditComponent
          modelName="team"
          addType="addTeam"
          editType="editTeam"
          deleteType="deleteTeam"
        />

        <EditComponent
          modelName="mainGallery"
          addType="addMainGallery"
          editType="editMainGallery"
          deleteType="deleteMainGallery"
        />

        <EditComponent
          modelName="testimony"
          addType="addTestimony"
          editType="editTestimony"
          deleteType="deleteTestimony"
        />
      </div>
    </div>
  );
};

export default EditPage;

"use client"
import UserButton from "@/components/UserButton";
import GalleryEdit from "@/components/editPage/GalleryEdit";
import LeadEdit from "@/components/editPage/LeadEdit";
import MainCarouselEdit from "@/components/editPage/MainCarouselEdit";
import StartUpEdit from "@/components/editPage/StartUpEdit";
import TeamEdit from "@/components/editPage/TeamEdit";
import TestimonyEdit from "@/components/editPage/Testimonyedit";
import { useSession } from "@/components/providers/context/SessionContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const EditPage = () => {
  const router = useRouter();
  const {token, isTokenExpired} = useSession();
  useEffect(() => {
    if (!token && isTokenExpired()){
      router.replace("/")
    }
  }, [token]);
  return (
    <div className="flex flex-col items-start">
      <div className=" w-full flex justify-center p-3">
        <div className=" absolute top-4 left-4">
          <Link href={"/"}>
            <Button>Home</Button>
          </Link>
        </div>
        <span className=" font-montserrat text-2xl font-bold">Edit</span>
        <div className=" absolute top-4 right-4">
          <UserButton />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <MainCarouselEdit />
        <TestimonyEdit />
        <LeadEdit />
        <TeamEdit />
        <GalleryEdit />
        <StartUpEdit />
      </div>
    </div>
  );
};

export default EditPage;

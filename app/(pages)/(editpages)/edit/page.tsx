import UserButton from "@/components/UserButton";
import MainCarouselEdit from "@/components/editPage/MainCarouselEdit";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EditPage = () => {
  return (
    <div className="flex flex-col items-start">
      <div className=" w-full flex justify-center p-3">
      <div className=" absolute top-4 left-4">
          <Link href={"/"}>
            <Button>
              Home
            </Button>
          </Link>
        </div>
        <span className=" font-montserrat text-2xl font-bold">Edit</span>
        <div className=" absolute top-4 right-4">
          <UserButton />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <MainCarouselEdit />
      </div>
    </div>
  );
};

export default EditPage;

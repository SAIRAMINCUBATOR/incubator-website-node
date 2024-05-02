"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditAdvisoryBoardTable } from "../models/advisoryBoardTeam/EditTableComponent";
import { EditManagementTable } from "../models/managementTeam/EditTableComponenet";
import { EditMentorsTable } from "../models/mentorsTeam/EditTableComponent";

const ManagementEdit = ({ editModelType }) => {
  const [visible, setVisible] = useState(false);
  const [modelType, setModelType] = useState("team");
  useEffect(() => {
    setVisible("management" == editModelType);
  }, [editModelType]);
  return (
    <div
      id="management"
      className={cn(
        " flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4",
        visible ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">Management</span>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        <div className="w-full py-4">
          <div className="flex gap-20 justify-evenly flex-wrap">
            <div className="flex flex-col gap-5">
              <div className="h-full w-full border-2 ">
                <p className="text-2xl font-semibold text-center">
                  Management Team
                </p>
              </div>
              <div className="flex gap-5 justify-center">
                <Button
                  // onClick={() => onOpen("editManagement")}
                  onClick={() => setModelType("team")}
                  variant={"ghost"}
                  className="bg-green-400 w-[100px] text-white shadow-md"
                >
                  <Pencil
                    className="h-4 w-4 mr-2 fill-green-800"
                    stroke="false"
                  />
                  Edit
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-full w-full border-2 ">
                <p className="text-2xl font-semibold text-center">
                  Advisory Board
                </p>
              </div>
              <div className="flex gap-5 justify-center">
                <Button
                  // onClick={() => onOpen("editAdvisoryBoard")}
                  onClick={() => setModelType("advisory")}
                  variant={"ghost"}
                  className="bg-green-400 w-[100px] text-white shadow-md"
                >
                  <Pencil
                    className="h-4 w-4 mr-2 fill-green-800"
                    stroke="false"
                  />
                  Edit
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-full w-full border-2 ">
                <p className="text-2xl font-semibold text-center">Mentors</p>
              </div>
              <div className="flex gap-5 justify-center">
                <Button
                  // onClick={() => onOpen("editMentors")}
                  onClick={() => setModelType("mentor")}
                  variant={"ghost"}
                  className="bg-green-400 w-[100px] text-white shadow-md"
                >
                  <Pencil
                    className="h-4 w-4 mr-2 fill-green-800"
                    stroke="false"
                  />
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <EditManagementTable type={modelType} />
        <EditAdvisoryBoardTable type={modelType} />
        <EditMentorsTable type={modelType}/>
      </div>
    </div>
  );
};

export default ManagementEdit;

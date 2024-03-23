"use client";
import React from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";

const IPREdit = () => {
  const { onOpen } = useModal();

  return (
    <div
      id="ipr"
      className=" flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4"
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">IPR</span>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        <div className="w-full py-4">
          <div className="flex gap-20 justify-evenly flex-wrap">
            <div className="flex flex-col gap-5">
              <div className="h-full w-full border-2 ">
                <p className="text-2xl font-semibold text-center">
                  Intellectual Property Rights (I.P.R)
                </p>
              </div>
              <div className="flex gap-5 justify-center">
                <Button
                  onClick={() => onOpen("editIPR")}
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
    </div>
  );
};

export default IPREdit;

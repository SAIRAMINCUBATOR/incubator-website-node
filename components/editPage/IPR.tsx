"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Pencil, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { cn } from "@/lib/utils";
import { IPR } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import JobsComponent from "@/components/models/ipr/Jobs";
import { useSession } from "@/components/providers/context/SessionContext";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Input } from "../ui/input";

const IPREdit = ({ editModelType }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible("ipr" == editModelType);
  }, [editModelType]);
  const ref = useRef(null);
  const [ipr, setIPR] = useState<IPR[]>();
  const { onOpen } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const [highlightedFields, setHighlightedFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/components/ipr");
    setIPR(response.data.response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setHighlightedFields([]);
    ipr &&
      ipr.map((obj, index) => {
        if (!obj.name) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "name" },
          ]);
        }
        if (obj.jobs.length == 0) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "jobs" },
          ]);
        }
        if (!obj.designation) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "designation" },
          ]);
        }
      });
  }, [ipr]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!token && isTokenExpired()) {
        toast("Session Expired");
      }
      if (highlightedFields.length > 0) {
        toast("Enter All Highlighted Fields");
        return;
      }
      setIsLoading(true);
      await axios.put(
        "/api/components/ipr",
        { ipr },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setIsLoading(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      if (error && error.response && error.response.data) {
        toast(
          <>
            <AlertCircle />
            {error.response.data}
          </>
        );
      }
    }
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    // Add new startup to the list
    setIPR([
      ...(ipr || []),
      {
        id: null,
        name: "",
        jobs: [],
        designation: "",
        addedByUserId: null,
      },
    ]);

    setTimeout(function () {
      if (ref.current) {
        const element = ref.current;
        element.children[element.children.length - 1].scrollIntoView();
      }
    }, 200);
  };
  const handleOnChange = (val: any, index: number, fieldName: string) => {
    let value = [...ipr];
    value[index][fieldName] = val;
    setIPR(value);
  };

  useEffect(() => {
    if (ipr && ipr.length == 0) {
      handleAddRow(new Event("Onclick"));
    }
  }, [ipr]);

  return (
    <div
      id="ipr"
      className={cn(
        " flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4",
        visible ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">IPR</span>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        {/* <div className="w-full py-4">
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
        </div> */}
        <form className="space-y-8 w-full">
          <div className="flex flex-col items-center w-full gap-10">
            <Table ref={ref} className="relative table-auto md:w-[80%]">
              <TableHeader className="sticky top-0">
                <TableRow>
                  <TableHead className="border-0">S. No. </TableHead>
                  <TableHead className="border-0">Name</TableHead>
                  <TableHead className="border-0">Jobs</TableHead>
                  <TableHead className="border-0">Designation</TableHead>

                  <TableHead className="border-0">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ipr &&
                  ipr.map((team, index) => (
                    <TableRow key={index}>
                      <TableCell className="border-none">{index + 1}</TableCell>
                      <TableCell className="border-none">
                        <Input
                          value={team.name}
                          className={
                            highlightedFields.some(
                              (field) =>
                                field.index === index &&
                                field.fieldName === "name"
                            )
                              ? "border-2 border-red-700"
                              : ""
                          }
                          onChange={(e) =>
                            handleOnChange(e.target.value, index, "name")
                          }
                          disabled={isLoading}
                        />
                      </TableCell>
                      <TableCell className="border-none">
                        <JobsComponent
                          value={team.jobs}
                          onChange={(value) =>
                            handleOnChange(value, index, "jobs")
                          }
                          disabled={isLoading}
                          className={
                            highlightedFields.some(
                              (field) =>
                                field.index === index &&
                                field.fieldName === "jobs"
                            )
                              ? "border-2 border-red-700"
                              : ""
                          }
                        />
                      </TableCell>
                      <TableCell className="border-none">
                        <Input
                          value={team.designation}
                          className={
                            highlightedFields.some(
                              (field) =>
                                field.index === index &&
                                field.fieldName === "designation"
                            )
                              ? "border-2 border-red-700"
                              : ""
                          }
                          onChange={(e) =>
                            handleOnChange(e.target.value, index, "designation")
                          }
                          disabled={isLoading}
                        />
                      </TableCell>

                      <TableCell className="border-none">
                        <Button
                          disabled={isLoading}
                          className="w-fit"
                          variant="ghost"
                          onClick={(e) => {
                            onOpen("deleteIPR", { iPR: team });
                            e.preventDefault();
                            const updatedList = [...ipr];
                            updatedList.splice(index, 1);
                            setIPR(updatedList);
                          }}
                        >
                          <Trash className=" text-red-500 " />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <div className="items-center">
              <Button
                variant="primary"
                type="button"
                disabled={isLoading}
                onClick={handleAddRow}
              >
                Add Member
              </Button>
            </div>
          </div>
           <div className=" justify-end flex">
          <Button variant="primary" onClick={onSubmit} disabled={isLoading}>
            Save
          </Button>
          </div>                 
        </form>
      </div>
    </div>
  );
};

export default IPREdit;

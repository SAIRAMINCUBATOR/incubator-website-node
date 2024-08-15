"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { AlertCircle, Pencil, PlusCircle, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import axios from "axios";
import { RequestData } from "@/schema";
import { Skeleton } from "../ui/skeleton";
import { ScrollArea } from "../ui/scroll-area";

const StartupDataEdit = ({ editModelType }) => {
  const { onOpen, isOpen, type } = useModal();
  const [currentType, setCurrentType] = useState(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible("startupData" == editModelType);
    console.log(editModelType);
  }, [editModelType]);
  const ref = useRef(null);

  const [startupData, setStartupData] = useState<RequestData[]>();
  // const { token, isTokenExpired } = useSession();
  // const router = useRouter();
  // const [highlightedFields, setHighlightedFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/components/startupData");
    setStartupData(response.data.response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setCurrentType(type);
    }
    if (
      !isOpen &&
      currentType &&
      currentType.toString().toLocaleLowerCase().endsWith("startupdata")
    ) {
      setTimeout(getData, 500);
      // getData();
      setCurrentType(null);
    }
  }, [isOpen, type]);

  // const onSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     if (!token && isTokenExpired()) {
  //       toast("Session Expired");
  //     }
  //     if (highlightedFields.length > 0) {
  //       toast("Enter All Highlighted Fields");
  //       return;
  //     }
  //     setIsLoading(true);
  //     await axios.put(
  //       "/api/components/funding",
  //       { funding },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     setIsLoading(false);
  //     router.refresh();
  //   } catch (error) {
  //     console.log(error);
  //     if (error && error.response && error.response.data) {
  //       toast(
  //         <>
  //           <AlertCircle />
  //           {error.response.data}
  //         </>
  //       );
  //     }
  //   }
  // };

  // const handlePaste = (event) => {
  //   const pastedText = event.clipboardData.getData("text");
  //   console.log(pastedText);
  //   if (pastedText.includes("\t") || pastedText.includes("\n")) {
  //     event.preventDefault();
  //     const strippedData = pastedText
  //       .split("\n")
  //       .map((text: string) => text.split("\t"));
  //     const list = strippedData.map((data) => ({
  //       id: null,
  //       name: data[data.length == 5 ? 1 : 0],
  //       cin: data[data.length == 5 ? 2 : 1],
  //       contact: data[data.length == 5 ? 3 : 2],
  //       amount: data[data.length == 5 ? 4 : 3],
  //       addedByUserId: null,
  //     }));

  //     const newList = [...funding];
  //     newList.pop();
  //     setFunding([...newList, ...list]);
  //   }
  // };

  // const handleAddRow = (e) => {
  //   e.preventDefault();
  //   // Add new startup to the list
  //   setFunding([
  //     ...(funding || []),
  //     {
  //       id: null,
  //       name: "",
  //       cin: "",
  //       contact: "",
  //       amount: "",
  //       addedByUserId: null,
  //     },
  //   ]);

  //   setTimeout(function () {
  //     if (ref.current) {
  //       const element = ref.current;
  //       element.children[element.children.length - 1].scrollIntoView();
  //     }
  //   }, 200);
  // };
  // const handleOnChange = (val: string, index: number, fieldName: string) => {
  //   let value = [...funding];
  //   value[index][fieldName] = val;
  //   setFunding(value);
  // };

  // useEffect(() => {
  //   if (funding && funding.length == 0) {
  //     handleAddRow(new Event("Onclick"));
  //   }
  // }, [funding]);

  return (
    <div
      id="startupData"
      className={cn(
        " flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4",
        visible ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">Startup Data</span>
        <Button
          variant="primary"
          type="button"
          className="flex items-center gap-2"
          disabled={isLoading}
          onClick={() => onOpen("addStartupData")}
        >
          <PlusCircle className="w-5 h-5" />
          Add Data
        </Button>
      </div>

      <div className="min-h-[100px] w-full flex justify-center items-center">
        <div className="flex flex-col items-center w-full">
          <ScrollArea className="w-[80%] h-[88vh]">
            <Table ref={ref} className="relative w-full">
              <TableHeader className="sticky top-0 text-xl z-10">
                <TableRow className="bg-slate-300 rounded-2xl">
                  <TableHead className="border-0 w-1/4">S. No. </TableHead>
                  <TableHead className="border-0 w-1/2">Startup Name</TableHead>

                  <TableHead className="border-0 w-1/2">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <>
                    <TableRow>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell  className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell  className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  startupData &&
                  startupData.map((datum, index) => (
                    <TableRow key={index}>
                      <TableCell className="border-none">{index + 1}</TableCell>
                      <TableCell className="border-none font-semibold">
                        {datum.name}
                      </TableCell>

                      <TableCell className="border-none flex items-center justify-center gap-2 p-2">
                        <Button
                          onClick={() =>
                            onOpen("editStartupData", { startupData: datum })
                          }
                          variant={"ghost"}
                          className="bg-green-400 w-[100px] text-white shadow-md"
                        >
                          <Pencil
                            className="h-4 w-4 mr-2 fill-green-800"
                            stroke="false"
                          />
                          Edit
                        </Button>
                        <Button
                          onClick={() =>
                            onOpen("deleteStartupData", { startupData: datum })
                          }
                          variant={"ghost"}
                          className="bg-red-400 w-[100px] text-white shadow-md"
                        >
                          <Trash
                            className="h-5 w-5 mr-2 text-white fill-red-800"
                            stroke="false"
                          />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default StartupDataEdit;

"use client";

import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-model-store";
import { useSession } from "@/components/providers/context/SessionContext";
import { toast } from "sonner";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AlertCircle, Trash } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IPR } from "@prisma/client";

export const EditIPR = () => {
  const ref = useRef(null);
  const [ipr, setIPR] = useState<IPR[]>();
  const { isOpen, onClose, type,onOpen } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const [highlightedFields, setHighlightedFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isModalOpen = isOpen && type === "editIPR";

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/components/ipr");
    setIPR(response.data.response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [isModalOpen]);

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
        if (!obj.jobs) {
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
        handleClose();
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
      onClose();
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

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text");
    const strippedData = pastedText
      .split("\n")
      .map((text: string) => text.split("\t"));
    const list = strippedData.map((data) => ({
      id: null,
      name: data[data.length == 4 ? 1 : 0],
      jobs: data[data.length == 4 ? 2 : 1],
      designation: data[data.length == 4 ? 3 : 2],
      addedByUserId: null,
    }));

    const newList = [...ipr];
    newList.pop();
    setIPR([...newList, ...list]);
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
  const handleOnChange = (val: string, index: number, fieldName: string) => {
    let value = [...ipr];
    value[index][fieldName] = val;
    setIPR(value);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-auto min-w-fit">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit IPR Team
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-8">
          <div className="flex flex-col items-center w-full">
            <ScrollArea className="self-center m-2  h-[300px] w-full">
              <Table onPaste={handlePaste} ref={ref} className="relative">
                <TableCaption>
                  Paste the table directly to populate the form
                  </TableCaption>
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
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
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
                        <TableCell>
                          <Input
                            value={team.jobs}
                            className={
                              highlightedFields.some(
                                (field) =>
                                  field.index === index &&
                                  field.fieldName === "jobs"
                              )
                                ? "border-2 border-red-700"
                                : ""
                            }
                            onChange={(e) =>
                              handleOnChange(
                                e.target.value,
                                index,
                                "jobs"
                              )
                            }
                            disabled={isLoading}
                          />
                        </TableCell>
                        <TableCell>
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
                              handleOnChange(
                                e.target.value,
                                index,
                                "designation"
                              )
                            }
                            disabled={isLoading}
                          />
                        </TableCell>
                        
                        <TableCell>
                          <Button
                            disabled={isLoading}
                            className="w-fit"
                            variant="ghost"
                            onClick={(e) => {
                              onOpen("deleteIPR", {iPR: team  })
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
            </ScrollArea>
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

          <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button variant="primary" disabled={isLoading}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
"use client";

import axios from "axios";

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
import { Management } from "@prisma/client";
import { cn } from "@/lib/utils";

export const EditManagementTable = ({ type }) => {
  const ref = useRef(null);
  const [management, setManagement] = useState<Management[]>();
  const { onOpen } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const [highlightedFields, setHighlightedFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/components/management");
    setManagement(response.data.response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setHighlightedFields([]);
    management &&
      management.map((obj, index) => {
        if (!obj.name) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "name" },
          ]);
        }
        if (!obj.designation) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "designation" },
          ]);
        }
        if (!obj.experience) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "experience" },
          ]);
        }
      });
  }, [management]);

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
        "/api/components/management",
        { management },
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

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    if (pastedText.includes("\t") || pastedText.includes("\n")) {
      event.preventDefault();
      const strippedData = pastedText
        .split("\n")
        .map((text: string) => text.split("\t"));
      const list = strippedData.map((data) => ({
        id: null,
        name: data[data.length == 4 ? 1 : 0],
        designation: data[data.length == 4 ? 2 : 1],
        experience: data[data.length == 4 ? 3 : 2],
        addedByUserId: null,
      }));

      const newList = [...management];
      newList.pop();
      setManagement([...newList, ...list]);
    }
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    // Add new startup to the list
    setManagement([
      ...(management || []),
      {
        id: null,
        name: "",
        designation: "",
        experience: "",
        addedByUserId: null,
      },
    ]);

    setTimeout(function () {
      if (ref.current) {
        const element = ref.current;
        element.children[element.children.length - 1].scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 200);
  };
  const handleOnChange = (val: string, index: number, fieldName: string) => {
    let value = [...management];
    value[index][fieldName] = val;
    setManagement(value);
  };

  useEffect(() => {
    if (management && management.length == 0) {
      handleAddRow(new Event("Onclick"));
    }
  }, [management]);

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-8", type == "team" ? "block" : "hidden")}
    >
      <span className="p-2 font-montserrat font-bold text-xl">
        Edit Management Team
      </span>

      <div className="flex flex-col items-center w-full">
        <Table onPaste={handlePaste} className="relative">
          <TableHeader className="sticky top-0">
            <TableRow>
              <TableHead className="border-0">S. No. </TableHead>
              <TableHead className="border-0">Name</TableHead>
              <TableHead className="border-0">Designation</TableHead>
              <TableHead className="border-0 w-2/4">Experience</TableHead>
              <TableHead className="border-0">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {management &&
              management.map((team, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Input
                      value={team.name}
                      className={
                        highlightedFields.some(
                          (field) =>
                            field.index === index && field.fieldName === "name"
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
                  <TableCell>
                    <Input
                      value={team.experience}
                      className={
                        highlightedFields.some(
                          (field) =>
                            field.index === index &&
                            field.fieldName === "experience"
                        )
                          ? "border-2 border-red-700"
                          : ""
                      }
                      onChange={(e) =>
                        handleOnChange(e.target.value, index, "experience")
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
                        onOpen("deleteManagement", { management: team });
                        e.preventDefault();
                        const updatedList = [...management];
                        updatedList.splice(index, 1);
                        setManagement(updatedList);
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

      <div className=" px-6" ref={ref}>
        <Button variant="primary" disabled={isLoading}>
          Save
        </Button>
      </div>
    </form>
  );
};

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { AlertCircle, Pencil, Trash } from "lucide-react";
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
import { Funding } from "@prisma/client";
import axios from "axios";
import { toast } from "sonner";
import { useSession } from "../providers/context/SessionContext";
import { DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const FundingEdit = ({ editModelType }) => {
  const { onOpen } = useModal();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible("funding" == editModelType);
  }, [editModelType]);
  const ref = useRef(null);
  const [funding, setFunding] = useState<Funding[]>();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const [highlightedFields, setHighlightedFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/components/funding");
    setFunding(response.data.response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setHighlightedFields([]);
    funding &&
      funding.map((obj, index) => {
        if (!obj.name) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "name" },
          ]);
        }
        if (!obj.cin) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "cin" },
          ]);
        }
        if (!obj.contact) {
          setHighlightedFields((prev) => [
            ...prev,
            { index, fieldName: "contact" },
          ]);
        }
      });
  }, [funding]);

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
        "/api/components/funding",
        { funding },
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
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text");
    const strippedData = pastedText
      .split("\n")
      .map((text: string) => text.split("\t"));
    const list = strippedData.map((data) => ({
      id: null,
      name: data[data.length == 4 ? 1 : 0],
      cin: data[data.length == 4 ? 2 : 1],
      contact: data[data.length == 4 ? 3 : 2],
      addedByUserId: null,
    }));

    const newList = [...funding];
    newList.pop();
    setFunding([...newList, ...list]);
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    // Add new startup to the list
    setFunding([
      ...(funding || []),
      {
        id: null,
        name: "",
        cin: "",
        contact: "",
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
    let value = [...funding];
    value[index][fieldName] = val;
    setFunding(value);
  };

  useEffect(() => {
    if (funding && funding.length == 0) {
      handleAddRow(new Event("Onclick"));
    }
  }, [funding]);

  return (
    <div
      id="funding"
      className={cn(
        " flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4",
        visible ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">Funding</span>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        {/* <div className="w-full py-4">
          <div className="flex gap-20 justify-evenly flex-wrap">
            <div className="flex flex-col gap-5">
              <div className="h-full w-full border-2 ">
                <p className="text-2xl font-semibold text-center">
                  Fundings
                </p>
              </div>
              <div className="flex gap-5 justify-center">
                <Button
                  onClick={() => onOpen("editFunding")}
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
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="flex flex-col items-center w-full">
            <Table onPaste={handlePaste} ref={ref} className="relative">
              <TableHeader className="sticky top-0">
                <TableRow>
                  <TableHead className="border-0">S. No. </TableHead>
                  <TableHead className="border-0">Name</TableHead>
                  <TableHead className="border-0">
                    CORPORATE IDENTIFICATION NUMBER (CIN) / REGISTRATION NUMBER
                  </TableHead>
                  <TableHead className="border-0">
                    CONTACT PERSON NAME (FOUNDER / COFOUNDER / CEO / DIRECTOR)
                  </TableHead>
                  <TableHead className="border-0">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {funding &&
                  funding.map((team, index) => (
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
                        <Input
                          value={team.cin}
                          className={
                            highlightedFields.some(
                              (field) =>
                                field.index === index &&
                                field.fieldName === "cin"
                            )
                              ? "border-2 border-red-700"
                              : ""
                          }
                          onChange={(e) =>
                            handleOnChange(e.target.value, index, "cin")
                          }
                          disabled={isLoading}
                        />
                      </TableCell>
                      <TableCell className="border-none">
                        <Input
                          value={team.contact}
                          className={
                            highlightedFields.some(
                              (field) =>
                                field.index === index &&
                                field.fieldName === "contact"
                            )
                              ? "border-2 border-red-700"
                              : ""
                          }
                          onChange={(e) =>
                            handleOnChange(e.target.value, index, "contact")
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
                            onOpen("deleteFunding", { funding: team });
                            e.preventDefault();
                            const updatedList = [...funding];
                            updatedList.splice(index, 1);
                            setFunding(updatedList);
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
                Add Funding
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="primary" disabled={isLoading}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundingEdit;

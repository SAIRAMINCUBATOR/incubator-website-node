"use client";
import React, {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Trash } from "lucide-react";
import { toast } from "sonner";
interface Props {
  value: string[];
  onChange: (value: string[]) => void;
  disabled: boolean;
  className: string;
}

const JobsComponent = ({ value, onChange, disabled, className }: Props) => {
  const [jobs, setJobs] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    setJobs(value);
  }, [value]);

  const onSubmit = (e: any) => {
    if (jobs.some((job) => job == "")) {
      toast("Enter The Highlighted field");
    }
    e.preventDefault();
    onChange(jobs);
    setIsOpen(false);
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    const pastedText = event.clipboardData.getData("text");
    const strippedData = pastedText.split("\n");
    if (strippedData.length == 1) return;
    event.preventDefault();
    const list = strippedData.map((data) => data);
    console.log(pastedText, strippedData);
    const newList = [...jobs];
    newList.pop();
    setJobs([...newList, ...list]);
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    // Add new startup to the list
    setJobs([...(jobs || []), ""]);

    setTimeout(function () {
      if (ref.current) {
        const element = ref.current;
        element.children[element.children.length - 1].scrollIntoView();
      }
    }, 200);
  };
  const handleOnChange = (val: any, index: number) => {
    let value = [...jobs];
    value[index] = val;
    setJobs(value);
  };

  const handleClose = () => {
    if (isOpen && jobs.some((job) => job == "")) {
      toast("Enter The Highlighted field");
    } else if (isOpen) {
      onChange(jobs);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    if (jobs && jobs.length == 0) {
      handleAddRow(new Event("Onclick"));
    }
  }, [jobs]);

  return (
    <Dialog onOpenChange={handleClose} open={isOpen}>
      <DialogTrigger
        className={cn(className, buttonVariants({ variant: "primary" }))}
        disabled={disabled}
      >
        {value.length} Jobs
      </DialogTrigger>
      <DialogContent className="bg-white text-black p-0 overflow-auto w-full">
        <DialogClose className="right-2 top-2" />
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Jobs
          </DialogTitle>
          <DialogDescription>
            Paste the table directly to populate the form
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="flex flex-col items-center w-full">
            <ScrollArea className="self-center m-2  h-[300px] w-full">
              <Table onPaste={handlePaste} ref={ref} className="relative">
                <TableHeader className="sticky top-0">
                  <TableRow>
                    <TableHead className="border-0">S. No. </TableHead>
                    <TableHead className="border-0">Jobs</TableHead>
                    <TableHead className="border-0">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs &&
                    jobs.map((job, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>

                        <TableCell>
                          <Input
                            value={job}
                            className={
                              job == "" ? "border-2 border-red-700" : ""
                            }
                            onChange={(e) =>
                              handleOnChange(e.target.value, index)
                            }
                            disabled={disabled}
                          />
                        </TableCell>

                        <TableCell>
                          <Button
                            disabled={disabled}
                            className="w-fit"
                            variant="ghost"
                            onClick={(e) => {
                              e.preventDefault();
                              const updatedList = [...jobs];
                              updatedList.splice(index, 1);
                              setJobs(updatedList);
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
                disabled={disabled}
                onClick={handleAddRow}
              >
                Add Job
              </Button>
            </div>
          </div>

          <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button variant="primary" disabled={disabled}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobsComponent;

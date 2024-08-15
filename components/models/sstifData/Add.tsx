"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-model-store";

import { useSession } from "../../providers/context/SessionContext";
import { toast } from "sonner";
import { AlertCircle, PlusCircle, Trash } from "lucide-react";
import { PDFFileUpload } from "@/components/PDFFileUpload";
import {
  SSTIFDetailsSchema,
} from "@/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePicker } from "@/components/DataPicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AddSSTIFData = () => {
  const { isOpen, onClose, type } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const isModalOpen = isOpen && type === "addSSTIFData";

  const form = useForm<z.infer<typeof SSTIFDetailsSchema>>({
    resolver: zodResolver(SSTIFDetailsSchema),
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof SSTIFDetailsSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.post("/api/components/sstifData", values, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      form.reset();
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

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden w-full">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Add SSTIF Project Data
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <ScrollArea className="h-[65vh]">
              <div className="space-y-8 px-6">
                <FormField
                  control={form.control}
                  name="studentID"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student ID</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="First Year">First Year</SelectItem>
                          <SelectItem value="Second Year">
                            Second Year
                          </SelectItem>
                          <SelectItem value="Third Year">Third Year</SelectItem>
                          <SelectItem value="Fourth Year">
                            Fourth Year
                          </SelectItem>
                          {/* <SelectItem value="Fifth Year">Fifth Year</SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Name</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sstifStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SSTIF Start Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          disabled={isLoading}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sstifEndDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SSTIF End Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          disabled={isLoading}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numberOfDays"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Days</FormLabel>
                      <FormControl>
                        <Input type="number" disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Title</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Under Process">
                            Under Process
                          </SelectItem>

                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectReport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Report</FormLabel>
                      <FormControl>
                       <PDFFileUpload disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sstifMentor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SSTIF Mentor</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Category</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </ScrollArea>
            <DialogFooter className="px-6 py-4  bg-gray-100">
              <Button
                variant="primary"
                disabled={isLoading}
                className="w-[100px]"
              >
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

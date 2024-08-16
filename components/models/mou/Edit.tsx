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
import { AlertCircle } from "lucide-react";
import { PDFFileUpload } from "@/components/PDFFileUpload";
import { MOUFormSchema } from "@/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePicker } from "@/components/DataPicker";

import { useEffect, useState } from "react";

export const EditMOUData = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const isModalOpen = isOpen && type === "editMOUData";
  const { mou } = data;
  const [id, setId] = useState("");

  useEffect(() => {
    if (mou) {
      setId(mou.id);
      form.setValue("department", mou.department);
      form.setValue("name", mou.name);
      form.setValue("fromDate", mou.fromDate ? new Date(mou.fromDate) : null);
      form.setValue("toDate", mou.toDate ? new Date(mou.toDate) : null);
      form.setValue("status", mou.status);
      form.setValue("scannedCopy", mou.scannedCopy);
      form.setValue("description", mou.description);
      form.setValue("companyWebsite", mou.companyWebsite);
      form.setValue("aboutCompany", mou.aboutCompany);
      form.setValue("companyAddress", mou.companyAddress);
      form.setValue(
        "industryContactPersonDetails",
        mou.industryContactPersonDetails
      );
      form.setValue(
        "institutionContactPersonDetails",
        mou.institutionContactPersonDetails
      );
      form.setValue("clubsAligned", mou.clubsAligned);
      form.setValue("alignedToSairamSDGGoals", mou.alignedToSairamSDGGoals);
      form.setValue("keywords", mou.keywords);
      form.setValue("studentRegistrationCost", mou.studentRegistrationCost);
      form.setValue("placementOpportunity", mou.placementOpportunity);
      form.setValue("internshipOpportunity", mou.internshipOpportunity);
      form.setValue("goingForRenewal", mou.goingForRenewal);
      form.setValue("benefittedSoFar", mou.benefittedSoFar);
      form.setValue("relationshipWithCompany", mou.relationshipWithCompany);
    }
  }, [mou]);

  const form = useForm<z.infer<typeof MOUFormSchema>>({
    resolver: zodResolver(MOUFormSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof MOUFormSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.put(
        "/api/components/mou",
        { id: id, ...values },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
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
            Edit MOU Data
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
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fromDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From Date</FormLabel>
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
                  name="toDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          disabled={isLoading}
                          value={field.value}
                          onChange={field.onChange}
                          noEnd
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Mou Active</FormLabel>
                      <FormControl>
                        <Checkbox
                          className="m-2"
                          disabled={isLoading}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="scannedCopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scanned Copy</FormLabel>
                      <FormControl>
                        <PDFFileUpload disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Website</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aboutCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About Company</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Address</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industryContactPersonDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry Contact Person Details</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="institutionContactPersonDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution Contact Person Details</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="clubsAligned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Clubs Aligned</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="alignedToSairamSDGGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aligned To Sairam SDG Goals</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentRegistrationCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Registration Cost</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="placementOpportunity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Placement Opportunity</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="internshipOpportunity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Internship Opportunity</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goingForRenewal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Going For Renewal</FormLabel>
                      <FormControl>
                        <Checkbox
                          className="m-2"
                          disabled={isLoading}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="benefittedSoFar"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Benefitted So Far</FormLabel>
                      <FormControl>
                        <Input type="number" disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="relationshipWithCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relationship With Company</FormLabel>
                      <FormControl>
                        <Input type="number" disabled={isLoading} {...field} />
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
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

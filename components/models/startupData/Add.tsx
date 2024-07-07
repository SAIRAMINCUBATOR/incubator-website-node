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
import { StartUpDataFormSchema } from "@/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePicker } from "@/components/DataPicker";

import { SearchableMultiSelect } from "@/components/SearchableMultiSelect";
import { useEffect } from "react";
interface Option {
  label: string;
  value: string;
}
export const AddStartupData = () => {
  const { isOpen, onClose, type } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const isModalOpen = isOpen && type === "addStartupData";

  const form = useForm<z.infer<typeof StartUpDataFormSchema>>({
    resolver: zodResolver(StartUpDataFormSchema),
    defaultValues:{
      patents: [{name: "", file : ""}],
      copyrights: [],
      trademarks: [],
    }
  });

  const isLoading = form.formState.isSubmitting;
  const inputOptions: Option[] = [
    { label: "No Poverty", value: "No Poverty" },
    { label: "Zero Hunger", value: "Zero Hunger" },
    {
      label: "Good Health and Well-being",
      value: "Good Health and Well-being",
    },
    { label: "Quality Education", value: "Quality Education" },
    { label: "Gender Equality", value: "Gender Equality" },
    {
      label: "Clean Water and Sanitation",
      value: "Clean Water and Sanitation",
    },
    {
      label: "Affordable and Clean Energy",
      value: "Affordable and Clean Energy",
    },
    {
      label: "Decent Work and Economic Growth",
      value: "Decent Work and Economic Growth",
    },
    {
      label: "Industry, Innovation, and Infrastructure",
      value: "Industry, Innovation, and Infrastructure",
    },
    { label: "Reduced Inequality", value: "Reduced Inequality" },
    {
      label: "Sustainable Cities and Communities",
      value: "Sustainable Cities and Communities",
    },
    {
      label: "Responsible Consumption and Production",
      value: "Responsible Consumption and Production",
    },
    { label: "Climate Action", value: "Climate Action" },
    { label: "Life Below Water", value: "Life Below Water" },
    { label: "Life on Land", value: "Life on Land" },
    {
      label: "Peace, Justice, and Strong Institutions",
      value: "Peace, Justice, and Strong Institutions",
    },
    {
      label: "Partnerships for the Goals",
      value: "Partnerships for the Goals",
    },
  ];

  const onSubmit = async (values: z.infer<typeof StartUpDataFormSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.post("/api/components/startupData", values, {
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

  useEffect(() => {
    console.log(form.getValues("patents"))
  }, [form.watch("patents")]);

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden w-full">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Add Startup Data
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <ScrollArea className="h-[65vh] py-2">
              <div className="space-y-8 px-6">
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
                <DatePicker
                  disabled={isLoading}
                  value={form.getValues("dateOfRegistration")}
                  onChange={(v) => form.setValue("dateOfRegistration", v)}
                  name="Date of Registration"
                />
                <DatePicker
                  disabled={isLoading}
                  value={form.getValues("dateOfIncorporation")}
                  onChange={(v) => form.setValue("dateOfIncorporation", v)}
                  name="Date of Incorporation"
                />

                <FormField
                  control={form.control}
                  name="isOperational"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Operational</FormLabel>
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
                  name="yearsOfIncorporation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Incorporation</FormLabel>
                      <FormControl>
                        <Input type="number" disabled={isLoading} {...field} onChange={(e) => form.setValue("yearsOfIncorporation", Number(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="RegistrationNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration No</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ContactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <Input type="tel" disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input  disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isGraduatedFromIncubation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Graduated From Incubation</FormLabel>
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
                <DatePicker
                  disabled={isLoading}
                  value={form.getValues("dateOfGraduation")}
                  onChange={(v) => form.setValue("dateOfGraduation", v)}
                  name="Date of Graduation"
                />

                <FormField
                  control={form.control}
                  name="isSignedInvestment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Signed Investment</FormLabel>
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
                  name="investmentFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="isInvestedInIncubation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Invested In Incubation</FormLabel>
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
                  name="investedInIncubationFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Invested In Incubation File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="quantumOfInvestment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantum of Investment</FormLabel>
                      <FormControl>
                        <Input type="number" disabled={isLoading} {...field} onChange={(e)=>field.onChange(parseFloat(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantumOfInvestmentFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantum of Investment File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="sourceOfInvestment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Source of Investment</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sourceOfInvestmentFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Source of Investment File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="hasRaisedFollowingAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Has Raised Following Amount</FormLabel>
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
                  name="hasRaisedFollowingAmountFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Has Raised Following Amount File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="quantumOfRaisedAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantum of Raised Amount</FormLabel>
                      <FormControl>
                        <Input type="number" disabled={isLoading} {...field} onChange={(e)=>field.onChange(parseFloat(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantumOfRaisedAmountFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantum of Raised Amount File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="hasCrossed1CrAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Has Crossed 1 Cr Amount</FormLabel>
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
                  name="hasCrossed1CrAmountFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Has Crossed 1 Cr Amount File</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="FinancialYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Financial Year</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Institute"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institute</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sector</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sdgGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SDG Goal</FormLabel>
                      <FormControl>
                        <SearchableMultiSelect
                          disabled={isLoading}
                          onSelect={field.onChange}
                          inputOptions={inputOptions}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="incorporationCertificate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Incorporation Certificate</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="udayamCertificate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Udyam Certificate</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="MOU"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>MOU</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="ITR"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ITR</FormLabel>
                      <FormControl>
                        <PDFFileUpload
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
                  name="DPIIT"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>DPIIT</FormLabel>
                      <FormControl>
                        <PDFFileUpload
                          disabled={isLoading}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="patents"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patents</FormLabel>
                      <FormControl>
                        {Array(field.value).map ( (patent, index) => (
                          
                        
                          <span>Add Patents</span>
                        ))}
                        { field.value.map((patent, index) => (
                          <div key={index} className="flex items-center gap-2">
                            
                            <Input
                              disabled={isLoading}
                              value={patent.name}
                              onChange={(e) => {
                                const newPatents = [...field.value];
                                newPatents[index] = {
                                  ...newPatents[index],
                                  name: e.target.value,
                                };
                                field.onChange(newPatents);
                              }}
                            />
                            <PDFFileUpload
                              disabled={isLoading}
                              value={patent.file}
                              onChange={(e) => {
                                const newPatents = [...field.value];
                                newPatents[index] = {
                                  ...newPatents[index],
                                  file: e,
                                };
                                field.onChange(newPatents);
                              }}
                            />
                          </div>
                        ))} 
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="patents"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patents</FormLabel>
                      <FormControl>
                        {Array.isArray(field.value) && field.value.map((patent, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              disabled={isLoading}
                              value={patent.name}
                              onChange={(e) => {
                                const newPatents = [...field.value];
                                newPatents[index] = {
                                  ...newPatents[index],
                                  name: e.target.value,
                                };
                                field.onChange(newPatents);
                              }}
                            />
                            <PDFFileUpload
                              disabled={isLoading}
                              value={patent.file}
                              onChange={(e) => {
                                const newPatents = [...field.value];
                                newPatents[index] = {
                                  ...newPatents[index],
                                  file: e,
                                };
                                field.onChange(newPatents);
                              }}
                            />
                          </div>
                        ))}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>

              <DialogFooter className="px-6 py-4  bg-gray-100">
                <Button
                  variant="primary"
                  disabled={isLoading}
                  className="w-[100px]"
                >
                  Add
                </Button>
              </DialogFooter>
            </ScrollArea>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

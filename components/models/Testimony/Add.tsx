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
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-model-store";
import { useState } from "react";
import { useSession } from "../../providers/context/SessionContext";
import { toast } from "sonner";
import { FileUpload } from "@/components/FileUpload";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Image name is required.",
  }),
  image: z.string().min(1, {
    message: "Image is required.",
  }),
  companyName: z.string().min(1, {
    message: "Company name is required.",
  }),
  Designation: z.string().min(1, {
    message: "Designation is required.",
  }),
  description: z.string().min(1, {
    message: "description is required.",
  }),
});

export const AddTestimony = () => {
  const { isOpen, onClose, type } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const isModalOpen = isOpen && type === "addTestimony";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      companyName: "",
      Designation: "",
      description: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.post("/api/components/testimony", values, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
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
            Add Testimony Image
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Image
                    </FormLabel>
                    <FormControl>
                      <FileUpload
                                              disabled={isLoading}

                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    {/* <FormDescription>This is your public display email.</FormDescription> */}

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Image Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-200/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 shadow-inner"
                        placeholder="Enter Image Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-200/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 shadow-inner"
                        placeholder="Enter Company Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Reviewer Designation
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-200/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 shadow-inner"
                        placeholder="Enter Reviewer Designation"
                        {...field}
                      />
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Testimony
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-200/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 shadow-inner"
                        placeholder="Enter Testimony"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="px-6 bg-gray-100 py-4">
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

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
import { AlertCircle, Trash, X } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Editor from "@/components/RichTextEditor";
import { ScrollBar } from "@/components/ui/scroll-area";
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Image name is required.",
  }),
  image: z.array(z.string()).min(1, {
    message: "At least one image must be provided.",
  }),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  content: z.string().min(1, {
    message: "Content is required.",
  }),
});

export const AddProject = () => {
  const { isOpen, onClose, type } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const isModalOpen = isOpen && type === "addProject";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: [],
      description: "",
      content: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Session Expired");
        handleClose();
      }

      await axios.post("/api/components/project", values, {
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
      <DialogContent className="bg-white text-black p-0 overflow-auto w-full">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Add Project Image
          </DialogTitle>
        </DialogHeader>
        <ScrollArea
          className="space-y-8 self-center w-[99%]"
          style={{ maxHeight: 600 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <div className="space-y-8 px-6">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Image List
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-col items-center">
                          {Array.isArray(field.value) &&
                            field.value.map((imageUrl, index) => (
                              <div
                                key={index}
                                className="mb-2 flex items-center w-full"
                              >
                                <FileUpload
                                  disabled={isLoading}
                                  value={field.value[index]}
                                  onChange={(file) => {
                                    const updatedList = [...field.value];
                                    updatedList[index] = file; // Assuming FileUpload returns the file object
                                    field.onChange(updatedList);
                                  }}
                                />
                                <Trash
                                  className="ml-2 text-red-500 cursor-pointer"
                                  onClick={() => {
                                    if (!isLoading) {
                                      const updatedList = [...field.value];
                                      updatedList.splice(index, 1);
                                      field.onChange(updatedList);
                                    }
                                  }}
                                />
                              </div>
                            ))}
                          <div className="items-center">
                            <Button
                              disabled={isLoading}
                              onClick={(e) => {
                                e.preventDefault();
                                field.onChange([...(field.value || []), null]);
                              }}
                              className="hover:underline focus:outline-none w-full px-10 bg-violet-500"
                            >
                              Add Image
                            </Button>
                          </div>
                        </div>
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
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Project Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-200/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 shadow-inner"
                          placeholder="Enter Project Title"
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
                        Project Description
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-200/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 shadow-inner"
                          placeholder="Enter Project"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Project Content
                      </FormLabel>
                      <FormControl>
                        <Editor value={field.value} onChange={field.onChange} disabled={isLoading}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter className=" py-4 px-6  bg-gray-100 w-[101%]">
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
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
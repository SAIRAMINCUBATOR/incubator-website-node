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
import { useSession } from "@/components/providers/context/SessionContext";
import { toast } from "sonner";
import { FileUpload } from "@/components/FileUpload";
import { useEffect } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AlertCircle, Trash } from "lucide-react";
import Editor from "@/components/RichTextEditor";
import { MultipleFileUpload } from "@/components/MultipleFileUpload";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Image name is required.",
  }),
  image: z.array(z.string()).min(1, {
    message: "At least one image must be provided.",
  }),
  description: z.string().min(1, {
    message: "description is required.",
  }),
  content: z.string().min(1, {
    message: "Content is required.",
  }),
});

export const EditProject = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();

  const isModalOpen = isOpen && type === "editProject";
  const { project } = data;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project?.name,
      image: project?.image,
      description: project?.description,
      content: project?.content,
    },
  });

  useEffect(() => {
    if (project?.name) form.setValue("name", project.name);
    if (project?.image) form.setValue("image", project.image);
    if (project?.description) form.setValue("description", project.description);
    if (project?.content) form.setValue("content", project.content);
  }, [project, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Session Expired");
        handleClose();
      }

      await axios.put(
        "/api/components/project",
        { ...values, id: project?.id },
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
      <DialogContent className="bg-white text-black p-0 overflow-auto w-full">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Project Image
          </DialogTitle>
        </DialogHeader>
        <ScrollArea
          className="space-y-8 self-center"
          style={{ width: "99%", maxHeight: 600 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                              <div
                                className="mb-2 flex items-center w-full"
                              >
                                <MultipleFileUpload
                                  disabled={isLoading}
                                  value={field.value}
                                  onChange={
                                    field.onChange
                                  }
                                />
                                
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
                        <Editor
                          value={field.value}
                          onChange={field.onChange}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className=" py-4 px-6 w-[101%] bg-gray-100">
                <Button
                  variant="primary"
                  disabled={isLoading}
                  className="w-[100px]"
                >
                  Edit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

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
import { AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Image name is required.",
  }),
  image: z.string().min(1, {
    message: "Image is required.",
  }),
  designation: z.string().min(1, {
    message: "Designation is required.",
  }),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
});

export const EditLead = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();

  const isModalOpen = isOpen && type === "editLead";
  const { lead } = data;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: lead?.name,
      image: lead?.image,
      designation: lead?.designation,
      facebook: lead?.facebook,
      twitter: lead?.twitter,
      instagram: lead?.instagram,
      linkedin: lead?.linkedin,
    },
  });

  useEffect(() => {
    if (lead?.name) form.setValue("name", lead.name);
    if (lead?.image) form.setValue("image", lead.image);
    if (lead?.designation) form.setValue("designation", lead.designation);
    if (lead?.facebook) form.setValue("facebook", lead.facebook);
    if (lead?.twitter) form.setValue("twitter", lead.twitter);
    if (lead?.instagram) form.setValue("instagram", lead.instagram);
    if (lead?.linkedin) form.setValue("linkedin", lead.linkedin);
  }, [lead, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.put(
        "/api/components/lead",
        { ...values, id: lead?.id },
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
            Edit Lead Member Image
          </DialogTitle>
        </DialogHeader>
        <ScrollArea
          className="space-y-8 self-center"
          style={{ width: "100%", height: 600 }}
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
                        Member Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
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
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Member Designation
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter Image Designation"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Member's Facebook Profile (OPTIONAL)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter Member's Facebook Profile"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Member's Twitter Profile (OPTIONAL)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter Member's Twitter Profile"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Member's Instagram Profile (OPTIONAL)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter Member's Instagram Profile"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Member's LinkedIn Profile (OPTIONAL)
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter Member's LinkedIn Profile"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button variant="primary" disabled={isLoading}>
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

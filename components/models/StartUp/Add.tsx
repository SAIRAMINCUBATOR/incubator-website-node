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
import { Trash } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "StartUp Type is required.",
  }),
  list: z.array(z.string()).min(1, {
    message: "At least one startup must be provided.",
  }),
});

export const AddStartUp = () => {
  const { isOpen, onClose, type } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();
  const isModalOpen = isOpen && type === "addStartUp";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      list: [],
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.post("/api/components/startup", values, {
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
      <DialogContent className="bg-white text-black p-0 overflow-hidden w-1/2">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Add StartUp
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    StartUp Type
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder="Enter StartUp Type"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="list"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    StartUp List
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center w-full">
                      {Array.isArray(field.value) &&
                        field.value.map((startup, index) => (
                          <div
                            key={index}
                            className="mb-2 flex items-center w-full"
                          >
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 w-full"
                              placeholder={`Enter Startup ${index + 1}`}
                              value={field.value[index]}
                              onChange={(e) => {
                                const updatedList = [...field.value];
                                updatedList[index] = e.target.value;
                                field.onChange(updatedList);
                              }}
                            />
                            <Trash
                              className="ml-2 text-red-500 cursor-pointer"
                              onClick={() => {
                                const updatedList = [...field.value];
                                updatedList.splice(index, 1);
                                field.onChange(updatedList);
                              }}
                            />
                          </div>
                        ))}
                      <div className="items-center">
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            field.onChange([...(field.value || []), ""]);
                          }}
                          className="hover:underline focus:outline-none w-full px-10 bg-violet-300"
                        >
                          Add Startup
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={isLoading}>
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

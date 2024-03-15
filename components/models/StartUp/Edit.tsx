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
import { useEffect, useRef } from "react";
import { AlertCircle, Trash } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "StartUp Type is required.",
  }),
  list: z.array(z.string()).min(1, {
    message: "At least one startup must be provided.",
  }),
});

export const EditStartUp = () => {
  const ref = useRef(null);
  const { isOpen, onClose, type, data } = useModal();
  const { token, isTokenExpired } = useSession();
  const router = useRouter();

  const isModalOpen = isOpen && type === "editStartUp";
  const { startup } = data;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: startup?.name,
      list: startup?.list,
    },
  });

  useEffect(() => {
    if (startup?.name) form.setValue("name", startup.name);
    if (startup?.list) form.setValue("list", startup.list);
  }, [startup, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Session Expired");
        handleClose();
      }

      await axios.put(
        "/api/components/startup",
        { ...values, id: startup?.id },
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
            Edit StartUp
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
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
                        disabled
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
                        <ScrollArea
                          className="space-y-8 self-center pb-8  pr-4 m-2 mt-0"
                          style={{ width: "100%", height: 300 }}
                        >
                          <div ref={ref}>
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
                                  <Button
                                    className="w-fit"
                                    variant="ghost"
                                    onClick={() => {
                                      const updatedList = [...field.value];
                                      updatedList.splice(index, 1);
                                      field.onChange(updatedList);
                                    }}
                                  >
                                    <Trash className="ml-2 text-red-500 " />
                                  </Button>
                                </div>
                              ))}
                          </div>
                        </ScrollArea>
                        <div className="items-center">
                          <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick={(e) => {
                              e.preventDefault();
                              field.onChange([...(field.value || []), ""]);
                              if (ref.current) {
                                const element = ref.current;
                                element.scrollTop = element.scrollHeight;
                              }
                            }}
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
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={isLoading}>
                Edit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

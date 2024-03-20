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
import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { SearchableSelect } from "@/components/SearchableSelect";
import { Category, CategoryType } from "@prisma/client";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Image name is required.",
  }),
  category: z.string().min(1, "Category is Required"),
  image: z.string().min(1, {
    message: "Image is required.",
  }),
});

export const EditAuxGallery = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { token, isTokenExpired } = useSession();
  const [categories, setCategories] = useState<Category[]>();

  const router = useRouter();

  const isModalOpen = isOpen && type === "editAuxGallery";
  const { auxGallery } = data;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: auxGallery?.name,
      image: auxGallery?.image,
      category: auxGallery?.categoryId,
    },
  });
  const getCatagories = async () => {
    const response = await axios.get(
      "/api/components/category?type=" + CategoryType.AuxilaryGallery
    );
    setCategories(response.data.response);
    console.log(response)
  };

  useEffect(() => {
    if (auxGallery?.name) form.setValue("name", auxGallery.name);
    if (auxGallery?.image) form.setValue("image", auxGallery.image);
    if (auxGallery?.categoryId)
      form.setValue("category", auxGallery.categoryId);
  }, [auxGallery, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.put(
        "/api/components/auxGallery",
        { ...values, id: auxGallery?.id },
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
  useEffect(() => {
    getCatagories();
  }, [isOpen]);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0  w-full">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Gallery 2 Image
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Category
                    </FormLabel>
                    <FormControl>
                      <SearchableSelect
                        type={CategoryType.AuxilaryGallery}
                        disabled={isLoading}
                        onSelect={field.onChange}
                        defaultValue={
                          categories &&
                          categories.find(
                            (category) => category.id == field.value
                          )
                        }
                        inputOptions={
                          categories &&
                          categories.map((category: Category) => ({
                            label: category.name,
                            value: category.id,
                          }))
                        }
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
      </DialogContent>
    </Dialog>
  );
};

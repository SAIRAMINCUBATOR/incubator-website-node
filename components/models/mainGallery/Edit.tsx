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

export const EditGallery = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { token, isTokenExpired } = useSession();
  const [categories, setCategories] = useState<Category[]>();

  const router = useRouter();

  const isModalOpen = isOpen && type === "editMainGallery";
  const { mainGallery } = data;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: mainGallery?.name,
      image: mainGallery?.image,
      category: mainGallery?.categoryId,
    },
  });
  const getCatagories = async () => {
    const response = await axios.get(
      "/api/components/category?type=" + CategoryType.MainGallery.toString()
    );
    setCategories(response.data.response);
  };

  useEffect(() => {
    if (mainGallery?.name) form.setValue("name", mainGallery.name);
    if (mainGallery?.image) form.setValue("image", mainGallery.image);
    if (mainGallery?.categoryId) form.setValue("category", mainGallery.categoryId);
  }, [mainGallery, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!token && isTokenExpired()) {
        toast("Sesstion Expired");
        handleClose();
      }

      await axios.put(
        "/api/components/mainGallery",
        { ...values, id: mainGallery?.id },
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
  }, []);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden w-full">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Gallery Image
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
                        type={CategoryType.MainGallery}
                        disabled={isLoading}
                        onSelect={field.onChange}
                        defaultValue={categories && categories.find((category)=>category.id == field.value)}
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

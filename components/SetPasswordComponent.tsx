"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { AlertCircle, Loader2, X } from "lucide-react";
import { useSession } from "@/components/providers/context/SessionContext";
import { useEffect, useState } from "react";

const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password is required with minimum of length 8" }),
  confirmPassword: z.string().min(8, {
    message: "Confirm Password is required with minimum of length 8",
  }),
  oldPassword: z.string().min(1, "Old Password is required"),
});

const SetPasswordComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { token, isTokenExpired, isPasswordDefault, changePasswordNotDefault } =
    useSession();
  const [open, setOpen] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);
  const [action, setAction] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      oldPassword: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (values.password === values.confirmPassword) {
        const response = await axios.post(
          "/api/auth/resetPassword",
          { password: values.password },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status) {
          changePasswordNotDefault();
          form.reset();
          router.replace("/");
          setOpen(false);
        }
      } else {
        form.setError("confirmPassword", { message: "Passwords Not Match" });
        toast(
          <>
            <AlertCircle />
            <span>Passwords Not Match</span>
          </>
        );
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast(
          <>
            <AlertCircle />
            {error.response.data}
          </>
        );
      }

      console.error(error);
    }
  };
  useEffect(() => {
    if (action) {
      setOpen(false);
      router.push("/");
    }
  }, [action]);
  const handleClose = () => {
    if (Object.keys(form.formState.dirtyFields).length > 0) {
      setAlertOpen(true);
    } else {
      setOpen(false);
      router.push("/");
    }
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={open}>
      <DialogContent className="lg:w-1/3 md:w-1/2 w-full">
        {!isPasswordDefault && (
          <div
            onClick={handleClose}
            className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
        )}
        <DialogHeader>
          <DialogTitle>Reset Password</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid w-full items-center gap-10 ">
              <FormField
                disabled={isLoading}
                name={"oldPassword"}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={isLoading}
                name={"password"}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Pasword</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={isLoading}
                name={"confirmPassword"}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type={"password"}
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col space-y-1.5 pt-2">
              <Button type="submit" disabled={isLoading}>
                Set Password
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
      <AlertDialog
        open={alertOpen}
        onOpenChange={() => setAlertOpen(!alertOpen)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setAction(true)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  );
};

export default SetPasswordComponent;

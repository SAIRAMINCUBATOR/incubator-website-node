"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { AlertCircle, Loader2 } from "lucide-react";
import { useSession } from "@/components/providers/context/SessionContext";
import { useEffect } from "react";

const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password is required with minimum of length 8" }),
  confirmPassword: z.string().min(8, {
    message: "Confirm Password is required with minimum of length 8",
  }),
});

const SetPasswordComponent = () => {
  console.log("set password compo");

  const { token, isTokenExpired } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (values.password === values.confirmPassword) {
        const response = await axios.post(
          "/api/auth/setPassword",
          { password: values.password },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status) {
          form.reset();
          router.push("/");
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
  // useEffect(() => {
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [token]);
  return (
    <Card className="lg:w-1/3 md:w-2/3 w-full shadow-2xl bg-white rounded-2xl">
      <CardHeader>
        <CardTitle>Set Password</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid w-full items-center gap-10 ">
              <FormField
                disabled={isLoading}
                name={"password"}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pasword</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="*************"
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
                        placeholder="*************"
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
                <Loader2 className="animete-spin mx-3 h-5 w-5" />
                Set Password
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SetPasswordComponent;

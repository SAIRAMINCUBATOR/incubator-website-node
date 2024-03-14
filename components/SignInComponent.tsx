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
import { AlertCircle, Loader2, XOctagon } from "lucide-react";
import { useSession } from "@/components/providers/context/SessionContext";
import { useEffect, useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignInComponent = () => {
  const router = useRouter();

  const { setSession, token } = useSession();
  const [signed, setSigned] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/auth/signin", values);
      setSigned(true);
      setSession(response.data.token, response.data.role);
      form.reset();
      if (response.data.isPasswordDefault) {
        toast(
          <>
            <AlertCircle className="h-4 w-4 mx-2" />
            <span>Reset Password To Continue</span>
          </>
        );
        router.replace("/auth/resetPassword");
      } else {
        router.replace("/");
      }
    } catch (error: any) {
      const errorMessage: String = error.response.data;
      if (errorMessage.includes("User"))
        form.setError("email", { message: error.response.data });
      if (errorMessage.includes("Password"))
        form.setError("password", { message: error.response.data });

      console.error(error);
    }
  };
  useEffect(() => {
    if (token && !signed) {
      router.replace("/");
    }
  }, [token]);
  return (
    <Card className="lg:w-1/3 md:w-2/3 w-full shadow-2xl bg-white/85 rounded-2xl">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid w-full items-center gap-10 ">
              <FormField
                disabled={isLoading}
                name={"email"}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-slate-300 shadow-inner"
                        disabled={isLoading}
                        placeholder="john.doe@email.com"
                        type="email"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-slate-300 shadow-inner"
                        disabled={isLoading}
                        type={"password"}
                        placeholder="*********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col space-y-1.5 pt-2">
              <Button type="submit" disabled={isLoading} variant="primary">
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInComponent;

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
import PasswordInput from "./PasswordInput";

const formSchema = z.object({
  email: z.string().email(),
});

const ForgotPasswordComponent = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/auth/forgotPassword", values);
      
      form.reset();
      
      router.replace("/");

      toast.success("Reset Email Sent");
      
    } catch (error: any) {
     
      console.error(error);
    }
  };

  return (
    <Card className="lg:w-1/3 md:w-2/3 w-full shadow-2xl bg-white/100 rounded-2xl">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
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
              
            </div>

            <div className="flex flex-col space-y-1.5 pt-2">
              <Button type="submit" disabled={isLoading} variant="primary">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordComponent;

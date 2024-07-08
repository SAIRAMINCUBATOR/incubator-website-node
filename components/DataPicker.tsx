"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

// const FormSchema = z.object({
//   date: z.date().nullable().default(new Date()),
// });

interface Props {
  value: Date;
  disabled: boolean;
  onChange: (value: Date) => void;
}

export function DatePicker(props: Props) {
  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // });
  // const [date, setDate] = useState<Date>(props.value);
  // useEffect(() => {
  //   setDate(props.value);
  //   // form.setValue("date", props.value);
  // }, [props.value]);

  // useEffect(() => {
  //   props.onChange(form.getValues("date"));
  // }, [form.watch("date")]);

  return (
    <Popover>
      <PopoverTrigger asChild>
          <Button
            disabled={props.disabled}
            variant={"outline"}
            className={cn(
              " pl-3 text-left font-normal w-full",
              !props.value && "text-muted-foreground"
            )}
          >
            {props.value ? format(props.value, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props.value}
          onSelect={props.onChange}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

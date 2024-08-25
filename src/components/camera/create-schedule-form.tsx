import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DateTimePicker } from "../ui/time-picker";

const formSchema = z.object({
  unit: z.string(),
  camera: z.string(),
  action: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export function ScheduleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: "",
      camera: "",
      action: "",
      startTime: "",
      endTime: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border rounded-lg px-4">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="one">one</SelectItem>
                  <SelectItem value="two">two</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="camera"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border rounded-lg px-4">
                    <SelectValue placeholder="Select camera" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="one">one</SelectItem>
                  <SelectItem value="two">two</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="action"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border rounded-lg px-4">
                    <SelectValue placeholder="Select camera" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="one">one</SelectItem>
                  <SelectItem value="two">two</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem className="w-full">
              <DateTimePicker date={field.value} setDate={field.onChange} dateType="start" />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem className="w-full">
              <DateTimePicker date={field.value} setDate={field.onChange} dateType="end" />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full h-14 rounded-full bg-blue text-[18px]"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

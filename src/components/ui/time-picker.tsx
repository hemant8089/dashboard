"use client";

import * as React from "react";
import { add, format } from "date-fns";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePickerDemo } from "./time-picker-demo";

interface DateTimePickerProps {
  date: string | undefined;
  setDate: (date: string) => void;
  dateType: string;
}

export function DateTimePicker({
  date,
  setDate,
  dateType,
}: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    date ? new Date(date) : undefined
  );

  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) return;
    if (!selectedDate) {
      setSelectedDate(newDay);
      setDate(newDay.toISOString());
      return;
    }
    const diff = newDay.getTime() - selectedDate.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(selectedDate, { days: Math.ceil(diffInDays) });
    setSelectedDate(newDateFull);
    setDate(newDateFull.toISOString());
  };

  const handleTimeChange = (newDate: Date | undefined) => {
    if (newDate) {
      setSelectedDate(newDate);
      setDate(newDate.toISOString());
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal h-14 rounded-lg",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(new Date(date), "PPP HH:mm:ss")
          ) : (
            <span className="text-black">
              Select {dateType === "start" ? "Start Date" : "End Date"}
            </span>
          )}
          <Clock className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto -mb-14">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(d) => handleSelect(d)}
          initialFocus
        />
        <div className="p-3 border-t border-border">
          <TimePickerDemo setDate={handleTimeChange} date={selectedDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

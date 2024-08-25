"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const frameworks = [
  {
    value: "settings",
    label: "Settings",
  },
  {
    value: "profile",
    label: "Profile",
  },
  {
    value: "logout",
    label: "Logout",
  },

];

export function UserNavMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="active"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] rounded-[2rem] md:w-[180px] justify-between p-0 pr-2"
        >
          <div className="flex items-center gap-2">
            <Avatar className="rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>UR</AvatarFallback>
            </Avatar>
            <h1 className="text-sm font-medium">Admin</h1>
          </div>

          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] md:w-[180px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

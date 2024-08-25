import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  export function SelectComments() {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Comments" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="comment1">Comment 1</SelectItem>
            <SelectItem value="comment2">Comment 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
  
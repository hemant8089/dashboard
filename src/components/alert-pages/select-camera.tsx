import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  export function SelectCamera() {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Camera" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="camera1">Camera 1</SelectItem>
            <SelectItem value="camera2">Camera 2</SelectItem>
            <SelectItem value="camera3">Camera 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
  
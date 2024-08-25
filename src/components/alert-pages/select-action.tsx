import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectAction() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an action" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="action1">Action 1</SelectItem>
          <SelectItem value="action2">Action2</SelectItem>
          <SelectItem value="action3">Action3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

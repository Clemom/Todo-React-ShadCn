import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Priority } from "../enums/priorities";

type Props = {
  input: string;
  priority: Priority;
  onInputChange: (value: string) => void;
  onPriorityChange: (value: Priority) => void;
  onAdd: () => void;
};



const TodoForm = ({ input, priority, onInputChange, onPriorityChange, onAdd }: Props) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="flex gap-4">
      <Input
        placeholder="Add tasks..."
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <Select
        value={priority}
        onValueChange={(value) => {
          if (Object.values(Priority).includes(value as Priority)) {
            onPriorityChange(value as Priority);
          }
        }}
      >
        <SelectTrigger className="w-[150px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={Priority.High}>High</SelectItem>
          <SelectItem value={Priority.Medium}>Medium</SelectItem>
          <SelectItem value={Priority.Low}>Low</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={onAdd}>Add</Button>
    </div>
  );
};

export default TodoForm;

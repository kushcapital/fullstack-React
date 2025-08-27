import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input.jsx";
import { Textarea } from "../ui/textarea.jsx";
import { Card, CardHeader, CardContent } from "../ui/card.jsx";
import { Label } from "../ui/label.jsx";
import { DatePickerForm } from "./datePicker.jsx";

export function CreateTaskForm() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold tracking-tight">Create New Task</h2>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Task Title *
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter task title..."
              className="h-11"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your task in detail..."
              rows={4}
              className="resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Status</Label>
              <Select>
                <SelectTrigger className="h-14 px-4 text-base">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="todo" className="text-base py-3">
                      📋 To Do
                    </SelectItem>
                    <SelectItem value="inProgress" className="text-base py-3">
                      ⚡ In Progress
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Priority</Label>
              <Select>
                <SelectTrigger className="h-14 px-4 text-base">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="low" className="text-base py-3">
                      🟢 Low
                    </SelectItem>
                    <SelectItem value="normal" className="text-base py-3">
                      🟡 Normal
                    </SelectItem>
                    <SelectItem value="high" className="text-base py-3">
                      🔴 High
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <DatePickerForm />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:outline-none transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
            >
              Create Task
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

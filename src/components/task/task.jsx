import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUpdateTask } from "@/hooks/useUpdateTask.hook.js";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";

export function Task(props) {
  const { mutate, isSuccess } = useUpdateTask();
  const [progress, setProgress] = useState(false);
  const queryClient = useQueryClient();

  const {
    title = "This is the dafault title",
    description = "This is the dafault description",
    status = "todo",
    priority = "low",
    dueDate = new Date("2025-01-01T12:00:00.0002"),
    id,
  } = props;

  let formattedDate =
    dueDate?.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }) || "No date";

  useEffect(() => {
    if (status === "inProgress") {
      setProgress(true);
    }
  }, [status]);

  function handleProgressChange(value) {
    setProgress(value);
    mutate({
      _id: id,
      status: value ? "inProgress" : "todo",
    });
    queryClient.invalidateQueries({
      queryKey: ["fetchTasks"],
      refetchType: "all",
    });
  }
  function handleTaskCompleted() {
    mutate({ _id: id, status: "completed" });
    queryClient.invalidateQueries({
      queryKey: ["fetchTasks"],
      refetchType: "all", // refetch both active and inactive queries
    });
  }

  return (
    <Card className="w-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border-l-4 border-l-blue-500">
      <CardHeader className="flex flex-row justify-between items-start pb-1">
        <CardTitle className="basis-2/3 text-slate-800 font-semibold text-xl leading-tight">
          {title}
        </CardTitle>
        <div className="flex gap-2">
          <Badge className="bg-slate-700 border-slate-300" variant="outline">
            {formattedDate}
          </Badge>

          {priority === "normal" && (
            <Badge className=" bg-blue-700 border-blue-300" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "high" && (
            <Badge className=" bg-red-700 border-blue-300" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "low" && (
            <Badge className="bg-green-700 border-blue-300" variant="outline">
              {priority}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-1 pb-4">
        <CardDescription className="text-slate-600 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <Switch
            checked={progress}
            onCheckedChange={handleProgressChange}
            id="in-progress"
            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-slate-300 border-2 border-slate-200"
          />
          <Label
            className="text-slate-700 font-medium cursor-pointer select-none"
            htmlFor="in-progress"
          >
            In Progress
          </Label>
        </div>
        <Button
          onClick={handleTaskCompleted}
          variant="outline"
          className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
        >
          Mark Completed
        </Button>
      </CardFooter>
    </Card>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(["todo", "inProgress", "completed"]),
  priority: PropTypes.oneOf(["low", "normal", "high"]),
  dueDate: PropTypes.instanceOf(Date).isRequired,
};

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

export function Task() {
  return (
    <Card className="w-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border-l-4 border-l-blue-500">
      <CardHeader className="flex flex-row justify-between items-start pb-1">
        <CardTitle className="basis-2/3 text-slate-800 font-semibold text-xl leading-tight">
          Title of the task Title of the task Title of the task Title of the
          task Title of the task
        </CardTitle>
        <div className="flex gap-2">
          <Badge
            className="bg-slate-100 text-slate-700 border-slate-300"
            variant="outline"
          >
            1 jan, 2025
          </Badge>
          <Badge
            className="bg-blue-100 text-blue-700 border-blue-300"
            variant="outline"
          >
            normal
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-1 pb-4">
        <CardDescription className="text-slate-600 text-sm leading-relaxed">
          This is the description of the taask This is the description of the
          taaskThis is the description of the taaskThis is the description of
          the taaskThis is the description of the taaskThis is the description
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <Switch
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
          variant="outline"
          className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
        >
          Mark Completed
        </Button>
      </CardFooter>
    </Card>
  );
}

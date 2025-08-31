import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().max(100, {
    message: "The title must be most 100 characters long",
  }),
  dueDate: z.date({
    required_error: "Task due date is required",
  }),
  description: z.string().max(500, {
    message: "The description must be at most 500 characters long",
  }),
  status: z.enum(["todo", "inProgress", "completed"]),
  priority: z.enum(["low", "normal", "high"]),
});

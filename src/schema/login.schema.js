import { email, z } from "zod";

export const LoginSchema = z.object({
    email: z.string().min(1, "Email is required").email({
        message: "invalid email format",
    }),
    password: z.string().min(1, "Password is required"),
});

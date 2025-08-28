import { email, z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

export const SignupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, {
      message: "First name must be at least 3 characters.",
    })
    .max(100, { message: "First name cannot be more than 100 characters" }),
  lastName: z
    .string()
    .optional()
    .max(100, { message: "Last name cannot be more than 100 characters" }),
  email: z.email().string(),
  password: z
    .string()
    .min(8, { message: "Paassword must be at least 8 characters." })
    .RegExp(passwordValidation, {
      message:
        "Password must include one number, one uppercase letter, one lowercase letter, and one special character. ",
    }),
});
